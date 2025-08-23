"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import bclLogo from "../public/logoblacknew.png"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-y-4">
            <Link href="/" className="">
              <img className="h-10" src={bclLogo.src} alt="" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary px-3 py-2 text-md font-medium transition-colors"
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t items-center">
              <Link href="/" className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary">
                About
              </Link>
              <Link href="/events" className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary">
                Events
              </Link>
              <Link href="/blog" className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-1 text-base font-medium text-gray-900 hover:text-primary">
                Contact
              </Link>
              <div className="px-3 py-1">
                <Button asChild className="w-full">
                  <Link href="/join">Join Club</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
