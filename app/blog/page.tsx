"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Smart Contracts: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of smart contracts, how they work, and why they're revolutionizing digital agreements.",
    content:
      "Smart contracts are self-executing contracts with the terms of the agreement directly written into code...",
    author: "Dr. Adebayo Ogundimu",
    authorAvatar: "/dr-ogundimu.png",
    date: "2024-03-10",
    category: "Education",
    tags: ["Smart Contracts", "Ethereum", "Solidity", "Beginner"],
    readTime: "8 min read",
    image: "/blog-smart-contracts.png",
    featured: true,
  },
  {
    id: 2,
    title: "LAUTECH Blockchain Club Wins National Hackathon",
    excerpt: "Our team secured first place at the Nigeria Blockchain Hackathon 2024 with an innovative DeFi solution.",
    content: "We're thrilled to announce that our team from LAUTECH Blockchain Club has won the prestigious...",
    author: "Fatima Abdullahi",
    authorAvatar: "/member-fatima.png",
    date: "2024-03-08",
    category: "News",
    tags: ["Hackathon", "DeFi", "Achievement", "Competition"],
    readTime: "5 min read",
    image: "/blog-hackathon-win.png",
    featured: true,
  },
  {
    id: 3,
    title: "The Future of Blockchain in African Finance",
    excerpt:
      "Exploring how blockchain technology is transforming financial services across Africa and creating new opportunities.",
    content: "Africa is experiencing a blockchain revolution, with countries across the continent embracing...",
    author: "Chinedu Okwu",
    authorAvatar: "/member-chinedu.png",
    date: "2024-03-05",
    category: "Industry",
    tags: ["Africa", "Finance", "DeFi", "Innovation"],
    readTime: "12 min read",
    image: "/blog-africa-finance.png",
    featured: false,
  },
  {
    id: 4,
    title: "Building Your First DApp: Workshop Recap",
    excerpt: "Key takeaways from our recent decentralized application development workshop for beginners.",
    content: "Last week, we hosted an intensive workshop on building decentralized applications (DApps)...",
    author: "Workshop Team",
    authorAvatar: "/workshop-team.png",
    date: "2024-03-03",
    category: "Workshop",
    tags: ["DApp", "Development", "Workshop", "React"],
    readTime: "10 min read",
    image: "/blog-dapp-workshop.png",
    featured: false,
  },
  {
    id: 5,
    title: "NFTs Beyond Art: Real-World Use Cases",
    excerpt:
      "Discover how NFTs are being used beyond digital art in gaming, identity verification, and supply chain management.",
    content: "While NFTs gained popularity through digital art, their applications extend far beyond...",
    author: "Dr. Adebayo Ogundimu",
    authorAvatar: "/dr-ogundimu.png",
    date: "2024-02-28",
    category: "Education",
    tags: ["NFTs", "Use Cases", "Gaming", "Identity"],
    readTime: "7 min read",
    image: "/blog-nft-usecases.png",
    featured: false,
  },
  {
    id: 6,
    title: "Cryptocurrency Security: Protecting Your Digital Assets",
    excerpt: "Essential security practices every crypto user should know to protect their digital assets from threats.",
    content: "As cryptocurrency adoption grows, so does the importance of understanding security best practices...",
    author: "Security Team",
    authorAvatar: "/security-team.png",
    date: "2024-02-25",
    category: "Security",
    tags: ["Security", "Cryptocurrency", "Wallet", "Best Practices"],
    readTime: "9 min read",
    image: "/blog-crypto-security.png",
    featured: false,
  },
]

const categories = ["All", "Education", "News", "Industry", "Workshop", "Security"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Blockchain Blog</h1>
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-2xl font-bold text-primary">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-primary mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles match your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FeaturedPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-64">
        <img
          src={post.image || "/placeholder.svg?height=300&width=600"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary">{post.category}</Badge>
        </div>
      </div>
      <CardContent className="p-8">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
              <AvatarFallback>
                {post.author
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-gray-900">{post.author}</div>
              <div className="text-sm text-gray-600">{post.readTime}</div>
            </div>
          </div>
          <div className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
              {tag}
            </Badge>
          ))}
        </div>

        <Button asChild className="w-full">
          <Link href={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
            Read Full Article <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function BlogPostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={post.image || "/placeholder.svg?height=200&width=400"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {post.category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>

        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
          <span>•</span>
          <Calendar className="h-4 w-4" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 2).map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
