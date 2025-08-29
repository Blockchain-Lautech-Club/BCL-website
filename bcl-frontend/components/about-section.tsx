'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Globe, Shield, Handshake, Users, Target, Compass, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";

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

  const images = [
    "/event1.jpg",
    "/event2.jpg",
    "/event3.jpg",
    "/event4.jpg",
    "/caroevent2.jpg",
    "/event5.jpg",
    "/event6.jpg",
    "/event7.JPG",
    "/event8.jpg",
    "/event9.jpg",
    "/extra10.jpg",
    "/extra11.jpg",
    "/extra12.jpg",
  ];

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const galleryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.05
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-8"
        >
          About Our Club
        </motion.h2>
        
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

        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto rounded-2xl px-4 sm:px-6 md:px-12"
    >
      <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-8">
        Mission & Vision
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
        {/* Mission Section */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600"
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto py-8 px-4 md:px-12"
        >
          <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-8">
            Photo Gallery
          </h2>
          
          {!isGalleryOpen ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              onClick={() => setIsGalleryOpen(true)}
            >
              <img 
                src={images[0]} 
                alt="Featured Event" 
                className="w-full h-64 md:h-96 object-cover" 
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white text-2xl font-bold mb-2">View Full Gallery</p>
                  <p className="text-white/80 text-lg">{images.length} Photos</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.div
                variants={galleryVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600">Event Gallery</h3>
                  <button
                    onClick={() => setIsGalleryOpen(false)}
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                    aria-label="Close gallery"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="relative">
                  <motion.div
                    className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pb-4"
                    variants={containerVariants}
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {images.map((src, index) => (
                      <motion.div
                        key={index}
                        variants={imageVariants}
                        className="relative group cursor-pointer flex-shrink-0"
                        onClick={() => setSelectedImage({ src, index })}
                      >
                        <img 
                          src={src} 
                          alt={`Event ${index + 1}`} 
                          className="w-64 h-48 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                          <p className="text-white font-semibold">View Full Size</p>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* See More Button */}
                    <motion.a
                      href="https://drive.google.com/drive/folders/16H4fB0dt78VJHkzAq96BAtRjM0gRjhuH" // Replace with your actual link
                      variants={imageVariants}
                      className="flex-shrink-0 w-64 h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        // Add your custom click handler here
                        console.log('See More clicked!');
                        // window.open('your-link-here', '_blank'); // Example external link
                      }}
                    >
                      <div className="text-center text-white">
                        <div className="mb-2">
                          <svg 
                            className="w-8 h-8 mx-auto group-hover:scale-110 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                            />
                          </svg>
                        </div>
                        <p className="font-bold text-lg mb-1">See More</p>
                        <p className="text-blue-100 text-sm">View all events</p>
                      </div>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Full Size Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-6xl max-h-full">
                <motion.img
                  src={selectedImage.src}
                  alt={`Event ${selectedImage.index + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                  aria-label="Close image"
                >
                  <X size={24} />
                </button>
                
                {/* Navigation arrows for modal */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const prevIndex = selectedImage.index === 0 ? images.length - 1 : selectedImage.index - 1;
                    setSelectedImage({ src: images[prevIndex], index: prevIndex });
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const nextIndex = selectedImage.index === images.length - 1 ? 0 : selectedImage.index + 1;
                    setSelectedImage({ src: images[nextIndex], index: nextIndex });
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}