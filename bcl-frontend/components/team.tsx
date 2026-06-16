  // const founders = [
  //   {
  //     name: "John ADEKUNJO",
  //     image: "/team/johnAdekunjo.jpg",
  //     twitter: "https://x.com/@Johnadek_",
  //     linkedin: "https://www.linkedin.com/in/john-adekunjo-6757271b5",
  //   },
  //   {
  //     name: "Thelma OPURUM",
  //     image: "/team/thelmaOpurum.jpg",
  //     twitter: "https://x.com/@thelma_opurum",
  //   },
  //   {
  //     name: "Blessing OLUWABAMIDELE",
  //     image: "/team/blessingOluwabamidele.jpg",
  //     twitter: "#",
  //   },
  // ];

  // const moderators = [
  //   {
  //     name: "Favour ABIDOYE-OLADEJO",
  //     role: "Lead C.M",
  //     image: "/team/favourAbidoyeOadejo.jpg",
  //     twitter: "https://x.com/@FavourAbidoye",
  //     github: "https://github.com/Favour4712",
  //   },
  //   {
  //     name: "Precious ADEBISI",
  //     role: "Project Manager",
  //     image: "/team/preciousAdebisi.png",
  //     twitter: "https://x.com/@acunetixtech001",
  //     github: "https://github.com/devacunetixtech",
  //   },
  //   {
  //     name: "Maryam TIJANI",
  //     role: "Female Guild Lead",
  //     image: "/team/maryamTijani.jpg",
  //     twitter: "https://x.com/@thetee_m",
  //   },
  //   {
  //     name: "Jeremiah OYENIRAN",
  //     role: "Dev. Lead",
  //     image: "/team/jeremiahOyeniran.jpg",
  //     twitter: "https://x.com/@Jerydam00",
  //     github: "https://github.com/jerydam",
  //   },
  //   {
  //     name: "Abdulhamid BAKARE",
  //     role: "Events Manager",
  //     image: "/team/abdulhamidBakare.jpg",
  //     twitter: "https://x.com/@starkhubz",
  //   },
  //   {
  //     name: "Tomiwa KAYODE",
  //     role: "Design Lead",
  //     image: "/team/tomiwaKayode.jpg",
  //     twitter: "https://x.com/@TommyTrems",
  //   },
  // ];

import Image from 'next/image';
import Link from 'next/link';
import { team } from '@/lib/data.json';

interface SocialLink {
  link: string;
  icon: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    x: SocialLink;
    linkedin: SocialLink;
  };
}

function SocialIcons({ social }: { social: TeamMember['social'] }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-4">
      {social.x?.link && (
        <Link href={social.x.link} aria-label="X profile" className="text-slate-400 transition-colors hover:text-slate-700">
          <Image
            src={social.x.icon}
            alt="X icon"
            width={18}
            height={18}
            className="w-5 h-5 text-current"
          />
        </Link>
      )}
      {social.linkedin?.link && (
        <Link href={social.linkedin.link} aria-label="LinkedIn profile" className="text-slate-400 transition-colors hover:text-slate-700">
          <Image
            src={social.linkedin.icon}
            alt="LinkedIn icon"
            width={18}
            height={18}
            className="w-5 h-5 text-current"
          />
        </Link>
      )}
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
        <Image
          src={member.image}
          alt={member.name}
          width={260}
          height={260}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-center text-lg font-semibold text-sky-900">{member.name}</h3>
      <p className="mt-2 text-center text-sm text-slate-500">{member.role}</p>
      <SocialIcons social={member.social} />
    </div>
  );
}

export default function Team() {
  const { quote, founders, moderators } = team as {
    quote: string;
    founders: TeamMember[];
    moderators: TeamMember[];
  };

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <div className="mx-auto mb-10 inline-flex rounded-full p-[1.5px]" style={{ background: 'linear-gradient(to bottom, #7C3AED, #3B82F6)' }}>
            <div className="rounded-full bg-gray-100/90 px-6 py-2">
              <span className="text-sm font-semibold text-blue-600">Meet the Builders</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{quote}</p>
        </div>

        <div className="space-y-16">
          <section>
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Founders</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {founders.map((founder) => (
                <TeamCard key={founder.name} member={founder} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Community Managers</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {moderators.map((manager) => (
                <TeamCard key={manager.name} member={manager} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
