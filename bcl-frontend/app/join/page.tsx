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
import { CheckCircle, Users, BookOpen, Network, Trophy, Gift, Star, ExternalLink, Twitter } from "lucide-react"

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

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
    followedX: "",
    newsletter: true,
    terms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const handleFollowX = () => {
    window.open("https://twitter.com/@BlockchainLaut1", "_blank", "noopener,noreferrer")
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:8000/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          student_id: formData.studentId,
          department: formData.department,
          level: formData.level,
          phone: formData.phone || null,
          interests: formData.interests,
          experience: formData.experience,
          goals: formData.goals || null,
          followed_x: formData.followedX === "yes",
          newsletter: formData.newsletter,
          terms: formData.terms,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || "Failed to submit application")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsSubmitting(false)
    }
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
      <section className="bg-gradient-to-br from-blue-600/10 via-blue-100/5 to-blue-600/5 py-12 sm:py-16">
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
                  <benefit.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-4 sm:mb-6" />
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
       <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <Card className="shadow-xl border-0 rounded-xl sm:rounded-2xl overflow-hidden">
          <CardHeader className="text-center pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Membership Application
            </CardTitle>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Fill out the form below to join our community of blockchain enthusiasts
            </p>
          </CardHeader>
          
          <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-10">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm sm:text-base">
                {error}
              </div>
            )}
            
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {/* Personal Information */}
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-blue-600 font-bold text-sm sm:text-base">1</span>
                  </div>
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm sm:text-base font-semibold">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="h-11 sm:h-12 text-base"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm sm:text-base font-semibold">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="h-11 sm:h-12 text-base"
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div className="lg:col-span-2 space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-11 sm:h-12 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="lg:col-span-2 space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11 sm:h-12 text-base"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-green-600 font-bold text-sm sm:text-base">2</span>
                  </div>
                  Academic Information
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="studentId" className="text-sm sm:text-base font-semibold">
                      Student ID *
                    </Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      required
                      className="h-11 sm:h-12 text-base"
                      placeholder="e.g., 18/0001"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-sm sm:text-base font-semibold">
                      Department *
                    </Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      required
                      className="h-11 sm:h-12 text-base"
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                  
                  <div className="lg:col-span-2 space-y-2">
                    <Label htmlFor="level" className="text-sm sm:text-base font-semibold">
                      Current Level *
                    </Label>
                    <Select
                      value={formData.level}
                      onValueChange={(value) => setFormData({ ...formData, level: value })}
                    >
                      <SelectTrigger className="h-11 sm:h-12">
                        <SelectValue placeholder="Select your current level" />
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

              {/* Social Media Follow */}
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-purple-600 font-bold text-sm sm:text-base">3</span>
                  </div>
                  Stay Connected
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <Label className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 block">
                      Have you followed our X (Twitter) account? *
                    </Label>
                    
                    <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-2 sm:gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, followedX: "yes" })}
                        className={`w-full p-4 sm:p-5 rounded-lg border-2 transition-all text-left touch-manipulation ${
                          formData.followedX === "yes"
                            ? "border-blue-500 bg-blue-50 text-blue-800 shadow-md"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 mr-3 sm:mr-4 flex items-center justify-center ${
                            formData.followedX === "yes"
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          }`}>
                            {formData.followedX === "yes" && (
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                            )}
                          </div>
                          <span className="text-sm sm:text-base font-medium">
                            Yes, I'm already following @BlockchainLaut1
                          </span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, followedX: "no" })}
                        className={`w-full p-4 sm:p-5 rounded-lg border-2 transition-all text-left touch-manipulation ${
                          formData.followedX === "no"
                            ? "border-blue-500 bg-blue-50 text-blue-800 shadow-md"
                            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 mr-3 sm:mr-4 flex items-center justify-center ${
                            formData.followedX === "no"
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          }`}>
                            {formData.followedX === "no" && (
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                            )}
                          </div>
                          <span className="text-sm sm:text-base font-medium">
                            No, I haven't followed yet
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  {formData.followedX === "no" && (
                    <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <p className="text-sm sm:text-base text-blue-800 mb-4 leading-relaxed">
                        Follow us on X to stay updated with the latest blockchain news, events, and opportunities!
                      </p>
                      <Button
                        type="button"
                        onClick={handleFollowX}
                        variant="outline"
                        className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 border-black h-11 sm:h-12 px-6"
                      >
                        <XIcon className="w-4 h-4 mr-2" />
                        Follow @BlockchainLaut1
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-orange-600 font-bold text-sm sm:text-base">4</span>
                  </div>
                  Areas of Interest
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  Select all blockchain topics that interest you:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleInterestToggle(interest)}
                        className="w-5 h-5"
                      />
                      <Label htmlFor={interest} className="text-sm sm:text-base cursor-pointer leading-relaxed flex-1">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
                
                {formData.interests.length > 0 && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-3">Selected interests:</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Experience & Goals */}
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-teal-600 font-bold text-sm sm:text-base">5</span>
                  </div>
                  Experience & Goals
                </h3>
                
                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-sm sm:text-base font-semibold">
                      Previous Blockchain Experience
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => setFormData({ ...formData, experience: value })}
                    >
                      <SelectTrigger className="h-11 sm:h-12">
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="goals" className="text-sm sm:text-base font-semibold">
                      What do you hope to achieve through the club?
                    </Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      rows={5}
                      placeholder="Tell us about your goals, what you hope to learn, and how you'd like to contribute to the blockchain community..."
                      className="text-base resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Newsletter & Terms */}
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-rose-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-rose-600 font-bold text-sm sm:text-base">6</span>
                  </div>
                  Final Steps
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked })}
                      className="mt-1 w-5 h-5"
                    />
                    <Label htmlFor="newsletter" className="cursor-pointer text-sm sm:text-base leading-relaxed flex-1">
                      Subscribe to our newsletter for updates on events, blockchain news, and exclusive opportunities
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border-l-4 border-blue-500">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => setFormData({ ...formData, terms: checked })}
                      required
                      className="mt-1 w-5 h-5"
                    />
                    <Label htmlFor="terms" className="cursor-pointer text-sm sm:text-base leading-relaxed flex-1 font-medium">
                      I agree to the club's terms and conditions and privacy policy *
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <Button 
                  type="button" 
                  onClick={handleSubmit}
                  className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200" 
                  disabled={isSubmitting || !formData.terms}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Submitting Application...
                    </div>
                  ) : (
                    "Join the Blockchain Community"
                  )}
                </Button>
                
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4 leading-relaxed">
                  By submitting this form, you'll receive a confirmation email within 24 hours
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

      <Footer />
    </main>
  )
}