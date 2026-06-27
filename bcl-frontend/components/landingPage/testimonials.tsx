'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from 'framer-motion';
import { testimonial } from "@/lib/data.json";

function renderRating(rate: number) {
  const clampedRate = Math.min(Math.max(rate, 0), 5);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const fillPercent = Math.round(Math.max(0, Math.min(clampedRate - index, 1)) * 100);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <div className="mx-auto mb-10 inline-flex rounded-full p-[1.5px]" style={{ background: 'linear-gradient(to bottom, #7C3AED, #3B82F6)' }}>
            <div className="rounded-full bg-gray-100/90 px-6 py-2">
              <span className="text-lg font-semibold text-blue-600">What Our Members Say</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative experiences and achievements of our blockchain community members.
          </p>
        </motion.div>

        <div className="bg-gradient-to-b from-[#7C3AED] to-[#3B82F6]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto p-20 rounded-lg"
        >
          {testimonial.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {renderRating(testimonial.rate)}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.note}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.departement}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        </div>
    </section>
  );
}