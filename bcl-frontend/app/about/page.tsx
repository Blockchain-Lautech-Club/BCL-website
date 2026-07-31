"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { 
  MapPin, 
  Mail,
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg flex">
              <Image
                src="/event/pizzaAttendees.jpg"
                alt="Workshop presentation"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
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
            Community wins.
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
                <svg
                  className="h-12 w-12 fill-blue-600 mx-auto mb-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.954.004C5.352.004 0 5.356 0 11.958c0 2.115.553 4.183 1.6 6.002L.055 23.46l5.642-1.48A11.892 11.892 0 0011.954 23.91c6.598 0 11.954-5.356 11.954-11.952S18.552.004 11.954.004zm6.474 16.924c-.266.75-1.526 1.451-2.126 1.545-.526.082-1.192.176-3.414-.746-2.665-1.106-4.38-3.83-4.512-4.006-.134-.176-1.077-1.433-1.077-2.736 0-1.303.682-1.944.921-2.203.24-.258.527-.323.7-.323.174 0 .346.006.502.012.164.006.386-.06.586.422.206.504.7 1.706.764 1.834.062.13.104.282.02.434-.082.152-.124.252-.25.375-.124.124-.266.27-.376.364-.124.106-.254.22-.112.464.142.246.634 1.05 1.356 1.693.93.83 1.716 1.085 1.956 1.216.24.13.38.106.522-.058.142-.164.614-.716.776-.963.164-.246.326-.205.546-.123.22.082 1.396.657 1.636.776.24.117.4.176.458.27.062.094.062.55-.204 1.301z" />
                </svg>
                <a 
                  href={`https://wa.me/${contact.phones[0].replace(/[^0-9]/g, "")}`}
                  className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.phones[0]}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </main>
  )
}