import { partners } from "@/lib/data.json";
import Image from "next/image";

// const partners = [
//   { name: 'Celo Africa\nDAO', logo: '/logos/celo-africa.png', bg: 'bg-yellow-300' },
//   { name: 'Web3Bridge', logo: '/logos/web3bridge.png', bg: 'bg-white' },
//   { name: 'CrossFi', logo: '/logos/crossfi.png', bg: 'bg-slate-900' },
//   { name: 'CoinEx', logo: '/logos/coinex.png', bg: 'bg-emerald-500' },
//   { name: 'Celo Africa\nDAO', logo: '/logos/celo-africa.png', bg: 'bg-blue-500' },
//   { name: 'GIDA', logo: '/logos/gida.png', bg: 'bg-red-700' },
//   { name: 'Nova\nLabs', logo: '/logos/nova-labs.png', bg: 'bg-black' },
//   { name: 'FaucetDrops', logo: '/logos/faucet-drops.png', bg: 'bg-blue-400' },
//   { name: 'AllstarsNG', logo: '/logos/allstarsng.png', bg: 'bg-black' },
//   { name: 'Backpack', logo: '/logos/backpack.png', bg: 'bg-black' },
// ];

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

export default function Partners() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionBadge />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-lg sm:h-28 sm:w-28">
                {/* Replace with actual Image component */}
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-center text-sm font-medium text-blue-600 whitespace-pre-line">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
