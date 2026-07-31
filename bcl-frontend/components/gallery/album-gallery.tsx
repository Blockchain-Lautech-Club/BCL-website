"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

interface AlbumGalleryProps {
  albumName: string;
  images: string[];
}

export default function AlbumGallery({ albumName, images }: AlbumGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="flex-1 px-4 sm:px-10 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <Link 
              href="/gallery" 
              className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Albums</span>
            </Link>
          </div>
          
          <div className="mb-10 border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {albumName}
            </h1>
            <p className="mt-2 text-gray-500">{images.length} photos</p>
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-200 break-inside-avoid"
                onClick={() => openLightbox(idx)}
              >
                {/* We use a standard img tag with tailwind classes for masonry or next/image with layout="responsive" */}
                <img
                  src={src}
                  alt={`${albumName} photo ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div 
            className="relative h-[85vh] w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex]}
              alt={`${albumName} photo ${selectedIndex + 1}`}
              className="max-h-full max-w-full object-contain select-none"
            />
            <div className="absolute -bottom-10 left-0 right-0 text-center text-white/70 text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
}
