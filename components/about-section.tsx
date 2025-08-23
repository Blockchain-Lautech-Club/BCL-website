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

      {/* MISSION AND VISSION */}
      <div className="container mx-auto rounded-2xl px-6 sm:p-8 md:px-12">
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-primary mt-10 mb-8 sm:mb-6">
          Mission & Vision
        </h2>
        {/* MISSION */}
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
      {/* TEAM SECTION */}
      <section className="container mx-auto bg-white dark:bg-gray-900">
        <div className="pb-8 pt-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 lg:mb-16">
            <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">Our Team</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Our team is made up of passionate builders, innovators, and problem-solvers dedicated to exploring the endless possibilities of blockchain technology.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full">
            {/* Johnadek */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">John Adekujo</a>
              </h3>
              <p>Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Blessing */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Miss Blessing</a>
              </h3>
              <p>Co-founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Thelma */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Thelma Opurum</a>
              </h3>
              <p>Co-Founder</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* CyberHackB */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Jeremiah Oyeniran</a>
              </h3>
              <p>Dev. Lead</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Favour */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Leslie Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Favour Abidoye</a>
              </h3>
              <p>Lead C.M</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Acunetix */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Precious Adebisi</a>
              </h3>
              <p>C.M</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Maryam */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Tijani Maryam</a>
              </h3>
              <p>C.M</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Herman */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="Neil Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Abdulhamid</a>
              </h3>
              <p>C.M</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Trems */}
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="Neil Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Tomiwa</a>
              </h3>
              <p>Creative Lead</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-6 sm:p-8 md:px-12">
          <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-primary mb-8 sm:mb-6">Photo Gallery</h1>
          {/* MAIN GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

          {/* EXTRAs */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-auto max-w-full rounded-lg" src="extra10.jpg" alt="Gallery image" />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-auto max-w-full rounded-lg" src="extra11.jpg" alt="Gallery image" />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img className="h-auto max-w-full rounded-lg" src="extra12.jpg" alt="Gallery image" />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}