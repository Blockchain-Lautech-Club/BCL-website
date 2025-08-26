"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, ExternalLink } from "lucide-react"
import { blogApi, Blog, formatDate } from "@/lib/api"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [liking, setLiking] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch the blog post
        const blogData = await blogApi.getBlog(params.id)
        setBlog(blogData)
        
        // Fetch related blogs (same category)
        const related = await blogApi.getBlogsByCategory(blogData.category, 4)
        setRelatedBlogs(related.filter(b => b.id !== blogData.id).slice(0, 2))
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog')
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [params.id])

  const handleLike = async () => {
    if (!blog || liking) return
    
    try {
      setLiking(true)
      const response = await blogApi.likeBlog(blog.id)
      setBlog({ ...blog, likes: response.likes })
    } catch (error) {
      console.error('Failed to like blog:', error)
    } finally {
      setLiking(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Article</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Article Header */}
        <article className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6">
              <Skeleton className="h-6 w-24 mb-4" />
              <Skeleton className="h-12 w-full mb-2" />
              <Skeleton className="h-12 w-3/4 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-2/3 mb-8" />
            </div>

            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>

            <Skeleton className="h-64 w-full mb-12" />

            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </article>

        <Footer />
      </main>
    )
  }

  if (!blog) {
    notFound()
  }

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="font-serif text-xl font-bold text-gray-900 mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }
      if (paragraph.startsWith('- ')) {
        const listItems = paragraph.split('\n').filter(item => item.startsWith('- '))
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6">
            {listItems.map((item, i) => (
              <li key={i} className="text-gray-700">
                {item.replace('- ', '')}
              </li>
            ))}
          </ul>
        )
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 font-semibold">
            {paragraph.replace(/\*\*/g, '')}
          </p>
        )
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Badge className="mb-4">{blog.category}</Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{blog.excerpt}</p>
            
            {blog.source_url && (
              <div className="mb-6">
                <Button asChild variant="outline" size="sm">
                  <a href={blog.source_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Original Article
                  </a>
                </Button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mb-8 pb-8 border-b">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={blog.author_avatar || "/placeholder.svg"} alt={blog.author} />
                <AvatarFallback>
                  {blog.author
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-gray-900">{blog.author}</div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(blog.created_at)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blog.read_time}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLike}
                disabled={liking}
                className="flex items-center gap-2 bg-transparent"
              >
                <ThumbsUp className={`h-4 w-4 ${liking ? 'animate-pulse' : ''}`} />
                {blog.likes}
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          {blog.image && (
            <div className="mb-12">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none mb-12">
            {formatContent(blog.content)}
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Author Bio */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={blog.author_avatar || "/placeholder.svg"} alt={blog.author} />
                  <AvatarFallback>
                    {blog.author
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">About {blog.author}</h3>
                  <p className="text-gray-600 leading-relaxed">{blog.author_bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedBlogs.length > 0 && (
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Card key={relatedBlog.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {relatedBlog.category}
                      </Badge>
                      <h4 className="font-serif text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4">{relatedBlog.excerpt}</p>
                      <Button asChild variant="outline" size="sm" className="bg-transparent">
                        <Link href={`/blog/${relatedBlog.id}`}>Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  )
}