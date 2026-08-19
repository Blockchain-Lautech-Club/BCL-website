"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft, Bold, Italic, Underline, Strikethrough, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Quote, Link as LinkIcon, Image as ImageIcon,
  RotateCcw, Heading1, Heading2, Heading3, Upload, Trash2, Calendar, Clock,
  Eye, Edit, Loader2, Type, Sparkles
} from "lucide-react"
import { adminApi, blogApi, Blog, formatDate, getImageUrl } from "@/lib/api"

export default function AddBlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-gray-500 font-medium">Loading form...</p>
        </div>
      </div>
    }>
      <BlogBuilderForm />
    </Suspense>
  )
}

function BlogBuilderForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const blogId = searchParams.get("id")

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authChecking, setAuthChecking] = useState(true)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [activeTab, setActiveTab] = useState("write")

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: "",
    image: "",
    featured: false
  })

  const [previewImage, setPreviewImage] = useState<string>("")
  const contentInitializedRef = useRef<boolean>(false)

  const editorRef = useRef<HTMLDivElement>(null)
  const inlineFileInputRef = useRef<HTMLInputElement>(null)
  const savedSelectionRef = useRef<Range | null>(null)
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null)

  // Auth Check
  useEffect(() => {
    const token = localStorage.getItem("admin_token")
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
    setAuthChecking(false)
  }, [])

  // Fetch Blog if Editing
  useEffect(() => {
    if (blogId && isAuthenticated) {
      setIsEditing(true)
      const fetchBlog = async () => {
        try {
          setLoading(true)
          const data = await blogApi.getBlog(blogId)
          setFormData({
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            author: data.author,
            category: data.category,
            tags: data.tags ? data.tags.join(", ") : "",
            image: data.image || "",
            featured: data.featured
          })
          if (data.image) {
            setPreviewImage(getImageUrl(data.image))
          }
        } catch (err) {
          alert("Failed to load blog post: " + (err instanceof Error ? err.message : err))
          router.push("/admin")
        } finally {
          setLoading(false)
        }
      }
      fetchBlog()
    }
  }, [blogId, isAuthenticated, router])

  // Sync editor content initial load or edit fetch
  useEffect(() => {
    if (!loading && editorRef.current && !contentInitializedRef.current) {
      const initial = formData.content && formData.content.trim() !== "" ? formData.content : "<p><br></p>"
      editorRef.current.innerHTML = initial
      contentInitializedRef.current = true
    }
  }, [loading, formData.content])

  // Selection change handler for floating toolbar
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection()
      if (!selection || selection.isCollapsed) {
        setMenuPosition(null)
        return
      }

      const text = selection.toString().trim()
      if (text.length === 0) {
        setMenuPosition(null)
        return
      }

      try {
        const range = selection.getRangeAt(0)
        const editorEl = editorRef.current
        if (editorEl && editorEl.contains(range.commonAncestorContainer)) {
          const rect = range.getBoundingClientRect()
          setMenuPosition({
            x: rect.left + rect.width / 2 + window.scrollX,
            y: rect.top - 48 + window.scrollY,
          })
        } else {
          setMenuPosition(null)
        }
      } catch (e) {
        setMenuPosition(null)
      }
    }

    document.addEventListener("selectionchange", handleSelectionChange)
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange)
    }
  }, [])

  const handleEditorInput = () => {
    if (editorRef.current) {
      const rawHtml = editorRef.current.innerHTML
      const cleanContent = cleanContentForSave(rawHtml)
      setFormData(prev => ({ ...prev, content: cleanContent }))
    }
  }

  const saveSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      savedSelectionRef.current = selection.getRangeAt(0).cloneRange()
    }
  }

  const restoreSelection = () => {
    if (savedSelectionRef.current && editorRef.current) {
      const selection = window.getSelection()
      if (selection) {
        selection.removeAllRanges()
        selection.addRange(savedSelectionRef.current)
      }
    }
  }

  const executeCommand = (command: string, arg: string = "") => {
    if (editorRef.current) {
      editorRef.current.focus()
    }
    document.execCommand(command, false, arg)
    handleEditorInput()
  }

  // Handle Tab Switch without unmounting editor
  const handleTabSwitch = (newTab: string) => {
    if (newTab === "preview") {
      // Force sync content before previewing
      handleEditorInput()
    } else if (newTab === "write") {
      // Make sure editor div content is up to date
      if (editorRef.current && editorRef.current.innerHTML !== formData.content) {
        editorRef.current.innerHTML = formData.content || ""
      }
    }
    setActiveTab(newTab)
  }

  // Insert Inline Link
  const addLink = () => {
    if (editorRef.current) {
      editorRef.current.focus()
    }
    saveSelection()

    const selection = window.getSelection()
    const selectedText = selection ? selection.toString().trim() : ""

    const url = prompt("Enter the link URL (e.g., https://example.com):")
    if (!url) return

    let formattedUrl = url.trim()
    if (!/^https?:\/\//i.test(formattedUrl) && !formattedUrl.startsWith("/")) {
      formattedUrl = `https://${formattedUrl}`
    }

    restoreSelection()

    if (!selectedText) {
      const text = prompt("Enter text to display for link:", formattedUrl) || formattedUrl
      executeCommand("insertHTML", `<a href="${formattedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">${text}</a>`)
    } else {
      executeCommand("createLink", formattedUrl)
    }
  }

  // Canvas Image Compression Helper
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        const img = new Image()
        img.src = event.target?.result as string
        img.onload = () => {
          const canvas = document.createElement("canvas")
          const MAX_WIDTH = 1200
          const MAX_HEIGHT = 1200
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width)
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height)
              height = MAX_HEIGHT
            }
          }

          canvas.width = width
          canvas.height = height

          const ctx = canvas.getContext("2d")
          if (!ctx) return resolve(event.target?.result as string)
          ctx.drawImage(img, 0, 0, width, height)
          resolve(canvas.toDataURL("image/jpeg", 0.75))
        }
        img.onerror = () => resolve(event.target?.result as string)
      }
      reader.onerror = () => resolve("")
    })
  }

  // Cover Image Upload Handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    try {
      const compressedBase64 = await compressImage(file)
      setPreviewImage(compressedBase64)

      try {
        const res = await adminApi.uploadFile(file, "blogs")
        if (res && res.url) {
          const fullUrl = getImageUrl(res.url)
          setFormData(prev => ({ ...prev, image: fullUrl }))
        } else {
          setFormData(prev => ({ ...prev, image: compressedBase64 }))
        }
      } catch (uploadError) {
        console.warn("Server upload failed, using compressed base64 fallback:", uploadError)
        setFormData(prev => ({ ...prev, image: compressedBase64 }))
      }
    } catch (err) {
      alert("Image processing failed: " + (err instanceof Error ? err.message : err))
    } finally {
      setUploadingImage(false)
    }
  }

  // Inline Image Insertion Handler (Inside Article Body)
  const triggerInlineImageChoice = () => {
    saveSelection()
    const choice = prompt("Type '1' to upload an image file from your device, or paste Image URL directly:")
    if (!choice) return

    const trimmed = choice.trim()
    if (trimmed === "1") {
      inlineFileInputRef.current?.click()
    } else if (trimmed.length > 0) {
      let imageUrl = trimmed
      if (!/^https?:\/\//i.test(imageUrl) && !imageUrl.startsWith("data:") && !imageUrl.startsWith("/")) {
        imageUrl = `https://${imageUrl}`
      }
      insertInlineImageHtml(imageUrl)
    }
  }

  const handleInlineFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      // 1. Instantly compress file to Base64 data URL for guaranteed display
      const compressedBase64 = await compressImage(file)
      let finalUrl = compressedBase64

      // 2. Attempt backend cloud upload
      try {
        const res = await adminApi.uploadFile(file, "blogs")
        if (res && res.url) {
          finalUrl = getImageUrl(res.url)
        }
      } catch (uploadErr) {
        console.warn("Inline image cloud upload failed, using compressed base64 fallback:", uploadErr)
      }

      insertInlineImageHtml(finalUrl)
    } catch (err) {
      console.error("Inline image processing error:", err)
      alert("Failed to process inline image")
    } finally {
      if (inlineFileInputRef.current) inlineFileInputRef.current.value = ""
    }
  }

  const cleanContentForSave = (html: string): string => {
    if (!html) return ""
    try {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")
      const removeButtons = doc.querySelectorAll(".remove-inline-img-btn")
      removeButtons.forEach(btn => btn.remove())
      return doc.body.innerHTML
    } catch {
      return html.replace(/<button[^>]*class="[^"]*remove-inline-img-btn[^"]*"[^>]*>[\s\S]*?<\/button>/gi, "")
    }
  }

  const insertInlineImageHtml = (url: string) => {
    if (!editorRef.current) return

    const fullUrl = getImageUrl(url)
    editorRef.current.focus()

    const figure = document.createElement("figure")
    figure.className = "inline-image-wrapper relative my-6 text-center group font-sans"

    const imageContainer = document.createElement("div")
    imageContainer.className = "relative inline-block max-w-full"

    const img = document.createElement("img")
    img.src = fullUrl
    img.alt = "Inline Article Image"
    img.contentEditable = "false"
    img.className = "max-w-full h-auto rounded-lg shadow-md mx-auto block my-2 max-h-[500px] object-contain border border-gray-100"
    img.onerror = () => {
      console.warn("Inline image failed to load:", fullUrl)
    }

    // Sleek circular '✕' button in top-right corner of image
    const removeBtn = document.createElement("button")
    removeBtn.type = "button"
    removeBtn.contentEditable = "false"
    removeBtn.className = "remove-inline-img-btn absolute top-2 right-2 w-7 h-7 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-md transition-all flex items-center justify-center text-xs font-bold cursor-pointer z-20"
    removeBtn.title = "Remove image"
    removeBtn.innerText = "✕"
    
    removeBtn.onclick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      figure.remove()
      handleEditorInput()
    }

    const caption = document.createElement("figcaption")
    caption.className = "text-xs text-gray-500 mt-1.5 italic font-sans outline-none focus:ring-1 focus:ring-blue-300 rounded px-2 py-0.5 inline-block cursor-text"
    caption.contentEditable = "true"
    caption.innerText = "Optional image caption..."

    caption.onfocus = () => {
      if (caption.innerText === "Optional image caption...") {
        caption.innerText = ""
      }
    }

    imageContainer.appendChild(img)
    imageContainer.appendChild(removeBtn)
    figure.appendChild(imageContainer)
    figure.appendChild(caption)

    const pAfter = document.createElement("p")
    pAfter.innerHTML = "<br>"

    const selection = window.getSelection()
    if (
      selection &&
      selection.rangeCount > 0 &&
      editorRef.current.contains(selection.getRangeAt(0).commonAncestorContainer)
    ) {
      const range = selection.getRangeAt(0)
      range.deleteContents()
      range.insertNode(pAfter)
      range.insertNode(figure)

      try {
        const newRange = document.createRange()
        newRange.setStart(pAfter, 0)
        newRange.collapse(true)
        selection.removeAllRanges()
        selection.addRange(newRange)
      } catch {}
    } else {
      editorRef.current.appendChild(figure)
      editorRef.current.appendChild(pAfter)
    }

    handleEditorInput()
  }

  // Event listener on editor for removing loaded images
  useEffect(() => {
    const editor = editorRef.current
    if (!editor) return

    const handleEditorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const removeBtn = target.closest(".remove-inline-img-btn")
      if (removeBtn) {
        e.preventDefault()
        e.stopPropagation()
        const figure = removeBtn.closest("figure")
        if (figure) {
          figure.remove()
          handleEditorInput()
        }
      }
    }

    editor.addEventListener("click", handleEditorClick)
    return () => {
      editor.removeEventListener("click", handleEditorClick)
    }
  }, [])

  // Format / Font Size block handler with Blockquote unwrapping support
  const handleFormatChange = (val: string) => {
    if (!val) return
    if (editorRef.current) {
      editorRef.current.focus()
    }

    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      const anchorNode = selection.anchorNode
      const element = anchorNode?.nodeType === 3 ? anchorNode.parentElement : (anchorNode as HTMLElement)
      const blockquote = element?.closest("blockquote")

      if (blockquote && val !== "blockquote") {
        // Replace blockquote with paragraph or target header element
        const targetTag = (val === "h1" || val === "h2" || val === "h3" || val === "h4") ? val : "p"
        const newEl = document.createElement(targetTag)
        newEl.innerHTML = blockquote.innerHTML
        if (blockquote.parentNode) {
          blockquote.parentNode.replaceChild(newEl, blockquote)
        }
        handleEditorInput()
        if (val.startsWith("size-")) {
          const fontSizeMap: Record<string, string> = {
            "size-14": "2",
            "size-16": "3",
            "size-20": "4",
            "size-24": "5",
            "size-32": "6",
          }
          executeCommand("fontSize", fontSizeMap[val] || "3")
        }
        return
      }
    }

    if (val === "p" || val === "h1" || val === "h2" || val === "h3" || val === "h4" || val === "blockquote") {
      executeCommand("formatBlock", `<${val}>`)
    } else if (val.startsWith("size-")) {
      const fontSizeMap: Record<string, string> = {
        "size-14": "2",
        "size-16": "3",
        "size-20": "4",
        "size-24": "5",
        "size-32": "6",
      }
      const sizeVal = fontSizeMap[val] || "3"
      executeCommand("fontSize", sizeVal)
    }
  }

  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault()

    const rawEditorContent = editorRef.current ? editorRef.current.innerHTML : formData.content
    const editorContent = cleanContentForSave(rawEditorContent)

    const isContentEmpty = !editorContent || 
      editorContent.trim() === "" || 
      editorContent.trim() === "<p><br></p>" || 
      editorContent.trim() === "<div><br></div>"

    if (!formData.title.trim()) return alert("Title is required")
    if (isContentEmpty) return alert("Content is required")
    if (!formData.author.trim()) return alert("Author name is required")
    if (!formData.category.trim()) return alert("Category is required")

    setSaving(true)
    try {
      // Prevent PostgreSQL 22001 (value too long for type character varying(500))
      let safeExcerpt = formData.excerpt.trim()
      if (safeExcerpt.length > 450) {
        safeExcerpt = safeExcerpt.slice(0, 447) + "..."
      }

      let safeImageUrl = formData.image || previewImage || ""
      if (safeImageUrl.length > 450) {
        // If image is a Base64 data URL (>450 chars), fallback to static placeholder to satisfy db VARCHAR(500) limit
        safeImageUrl = "/placeholder.svg"
      }

      const blogData = {
        title: formData.title.trim(),
        excerpt: safeExcerpt,
        content: editorContent,
        author: formData.author.trim(),
        author_bio: "",
        category: formData.category,
        tags: formData.tags ? formData.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
        image: safeImageUrl,
        featured: formData.featured
      }

      if (isEditing && blogId) {
        await adminApi.updateBlog(blogId, blogData)
        alert("Blog updated successfully!")
      } else {
        await adminApi.createBlog(blogData as any)
        alert("Blog created successfully!")
      }
      router.push("/admin")
    } catch (err) {
      console.error("Error saving blog:", err)
      const errorMsg = err instanceof Error ? err.message : String(err)
      alert("Failed to save blog: " + errorMsg)
    } finally {
      setSaving(false)
    }
  }

  if (authChecking || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-gray-500 font-medium">Please wait...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-red-600">Access Denied</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">You must be logged in as an administrator to access this page.</p>
            <Button className="w-full" onClick={() => router.push("/admin")}>
              Go to Admin Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hidden File Input for Inline Images */}
      <input
        type="file"
        ref={inlineFileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleInlineFileInput}
      />

      {/* Header Panel */}
      <section className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/admin")}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="font-serif text-2xl font-bold text-gray-900">
                  {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
                </h1>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <div className="bg-gray-100 p-1 rounded-lg flex gap-1 w-full sm:w-auto">
                <Button
                  type="button"
                  variant={activeTab === "write" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleTabSwitch("write")}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm"
                >
                  <Edit className="h-4 w-4" /> Write
                </Button>
                <Button
                  type="button"
                  variant={activeTab === "preview" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleTabSwitch("preview")}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm"
                >
                  <Eye className="h-4 w-4" /> Preview
                </Button>
              </div>

              <Separator orientation="vertical" className="h-8 hidden sm:block" />

              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" onClick={() => router.push("/admin")} disabled={saving} className="flex-1 sm:flex-none">
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex-1 sm:flex-none">
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Saving...
                    </>
                  ) : (
                    isEditing ? "Save Changes" : "Publish Blog"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-4 sm:py-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* WRITE TAB FORM (Kept mounted in DOM, hidden when preview is active) */}
        <div className={activeTab === "write" ? "block" : "hidden"}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Editor & Core Fields */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <Card className="border-0 sm:border shadow-none sm:shadow-sm bg-transparent sm:bg-card">
                <CardContent className="px-3 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
                  {/* Title field */}
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-sm font-semibold text-gray-700">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="text-lg font-medium"
                      placeholder="Enter article title..."
                      required
                    />
                  </div>

                  {/* Excerpt field */}
                  <div className="space-y-2">
                    <Label htmlFor="excerpt" className="text-sm font-semibold text-gray-700">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Short overview or summary of the blog post..."
                      rows={2}
                      required
                    />
                  </div>

                  {/* Rich Text Editor field */}
                  <div className="space-y-2 relative">
                    <Label className="text-sm font-semibold text-gray-700">Article Content *</Label>
                    <div className="relative border rounded-lg bg-white shadow-xs">
                      
                      {/* Sticky Comprehensive Editor Toolbar */}
                      <div className="sticky top-[65px] sm:top-[72px] z-30 flex flex-wrap items-center gap-1.5 p-2.5 bg-white border-b border-gray-200 text-gray-700 shadow-sm rounded-t-lg">
                        
                        {/* Font Size & Heading Dropdown */}
                        <div className="w-36">
                          <Select onValueChange={handleFormatChange}>
                            <SelectTrigger className="h-8 text-xs bg-white">
                              <SelectValue placeholder="Format / Size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="p">Paragraph</SelectItem>
                              <SelectItem value="h1">H1</SelectItem>
                              <SelectItem value="h2">H2</SelectItem>
                              <SelectItem value="h3">H3</SelectItem>
                              <SelectItem value="h4">H4</SelectItem>
                              <SelectItem value="blockquote">Quote Block</SelectItem>
                              <SelectItem value="size-14">14px</SelectItem>
                              <SelectItem value="size-16">16px</SelectItem>
                              <SelectItem value="size-20">20px</SelectItem>
                              <SelectItem value="size-24">24px</SelectItem>
                              <SelectItem value="size-32">32px</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Separator orientation="vertical" className="h-5 mx-0.5" />

                        {/* Text Styling */}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("bold") }}
                          title="Bold (Ctrl+B)"
                        >
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("italic") }}
                          title="Italic (Ctrl+I)"
                        >
                          <Italic className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("underline") }}
                          title="Underline (Ctrl+U)"
                        >
                          <Underline className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("strikeThrough") }}
                          title="Strikethrough"
                        >
                          <Strikethrough className="h-4 w-4" />
                        </Button>

                        <Separator orientation="vertical" className="h-5 mx-0.5" />

                        {/* Lists */}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("insertUnorderedList") }}
                          title="Bulleted List"
                        >
                          <List className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("insertOrderedList") }}
                          title="Numbered List"
                        >
                          <ListOrdered className="h-4 w-4" />
                        </Button>

                        <Separator orientation="vertical" className="h-5 mx-0.5" />

                        {/* Alignment */}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("justifyLeft") }}
                          title="Align Left"
                        >
                          <AlignLeft className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("justifyCenter") }}
                          title="Align Center"
                        >
                          <AlignCenter className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("justifyRight") }}
                          title="Align Right"
                        >
                          <AlignRight className="h-4 w-4" />
                        </Button>

                        <Separator orientation="vertical" className="h-5 mx-0.5" />

                        {/* Link & Image Insertion Tools */}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 flex items-center gap-1 hover:bg-blue-50 text-blue-700 text-xs font-medium"
                          onMouseDown={(e) => { e.preventDefault(); addLink() }}
                          title="Insert Link in Text"
                        >
                          <LinkIcon className="h-4 w-4 text-blue-600" />
                          Link
                        </Button>

                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 flex items-center gap-1 hover:bg-blue-50 text-blue-700 text-xs font-medium"
                          onMouseDown={(e) => { e.preventDefault(); triggerInlineImageChoice() }}
                          title="Insert Image inside Text Body"
                        >
                          <ImageIcon className="h-4 w-4 text-blue-600" />
                          Inline Image
                        </Button>

                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 ml-auto text-gray-500 hover:bg-gray-200"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("removeFormat") }}
                          title="Clear Formatting"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Floating Highlight Toolbar */}
                      {menuPosition && (
                        <div
                          className="absolute z-50 flex items-center gap-1 bg-gray-900 text-white rounded-md shadow-lg px-2 py-1.5 border border-gray-800 transition-all"
                          style={{
                            top: `${menuPosition.y - (editorRef.current?.getBoundingClientRect().top || 0) + (editorRef.current?.scrollTop || 0) - 2}px`,
                            left: `${menuPosition.x - (editorRef.current?.getBoundingClientRect().left || 0)}px`,
                            transform: "translate(-50%, -100%)",
                          }}
                        >
                          <button
                            type="button"
                            className="p-1 hover:bg-gray-800 rounded transition-colors text-white"
                            onMouseDown={(e) => { e.preventDefault(); executeCommand("bold") }}
                          >
                            <Bold className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            className="p-1 hover:bg-gray-800 rounded transition-colors text-white"
                            onMouseDown={(e) => { e.preventDefault(); executeCommand("italic") }}
                          >
                            <Italic className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            className="p-1 hover:bg-gray-800 rounded transition-colors text-white"
                            onMouseDown={(e) => { e.preventDefault(); addLink() }}
                          >
                            <LinkIcon className="h-4 w-4" />
                          </button>
                        </div>
                      )}

                      {/* Editable Text Area */}
                      <div
                        ref={editorRef}
                        contentEditable={true}
                        onInput={handleEditorInput}
                        onClick={() => {
                          if (editorRef.current) {
                            editorRef.current.focus()
                            if (!editorRef.current.innerHTML || editorRef.current.innerHTML.trim() === "") {
                              editorRef.current.innerHTML = "<p><br></p>"
                            }
                          }
                        }}
                        className="rich-editor min-h-[380px] p-4 sm:p-6 focus:outline-none prose prose-blue max-w-none text-gray-800 cursor-text rounded-b-lg"
                        style={{ outline: "none" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Meta Info */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="border-0 sm:border shadow-none sm:shadow-sm bg-transparent sm:bg-card">
                <CardHeader className="px-3 sm:px-6 py-4 sm:py-4 pb-2 sm:pb-2">
                  <CardTitle className="text-base font-semibold">Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6 pb-6 space-y-4 sm:space-y-6">
                  {/* Category Selector */}
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-medium">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(val) => setFormData(prev => ({ ...prev, category: val }))}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Education">Education</SelectItem>
                        <SelectItem value="News">News</SelectItem>
                        <SelectItem value="Industry">Industry</SelectItem>
                        <SelectItem value="Workshop">Workshop</SelectItem>
                        <SelectItem value="Security">Security</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Author input */}
                  <div className="space-y-2">
                    <Label htmlFor="author" className="text-sm font-medium">Author Name *</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  {/* Tags input */}
                  <div className="space-y-2">
                    <Label htmlFor="tags" className="text-sm font-medium">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                      placeholder="e.g. Solidity, Ethereum, Security"
                    />
                  </div>

                  {/* Featured Cover Image Upload Option */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Featured Cover Image *</Label>
                    {uploadingImage ? (
                      <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 h-48">
                        <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                        <span className="text-sm text-gray-500">Processing cover image...</span>
                      </div>
                    ) : (previewImage || formData.image) ? (
                      <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white">
                        <img 
                          src={previewImage || getImageUrl(formData.image)} 
                          alt="Featured Cover Preview" 
                          className="w-full h-44 object-cover"
                          onError={(e) => {
                            if (previewImage && e.currentTarget.src !== previewImage) {
                              e.currentTarget.src = previewImage
                            }
                          }}
                        />
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8 rounded-full shadow-md"
                            onClick={() => {
                              setPreviewImage("")
                              setFormData(prev => ({ ...prev, image: "" }))
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-blue-50/20 transition-all h-40">
                        <Upload className="h-7 w-7 text-gray-400 mb-2" />
                        <span className="text-xs font-semibold text-gray-600 text-center">
                          Upload featured cover image
                        </span>
                        <span className="text-[10px] text-gray-400 mt-1">PNG, JPG, WEBP formats</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    )}

                    {/* Secondary URL Paste support */}
                    <div className="pt-2">
                      <p className="text-[11px] text-gray-400 mb-1 text-center">or paste cover image URL</p>
                      <Input
                        value={formData.image}
                        onChange={(e) => {
                          const val = e.target.value
                          setPreviewImage(val)
                          setFormData(prev => ({ ...prev, image: val }))
                        }}
                        placeholder="https://example.com/image.jpg"
                        className="text-xs h-8"
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Featured Article checkbox */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(val) => setFormData(prev => ({ ...prev, featured: val as boolean }))}
                    />
                    <Label htmlFor="featured" className="text-sm font-semibold cursor-pointer">
                      Mark as Featured Article
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>

        {/* PREVIEW TAB CONTENT (Kept mounted in DOM, hidden when write is active) */}
        <div className={activeTab === "preview" ? "block" : "hidden"}>
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            <Card className="bg-white shadow-none sm:shadow-md border-0 sm:border border-gray-100 overflow-hidden">
              <CardContent className="p-4 sm:p-12">
                {/* Simulated Back button */}
                <Button variant="ghost" disabled className="mb-6 pl-0 text-gray-400">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                </Button>

                {/* Article Header */}
                <header className="mb-8">
                  <div className="flex gap-2 mb-4">
                    {formData.category && <Badge variant="secondary">{formData.category}</Badge>}
                    {formData.featured && <Badge className="bg-primary text-white">Featured</Badge>}
                  </div>

                  <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {formData.title || "Untitled Blog Post"}
                  </h1>

                  {formData.excerpt && (
                    <p className="text-xl text-gray-600 leading-relaxed mb-6 font-light">
                      {formData.excerpt}
                    </p>
                  )}
                </header>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-800 font-semibold">
                        {(formData.author || "A")
                          .split(" ")
                          .map(n => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900">{formData.author || "Author"}</div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(new Date().toISOString())}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          1 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Cover Image Display */}
                {(previewImage || formData.image) && (
                  <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={previewImage || getImageUrl(formData.image)}
                      alt={formData.title || "Preview"}
                      className="w-full h-64 md:h-96 object-cover"
                      onError={(e) => {
                        if (previewImage && e.currentTarget.src !== previewImage) {
                          e.currentTarget.src = previewImage
                        }
                      }}
                    />
                  </div>
                )}

                {/* Article Rich Content Preview */}
                {formData.content ? (
                  <div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-justify rich-content-view"
                    dangerouslySetInnerHTML={{ __html: formData.content }}
                  />
                ) : (
                  <p className="text-gray-400 italic text-center py-12">No content written yet.</p>
                )}

                {/* Tags list */}
                {formData.tags && (
                  <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
                    {formData.tags.split(",").map(t => t.trim()).filter(Boolean).map(tag => (
                      <Badge key={tag} variant="outline" className="text-gray-600">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

      </section>

      {/* Rich Editor & Preview Global CSS */}
      <style jsx global>{`
        .rich-editor:empty:before {
          content: "Start typing your article here...";
          color: #9ca3af;
          cursor: text;
        }
        .rich-editor h1, .rich-content-view h1 {
          font-family: inherit;
          font-size: 2.25rem;
          font-weight: 800;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .rich-editor h2, .rich-content-view h2 {
          font-family: inherit;
          font-size: 1.75rem;
          font-weight: 700;
          color: #111827;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .rich-editor h3, .rich-content-view h3 {
          font-family: inherit;
          font-size: 1.35rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .rich-editor p, .rich-content-view p {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.25rem;
          color: #374151;
        }
        .rich-editor ul, .rich-content-view ul {
          list-style-type: disc;
          padding-left: 1.75rem;
          margin-bottom: 1.25rem;
        }
        .rich-editor ol, .rich-content-view ol {
          list-style-type: decimal;
          padding-left: 1.75rem;
          margin-bottom: 1.25rem;
        }
        .rich-editor li, .rich-content-view li {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 0.5rem;
          color: #374151;
        }
        .rich-editor a, .rich-content-view a {
          color: #2563eb;
          text-decoration: underline;
          font-weight: 500;
        }
        .rich-editor a:hover, .rich-content-view a:hover {
          color: #1d4ed8;
        }
        .rich-editor img, .rich-content-view img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.25rem auto;
          display: block;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .rich-editor figure, .rich-content-view figure {
          margin: 1.5rem 0;
          text-align: center;
        }
        .rich-editor figcaption, .rich-content-view figcaption {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.5rem;
          font-style: italic;
        }
        .rich-editor blockquote, .rich-content-view blockquote {
          border-left: 4px solid #2563eb;
          padding-left: 1rem;
          margin: 1.25rem 0;
          color: #4b5563;
          font-style: italic;
          background-color: #f8fafc;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border-radius: 0 0.375rem 0.375rem 0;
        }
      `}</style>
    </main>
  )
}
