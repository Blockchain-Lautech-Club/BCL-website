import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsTeaser } from "@/components/events-teaser"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team"


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsTeaser />
      <TeamSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
