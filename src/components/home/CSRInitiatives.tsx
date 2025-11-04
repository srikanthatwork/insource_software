// components/CSRInitiatives.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
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
  hidden: { 
    scale: 0,
    rotate: -180 
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.8
    }
  }
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3
    }
  }
};

// Data
const initiatives = [
  {
    id: 1,
    title: "Education Programs",
    description: "Empowering communities through accessible education and skill development programs worldwide.",
    icon: "🎓",
    stats: "50K+ Students Impacted",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Digital Inclusion",
    description: "Bridging the digital divide by providing technology access and digital literacy training.",
    icon: "💻",
    stats: "100+ Communities Served",
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    title: "Sustainability Efforts",
    description: "Implementing eco-friendly practices and promoting environmental conservation globally.",
    icon: "🌱",
    stats: "Carbon Neutral by 2030",
    color: "from-green-500 to-emerald-400"
  }
];

const teamMembers = [
  { name: "Sarah Chen", role: "Education Lead", region: "Asia Pacific" },
  { name: "Marcus Johnson", role: "Digital Inclusion", region: "North America" },
  { name: "Elena Rodriguez", role: "Sustainability", region: "Europe" },
  { name: "Kwame Mensah", role: "Community Outreach", region: "Africa" }
];

const CSRInitiatives = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counters, setCounters] = useState({
    students: 0,
    communities: 0,
    projects: 0
  });

  useEffect(() => {
    if (inView) {
      // Animate counters
      const duration = 2000;
      const steps = 100;
      const stepDuration = duration / steps;

      const animateCounter = (start: number, end: number, setter: (value: number) => void) => {
        let current = start;
        const increment = (end - start) / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setter(Math.floor(current));
        }, stepDuration);
      };

      animateCounter(0, 50000, (value) => setCounters(prev => ({...prev, students: value})));
      animateCounter(0, 100, (value) => setCounters(prev => ({...prev, communities: value})));
      animateCounter(0, 250, (value) => setCounters(prev => ({...prev, projects: value})));
    }
  }, [inView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      {/* Header Section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6"
        >
          Global CSR Initiatives
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Driving positive change through education, digital inclusion, and sustainable practices across the globe
        </motion.p>
      </motion.div>

      {/* Stats Counter */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
      >
        {[
          { value: counters.students, label: "Students Impacted", suffix: "+" },
          { value: counters.communities, label: "Communities Served", suffix: "+" },
          { value: counters.projects, label: "Active Projects", suffix: "+" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2"
            >
              {stat.value.toLocaleString()}{stat.suffix}
            </motion.div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Initiatives */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
      >
        {initiatives.map((initiative, index) => (
          <motion.div
            key={initiative.id}
            variants={itemVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group"
          >
            <motion.div
              variants={cardHoverVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${initiative.color} p-6`}>
                <motion.div
                  variants={iconVariants}
                  className="text-6xl text-center"
                >
                  {initiative.icon}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600">
                    {initiative.stats}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-green-600 text-lg">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Global Teams Section */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto mb-20"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Our Global Team
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10 
              }}
              className="bg-white rounded-xl shadow-md p-6 text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">{member.name}</h4>
              <p className="text-green-600 text-sm font-medium mb-1">{member.role}</p>
              <p className="text-gray-500 text-xs">{member.region}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h3>
          <p className="text-green-50 text-lg mb-6 max-w-2xl mx-auto">
            Together, we can create a more educated, digitally inclusive, and sustainable world for future generations.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors duration-300"
          >
            Get Involved Today
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CSRInitiatives;