import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  onClick
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-white to-gray-50 border border-gray-200' 
    : 'bg-white shadow-lg';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${hoverClasses}
        ${gradientClasses}
        ${clickableClasses}
        ${className} 
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;