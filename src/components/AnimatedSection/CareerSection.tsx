import React from 'react';
import { motion } from 'framer-motion';
import { CareerSectionProps } from '../../data/career';
import { AnimatedSection, Card } from './AnimatedSection';

export const CareerSection: React.FC<CareerSectionProps> = ({
  careerQuote,
  careerOptions,
}) => {
  // Animation for the quote mark
  const quoteMarkVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Section */}
        <AnimatedSection>
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
            
            <motion.div
              variants={quoteMarkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center relative z-10 shadow-lg"
            >
              <motion.span 
                className="text-white text-2xl font-bold"
                whileHover={{ scale: 1.2 }}
              >
                "
              </motion.span>
            </motion.div>
            
            <motion.blockquote 
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-6 leading-relaxed relative z-10"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {careerQuote}
            </motion.blockquote>
            
            <motion.cite 
              className="text-gray-600 font-medium text-lg relative z-10"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              - Insource Leadership Team
            </motion.cite>
          </Card>
        </AnimatedSection>

        {/* Career Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {careerOptions.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="p-6 md:p-8 text-center h-full group cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Animated Title Background */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { 
                      duration: 0.5,
                      rotate: { duration: 0.6 }
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.h3 
                    className="text-white font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.title.charAt(0)}
                  </motion.h3>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index + 1}
                >
                  {item.description}
                </motion.p>

                {/* Hover effect line */}
                <motion.div 
                  className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full group-hover:w-16 transition-all duration-300"
                  whileHover={{ width: 64 }}
                />
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};