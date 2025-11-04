'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Truck, 
  Users, 
  Wrench, 
  Pill, 
  ShoppingCart,
  Globe,
  ArrowRight,
  MapPin,
  Video,
  Users2,
  Briefcase,
  Factory,
  Store,
  Stethoscope
} from 'lucide-react';

// Types
interface Market {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  scenes: string[];
  customerLocations: string[];
  teamMeetings: string[];
}

interface ImageryItem {
  id: string;
  type: 'scene' | 'location' | 'meeting';
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface MarketsShowcaseProps {
  autoPlay?: boolean;
  interval?: number;
}

// Market data with enhanced imagery content
const marketsData: Market[] = [
  {
    id: 'hospitals',
    title: 'Hospitals & Clinics',
    description: 'Healthcare solutions for medical facilities and patient care centers',
    icon: <Building2 className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    image: '🏥',
    scenes: ['Modern Hospital Facilities', 'Patient Care Areas', 'Medical Equipment', 'Emergency Rooms'],
    customerLocations: ['Urban Medical Centers', 'Rural Clinics', 'Specialty Hospitals', 'Research Facilities'],
    teamMeetings: ['Medical Staff Briefings', 'Patient Care Coordination', 'Equipment Training Sessions', 'Healthcare Conferences']
  },
  {
    id: 'distributors',
    title: 'Distributors & Wholesale',
    description: 'Supply chain and distribution management solutions',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    image: '🚚',
    scenes: ['Warehouse Operations', 'Logistics Centers', 'Supply Chain Networks', 'Inventory Management'],
    customerLocations: ['Distribution Hubs', 'Retail Centers', 'E-commerce Fulfillment', 'Global Logistics'],
    teamMeetings: ['Supply Chain Planning', 'Vendor Meetings', 'Logistics Coordination', 'Inventory Reviews']
  },
  {
    id: 'hr',
    title: 'HR Workforce Management',
    description: 'Human resources and workforce optimization tools',
    icon: <Users className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    image: '👥',
    scenes: ['Office Environments', 'Training Sessions', 'Recruitment Events', 'Performance Reviews'],
    customerLocations: ['Corporate Offices', 'Remote Work Settings', 'Training Centers', 'Job Fairs'],
    teamMeetings: ['HR Strategy Sessions', 'Team Building Events', 'Training Workshops', 'Performance Reviews']
  },
  {
    id: 'field',
    title: 'Field Service & Sales',
    description: 'Mobile workforce and field operations management',
    icon: <Wrench className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    image: '🔧',
    scenes: ['On-site Service Calls', 'Field Operations', 'Client Visits', 'Equipment Maintenance'],
    customerLocations: ['Client Sites', 'Construction Areas', 'Industrial Facilities', 'Residential Locations'],
    teamMeetings: ['Daily Field Briefings', 'Client Presentations', 'Sales Strategy Sessions', 'Service Coordination']
  },
  {
    id: 'pharma',
    title: 'Pharma & Medical Devices',
    description: 'Specialized solutions for pharmaceutical and medical equipment',
    icon: <Pill className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    image: '💊',
    scenes: ['Research Laboratories', 'Manufacturing Facilities', 'Quality Control', 'Clinical Trials'],
    customerLocations: ['Pharma Companies', 'Research Institutes', 'Hospitals', 'Regulatory Bodies'],
    teamMeetings: ['Research Discussions', 'Regulatory Reviews', 'Product Development', 'Clinical Study Meetings']
  },
  {
    id: 'retail',
    title: 'Retail, Manufacturing, Services',
    description: 'Comprehensive solutions for various business sectors',
    icon: <ShoppingCart className="w-6 h-6" />,
    color: 'from-teal-500 to-blue-500',
    image: '🏪',
    scenes: ['Retail Stores', 'Manufacturing Plants', 'Service Centers', 'Customer Interactions'],
    customerLocations: ['Shopping Malls', 'Factory Locations', 'Service Outlets', 'Business Districts'],
    teamMeetings: ['Store Management', 'Production Planning', 'Service Coordination', 'Business Strategy']
  }
];

// Imagery icons and data
const imageryIcons = {
  scene: <Video className="w-5 h-5" />,
  location: <MapPin className="w-5 h-5" />,
  meeting: <Users2 className="w-5 h-5" />
};

const MarketsShowcase: React.FC<MarketsShowcaseProps> = ({ 
  autoPlay = true, 
  interval = 3000 
}) => {
  const [activeMarket, setActiveMarket] = useState<Market>(marketsData[0]);
  const [activeImageryType, setActiveImageryType] = useState<'scene' | 'location' | 'meeting'>('scene');
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate through markets
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(() => {
      setActiveMarket(current => {
        const currentIndex = marketsData.findIndex(market => market.id === current.id);
        const nextIndex = (currentIndex + 1) % marketsData.length;
        return marketsData[nextIndex];
      });
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageryGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageryItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const getImageryData = () => {
    switch (activeImageryType) {
      case 'scene':
        return activeMarket.scenes;
      case 'location':
        return activeMarket.customerLocations;
      case 'meeting':
        return activeMarket.teamMeetings;
      default:
        return activeMarket.scenes;
    }
  };

  const getImageryTitle = () => {
    switch (activeImageryType) {
      case 'scene':
        return 'Industry Scenes';
      case 'location':
        return 'Customer Locations';
      case 'meeting':
        return 'Team Meetings';
      default:
        return 'Industry Scenes';
    }
  };

  const getImageryIcon = () => {
    switch (activeImageryType) {
      case 'scene':
        return <Video className="w-5 h-5" />;
      case 'location':
        return <MapPin className="w-5 h-5" />;
      case 'meeting':
        return <Users2 className="w-5 h-5" />;
      default:
        return <Video className="w-5 h-5" />;
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* <Globe className="w-8 h-8 text-blue-600" /> */}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-14">
              Global Markets
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Serving diverse industries with innovative solutions across the globe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Markets Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {marketsData.map((market, index) => (
              <motion.button
                key={market.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveMarket(market)}
                className={`
                  relative p-6 rounded-2xl text-left transition-all duration-300 group overflow-hidden
                  ${activeMarket.id === market.id 
                    ? `bg-gradient-to-r ${market.color} text-white shadow-2xl shadow-blue-200` 
                    : 'bg-white text-gray-800 shadow-lg hover:shadow-xl'
                  }
                `}
              >
                {/* Background gradient effect */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                  ${activeMarket.id === market.id ? 'bg-white' : `bg-gradient-to-r ${market.color}`}
                `} />
                
                <div className="relative z-10">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
                    ${activeMarket.id === market.id 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-r ${market.color} text-white`
                    }
                  `}>
                    {market.icon}
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">
                    {market.title}
                  </h3>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeMarket.id === market.id ? 'auto' : 0,
                      opacity: activeMarket.id === market.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <p className={`
                      text-sm leading-relaxed
                      ${activeMarket.id === market.id ? 'text-white/90' : 'text-gray-600'}
                    `}>
                      {market.description}
                    </p>
                  </motion.div>

                  {/* Animated arrow for active item */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      x: activeMarket.id === market.id ? 5 : 0,
                      opacity: activeMarket.id === market.id ? 1 : 0
                    }}
                    className="mt-3"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Main Content Area */}
          <div className="space-y-8">
            {/* Featured Market Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMarket.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative"
              >
                <motion.div
                  variants={itemVariants}
                  className={`
                    relative bg-gradient-to-br ${activeMarket.color} rounded-3xl p-8 
                    text-white shadow-2xl overflow-hidden
                  `}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        {activeMarket.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{activeMarket.title}</h2>
                    </div>

                    <p className="text-xl mb-6 text-white/90 leading-relaxed">
                      {activeMarket.description}
                    </p>

                    <div className="text-8xl text-center my-6">
                      {activeMarket.image}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Imagery Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-xl"
            >
              {/* Imagery Type Selector */}
              <div className="flex gap-2 mb-6">
                {[
                  { type: 'scene' as const, label: 'Industry Scenes', icon: <Video className="w-4 h-4" /> },
                  { type: 'location' as const, label: 'Locations', icon: <MapPin className="w-4 h-4" /> },
                  { type: 'meeting' as const, label: 'Team Meetings', icon: <Users2 className="w-4 h-4" /> }
                ].map((item) => (
                  <button
                    key={item.type}
                    onClick={() => setActiveImageryType(item.type)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all
                      ${activeImageryType === item.type
                        ? `bg-gradient-to-r ${activeMarket.color} text-white shadow-md`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }
                    `}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Imagery Grid */}
              <motion.div
                key={`${activeMarket.id}-${activeImageryType}`}
                variants={imageryGridVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {getImageryData().map((item, index) => (
                  <motion.div
                    key={index}
                    variants={imageryItemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`
                      p-4 rounded-xl border-2 transition-all duration-300 group cursor-pointer
                      ${activeImageryType === 'scene' ? 'border-blue-200 bg-blue-50 hover:bg-blue-100' : ''}
                      ${activeImageryType === 'location' ? 'border-green-200 bg-green-50 hover:bg-green-100' : ''}
                      ${activeImageryType === 'meeting' ? 'border-purple-200 bg-purple-50 hover:bg-purple-100' : ''}
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                        ${activeImageryType === 'scene' ? 'bg-blue-100 text-blue-600' : ''}
                        ${activeImageryType === 'location' ? 'bg-green-100 text-green-600' : ''}
                        ${activeImageryType === 'meeting' ? 'bg-purple-100 text-purple-600' : ''}
                      `}>
                        {getImageryIcon()}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-gray-900">
                          {item}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {activeMarket.title} <br />
                           {/* {getImageryTitle()} */}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Imagery Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{activeMarket.scenes.length}</div>
                  <div className="text-sm text-gray-600">Industry Scenes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{activeMarket.customerLocations.length}</div>
                  <div className="text-sm text-gray-600">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{activeMarket.teamMeetings.length}</div>
                  <div className="text-sm text-gray-600">Meeting Types</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Global Presence Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Global Industry Presence</h3>
            <p className="text-gray-600">Visualizing our impact across different sectors worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Building2 className="w-8 h-8" />, label: 'Healthcare', count: '250+' },
              { icon: <Factory className="w-8 h-8" />, label: 'Manufacturing', count: '180+' },
              { icon: <Store className="w-8 h-8" />, label: 'Retail', count: '320+' },
              { icon: <Briefcase className="w-8 h-8" />, label: 'Services', count: '150+' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-gray-200"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800">{item.count}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-center mt-12"
        >
          {/* <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg"
          >
            Explore All Markets & Imagery
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default MarketsShowcase;