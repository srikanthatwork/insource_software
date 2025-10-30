import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Building2,
  Users,
  Map,
  Network,
  Briefcase,
  Handshake,
  Laptop,
} from "lucide-react";

const GlobalInnovation: React.FC = () => {
  const [rotatingIndex, setRotatingIndex] = useState<number | null>(null);

  const cards = [
    {
      icon: <Globe2 size={48} />,
      title: "Global Network",
      desc: "Showcase interconnected industries and worldwide partnerships powering innovation.",
      color: "from-blue-500 to-cyan-400",
      hoverColor: "hover:bg-blue-50",
    },
    {
      icon: <Building2 size={48} />,
      title: "Industry Hubs",
      desc: "Feature diverse business sectors — healthcare, manufacturing, and technology ecosystems.",
      color: "from-emerald-500 to-green-400",
      hoverColor: "hover:bg-green-50",
    },
    {
      icon: <Map size={48} />,
      title: "Customer Locations",
      desc: "Visualize customers and partners across continents with geo-markers and region highlights.",
      color: "from-orange-500 to-yellow-400",
      hoverColor: "hover:bg-yellow-50",
    },
    {
      icon: <Users size={48} />,
      title: "Team Collaboration",
      desc: "Show diverse teams working together in hybrid environments with unified communication tools.",
      color: "from-purple-500 to-pink-400",
      hoverColor: "hover:bg-purple-50",
    },
    {
      icon: <Handshake size={48} />,
      title: "Partnerships",
      desc: "Highlight trusted collaborations with industry leaders ensuring shared growth and value.",
      color: "from-rose-500 to-red-400",
      hoverColor: "hover:bg-rose-50",
    },
    {
      icon: <Network size={48} />,
      title: "Connected Systems",
      desc: "Depict seamless digital integration linking data, operations, and decision intelligence.",
      color: "from-teal-500 to-cyan-400",
      hoverColor: "hover:bg-teal-50",
    },
    {
      icon: <Laptop size={48} />,
      title: "Virtual Collaboration",
      desc: "Show remote teamwork with global professionals engaging through digital platforms.",
      color: "from-indigo-500 to-blue-400",
      hoverColor: "hover:bg-indigo-50",
    },
    {
      icon: <Briefcase size={48} />,
      title: "Innovation in Action",
      desc: "Showcase modern workplaces where technology meets creativity and real-world problem solving.",
      color: "from-yellow-500 to-orange-500",
      hoverColor: "hover:bg-yellow-50",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
        >
         Visualizing Global Connections
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-16"
        >
Discover how innovation connects industries, teams, and customers worldwide through powerful visuals that showcase collaboration, technology, and real-world impact.        </motion.p>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                type: "spring",
              }}
              viewport={{ once: true }}
              className={`relative flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-3 ${card.hoverColor}`}
            >
              {/* Clickable Animated Icon */}
              <motion.div
                className={`p-6 rounded-full bg-gradient-to-r ${card.color} text-white mb-4 cursor-pointer shadow-md`}
                whileHover={{ scale: 1.1 }}
                animate={
                  rotatingIndex === index
                    ? { rotate: [0, -25, 25, 0] }
                    : { rotate: 0 }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                onClick={() => {
                  setRotatingIndex(index);
                  setTimeout(() => setRotatingIndex(null), 800);
                }}
              >
                {card.icon}
              </motion.div>

              {/* Card Text */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>

              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-transparent opacity-0 hover:opacity-30 transition-all duration-500 hover:from-orange-200 hover:to-yellow-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalInnovation;
