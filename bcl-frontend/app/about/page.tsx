"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { 
  Users, 
  Target, 
  BookOpen, 
  Calendar, 
  Award, 
  MapPin, 
  Mail, 
  Phone,
  Lightbulb,
  Code,
  Handshake,
  TrendingUp,
  ArrowRight,
  Star
} from "lucide-react"
import { TeamSection } from "@/components/team"

const stats = [
  { number: "2500+", label: "Students Trained", icon: Users },
  { number: "5+", label: "Workshops & Hackathons", icon: Calendar },
  { number: "20+", label: "Industry Partners", icon: Handshake },
  { number: "5", label: "Years Active", icon: Award },
]

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Fostering cutting-edge blockchain solutions and encouraging creative problem-solving among our members.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Providing comprehensive learning resources and hands-on experience in blockchain technology.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network of blockchain enthusiasts, developers, and industry professionals.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuously evolving with the blockchain space and preparing members for future opportunities.",
  },
]



const achievements = [
  {
    title: "3rd place Crossfi Global Hackathon",
    description: "Our Community members won the second runner-up of the Crossfi Global Hackathon 2025",
    date: "August 2025"
  },
  {
    title: "1st place Crossfi Africa Hackathon",
    description: "Our Community members won the Crossfi Africa Hackathon 2025",
    date: "March 2025"
  },
    {
    title: "Free Ticket to EthDenver 2024 with all accomodation sorted",
    description: "Our Community members is part of the team that won free tickets to ETHDenver 2024 at the Web3Lagos conference 2024 Hackathon",
    date: "September 2024"
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              About Blockchain Club LAUTECH
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Empowering the next generation of blockchain innovators through education, collaboration, and 
              hands-on experience at Ladoke Akintola University of Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/join">Join Our Community</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="bg-transparent">
                <Link href="/events">View Our Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <div className="font-serif text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-serif text-2xl font-bold text-primary flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower LAUTECH students with blockchain expertise, drive innovation, and build a vibrant ecosystem for future blockchain leaders through workshops, hackathons, and collaborative projects.

                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-serif text-2xl font-bold text-primary flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-accent" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To create a LAUTECH where every student is equipped with blockchain knowledge and contributes to Nigeria's leadership in Web3 innovation.

                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive blockchain education through various initiatives and programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Technical Workshops</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hands-on coding sessions covering smart contracts, DeFi protocols, NFTs, and blockchain development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Industry Connections</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular panels with blockchain professionals, mentorship programs, and internship opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-6" />
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Hackathons & Competitions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular hackathons and competitions to challenge members and showcase innovative blockchain solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <TeamSection/>

      {/* Recent Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Recent Achievements</h2>
            <p className="text-lg text-gray-600">Milestones that showcase our impact and growth</p>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="font-serif text-xl font-bold text-gray-900">{achievement.title}</h3>
                        <span className="text-gray-500 text-sm mt-1 md:mt-0">{achievement.date}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Find Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Ladoke Akintola Univerity of Technology<br />
                      Ogbomoso, Oyo State, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      blockchainlautech@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +234 916 270 6257
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-serif text-2xl font-bold text-primary">Ready to Join Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're a complete beginner or an experienced developer, there's a place for you in our 
                  community. Join us and be part of the blockchain revolution!
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link href="/join" className="flex items-center justify-center gap-2">
                      Join the Club <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}