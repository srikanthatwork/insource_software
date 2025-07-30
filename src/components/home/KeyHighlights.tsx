import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { keyHighlights } from '../../data/company';
import AnimatedSection from '../common/AnimatedSection';
import Card from '../common/Card';
import Button from '../common/Button';

const KeyHighlights: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-float-delayed" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-25 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full text-sm font-medium mb-6"
          >
            <Icons.Sparkles className="w-4 h-4 mr-2" />
            Our Core Solutions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="animate-gradient-text">Healthcare Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Streamline operations, enhance patient care, and drive digital transformation with our integrated healthcare management systems
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {keyHighlights.map((highlight, index) => {
            const IconComponent = Icons[highlight.icon as keyof typeof Icons] as React.ComponentType<any>;
            
            return (
              <AnimatedSection key={highlight.title} delay={index * 0.2}>
                <Card className="p-8 text-center group hover-lift relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300 relative z-10`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-medium">
                    {highlight.subtitle}
                  </p>
                  
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {highlight.description}
                  </p>

                  {/* Stats */}
                  {/* <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    {Object.entries(highlight.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div> */}

                  <Button 
                    variant="outline" 
                    className={`w-full group-hover:bg-gradient-to-r group-hover:${highlight.color} group-hover:text-black group-hover:border-red-200 transition-all duration-300`}
                    onClick={() => navigate(`/products/${highlight.title.toLowerCase()}`)}
                  >
                    Learn More
                  </Button>

                  {/* Animated border */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`h-1 bg-gradient-to-r ${highlight.color} rounded-full mt-6 mx-auto transition-all duration-300`}
                  />
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Additional features showcase */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Healthcare Operations?
                </h3>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Join over 1000+ healthcare facilities worldwide who trust Insource for their digital transformation journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Schedule a Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                    onClick={() => navigate('/products')}
                  >
                    View All Products
                  </Button>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 mx-auto relative"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center">
                      <Icons.Heart className="w-16 h-16 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Icons.Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Icons.FlaskConical className="w-6 h-6 text-green-600" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Icons.Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default KeyHighlights;