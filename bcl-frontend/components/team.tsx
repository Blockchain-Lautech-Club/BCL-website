import Image from 'next/image';
import Link from 'next/link';
import { team } from '@/lib/data.json';

interface SocialLink {
  link: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    x: SocialLink;
    linkedin: SocialLink;
    github: SocialLink;
  };
}

export function SocialIcons({ social }: { social: TeamMember['social'] }) {
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
      {social.github?.link && (
        <Link href={social.github.link} aria-label="GitHub profile" className="text-slate-400 transition-colors hover:text-slate-700">
          <Image
            src={social.github.icon}
            alt="GitHub icon"
            width={18}
            height={18}
            className="w-5 h-5 text-current"
          />
        </Link>
      )}
    </div>
  );
}

// only for landing page. teamCard for page is in the page directory
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="h-70 w-60 overflow-hidden rounded-[50px] rounded-bl-[110px] mx-auto mb-4 border-2 p-4 border-sky-800 ">
        <Image
          src={member.image}
          alt={member.name}
          width={260}
          height={260}
          className="h-full w-full object-cover overflow-hidden rounded-[40px] rounded-bl-[100px] "
        />
      </div>
      <h3 className="text-center text-lg font-semibold text-sky-900">{member.name}</h3>
      <p className="mt-1 text-center text-base text-slate-500">{member.role}</p>
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
              <span className="text-lg font-semibold text-blue-600">Meet the Builders</span>
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
