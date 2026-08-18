"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { events } from "@/lib/events";
import LandingPageEventCard from "@/components/events/eventCard";

const EventsTeaserContent = () => {
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof events)[number] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const upcomingEvents = events.filter((event) => event.status === "upcoming");

  const viewEvent = (event: (typeof events)[number]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 pb-12">
      {/* Gradient background - curve up behind cards */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%] rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem]"
        style={{
          background: "linear-gradient(to top, #3B82F6 0%, #7C3AED 100%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 pt-16 text-center">
         <div
          className="mx-auto mb-10 inline-flex rounded-[28px] p-[1.5px]"
          style={{ background: "linear-gradient(to bottom, #7C3AED, #3B82F6)" }}
        >
          <div className="rounded-full bg-gray-100/90 px-6 py-2">
            <span className="text-lg font-semibold text-blue-600">
               Events
            </span>
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join our exciting workshops, seminars, and networking events to
          accelerate your blockchain journey
        </p>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="relative z-10 mt-12">
        <div className="flex gap-4 overflow-x-auto px-6 pb-8 scrollbar-hide sm:px-12 lg:px-20">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="w-[85vw] shrink-0 sm:w-[45vw] lg:w-[30vw] xl:w-[25vw]"
            >
              <LandingPageEventCard
                event={event}
                onViewDetails={() => viewEvent(event)}
              />
            </div>
          ))}
          
          {/* Coming Soon Card */}
          <div className="w-[85vw] shrink-0 sm:w-[45vw] lg:w-[30vw] xl:w-[25vw]">
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-white/50 p-6 text-center shadow-sm backdrop-blur-sm transition-all hover:border-blue-400 hover:bg-blue-50/50">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">More Events</h3>
              <p className="mt-2 text-sm text-gray-500">Stay tuned for more exciting workshops and hackathons coming your way!</p>
            </div>
          </div>
        </div>
        
        {/* View All Events Button */}
        <div className="mt-8 flex justify-center pb-4">
          <Link
            href="/events"
            className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-600 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            View All Events
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
              <DialogDescription>{selectedEvent.tagline}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Date
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedEvent.date}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Time
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedEvent.time}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    {selectedEvent.location}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl bg-slate-100">
                <img
                  src={selectedEvent.image || "/placeholder-event.jpg"}
                  alt={selectedEvent.title}
                  className="w-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Description
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {selectedEvent.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Agenda
                  </h3>
                  <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-slate-600">
                    {selectedEvent.agenda?.map((item, agendaIndex) => {
                      const agendaItem = item as { time?: string; activity?: string };
                      return (
                        <li key={agendaIndex}>
                          {agendaItem.time ? (
                            <span className="font-medium">{agendaItem.time}: </span>
                          ) : null}
                          {agendaItem.activity}
                        </li>
                      );
                    }) || <li>No agenda available</li>}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Speaker
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {selectedEvent.speaker_name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {selectedEvent.speaker_title}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    {selectedEvent.speaker_bio}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {upcomingEvents.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-600">No upcoming events at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default function EventsTeaser() {
  return <EventsTeaserContent />;
}
