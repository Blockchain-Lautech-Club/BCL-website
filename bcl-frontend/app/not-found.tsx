import Link from "next/link";
import { Home, Image as ImageIcon, Calendar, ArrowLeft, Search } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Blockchain Club LAUTECH",
  description: "The page you are looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-160px)] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-gray-50 px-4 py-16 text-center">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 w-64 h-64 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 backdrop-blur-sm">
          <span>Error 404</span>
          <span className="h-1 w-1 rounded-full bg-blue-600" />
          <span>Block Not Found</span>
        </div>

        {/* 404 Headline */}
        <h1 className="mt-6 text-7xl font-black tracking-tight text-gray-900 sm:text-9xl">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          Lost in the Mempool?
        </h2>

        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          The page you are looking for hasn&apos;t been mined yet, was moved, or never existed in this chain.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50/40 hover:text-blue-600 active:scale-95"
          >
            <ImageIcon className="h-4 w-4" />
            <span>Browse Gallery</span>
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50/40 hover:text-blue-600 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            <span>Upcoming Events</span>
          </Link>
        </div>

        {/* Helpful quick links */}
        <div className="mt-12 border-t border-gray-200/80 pt-8">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Or visit our popular pages
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-blue-600 hover:underline transition-colors">
              About Us
            </Link>
            <span className="text-gray-300">&bull;</span>
            <Link href="/blog" className="hover:text-blue-600 hover:underline transition-colors">
              Articles & Blogs
            </Link>
            <span className="text-gray-300">&bull;</span>
            <Link href="/contact" className="hover:text-blue-600 hover:underline transition-colors">
              Contact Us
            </Link>
            <span className="text-gray-300">&bull;</span>
            <Link href="/join" className="hover:text-blue-600 hover:underline transition-colors">
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
