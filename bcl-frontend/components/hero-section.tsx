'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/dist/client/link';
import Image from 'next/image';

const images = [
  // '/banner.jpg',
  '/blockchain1new.jpg',
  '/caroevent1.jpg',
  '/event10.jpg',
  '/caroevent2.jpg',
  '/caroevent4.jpg',
  '/caroevent3.jpg',
];

const HeroBackground = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Top half - white background */}
      <div className="absolute inset-x-0 top-0 h-[55%] bg-white" />

      {/* Bottom half - gradient background */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45%]"
        style={{
          background: 'linear-gradient(to bottom, #7C3AED, #3B82F6)',
        }}
      />

      {/* Top-right decorative shape - soft pink/white gradient blob */}
      <div
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
        }}
      />
    </div>
  );
}

const HeroImages = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-[55%]">
      {/* Top row - 2 images */}
      <div className="absolute right-8 top-12 flex gap-4">
        {/* Main top image - larger, rounded-2xl */}
        <div className="relative h-48 w-64 overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/hero/event-1.jpg"
            alt="Blockchain event speaker"
            fill
            className="object-cover"
          />
        </div>

        {/* Secondary top image - smaller, rounded-xl */}
        <div className="relative mt-8 h-36 w-48 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/hero/event-2.jpg"
            alt="Presentation slide"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom row - 3 images */}
      <div className="absolute bottom-24 right-8 flex gap-4">
        {/* Left bottom image - small, rounded-xl */}
        <div className="relative h-32 w-44 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/hero/event-3.jpg"
            alt="Event audience"
            fill
            className="object-cover"
          />
        </div>

        {/* Center bottom image - larger, rounded-2xl, overlaps into gradient */}
        <div className="relative -mt-12 h-56 w-72 overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/hero/event-4.jpg"
            alt="Crowd at blockchain event"
            fill
            className="object-cover"
          />
        </div>

        {/* Right bottom image - medium, rounded-xl */}
        <div className="relative h-40 w-52 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/hero/event-5.jpg"
            alt="Event attendees"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

const HeroText = () => {
  return (
    <div className="relative z-10 flex h-full flex-col justify-center px-8 lg:px-16 xl:px-24">
      {/* Headline */}
      <h1 className="mb-6 max-w-lg text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        <span className="text-blue-600">Building</span>{' '}
        <span className="text-slate-800">the Future,</span>
        <br />
        <span className="text-slate-800">One Block at a Time.</span>
      </h1>

      {/* Subheadline - sits on the gradient area */}
      <div className="max-w-md">
        <p className="mb-8 text-sm leading-relaxed text-white/90 sm:text-base">
          Connecting curious minds to blockchain education, hands-on experience, and a
          community of future tech leaders.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-blue-600 shadow-lg transition-colors hover:bg-blue-50">
            Join Community
          </button>
          <button className="rounded-lg border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <HeroBackground />
      <HeroText />
      <HeroImages />
    </section>
  );
}

// export function HeroSection() {
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   // Subtle image cycling
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveImageIndex((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//      <div className="relative w-full h-[43vh] sm:h-[60vh] md:h-[82vh] bg-slate-900 overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={activeImageIndex}
//             src={images[activeImageIndex]}
//             alt="Hero Background"
//             className="w-full h-full object-cover object-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0.2 }}
//             transition={{ duration: 1.5, ease: 'easeInOut' }}
//           />
//         </AnimatePresence>
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-slate-900/60" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
//         <div className="text-center max-w-4xl mx-auto">
//           {/* Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mb-2 md:mb-4"
//           >
//             <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               BLOCKCHAIN
//               <span className="block bg-linear-to-r text-white bg-clip-text ">
//                 LADOKE AKINTOLA
//               </span>
//               <span className="block bg-linear-to-r text-white bg-clip-text ">
//                 UNIVERSITY OF TECHNOLOGY
//               </span>
//             </h1>
//           </motion.div>

//           {/* Subtitle */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mb-4 md:mb-6"
//           >
//             <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/85 font-light">
//               Innovate • Connect • Succeed
//             </p>
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center"
//           >
//             <motion.button
//               className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white text-sm xs:text-base font-medium hover:bg-white/20 transition-all duration-300"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Explore Events
//             </motion.button>
//             <Link href="/join">
//                <motion.button
//               className="px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 bg-blue-600 rounded-lg text-white text-sm xs:text-base font-medium hover:bg-blue-700 transition-all duration-300"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Join Community
//             </motion.button>
//             </Link>
           
//           </motion.div>
//         </div>
//       </div>


//       {/* Minimal Navigation Dots */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
//       >
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === activeImageIndex 
//                 ? 'bg-white w-6' 
//                 : 'bg-white/50 hover:bg-white/70'
//             }`}
//             onClick={() => setActiveImageIndex(index)}
//           />
//         ))}
//       </motion.div>

//       {/* Subtle accent element */}
//       <div className="absolute top-1/4 right-8 w-32 h-32 border border-white/10 rounded-full hidden md:block" />
//       <div className="absolute bottom-1/4 left-8 w-20 h-20 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full hidden md:block" />
//     </div>
//   );
// }