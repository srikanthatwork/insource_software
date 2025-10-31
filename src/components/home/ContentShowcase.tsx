import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Truck, 
  Zap,
  ArrowRight,
  Calendar,
  User
} from 'lucide-react';
import { ContentItem, ContentSection } from '../../data/types';

const ContentShowcase: React.FC = () => {
  const contentSections: ContentSection[] = [
    {
      title: 'Current Trends',
      items: [
        {
          id: '1',
          type: 'trend',
          title: 'AI in Healthcare 2024',
          description: 'Exploring the latest AI applications transforming patient care and medical research.',
          date: '2024-01-15',
          tags: ['AI', 'Healthcare', 'Innovation'],
        //   author: 'Dr. Sarah Chen'
        },
        {
          id: '2',
          type: 'trend',
          title: 'Supply Chain Digitalization',
          description: 'How digital twins are revolutionizing supply chain management and risk assessment.',
          date: '2024-01-12',
          tags: ['Supply Chain', 'Digital', 'Transformation'],
        //   author: 'Mike Rodriguez'
        }
      ]
    },
    {
      title: 'Deep Dives into AI',
      items: [
        {
          id: '3',
          type: 'deep-dive',
          title: 'Neural Networks Explained',
          description: 'Comprehensive guide to understanding different neural network architectures and their applications.',
          date: '2024-01-10',
          tags: ['AI', 'Machine Learning', 'Technical'],
          author: 'Dr. Alex Thompson'
        },
        {
          id: '4',
          type: 'deep-dive',
          title: 'Ethical AI Framework',
          description: 'Building responsible AI systems with proper governance and ethical considerations.',
          date: '2024-01-08',
          tags: ['AI Ethics', 'Governance', 'Framework'],
          author: 'Dr. Maria Gonzalez'
        }
      ]
    },
    {
      title: 'Healthcare Compliance',
      items: [
        {
          id: '5',
          type: 'compliance',
          title: 'HIPAA Updates 2024',
          description: 'Latest changes in healthcare compliance regulations and what they mean for your organization.',
          date: '2024-01-05',
          tags: ['HIPAA', 'Compliance', 'Healthcare'],
          author: 'Legal Team'
        }
      ]
    },
    {
      title: 'Supply Chain Tips',
      items: [
        {
          id: '6',
          type: 'supply-chain',
          title: 'Risk Mitigation Strategies',
          description: 'Proven strategies to identify and mitigate supply chain risks in volatile markets.',
          date: '2024-01-03',
          tags: ['Risk', 'Strategy', 'Operations'],
          author: 'Supply Chain Experts'
        }
      ]
    },
    {
      title: 'Feature Updates',
      items: [
        {
          id: '7',
          type: 'update',
          title: 'New Analytics Dashboard',
          description: 'Explore our enhanced analytics features with real-time insights and predictive capabilities.',
          date: '2024-01-01',
          tags: ['Update', 'Features', 'Analytics'],
          author: 'Product Team'
        }
      ]
    }
  ];

  const getIcon = (type: ContentItem['type']) => {
    switch (type) {
      case 'trend': return <TrendingUp className="w-5 h-5" />;
      case 'deep-dive': return <Brain className="w-5 h-5" />;
      case 'compliance': return <Shield className="w-5 h-5" />;
      case 'supply-chain': return <Truck className="w-5 h-5" />;
      case 'update': return <Zap className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getColor = (type: ContentItem['type']) => {
    switch (type) {
      case 'trend': return 'from-purple-500 to-pink-500';
      case 'deep-dive': return 'from-blue-500 to-cyan-500';
      case 'compliance': return 'from-green-500 to-emerald-500';
      case 'supply-chain': return 'from-orange-500 to-red-500';
      case 'update': return 'from-yellow-500 to-amber-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

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

  const cardHoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with current trends, deep dives into AI, healthcare compliance, 
            supply chain insights, and the latest feature updates.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {contentSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${getColor(section.items[0]?.type || 'trend')} p-6`}>
                <div className="flex items-center space-x-3">
                  {getIcon(section.items[0]?.type || 'trend')}
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
              </div>

              {/* Content Items */}
              <div className="p-6 space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    variants={cardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    className="border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors duration-300 cursor-pointer"
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.1 }}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        {/* <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{item.author}</span>
                        </div> */}
                        {/* <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div> */}
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* <ArrowRight className="w-4 h-4" /> */}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'AI Articles', value: '128', color: 'text-blue-600' },
              { label: 'Compliance Guides', value: '64', color: 'text-green-600' },
              { label: 'Supply Chain Tips', value: '42', color: 'text-orange-600' },
              { label: 'Feature Updates', value: '28', color: 'text-purple-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentShowcase;
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   TrendingUp, 
//   Brain, 
//   Shield, 
//   Truck, 
//   Zap,
//   BarChart3,
//   Users,
//   PlayCircle,
//   Calendar,
//   User,
//   Clock,
//   Eye,
//   ArrowUpRight,
//   BookOpen,
//   Video,
//   Image,
//   Star,
//   Heart,
//   Share2,
//   MessageCircle
// } from 'lucide-react';
// import { ContentItem, ContentSection } from '../../data/types';

// const ModernContentShowcase: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<string>('all');
//   const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

//   const mockImages = {
//     infographic: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
//     thoughtLeader: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
//     animated: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=250&fit=crop',
//     healthcare: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
//     supplychain: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop'
//   };

//   const contentSections: ContentSection[] = [
//     {
//       title: 'Trending Now',
//       items: [
//         {
//           id: '1',
//           type: 'trend',
//           title: 'AI Revolution in Healthcare',
//           description: 'How artificial intelligence is transforming patient care, diagnosis, and treatment outcomes across the medical field.',
//           image: mockImages.healthcare,
//           date: '2024-01-15',
//           tags: ['AI', 'Healthcare', 'Innovation'],
//           author: 'Dr. Sarah Chen',
//           stats: [{ label: 'Views', value: '2.4K' }]
//         }
//       ]
//     },
//     {
//       title: 'Infographics',
//       items: [
//         {
//           id: '2',
//           type: 'infographic',
//           title: 'Digital Transformation Metrics 2024',
//           description: 'Comprehensive data visualization showing digital adoption rates and ROI across industries.',
//           image: mockImages.infographic,
//           date: '2024-01-14',
//           tags: ['Data', 'Visualization', 'Metrics'],
//           author: 'Analytics Team',
//           stats: [{ label: 'Downloads', value: '1.2K' }]
//         }
//       ]
//     },
//     {
//       title: 'Thought Leaders',
//       items: [
//         {
//           id: '3',
//           type: 'thought-leader',
//           title: 'Ethical AI Implementation',
//           description: 'Leading expert discusses frameworks for responsible AI deployment in enterprise environments.',
//           author: 'Dr. Michael Chen',
//           authorImage: mockImages.thoughtLeader,
//           date: '2024-01-12',
//           tags: ['AI Ethics', 'Leadership', 'Strategy'],
//           stats: [{ label: 'Followers', value: '45K' }]
//         }
//       ]
//     },
//     {
//       title: 'Animated Content',
//       items: [
//         {
//           id: '4',
//           type: 'animated',
//           title: 'Machine Learning Explained',
//           description: 'Animated guide breaking down complex ML concepts into easily understandable visual stories.',
//           image: mockImages.animated,
//           date: '2024-01-10',
//           tags: ['Animation', 'Education', 'ML'],
//           author: 'Tech Team',
//           duration: '3:15',
//           stats: [{ label: 'Plays', value: '856' }]
//         }
//       ]
//     },
//     {
//       title: 'Deep Dives',
//       items: [
//         {
//           id: '5',
//           type: 'deep-dive',
//           title: 'Neural Network Architectures',
//           description: 'Comprehensive analysis of different neural network structures and their practical applications.',
//           image: mockImages.healthcare,
//           date: '2024-01-08',
//           tags: ['Technical', 'AI', 'Networks'],
//           author: 'Research Team',
//           stats: [{ label: 'Reads', value: '3.1K' }]
//         }
//       ]
//     },
//     {
//       title: 'Supply Chain',
//       items: [
//         {
//           id: '6',
//           type: 'supply-chain',
//           title: 'Global Logistics Optimization',
//           description: 'Advanced strategies for optimizing international supply chains in post-pandemic era.',
//           image: mockImages.supplychain,
//           date: '2024-01-05',
//           tags: ['Logistics', 'Optimization', 'Global'],
//           author: 'Operations Team',
//           stats: [{ label: 'Shares', value: '324' }]
//         }
//       ]
//     }
//   ];

//   const categories = [
//     { id: 'all', label: 'All Content', icon: BookOpen, count: 24 },
//     { id: 'infographic', label: 'Infographics', icon: BarChart3, count: 6 },
//     { id: 'thought-leader', label: 'Leaders', icon: Users, count: 4 },
//     { id: 'animated', label: 'Videos', icon: PlayCircle, count: 5 },
//     { id: 'trend', label: 'Trends', icon: TrendingUp, count: 3 },
//     { id: 'deep-dive', label: 'Deep Dives', icon: Brain, count: 4 },
//     { id: 'compliance', label: 'Compliance', icon: Shield, count: 2 }
//   ];

//   const getIcon = (type: ContentItem['type']) => {
//     const icons = {
//       'trend': TrendingUp,
//       'deep-dive': Brain,
//       'compliance': Shield,
//       'supply-chain': Truck,
//       'update': Zap,
//       'infographic': BarChart3,
//       'thought-leader': Users,
//       'animated': PlayCircle
//     };
//     const IconComponent = icons[type] || BookOpen;
//     return <IconComponent className="w-4 h-4" />;
//   };

//   const getGradient = (type: ContentItem['type']) => {
//     const gradients = {
//       'trend': 'from-purple-500 to-pink-500',
//       'deep-dive': 'from-blue-500 to-cyan-500',
//       'compliance': 'from-green-500 to-emerald-500',
//       'supply-chain': 'from-orange-500 to-red-500',
//       'update': 'from-yellow-500 to-amber-500',
//       'infographic': 'from-indigo-500 to-purple-500',
//       'thought-leader': 'from-teal-500 to-blue-500',
//       'animated': 'from-red-500 to-pink-500'
//     };
//     return gradients[type] || 'from-gray-500 to-gray-700';
//   };

//   const getAccentColor = (type: ContentItem['type']) => {
//     const colors = {
//       'trend': 'text-purple-600',
//       'deep-dive': 'text-blue-600',
//       'compliance': 'text-green-600',
//       'supply-chain': 'text-orange-600',
//       'update': 'text-yellow-600',
//       'infographic': 'text-indigo-600',
//       'thought-leader': 'text-teal-600',
//       'animated': 'text-red-600'
//     };
//     return colors[type] || 'text-gray-600';
//   };

//   const toggleLike = (itemId: string) => {
//     setLikedItems(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(itemId)) {
//         newSet.delete(itemId);
//       } else {
//         newSet.add(itemId);
//       }
//       return newSet;
//     });
//   };

//   const allItems = contentSections.flatMap(section => section.items);
//   const filteredItems = activeCategory === 'all' 
//     ? allItems 
//     : allItems.filter(item => item.type === activeCategory);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 20,
//       scale: 0.95
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const hoverVariants = {
//     initial: { 
//       scale: 1,
//       y: 0
//     },
//     hover: { 
//       scale: 1.02,
//       y: -5,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const imageHoverVariants = {
//     initial: { scale: 1 },
//     hover: { scale: 1.1 }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <motion.h1 
//             className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
//             initial={{ scale: 0.5 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Content Hub
//           </motion.h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//             Discover insights across AI, healthcare, supply chain, and digital transformation
//           </p>
          
//           {/* Stats Bar */}
//           <motion.div 
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             {[
//               { value: '500+', label: 'Resources' },
//               { value: '50+', label: 'Experts' },
//               { value: '1M+', label: 'Views' },
//               { value: '95%', label: 'Satisfaction' }
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.7 + index * 0.1 }}
//                 className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
//               >
//                 <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//                 <div className="text-gray-400 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {categories.map((category) => {
//             const Icon = category.icon;
//             return (
//               <motion.button
//                 key={category.id}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   activeCategory === category.id
//                     ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
//                     : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 <span>{category.label}</span>
//                 <span className={`px-2 py-1 rounded-full text-xs ${
//                   activeCategory === category.id ? 'bg-white/20' : 'bg-white/5'
//                 }`}>
//                   {category.count}
//                 </span>
//               </motion.button>
//             );
//           })}
//         </motion.div>

//         {/* Content Grid */}
//         <motion.div
//           key={activeCategory}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
//         >
//           <AnimatePresence mode="wait">
//             {filteredItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 variants={itemVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 layout
//                 className="group"
//               >
//                 <motion.div
//                   variants={hoverVariants}
//                   initial="initial"
//                   whileHover="hover"
//                   className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm h-full flex flex-col"
//                 >
//                   {/* Image/Media Section */}
//                   {item.image && (
//                     <motion.div 
//                       className="relative h-48 overflow-hidden"
//                       whileHover="hover"
//                     >
//                       <motion.img
//                         variants={imageHoverVariants}
//                         src={item.image}
//                         alt={item.title}
//                         className="w-full h-full object-cover"
//                         transition={{ duration: 0.6 }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
//                       {/* Type Badge */}
//                       <motion.div 
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className={`absolute top-4 left-4 flex items-center space-x-2 px-3 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white`}
//                       >
//                         {getIcon(item.type)}
//                         <span className="text-sm font-medium capitalize">
//                           {item.type.replace('-', ' ')}
//                         </span>
//                       </motion.div>

//                       {/* Duration for animated content */}
//                       {item.duration && (
//                         <motion.div
//                           initial={{ opacity: 0, scale: 0 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.3 }}
//                           className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1"
//                         >
//                           <Clock className="w-3 h-3" />
//                           <span>{item.duration}</span>
//                         </motion.div>
//                       )}
//                     </motion.div>
//                   )}

//                   {/* Thought Leader Avatar */}
//                   {item.type === 'thought-leader' && item.authorImage && (
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.4, type: "spring" }}
//                       className="relative -mt-12 mx-6 mb-4 z-10"
//                     >
//                       <div className="relative">
//                         <img
//                           src={item.authorImage}
//                           alt={item.author}
//                           className="w-20 h-20 rounded-2xl object-cover border-4 border-gray-800 shadow-lg"
//                         />
//                         <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full p-1">
//                           <Users className="w-4 h-4 text-white" />
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}

//                   {/* Content */}
//                   <div className="p-6 flex-1 flex flex-col">
//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-3">
//                       {item.tags.map((tag, tagIndex) => (
//                         <motion.span
//                           key={tag}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.1 + tagIndex * 0.1 }}
//                           className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-medium rounded-full border border-white/10"
//                         >
//                           {tag}
//                         </motion.span>
//                       ))}
//                     </div>

//                     {/* Title & Description */}
//                     <h3 className="font-bold text-xl text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
//                       {item.description}
//                     </p>

//                     {/* Author & Date */}
//                     <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                       <div className="flex items-center space-x-2">
//                         <User className="w-4 h-4" />
//                         <span>{item.author}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Calendar className="w-4 h-4" />
//                         <span>{new Date(item.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>

//                     {/* Stats & Actions */}
//                     <div className="flex items-center justify-between pt-4 border-t border-white/10">
//                       <div className="flex items-center space-x-4">
//                         {item.stats?.map((stat, statIndex) => (
//                           <motion.div
//                             key={stat.label}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.5 + statIndex * 0.1 }}
//                             className="flex items-center space-x-1 text-gray-400"
//                           >
//                             <Eye className="w-4 h-4" />
//                             <span className="text-sm">{stat.value}</span>
//                           </motion.div>
//                         ))}
//                       </div>
                      
//                       <div className="flex items-center space-x-2">
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => toggleLike(item.id)}
//                           className={`p-2 rounded-full transition-colors ${
//                             likedItems.has(item.id)
//                               ? 'text-red-500 bg-red-500/10'
//                               : 'text-gray-400 hover:text-red-500 hover:bg-red-500/10'
//                           }`}
//                         >
//                           <Heart 
//                             className="w-4 h-4" 
//                             fill={likedItems.has(item.id) ? 'currentColor' : 'none'}
//                           />
//                         </motion.button>
                        
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-colors"
//                         >
//                           <Share2 className="w-4 h-4" />
//                         </motion.button>
                        
//                         <motion.button
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium"
//                         >
//                           <span>View</span>
//                           <ArrowUpRight className="w-4 h-4" />
//                         </motion.button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Load More */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="text-center mt-12"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-cyan-500/25"
//           >
//             Load More Content
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ModernContentShowcase;