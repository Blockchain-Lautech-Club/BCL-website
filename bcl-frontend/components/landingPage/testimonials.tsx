"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonial } from "@/lib/data.json";

function renderRating(rate: number) {
  const clampedRate = Math.min(Math.max(rate, 0), 5);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const fillPercent = Math.round(
          Math.max(0, Math.min(clampedRate - index, 1)) * 100,
        );

        return (
          <span key={index} className="relative inline-flex h-5 w-5">
            <Star className="h-5 w-5 text-gray-300" />
            <span
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonial.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-16 sm:pt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div
          className="mx-auto mb-10 inline-flex rounded-full p-[1.5px]"
          style={{ background: "linear-gradient(to bottom, #7C3AED, #3B82F6)" }}
        >
          <div className="rounded-full bg-gray-100/90 px-6 py-2">
            <span className="text-lg font-semibold text-blue-600">
              What Our Members Say
            </span>
          </div>
        </div>
        <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:px-6 sm:text-xl">
          Discover the transformative experiences and achievements of our
          blockchain community members.
        </p>
      </motion.div>

      <div className="bg-gradient-to-b from-[#7C3AED] to-[#3B82F6] py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out items-stretch"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonial.map((testimonial, index) => (
              <div key={index} className="w-full shrink-0 px-2 sm:px-4">
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto max-w-2xl rounded-2xl h-full flex flex-col">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {renderRating(testimonial.rate)}
                    </div>
                    <div className="flex-grow overflow-y-auto mb-6 pr-2 max-h-[150px] sm:max-h-[200px] scrollbar-thin scrollbar-thumb-gray-200">
                      <p className="text-gray-600 leading-relaxed italic text-base sm:text-lg">
                        "{testimonial.note}"
                      </p>
                    </div>
                    <div className="flex items-center mt-auto">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.departement}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 gap-3">
            {testimonial.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/80'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
