import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, Award, Globe } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import Card from '../common/Card';
import { companyInfo, awards } from '../../data/company';

const Vision: React.FC = () => {
  const visionPoints = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize healthcare through innovative digital solutions that improve patient outcomes and operational efficiency.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Patient-Centric',
      description: 'Every solution we build puts patients at the center, ensuring better care delivery and enhanced experiences.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technology including AI and machine learning to solve complex healthcare challenges.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'HIPAA-compliant solutions with enterprise-grade security to protect sensitive healthcare data.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-30 blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <AnimatedSection>
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full text-sm font-medium mb-6"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Our Vision & Mission
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="animate-gradient-text block mb-2">
                    Re-imagining
                  </span>
                  <span className="text-gray-800">Human Potential in Healthcare</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {companyInfo.vision}. We believe technology should empower healthcare professionals to focus on what matters most - patient care. Our solutions are designed to eliminate administrative burden and enhance clinical decision-making.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${point.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Visual Element */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 via-green-100 to-orange-100 rounded-3xl overflow-hidden glass">
                {/* Animated background pattern */}
                <div className="absolute inset-0">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Central element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 border-4 border-blue-300 rounded-full flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="w-24 h-24 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 rounded-full flex items-center justify-center"
                    >
                      <Target className="w-12 h-12 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center glass"
              >
                <Users className="w-8 h-8 text-blue-500" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center glass"
              >
                <Zap className="w-8 h-8 text-orange-500" />
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 -left-6 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center glass"
              >
                <Shield className="w-6 h-6 text-green-500" />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Awards Section */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Recognition & <span className="animate-gradient-text">Awards</span>
            </h3>
            <p className="text-xl text-gray-600">
              Trusted by industry leaders and recognized for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 text-center hover-lift ">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {award.title}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    {award.organization}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {award.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {award.year}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Global Reach */}
        <AnimatedSection>
          <div className="mt-20 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Globe className="w-full h-full" />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Global Healthcare Transformation
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Serving healthcare organizations across 25+ countries, impacting millions of lives through innovative technology solutions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{companyInfo.clients}</div>
                  <div className="text-blue-100">+ Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500</div>
                  <div className="text-blue-100">+ Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{companyInfo.countries}</div>
                  <div className="text-blue-100">+ Experts Staffs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{companyInfo.employees}</div>
                  <div className="text-blue-100">+ Win Awards</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Vision;