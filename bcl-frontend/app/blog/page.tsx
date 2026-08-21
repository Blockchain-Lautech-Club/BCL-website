import { blogApi } from "@/lib/api"
import BlogListClient from "./BlogListClient"

export const revalidate = 0 // Disable cache for this page since we disabled fetch cache anyway

export default async function BlogPage() {
  let blogs = []
  let error = null

  try {
    blogs = await blogApi.getBlogs()
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch blogs'
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Blogs</h1>
            <p className="text-gray-600 mb-8">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return <BlogListClient initialBlogs={blogs} />
}
