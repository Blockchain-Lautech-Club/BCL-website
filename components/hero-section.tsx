import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Calendar, BookOpen, Pizza, Handshake, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-10 sm:py-20">
      <div className="absolute inset-0 bg-[url('/blockchain-network2.png')] bg-cover bg-center opacity-12"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Empowering LAUTECH Students to Lead in <span className="text-primary">Blockchain & Web3</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We’re the official blockchain & Web3 student community of LAUTECH — learning, building, and leading the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              <Link href="/join" className="flex items-center justify-center gap-2">
                Join the Club <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-md sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
            >
              <Link href="/events">Partner With Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">2500+</div>
              <div className="text-sm sm:text-base text-gray-600 text-center">Students Trained</div>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">5+</div>
              <div className="text-sm sm:text-base text-gray-600 text-center">Workshops & Hackathons</div>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 sm:col-span-1 col-span-1">
              <Handshake className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">20+</div>
              <div className="text-sm sm:text-base text-gray-600 text-center">Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
