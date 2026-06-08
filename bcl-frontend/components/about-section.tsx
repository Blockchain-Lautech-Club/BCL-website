'use client';
import { motion, } from 'framer-motion';
import { Lightbulb, Globe, Shield, Handshake, Users, Target, Compass, Eye } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries to create cutting-edge blockchain solutions without limits.",
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We drive meaningful change in the blockchain ecosystem.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We promote ethical blockchain adoption and transparency.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We foster partnerships to grow the blockchain community.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-17 md:py-15 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-8"
        >
          About Our Club
        </motion.h2>
        {/* WHO WE ARE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" aria-label="Who We Are" />
              <h3 className="font-serif text-2xl font-bold text-blue-400">Who We Are</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Blockchain Lautech is a dynamic student-led community at LAUTECH, dedicated to advancing blockchain education, innovation, and adoption through collaboration and hands-on learning.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" aria-label="We Exist To" />
              <h3 className="font-serif text-2xl font-bold text-blue-400">We Exist To</h3>
            </div>
            <ul className="text-gray-200 text-lg leading-relaxed space-y-3">
              <li>Democratize blockchain education for all students.</li>
              <li>Empower members with Web3 skills for real-world impact.</li>
              <li>Bridge LAUTECH to the global blockchain community.</li>
            </ul>
          </motion.div>
        </motion.div>
        {/* MISSION & VISION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto rounded-2xl py-8"
        >
          <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-8">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-4">
            {/* Mission Section */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img
                  // src="./mission.jpg"
                  src="./conflu8.jpg"
                  alt="Students learning blockchain technology"
                  className="rounded-xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Compass className="w-8 h-8 text-blue-600 hover:text-blue-400 transition-colors" aria-label="Our Mission" />
                  <h3 className="font-serif text-2xl font-bold text-blue-600">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower LAUTECH students with blockchain expertise, drive innovation, and build a vibrant ecosystem for future blockchain leaders through workshops, hackathons, and collaborative projects.
                </p>
              </motion.div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img
                  // src="./event65.jpg"
                  src="./conflu3.jpg"
                  alt="Blockchain classroom"
                  className="rounded-xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-8 h-8 text-blue-600 hover:text-blue-400 transition-colors" aria-label="Our Vision" />
                  <h3 className="font-serif text-2xl font-bold text-blue-600">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To create a LAUTECH where every student is equipped with blockchain knowledge and contributes to Nigeria's leadership in Web3 innovation.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}