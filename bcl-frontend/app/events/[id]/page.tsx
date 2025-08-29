"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { eventApi, Event, formatDate, isEventFull } from "@/lib/api"
import { notFound } from "next/navigation"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState<Event | null>(null)
  const [relatedEvents, setRelatedEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch the event
        const eventData = await eventApi.getEvent(params.id)
        setEvent(eventData)
        
        // Fetch related events (upcoming events of same type)
        const related = await eventApi.getEvents({ status: 'upcoming', limit: 4 })
        setRelatedEvents(related.filter(e => e.id !== eventData.id && e.type === eventData.type).slice(0, 2))
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch event')
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [params.id])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event?.title,
          text: event?.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const handleRegister = () => {
    // In a real app, this would handle event registration
    alert('Registration functionality would be implemented here')
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Event</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button asChild>
              <Link href="/events">Back to Events</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        
        <div className="flex-1">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Skeleton className="h-10 w-32" />
          </div>

          {/* Event Header */}
          <section className="bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <Skeleton className="h-6 w-24" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </div>

                  <Skeleton className="h-10 w-full mb-4" />
                  <Skeleton className="h-10 w-3/4 mb-6" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Skeleton className="h-5 w-5" />
                        <div>
                          <Skeleton className="h-4 w-32 mb-1" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-2/3" />
                </div>

                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <Skeleton className="h-6 w-32 mx-auto" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Separator />
                      <div className="space-y-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="flex justify-between">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    )
  }

  if (!event) {
    notFound()
  }

  const isUpcoming = event.status === 'upcoming'
  const isFull = isEventFull(event)

  const formatDescription = (description: string) => {
    if (!description) return []
    
    return description.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="font-serif text-xl font-bold text-gray-900 mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }
      if (paragraph.startsWith('• ') || paragraph.includes('\n• ')) {
        const listItems = paragraph.split('\n').filter(item => item.startsWith('• '))
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6">
            {listItems.map((item, i) => (
              <li key={i} className="text-gray-700">
                {item.replace('• ', '')}
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
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      <div className="flex-1">
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
                    <Button variant="outline" size="sm" onClick={handleShare}>
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
                        {formatDate(event.date)}
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
                        {event.attendees}/{event.max_attendees} registered
                      </div>
                      <div className="text-sm">{event.max_attendees - event.attendees} spots remaining</div>
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
                        <Button className="w-full" size="lg" onClick={handleRegister}>
                          Register Now - Free
                        </Button>
                        <p className="text-sm text-gray-600 text-center">
                          {event.max_attendees - event.attendees} spots remaining
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
                        <span className="font-medium">{formatDate(event.date)}</span>
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
        {event.image && (
          <section className="bg-white border-t">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </section>
        )}

        {/* Event Details */}
        <section className="bg-white border-t">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                {event.full_description && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                    <div className="prose prose-gray max-w-none">
                      {formatDescription(event.full_description)}
                    </div>
                  </div>
                )}

                {/* Agenda */}
                {event.agenda && event.agenda.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Event Agenda</h2>
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
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
                        <AvatarImage src={event.speaker_avatar || "/placeholder.svg"} alt={event.speaker_name} />
                        <AvatarFallback>
                          {event.speaker_name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{event.speaker_name}</h3>
                        {event.speaker_title && (
                          <p className="text-sm text-gray-600 mb-2">{event.speaker_title}</p>
                        )}
                        {event.speaker_bio && (
                          <p className="text-sm text-gray-700 leading-relaxed">{event.speaker_bio}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Events */}
                {relatedEvents.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Related Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {relatedEvents.map((relatedEvent) => (
                          <Link key={relatedEvent.id} href={`/events/${relatedEvent.id}`} className="block">
                            <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                              <h4 className="font-medium text-gray-900 text-sm mb-1">{relatedEvent.title}</h4>
                              <p className="text-xs text-gray-600">
                                {formatDate(relatedEvent.date)} • {relatedEvent.location}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}