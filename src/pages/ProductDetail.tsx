import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const IconComponent = Icons[product.icon as keyof typeof Icons] as React.ComponentType<any>;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'modules', label: 'Modules' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${product.color.replace('from-', 'from-').replace('to-', 'to-')}/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-3xl flex items-center justify-center mb-6`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 font-medium">
                {product.fullName}
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className={`w-full h-96 bg-gradient-to-br ${product.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-3xl flex items-center justify-center`}>
                  <div className="text-center">
                    <div className={`w-32 h-32 bg-gradient-to-r ${product.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">{product.fullName}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 bg-white border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <Icons.Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Improved operational efficiency</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Icons.Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Enhanced patient care quality</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Icons.Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">Reduced administrative burden</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Icons.Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">HIPAA compliant security</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specs</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <Icons.Cloud className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Cloud-based architecture</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Icons.Smartphone className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Mobile responsive design</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Icons.Database className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Real-time data synchronization</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Icons.Shield className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">Enterprise-grade security</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.features.map((feature, index) => {
                  const FeatureIcon = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<any>;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 h-full">
                        <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4`}>
                          <FeatureIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          )}

          {/* Modules Tab */}
          {activeTab === 'modules' && (
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">System Modules</h2>
              <div className="space-y-8">
                {product.modules.map((module, index) => {
                  const ModuleIcon = Icons[module.icon as keyof typeof Icons] as React.ComponentType<any>;
                  return (
                    <motion.div
                      key={module.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                            <ModuleIcon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {module.name}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {module.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {module.features.map((feature) => (
                                <div key={feature} className="flex items-center space-x-3">
                                  <Icons.CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${product.color}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started with {product.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team to schedule a personalized demo and see how {product.fullName} can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;