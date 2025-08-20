import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Network, Trophy, Handshake } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Explore cutting-edge blockchain technologies and their real-world applications through hands-on projects.",
    },
    {
      icon: Network,
      title: "Networking",
      description:
        "Connect with like-minded peers, industry professionals, and blockchain enthusiasts from across Nigeria.",
    },
    {
      icon: Trophy,
      title: "Skill Development",
      description:
        "Master blockchain development, smart contracts, DeFi, and emerging Web3 technologies through workshops.",
    },
    {
      icon: Handshake,
      title: "Community",
      description:
        "Join a supportive community of learners and builders shaping the future of decentralized technology.",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Our Club
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            The LAUTECH Blockchain Club is a student-driven community dedicated to exploring, learning, and building
            with blockchain technology. We bridge the gap between academic knowledge and practical blockchain
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-6" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                To empower LAUTECH students with blockchain knowledge, foster innovation, and create a thriving
                ecosystem where the next generation of blockchain developers and entrepreneurs can flourish.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Through workshops, hackathons, guest lectures, and collaborative projects, we're building the foundation
                for Nigeria's blockchain future.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="/blockchain-classroom.png"
                alt="Students learning blockchain technology"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
