"use client";

import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  Share2,
  Bookmark,
  X,
  Linkedin,
  Github,
  Clock,
} from "lucide-react";
import { Event as Events, formatDate, isEventFull } from "@/lib/api";
import { events } from "@/lib/data.json";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import LandingPageEventCard from "@/components/events/eventCard";

export interface EventActivity {
  icon: string;
  title: string;
}

export interface EventDay {
  name: string;
  time: string;
  activities: EventActivity[];
}

interface EventAgenda {
  title: string;
  date: string;
  button: string;
  activities: EventActivity[];
}

export interface Event {
  id: string;
  title: string;
  tagline: string;
  theme: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;

  agenda: EventAgenda[];

  type: string;
  status: string;

  attendees: number;
  max_attendees: number;

  speaker_name: string;
  speaker_title: string;
  speaker_bio: string;
  speaker_avatar: string;
}

export default function EventDetailPage() {
  const params = useParams();
  const event = useMemo(() => {
    const matchedEvent = (events as unknown as Events[]).find(
      (item) => item.id === params.id,
    );
    return matchedEvent ?? null;
  }, [params.id]);

  const relatedEvents = useMemo(() => {
    if (!event) return [];

    return (events as unknown as Event[])
      .filter((item) => item.id !== event.id && item.type === event.type)
      .slice(0, 2);
  }, [event]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event?.title,
          text: event?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleRegister = () => {
    // In a real app, this would handle event registration
    alert("Registration functionality would be implemented here");
  };

  if (!event) {
    notFound();
  }

  const isUpcoming = event.status === "upcoming";
  const isFull = isEventFull(event);

  const formatDescription = (description: string) => {
    if (!description) return [];

    return description.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-4"
          >
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="font-serif text-xl font-bold text-gray-900 mt-6 mb-3"
          >
            {paragraph.replace("### ", "")}
          </h3>
        );
      }
      if (paragraph.startsWith("• ") || paragraph.includes("\n• ")) {
        const listItems = paragraph
          .split("\n")
          .filter((item) => item.startsWith("• "));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6">
            {listItems.map((item, i) => (
              <li key={i} className="text-gray-700">
                {item.replace("• ", "")}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    });
  };

  // const agendaDays = event.agenda?.flatMap(item => Object.values(item).flat());

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1">

        {/* Event Header */}
        <section className="relative h-[430px] overflow-hidden">
          <Image
            src={event.image || "/placeholder-event.jpg"}
            fill
            priority
            alt={event.title}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#02152d]/95 via-[#02152d]/80 to-[#02152d]/60" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <Badge className="rounded-full bg-white/20 backdrop-blur text-white border mb-4">
                {event.tagline}
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                {event.title}
              </h1>

              <h2 className="text-2xl md:text-3xl text-white font-semibold leading-snug mb-4">
                THEME:
                <span className="text-blue-400"> {event.theme}</span>
              </h2>

              <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        </section>

        {/* organizer and details card */}
        <section className="-mt-16 relative z-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
              <div>
                <Button variant="outline" className="mb-4 rounded-full border-2 border-[#02152d] text-[#02152d] hover:bg-[#02152d] hover:text-white">
                  Event Organizer
                </Button>
                <Card className="rounded-3xl shadow-xl border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Blockchain LAUTECH Club</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Blockchain LAUTECH has been championing blockchain education
                      since 2020, empowering students with blockchain expertise,
                      driving innovation, and building a vibrant ecosystem for
                      future blockchain leaders through workshops, hackathons,
                      and collaborative projects.
                    </p>

                    <div className="flex gap-4">
                      <Link href="https://x.com/BlockchainLAUT1" target="_blank" rel="noopener noreferrer">
                        <X className="h-6 w-6 text-gray-600 hover:text-[#02152d]" />
                      </Link>
                      <Link href="https://www.linkedin.com/company/blockchain-club-lautech/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6 text-gray-600 hover:text-[#02152d]" />
                      </Link>
                      <Link href="https://github.com/Blockchain-Lautech-Club/" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6 text-gray-600 hover:text-[#02152d]" />
                      </Link>
                      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg className="h-6 w-6 text-gray-600 hover:text-[#02152d]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </Link>
                      <div className="h-6 w-6 flex items-center justify-center">
                        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 1a5 5 0 0 0-5 5v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v1H9V6a3 3 0 0 1 3-3zm0 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Button variant="outline" className="mb-4 rounded-full border-2 border-[#02152d] text-[#02152d] hover:bg-[#02152d] hover:text-white">
                  Event Details
                </Button>
                <Card className="rounded-3xl shadow-xl border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Event Details</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-[#02152d] mt-0.5" />
                      <span className="text-gray-700">{formatDate(event.date)}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#02152d] mt-0.5" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#02152d] mt-0.5" />
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* overview card */}
        <section className="container mx-auto px-6 mt-12">
          <div className="text-center mb-6">
            <Button variant="outline" className="rounded-full border-2 border-[#02152d] text-[#02152d] hover:bg-[#02152d] hover:text-white">
              Overview
            </Button>
          </div>

          <Card className="rounded-3xl shadow-lg">
            <CardContent className="p-8 text-gray-700 leading-relaxed">
              <p className="mb-4">
                {event.description}
              </p>
              {/* <p>
                Confluence 2025 brings together the brightest minds in blockchain, Web3, and emerging technologies for two days of immersive learning, networking, and innovation. Whether you're a developer looking to build the next big thing or a community member eager to learn about the future of technology, this event has something for everyone.
              </p> */}
            </CardContent>
          </Card>
        </section>

        {/* agenda */}
        <section className="container mx-auto px-6 mt-12">
          <div className="text-center mb-6">
            <Button variant="outline" className="rounded-full border-2 border-[#02152d] text-[#02152d] hover:bg-[#02152d] hover:text-white">
              Agenda
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {event.agenda && event.agenda.length > 0 ? (
              event.agenda?.map((day) => (
              <Card key={day.title} className="rounded-3xl bg-gradient-to-br from-[#2E6AF7] to-[#1F3F97] text-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">{day.title}</CardTitle>
                  <p className="text-blue-100 text-lg">{day.date}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {day.activities?.map((activity) => (
                    <div key={activity.title} className="flex items-center gap-3">
                      <div className="text-2xl">{activity.icon}</div>
                      <p className="text-lg">{activity.title}</p>
                    </div>
                  ))}
                </CardContent>
                <div className="p-6 pt-0">
                  <Button className="w-full rounded-full bg-white text-[#02152d] hover:bg-gray-100 font-semibold">
                    {day.button} →
                  </Button>
                </div>
              </Card>
            ))
            ) : (
              <p className="">
                No agenda set by the organiser
              </p>
            )}
          </div>
        </section>

        {/* related event */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            While you are here, you can checkout our other events
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {relatedEvents.map((event) => (
              <LandingPageEventCard key={event.id} event={event as any} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
