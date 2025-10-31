import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ResourceItem } from '../../../data/types';

interface ResourceCardProps {
  resource: ResourceItem;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const categoryColors = {
    documentation: 'from-blue-500 to-cyan-500',
    api: 'from-green-500 to-emerald-500',
    guides: 'from-purple-500 to-pink-500',
    whitepapers: 'from-orange-500 to-red-500'
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        {/* Header with gradient */}
        <div className={`h-2 bg-gradient-to-r ${categoryColors[resource.category]}`} />
        
        {/* Card Content */}
        <div className="p-6">
          {/* Icon and Title */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-2xl"
              >
                {resource.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {resource.title}
              </h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
            >
              <ExternalLink size={20} />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2">
            {resource.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {resource.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * tagIndex }}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
              >
                #{tag}
              </motion.span>
            ))}
          </div>

          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
              {resource.category}
            </span>
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-200"
            >
              Explore
              <ArrowRight size={16} className="ml-1" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;