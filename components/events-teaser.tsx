import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

export function EventsTeaser() {
  const upcomingEvents = [
    {
      title: "Introduction to Smart Contracts",
      date: "March 15, 2024",
      time: "2:00 PM",
      location: "Computer Science Lab",
      type: "Workshop",
      attendees: 45,
      description:
        "Learn the fundamentals of smart contract development using Solidity and deploy your first contract.",
    },
    {
      title: "Blockchain Career Panel",
      date: "March 22, 2024",
      time: "4:00 PM",
      location: "Main Auditorium",
      type: "Panel Discussion",
      attendees: 120,
      description: "Industry professionals share insights on blockchain career opportunities and pathways.",
    },
    {
      title: "DeFi Deep Dive",
      date: "March 29, 2024",
      time: "3:00 PM",
      location: "Online (Zoom)",
      type: "Webinar",
      attendees: 80,
      description: "Explore decentralized finance protocols, yield farming, and the future of financial services.",
    },
  ]

  return (
    <section className="pt-4 pb-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Don't miss out on our exciting lineup of workshops, seminars, and networking events designed to accelerate
            your blockchain journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm">
                    {event.type}
                  </Badge>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                <CardTitle className="font-serif text-lg sm:text-xl text-gray-900 leading-tight">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{event.description}</p>
                <Button className="w-full bg-transparent text-sm sm:text-base" variant="outline">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
            <Link href="/events" className="flex items-center justify-center gap-2">
              View All Events <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
