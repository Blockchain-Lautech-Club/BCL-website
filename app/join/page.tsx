"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, BookOpen, Network, Trophy, Gift, Star } from "lucide-react"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    department: "",
    level: "",
    phone: "",
    interests: [] as string[],
    experience: "",
    goals: "",
    newsletter: true,
    terms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const interests = [
    "Smart Contracts",
    "DeFi (Decentralized Finance)",
    "NFTs & Digital Art",
    "Cryptocurrency Trading",
    "Blockchain Development",
    "Web3 Technologies",
    "Ethereum & Layer 2",
    "Bitcoin & Lightning Network",
    "Blockchain Security",
    "Tokenomics",
    "DAOs (Decentralized Organizations)",
    "Metaverse & Gaming",
  ]

  const memberBenefits = [
    {
      icon: BookOpen,
      title: "Exclusive Workshops",
      description: "Access to hands-on workshops and masterclasses led by industry experts",
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Connect with peers, alumni, and blockchain professionals across Nigeria",
    },
    {
      icon: Trophy,
      title: "Hackathon Participation",
      description: "Compete in exclusive hackathons with prizes and internship opportunities",
    },
    {
      icon: Gift,
      title: "Free Resources",
      description: "Access to premium courses, tools, and blockchain development resources",
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Get paired with experienced blockchain developers and entrepreneurs",
    },
    {
      icon: Star,
      title: "Certificate Programs",
      description: "Earn recognized certificates in blockchain technologies and development",
    },
  ]

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="text-center">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">Welcome to the Club!</h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for joining the LAUTECH Blockchain Club. We've sent a confirmation email with next steps and
                information about upcoming events.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <a href="/events">Explore Upcoming Events</a>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join Our Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Become part of LAUTECH's most innovative student community and start your journey into the future of
            technology.
          </p>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Member Benefits</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Unlock exclusive opportunities and resources as a club member
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {memberBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8 text-center">
                  <benefit.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center pb-6 sm:pb-8">
              <CardTitle className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                Membership Application
              </CardTitle>
              <p className="text-gray-600 mt-2">Fill out the form below to join our community</p>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm sm:text-base">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm sm:text-base">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="phone" className="text-sm sm:text-base">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Academic Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <Label htmlFor="studentId" className="text-sm sm:text-base">
                        Student ID *
                      </Label>
                      <Input
                        id="studentId"
                        value={formData.studentId}
                        onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                        required
                        className="mt-2"
                        placeholder="e.g., 18/0001"
                      />
                    </div>
                    <div>
                      <Label htmlFor="department" className="text-sm sm:text-base">
                        Department *
                      </Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => setFormData({ ...formData, department: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="computer-science">Computer Science</SelectItem>
                          <SelectItem value="information-technology">Information Technology</SelectItem>
                          <SelectItem value="software-engineering">Software Engineering</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="electrical-engineering">Electrical Engineering</SelectItem>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="level" className="text-sm sm:text-base">
                        Current Level *
                      </Label>
                      <Select
                        value={formData.level}
                        onValueChange={(value) => setFormData({ ...formData, level: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100">100 Level</SelectItem>
                          <SelectItem value="200">200 Level</SelectItem>
                          <SelectItem value="300">300 Level</SelectItem>
                          <SelectItem value="400">400 Level</SelectItem>
                          <SelectItem value="500">500 Level</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Areas of Interest
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Select all blockchain topics that interest you:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                        />
                        <Label htmlFor={interest} className="text-xs sm:text-sm cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-xs sm:text-sm text-gray-600">Selected interests:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience & Goals */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <Label htmlFor="experience" className="text-sm sm:text-base">
                      Previous Blockchain Experience
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Complete Beginner</SelectItem>
                        <SelectItem value="basic">Basic Knowledge</SelectItem>
                        <SelectItem value="intermediate">Some Experience</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="goals" className="text-sm sm:text-base">
                      What do you hope to achieve through the club?
                    </Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="mt-2"
                      rows={4}
                      placeholder="Tell us about your goals and what you hope to learn..."
                    />
                  </div>
                </div>

                {/* Newsletter & Terms */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                      className="mt-1"
                    />
                    <Label htmlFor="newsletter" className="cursor-pointer text-xs sm:text-sm leading-relaxed">
                      Subscribe to our newsletter for updates on events and blockchain news
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="cursor-pointer text-xs sm:text-sm leading-relaxed">
                      I agree to the club's terms and conditions and privacy policy *
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full text-sm sm:text-base" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting Application..." : "Join the Club"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
