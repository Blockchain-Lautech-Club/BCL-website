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
    <section className="py-8 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
          About Our Club
        </h2>


        <div className="container mx-auto px-4 mb-6 mt-10">
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



      <div className="container mx-auto rounded-2xl px-6 sm:p-8 md:px-12">
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-primary mt-10 mb-8 sm:mb-6">
        Mission & Vision
      </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-10 items-center">
          <div className="order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <Compass className="w-8 h-8 text-primary hover:text-neon-teal" aria-label="We Exist To" />
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              Our Mission
            </h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-15 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/blockchain-classroom.png"
              alt="Students learning blockchain technology"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <Eye className="w-8 h-8 text-primary hover:text-neon-teal" aria-label="We Exist To" />
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              Our Vision
            </h3>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              A LAUTECH where every student understands blockchain and contributes to Nigeria’s Web3 growth.
            </p>
          </div>

        </div>
      </div>


    </section>
  );
}