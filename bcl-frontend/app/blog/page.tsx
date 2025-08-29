"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Search, ArrowRight, TrendingUp, BookOpen } from "lucide-react"
import { blogApi, Blog, formatDate } from "@/lib/api"

const categories = ["All", "Education", "News", "Industry", "Workshop", "Security"]

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await blogApi.getBlogs()
        setBlogs(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blogs')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured)
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured)

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Blogs</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Blockchain Club Lautech Blog</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest blockchain insights, club news, and educational content from our community.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory !== category ? "bg-transparent" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Loading State */}
        {loading && (
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-6 w-3/4 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <Skeleton className="h-10 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Posts */}
        {!loading && featuredBlogs.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-primary">Featured Articles</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredBlogs.map((blog) => (
                  <FeaturedBlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        {!loading && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="h-6 w-6 text-gray-600" />
                <h2 className="font-serif text-2xl font-bold text-gray-900">Latest Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
              {filteredBlogs.length === 0 && (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg mb-2">No articles found</p>
                    <p className="text-gray-400 text-sm">Try adjusting your search or filter criteria</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  )
}

function FeaturedBlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={blog.image || "/placeholder.svg?height=300&width=600"}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-8">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
          {blog.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
          {blog.excerpt}
        </p>

        <Button asChild className="w-full group-hover:bg-primary/90 transition-colors duration-200">
          <Link href={`/blog/${blog.id}`} className="flex items-center justify-center gap-2">
            Read Full Article 
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image || "/placeholder.svg?height=200&width=400"}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {blog.excerpt}
          </p>
        </div>

        <Button 
          asChild 
          variant="outline" 
          className="w-full bg-transparent hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
        >
          <Link href={`/blog/${blog.id}`} className="flex items-center justify-center gap-2">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}