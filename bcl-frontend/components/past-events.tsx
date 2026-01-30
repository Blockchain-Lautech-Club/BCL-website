'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight, Timer } from "lucide-react";
import { motion } from 'framer-motion';

export function PastEvents() {
  const pastEvents = [
    {
      title: "CONFLUENCE 1.0",
      date: "November 7 & 8, 2025",
      time: "9:00 AM",
      location: "The Assembly, Beside Bon Nest Hotel, along Lautech main gate, Ogbomoso, Nigeria",
      type: "TECH EXTRAVAGANZA",
      attendees: 500,
      description:
        "Ogbomoso's Digital Transformation: Blockchain as a Catalyst.",
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
    <section className="pt-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Past Events
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`
        ${pastEvents.length === 1
              ? "flex justify-center items-center max-w-lg mx-auto px-4 mb-12"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto px-4"}
      `}
        >
          {pastEvents.map((pevent, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full max-w-sm"
            >
              <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group w-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-sm">
                      {pevent.type}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {pevent.attendees}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-2xl text-gray-900 leading-tight">
                    {pevent.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg leading-relaxed">{pevent.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{pevent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Timer className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{pevent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="text-sm">{pevent.location}</span>
                    </div>
                  </div>
                  <a href="https://confluence.blockchainlautech.club/">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-colors" variant="default" disabled>
                      ENDED
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>


        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="text-lg px-8 py-6 mb-4 w-auto">
            <Link href="/events" className="flex items-center justify-center gap-2">
              View All Events <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}