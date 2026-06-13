'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from 'framer-motion';
import { events } from '@/lib/data.json'
import LandingPageEventCard from "@/components/events/eventCard"

const EventsTeaserContent = () => {
   const [selectedEvent, setSelectedEvent] = useState<typeof events[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const upcomingEvents = events.filter((event) => event.status === 'upcoming')

  const viewEvent = (event: typeof events[number]) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Blue diagonal triangle */}
      <div
        className="absolute inset-0 rounded-t-3xl sm:rounded-t-4xl md:rounded-t-5xl"
        style={{
          background:
            "linear-gradient(to top, rgba(59, 130, 246, 1.0) 0%, rgba(124, 58, 237, 1.0) 30%, transparent 30%, transparent 100%)",
        }}
      />

      <div className="text-center mb-16">
        <div
          className="mx-auto mb-10 inline-flex rounded-full p-[1.5px]"
          style={{ background: "linear-gradient(to bottom, #7C3AED, #3B82F6)" }}
        >
          <div className="rounded-full bg-gray-100/90 px-6 py-2">
            <span className="text-sm font-semibold text-blue-600">
              Upcoming Events
            </span>
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join our exciting workshops, seminars, and networking events to accelerate your blockchain journey
        </p>
      </div>

      {/* Your content goes here */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="relative mx-auto max-w-4xl px-4">
          
          <div
          className={`
        ${upcomingEvents.length === 1
              ? "flex justify-center items-center max-w-lg mx-auto px-4 mb-12"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto px-4"}
      `}
        >
          {upcomingEvents.map((event, index) => (
            <div
              className="w-full max-w-sm"
            >
              <LandingPageEventCard event={event} onViewDetails={() => viewEvent(event)} />
            </div>
          ))}

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
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Date</p>
                      <p className="mt-1 text-sm text-slate-700">{selectedEvent.date}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Time</p>
                      <p className="mt-1 text-sm text-slate-700">{selectedEvent.time}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Location</p>
                      <p className="mt-1 text-sm text-slate-700">{selectedEvent.location}</p>
                    </div>
                  </div>

                  <div className="rounded-3xl overflow-hidden bg-slate-100">
                    <img
                      src={selectedEvent.image || "/placeholder-event.jpg"}
                      alt={selectedEvent.title}
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">Description</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{selectedEvent.description}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-800">Agenda</h3>
                      <ul className="mt-2 list-disc list-inside space-y-2 text-sm text-slate-600">
                        {selectedEvent.agenda?.map((item, agendaIndex) => (
                          <li key={agendaIndex}>
                            {item.time ? <span className="font-medium">{item.time}: </span> : null}
                            {item.activity}
                          </li>
                        )) || <li>No agenda available</li>}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Speaker</p>
                      <p className="mt-2 text-sm font-semibold text-slate-800">{selectedEvent.speaker_name}</p>
                      <p className="text-sm text-slate-600">{selectedEvent.speaker_title}</p>
                      <p className="mt-2 text-sm text-slate-500">{selectedEvent.speaker_bio}</p>
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
            <div className="text-center py-12">
              <p className="text-gray-600">No upcoming events at the moment.</p>
            </div>
          )}
        </div>

        </div>
      </div>
    </section>
  );
};

export default function EventsTeaser() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <EventsTeaserContent />
    </section>
  );
}

// 'use client';
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// import { motion } from 'framer-motion';
// import { events } from '@/lib/data.json'
// import EventCard from "@/components/events/eventCard"

// export function EventsTeaser() {
  // const [selectedEvent, setSelectedEvent] = useState<typeof events[number] | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const upcomingEvents = events.filter((event) => event.status === 'upcoming')

  // const viewEvent = (event: typeof events[number]) => {
  //   setSelectedEvent(event);
  //   setIsModalOpen(true);
  // };

