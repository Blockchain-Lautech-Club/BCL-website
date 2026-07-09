"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock, MessageCircle, Users, Calendar, CheckCircle } from "lucide-react"
import { contact as contactData } from "@/lib/data.json"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  // Transform contact data to match component structure
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [contactData.address],
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: contactData.emails,
      color: "text-accent",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: contactData.phones,
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [contactData.officeHours.weekdays, contactData.officeHours.saturday, contactData.officeHours.sunday],
      color: "text-purple-600",
    },
  ]

  const quickActions = [
    {
      icon: Users,
      title: "Join the Club",
      description: "Become a member and start your blockchain journey",
      action: "Join Now",
      link: "/join",
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Check out our upcoming workshops and seminars",
      action: "View Events",
      link: "/events",
    },
    {
      icon: MessageCircle,
      title: "Join Discord",
      description: "Connect with our community on Discord",
      action: "Join Discord",
      link: contactData.socials.find((s: any) => s.name === "discord")?.link || "#",
    },
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="text-center">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">Message Sent!</h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <a href="/blog">Read Our Blog</a>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-[360px] lg:h-[420px]">
        <Image
          src="/event/confluence-4.jpg"
          alt="Blockchain LAUTECH"
          fill
          priority
          className="object-cover"
        />
      </section>

      <section className="container mx-auto py-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight max-w-3xl">
          We are always ready to
          attend to your questions
          and enquiries.
        </h1>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">

        <div className="border border-primary">

          <div className="grid md:grid-cols-2">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-16 border-b md:border-r border-primary"
              >
                <div className="space-y-6">
                  <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-6`} />

                  <h3 className={`${info.color} text-3xl font-semibold`}>
                    {info.title}
                  </h3>
                  {info.details.map((d, i) => (
                    <p
                      key={i}
                      className="font-bold text-3xl"
                    >
                      {d}
                    </p>
                  ))}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Actions */}
      <section className="container mx-auto py-20">
        <div className="max-w-6xl">
          <h2 className="text-6xl font-bold text-primary">
            Get in touch.
          </h2>
          <p className="text-2xl font-semibold mt-5">
            Fill this form and we'll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14"
        >
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                className="h-14 rounded-xl shadow-lg border-gray-200 mt-2"
                id="name"
                value={formData.name}
                placeholder="John Doe"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                className="h-14 rounded-xl shadow-lg border-gray-200 mt-2"
                id="email"
                type="email"
                value={formData.email}
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* coming back for styling */}
            <div>
              <Label htmlFor="category">Inquiry Type *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger className="h-14 rounded-xl shadow-lg border-gray-200 mt-2">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="membership">Membership Inquiry</SelectItem>
                  <SelectItem value="events">Event Information</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                  <SelectItem value="speaking">Speaking Engagement</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="media">Media Inquiry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                className="h-14 rounded-xl shadow-lg border-gray-200 mt-2"
                id="phone"
                type="tel"
                value={formData.phone}
                placeholder="+20 123 456 7890"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                className="h-14 rounded-xl shadow-lg border-gray-200 mt-2"
                id="subject"
                value={formData.subject}
                placeholder="Brief description of your inquiry"
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                className="h-14 rounded-xl shadow-lg border-gray-200 resize-none mt-2"
                id="message"
                value={formData.message}
                placeholder="Enter details about your inquiry..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
              />
            </div>

          </div>
          <div className="flex justify-center mt-12">
            <Button
              type="submit"
              className="px-20 h-14 rounded-full text-lg"
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? "Sending Message..." : "Send us a message"}
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}
