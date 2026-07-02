"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Pill } from "@/components/section-intro"
import {
  CheckCircle,
  Users,
  BookOpen,
  Network,
  Trophy,
  Gift,
  Star,
  ExternalLink,
  Mail,
  Apple,
  CheckCircle2,
  Circle,
} from "lucide-react"

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Shared restyled classNames for the pill-shaped form controls
const pillInput =
  "h-auto rounded-[20px] border-gray-300 px-6 py-3 text-base placeholder:text-black/50"
const pillLabel = "text-base sm:text-lg font-medium text-gray-900/80"
const stepBadge = "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-b from-violet-600 to-primary text-white font-semibold text-sm sm:text-base shrink-0"

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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">Welcome to the Club!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for joining the LAUTECH Blockchain Club. We've sent a confirmation email with next steps and
            information about upcoming events.
          </p>
          <div className="space-y-4 max-w-sm mx-auto">
            <Button asChild className="w-full rounded-[20px]">
              <a href="/events">Explore Upcoming Events</a>
            </Button>
            <Button variant="outline" asChild className="w-full rounded-[20px] bg-transparent">
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#ebf3fe] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Join Our Community
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-900/80 max-w-3xl mx-auto leading-relaxed">
            Become part of LAUTECH's most innovative student community and start your journey into the future of
            technology.
          </p>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div
          className="absolute inset-x-0 bottom-0 h-64 bg-primary/10 [clip-path:polygon(0%_0%,100%_100%,0%_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-64 bg-primary/10 [clip-path:polygon(0%_100%,100%_0%,100%_100%)]"
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 flex flex-col items-center gap-3">
            <Pill>Member Benefits</Pill>
            <p className="text-base sm:text-lg text-gray-900/80">
              Unlock exclusive opportunities and resources as a club member
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {memberBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-6 text-center shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-b from-violet-600 to-primary">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-medium text-primary">{benefit.title}</h3>
                <p className="text-sm text-gray-900/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-3">
              Membership Application
            </h2>
            <p className="text-gray-900 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Fill out the form below to join our community of blockchain enthusiasts
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm sm:text-base">
              {error}
            </div>
          )}

          <div className="space-y-10 sm:space-y-14">
            {/* Personal Information */}
            <div>
              <h3 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                <span className={stepBadge}>1</span>
                Personal Information
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className={pillLabel}>
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className={pillInput}
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className={pillLabel}>
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className={pillInput}
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={pillLabel}>
                    E-mail Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={pillInput}
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className={pillLabel}>
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={pillInput}
                    placeholder="+234 8000000000"
                  />
                </div>
              </div>

              {/* Visual only — no auth system wired up behind these */}
              <div className="mt-8 flex flex-col items-center gap-4 max-w-xl mx-auto">
                <Button
                  type="button"
                  className="w-full rounded-[20px] bg-gradient-to-b from-violet-600 to-primary py-6 text-base"
                >
                  <Apple className="h-5 w-5" /> Sign in with Apple
                </Button>
                <Button
                  type="button"
                  className="w-full rounded-[20px] bg-gradient-to-b from-violet-600 to-primary py-6 text-base"
                >
                  <Mail className="h-5 w-5" /> Sign in with Email
                </Button>
                <span className="text-sm text-gray-900">
                  Already have an Account? <span className="text-primary underline">Login here</span>
                </span>
              </div>
            </div>

            {/* Academic Information & Stay Connected */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
              <div>
                <h3 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                  <span className={stepBadge}>2</span>
                  Academic Information
                </h3>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentId" className={pillLabel}>
                      Student ID *
                    </Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      required
                      className={pillInput}
                      placeholder="e.g 26/005"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department" className={pillLabel}>
                      Department *
                    </Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      required
                      className={pillInput}
                      placeholder="e.g Nursing"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level" className={pillLabel}>
                      Current level *
                    </Label>
                    <Input
                      id="level"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      required
                      className={pillInput}
                      placeholder="Enter your current level"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                  <span className={stepBadge}>3</span>
                  Stay Connected
                </h3>

                <div className="space-y-4">
                  <Label className={`${pillLabel} block`}>
                    Have you followed our X (Twitter) account? *
                  </Label>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, followedX: "yes" })}
                    className={`flex w-full items-center gap-3 rounded-[20px] border px-6 py-3 text-left transition-colors ${
                      formData.followedX === "yes"
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {formData.followedX === "yes" ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    ) : (
                      <Circle className="h-5 w-5 shrink-0 text-gray-400" />
                    )}
                    <span className="text-sm sm:text-base">Yes, I&apos;m already following @BlockchainLaut1</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, followedX: "no" })}
                    className={`flex w-full items-center gap-3 rounded-[20px] border px-6 py-3 text-left transition-colors ${
                      formData.followedX === "no"
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {formData.followedX === "no" ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    ) : (
                      <Circle className="h-5 w-5 shrink-0 text-gray-400" />
                    )}
                    <span className="text-sm sm:text-base">No, I haven&apos;t followed yet</span>
                  </button>

                  {formData.followedX === "no" && (
                    <div className="flex flex-col items-center gap-4 rounded-[20px] border border-gray-200 px-6 py-4 text-center">
                      <p className="text-sm text-gray-900/70 leading-relaxed">
                        Follow us on X to stay updated with the latest blockchain news, events, and opportunities!
                      </p>
                      <Button
                        type="button"
                        onClick={handleFollowX}
                        className="w-fit gap-2 rounded-[10px] bg-gradient-to-b from-violet-600 to-primary px-4 py-2"
                      >
                        <XIcon className="w-4 h-4" />
                        BlockchainLaut1
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <h3 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                <span className={stepBadge}>4</span>
                Areas of Interest
              </h3>
              <p className="text-gray-900 mb-6 text-base leading-relaxed">
                Select all blockchain topics that interest you:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    htmlFor={interest}
                    className="flex items-center gap-3 rounded-[15px] border border-gray-200 bg-gray-50 px-6 py-3 cursor-pointer"
                  >
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <span className="text-sm leading-relaxed flex-1">{interest}</span>
                  </label>
                ))}
              </div>

              {formData.interests.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-3">Selected interests:</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.interests.map((interest) => (
                      <Badge key={interest} variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm px-3 py-1">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Experience & Goals */}
            <div>
              <h3 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                <span className={stepBadge}>5</span>
                Experience & Goals
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="experience" className={pillLabel}>
                    Previous Blockchain Experience
                  </Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  >
                    <SelectTrigger className={`${pillInput} w-full`}>
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
                  <Label htmlFor="goals" className={pillLabel}>
                    What do you hope to achieve through the Club
                  </Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    rows={5}
                    placeholder="Tell us about what you want to learn, your goal and how you'd like to contribute to the blockchain community"
                    className="rounded-[20px] border-gray-300 px-6 py-3 text-base resize-none placeholder:text-black/50"
                  />
                </div>
              </div>
            </div>

            {/* Final Steps */}
            <div>
              <h3 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                <span className={stepBadge}>6</span>
                Final Steps
              </h3>

              <div className="space-y-4">
                <label
                  htmlFor="newsletter"
                  className="flex items-center gap-3 rounded-[15px] border border-gray-200 bg-gray-50 px-6 py-4 cursor-pointer"
                >
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked === true })}
                  />
                  <span className="text-sm leading-relaxed flex-1">
                    Subscribe to our newsletter for updates on events, blockchain news and exclusive opportunities
                  </span>
                </label>

                <label
                  htmlFor="terms"
                  className="flex items-center gap-3 rounded-[15px] border border-gray-200 bg-gray-50 px-6 py-4 cursor-pointer"
                >
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData({ ...formData, terms: checked === true })}
                    required
                  />
                  <span className="text-sm leading-relaxed flex-1">
                    I agree to the club&apos;s term, condition and privacy policy
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="button"
                onClick={handleSubmit}
                className="w-full h-auto rounded-[20px] bg-gradient-to-b from-violet-600 to-primary py-4 text-lg font-medium"
                disabled={isSubmitting || !formData.terms}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting Application...
                  </div>
                ) : (
                  "Join the Blockchain Community"
                )}
              </Button>

              <p className="text-sm text-gray-900/50 text-center mt-4 leading-relaxed">
                By submitting this form, you&apos;ll receive a confirmation email within{" "}
                <span className="text-primary">24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
