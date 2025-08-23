"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import bclLogo from "../public/logoblacknew.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <Link href="/">
              <img className="h-10 w-auto" src={bclLogo.src} alt="BCL Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary px nets-3 py-2 text-md font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:text-primary px-3 py-2 text-md font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/events"
                className="text-gray-900 hover:text-primary px-3 py-2 text-md font-medium transition-colors"
              >
                Events
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-primary px-3 py-2 text-md font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-primary px-3 py-2 text-md font-medium transition-colors"
              >
                Contact
              </Link>
              <Button asChild className="ml-4 text-md">
                <Link href="/join">Join BCL</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2 z-60"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className="md:hidden fixed top-14 left-0 w-full bg-white z-50 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <Link
                  href="/"
                  className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/events"
                  className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-1">
                  <Button asChild className="w-full">
                    <Link href="/join" onClick={() => setIsOpen(false)}>
                      Join Club
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}