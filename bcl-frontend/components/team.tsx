'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export function TeamSection() {
  const founders = [
    {
      name: "John ADEKUNJO",
      image: "/johnadek1.jpg",
      twitter: "https://x.com/@Johnadek_",
      linkedin: "https://www.linkedin.com/in/john-adekunjo-6757271b5",
    },
    {
      name: "Thelma OPURUM",
      image: "/thelma1.jpg",
      twitter: "https://x.com/@thelma_opurum",
    },
    {
      name: "Blessing OLUWABAMIDELE",
      image: "/blessing1.jpg",
      twitter: "#",
    },
  ];

  const moderators = [
    {
      name: "Favour ABIDOYE-OLADEJO",
      role: "Lead C.M",
      image: "/favour.jpg",
      twitter: "https://x.com/@FavourAbidoye",
      github: "https://github.com/Favour4712",
    },
    {
      name: "Precious ADEBISI",
      role: "Project Manager",
      image: "/acunetix.png",
      twitter: "https://x.com/@acunetixtech001",
      github: "https://github.com/devacunetixtech",
    },
    {
      name: "Maryam TIJANI",
      role: "Female Guild Lead",
      image: "/teem12.jpg",
      twitter: "https://x.com/@thetee_m",
    },
    {
      name: "Jeremiah OYENIRAN",
      role: "Dev. Lead",
      image: "/jerrydam.jpg",
      twitter: "https://x.com/@Jerydam00",
      github: "https://github.com/jerydam",
    },
    {
      name: "Abdulhamid BAKARE",
      role: "Events Manager",
      image: "/herman.jpg",
      twitter: "https://x.com/@starkhubz",
    },
    {
      name: "Tomiwa",
      role: "Design Lead",
      image: "/trems.jpg",
      twitter: "https://x.com/@TommyTrems",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Meet the Builders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team is made up of passionate builders, innovators, and problem-solvers dedicated to exploring the endless possibilities of blockchain technology. They are committed to fostering innovation, collaboration, and education within the ecosystem.
          </p>
        </motion.div>

        {/* Founders */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
        >
          Founders
        </motion.h3>
        
        <div className="relative mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {founders.map((founder, index) => (
              <motion.div key={index} variants={itemVariants} className="flex-shrink-0">
                <Card className="hover:shadow-xl transition-shadow duration-300 w-72">
                  <CardContent className="p-6 text-center">
                    <img
                      className="mx-auto mb-4 w-36 h-36 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                      src={founder.image}
                      alt={`${founder.name} Avatar`}
                    />
                    <h4 className="mb-2 text-xl font-bold text-blue-600">
                      {founder.name}
                    </h4>
                    <div className="flex justify-center space-x-4">
                      <Link href={founder.twitter} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <XIcon className="w-6 h-6" />
                      </Link>
                      {founder.linkedin && (
                        <Link href={founder.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                          <Linkedin className="w-6 h-6" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Community Moderators */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
        >
          Community Moderators
        </motion.h3>
        
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {moderators.map((mod, index) => (
              <motion.div key={index} variants={itemVariants} className="flex-shrink-0">
                <Card className="hover:shadow-xl transition-shadow duration-300 w-72">
                  <CardContent className="p-6 text-center">
                    <img
                      className="mx-auto mb-4 w-36 h-36 rounded-full object-cover hover:scale-105 transition-transform duration-300"
                      src={mod.image}
                      alt={`${mod.name} Avatar`}
                    />
                    <h4 className="mb-1 text-xl font-bold text-blue-600">
                      {mod.name}
                    </h4>
                    <p className="text-gray-600 mb-3 font-medium">{mod.role}</p>
                    <div className="flex justify-center space-x-4">
                      <Link href={mod.twitter} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <XIcon className="w-6 h-6" />
                      </Link>
                      {mod.github && (
                        <Link href={mod.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                          <Github className="w-6 h-6" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}