'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PhotoGrid } from '@/components/landingPage/photoGrid';


const HeroText = () => {
  const router = useRouter();
  return (
    <div className='absolute w-full h-full flex items-center justify-center;'>
    <div className="flex flex-col gap-5 px-8 lg:px-16 xl:px-24">
      {/* Headline */}
      <h1 className="max-lg:bg-white mb-6 max-w-lg text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
        <span className="text-blue-600">Building</span>{' '}
        <span className="text-slate-800">the Future,</span>
        <br />
        <span className="text-slate-800">One Block at a Time.</span>
      </h1>

      {/* Subheadline - sits on the gradient area */}
      <div className="flex flex-col max-w-md gap-5">
        <p className="mb-8 text-sm leading-relaxed text-white/90 sm:text-lg">
          Connecting curious minds to blockchain education, hands-on experience, and a
          community of future tech leaders.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/join")}
            className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-blue-600 shadow-lg transition-colors hover:bg-blue-50 cursor-pointer"
          >
            Join Community
          </button>
          <button 
            onClick={() => router.push("/events")}
            className="rounded-lg border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 cursor-pointer"
          >
            Explore Events
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-screen w-full max-lg:m-4 max-lg:bg-[url('/event/confluence-1.jpg')] bg-cover bg-center bg-no-repeat lg:bg-white pb-12">
      {/* Gradient background - curves up behind cards */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[45%]"
        style={{
          background: "linear-gradient(to top, #3B82F6 0%, #7C3AED 100%)",
        }}
      />

      {/* <div className="relative mt-12 flex"> */}
          <HeroText />
          <PhotoGrid />
      {/* </div> */}
    </section>
  );
}
