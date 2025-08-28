'use client';
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import bclLogo from "../public/logoblacknew.png";
import { motion } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
      className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <img className="h-12 w-auto" src={bclLogo.src} alt="Blockchain Lautech Logo" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/events", label: "Events" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-primary py-2 text-lg font-bold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-3 text-md font-bold bg-primary hover:bg-primary/90">
              <Link href="/team">The Team</Link>
            </Button>
            <Button asChild className="ml-2 text-md font-bold bg-primary hover:bg-primary/90">
              <Link href="/join">Join BCL</Link>
            </Button>
          </div>

          <div className="md:hidden">
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
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/events", label: "Events" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-md font-bold text-gray-900 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button asChild className="w-full text-md font-bold bg-primary hover:bg-primary/90">
                    <Link href="/team" onClick={() => setIsOpen(false)}>The Team</Link>
                  </Button>
                </div>
                <div className="px-3 py-2">
                  <Button asChild className="w-full text-md font-bold bg-primary hover:bg-primary/90">
                    <Link href="/join" onClick={() => setIsOpen(false)}>Join Club</Link>
                  </Button>
                </div>
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