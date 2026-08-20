import type { Metadata } from "next"
import { blogApi, getImageUrl } from "@/lib/api"
import BlogPostClient from "./BlogPostClient"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const id = resolvedParams?.id

  if (!id) {
    return {
      title: "Blog Post | Blockchain LAUTECH",
      description: "Read the latest article on Blockchain LAUTECH.",
    }
  }

  try {
    const blog = await blogApi.getBlog(id)
    const rawImage = blog?.image ? getImageUrl(blog.image) : ""
    
    // Ensure absolute image URL for social media link previews (WhatsApp, Twitter, LinkedIn, Facebook)
    let absoluteImageUrl = "https://bcl-website.vercel.app/bannernew.jpg"
    if (rawImage) {
      if (rawImage.startsWith("http://") || rawImage.startsWith("https://")) {
        absoluteImageUrl = rawImage
      } else if (rawImage.startsWith("/")) {
        absoluteImageUrl = `https://bcl-website.vercel.app${rawImage}`
      } else {
        absoluteImageUrl = `https://bcl-website.vercel.app/${rawImage}`
      }
    }

    return {
      title: `${blog.title} | Blockchain LAUTECH`,
      description: blog.excerpt || blog.title,
      openGraph: {
        title: blog.title,
        description: blog.excerpt || blog.title,
        url: `https://bcl-website.vercel.app/blog/${id}`,
        siteName: "Blockchain LAUTECH",
        type: "article",
        publishedTime: blog.created_at,
        authors: [blog.author],
        images: [
          {
            url: absoluteImageUrl,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.excerpt || blog.title,
        images: [absoluteImageUrl],
      },
    }
  } catch (error) {
    console.error("Error generating metadata for blog post:", error)
    return {
      title: "Blog Post | Blockchain LAUTECH",
      description: "Read the latest article on Blockchain LAUTECH.",
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  return <BlogPostClient id={resolvedParams.id} />
}