'use client';
import { Card, CardContent } from "@/components/ui/card"

import { motion } from 'framer-motion';
import { Lightbulb, Network, Trophy, Handshake, Shield, Globe, Users, Target, Compass, Eye } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "...we build without limits.",
    },
    {
      icon: Globe,
      title: "Impact",
      description:
        "...we create real change.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "...we promote ethical adoption.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description:
        "...we grow together.",
    },
  ]

  return (
    <section className="py-3 sm:py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 md:mb-6 mt-3">
          About Our Club
        </h2>
        <div className="container mx-auto px-4 mb-6 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Card 1: Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-700 rounded-2xl p-6 sm:p-8 md:p-12 shadow-md hover:scale-105 transition duration-300"
            >
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Users className="w-8 h-8 text-blue-400 hover:text-neon-teal" aria-label="Who We Are" />
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
                  Who We Are
                </h3>
              </div>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Blockchain Lautech is a vibrant student-led community at LAUTECH, passionate about blockchain education, innovation, and adoption.
              </p>
            </motion.div>

            {/* Card 2: We Exist To */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-700 rounded-2xl p-6 sm:p-8 md:p-12 shadow-md hover:scale-105 transition duration-300"
            >
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Target className="w-8 h-8 text-blue-400 hover:text-neon-teal" aria-label="We Exist To" />
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">
                  We Exist To
                </h3>
              </div>
              <ul className="text-gray-200 text-base sm:text-lg leading-relaxed space-y-2">
                <li>Make blockchain accessible to every student.</li>
                <li>Equip members with skills to thrive in Web3.</li>
                <li>Connect LAUTECH to the global blockchain ecosystem.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MISSION AND VISSION */}
      <div className="container mx-auto rounded-2xl px-6 sm:p-4 md:px-12">
        <h2 className="text-center font-serif text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-primary mt-4 mb-4 md:mb-8">
          Mission & Vision
        </h2>
        {/* MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-4 md:mt-8 items-center">
          <div className="order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Compass className="w-8 h-8 text-primary hover:text-neon-teal" aria-label="We Exist To" />
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 text-base text-lg md:text-xl leading-relaxed ">
              To empower LAUTECH students with blockchain knowledge, foster innovation, and create a thriving
              ecosystem where the next generation of blockchain developers and entrepreneurs can flourish.
              Through workshops, hackathons, guest lectures, and collaborative projects, we're building the foundation
              for Nigeria's blockchain future.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="/bannernew.jpg"
              alt="Students learning blockchain technology"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-15 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/blockchain-classroom.png"
              alt="Students learning blockchain technology"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-6 md:mb-4">
              <Eye className="w-8 h-8 text-primary hover:text-neon-teal" aria-label="We Exist To" />
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 text-base text-lg md:text-xl leading-relaxed">
              A LAUTECH where every student understands blockchain and contributes to Nigeria’s Web3 growth.
            </p>
          </div>

        </div>
      </div>


      {/* PHOTO GALLERY */}
      <div className="bg-gray-50">
        <div className="container mx-auto py-2 px-6 md:px-12">
          <h1 className="text-center font-serif text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-primary mb-4 md:mb-8">Photo Gallery</h1>

          {/* MEDIUM and BIG SCREEN */}
          <div className="hidden md:block">
            {/* Large item */}
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Large item */}
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/event1.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
                        <p className="text-white">Discover the beauty of the natural world</p>
                    </div> */}
                </div>
              </div>

              {/* Two small items */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="/event2.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="event3.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>

              {/* Three medium items */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="event4.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="caroevent2.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>

              {/* bottom cards */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="event5.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="event6.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="event7.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src="event9.jpg" alt="Event Image" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE Image */}
          <div className="block md:hidden grid grid-cols-2 md:grid-cols-3 gap-5 mt-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event1.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event2.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event3.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event4.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="caroevent2.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event5.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event6.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event7.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="event9.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="extra10.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="extra11.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-full max-w-full rounded-lg" src="extra12.jpg" alt="Gallery image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}