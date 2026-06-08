import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsTeaser } from "@/components/events-teaser"
import { Testimonials } from "@/components/landingPage/testimonials"
import Team from "@/components/team"
import Partners from "@/components/landingPage/partners"
import GalleryCarousel from "@/components/landingPage/galleries"


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <HeroSection />
        <EventsTeaser />
        <AboutSection />
        <GalleryCarousel />
        <Partners /> {/* done from the ui*/}
        <Team /> {/* half-done from the ui*/}
        <Testimonials /> {/* done from the ui*/}
      </div>
    </div>
  )
}