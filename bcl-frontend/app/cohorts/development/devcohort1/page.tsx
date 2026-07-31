"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Pill, SectionIntro } from "@/components/section-intro"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Rocket,
  MessageCircle,
  Briefcase,
  Lock,
  Loader2,
} from "lucide-react"

const API_BASE = "https://bcl-website-95bd.onrender.com"

type Theme = {
  tagBg: string
  tagText: string
  tagBorder: string
  cardBg: string
  accentBar: string
}

const themes: Record<"violet" | "amber", Theme> = {
  violet: {
    tagBg: "bg-violet-50",
    tagText: "text-violet-700",
    tagBorder: "border-violet-200",
    cardBg: "bg-gradient-to-b from-violet-50 to-white",
    accentBar: "bg-violet-500",
  },
  amber: {
    tagBg: "bg-amber-50",
    tagText: "text-amber-700",
    tagBorder: "border-amber-200",
    cardBg: "bg-gradient-to-b from-amber-50 to-white",
    accentBar: "bg-amber-400",
  },
}

const tracks = [
  {
    theme: themes.violet,
    phaseTag: "FOUNDATION · PHASE 1",
    title: "Web2 Track",
    description:
      "Core technologies for building modern web applications the foundation every blockchain developer needs.",
    skills: [
      "HTML, CSS & JavaScript",
      "Git & GitHub (Version Control)",
      "Building & deploying real projects",
      "APIs & databases",
      "Next.js & Node.js",
    ],
    outcome:
      "Build and deploy functional web applications and understand modern development workflows.",
  },
  {
    theme: themes.amber,
    phaseTag: "BLOCKCHAIN · PHASE 2",
    title: "Web3 Track",
    description:
      "Transition into decentralized development smart contracts, dApps, and real blockchain ecosystems.",
    skills: [
      "Blockchain fundamentals & Web3",
      "Smart contracts & dApps",
      "Wallets, transactions & on-chain",
      "Building on real blockchain ecosystem",
      "Web3 Tooling",
    ],
    outcome:
      "Build basic dApps and understand how blockchain integrates with web applications end-to-end.",
  },
]

const accentCycleTop = ["border-t-blue-500", "border-t-violet-500", "border-t-amber-400", "border-t-emerald-500"]
const accentCycleLeft = ["border-l-blue-500", "border-l-violet-500", "border-l-amber-400", "border-l-emerald-500"]

const phases = [
  {
    label: "PHASE 01 · WEEKS 1–4",
    title: "Web Fundamentals",
    description: "HTML, CSS, JavaScript basics & version control",
  },
  {
    label: "PHASE 02 · WEEKS 5–6",
    title: "Frameworks & Backend",
    description: "Next.js, Node.js, APIs & database integration",
  },
  {
    label: "PHASE 03 · WEEKS 7–9",
    title: "Blockchain Foundation",
    description: "Web3 concepts, wallets, on-chain interactions",
  },
  {
    label: "PHASE 04 · WEEKS 10–12",
    title: "Build & Ship",
    description: "Smart contracts, dApp dev & final project demo",
  },
]

const targetAudience = [
  "Beginners curious about software development",
  "Students transitioning into Web3",
  "Developers who want blockchain experience",
  "Anyone passionate about building real products",
]

const benefits = [
  {
    icon: BookOpen,
    title: "Web2 & Web3 Foundation",
    description: "Comprehensive grasp of both traditional and blockchain development, the full stack.",
  },
  {
    icon: Briefcase,
    title: "Real Project Portfolio",
    description: "Build and deploy actual applications you can show employers and pitch to investors.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from experienced builders who've shipped real products in Web3.",
  },
  {
    icon: MessageCircle,
    title: "Community Support",
    description: "Collaborate with peers, get unstuck fast, and build lasting professional connections.",
  },
  {
    icon: Award,
    title: "Hackathon Ready",
    description: "Come out equipped to compete in blockchain hackathons and real-world challenges.",
  },
  {
    icon: Rocket,
    title: "Internship Preparation",
    description: "Gain the skills and portfolio that make you competitive for Web3 internships and jobs.",
  },
]

const stats = [
  { value: "12", label: "Weeks Duration", filled: true },
  { value: "100", label: "Available Slots", filled: false },
  { value: "2", label: "Learning Tracks", filled: false },
  { value: "Hybrid", label: "Format", filled: false },
]

