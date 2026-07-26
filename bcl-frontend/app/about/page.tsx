"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  MapPin, 
  Mail, 
  Phone,
  Award,
  BookOpen,
  Users,
  TrendingUp,
} from "lucide-react"
import { aboutUs, contact, team } from "@/lib/data.json"
import Image from "next/image"

const stats = aboutUs.statistics
const achievements = aboutUs.achievements
const history = aboutUs.history

export default function AboutPage() {

  const achievement = [
    {
      title: achievements[0].title,
      date: achievements[0].date,
      icon: BookOpen,
    },
    {
      title: achievements[1].title,
      date: achievements[1].date,
      icon: Users,
    },
    {
      title: achievements[2].title,
      date: achievements[2].date,
      icon: TrendingUp
    }
  ]
  return (
    <main className="min-h-screen bg-gray-50">

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12">
            About Us
          </h2>
          <div className="space-y-6 text-lg text-justify text-gray-700 leading-relaxed max-w-4xl ">
            {Object.values(history).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg rounded-2xl">
                <CardContent className="p-4">
                  <Image
                    src={`/about${stat.icon}`}
                    alt={stat.label}
                    width={50}
                    height={50}
                    className="h-12 w-12 mx-auto mb-4"
                  />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/event/confluence-1.jpg"
                alt="Workshop presentation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/event/confluence-2.jpg"
                alt="Event attendees"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto  px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            The Team.
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {[...(team.founders || [])].slice(0, 8).map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40  rounded-full overflow-hidden shadow-lg mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center font-semibold text-gray-800 text-sm md:text-base">
                  {member.name}
                </p>
                <p className="text-center text-gray-600 text-xs md:text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          <blockquote className="text-center text-xl md:text-2xl italic text-gray-700 max-w-3xl mx-auto">
            "Great minds don't just follow systems, they build decentralized ones that empower the world"
          </blockquote>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-white">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Recent Achievements.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {achievement.map((ach, index) => (
              <Card key={index} className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-4 text-center">
                  <ach.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{ach.title}</h3>
                  <p className="text-gray-600">{ach.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Contact Us.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-4 text-center">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-800 font-medium">{contact.emails[0]}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-4 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-800 font-medium">{contact.address}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg rounded-2xl">
              <CardContent className="p-4 text-center">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-800 font-medium">{contact.phones[0]}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </main>
  )
}