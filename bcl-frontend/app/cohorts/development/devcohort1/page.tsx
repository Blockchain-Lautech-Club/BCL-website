"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Code,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Award,
  Calendar,
  BookOpen,
  Rocket,
  Lightbulb,
  GitBranch,
  Blocks,
  Briefcase,
  Lock,
  Loader2,
} from "lucide-react"

const API_BASE = "http://127.0.0.1:8000"

const web2Skills = [
  "HTML, CSS, JavaScript, Next.js & Node.js",
  "Frontend frameworks & basic backend concepts",
  "Version control (Git & GitHub)",
  "Building and deploying real-world projects",
  "Introduction to APIs & databases",
]

const web3Skills = [
  "Blockchain fundamentals & Web3 concepts",
  "Smart contracts & decentralized applications (dApps)",
  "Wallets, transactions & on-chain interactions",
  "Building on real blockchain ecosystems",
  "Web3 tooling & developer best practices",
]

const targetAudience = [
  { icon: Code,      text: "Beginners interested in software development" },
  { icon: Rocket,    text: "Students transitioning into Web3" },
  { icon: Lightbulb, text: "Developers who want blockchain experience" },
  { icon: Target,    text: "Anyone passionate about building real products" },
]

const benefits = [
  { icon: BookOpen,  title: "Strong Web2 and Web3 Foundation",   description: "Comprehensive understanding of both traditional and blockchain development" },
  { icon: Code,      title: "Real Project Portfolio",             description: "Build and deploy actual applications to showcase your skills" },
  { icon: Users,     title: "Expert Mentorship",                  description: "Learn from experienced builders throughout your journey" },
  { icon: Lightbulb, title: "Community Support",                  description: "Collaborate with peers and get help when you need it" },
  { icon: Award,     title: "Hackathon Ready",                    description: "Prepare for competitions and real-world challenges" },
  { icon: Briefcase, title: "Internship Preparation",             description: "Gain skills that make you competitive for opportunities" },
]

export default function DevelopmentCohortPage() {
  const [applicationsOpen, setApplicationsOpen] = useState<boolean | null>(null)

  useEffect(() => {
    fetch(`${API_BASE}/cohorts/applications/status`)
      .then((r) => r.json())
      .then((d) => setApplicationsOpen(d.applications_open))
      .catch(() => setApplicationsOpen(true)) // fail open — don't block if API is down
  }, [])

  const RegisterButton = ({ size = "lg", className = "" }: { size?: "lg" | "sm", className?: string }) => {
    // Still fetching
    if (applicationsOpen === null) {
      return (
        <Button size={size} className={className} disabled>
          <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Checking...
        </Button>
      )
    }
    // Closed
    if (!applicationsOpen) {
      return (
        <Button size={size} className={className} disabled>
          <Lock className="h-5 w-5 mr-2" /> Applications Closed
        </Button>
      )
    }
    // Open
    return (
      <Button asChild size={size} className={`${className}`}>
        <Link href="/cohorts/development/devcohort1/register" className="flex items-center gap-2">
          Register for the Cohort <ArrowRight className="h-5 w-5" />
        </Link>
      </Button>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-accent/5 to-primary/5 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary text-white">Developer Cohort</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              DEV - COHORT I
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              This cohort blends Web2 foundations with Web3 development, ensuring participants gain the skills
              needed to build modern blockchain-enabled applications.
            </p>

            {/* Closed notice banner */}
            {applicationsOpen === false && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium">
                <Lock className="h-4 w-4" />
                Applications for this cohort are currently closed.
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <RegisterButton size="lg" className="text-lg px-8" />
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Learning Tracks</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive curriculum that takes you from web fundamentals to blockchain development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Web2 Track */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-linear-to-br from-primary/10 to-primary/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <div className="py-2">
                    <Badge className="bg-primary text-white mb-2">Foundation</Badge>
                    <CardTitle className="font-serif text-2xl font-bold text-gray-900">Web2 Track</CardTitle>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-2">
                  You will learn the core technologies required to build modern web applications.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" /> What You'll Learn:
                </h4>
                <ul className="space-y-3 mb-6">
                  {web2Skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" /> Outcome:
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    Participants will be able to build and deploy functional web applications and understand
                    modern development workflows.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Web3 Track */}
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-linear-to-br from-accent/10 to-accent/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Blocks className="h-8 w-8 text-accent" />
                  </div>
                  <div className="py-2">
                    <Badge className="bg-accent text-white mb-2">Blockchain</Badge>
                    <CardTitle className="font-serif text-2xl font-bold text-gray-900">Web3 Track</CardTitle>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-2">
                  You will transition into blockchain development and decentralized systems.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-accent" /> What You'll Learn:
                </h4>
                <ul className="space-y-3 mb-6">
                  {web3Skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" /> Outcome:
                  </h5>
                  <p className="text-gray-600 leading-relaxed">
                    Participants will be able to build basic dApps and understand how blockchain integrates
                    with web applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Duration Badge */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-linear-to-r from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900">Cohort Duration</h3>
                  <p className="text-gray-600 text-lg">
                    12 Weeks of structured learning, mentorship, and hands-on project building
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Who This Cohort Is For</h2>
            <p className="text-lg text-gray-600">This program is designed for motivated learners at any stage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">What You'll Gain</h2>
            <p className="text-lg text-gray-600">The skills, experience, and connections you need to succeed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-lg mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-primary/10 via-accent/5 to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-serif text-3xl font-bold text-primary text-center">
                Ready to Start?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-center mb-8 text-lg">
                Take the first step into blockchain development with Blockchain LAUTECH.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RegisterButton size="lg" className="text-lg px-8" />
                <Button variant="outline" asChild size="lg" className="bg-transparent text-lg px-8">
                  <Link href="/cohorts">View All Cohorts</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}