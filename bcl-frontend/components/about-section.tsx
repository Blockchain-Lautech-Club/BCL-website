"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Code, Network } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Network,
      text: "Democratize\nblockchain\neducation.",
    },
    {
      icon: Code,
      text: "Empower\nmembers with\nWeb3 skills.",
    },
    {
      icon: Globe,
      text: "Bridge\nLAUTECH\nto the global.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mb-10 text-center sm:mb-16">
        <div
          className="mx-auto mb-8 inline-flex rounded-[28px] p-[1.5px] sm:mb-10"
          style={{ background: "linear-gradient(to bottom, #7C3AED, #3B82F6)" }}
        >
          <div className="rounded-full bg-gray-100/90 px-6 py-2">
            <span className="text-lg font-semibold text-blue-600">
              About Our Club
            </span>
          </div>
        </div>
        <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:px-6 sm:text-xl">
          Blockchain Lautech is a dynamic student-led community at LAUTECH,
          dedicated to advancing blockchain education, innovation, and adoption
          through collaboration and hands-on learning.
        </p>
      </div>
      {/* Decorative horizontal lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4 md:space-y-6">
        {[...Array(7)].map((_, i) => (
          <div key={`left-${i}`} className="h-1 w-20 bg-gray-200 sm:w-40 md:h-2 md:w-80" />
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 md:space-y-6">
        {[...Array(7)].map((_, i) => (
          <div key={`right-${i}`} className="h-1 w-20 bg-gray-200 sm:w-40 md:h-2 md:w-80" />
        ))}
      </div>

      {/* Center dotted line */}
      <div className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-gray-300" />

      {/* Pillars Container */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-center sm:gap-8 sm:px-6">
        {pillars.map(({ icon: Icon, text }, index) => (
          <div
            key={index}
            className="flex w-full max-w-[260px] flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:w-auto"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-center text-sm font-semibold leading-snug text-gray-800 whitespace-pre-line">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
