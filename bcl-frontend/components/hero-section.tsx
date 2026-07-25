"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhotoGrid } from "@/components/landingPage/photoGrid";

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
      <div className="absolute inset-0 flex items-center max-h-screen">
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

          {/* Subheadline - sits on the gradient area */}
          <div className="flex flex-col max-w-md gap-5">
            <p className="text-sm leading-relaxed text-blue-50 sm:text-lg">
              Connecting curious minds to blockchain education, hands-on
              experience, and a community of future tech leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => router.push("/join")}
                className="w-full cursor-pointer rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-blue-600 shadow-lg transition-colors hover:bg-blue-50 sm:w-auto"
              >
                Join Community
              </button>
              <button
                onClick={() => router.push("/events")}
                className="w-full cursor-pointer rounded-lg border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
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
    <section className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat pb-12 max-lg:bg-[url('/event/confluence-1.jpg')] lg:bg-white">
      {/* Mobile dark overlay for image readability */}
      <div className="absolute inset-0 bg-black/60 lg:hidden" />

      {/* Gradient background - curves up behind cards */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%]"
        style={{
          background: "linear-gradient(to top, #3B82F6 0%, #7C3AED 100%)",
        }}
      />

      <HeroText />
      <PhotoGrid />
    </section>
  );
}
