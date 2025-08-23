import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"
import { NewsletterSignup } from "./newsletter-signup"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BC</span>
              </div>
              <span className="font-serif font-bold text-lg sm:text-xl">LAUTECH Blockchain Club</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              We’re the official blockchain & Web3 student community of LAUTECH — learning, building, and leading the next generation of innovators.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">LAUTECH Campus, Ogbomoso, Oyo State</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">blockchain@lautech.edu.ng</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm">+234 803 123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">
                  Join Club
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg mb-4 sm:mb-6">Stay Updated</h3>
            <NewsletterSignup />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 LAUTECH Blockchain Club. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