export default function DevelopmentCohortPage() {
  const [applicationsOpen, setApplicationsOpen] = useState<boolean | null>(null)

  useEffect(() => {
    fetch(`${API_BASE}/cohorts/applications/status`)
      .then((r) => r.json())
      .then((d) => setApplicationsOpen(d.applications_open))
      .catch(() => setApplicationsOpen(true)) // fail open — don't block if API is down
  }, [])

  const RegisterButton = ({ className = "" }: { className?: string }) => {
    if (applicationsOpen === null) {
      return (
        <Button className={className} disabled>
          <Loader2 className="h-5 w-5 animate-spin" /> Checking...
        </Button>
      )
    }
    if (!applicationsOpen) {
      return (
        <Button className={className} disabled>
          <Lock className="h-5 w-5" /> Applications Closed
        </Button>
      )
    }
    return (
      <Button asChild className={className}>
        <Link href="/cohorts/development/devcohort1/register" className="flex items-center gap-2">
          Apply Now <ArrowRight className="h-5 w-5" />
        </Link>
      </Button>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary/5 py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <Pill>Developer Cohort Programs</Pill>
          <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Developer Cohort Programs
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Structured learning paths to transform you from beginner to blockchain developer
          </p>
        </div>
      </section>

      {/* Current Cohort */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-lg flex-col items-start gap-4">
            <Pill>{applicationsOpen === false ? "Applications Closed" : "Now Open"}</Pill>
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Current Cohort: <span className="text-primary">Developer Cohort 1</span>
            </h2>
            <p className="text-gray-400">
              A comprehensive 12-week program blending Web2 foundations with Web3 development
              built to take you from beginner to blockchain builder.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <RegisterButton className="rounded-xl px-6 py-3" />
              <Button variant="outline" asChild className="rounded-xl px-6 py-3">
                <Link href="/cohorts" className="flex items-center gap-2">
                  ← All Cohorts
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid w-full max-w-xs grid-cols-2 gap-4 lg:flex lg:w-auto lg:flex-col">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 rounded-lg px-4 py-3 ${
                  stat.filled
                    ? "bg-primary text-white"
                    : "border border-primary/30 bg-white text-primary"
                }`}
              >
                <span className="text-base font-semibold">{stat.value}</span>
                <span className={`text-sm ${stat.filled ? "text-white/80" : "text-gray-400"}`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            align="left"
            pill="Curriculum"
            heading="Two tracks, one complete journey"
            subtext="Start with the web fundamentals that power every great product, then move into blockchain development."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {tracks.map((track) => (
              <div
                key={track.title}
                className={`flex flex-col gap-4 rounded-2xl border border-gray-100 p-8 shadow-sm ${track.theme.cardBg}`}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className={`inline-flex w-fit items-center rounded-md border px-4 py-1 text-sm ${track.theme.tagBg} ${track.theme.tagText} ${track.theme.tagBorder}`}
                  >
                    {track.phaseTag}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{track.title}</h3>
                  <p className="text-gray-400">{track.description}</p>
                </div>

                <div className={`h-0.5 w-full rounded-full ${track.theme.accentBar}`} />

                <div>
                  <h4 className="mb-3 font-semibold text-gray-600">What you&apos;ll learn</h4>
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center rounded-md border px-4 py-1 text-sm ${track.theme.tagBg} ${track.theme.tagText} ${track.theme.tagBorder}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`rounded-md border px-4 py-2 text-sm ${track.theme.tagBg} ${track.theme.tagBorder} ${track.theme.tagText}`}
                >
                  <span className="font-semibold">Tracking Outcome</span>
                  <br />
                  {track.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            align="left"
            pill="Project Structure"
            heading="12 weeks, structured progression"
            subtext="Each phase builds on the last no jumping ahead, no skipping the foundations."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex flex-col gap-1 rounded-lg border border-gray-200 border-t-4 bg-white px-6 py-4 ${accentCycleTop[i % accentCycleTop.length]}`}
              >
                <span className="text-xs font-medium text-gray-400">{phase.label}</span>
                <span className="font-medium text-gray-900">{phase.title}</span>
                <span className="text-sm text-gray-600">{phase.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            align="left"
            pill="Who It's For"
            heading="Built for motivated learners at any stage"
            subtext="No prior blockchain experience needed — just the drive to build."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {targetAudience.map((text, i) => (
              <div
                key={text}
                className={`flex items-center rounded-lg border border-gray-200 border-l-4 bg-white px-6 py-4 ${accentCycleLeft[i % accentCycleLeft.length]}`}
              >
                <span className="text-sm text-gray-900">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills gained */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            align="left"
            pill="What You'll Gain"
            heading="Skills, experience & community"
            subtext="Everything you need to complete in the Web3 job market after 12 weeks."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white px-8 py-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-primary">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-900">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
