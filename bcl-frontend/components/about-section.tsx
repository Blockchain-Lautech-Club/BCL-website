"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Code, Network } from 'lucide-react';

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
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="text-center mb-16">
        <div
          className="mx-auto mb-10 inline-flex rounded-[28px] p-[1.5px]"
          style={{ background: "linear-gradient(to bottom, #7C3AED, #3B82F6)" }}
        >
          <div className="rounded-full bg-gray-100/90 px-6 py-2">
            <span className="text-sm font-semibold text-blue-600">
              About Our Club
            </span>
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Blockchain Lautech is a dynamic student-led community at LAUTECH,
          dedicated to advancing blockchain education, innovation, and adoption
          through collaboration and hands-on learning.
        </p>
      </div>
      {/* Decorative horizontal lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-6">
        {[...Array(7)].map((_, i) => (
          <div key={`left-${i}`} className="h-2 w-80 bg-gray-200" />
        ))}
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6">
        {[...Array(7)].map((_, i) => (
          <div key={`right-${i}`} className="h-2 w-80 bg-gray-200" />
        ))}
      </div>

      {/* Center dotted line */}
      <div className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-gray-300" />

      {/* Pillars Container */}
      <div className="relative mx-auto grid max-w-3xl grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:px-0">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Card
              key={index}
              className="mx-auto mb-10 w-full rounded-[28px] border-0 p-[1.5px] shadow-sm transition-shadow duration-200 hover:shadow-lg"
              style={{
                background: "linear-gradient(to bottom, #7C3AED, #3B82F6)",
              }}
            >
              <CardContent className="flex min-h-[180px] flex-col items-center justify-center gap-6 rounded-[26px] bg-white px-6 py-8 text-center">
                {/* Icon container */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-b from-[#7C3AED] to-[#3B82F6] shadow-lg">
                  {Icon ? <Icon className="h-10 w-10 text-white" /> : null}
                </div>
                {/* Text */}
                <p className="text-center text-lg font-bold leading-6 text-blue-600">
                  {pillar.text}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
