'use client';
import Link from "next/link";
import { Linkedin, Github, Mail, LockIcon, LocateIcon } from "lucide-react";
import { motion } from 'framer-motion';

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and Description */}
  

          

          {/* Contact and Social */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-400" />
                  <span>blockchainlautech@gmail.com</span>
                </div>
                <span className="hidden sm:block">•</span>
                {/* Whatsapp Icon (custom SVG) */}
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374A9.86 9.86 0 0 1 1.67 12.02C1.67 6.495 6.495 1.67 12.02 1.67c2.652 0 5.144 1.033 7.019 2.909a9.868 9.868 0 0 1 2.911 7.017c-.003 5.525-4.828 10.349-10.349 10.349zm8.413-18.262A11.815 11.815 0 0 0 12.02 0C5.393 0 0 5.393 0 12.02c0 2.124.555 4.198 1.607 6.032l-1.7 6.201a1.001 1.001 0 0 0 1.237 1.237l6.195-1.698a11.92 11.92 0 0 0 5.68 1.447h.001c6.627 0 12.02-5.393 12.02-12.02 0-3.208-1.25-6.228-3.518-8.495z"/>
                </svg> 
                <span className="flex items-center"> +2349162706257</span>
                </div>
                <div className="flex items-center">
                  <LocateIcon className="h-4 w-4 mr-2 text-blue-400" />
                <span>LAUTECH Campus, Ogbomoso</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { href: "https://twitter.com/@BlockchainLaut1", icon: XIcon },
                  { href: "#", icon: Linkedin },
                  { href: "https://github.com/Blockchain-Lautech-Club", icon: Github },
                  { href: "https://t.me/BlockchainLautech", icon: TelegramIcon },
                  { href: "/admin", icon: LockIcon },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2025 LAUTECH Blockchain Club. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}