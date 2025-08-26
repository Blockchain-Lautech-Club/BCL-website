"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Calendar, MapPin, Users, Search, Filter, ArrowRight } from "lucide-react"

// Mock events data
const events = [
  {
    id: 1,
    title: "Introduction to Smart Contracts",
    date: "2024-03-15",
    time: "2:00 PM",
    location: "Computer Science Lab",
    type: "Workshop",
    status: "upcoming",
    attendees: 45,
    maxAttendees: 60,
    description: "Learn the fundamentals of smart contract development using Solidity and deploy your first contract.",
    speaker: "Dr. Adebayo Ogundimu",
    image: "/smart-contracts-workshop.png",
  },
  {
    id: 2,
    title: "Blockchain Career Panel",
    date: "2024-03-22",
    time: "4:00 PM",
    location: "Main Auditorium",
    type: "Panel Discussion",
    status: "upcoming",
    attendees: 120,
    maxAttendees: 200,
    description: "Industry professionals share insights on blockchain career opportunities and pathways.",
    speaker: "Multiple Industry Experts",
    image: "/career-panel.png",
  },
  {
    id: 3,
    title: "DeFi Deep Dive",
    date: "2024-03-29",
    time: "3:00 PM",
    location: "Online (Zoom)",
    type: "Webinar",
    status: "upcoming",
    attendees: 80,
    maxAttendees: 100,
    description: "Explore decentralized finance protocols, yield farming, and the future of financial services.",
    speaker: "Fatima Abdullahi",
    image: "/defi-webinar.png",
  },
  {
    id: 4,
    title: "Blockchain Hackathon 2024",
    date: "2024-02-20",
    time: "9:00 AM",
    location: "Innovation Hub",
    type: "Hackathon",
    status: "past",
    attendees: 150,
    maxAttendees: 150,
    description: "48-hour hackathon building innovative blockchain solutions for real-world problems.",
    speaker: "Various Mentors",
    image: "/hackathon-2024.png",
  },
  {
    id: 5,
    title: "NFT Creation Workshop",
    date: "2024-02-10",
    time: "1:00 PM",
    location: "Digital Arts Lab",
    type: "Workshop",
    status: "past",
    attendees: 35,
    maxAttendees: 40,
    description: "Create and mint your own NFTs while learning about digital ownership and blockchain art.",
    speaker: "Chinedu Okwu",
    image: "/nft-workshop.png",
  },
  {
    id: 6,
    title: "Cryptocurrency Trading Basics",
    date: "2024-04-05",
    time: "5:00 PM",
    location: "Business School Auditorium",
    type: "Seminar",
    status: "upcoming",
    attendees: 25,
    maxAttendees: 80,
    description: "Learn the fundamentals of cryptocurrency trading, risk management, and market analysis.",
    speaker: "Prof. Olumide Adeyemi",
    image: "/crypto-trading.png",
  },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")

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

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

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
        </div>
      </section>

      <Footer />
    </main>
  )
}

function EventCard({ event }: { event: any }) {
  const isUpcoming = event.status === "upcoming"
  const isFull = event.attendees >= event.maxAttendees

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
        <div className="text-xs sm:text-sm text-gray-600">by {event.speaker}</div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm">
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm">
              {event.attendees}/{event.maxAttendees} attendees
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
