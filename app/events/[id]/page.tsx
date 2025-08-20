"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { use } from "react"

// Mock event data - in a real app, this would come from an API
const eventData: { [key: string]: any } = {
  "1": {
    id: 1,
    title: "Introduction to Smart Contracts",
    date: "2024-03-15",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Science Lab, Block A",
    type: "Workshop",
    status: "upcoming",
    attendees: 45,
    maxAttendees: 60,
    description:
      "Join us for an intensive hands-on workshop where you'll learn the fundamentals of smart contract development using Solidity. This beginner-friendly session will cover blockchain basics, Ethereum ecosystem, and guide you through creating and deploying your first smart contract.",
    fullDescription: `This comprehensive workshop is designed for students who want to dive into the world of blockchain development. No prior blockchain experience is required, but basic programming knowledge is recommended.

What you'll learn:
• Blockchain fundamentals and how smart contracts work
• Setting up your development environment (Remix IDE, MetaMask)
• Solidity programming language basics
• Writing your first smart contract
• Testing and deploying contracts on test networks
• Best practices for smart contract security

What to bring:
• Your laptop with internet connection
• Enthusiasm to learn cutting-edge technology!

Prerequisites:
• Basic understanding of programming concepts
• Familiarity with JavaScript is helpful but not required`,
    speaker: {
      name: "Dr. Adebayo Ogundimu",
      title: "Senior Blockchain Developer at TechCorp",
      bio: "Dr. Ogundimu has over 8 years of experience in blockchain development and has contributed to several major DeFi protocols. He holds a PhD in Computer Science and is passionate about blockchain education.",
      avatar: "/dr-ogundimu.png",
      linkedin: "https://linkedin.com/in/adebayo-ogundimu",
      twitter: "https://twitter.com/adebayo_dev",
    },
    agenda: [
      { time: "2:00 PM", activity: "Welcome & Introductions" },
      { time: "2:15 PM", activity: "Blockchain Fundamentals" },
      { time: "3:00 PM", activity: "Introduction to Solidity" },
      { time: "3:45 PM", activity: "Break" },
      { time: "4:00 PM", activity: "Hands-on: Writing Your First Contract" },
      { time: "4:45 PM", activity: "Deployment & Testing" },
      { time: "5:00 PM", activity: "Q&A and Wrap-up" },
    ],
    image: "/smart-contracts-workshop.png",
    gallery: ["/workshop-setup.png", "/coding-session.png", "/group-discussion.png"],
    relatedEvents: [2, 3],
  },
  "2": {
    id: 2,
    title: "Blockchain Career Panel",
    date: "2024-03-22",
    time: "4:00 PM - 6:00 PM",
    location: "Main Auditorium",
    type: "Panel Discussion",
    status: "upcoming",
    attendees: 120,
    maxAttendees: 200,
    description: "Industry professionals share insights on blockchain career opportunities and pathways.",
    fullDescription: `Join us for an inspiring panel discussion featuring leading blockchain professionals from across Nigeria and beyond. This is your opportunity to learn about career paths, industry trends, and get advice from experts who are shaping the future of blockchain technology.

Our distinguished panel includes:
• Startup founders who built successful blockchain companies
• Senior developers from major crypto exchanges
• Blockchain consultants working with traditional banks
• Venture capitalists investing in Web3 startups

Topics covered:
• Different career paths in blockchain (technical and non-technical)
• Skills most in demand by employers
• How to break into the blockchain industry
• Salary expectations and growth opportunities
• The future of blockchain in Africa
• Networking tips and building your professional brand`,
    speaker: {
      name: "Multiple Industry Experts",
      title: "Panel of 5 Blockchain Professionals",
      bio: "Our panel features diverse voices from the blockchain industry, including developers, entrepreneurs, investors, and consultants.",
      avatar: "/panel-experts.png",
    },
    agenda: [
      { time: "4:00 PM", activity: "Welcome & Panel Introductions" },
      { time: "4:15 PM", activity: "Career Paths in Blockchain" },
      { time: "4:45 PM", activity: "Skills & Education Requirements" },
      { time: "5:15 PM", activity: "Industry Trends & Future Outlook" },
      { time: "5:30 PM", activity: "Audience Q&A" },
      { time: "6:00 PM", activity: "Networking Session" },
    ],
    image: "/career-panel.png",
    relatedEvents: [1, 6],
  },
}

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const event = eventData[id]

  if (!event) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/events">Back to Events</Link>
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  const isUpcoming = event.status === "upcoming"
  const isFull = event.attendees >= event.maxAttendees

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/events" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </Button>
      </div>

      {/* Event Header */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                  <Badge
                    variant={isUpcoming ? "default" : "secondary"}
                    className={isUpcoming ? "bg-primary" : "bg-gray-500"}
                  >
                    {event.type}
                  </Badge>
                  {isUpcoming && isFull && <Badge variant="destructive">Full</Badge>}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="text-sm">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium">{event.location}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <div className="font-medium">
                      {event.attendees}/{event.maxAttendees} registered
                    </div>
                    <div className="text-sm">{event.maxAttendees - event.attendees} spots remaining</div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">{event.description}</p>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-center">Event Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isUpcoming && !isFull ? (
                    <>
                      <Button className="w-full" size="lg">
                        Register Now - Free
                      </Button>
                      <p className="text-sm text-gray-600 text-center">
                        {event.maxAttendees - event.attendees} spots remaining
                      </p>
                    </>
                  ) : isUpcoming && isFull ? (
                    <>
                      <Button disabled className="w-full" size="lg">
                        Event Full
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Join Waitlist
                      </Button>
                    </>
                  ) : (
                    <Button disabled className="w-full" size="lg">
                      Event Completed
                    </Button>
                  )}

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Image */}
      <section className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <img
            src={event.image || "/placeholder.svg?height=400&width=800"}
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <div className="prose prose-gray max-w-none">
                  {event.fullDescription.split("\n\n").map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              {event.agenda && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Event Agenda</h2>
                  <div className="space-y-4">
                    {event.agenda.map((item: any, index: number) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center w-16 h-10 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{item.activity}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {/* Speaker */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Speaker</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={event.speaker.avatar || "/placeholder.svg"} alt={event.speaker.name} />
                      <AvatarFallback>
                        {event.speaker.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{event.speaker.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{event.speaker.title}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{event.speaker.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Events */}
              {event.relatedEvents && event.relatedEvents.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Related Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {event.relatedEvents.map((relatedId: number) => {
                        const relatedEvent = eventData[relatedId.toString()]
                        if (!relatedEvent) return null

                        return (
                          <Link key={relatedId} href={`/events/${relatedId}`} className="block">
                            <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                              <h4 className="font-medium text-gray-900 text-sm mb-1">{relatedEvent.title}</h4>
                              <p className="text-xs text-gray-600">
                                {new Date(relatedEvent.date).toLocaleDateString()}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
