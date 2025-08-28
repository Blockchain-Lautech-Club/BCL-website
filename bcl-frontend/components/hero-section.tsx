'use client';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const images = [
  '/banner.jpg',
  '/caroevent1.jpg',
  '/event10.jpg',
  '/caroevent2.jpg',
  '/event5.jpg',
  '/caroevent4.jpg',
  '/caroevent3.jpg',
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div
        className="flex h-full transition-transform duration-700 ease-in-out"
        animate={{ x: `-${currentIndex * 100}%` }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="min-w-full h-full flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center px-4"
              >
                Blockchain Lautech: Innovate, Connect, Succeed
              </motion.h1>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors duration-200"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'} hover:bg-white/80 transition-colors`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}