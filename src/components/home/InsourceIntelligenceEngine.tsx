// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Brain, 
//   TrendingUp, 
//   LayoutDashboard, 
//   AlertTriangle, 
//   MessageSquare,
//   RefreshCw,
//   ChevronDown,
//   ChevronUp,
//   Sparkles
// } from 'lucide-react';

// // Types
// interface Feature {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   status: 'active' | 'optimizing' | 'learning';
// }

// interface IIEProps {
//   className?: string;
// }

// const InsourceIntelligenceEngine: React.FC<IIEProps> = ({ className = '' }) => {
//   const [activeFeature, setActiveFeature] = useState<number | null>(null);
//   const [isHovered, setIsHovered] = useState<number | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   const featureVariants = {
//     hidden: { scale: 0.9, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 200
//       }
//     },
//     hover: {
//       scale: 1.02,
//       y: -5,
//       transition: {
//         type: "spring",
//         stiffness: 400
//       }
//     }
//   };

//   // Features data
//   const features: Feature[] = [
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Predictive Analytics",
//       description: "Forecast patient volumes, inventory demand, and staffing needs",
//       status: "active"
//     },
//     {
//       icon: <LayoutDashboard className="w-6 h-6" />,
//       title: "Cross-Module Dashboards",
//       description: "Combined KPIs for Finance, HR, and Operations in one view",
//       status: "active"
//     },
//     {
//       icon: <AlertTriangle className="w-6 h-6" />,
//       title: "Anomaly Detection",
//       description: "Auto-detects billing, stock, or attendance discrepancies",
//       status: "optimizing"
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: "Natural Language Insights",
//       description: "AI reports generated through conversational commands",
//       status: "learning"
//     },
//     {
//       icon: <RefreshCw className="w-6 h-6" />,
//       title: "Machine Learning Feedback Loop",
//       description: "Models continuously improve using live data",
//       status: "optimizing"
//     }
//   ];

//   const statusColors = {
//     active: "bg-green-500",
//     optimizing: "bg-blue-500",
//     learning: "bg-purple-500"
//   };

//   const statusText = {
//     active: "Active",
//     optimizing: "Optimizing",
//     learning: "Learning"
//   };

//   // Intersection Observer for scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.getElementById('iie-container');
//     if (element) {
//       observer.observe(element);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div 
//       id="iie-container"
//       className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 ${className}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             animate={{ 
//               rotate: [0, 5, -5, 0],
//               scale: [1, 1.1, 1]
//             }}
//             transition={{ 
//               duration: 2,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//             className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6"
//           >
//             <Brain className="w-10 h-10 text-white" />
//           </motion.div>
          
//           <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
//             Insource Intelligence Engine
//           </h1>
          
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             An AI and analytics core that merges data from all modules to create unified insights, 
//             powered by cutting-edge machine learning and real-time analytics.
//           </p>

//           {/* Animated background elements */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <motion.div
//               animate={{
//                 x: [0, 100, 0],
//                 y: [0, -50, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//               className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20"
//             />
//             <motion.div
//               animate={{
//                 x: [0, -80, 0],
//                 y: [0, 60, 0],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//               className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-400 rounded-full opacity-20"
//             />
//           </div>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               variants={featureVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               onHoverStart={() => setIsHovered(index)}
//               onHoverEnd={() => setIsHovered(null)}
//               className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer relative overflow-hidden group"
//               onClick={() => setActiveFeature(activeFeature === index ? null : index)}
//             >
//               {/* Animated background */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 initial={false}
//                 animate={{ opacity: isHovered === index ? 0.1 : 0 }}
//               />

//               {/* Status indicator */}
//               <div className="flex items-center justify-between mb-4">
//                 <motion.div
//                   animate={{ 
//                     rotate: feature.status === 'optimizing' ? [0, 360] : 0,
//                     scale: isHovered === index ? 1.2 : 1
//                   }}
//                   transition={{ 
//                     duration: feature.status === 'optimizing' ? 2 : 0.3,
//                     repeat: feature.status === 'optimizing' ? Infinity : 0
//                   }}
//                   className="text-blue-400"
//                 >
//                   {feature.icon}
//                 </motion.div>
                
//                 <div className="flex items-center space-x-2">
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.2, 1],
//                     }}
//                     transition={{ 
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatDelay: 3
//                     }}
//                     className={`w-2 h-2 rounded-full ${statusColors[feature.status]}`}
//                   />
//                   <span className="text-xs text-gray-400 font-medium">
//                     {statusText[feature.status]}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 {feature.title}
//               </h3>
              
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 {feature.description}
//               </p>

//               {/* Expandable detailed view */}
//               <AnimatePresence>
//                 {activeFeature === index && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="mt-4 pt-4 border-t border-white/10"
//                   >
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gray-400">Real-time updates</span>
//                       <motion.div
//                         animate={{ scale: [1, 1.1, 1] }}
//                         transition={{ duration: 1, repeat: Infinity }}
//                       >
//                         <Sparkles className="w-4 h-4 text-yellow-400" />
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Chevron indicator */}
//               <motion.div
//                 animate={{ y: activeFeature === index ? 0 : [0, -3, 0] }}
//                 transition={{ 
//                   duration: activeFeature === index ? 0.3 : 2,
//                   repeat: activeFeature === index ? 0 : Infinity 
//                 }}
//                 className="absolute bottom-4 right-4 text-gray-400"
//               >
//                 {activeFeature === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { value: "99.9%", label: "Uptime" },
//               { value: "<50ms", label: "Response Time" },
//               { value: "24/7", label: "Monitoring" },
//               { value: "Real-time", label: "Data Sync" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="group"
//               >
//                 <motion.div
//                   animate={{ 
//                     textShadow: [
//                       "0 0 0px rgba(59, 130, 246, 0)",
//                       "0 0 20px rgba(59, 130, 246, 0.5)",
//                       "0 0 0px rgba(59, 130, 246, 0)"
//                     ]
//                   }}
//                   transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
//                   className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
//                 >
//                   {stat.value}
//                 </motion.div>
//                 <div className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default InsourceIntelligenceEngine;



import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, Layout, AlertTriangle, MessageSquare, RefreshCw } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const InsourceIntelligenceEngine: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Forecast patient volumes, inventory demand, and staffing needs",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Cross-Module Dashboards",
      description: "Combined KPIs for Finance, HR, and Operations in one view",
      color: "from-purple-500 to-pink-500",
      delay: 100
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Anomaly Detection",
      description: "Auto-detects billing, stock, or attendance discrepancies",
      color: "from-orange-500 to-red-500",
      delay: 200
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Insights",
      description: "AI reports generated through conversational commands",
      color: "from-green-500 to-emerald-500",
      delay: 300
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Machine Learning Feedback Loop",
      description: "Models continuously improve using live data",
      color: "from-indigo-500 to-purple-500",
      delay: 400
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <Brain className="w-20 h-20 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Insource Intelligence Engine
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An AI and analytics core that merges data from all modules to create unified insights
          </p>
          <div className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Card */}
                  <div className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Background Overlay - Only on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-4 transform group-hover:rotate-12 transition-transform duration-300 relative z-10`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 relative z-10">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {feature.description}
                  </p>

                  {/* Animated Border - Only on Hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
                  
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                      </div>
                    ))}
                  </div>

        {/* Bottom Stats Bar */}
        <div className={`mt-16 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Data Integration</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                Real-time
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Analytics</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                AI-Powered
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Insights</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Monitoring</div>
            </div>
          </div>
        </div>

        {/* Floating Particles Animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: Math.random() * 0.5
              }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default InsourceIntelligenceEngine;