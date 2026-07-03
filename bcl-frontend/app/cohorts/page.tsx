"use client"

import { Button } from "@/components/ui/button"
import { Pill, SectionIntro } from "@/components/section-intro"
import Link from "next/link"
import {
  Code,
  Palette,
  TrendingUp,
  BookOpen,
  Users,
  ArrowRight,
  GraduationCap,
  Target,
  MessageCircle,
  Award,
  PenLine,
  Wrench,
  Presentation,
  type LucideIcon,
} from "lucide-react"

type Theme = {
  tagBg: string
  tagText: string
  tagBorder: string
  accentBar: string
  whoBg: string
  whoBorder: string
  whoText: string
}

const themes: Record<"violet" | "amber" | "emerald" | "blue", Theme> = {
  violet: {
    tagBg: "bg-violet-50",
    tagText: "text-violet-700",
    tagBorder: "border-violet-200",
    accentBar: "bg-violet-500",
    whoBg: "bg-violet-50",
    whoBorder: "border-violet-200",
    whoText: "text-violet-700",
  },
  amber: {
    tagBg: "bg-amber-50",
    tagText: "text-amber-700",
    tagBorder: "border-amber-200",
    accentBar: "bg-amber-400",
    whoBg: "bg-amber-50",
    whoBorder: "border-amber-200",
    whoText: "text-amber-700",
  },
  emerald: {
    tagBg: "bg-emerald-50",
    tagText: "text-emerald-700",
    tagBorder: "border-emerald-200",
    accentBar: "bg-emerald-500",
    whoBg: "bg-emerald-50",
    whoBorder: "border-emerald-200",
    whoText: "text-emerald-700",
  },
  blue: {
    tagBg: "bg-blue-50",
    tagText: "text-blue-700",
    tagBorder: "border-blue-200",
    accentBar: "bg-blue-500",
    whoBg: "bg-blue-50",
    whoBorder: "border-blue-200",
    whoText: "text-blue-700",
  },
}

const cohorts = [
  {
    icon: Code,
    theme: themes.violet,
    category: "Development",
    title: "Web & Blockchain Dev Cohort",
    description:
      "Build modern web apps and decentralized applications from scratch, frontend to smart contracts.",
    skills: [
      "Frontend & Backend",
      "Blockchain Fundamentals",
      "Web3 Integration",
      "DeFi & NFTs",
      "Solidity",
    ],
    targetAudience:
      "Aspiring developers who want to build real blockchain-based products from day one.",
    ctaText: "View Details",
    ctaLink: "/cohorts/development",
    statusText: "Cohort 1 - 100 slots",
    disabled: false,
  },
  {
    icon: Palette,
    theme: themes.amber,
    category: "UI/UX & Product",
    title: "Design & Product Cohort",
    description:
      "Design user-friendly and visually compelling Web3 products that people actually want to use.",
    skills: ["UI/UX for Web3", "Branding Systems", "Prototyping", "Figma", "Product Design"],
    targetAudience:
      "Creative students into design, branding, and user experience within the Web3 space.",
    ctaText: "View Details",
    ctaLink: "/cohorts/design",
    statusText: "Opening Soon",
    disabled: true,
  },
  {
    icon: TrendingUp,
    theme: themes.emerald,
    category: "Trading & Markets",
    title: "Crypto Trading & Analysis Cohort",
    description:
      "Understand crypto markets and develop responsible, strategy-backed trading habits.",
    skills: ["Market Fundamentals", "Risk Management", "Trading Psychology", "Technical Analysis"],
    targetAudience:
      "Students curious about crypto markets, investing strategies, and financial literacy in Web3.",
    ctaText: "View Details",
    ctaLink: "/cohorts/trading",
    statusText: "Opening Soon",
    disabled: true,
  },
  {
    icon: BookOpen,
    theme: themes.blue,
    category: "Research & Education",
    title: "Web3 Research & Education Cohort",
    description:
      "Dive deep into blockchain theory, governance, and build your voice as a Web3 educator.",
    skills: ["Blockchain History", "Governance", "Web3 Ethics", "Community Education", "Tokenomics"],
    targetAudience:
      "Students who prefer research, writing, teaching, and building Web3 communities.",
    ctaText: "View Details",
    ctaLink: "/cohorts/research",
    statusText: "Opening Soon",
    disabled: true,
  },
]

