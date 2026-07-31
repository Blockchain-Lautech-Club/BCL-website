import React from "react";
import { organization, footerLink, contact } from "@/lib/data.json";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const quickLinks = footerLink.QuickLink;
  const resources = footerLink.Resources;
  const community = footerLink.Community;

  const socialIcons = [
    {
      name: "X",
      href: contact.socials.find(s => s.name === "x")?.link || "#",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      name: "LinkedIn",
      href: contact.socials.find(s => s.name === "linkedin")?.link || "#",
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "GitHub",
      href: contact.socials.find(s => s.name === "github")?.link || "#",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      name: "Telegram",
      href: contact.socials.find(s => s.name === "telegram")?.link || "#",
      path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
    },
    {
      name: "Discord",
      href: contact.socials.find(s => s.name === "discord")?.link || "#",
      path: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1e3a8a] text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-white/10" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-12">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center items-center gap-3 lg:justify-start">
          <Image
            src={organization.logos[0] || ""}
            alt="Logo"
            width={300}
            height={300}
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-5">
          {/* Quick Links */}
          <div className="text-left">
            <h3 className="mb-2 sm:mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((quickLink, i) => (
                <li key={`${quickLink.name}-${i}`}>
                  <Link
                    href={quickLink.link}
                    className="text-sm text-blue-100 transition-colors hover:text-white"
                  >
                    {quickLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-left">
            <h3 className="mb-2 sm:mb-4 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-1 sm:space-y-2">
              {resources.map((resource, i) => (
                <li key={`${resource.name}-${i}`}>
                  <Link
                    href={resource.link}
                    className="text-sm text-blue-100 transition-colors hover:text-white"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="text-left">
            <h3 className="mb-2 sm:mb-4 text-lg font-semibold text-white">Community</h3>
            <ul className="space-y-1 sm:space-y-2">
              {community.map((c, i) => (
                <li key={`${c.name}-${i}`}>
                  <Link
                    href={c.link}
                    className="text-sm text-blue-100 transition-colors hover:text-white"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start text-left">
            <h3 className="mb-2 sm:mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="flex flex-col space-y-2 text-left">
              <li className="flex items-start gap-2 lg:gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <Link
                  href={`mailto:${contact.emails[0]}`}
                  className="break-words text-xs text-blue-100 transition-colors hover:text-white lg:text-sm"
                >
                  {contact.emails[0]}
                </Link>
              </li>
              <li className="flex items-start gap-2 lg:gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 fill-blue-200"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.954.004C5.352.004 0 5.356 0 11.958c0 2.115.553 4.183 1.6 6.002L.055 23.46l5.642-1.48A11.892 11.892 0 0011.954 23.91c6.598 0 11.954-5.356 11.954-11.952S18.552.004 11.954.004zm6.474 16.924c-.266.75-1.526 1.451-2.126 1.545-.526.082-1.192.176-3.414-.746-2.665-1.106-4.38-3.83-4.512-4.006-.134-.176-1.077-1.433-1.077-2.736 0-1.303.682-1.944.921-2.203.24-.258.527-.323.7-.323.174 0 .346.006.502.012.164.006.386-.06.586.422.206.504.7 1.706.764 1.834.062.13.104.282.02.434-.082.152-.124.252-.25.375-.124.124-.266.27-.376.364-.124.106-.254.22-.112.464.142.246.634 1.05 1.356 1.693.93.83 1.716 1.085 1.956 1.216.24.13.38.106.522-.058.142-.164.614-.716.776-.963.164-.246.326-.205.546-.123.22.082 1.396.657 1.636.776.24.117.4.176.458.27.062.094.062.55-.204 1.301z" />
                </svg>
                <Link
                  href={`https://wa.me/${contact.phones[0].replace(/[^0-9]/g, "")}`}
                  className="break-words text-xs text-blue-100 transition-colors hover:text-white lg:text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.phones[0]}
                </Link>
              </li>
              <li className="flex items-start gap-2 lg:gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="break-words text-xs text-blue-100 lg:text-sm">{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-2 text-left lg:col-span-1 mt-2 sm:mt-0">
            <h3 className="mb-2 sm:mb-4 text-lg font-semibold text-white">
              Social Media
            </h3>
            <div className="flex justify-start gap-4">
              {socialIcons.filter(icon => icon.href !== "#").map((icon) => (
                <Link
                  key={icon.name}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 transition-colors hover:text-white"
                  aria-label={icon.name}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-4 mt-6 border-t border-blue-800/50 text-center">
          <p className="text-sm text-blue-200">
            © 2026 LAUTECH Blockchain Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