//   return (
//     <section className="pt-18 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-4"
//         >
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
//             Upcoming Events
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Join our exciting workshops, seminars, and networking events to accelerate your blockchain journey.
//           </p>
//         </motion.div>

      //   <motion.div
      //     variants={containerVariants}
      //     initial="hidden"
      //     animate="visible"
      //     className={`
      //   ${upcomingEvents.length === 1
      //         ? "flex justify-center items-center max-w-lg mx-auto px-4 mb-12"
      //         : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto px-4"}
      // `}
      //   >
      //     {upcomingEvents.map((event, index) => (
      //       <motion.div
      //         key={index}
      //         variants={itemVariants}
      //         className="w-full max-w-sm"
      //       >
      //         <EventCard event={event} onViewDetails={() => viewEvent(event)} />
      //       </motion.div>
      //     ))}

      //     {selectedEvent && (
      //       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      //         <DialogContent className="max-w-3xl">
      //           <DialogHeader>
      //             <DialogTitle>{selectedEvent.title}</DialogTitle>
      //             <DialogDescription>{selectedEvent.tagline}</DialogDescription>
      //           </DialogHeader>
      //           <div className="mt-4 space-y-6">
      //             <div className="grid gap-4 sm:grid-cols-2">
      //               <div className="rounded-2xl bg-slate-50 p-4">
      //                 <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Date</p>
      //                 <p className="mt-1 text-sm text-slate-700">{selectedEvent.date}</p>
      //               </div>
      //               <div className="rounded-2xl bg-slate-50 p-4">
      //                 <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Time</p>
      //                 <p className="mt-1 text-sm text-slate-700">{selectedEvent.time}</p>
      //               </div>
      //               <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
      //                 <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Location</p>
      //                 <p className="mt-1 text-sm text-slate-700">{selectedEvent.location}</p>
      //               </div>
      //             </div>

      //             <div className="rounded-3xl overflow-hidden bg-slate-100">
      //               <img
      //                 src={selectedEvent.image || "/placeholder-event.jpg"}
      //                 alt={selectedEvent.title}
      //                 className="w-full object-cover"
      //               />
      //             </div>

      //             <div className="space-y-4">
      //               <div>
      //                 <h3 className="text-sm font-semibold text-slate-800">Description</h3>
      //                 <p className="mt-2 text-sm leading-relaxed text-slate-600">{selectedEvent.description}</p>
      //               </div>

      //               <div>
      //                 <h3 className="text-sm font-semibold text-slate-800">Agenda</h3>
      //                 <ul className="mt-2 list-disc list-inside space-y-2 text-sm text-slate-600">
      //                   {selectedEvent.agenda?.map((item, agendaIndex) => (
      //                     <li key={agendaIndex}>
      //                       {item.time ? <span className="font-medium">{item.time}: </span> : null}
      //                       {item.activity}
      //                     </li>
      //                   )) || <li>No agenda available</li>}
      //                 </ul>
      //               </div>

      //               <div className="rounded-2xl border border-slate-200 bg-white p-4">
      //                 <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Speaker</p>
      //                 <p className="mt-2 text-sm font-semibold text-slate-800">{selectedEvent.speaker_name}</p>
      //                 <p className="text-sm text-slate-600">{selectedEvent.speaker_title}</p>
      //                 <p className="mt-2 text-sm text-slate-500">{selectedEvent.speaker_bio}</p>
      //               </div>

      //               <div className="flex justify-end">
      //                 <button
      //                   type="button"
      //                   className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      //                   onClick={() => setIsModalOpen(false)}
      //                 >
      //                   Close
      //                 </button>
      //               </div>
      //             </div>
      //           </div>
      //         </DialogContent>
      //       </Dialog>
      //     )}

      //     {upcomingEvents.length === 0 && (
      //       <motion.div
      //         variants={itemVariants}
      //         className="text-center py-12"
      //       >
      //         <p className="text-gray-600">No upcoming events at the moment.</p>
      //       </motion.div>
      //     )}
      //   </motion.div>
//       </div>
//     </section>
//   );
// }