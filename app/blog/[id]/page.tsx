"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react"
import { use } from "react"

// Mock blog data - in a real app, this would come from an API
const blogData: { [key: string]: any } = {
  "1": {
    id: 1,
    title: "Understanding Smart Contracts: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of smart contracts, how they work, and why they're revolutionizing digital agreements.",
    content: `Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks, most commonly Ethereum, and automatically execute when predetermined conditions are met.

## What Are Smart Contracts?

A smart contract is a computer program that automatically executes, controls, or documents legally relevant events according to the terms of a contract or agreement. The term "smart contract" was first coined by computer scientist Nick Szabo in 1994, long before Bitcoin was created.

Think of a smart contract as a digital vending machine. You put in the required input (like cryptocurrency), and if the conditions are met, you automatically get the desired output (like a digital asset or service). No intermediary is needed.

## How Do Smart Contracts Work?

Smart contracts work on a simple "if-then" logic:
- **If** certain conditions are met
- **Then** execute specific actions

For example:
- If Alice sends 1 ETH to the contract
- Then transfer ownership of the digital artwork to Alice

## Key Benefits

### 1. Trustless Execution
Smart contracts eliminate the need for intermediaries. The code itself ensures that agreements are executed exactly as programmed.

### 2. Transparency
All smart contract code is visible on the blockchain, allowing anyone to verify how it works.

### 3. Immutability
Once deployed, smart contracts cannot be changed, ensuring that the rules remain consistent.

### 4. Cost Efficiency
By removing intermediaries, smart contracts can significantly reduce transaction costs.

## Real-World Applications

Smart contracts are being used in various industries:

- **DeFi (Decentralized Finance)**: Automated lending, borrowing, and trading
- **Insurance**: Automatic claim processing based on verifiable data
- **Supply Chain**: Tracking goods from manufacturer to consumer
- **Real Estate**: Automated property transfers and rental agreements

## Getting Started with Smart Contract Development

If you're interested in learning smart contract development, here's a roadmap:

1. **Learn Solidity**: The most popular programming language for Ethereum smart contracts
2. **Understand Blockchain Basics**: Learn how blockchains work
3. **Practice with Remix IDE**: A browser-based development environment
4. **Deploy on Test Networks**: Test your contracts before going live
5. **Security Best Practices**: Learn common vulnerabilities and how to avoid them

## Conclusion

Smart contracts represent a fundamental shift in how we think about agreements and automation. As blockchain technology continues to mature, we can expect to see smart contracts playing an increasingly important role in various aspects of our digital lives.

At LAUTECH Blockchain Club, we regularly host workshops on smart contract development. Join us to learn hands-on and build your first smart contract!`,
    author: "Dr. Adebayo Ogundimu",
    authorBio:
      "Dr. Ogundimu is a Senior Blockchain Developer with over 8 years of experience in the field. He holds a PhD in Computer Science and is passionate about blockchain education.",
    authorAvatar: "/dr-ogundimu.png",
    date: "2024-03-10",
    category: "Education",
    tags: ["Smart Contracts", "Ethereum", "Solidity", "Beginner"],
    readTime: "8 min read",
    image: "/blog-smart-contracts.png",
    likes: 42,
    relatedPosts: [4, 5],
  },
  "2": {
    id: 2,
    title: "LAUTECH Blockchain Club Wins National Hackathon",
    excerpt: "Our team secured first place at the Nigeria Blockchain Hackathon 2024 with an innovative DeFi solution.",
    content: `We're thrilled to announce that our team from LAUTECH Blockchain Club has won the prestigious Nigeria Blockchain Hackathon 2024! Our innovative DeFi solution impressed judges and fellow participants alike.

## The Competition

The Nigeria Blockchain Hackathon 2024 brought together over 200 developers from universities across the country. Teams had 48 hours to build innovative blockchain solutions addressing real-world problems in Nigeria.

## Our Winning Solution: AgriChain Finance

Our team developed "AgriChain Finance," a decentralized finance platform specifically designed for Nigerian farmers. The solution addresses key challenges in agricultural financing:

### Key Features:
- **Micro-lending Protocol**: Farmers can access small loans without traditional banking requirements
- **Crop Insurance**: Smart contract-based insurance that pays out automatically based on weather data
- **Supply Chain Tracking**: Transparent tracking from farm to market
- **Mobile-First Design**: Accessible via basic smartphones

## The Team

Our winning team consisted of:
- **Fatima Abdullahi** (Team Lead) - Smart Contract Development
- **Chinedu Okwu** - Frontend Development
- **Adebayo Ogundimu** - Backend & Integration
- **Kemi Adeyemi** - UI/UX Design
- **Tunde Olatunji** - Business Strategy

## Technical Implementation

The solution was built using:
- **Solidity** for smart contracts
- **React** for the web interface
- **React Native** for mobile app
- **IPFS** for decentralized storage
- **Chainlink** for weather data oracles

## Impact and Recognition

Our solution caught the attention of several venture capital firms and agricultural organizations. We've already received interest from:
- Nigerian Agricultural Development Bank
- Several impact investors
- Tech incubators in Lagos and Abuja

## What's Next?

We're now working on:
1. Refining the platform based on feedback
2. Conducting pilot tests with farmer cooperatives
3. Seeking additional funding for development
4. Building partnerships with agricultural organizations

## Lessons Learned

This experience taught us valuable lessons:
- **Collaboration is Key**: Diverse skills and perspectives make stronger solutions
- **User-Centric Design**: Understanding real user needs is crucial
- **Technical Excellence**: Solid technical foundation is non-negotiable
- **Presentation Matters**: Being able to clearly communicate your vision is essential

## Join Our Journey

This victory belongs to our entire LAUTECH Blockchain Club community. The knowledge sharing, workshops, and collaborative environment made this achievement possible.

Interested in joining our next hackathon team? Attend our weekly meetings and workshops to build your skills and connect with like-minded innovators!`,
    author: "Fatima Abdullahi",
    authorBio:
      "Fatima is the Technical Lead at LAUTECH Blockchain Club and a 300L Information Technology student with a passion for DeFi and social impact.",
    authorAvatar: "/member-fatima.png",
    date: "2024-03-08",
    category: "News",
    tags: ["Hackathon", "DeFi", "Achievement", "Competition"],
    readTime: "5 min read",
    image: "/blog-hackathon-win.png",
    likes: 67,
    relatedPosts: [3, 4],
  },
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const post = blogData[id]

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
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
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{post.excerpt}</p>
          </div>

          <div className="flex items-center justify-between mb-8 pb-8 border-b">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <ThumbsUp className="h-4 w-4" />
                {post.likes}
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={post.image || "/placeholder.svg?height=400&width=800"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none mb-12">
            {post.content.split("\n\n").map((paragraph: string, index: number) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="font-serif text-xl font-bold text-gray-900 mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("- ")) {
                const listItems = paragraph.split("\n").filter((item) => item.startsWith("- "))
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-6">
                    {listItems.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
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
                  <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                  <AvatarFallback>
                    {post.author
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                  <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedId: number) => {
                  const relatedPost = blogData[relatedId.toString()]
                  if (!relatedPost) return null

                  return (
                    <Card key={relatedId} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {relatedPost.category}
                        </Badge>
                        <h4 className="font-serif text-lg font-bold text-gray-900 mb-2 leading-tight">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                        <Button asChild variant="outline" size="sm" className="bg-transparent">
                          <Link href={`/blog/${relatedId}`}>Read More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  )
}
