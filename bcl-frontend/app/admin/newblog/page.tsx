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
  ArrowLeft, Bold, Italic, Underline, List, Link as LinkIcon, RotateCcw,
  Heading2, Heading3, Upload, Trash2, Calendar, Clock, Eye, Edit, Loader2
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
            tags: data.tags.join(", "),
            image: data.image || "",
            featured: data.featured
          })
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

  // Sync editor content only on initial load or edit fetch
  useEffect(() => {
    if (!loading && editorRef.current && !contentInitializedRef.current) {
      editorRef.current.innerHTML = formData.content || ""
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
          // Offset menu to display above selected text
          setMenuPosition({
            x: rect.left + rect.width / 2 + window.scrollX,
            y: rect.top - 48 + window.scrollY,
          })
        } else {
          setMenuPosition(null)
        }
      } catch (e) {
        // Safe fallback in case range is modified out of bound
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
      setFormData(prev => ({ ...prev, content: editorRef.current?.innerHTML || "" }))
    }
  }

  const executeCommand = (command: string, arg: string = "") => {
    document.execCommand(command, false, arg)
    handleEditorInput()
  }

  const addLink = () => {
    const selection = window.getSelection()
    if (!selection) return

    const url = prompt("Enter the link URL (e.g., https://example.com):")
    if (!url) return

    let formattedUrl = url.trim()
    if (!/^https?:\/\//i.test(formattedUrl) && !formattedUrl.startsWith("/")) {
      formattedUrl = `https://${formattedUrl}`
    }

    if (selection.isCollapsed) {
      const text = prompt("Enter the text to display:") || formattedUrl
      executeCommand("insertHTML", `<a href="${formattedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">${text}</a>`)
    } else {
      executeCommand("createLink", formattedUrl)
    }
  }

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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Immediately create local preview URL for instant display in admin
    const objectUrl = URL.createObjectURL(file)
    setPreviewImage(objectUrl)

    setUploadingImage(true)
    try {
      const res = await adminApi.uploadFile(file, "blogs")
      if (res && res.url) {
        setFormData(prev => ({ ...prev, image: res.url }))
      }
    } catch (err) {
      alert("Image upload failed: " + (err instanceof Error ? err.message : err))
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault()

    // Retrieve latest content directly from editor element if available
    const editorContent = editorRef.current ? editorRef.current.innerHTML : formData.content
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
      const blogData = {
        title: formData.title.trim(),
        excerpt: formData.excerpt.trim(),
        content: editorContent,
        author: formData.author.trim(),
        author_bio: "",
        category: formData.category,
        tags: formData.tags ? formData.tags.split(",").map(t => t.trim()).filter(Boolean) : [],
        image: formData.image,
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
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
                <TabsList className="bg-gray-100 p-1 w-full sm:w-auto grid grid-cols-2 sm:flex">
                  <TabsTrigger value="write" className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm">
                    <Edit className="h-4 w-4" /> Write
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm">
                    <Eye className="h-4 w-4" /> Preview
                  </TabsTrigger>
                </TabsList>
              </Tabs>

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
        {activeTab === "write" ? (
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
                      rows={2}
                      required
                    />
                  </div>

                  {/* Rich Text Editor field */}
                  <div className="space-y-2 relative">
                    <Label className="text-sm font-semibold text-gray-700">Content *</Label>
                    <div className="relative border rounded-lg overflow-hidden bg-white">
                      {/* Editor Toolbar */}
                      <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-200">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("bold") }}
                          title="Bold (Ctrl+B)"
                        >
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("italic") }}
                          title="Italic (Ctrl+I)"
                        >
                          <Italic className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onMouseDown={(e) => { e.preventDefault(); executeCommand("underline") }}
                          title="Underline (Ctrl+U)"
                        >
                          <Underline className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 ml-auto"
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
                            onMouseDown={(e) => { e.preventDefault(); executeCommand("underline") }}
                          >
                            <Underline className="h-4 w-4" />
                          </button>
                        </div>
                      )}

                      {/* Editable Text Area */}
                      <div
                        ref={editorRef}
                        contentEditable
                        onInput={handleEditorInput}
                        className="rich-editor min-h-[350px] p-4 sm:p-6 focus:outline-hidden prose prose-blue max-w-none text-gray-800 overflow-y-auto"
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

                  {/* Cover Image Upload Option */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Cover Image *</Label>
                    {uploadingImage ? (
                      <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 h-48">
                        <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                        <span className="text-sm text-gray-500">Uploading image to server...</span>
                      </div>
                    ) : (previewImage || formData.image) ? (
                      <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white">
                        <img 
                          src={previewImage || getImageUrl(formData.image)} 
                          alt="Cover Preview" 
                          className="w-full h-40 object-cover"
                          onError={(e) => {
                            if (previewImage) {
                              e.currentTarget.src = previewImage
                            }
                          }}
                        />
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8 rounded-full"
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
                          Upload cover image from gallery
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
                      <p className="text-[11px] text-gray-400 mb-1 text-center">or paste image URL</p>
                      <Input
                        value={formData.image}
                        onChange={(e) => {
                          setPreviewImage("")
                          setFormData(prev => ({ ...prev, image: e.target.value }))
                        }}
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
        ) : (
          /* Preview Tab (matching actual blog structure exactly) */
          <div className="max-w-4xl mx-auto px-2 sm:px-0">
            <Card className="bg-white shadow-none sm:shadow-md border-0 sm:border border-gray-100 overflow-hidden">
              <CardContent className="p-3 sm:p-12">
                {/* Simulated Back button */}
                <Button variant="ghost" disabled className="mb-6 pl-0 text-gray-400">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                </Button>

                {/* Minimal Header */}
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

                {/* Minimal Author Info */}
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
                      <div className="font-medium text-gray-900">{formData.author}</div>
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

                {/* Cover Image */}
                {(previewImage || formData.image) && (
                  <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={previewImage || getImageUrl(formData.image)}
                      alt={formData.title || "Preview"}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>
                )}

                {/* Article Content */}
                {formData.content ? (
                  <div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-justify"
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
        )}
      </section>

      {/* Editor CSS styling */}
      <style jsx global>{`
        .rich-editor:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          cursor: text;
        }
        .rich-editor h2 {
          font-family: inherit;
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .rich-editor h3 {
          font-family: inherit;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          line-height: 1.25;
        }
        .rich-editor p {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.25rem;
          color: #374151;
        }
        .rich-editor ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .rich-editor li {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 0.5rem;
          color: #374151;
        }
        .rich-editor a {
          color: #2563eb;
          text-decoration: underline;
          font-weight: 500;
        }
        .rich-editor a:hover {
          color: #1d4ed8;
        }
      `}</style>
    </main>
  )
}
