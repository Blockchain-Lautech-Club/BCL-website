import Image from 'next/image';
import Link from 'next/link';
import { events } from '@/lib/events'
import { Badge } from '@/components/ui/badge';

interface EventCardProps {
  event?: typeof events[0];
  onViewDetails?: () => void;
}

export default function LandingPageEventCard({ event, onViewDetails }: EventCardProps) {
  return (
    <article className="group relative rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden h-full flex flex-col">
      <div className="overflow-hidden h-48 relative shrink-0">
        <Image
          src={event?.image || '/placeholder-event.jpg'}
          alt={event?.title || 'Event Image'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {event?.type && (
            <Badge className="rounded-full bg-[#02152d] text-white border-0">
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
          )}
          {event?.status && (
            <Badge className={`rounded-full border-0 ${event.status === 'past' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}>
              {event.status === 'past' ? 'Ended' : 'Upcoming'}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event?.title || 'Event Title'}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event?.description || 'Event Description'}</p>

        <div className="space-y-2 text-sm text-gray-700 mb-6">
          {event?.date && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#02152d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{/^\d{4}-\d{2}-\d{2}/.test(event.date) ? new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : event.date}</span>
            </div>
          )}
          {event?.time && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#02152d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{event.time}</span>
            </div>
          )}
          {event?.location && (
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#02152d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{event.location}</span>
            </div>
          )}
        </div>

        {/* @ts-ignore */}
        {event?.disableViewDetails ? null : event?.externalLink ? (
          <a
            /* @ts-ignore */
            href={event.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto block w-full rounded-full border-2 border-[#02152d] bg-white py-2 text-center text-sm font-semibold text-[#02152d] hover:bg-[#02152d] hover:text-white transition-colors"
          >
            View Details
          </a>
        ) : (
          <Link
            href={`/events/${event?.id}`}
            onClick={(e) => {
              if (onViewDetails) {
                e.preventDefault();
                onViewDetails();
              }
            }}
            className="mt-auto block w-full rounded-full border-2 border-[#02152d] bg-white py-2 text-center text-sm font-semibold text-[#02152d] hover:bg-[#02152d] hover:text-white transition-colors"
          >
            View Details
          </Link>
        )}
      </div>
    </article>
  );
}