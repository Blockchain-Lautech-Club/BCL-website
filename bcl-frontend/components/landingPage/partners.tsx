import { partners } from "@/lib/data.json";
import Image from "next/image";

// Gradient border badge
const SectionBadge = () => (
  <div
    className="mx-auto mb-10 inline-flex rounded-full p-[1.5px]"
    style={{ background: "linear-gradient(to bottom, #7C3AED, #3B82F6)" }}
  >
    <div className="rounded-full bg-gray-100/90 px-6 py-2">
      <span className="text-lg font-semibold text-blue-600">Our Partners</span>
    </div>
  </div>
);

const PartnerCard = ({ partner }: { partner: typeof partners[0] }) => (
  <div className="flex w-32 shrink-0 flex-col items-center rounded-2xl bg-white p-2 shadow-sm transition-shadow hover:shadow-md sm:w-40 sm:p-4 lg:w-48 lg:p-6">
    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg sm:mb-3 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={200}
        height={200}
        className="h-full w-full rounded-xl object-contain"
      />
    </div>
    <span className="whitespace-pre-line text-center text-xs font-medium text-blue-600 sm:text-sm">
      {partner.name}
    </span>
  </div>
);

export default function Partners() {
  // Split partners into two rows
  const midIndex = Math.ceil(partners.length / 2);
  const row1 = partners.slice(0, midIndex);
  const row2 = partners.slice(midIndex);

  return (
    <section className="overflow-hidden bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge />
        </div>
      </div>

      <div className="relative mx-auto mt-4 flex max-w-[100vw] flex-col gap-6 overflow-hidden sm:gap-8">
        {/* Row 1: Left to Right */}
        <div className="animate-marquee flex w-max gap-4 sm:gap-6">
          {[...row1, ...row1, ...row1, ...row1].map((partner, index) => (
            <PartnerCard key={`r1-${index}`} partner={partner} />
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="animate-marquee-reverse flex w-max gap-4 sm:gap-6">
          {[...row2, ...row2, ...row2, ...row2].map((partner, index) => (
            <PartnerCard key={`r2-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
