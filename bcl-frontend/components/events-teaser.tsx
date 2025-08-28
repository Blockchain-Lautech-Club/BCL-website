'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

export function EventsTeaser() {
  const upcomingEvents = [
    {
      title: "Introduction to Smart Contracts",
      date: "March 15, 2025",
      time: "2:00 PM",
      location: "Computer Science Lab",
      type: "Workshop",
      attendees: 45,
      description:
        "Master the basics of smart contract development with Solidity and deploy your first contract in this hands-on workshop.",
    },
    {
      title: "Blockchain Career Panel",
      date: "March 22, 2025",
      time: "4:00 PM",
      location: "Main Auditorium",
      type: "Panel Discussion",
      attendees: 120,
      description:
        "Hear from industry leaders about career opportunities and pathways in the blockchain space.",
    },
    {
      title: "DeFi Deep Dive",
      date: "March 29, 2025",
      time: "3:00 PM",
      location: "Online (Zoom)",
      type: "Webinar",
      attendees: 80,
      description:
        "Discover decentralized finance protocols, yield farming, and the future of financial services in this insightful webinar.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our exciting workshops, seminars, and networking events to accelerate your blockchain journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {upcomingEvents.map((event, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-sm">
                      {event.type}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl text-gray-900 leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{event.description}</p>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-colors" variant="default">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
            <Link href="/events" className="flex items-center justify-center gap-2">
              View All Events <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}