const howItWorks: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Apply & Register",
    description: "Choose a cohort and sign up when registration opens.",
    icon: PenLine,
  },
  {
    title: "Learn",
    description: "Attend structured sessions, workshops, and tutorials.",
    icon: BookOpen,
  },
  {
    title: "Build",
    description: "Work on real-world projects solo and in teams.",
    icon: Wrench,
  },
  {
    title: "Mentorship",
    description: "Get guidance from experienced mentors and facilitators.",
    icon: Presentation,
  },
  {
    title: "Graduate",
    description: "Complete the program and receive certification.",
    icon: GraduationCap,
  },
]

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    icon: Target,
    title: "Structured Learning Paths",
    description: "Follow carefully designed curricula tailored to each specialization",
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real-world applications and solve practical problems",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Access to mentors and industry professionals throughout your journey",
  },
  {
    icon: MessageCircle,
    title: "Community Support",
    description: "Learn alongside passionate peers in a collaborative environment",
  },
  {
    icon: TrendingUp,
    title: "Career Preparation",
    description: "Get ready for hackathons, internships, and job opportunities",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive recognition for completing the program successfully",
  },
]

export default function CohortsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary/5 py-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <Pill>Our Cohorts</Pill>
          <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Level up your <span className="text-primary">Web3 Skills</span> with a Cohorts
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our Cohort Programs are structured learning tracks designed to help students gain
            real-world blockchain skills in focused areas.
          </p>
        </div>
      </section>

      {/* Choose your track */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            pill="Our Programs"
            heading="Choose your track"
            subtext="Each cohort is a focused learning path. Pick what aligns with your goals."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {cohorts.map((cohort) => (
              <div
                key={cohort.title}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <span
                    className={`inline-flex w-fit items-center rounded-md border px-4 py-1 text-sm ${cohort.theme.tagBg} ${cohort.theme.tagText} ${cohort.theme.tagBorder}`}
                  >
                    {cohort.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{cohort.title}</h3>
                  <p className="text-gray-400">{cohort.description}</p>
                </div>

                <div className={`h-0.5 w-full rounded-full ${cohort.theme.accentBar}`} />

                <div>
                  <h4 className="mb-3 font-semibold text-gray-600">What you&apos;ll learn</h4>
                  <div className="flex flex-wrap gap-2">
                    {cohort.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center rounded-md border px-4 py-1 text-sm ${cohort.theme.tagBg} ${cohort.theme.tagText} ${cohort.theme.tagBorder}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`rounded-md border px-4 py-2 text-sm ${cohort.theme.whoBg} ${cohort.theme.whoBorder} ${cohort.theme.whoText}`}
                >
                  <span className="font-semibold">WHO IT&apos;S FOR</span>
                  <br />
                  {cohort.targetAudience}
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
                  <span className="text-sm text-gray-400">{cohort.statusText}</span>
                  {cohort.disabled ? (
                    <Button className="rounded-xl opacity-70 pointer-events-none">
                      {cohort.ctaText}
                    </Button>
                  ) : (
                    <Button asChild className="rounded-xl">
                      <Link href={cohort.ctaLink} className="flex items-center gap-2">
                        {cohort.ctaText} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How our cohorts work */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            pill="The Process"
            heading="How our cohorts work"
            subtext="A simple, effective process to guide your learning journey from zero to graduate."
          />

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {howItWorks.map((step, index) => (
              <div key={step.title} className="relative flex flex-1 flex-col items-center gap-4 text-center">
                {index < howItWorks.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gray-200 md:block" />
                )}
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${
                    index === 0
                      ? "bg-primary text-white"
                      : "border-2 border-primary bg-white text-primary"
                  }`}
                >
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="max-w-[180px] text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative overflow-hidden bg-white py-16">
        <div
          className="absolute inset-x-0 bottom-0 h-64 bg-primary/10 [clip-path:polygon(0%_0%,100%_100%,0%_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-64 bg-primary/10 [clip-path:polygon(0%_100%,100%_0%,100%_100%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            pill="Why Us?"
            heading="Built To Make You Stand Out"
            subtext="The benefits that at our program apart from generic courses."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 rounded-lg border border-gray-100 bg-white px-8 py-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-b from-violet-600 to-primary">
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
