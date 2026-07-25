"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhotoGrid } from "@/components/landingPage/photoGrid";
import Image from "next/image";

const rotatingWords = ["Building", "Connecting", "Innovating", "Succeeding"];

const HeroText = () => {
  const router = useRouter();
  const [activeWord, setActiveWord] = useState(rotatingWords[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWord((currentWord) => {
        const currentIndex = rotatingWords.indexOf(currentWord);
        return rotatingWords[(currentIndex + 1) % rotatingWords.length];
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-20 flex items-center max-h-screen">
        <div className="flex w-full flex-col gap-5 px-4 py-6 mt-16 sm:px-6 sm:py-8 md:gap-10 md:px-8 lg:px-16 xl:px-24">
          {/* Headline */}
          <h1 className="max-w-2xl font-extrabold leading-tight text-4xl sm:text-5xl lg:text-5xl">
            <span className="relative inline-flex min-h-[1.2em] items-center text-blue-400 lg:text-blue-600">
              <span
                key={activeWord}
                className="inline-block"
                style={{ animation: "fadeUp 0.7s ease-out forwards" }}
              >
                {activeWord}
              </span>
            </span>
            <span className="text-white lg:text-slate-800"> the Future,</span>
            <br />
            <span className="text-white lg:text-slate-800">One Block at a Time.</span>
          </h1>

          {/* Subheadline */}
          <div className="flex flex-col max-w-md gap-5">
            <p className="text-sm leading-relaxed text-blue-50 sm:text-lg">
              Connecting curious minds to blockchain education, hands-on
              experience, and a community of future tech leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => router.push("/join")}
                className="w-full cursor-pointer rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-blue-600 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-colors hover:bg-blue-50 sm:w-auto lg:shadow-lg"
              >
                Join Community
              </button>
              <button
                onClick={() => router.push("/events")}
                className="w-full cursor-pointer rounded-lg border-2 border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] w-full overflow-hidden max-lg:bg-gradient-to-t max-lg:from-[#3B82F6] max-lg:to-[#7C3AED] pb-12 lg:min-h-screen lg:bg-white">
      
      {/* Mobile Top-Left Device Frame (Mobile UI) */}
      <div className="absolute -left-6 top-2 h-[32%] w-[45%] -rotate-[10deg] opacity-80 lg:hidden">
        {/* Phone chassis */}
        <div 
          className="relative h-full w-full overflow-hidden rounded-[2rem] border-[4px] border-[#1E293B] bg-black shadow-[0_20px_50px_rgba(37,99,235,0.3)]"
        >
          <Image 
            src="/event/confluence-2.jpg" 
            alt="Event Background" 
            fill 
            className="object-cover opacity-90" 
          />
        </div>
      </div>

      {/* Mobile Abstract Blob Image (Bottom-Right) */}
      <div className="absolute -bottom-12 -right-12 h-[45%] w-[75%] opacity-90 lg:hidden">
        {/* Organic blob shape */}
        <div 
          className="relative h-full w-full overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.2)]"
          style={{ 
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", 
            border: "1px solid rgba(59, 130, 246, 0.2)"
          }}
        >
          <Image 
            src="/event/confluence-1.jpg" 
            alt="Event Background" 
            fill 
            className="object-cover opacity-80" 
          />
          {/* Subtle blue overlay to blend with theme */}
          <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay" />
        </div>
      </div>

      {/* Text protection gradient to ensure contrast against floating images */}
      <div className="absolute inset-0 z-10 bg-black/10 lg:hidden" />

      {/* Gradient background - curves up behind cards on desktop */}
      <div
        className="absolute bottom-0 left-0 right-0 hidden h-[45%] lg:block"
        style={{
          background: "linear-gradient(to top, #3B82F6 0%, #7C3AED 100%)",
        }}
      />

      <HeroText />
      <PhotoGrid />
    </section>
  );
}
