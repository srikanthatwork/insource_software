import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Check } from 'lucide-react';

interface FilterDropdownProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  isOpen,
  onToggle
}) => {
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        className="flex items-center space-x-2 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      >
        <Filter size={18} />
        <span className="capitalize">
          {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ backgroundColor: '#f8fafc' }}
                onClick={() => {
                  onCategoryChange(category);
                  onToggle();
                }}
                className="w-full px-4 py-2 text-left flex items-center justify-between capitalize text-sm"
              >
                <span>{category === 'all' ? 'All Categories' : category}</span>
                {selectedCategory === category && (
                  <Check size={16} className="text-blue-500" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;