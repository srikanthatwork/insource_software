import React, { useState } from "react";
import { ShieldCheck, Smartphone, Globe2, Brain } from "lucide-react";
import { motion } from "framer-motion";

const KeyBenefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: <Globe2 size={36} />,
      title: "Unified Platform Experience",
      description:
        "Manage operations, analytics, and communication seamlessly within one intelligent ecosystem.",
      gradient: "from-blue-500 to-cyan-400",
      hoverColor: "hover:bg-blue-100",
    },
    {
      icon: <Brain size={36} />,
      title: "AI-Driven Insights & Automation",
      description:
        "Harness machine learning to drive real-time decision-making and process efficiency.",
      gradient: "from-indigo-500 to-purple-500",
      hoverColor: "hover:bg-purple-100",
    },
    {
      icon: <Smartphone size={36} />,
      title: "Mobile-First, Globally Scalable",
      description:
        "Empower teams anywhere with mobile-ready solutions built for global scalability.",
      gradient: "from-green-500 to-emerald-400",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Security & Privacy Compliance",
      description:
        "Built on robust, enterprise-grade security frameworks ensuring data privacy and compliance.",
      gradient: "from-yellow-500 to-orange-500",
      hoverColor: "hover:bg-yellow-100",
    },
  ];

  return (
    <section
      className="bg-gray-50 py-20 px-6 md:px-16 overflow-hidden"
      id="key-benefits"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
        >
          Key Benefits
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-12"
        >
          Experience the next generation of intelligent, secure, and scalable
          business solutions.
        </motion.p>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className={`flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md transition-all duration-300 transform hover:shadow-2xl ${item.hoverColor}`}
              style={{ minHeight: "320px" }}
            >
              {/* Clickable Animated Icon */}
              <motion.div
                className={`p-4 rounded-full bg-gradient-to-r ${item.gradient} text-white mb-4 cursor-pointer`}
                whileTap={{ scale: 0.9 }}
                animate={
                  activeIndex === index
                    ? { y: [0, -20, 0] }
                    : { y: 0 }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  repeat: activeIndex === index ? 1 : 0,
                }}
                onClick={() => {
                  setActiveIndex(index);
                  setTimeout(() => setActiveIndex(null), 600);
                }}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyBenefits;
