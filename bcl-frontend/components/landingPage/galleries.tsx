'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { galleries } from '@/lib/data.json'
import { motion } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/event/confluence-1.jpg', alt: 'Event 1', caption: 'Events Pictures' },
  { id: 2, src: '/event/confluence-2.jpg', alt: 'Event 2', caption: 'Events Pictures' },
  { id: 3, src: '/event/confluence-3.jpg', alt: 'Event 3', caption: 'Events Pictures' },
  { id: 4, src: '/event/confluence-4.jpg', alt: 'Event 4', caption: 'Events Pictures' },
  { id: 5, src: '/event/confluence-5.jpg', alt: 'Event 5', caption: 'Events Pictures' },
  // ... add all 20+ images
];

const CIRCLES_VISIBLE = 3;

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Infinite scroll: get the 3 visible indices with wrap-around
  const getVisibleIndices = useCallback(() => {
    const indices = [];
    for (let i = 0; i < CIRCLES_VISIBLE; i++) {
      indices.push((currentIndex + i) % galleries.length);
    }
    return indices;
  }, [currentIndex]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isModalOpen]);

  const openModal = (image: GalleryImage) => {
    setModalImage(image);
    setIsModalOpen(true);
    setIsPaused(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setIsPaused(false);
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative py-20 overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <div className="mx-auto mb-14 inline-flex rounded-full p-[1.5px]" style={{ background: 'linear-gradient(to bottom, #7C3AED, #3B82F6)' }}>
            <div className="rounded-full bg-gray-100/90 px-6 py-2">
              <span className="text-sm font-semibold text-blue-600">Photo Gallery</span>
            </div>
          </div>
        </motion.div>
      {/* Decorative horizontal lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={`left-${i}`} className="h-2 w-60 bg-gray-200" />
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={`right-${i}`} className="h-2 w-60 bg-gray-200" />
        ))}
      </div>

      {/* Center dotted line */}
      <div className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-gray-300" />

      {/* Carousel Container */}
      <div 
        className="relative mx-auto flex max-w-4xl items-center justify-center gap-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => !isModalOpen && setIsPaused(false)}
      >
        {visibleIndices.map((imageIndex, position) => {
          const image = galleries[imageIndex];
          const isCenter = position === 1;
          
          return (
            <button
              key={`${image.id}-${imageIndex}`}
              onClick={() => openModal(image)}
              className={`
                relative transition-all duration-500 ease-in-out
                ${isCenter ? 'z-10 scale-150' : 'z-0 scale-90 opacity-70'}
              `}
              style={{
                transform: `translateX(${(position - 1) * 20}px)`,
              }}
            >
              <div className={`
                relative overflow-hidden rounded-full border-4 bg-white shadow-lg
                ${isCenter ? 'border-white shadow-xl' : 'border-gray-100'}
              `}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={isCenter ? 280 : 240}
                  height={isCenter ? 280 : 240}
                  className="h-60 w-60 rounded-full object-cover sm:h-64 sm:w-64"
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="mt-20 flex justify-center gap-2">
        {galleries.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative mx-4 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <Image
              src={modalImage.src}
              alt={modalImage.alt}
              width={800}
              height={600}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            
            {modalImage.caption && (
              <p className="mt-4 text-center text-lg text-white">{modalImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}