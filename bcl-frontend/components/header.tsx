'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from 'framer-motion';
import { organization, navigation } from '@/lib/data.json'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/55 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 flex flex-col"
    >
      {/* Announcement Bar */}
      <div className="w-full bg-[#02152d] text-white overflow-hidden py-2 flex items-center border-b border-white/10 relative">
        <div className="z-10 flex items-center shrink-0 px-4 bg-[#02152d]">
          <span className="text-sm font-black tracking-widest text-blue-300">
            ANNOUNCEMENT
          </span>
          {/* <span className="ml-4 text-blue-400">|</span> */}
        </div>
        <div className="overflow-hidden flex-1 relative flex">
          <motion.div
            className="flex whitespace-nowrap min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50,
            }}
          >
            {/* Repeating the content 10 times and shifting by 50% guarantees a perfect seamless loop on all screen sizes */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center px-6" >
                <Link href="/events">
                  <span className="text-sm font-medium tracking-wide">
                    The largest student-led web3 conference in Africa is back! Powered by Blockchain LAUTECH — a Tier-1 university blockchain club in Africa.
                  </span>
                </Link>
                {/* Spacer between announcements */}
                <span className="mx-6 text-white/20">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Desktop navigation */}
        <div className="justify-between items-center h-16 hidden md:flex">
          <div className="flex items-center">
            <Link href="/">
              <img className="h-12 w-auto" src={organization.logos[1]} alt="Blockchain Lautech Logo" />
            </Link>
          </div>

          <div className="flex justify-center items-center space-x-8">
            {navigation.headerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={`py-2 text-lg transition-colors duration-200 ${pathname === link.url ? 'text-primary font-bold' : 'text-gray-900 hover:text-primary'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2">
            {navigation.ctaButtons.map((button, index) => (
              <Button
                asChild
                key={button.label}
                variant={index === 1 ? "outlineCta" : "default"}
                className="ml-3 text-md font-bold"
              >
                <Link href={button.url}>{button.label}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-between items-center h-16 md:hidden">
          <div className="flex items-center">
            <Link href="/">
              <img className="h-12 w-auto" src={organization.logos[1]} alt="Blockchain Lautech Logo" />
            </Link>
          </div>

          <div className="">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <>
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              className="md:hidden fixed top-16 left-0 w-full bg-white z-50 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                {navigation.headerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className={`block px-3 py-2 text-md transition-colors ${pathname === link.url ? 'font-bold text-primary' : 'text-gray-900 hover:text-primary'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {navigation.ctaButtons.map((button, index) => (
                  <div key={button.label} className="px-3 py-2">
                    <Button asChild variant={index === 1 ? "outlineCta" : "default"} className="w-full text-md font-bold">
                      <Link href={button.url} onClick={() => setIsOpen(false)}>{button.label}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          </>
        )}
      </div>
    </motion.nav>
  );
}