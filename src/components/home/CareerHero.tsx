
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  MapPin, 
  GraduationCap, 
  Globe,
  TrendingUp,
  Building
} from 'lucide-react';
// import { useNavigate } from 'react-router-dom';  // ❌ not needed now
import GlobalJourney from '../common/GlobalJourney';      // ✅ adjust path as needed

interface CareerFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CareerHero: React.FC = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false); // State for demo form modal
  
  const features: CareerFeature[] = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Transparent Paths",
      description: "Clear career progression with defined milestones and growth opportunities"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Regionally Flexible",
      description: "Work from anywhere with our global remote-friendly policies"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expert Mentoring",
      description: "Learn from industry leaders with personalized guidance programs"
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // const navigate = useNavigate(); // ❌ no longer needed

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
            animate={floatingAnimation}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-25"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 2 }
            }}
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header Section */}
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">
                  Join Our Global Team
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                variants={itemVariants}
              >
                Build Your Career
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  With Purpose
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Transparent career paths, regionally flexible roles, and expert mentoring 
                in a dynamic global environment designed for your growth.
              </motion.p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <motion.button
                className="group cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDemoFormOpen(true)}   // ✅ open modal
              >
                Start Your Journey

                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              {/* Stats */}
              <motion.div 
                className="flex justify-center items-center gap-12 mt-12 text-gray-600"
                variants={itemVariants}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    50+
                  </motion.div>
                  <div className="text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, type: "spring" }}
                  >
                    99%
                  </motion.div>
                  <div className="text-sm">Retention Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
        >
          <Users className="w-8 h-8 text-blue-600" />
        </motion.div>

        <motion.div
          className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.7, type: "spring" }}
          whileHover={{ scale: 1.1 }}
        >
          <Building className="w-8 h-8 text-purple-600" />
        </motion.div>
      </div>

      {/* ✅ GlobalJourney Modal */}
      <GlobalJourney
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </>
  );
};

export default CareerHero;
