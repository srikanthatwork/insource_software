import React from 'react';
import { motion } from 'framer-motion';
import { CareerSectionProps } from '../../data/career';

// Stagger animation for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Item animation variants
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
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const EnhancedCareerSection: React.FC<CareerSectionProps> = ({
  careerQuote,
  careerOptions,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Quote Card */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 md:p-12 text-center bg-white rounded-3xl shadow-2xl mb-16 overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
            
            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-40"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-200 rounded-full opacity-40"
            />

            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center relative z-10 shadow-2xl"
            >
              <span className="text-white text-4xl font-bold">"</span>
            </motion.div>

            <motion.blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {careerQuote}
            </motion.blockquote>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"
            />

            <motion.cite
              className="text-gray-700 font-semibold text-lg relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              - Insource Leadership Team
            </motion.cite>
          </motion.div>

          {/* Career Options Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {careerOptions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl relative z-10`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ 
                      duration: 0.5,
                      rotate: { duration: 0.6 }
                    }}
                  >
                    <motion.span 
                      className="text-white text-2xl font-bold"
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.title.split(' ').map(word => word[0]).join('')}
                    </motion.span>
                  </motion.div>

                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500 relative z-10"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-500 relative z-10"
                  >
                    {item.description}
                  </motion.p>

                  {/* Animated arrow on hover */}
                  <motion.div
                    className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative z-10"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <motion.svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};