import Image from 'next/image';
import { events } from '@/lib/data.json'

interface EventCardProps {
  event?: typeof events[0]; // Optional event object for more details
  onViewDetails?: () => void; // Route to event details page or open modal
}

export default function LandingPageEventCard({
  event,
  onViewDetails
}: EventCardProps) {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Event Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event?.image || '/placeholder-event.jpg'} // Fallback image if event image is not provided
          alt={event?.title || 'Event Image'}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="mb-1 text-xl font-bold text-blue-600">
          {event?.title || 'Event Title'}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600">
          {event?.description || 'Event Description'}
        </p>

        {/* Event Details */}
        <div className="mb-5 space-y-2">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span>{event?.date || 'Event Date'}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event?.time || 'Event Time'}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>{event?.location || 'Event Location'}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onViewDetails}
          className="w-full rounded-lg bg-blue-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
}