import Image from 'next/image';
import { events } from '@/lib/data.json'

interface EventCardProps {
  event?: typeof events[0];
  onViewDetails?: () => void;
}

export default function LandingPageEventCard({ event, onViewDetails }: EventCardProps) {
  return (
    <article className="group relative rounded-2xl border border-purple-100 bg-white shadow-[0_10px_30px_rgba(99,102,241,0.06)]">
      <div className="overflow-hidden rounded-t-2xl h-56 relative">
        <Image
          src={event?.image || '/placeholder-event.jpg'}
          alt={event?.title || 'Event Image'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {event?.tagline && (
          <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-blue-700 border border-blue-200">{event.tagline}</span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-blue-700 mb-1">{event?.title || 'Event Title'}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{event?.description || 'Event Description'}</p>

        <ul className="mb-5 space-y-3 text-sm text-gray-600">
          {event?.date && (
            <li className="flex items-center gap-3">
              <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" /></svg>
              <span>{event.date}</span>
            </li>
          )}
          {event?.time && (
            <li className="flex items-center gap-3">
              <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{event.time}</span>
            </li>
          )}
          {event?.location && (
            <li className="flex items-center gap-3">
              <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              <span>{event.location}</span>
            </li>
          )}
        </ul>

        <button
          onClick={onViewDetails}
          className="w-full rounded-xl border border-blue-200 bg-white py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
        >
          View Details
        </button>
      </div>
    </article>
  );
}