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
        <div className="flex flex-col gap-5 px-8 lg:px-16 xl:px-24">
          {/* Headline */}
          <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl max-lg:bg-white">
            <span className="relative inline-flex min-h-[1.2em] items-center text-blue-600">
              <span
                key={activeWord}
                className="inline-block"
                style={{ animation: "fadeUp 0.7s ease-out forwards" }}
              >
                {activeWord}
              </span>
            </span>
            <span className="text-slate-800"> the Future,</span>
            <br />
            <span className="text-slate-800">One Block at a Time.</span>
          </h1>

          {/* Subheadline - sits on the gradient area */}
          <div className="flex flex-col max-w-md gap-5">
            <p className="mb-8 text-sm leading-relaxed text-white/90 sm:text-lg">
              Connecting curious minds to blockchain education, hands-on
              experience, and a community of future tech leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => router.push("/join")}
                className="cursor-pointer rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-blue-600 shadow-lg transition-colors hover:bg-blue-50"
              >
                Join Community
              </button>
              <button
                onClick={() => router.push("/events")}
                className="cursor-pointer rounded-lg border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
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
    <section className="relative h-screen w-full bg-cover bg-center bg-no-repeat pb-12 max-lg:m-4 max-lg:bg-[url('/event/confluence-1.jpg')] lg:bg-white">
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
