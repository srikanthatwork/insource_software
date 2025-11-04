// import React from "react";
// import { Globe2, Smartphone, Users, Video } from "lucide-react";

// const ImagerySuggestions: React.FC = () => {
//   const imageryItems = [
//     {
//       icon: <Users size={40} />,
//       title: "Diverse Teams Collaborating",
//       description:
//         "Show professionals from multiple industries working together around interactive dashboards, symbolizing collaboration and innovation.",
//       gradient: "from-indigo-500 to-purple-500",
//     },
//     {
//       icon: <Globe2 size={40} />,
//       title: "Global Reach Visualization",
//       description:
//         "Display an animated world map highlighting your worldwide operations, connections, and service networks.",
//       gradient: "from-blue-500 to-cyan-400",
//     },
//     {
//       icon: <Smartphone size={40} />,
//       title: "Mobile Devices with AI Insights",
//       description:
//         "Feature smartphones and tablets with AI-driven alerts, charts, and predictive insights that demonstrate smart decision-making.",
//       gradient: "from-green-500 to-emerald-400",
//     },
//     {
//       icon: <Video size={40} />,
//       title: "Video: Your Work. Simplified.",
//       description:
//         "Highlight a short promotional video that conveys the brand message — technology simplifying modern work life.",
//       gradient: "from-yellow-500 to-orange-500",
//     },
//   ];

//   return (
//     <section className="bg-white py-20 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
//           Imagery Suggestions
//         </h2>

//         <p className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
//           Bring your story to life with visuals that reflect collaboration,
//           innovation, and global impact — perfectly aligned with your brand’s
//           identity.
//         </p>

//         {/* Grid of Suggestions */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {imageryItems.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
//             >
//               <div
//                 className={`p-4 rounded-full bg-gradient-to-r ${item.gradient} text-white mb-4`}
//               >
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImagerySuggestions;

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Smartphone, Users, Video } from "lucide-react";

const ImagerySuggestions: React.FC = () => {
  const imageryItems = [
    {
      icon: <Users size={40} />,
      title: "Diverse Teams Collaborating",
      description:
        "Show professionals from multiple industries working together around interactive dashboards, symbolizing collaboration and innovation.",
      gradient: "from-indigo-500 to-purple-500",
      hoverGradient: "from-indigo-600 to-purple-600",
      direction: "left",
    },
    {
      icon: <Globe2 size={40} />,
      title: "Global Reach Visualization",
      description:
        "Display an animated world map highlighting your worldwide operations, connections, and service networks.",
      gradient: "from-blue-500 to-cyan-400",
      hoverGradient: "from-blue-600 to-cyan-500",
      direction: "right",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Devices with AI Insights",
      description:
        "Feature smartphones and tablets with AI-driven alerts, charts, and predictive insights that demonstrate smart decision-making.",
      gradient: "from-green-500 to-emerald-400",
      hoverGradient: "from-green-600 to-emerald-500",
      direction: "left",
    },
    {
      icon: <Video size={40} />,
      title: "Video: Your Work. Simplified.",
      description:
        "Highlight a short promotional video that conveys the brand message — technology simplifying modern work life.",
      gradient: "from-yellow-500 to-orange-500",
      hoverGradient: "from-yellow-600 to-orange-600",
      direction: "right",
    },
  ];

  const revealVariant = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -80 : 80,
      y: 40,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
Smarter Care for a Global Community        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          Bring your story to life with visuals that reflect collaboration,
          innovation, and global impact — perfectly aligned with your brand’s
          identity.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {imageryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`relative w-full max-w-md h-72 flex flex-col justify-center items-center text-center rounded-2xl shadow-md bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all duration-500`}
              custom={item.direction}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Gradient border hover effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10`}
              ></div>

              {/* Icon */}
              <div
                className={`p-4 rounded-full bg-gradient-to-r ${item.gradient} text-white mb-4 transition-all duration-500 hover:bg-gradient-to-r hover:${item.hoverGradient}`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm px-4 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagerySuggestions;
