"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Trophy, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

// Mock member data
const memberStats = {
  totalMembers: 247,
  activeMembers: 189,
  eventsThisMonth: 8,
  completedProjects: 23,
}

const featuredMembers = [
  {
    name: "Adebayo Ogundimu",
    role: "Club President",
    department: "Computer Science",
    level: "400L",
    achievements: ["Hackathon Winner", "Smart Contract Expert", "Community Leader"],
    avatar: "/member-adebayo.png",
    projects: 12,
    eventsAttended: 45,
  },
  {
    name: "Fatima Abdullahi",
    role: "Technical Lead",
    department: "Information Technology",
    level: "300L",
    achievements: ["DeFi Specialist", "Workshop Facilitator", "Mentor"],
    avatar: "/member-fatima.png",
    projects: 8,
    eventsAttended: 32,
  },
  {
    name: "Chinedu Okwu",
    role: "Community Manager",
    department: "Software Engineering",
    level: "500L",
    achievements: ["NFT Creator", "Event Organizer", "Alumni Network"],
    avatar: "/member-chinedu.png",
    projects: 15,
    eventsAttended: 38,
  },
]

const membershipTiers = [
  {
    name: "Explorer",
    description: "New members exploring blockchain",
    requirements: "0-2 events attended",
    benefits: ["Access to basic workshops", "Community Discord", "Monthly newsletter"],
    color: "bg-gray-100 text-gray-800",
    members: 98,
  },
  {
    name: "Builder",
    description: "Active participants building skills",
    requirements: "3-10 events attended",
    benefits: ["Advanced workshops", "Mentorship program", "Project collaboration"],
    color: "bg-blue-100 text-blue-800",
    members: 89,
  },
  {
    name: "Innovator",
    description: "Experienced members leading projects",
    requirements: "10+ events, 1+ project completed",
    benefits: ["Leadership opportunities", "Industry connections", "Speaking opportunities"],
    color: "bg-purple-100 text-purple-800",
    members: 45,
  },
  {
    name: "Ambassador",
    description: "Club leaders and top contributors",
    requirements: "Elected or appointed position",
    benefits: ["All benefits", "Decision making", "External representation"],
    color: "bg-gold-100 text-gold-800",
    members: 15,
  },
]

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate students and innovators who make up the LAUTECH Blockchain Club community.
            </p>
          </div>
        </div>
      </section>

      {/* Member Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{memberStats.totalMembers}</div>
                <div className="text-sm text-gray-600">Total Members</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{memberStats.activeMembers}</div>
                <div className="text-sm text-gray-600">Active This Month</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{memberStats.eventsThisMonth}</div>
                <div className="text-sm text-gray-600">Events This Month</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{memberStats.completedProjects}</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Featured Members</h2>
            <p className="text-lg text-gray-600">Meet some of our most active and accomplished community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.department} • {member.level}
                  </p>

                  <div className="flex justify-center gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{member.projects}</div>
                      <div className="text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-gray-900">{member.eventsAttended}</div>
                      <div className="text-gray-600">Events</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Membership Tiers</h2>
            <p className="text-lg text-gray-600">Progress through different membership levels as you grow with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={tier.color}>{tier.name}</Badge>
                    <span className="text-sm text-gray-600">{tier.members} members</span>
                  </div>
                  <CardTitle className="font-serif text-lg">{tier.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <p className="text-sm text-gray-600">{tier.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <Star className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your blockchain journey with us and become part of Nigeria's most innovative student tech community.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/join">Become a Member</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
