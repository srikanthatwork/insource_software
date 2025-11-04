// import React, { useState } from "react";
// import { ShieldCheck, Smartphone, Globe2, Brain } from "lucide-react";
// import { motion } from "framer-motion";

// const KeyBenefits: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const benefits = [
//     {
//       icon: <Globe2 size={36} />,
//       title: "Unified Platform Experience",
//       description:
//         "Manage operations, analytics, and communication seamlessly within one intelligent ecosystem.",
//       gradient: "from-blue-500 to-cyan-400",
//       hoverColor: "hover:bg-blue-100",
//     },
//     {
//       icon: <Brain size={36} />,
//       title: "AI-Driven Insights & Automation",
//       description:
//         "Harness machine learning to drive real-time decision-making and process efficiency.",
//       gradient: "from-indigo-500 to-purple-500",
//       hoverColor: "hover:bg-purple-100",
//     },
//     {
//       icon: <Smartphone size={36} />,
//       title: "Mobile-First, Globally Scalable",
//       description:
//         "Empower teams anywhere with mobile-ready solutions built for global scalability.",
//       gradient: "from-green-500 to-emerald-400",
//       hoverColor: "hover:bg-green-100",
//     },
//     {
//       icon: <ShieldCheck size={36} />,
//       title: "Security & Privacy Compliance",
//       description:
//         "Built on robust, enterprise-grade security frameworks ensuring data privacy and compliance.",
//       gradient: "from-yellow-500 to-orange-500",
//       hoverColor: "hover:bg-yellow-100",
//     },
//   ];

//   return (
//     <section
//       className="bg-gray-50 py-20 px-6 md:px-16 overflow-hidden"
//       id="key-benefits"
//     >
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Headline */}
//         <motion.h2
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
//         >
//           Key Benefits
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-gray-600 text-lg max-w-3xl mx-auto mb-12"
//         >
//           Experience the next generation of intelligent, secure, and scalable
//           business solutions.
//         </motion.p>

//         {/* Benefits Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: false, amount: 0.2 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
//         >
//           {benefits.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.3 },
//               }}
//               className={`flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md transition-all duration-300 transform hover:shadow-2xl ${item.hoverColor}`}
//               style={{ minHeight: "320px" }}
//             >
//               {/* Clickable Animated Icon */}
//               <motion.div
//                 className={`p-4 rounded-full bg-gradient-to-r ${item.gradient} text-white mb-4 cursor-pointer`}
//                 whileTap={{ scale: 0.9 }}
//                 animate={
//                   activeIndex === index
//                     ? { y: [0, -20, 0] }
//                     : { y: 0 }
//                 }
//                 transition={{
//                   duration: 0.6,
//                   ease: "easeInOut",
//                   repeat: activeIndex === index ? 1 : 0,
//                 }}
//                 onClick={() => {
//                   setActiveIndex(index);
//                   setTimeout(() => setActiveIndex(null), 600);
//                 }}
//               >
//                 {item.icon}
//               </motion.div>

//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default KeyBenefits;


import React, { useState, useEffect } from "react";
import { ShieldCheck, Smartphone, Globe2, Brain, Sparkles, Zap, Target, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Types for our benefit items
interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  hoverColor: string;
  bgLight: string;
}

const KeyBenefits: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-reveal effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits: BenefitItem[] = [
    {
      icon: <Globe2 size={36} />,
      title: "Unified Platform Experience",
      description: "Manage operations, analytics, and communication seamlessly within one intelligent ecosystem. Streamline workflows and boost productivity across all departments.",
      gradient: "from-blue-500 to-cyan-400",
      hoverColor: "hover:bg-blue-50",
      bgLight: "bg-blue-50"
    },
    {
      icon: <Brain size={36} />,
      title: "AI-Driven Insights & Automation",
      description: "Harness machine learning to drive real-time decision-making and process efficiency. Predictive analytics and smart automation at your fingertips.",
      gradient: "from-indigo-500 to-purple-500",
      hoverColor: "hover:bg-purple-50",
      bgLight: "bg-purple-50"
    },
    {
      icon: <Smartphone size={36} />,
      title: "Mobile-First, Globally Scalable",
      description: "Empower teams anywhere with mobile-ready solutions built for global scalability. Perfect for remote work and international operations.",
      gradient: "from-green-500 to-emerald-400",
      hoverColor: "hover:bg-green-50",
      bgLight: "bg-green-50"
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Security & Privacy Compliance",
      description: "Built on robust, enterprise-grade security frameworks ensuring data privacy and compliance. SOC 2, GDPR, and HIPAA compliant out of the box.",
      gradient: "from-yellow-500 to-orange-500",
      hoverColor: "hover:bg-orange-50",
      bgLight: "bg-orange-50"
    },
   
  ];

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.9 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-6 md:px-16 overflow-hidden"
      id="key-benefits"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={floatingAnimation}
            className="inline-block mb-4"
          >
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white">
              <Sparkles size={24} />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Key Benefits
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Discover the powerful features that make our platform the perfect choice for modern businesses
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-lg transition-all duration-500 transform ${item.hoverColor} border border-gray-100`}
                style={{ minHeight: "320px" }}
              >
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 transition-opacity duration-300 hover:opacity-10`}></div>
                
                {/* Animated Icon */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className={`p-4 rounded-2xl bg-gradient-to-r ${item.gradient} text-white mb-6 cursor-pointer relative overflow-hidden`}
                  onClick={() => {
                    setActiveIndex(index);
                    setTimeout(() => setActiveIndex(null), 1000);
                  }}
                >
                  {/* Ripple effect */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-white rounded-full"
                      />
                    )}
                  </AnimatePresence>
                  
                  {item.icon}
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-4 leading-tight"
                  whileHover={{ color: "#4F46E5" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed text-sm md:text-base"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.description}
                </motion.p>

                {/* Hover indicator */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-full`}
                  whileHover={{ 
                    width: "100%", 
                    left: 0,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default KeyBenefits;