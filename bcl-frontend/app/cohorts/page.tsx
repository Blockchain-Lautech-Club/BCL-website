"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Code, 
  Palette, 
  TrendingUp, 
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Target,
  Lightbulb,
  Award,
  Calendar,
  UserPlus
} from "lucide-react"

const cohorts = [
  {
    icon: Code,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    title: "Development Cohort",
    description: "Learn how to build modern web applications & decentralized applications from scratch.",
    skills: [
      "Frontend & Backend Frameworks",
      "Blockchain fundamentals",
      "Smart contracts (Solidity)",
      "Web3 integration",
      "DeFi, NFTs, and on-chain apps"
    ],
    targetAudience: "Aspiring developers and programmers who want to build blockchain-based products.",
    outcome: "Graduate with hands-on project experience and a solid foundation in Web3 development.",
    ctaText: "View Development Cohorts",
    ctaLink: "/cohorts/development",
    disabled: false
  },
  {
    icon: Palette,
    iconColor: "text-accent",
    bgColor: "bg-accent/10",
    title: "UI/UX & Product Cohort",
    description: "Design user-friendly and visually appealing Web3 products.",
    skills: [
      "UI/UX principles for Web3 apps",
      "Product design for blockchain platforms",
      "Branding and visual systems",
      "Design tools (Figma, prototyping)"
    ],
    targetAudience: "Creative students interested in design, branding, and user experience within Web3.",
    outcome: "Build a portfolio of blockchain-focused design projects.",
    ctaText: "Coming Soon",
    ctaLink: "/cohorts/design",
    disabled: true
  },
  {
    icon: TrendingUp,
    iconColor: "text-green-600",
    bgColor: "bg-green-600/10",
    title: "Crypto Trading & Market Analysis Cohort",
    description: "Understand the crypto market and learn responsible trading strategies.",
    skills: [
      "Market fundamentals",
      "Technical and basic fundamental analysis",
      "Risk management",
      "Trading psychology"
    ],
    targetAudience: "Students interested in crypto markets, investing, and financial literacy.",
    outcome: "Gain structured knowledge to navigate crypto markets responsibly.",
    ctaText: "Coming Soon",
    ctaLink: "/cohorts/trading",
    disabled: true
  },
  {
    icon: BookOpen,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-600/10",
    title: "Web3 Research & Education Cohort",
    description: "Focus on blockchain theory, governance, and education.",
    skills: [
      "Blockchain concepts and history",
      "Tokenomics and governance",
      "Web3 ethics and regulation",
      "Content creation and community education"
    ],
    targetAudience: "Students who prefer research, writing, teaching, and community building in Web3.",
    outcome: "Become a blockchain educator, researcher, or community advocate.",
    ctaText: "Coming Soon",
    ctaLink: "/cohorts/research",
    disabled: true
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Apply or Register",
    description: "Choose a cohort and sign up when registration opens.",
    icon: UserPlus
  },
  {
    step: "2",
    title: "Learn",
    description: "Attend structured sessions, workshops, and tutorials.",
    icon: BookOpen
  },
  {
    step: "3",
    title: "Build",
    description: "Work on real-world projects individually and in teams.",
    icon: Code
  },
  {
    step: "4",
    title: "Mentorship",
    description: "Get guidance from experienced mentors and facilitators.",
    icon: Users
  },
  {
    step: "5",
    title: "Graduate",
    description: "Complete the program and receive certification and community recognition.",
    icon: GraduationCap
  }
]

const benefits = [
  {
    icon: Target,
    title: "Structured Learning Paths",
    description: "Follow carefully designed curricula tailored to each specialization"
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real-world applications and solve practical problems"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Access to mentors and industry professionals throughout your journey"
  },
  {
    icon: Lightbulb,
    title: "Community Support",
    description: "Learn alongside passionate peers in a collaborative environment"
  },
  {
    icon: Award,
    title: "Career Preparation",
    description: "Get ready for hackathons, internships, and job opportunities"
  },
  {
    icon: GraduationCap,
    title: "Certification",
    description: "Receive recognition for completing the program successfully"
  }
]

export default function CohortsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-accent/5 to-primary/5 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Cohorts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-2">
              Learn. Build. Grow.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Cohort Programs are structured learning tracks designed to help students gain real-world 
              blockchain skills in focused areas.
            </p>
            {/* <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed mt-6">
              Whether you are a beginner or already building, there is a cohort tailored for you.
            </p> */}
          </div>
        </div>
      </section>

      {/* Available Cohorts */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Available Cohorts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the learning path that matches your interests and goals
            </p>
          </div> */}

          <div className="space-y-8">
            {cohorts.map((cohort, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon & Title */}
                    <div className="lg:w-1/3">
                      <div className={`inline-flex p-4 ${cohort.bgColor} rounded-lg mb-4`}>
                        <cohort.icon className={`h-12 w-12 ${cohort.iconColor}`} />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                        {cohort.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {cohort.description}
                      </p>
                      {cohort.disabled ? (
                        <Button disabled className="w-full lg:w-auto opacity-60 cursor-not-allowed">
                          {cohort.ctaText}
                        </Button>
                      ) : (
                        <Button asChild className="w-full lg:w-auto">
                          <Link href={cohort.ctaLink} className="flex items-center justify-center gap-2">
                            {cohort.ctaText} <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>

                    {/* Details */}
                    <div className="lg:w-2/3 space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          What You'll Learn:
                        </h4>
                        <ul className="space-y-2 ml-7">
                          {cohort.skills.map((skill, idx) => (
                            <li key={idx} className="text-gray-600 leading-relaxed">
                              • {skill}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5 text-accent" />
                          Who It's For:
                        </h4>
                        <p className="text-gray-600 leading-relaxed ml-7">
                          {cohort.targetAudience}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Award className="h-5 w-5 text-green-600" />
                          Outcome:
                        </h4>
                        <p className="text-gray-600 leading-relaxed ml-7">
                          {cohort.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Cohorts Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">How Our Cohorts Work</h2>
            <p className="text-lg text-gray-600">A simple, effective process to guide your learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorks.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Why Join a Blockchain LAUTECH Cohort?
            </h2>
            <p className="text-lg text-gray-600">The benefits that make our cohorts stand out</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-linear-to-br from-primary/10 via-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-serif text-3xl font-bold text-primary text-center">
                Ready to Start Your Journey?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-center mb-8 text-lg">
                Join one of our cohorts and take your first step into the blockchain ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/cohorts/all" className="flex items-center gap-2">
                    Browse All Cohorts <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="bg-transparent">
                  <Link href="/join">Join the Next Cohort</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="bg-transparent">
                  <Link href="/mentor">Become a Mentor</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Footer Tagline */}
      {/* <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold text-primary">Blockchain LAUTECH</span> – Building the next generation of Web3 talent at LAUTECH.
          </p>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}