"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ArrowRight } from "lucide-react"
import { events as sampleEvents } from '@/lib/data.json'
import EventCard from "@/components/events/eventCard"

export default function Page() {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState("All Events")
  const categories = ["All Events", "Workshop", "Conference", "Seminar", "Webinar", "Hackathon", "Panel Discussion"]

  const filtered = sampleEvents.filter((e) => {
    const matchesCategory = active === 'All Events' ? true : (e?.type || '').toLowerCase().includes(active.toLowerCase())
    const matchesQuery = !query || (e.title + ' ' + e.description).toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Blockchain Events</h1>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">Join our community events, workshops, and seminars to expand your blockchain knowledge and network with fellow enthusiasts.</p>
          <div className="flex justify-center gap-4">
            <Link href="#events" className="rounded-lg bg-blue-600 px-5 py-2.5 text-white">Explore Events</Link>
            <Link href="#join" className="rounded-lg border border-blue-200 px-5 py-2.5 text-blue-600">Join community</Link>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section id="events" className="container mx-auto px-6 -mt-8">
        <div className="bg-white rounded-full p-4 shadow-md max-w-3xl mx-auto flex items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2 text-blue-500 rounded-full bg-blue-50">
              <Search size={18} />
            </div>
            <input
              aria-label="Search events"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-full px-4 py-1 text-sm bg-blue-50 text-blue-600">All Events</button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-xl text-sm border ${active===c ? 'bg-blue-700 text-blue-100 border-blue-700' : 'bg-transparent text-blue-600 border-blue-200'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filtered.length ? filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          )) : (
            <div className="col-span-full py-12 text-center">
              <h3 className="text-2xl font-semibold">No upcoming events yet</h3>
              <p className="text-gray-600 mt-2">Stay updated by joining our community today!</p>
              <div className="mt-4">
                <Link href="#join" className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white">Join Community</Link>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center my-8">
          <button className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-4 py-2 text-blue-700">Load more <ArrowRight size={16} /></button >
        </div>
      </section>
    </main>
  )
}