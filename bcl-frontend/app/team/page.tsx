import Team from "@/components/team";
import { SocialIcons, TeamMember as TeamInterface } from "@/components/team";
import { team } from "@/lib/data.json";
import Link from "next/link";
import Image from "next/image";

export function TeamCard({ member }: { member: TeamInterface }) {
  const isFounder = member.role.toLowerCase().includes("founder");

  return (
    <div className="group p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className={`h-70 w-60 overflow-hidden mx-auto mb-4 ${isFounder ? "" : "rounded-[50px] rounded-bl-[110px] border-3 border-sky-800"}`}>
        <Image
          src={member.image}
          alt={member.name}
          width={260}
          height={260}
          className={`h-full w-full object-cover overflow-hidden ${isFounder ? "" : "rounded-[40px] rounded-bl-[100px]"}`}
        />
      </div>
      <h3 className="text-center text-lg font-semibold text-sky-900">
        {member.name}
      </h3>
      <p className={`mt-1 text-center text-base text-slate-500 ${isFounder ? "hidden" : "block"}`}>{member.role}</p>
      <SocialIcons social={member.social} />
    </div>
  );
}

export default function TeamLayout() {
  const { quote, ...groups } = team as Record<string, any>;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="min-h-screen px-10">
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-2 text-center">
            <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Meet the Builders
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              Our team is made up of passionate builders, innovators, and
              problem-solvers dedicated to exploring the endless various
              possibilities of blockchain technology. They are committed to
              fostering innovation, collaboration, and education within the
              ecosystem.
            </p>
          </div>
        </section>

        <div className="space-y-16 my-10">
          {Object.entries(groups).map(([groupName, members]) => {
            if (!Array.isArray(members) || members.length === 0) return null;

            const formattedName = groupName
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase());

            return (
              <section key={groupName}>
                <div className="mb-8 text-center">
                  <p className="text-lg font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {formattedName}
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {members.map((member: TeamInterface) => (
                    <TeamCard key={member.name} member={member} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        {/* <section className="py-1">
                    
                </section> */}
      </main>
    </div>
  );
}
