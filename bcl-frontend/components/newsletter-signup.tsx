"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4 sm:p-6 text-center">
          <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mx-auto mb-2 sm:mb-3" />
          <h3 className="font-semibold text-green-800 mb-1 sm:mb-2 text-sm sm:text-base">Successfully Subscribed!</h3>
          <p className="text-green-700 text-xs sm:text-sm">
            Thank you for subscribing. You'll receive our latest updates and blockchain insights.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">Stay Updated</h3>
        </div>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          Get the latest blockchain news, event updates, and exclusive content delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-sm sm:text-base"
          />
          <Button type="submit" className="w-full text-sm sm:text-base" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-2 sm:mt-3">We respect your privacy. Unsubscribe at any time.</p>
      </CardContent>
    </Card>
  )
}
