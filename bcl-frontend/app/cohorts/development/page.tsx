"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Code,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Award,
  Blocks,
  GitBranch,
  Calendar,
  Users,
  Target,
} from "lucide-react";

const web2Skills = [
  "HTML, CSS, JavaScript, Next.js & Node.js",
  "Frontend frameworks & basic backend concepts",
  "Version control (Git & GitHub)",
  "Building and deploying real-world projects",
  "Introduction to APIs & databases",
];

const web3Skills = [
  "Blockchain fundamentals & Web3 concepts",
  "Smart contracts & decentralized applications (dApps)",
  "Wallets, transactions & on-chain interactions",
  "Building on real blockchain ecosystems",
  "Web3 tooling & developer best practices",
];

const upcomingCohorts = [
  {
    title: "Advanced Web3 Development",
    description:
      "Deep dive into complex smart contracts, DeFi protocols, and advanced blockchain architecture",
    status: "Coming Soon",
    icon: Blocks,
  },
  {
    title: "Full-Stack Blockchain Development",
    description:
      "Master end-to-end blockchain application development with advanced tooling",
    status: "Coming Soon",
    icon: GitBranch,
  },
];

export default function DevelopmentCohortsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary text-white">
              Development Cohorts
            </Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Developer Cohort Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Structured learning paths to transform you from beginner to
              blockchain developer
            </p>
          </div>
        </div>
      </section>

      {/* Current Cohort - Featured */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600 text-white">Now Open</Badge>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Current Cohort: Developer Cohort 1
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              12 weeks of intensive Web2 and Web3 development training
            </p>
          </div>

          {/* Quick Overview */}
          <div className="mb-2">
            <Card className="border-0 shadow-xl bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Duration
                    </h3>
                    <p className="text-gray-600">12 Weeks</p>
                  </div>
                  <div>
                    <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Format</h3>
                    <p className="text-gray-600">Hybrid Learning</p>
                  </div>
                  <div>
                    <Target className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Level</h3>
                    <p className="text-gray-600">Beginner to Intermediate</p>
                  </div>
                </div>
                <div className="text-center mt-5">
                  {/* <Card className="border-0 shadow-xl bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8"> */}
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    Ready to Join Developer Cohort 1?
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                    Applications are now open. Get comprehensive details about
                    the curriculum, schedule, and application process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="text-lg px-8">
                      <Link
                        href="/cohorts/development/devcohort1"
                        className="flex items-center gap-2"
                      >
                        View Full Details <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  {/* </CardContent>
            </Card> */}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Tracks */}
          <div className="mb-12">
            {/* <h3 className="font-serif text-2xl font-bold text-gray-900 text-center mb-8">
              What You'll Learn
            </h3> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Web2 Track */}
              {/* <Card className="border-0 shadow-xl">
                <CardHeader className="bg-linear-to-br from-primary/10 to-primary/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <div className="py-2">
                      <Badge className="bg-primary text-white mb-2">Foundation</Badge>
                      <CardTitle className="font-serif text-2xl font-bold text-gray-900">
                        Web2 Track
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-2">
                    You will learn the core technologies required to build modern web applications.
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {web2Skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Outcome:
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Participants will be able to build and deploy functional web applications and understand 
                      modern development workflows.
                    </p>
                  </div>
                </CardContent>
              </Card> */}

              {/* Web3 Track */}
              {/* <Card className="border-0 shadow-xl">
                <CardHeader className="bg-linear-to-br from-accent/10 to-accent/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Blocks className="h-8 w-8 text-accent" />
                    </div>
                    <div className="py-2">
                      <Badge className="bg-accent text-white mb-2">Blockchain</Badge>
                      <CardTitle className="font-serif text-2xl font-bold text-gray-900">
                        Web3 Track
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-2">
                    You will transition into blockchain development and decentralized systems.
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" />
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {web3Skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                    <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent" />
                      Outcome:
                    </h5>
                    <p className="text-gray-600 leading-relaxed">
                      Participants will be able to build basic dApps and understand how blockchain integrates 
                      with web applications.
                    </p>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>

          {/* CTA for Current Cohort */}
          {/* <div className="text-center">
            <Card className="border-0 shadow-xl bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Ready to Join Developer Cohort 1?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                  Applications are now open. Get comprehensive details about the curriculum, 
                  schedule, and application process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/cohorts/development/devcohort1" className="flex items-center gap-2">
                      View Full Details <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>

      {/* Upcoming Developer Cohorts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              Upcoming Developer Cohorts
            </h2>
            <p className="text-lg text-gray-600">
              We're expanding our developer program with specialized tracks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingCohorts.map((cohort, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <cohort.icon className="h-8 w-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-serif text-xl font-bold text-gray-900">
                          {cohort.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {cohort.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {cohort.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back to All Cohorts */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button
            variant="outline"
            asChild
            size="lg"
            className="bg-transparent"
          >
            <Link href="/cohorts" className="flex items-center gap-2">
              ← Back to All Cohorts
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
