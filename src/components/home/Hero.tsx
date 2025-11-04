// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Play,  Zap, Heart, Shield } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import Button from '../common/Button';
// import { companyInfo, companyStats } from '../../data/company';

// const Hero: React.FC = () => {
//   const [currentStat, setCurrentStat] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStat((prev) => (prev + 1) % companyStats.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
//         {/* Floating geometric shapes */}
//         <div className="absolute inset-0">
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.2, 1],
//             }}
//             transition={{ 
//               duration: 20, 
//               repeat: Infinity, 
//               ease: "linear" 
//             }}
//             className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-sm"
//           />
//           <motion.div
//             animate={{ 
//               rotate: -360,
//               scale: [1, 0.8, 1],
//             }}
//             transition={{ 
//               duration: 25, 
//               repeat: Infinity, 
//               ease: "linear" 
//             }}
//             className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-30 blur-sm"
//           />
//           <motion.div
//             animate={{ 
//               rotate: 180,
//               scale: [1, 1.1, 1],
//             }}
//             transition={{ 
//               duration: 15, 
//               repeat: Infinity, 
//               ease: "linear" 
//             }}
//             className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-25 blur-sm"
//           />
//           <motion.div
//             animate={{ 
//               rotate: -180,
//               scale: [1, 1.3, 1],
//             }}
//             transition={{ 
//               duration: 18, 
//               repeat: Infinity, 
//               ease: "linear" 
//             }}
//             className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
//           />
//         </div>

//         {/* Particle effects */}
//         <div className="particles">
//           {[...Array(50)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="particle"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 20}s`,
//                 background: `hsl(${Math.random() * 360}, 70%, 60%)`,
//               }}
//               animate={{
//                 y: [0, -100],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 delay: Math.random() * 20,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left "
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full  text-sm font-medium mb-6 glass"
//             >
//               {/* <Sparkles className="w-4 h-4 mr-2 animate-pulse" /> */}
//               {/* Healthcare Technology Leaders Since {companyInfo.foundedYear} */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="ml-2"
//               >
//                 <Zap className="w-4 h-4 text-yellow-500" />
//               </motion.div>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
//             >
//           <span className="animate-gradient-text block mb-2 md:text-md text-sm uppercase"   style={{
//           fontSize: "clamp(35px, 8vw, 38px)",
//           lineHeight: "1.2",
//           minHeight: "1.0em"
//                }}>
//                 Transforming Healthcare Empowering Enterprises
//               </span>
//               {/* <span className="text-gray-800  mb-2 md:text-6xl">Empowering Organizations </span>
//               <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent md:text-6xl">
//             Globally With Intelligent Digital Solutions
//               </span> */}
//             </motion.h1>

//  {/* Subheading */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               className="text-lg md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
//             >
//               {companyInfo.subheading}
//             </motion.p>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               className="text-lg md:text-1xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
//             >
//               <strong>Insource Software </strong>{companyInfo.vision} <strong>AI-driven automation, real-time analytics, and secure cloud architecture.</strong>
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
//             >
//               <Link to="/contact">
//                 <Button 
//                   size="lg" 
//                   icon={ArrowRight} 
//                   iconPosition="right"
//                   className="bg-gradient-to-r from-blue-400  to-blue-600 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 animate-pulse-glow"
//                 >
//                   Request a Demo
//                 </Button>
//               </Link>
//               <Button 
//                 variant="outline" 
//                 size="lg" 
//                 icon={Play} 
//                 iconPosition="left"
//                 className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 glass"
//               >
//                 Watch Video
//               </Button>
//             </motion.div>

//             {/* Animated Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.6 }}
//               className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
//             >
//               {companyStats.slice(0, 3).map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   className="text-center lg:text-left"
//                   whileHover={{ scale: 1.05 }}
//                   animate={currentStat === index ? { scale: [1, 1.1, 1] } : {}}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {/* <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
//                     {stat.value}
//                   </div> */}
//                   {/* <div className="text-sm text-gray-600">{stat.label}</div> */}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Illustration */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative w-full h-96 lg:h-[600px]">
//               {/* Main illustration */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-100 to-orange-100 rounded-3xl flex items-center justify-center glass">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                   className="relative"
//                 >
//                   <div className="w-48 h-48 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 rounded-full flex items-center justify-center">
//                     <motion.div
//                       animate={{ rotate: -360 }}
//                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                       className="w-32 h-32 bg-white rounded-full flex items-center justify-center"
//                     >
//                       <Heart className="w-16 h-16 text-red-500 animate-pulse" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Floating elements */}
//               <motion.div
//                 animate={{ 
//                   y: [-10, 10, -10],
//                   rotate: [0, 5, 0]
//                 }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg neon-blue"
//               >
//                 <span className="text-white font-bold text-lg">H</span>
//               </motion.div>

