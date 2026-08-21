"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Search, ArrowRight, TrendingUp, BookOpen, X, RotateCcw, Eye, Clock } from "lucide-react"
import { Blog, getImageUrl } from "@/lib/api"

const categories = ["All", "Education", "News", "Industry", "Workshop", "Security"]

export default function BlogListClient({ initialBlogs }: { initialBlogs: Blog[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter blogs based on search and category
  const filteredBlogs = initialBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured)
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
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
                  className="pl-10 pr-10"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer z-10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="flex gap-2 flex-wrap items-center">
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
                {(searchTerm || selectedCategory !== "All") && (
                  <Button
                     variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("All")
                    }}
                    className="text-xs text-gray-500 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-1"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && (
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
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-6 w-6 text-gray-600" />
              <h2 className="font-serif text-2xl font-bold text-gray-900">Latest Articles</h2>
            </div>
            
            {regularBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              featuredBlogs.length === 0 && (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg mb-2">No articles found</p>
                    <p className="text-gray-400 text-sm mb-6">Try adjusting your search or filter criteria</p>
                    {(searchTerm || selectedCategory !== "All") && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("")
                          setSelectedCategory("All")
                        }}
                        className="gap-2"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Reset Filters
                      </Button>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>

    </div>
  )
}

function FeaturedBlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <Link href={`/blog/${blog.id}`} className="block relative overflow-hidden">
        <div className="relative w-full aspect-16/10 sm:aspect-16/9 overflow-hidden">
          <img
            src={blog.image ? getImageUrl(blog.image) : "/placeholder.svg?height=300&width=600"}
            alt={blog.title}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={(e) => {
              if (!e.currentTarget.src.includes('/placeholder.svg')) {
                e.currentTarget.src = '/placeholder.svg?height=300&width=600'
              }
            }}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      <CardContent className="p-8">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
          <Link href={`/blog/${blog.id}`}>
            {blog.title}
          </Link>
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          {blog.read_time && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {blog.read_time}
            </div>
          )}
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {blog.views || 0} views
          </div>
        </div>

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
      <Link href={`/blog/${blog.id}`} className="block relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
        <img
          src={blog.image ? getImageUrl(blog.image) : "/placeholder.svg?height=200&width=400"}
          alt={blog.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            if (!e.currentTarget.src.includes('/placeholder.svg')) {
              e.currentTarget.src = '/placeholder.svg?height=200&width=400'
            }
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
            {blog.read_time && (
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {blog.read_time}
              </div>
            )}
            <div className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {blog.views || 0} views
            </div>
          </div>
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
