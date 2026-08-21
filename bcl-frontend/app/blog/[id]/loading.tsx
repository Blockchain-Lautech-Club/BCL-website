import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div className="h-full bg-blue-500 transition-all duration-300 w-1/3 animate-pulse" />
      </div>
      
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button variant="ghost" asChild className="mb-4" disabled>
            <span className="flex items-center gap-2 text-gray-400">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </span>
          </Button>
        </div>

        <article className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <Skeleton className="h-16 w-full mb-4" />
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
            </div>

            <Skeleton className="h-64 md:h-96 w-full mb-12 rounded-lg" />

            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
