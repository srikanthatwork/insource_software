import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InsourceIntelligenceEngine from "../components/home/InsourceIntelligenceEngine";

// Animation variants
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Type definitions
interface ProductCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  learnMoreLink: string;
  updateLink: string;
  latestVersion: string;
}

interface IntegrationFlowProps {
  from: string;
  to: string;
  description: string;
}

// Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({ 
  icon, 
  title, 
  subtitle,
  description, 
  features, 
  color,
  learnMoreLink,
  updateLink,
  latestVersion
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`bg-white rounded-2xl shadow-xl p-6 border-l-4 ${color} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full`}
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex items-center text-sm text-gray-700"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </motion.li>
        ))}
      </ul>
      
      <div className="mt-auto space-y-3">
        {/* <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Latest version:</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
            {latestVersion}
          </span>
        </div> */}
        
        <div className="flex space-x-3">
          <a
            href={learnMoreLink}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm text-center flex items-center justify-center"
          >
            Learn More
          </a>
         
        </div>
      </div>
    </motion.div>
  );
};

// Integration Flow Component
const IntegrationFlow: React.FC<IntegrationFlowProps> = ({ from, to, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex items-center justify-center my-4"
    >
      <div className="text-center">
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-blue-100 px-4 py-2 rounded-lg border border-blue-200">
            <span className="font-semibold text-blue-800">{from}</span>
          </div>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-500"
          >
            →
          </motion.div>
          <div className="bg-green-100 px-4 py-2 rounded-lg border border-green-200">
            <span className="font-semibold text-green-800">{to}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2 max-w-md">{description}</p>
      </div>
    </motion.div>
  );
};

// Main Component
const InsourcePlatform: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [overviewRef, overviewInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      icon: "🏥",
      title: "Health Plus",
      subtitle: "Hospital Management",
      description: "Acts as the core healthcare data hub, managing patients, doctors, diagnostics, and billing.",
      features: [
        "Automatically syncs data with talent plus for staff allocation",
        "Integrates with inventory plus for pharmacy & medical supply tracking",
        "Connects with fieldera for lab sample collection and home-care",
        "Real-time billing and diagnostic management"
      ],
      color: "border-red-500",
      learnMoreLink: "/products/hmsehr",
     
    },
    {
      icon: "👥",
      title: "Talent Plus",
      subtitle: "Human Capital Management",
      description: "Centralized HR & workforce module for comprehensive staff management.",
      features: [
        "Provides attendance data to health plus for clinical resource mapping",
        "Sends field workforce schedules to fieldera",
        "Syncs with inventory plus for warehouse staff productivity",
        "Payroll and compliance integration"
      ],
      color: "border-blue-500",
      learnMoreLink: "/products/hcm",
     
    },
    {
      icon: "📦",
      title: "Inventory Plus",
      subtitle: "Inventory Distribution Management",
      description: "The logistical backbone connecting procurement, warehouse, and distribution.",
      features: [
        "Pulls medicine & equipment demand from health plus automatically",
        "Tracks dispatch and delivery via fieldera integration",
        "AI-based forecasting linked to patient trends",
        "Real-time stock and vendor management"
      ],
      color: "border-green-500",
      learnMoreLink: "/products/idm",
     
    },
    {
      icon: "🌍",
      title: "Fieldera",
      subtitle: "Field Force Application",
      description: "The on-ground operations connector for mobility and data synchronization.",
      features: [
        "Captures field updates and syncs with inventory plus",
        "Integrates with Talent plus for attendance and productivity",
        "Enables home-care and patient visits from health plus",
        "Provides leadership dashboards across all systems"
      ],
      color: "border-purple-500",
      learnMoreLink: "/products/ffa",
   
    }
  ];

  const integrations = [
    {
      from: "Health Plus",
      to: "Talent Plus",
      description: "Patient data syncs for staff allocation and shift management"
    },
    {
      from: "Health Plus",
      to: "Inventory Plus",
      description: "Automated medicine and equipment demand forecasting"
    },
    {
      from: "Talent Plus",
      to: "Fieldera",
      description: "Field workforce schedules for automatic task assignment"
    },
    {
      from: "Inventory Plus",
      to: "Fieldera",
      description: "Real-time delivery tracking and dispatch management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="py-20 px-4 text-center"
      >
        <motion.h1 
          variants={fadeInLeft}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          One Platform.{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Unified Intelligence.
          </span>
        </motion.h1>
        <motion.p 
          variants={fadeInRight}
          className="text-2xl md:text-3xl text-gray-700 mb-8"
        >
          Seamless Connectivity.
        </motion.p>
        <motion.div
          variants={scaleIn}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Insource Software delivers a <span className="font-semibold text-blue-600">unified ecosystem</span> where all products communicate through secure APIs, shared analytics, and a single source of truth.
          </p>
        </motion.div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        ref={overviewRef}
        variants={containerVariants}
        initial="hidden"
        animate={overviewInView ? "visible" : "hidden"}
        className="py-16 px-4 bg-white/50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            🌐 Unified Ecosystem Overview
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Cross-Platform Integration</h3>
                <p className="text-gray-700">
                  All products (Health Plus, Talent Plus, Inventory Plus, Fieldera) communicate through secure APIs, ensuring complete visibility and data consistency across every business function.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Real-Time Decision Making</h3>
                <p className="text-gray-700">
                  Built on microservices, AI-driven data pipelines, and modular APIs that adapt dynamically to each client's structure.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Architecture Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Microservices-based architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  AI-driven data pipelines
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Secure API communication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Single source of truth
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Integration Flow */}
          <motion.div variants={containerVariants} className="mt-16">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-gray-900 mb-8"
            >
               Seamless Integration Flow
            </motion.h3>
            <div className="space-y-4">
              {integrations.map((integration, index) => (
                <IntegrationFlow key={index} {...integration} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-4"
          >
           How the Ecosystem Works
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          >
        The ecosystem brings people, processes, and technology together to work smoothly, share data safely, and drive continuous improvement and growth.  
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 px-4 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Product Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/hmsehr"
              className="bg-red-50 text-red-700 py-3 px-4 rounded-lg hover:bg-red-100 transition-colors font-medium border border-red-200"
            >
              🏥 HMSEHR
            </a>
            <a
              href="/hcm"
              className="bg-blue-50 text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors font-medium border border-blue-200"
            >
              👥 HCM
            </a>
            <a
              href="/idm"
              className="bg-green-50 text-green-700 py-3 px-4 rounded-lg hover:bg-green-100 transition-colors font-medium border border-green-200"
            >
              📦 IDM
            </a>
            <a
              href="/ffa"
              className="bg-purple-50 text-purple-700 py-3 px-4 rounded-lg hover:bg-purple-100 transition-colors font-medium border border-purple-200"
            >
              🌍 FFA
            </a>
          </div>
        </div>
      </motion.section> */}

{/* Insource Intelligence Engine */}
      <InsourceIntelligenceEngine/>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of unified intelligence and seamless connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Schedule a Demo
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Sales
            </motion.a>
          </div>
        </div>
      </motion.section>
 
    </div>
   

  );
};

export default InsourcePlatform;