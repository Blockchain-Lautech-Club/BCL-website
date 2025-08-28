'use client';
import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { NewsletterSignup } from "./newsletter-signup";
import { motion } from 'framer-motion';

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img className="w-40 h-10" src="/whitelogo.png" alt="Blockchain Lautech Logo" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-base">
              We’re the official blockchain & Web3 student community of LAUTECH, fostering innovation and leadership in blockchain technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-sm">LAUTECH Campus, Ogbomoso, Oyo State</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-sm">blockchain@lautech.edu.ng</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-sm">+234 803 123 4567</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif font-bold text-lg mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/events", label: "Events" },
                { href: "/members", label: "Members" },
                { href: "/blog", label: "Blog" },
                { href: "/join", label: "Join Club" },
                { href: "/contact", label: "Contact" },
                { href: "/admin", label: "Admin" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif font-bold text-lg mb-6 text-primary">Stay Updated</h3>
            <NewsletterSignup />
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 LAUTECH Blockchain Club. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://twitter.com/@BlockchainLaut1", icon: Twitter },
                { href: "#", icon: Linkedin },
                { href: "#", icon: Github },
                { href: "https://t.me/BlockchainLautech", icon: () => <img src="/telegram.png" className="h-5 w-5" alt="Telegram" /> },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-primary transition-colors"
                >
                  {social.icon === Twitter || social.icon === Linkedin || social.icon === Github ? (
                    <social.icon className="h-5 w-5" />
                  ) : (
                    <social.icon />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}