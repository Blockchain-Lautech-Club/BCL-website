'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  // '/banner.jpg',
  '/blockchain1new.jpg',
  '/caroevent1.jpg',
  '/event10.jpg',
  '/caroevent2.jpg',
  '/event5.jpg',
  '/caroevent4.jpg',
  '/caroevent3.jpg',
];

export function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Subtle image cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] md:h-[80vh] bg-slate-900 overflow-hidden">
      {/* Minimal Background Image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImageIndex}
            src={images[activeImageIndex]}
            alt="Hero Background"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Simple overlay */}
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="text-center">
          {/* Clean Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2"
          >
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-2 leading-tight">
              BLOCKCHAIN  
              <span className="block bg-gradient-to-r text-white bg-clip-text text-transparent">
                LADOKE AKINTOLA
              </span>
              <span className="block bg-gradient-to-r text-white bg-clip-text text-transparent">
                UNIVERSITY OF TECHNOLOGY
              </span>
            </h1>
          </motion.div>

          {/* Simple Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <p className="text-lg sm:text-xl md:text-3xl text-white/85 font-light">
              Innovate • Connect • Succeed
            </p>
          </motion.div>

          {/* Simple CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Events
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Community
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Minimal Navigation Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeImageIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setActiveImageIndex(index)}
          />
        ))}
      </motion.div>

      {/* Subtle accent element */}
      <div className="absolute top-1/4 right-8 w-32 h-32 border border-white/10 rounded-full hidden md:block" />
      <div className="absolute bottom-1/4 left-8 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full hidden md:block" />
    </div>
  );
}