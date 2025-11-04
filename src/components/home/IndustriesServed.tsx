'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Truck, 
  Users, 
  Wrench, 
  Pill, 
  ShoppingCart,
  Globe,
  Users2,
  MapPin
} from 'lucide-react';
import { IndustriesServedProps, Industry } from '../../data/industry';

const IndustriesServed: React.FC<IndustriesServedProps> = ({
  title = "Industries Served",
  industries = [
    {
      id: 'hospitals',
      title: 'Hospitals & Clinics',
      description: 'Healthcare solutions for medical facilities and clinics',
      icon: 'Building',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'distributors',
      title: 'Distributors & Wholesale',
      description: 'Supply chain and distribution management',
      icon: 'Truck',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'hr',
      title: 'HR Workforce Management',
      description: 'Human resources and workforce optimization',
      icon: 'Users',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'field',
      title: 'Field Service & Sales',
      description: 'Mobile workforce and sales team management',
      icon: 'Wrench',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'pharma',
      title: 'Pharma & Medical Devices',
      description: 'Pharmaceutical and medical equipment solutions',
      icon: 'Pill',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'retail',
      title: 'Retail, Manufacturing, Services',
      description: 'Comprehensive solutions for various business sectors',
      icon: 'ShoppingCart',
      gradient: 'from-teal-500 to-blue-500'
    }
  ]
}) => {
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
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const getIconComponent = (iconName: string) => {
    const iconProps = { size: 32, className: "text-white" };
    
    switch (iconName) {
      case 'Building':
        return <Building {...iconProps} />;
      case 'Truck':
        return <Truck {...iconProps} />;
      case 'Users':
        return <Users {...iconProps} />;
      case 'Wrench':
        return <Wrench {...iconProps} />;
      case 'Pill':
        return <Pill {...iconProps} />;
      case 'ShoppingCart':
        return <ShoppingCart {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Serving diverse industries with innovative solutions and global expertise
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  {getIconComponent(industry.icon)}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {industry.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${industry.gradient} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800 z-[-1]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Scenes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Global Industry Scenes & Customer Locations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Scene Icons */}
            {[
              { icon: Globe, label: 'Global Reach', color: 'from-blue-500 to-cyan-500' },
              { icon: Users2, label: 'Team Meetings', color: 'from-green-500 to-emerald-500' },
              { icon: MapPin, label: 'Locations', color: 'from-purple-500 to-pink-500' },
              { icon: Building, label: 'Facilities', color: 'from-orange-500 to-red-500' }
            ].map((scene, index) => (
              <motion.div
                key={scene.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${scene.color} flex items-center justify-center mb-2 shadow-lg`}>
                  <scene.icon size={24} className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {scene.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesServed;