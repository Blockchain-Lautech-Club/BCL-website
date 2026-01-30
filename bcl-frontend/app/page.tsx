import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsTeaser } from "@/components/events-teaser"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team"
import { PastEvents } from "@/components/past-events"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1">
        <HeroSection />
        <EventsTeaser />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <PastEvents />
      </div>
      <Footer />
    </div>
  )
}