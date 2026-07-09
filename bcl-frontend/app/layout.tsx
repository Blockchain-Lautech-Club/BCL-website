import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Blockchain LAUTECH- Empowering the Next Generation",
  description: "Join the LAUTECH Blockchain Club and explore the future of technology through workshops, networking, and innovation.",
  generator: "Next.js",
  keywords: ["Blockchain", "LAUTECH", "Technology", "Innovation", "Workshops", "Networking"],
  icons: "/bannernew.jpg",
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
  <title>Blockchain LAUTECH</title>
</head>
      <body className="flex flex-col min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}