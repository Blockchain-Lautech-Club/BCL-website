// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowRight, Users, Calendar, BookOpen, Pizza, Handshake, Zap } from "lucide-react"

// export function HeroSection() {
//   return (
//     <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-10 sm:py-20">
//       <div className="absolute inset-0 bg-[url('/blockchain-network2.png')] bg-cover bg-center opacity-12"></div>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
//             Empowering LAUTECH Students to Lead in <span className="text-primary">Blockchain & Web3</span>
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
//             We’re the official blockchain & Web3 student community of LAUTECH — learning, building, and leading the next generation of innovators.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
//             <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
//               <Link href="/join" className="flex items-center justify-center gap-2">
//                 Join the Club <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
//               </Link>
//             </Button>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="text-md sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent w-full sm:w-auto"
//             >
//               <Link href="/events">Partner With Us</Link>
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
//             <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
//               <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
//               <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">2500+</div>
//               <div className="text-sm sm:text-base text-gray-600 text-center">Students Trained</div>
//             </div>
//             <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
//               <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-accent mb-3 sm:mb-4" />
//               <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">5+</div>
//               <div className="text-sm sm:text-base text-gray-600 text-center">Workshops & Hackathons</div>
//             </div>
//             <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 sm:col-span-1 col-span-1">
//               <Handshake className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
//               <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">20+</div>
//               <div className="text-sm sm:text-base text-gray-600 text-center">Partnerships</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
    
    
//   )
// }
"use client";
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample images (replace with your own image URLs)
const images = [
  'banner.jpg',
  'caroevent1.jpg',
  'caroevent2.jpg',
  'caroevent3.jpg',
  'caroevent4.jpg',
];

export function HeroSection () {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full md:h-[85vh] h-[40vh] overflow-hidden">
      {/* Carousel Images */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="min-w-full h-full flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover aspect-[16/9]"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};