'use client';
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import bclLogo from "../public/logos/logoNoBackground.png";
import { motion } from 'framer-motion';
import { organization, navigation } from '@/lib/data.json'

export function Header() {
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
              <img className="h-12 w-auto" src={organization.logos[1]} alt="Blockchain Lautech Logo" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navigation.headerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className="text-gray-900 hover:text-primary py-2 text-lg font-bold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {navigation.ctaButtons.map((button) => (
              <Button asChild key={button.label} className="ml-3 text-md font-bold bg-primary hover:bg-primary/90">
                <Link href={button.url}>{button.label}</Link>
              </Button>
            ))}
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
                {navigation.headerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    className="block px-3 py-2 text-md font-bold text-gray-900 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {navigation.ctaButtons.map((button) => (
                  <div key={button.label} className="px-3 py-2">
                    <Button asChild className="w-full text-md font-bold bg-primary hover:bg-primary/90">
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