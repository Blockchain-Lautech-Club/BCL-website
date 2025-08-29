"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Calendar, MapPin, Users, Search, Filter, ArrowRight } from "lucide-react"
import { eventApi, Event, formatDate, isEventFull } from "@/lib/api"

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await eventApi.getEvents()
        setEvents(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Filter events based on search and filters
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "all" || event.type.toLowerCase() === filterType.toLowerCase()
    const matchesStatus = filterStatus === "all" || event.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const upcomingEvents = filteredEvents.filter((event) => event.status === "upcoming")
  const pastEvents = filteredEvents.filter((event) => event.status === "past")

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Events</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
                Blockchain Events
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Join our community events, workshops, and seminars to expand your blockchain knowledge and network with
                fellow enthusiasts.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-6 sm:py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 items-stretch sm:items-center">
              <div className="relative w-full max-w-md mx-auto sm:mx-0 sm:flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full sm:w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="seminar">Seminar</SelectItem>
                    <SelectItem value="webinar">Webinar</SelectItem>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="panel discussion">Panel Discussion</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="past">Past Events</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Content */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-40 sm:h-48 w-full" />
                    <CardHeader>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-32" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-10 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6 sm:mb-8">
                  <TabsTrigger value="upcoming" className="text-sm sm:text-base">
                    Upcoming Events ({upcomingEvents.length})
                  </TabsTrigger>
                  <TabsTrigger value="past" className="text-sm sm:text-base">
                    Past Events ({pastEvents.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                  {upcomingEvents.length === 0 && (
                    <div className="text-center py-8 sm:py-12">
                      <p className="text-gray-500 text-base sm:text-lg">No upcoming events match your search criteria.</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="past">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {pastEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                  {pastEvents.length === 0 && (
                    <div className="text-center py-8 sm:py-12">
                      <p className="text-gray-500 text-base sm:text-lg">No past events match your search criteria.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

function EventCard({ event }: { event: Event }) {
  const isUpcoming = event.status === "upcoming"
  const isFull = isEventFull(event)

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg overflow-hidden">
      <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={event.image || "/placeholder.svg?height=200&width=400"}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <Badge
            variant={isUpcoming ? "default" : "secondary"}
            className={`text-xs sm:text-sm ${isUpcoming ? "bg-primary" : "bg-gray-500"}`}
          >
            {event.type}
          </Badge>
        </div>
        {isUpcoming && isFull && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <Badge variant="destructive" className="text-xs sm:text-sm">
              Full
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="font-serif text-lg sm:text-xl text-gray-900 leading-tight">{event.title}</CardTitle>
        <div className="text-xs sm:text-sm text-gray-600">by {event.speaker_name}</div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm">
              {formatDate(event.date)} at {event.time}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm">
              {event.attendees}/{event.max_attendees} attendees
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{event.description}</p>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1 text-xs sm:text-sm">
            <Link href={`/events/${event.id}`} className="flex items-center justify-center gap-2">
              View Details <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
          {isUpcoming && !isFull && (
            <Button variant="outline" className="flex-1 bg-transparent text-xs sm:text-sm">
              Register
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}