//               <motion.div
//                 animate={{ 
//                   y: [10, -10, 10],
//                   rotate: [0, -5, 0]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg neon-green"
//               >
//                 <span className="text-white font-bold text-lg">R</span>
//               </motion.div>

//               <motion.div
//                 animate={{ 
//                   y: [-5, 15, -5],
//                   rotate: [0, 10, 0]
//                 }}
//                 transition={{ duration: 5, repeat: Infinity }}
//                 className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg neon-orange"
//               >
//                 <span className="text-white font-bold text-lg">L</span>
//               </motion.div>

//               {/* Additional floating icons */}
//               <motion.div
//                 animate={{ 
//                   y: [-8, 8, -8],
//                   x: [-4, 4, -4]
//                 }}
//                 transition={{ duration: 6, repeat: Infinity }}
//                 className="absolute top-1/4 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center glass"
//               >
//                 <Shield className="w-8 h-8 text-blue-500" />
//               </motion.div>

//               <motion.div
//                 animate={{ 
//                   y: [8, -8, 8],
//                   x: [4, -4, 4]
//                 }}
//                 transition={{ duration: 7, repeat: Infinity }}
//                 className="absolute bottom-1/4 -left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center glass"
//               >
//                 <Zap className="w-8 h-8 text-yellow-500" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-gray-400 rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { companyInfo, companyStats } from '../../data/company';
import RequestDemoForm from '../common/RequestDemoForm'; // Import the form component

const Hero: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false); // State for demo form modal

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % companyStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-sm"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-30 blur-sm"
          />
          <motion.div
            animate={{ 
              rotate: 180,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-25 blur-sm"
          />
          <motion.div
            animate={{ 
              rotate: -180,
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm"
          />
        </div>

        {/* Particle effects */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 20,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left "
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full  text-sm font-medium mb-6 glass"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                <Zap className="w-4 h-4 text-yellow-500" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
          <span className="animate-gradient-text block mb-2 md:text-md text-sm uppercase"   style={{
          fontSize: "clamp(35px, 8vw, 38px)",
          lineHeight: "1.2",
          minHeight: "1.0em"
               }}>
                Transforming Healthcare Empowering Enterprises
              </span>
            </motion.h1>

 {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              {companyInfo.subheading}
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-1xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              <strong>Insource Software </strong>{companyInfo.vision} <strong>AI-driven automation, real-time analytics, and secure cloud architecture.</strong>
            </motion.p>

            {/* CTA Buttons - Updated with Demo Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              {/* Request Demo Button - Now opens the modal */}
              <div onClick={() => setIsDemoFormOpen(true)} className="cursor-pointer">
                <Button 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-700 hover:via-green-700 hover:to-blue-700 animate-pulse-glow"
                >
                  Request a Demo
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                icon={Play} 
                iconPosition="left"
                className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 glass"
              >
                Watch Video
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {companyStats.slice(0, 3).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                  animate={currentStat === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {/* <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div> */}
                  {/* <div className="text-sm text-gray-600">{stat.label}</div> */}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-100 to-orange-100 rounded-3xl flex items-center justify-center glass">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <div className="w-48 h-48 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 bg-white rounded-full flex items-center justify-center"
                    >
                      <Heart className="w-16 h-16 text-red-500 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg neon-blue"
              >
                <span className="text-white font-bold text-lg">H</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg neon-green"
              >
                <span className="text-white font-bold text-lg">R</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [-5, 15, -5],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg neon-orange"
              >
                <span className="text-white font-bold text-lg">L</span>
              </motion.div>

              {/* Additional floating icons */}
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                  x: [-4, 4, -4]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/4 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center glass"
              >
                <Shield className="w-8 h-8 text-blue-500" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [8, -8, 8],
                  x: [4, -4, 4]
                }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-1/4 -left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center glass"
              >
                <Zap className="w-8 h-8 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Request Demo Form Modal */}
      <RequestDemoForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </section>
  );
};

export default Hero;