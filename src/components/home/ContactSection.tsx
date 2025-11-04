// // ContactSection.tsx
// import React, { useState, useEffect, useRef } from 'react';

// interface ContactMethod {
//   type: 'email' | 'phone' | 'chat' | 'office';
//   title: string;
//   description: string;
//   value: string;
//   icon: string;
// }

// interface OfficeLocation {
//   id: string;
//   region: string;
//   address: string;
//   phone: string;
//   email: string;
// }

// const ContactSection: React.FC = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<'methods' | 'offices'>('methods');
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const contactMethods: ContactMethod[] = [
//     {
//       type: 'email',
//       title: 'Email Support',
//       description: 'Get help via email',
//       value: 'support@company.com',
//       icon: '✉️'
//     },
//     {
//       type: 'phone',
//       title: 'Phone Support',
//       description: 'Call us directly',
//       value: '+1 (555) 123-4567',
//       icon: '📞'
//     },
//     {
//       type: 'chat',
//       title: 'Live Chat',
//       description: 'Instant messaging support',
//       value: 'Start Chat',
//       icon: '💬'
//     },
//     {
//       type: 'office',
//       title: 'Regional Offices',
//       description: 'Visit our locations',
//       value: 'View Offices',
//       icon: '🏢'
//     }
//   ];

//   const officeLocations: OfficeLocation[] = [
//     {
//       id: '1',
//       region: 'North America',
//       address: '123 Business Ave, New York, NY 10001',
//       phone: '+1 (555) 123-4567',
//       email: 'na-office@company.com'
//     },
//     {
//       id: '2',
//       region: 'Europe',
//       address: '456 Innovation St, London, UK EC1A 1BB',
//       phone: '+44 20 7946 0958',
//       email: 'eu-office@company.com'
//     },
//     {
//       id: '3',
//       region: 'Asia Pacific',
//       address: '789 Tech Park, Singapore 018989',
//       phone: '+65 6123 4567',
//       email: 'ap-office@company.com'
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleContactClick = (method: ContactMethod) => {
//     switch (method.type) {
//       case 'email':
//         window.location.href = `mailto:${method.value}`;
//         break;
//       case 'phone':
//         window.location.href = `tel:${method.value}`;
//         break;
//       case 'chat':
//         setIsChatOpen(true);
//         break;
//       case 'office':
//         setActiveTab('offices');
//         break;
//     }
//   };

//   return (
//     <section 
//       ref={sectionRef}
//       className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}>
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//             Get in <span className="text-blue-600">Touch</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Reach sales and support via email, phone, chat, regional offices — 
//             <span className="font-semibold text-blue-600 ml-2">
//               AI chatbot available 24x7
//             </span>
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left Column - Contact Methods */}
//           <div className={`space-y-6 transition-all duration-1000 delay-300 ${
//             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
//           }`}>
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <div className="flex space-x-4 mb-8">
//                 <button
//                   onClick={() => setActiveTab('methods')}
//                   className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === 'methods'
//                       ? 'bg-blue-600 text-white shadow-lg'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   Contact Methods
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('offices')}
//                   className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === 'offices'
//                       ? 'bg-blue-600 text-white shadow-lg'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   Regional Offices
//                 </button>
//               </div>

//               {activeTab === 'methods' ? (
//                 <div className="space-y-4">
//                   {contactMethods.map((method, index) => (
//                     <div
//                       key={method.type}
//                       className={`bg-gradient-to-r from-white to-blue-50 border-2 border-blue-100 rounded-xl p-6 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-blue-300 ${
//                         isVisible ? 'animate-fade-in-up' : 'opacity-0'
//                       }`}
//                       style={{ animationDelay: `${index * 200}ms` }}
//                       onClick={() => handleContactClick(method)}
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div className="text-3xl">{method.icon}</div>
//                         <div className="flex-1">
//                           <h3 className="text-xl font-semibold text-gray-900">
//                             {method.title}
//                           </h3>
//                           <p className="text-gray-600">{method.description}</p>
//                         </div>
//                         <div className="text-blue-600 font-semibold">
//                           {method.value}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="space-y-6">
//                   {officeLocations.map((office, index) => (
//                     <div
//                       key={office.id}
//                       className={`bg-white border-2 border-gray-200 rounded-xl p-6 transform transition-all duration-500 hover:shadow-lg ${
//                         isVisible ? 'animate-fade-in-up' : 'opacity-0'
//                       }`}
//                       style={{ animationDelay: `${index * 200}ms` }}
//                     >
//                       <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                         {office.region}
//                       </h3>
//                       <div className="space-y-2 text-gray-600">
//                         <p>📍 {office.address}</p>
//                         <p>📞 {office.phone}</p>
//                         <p>✉️ {office.email}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* AI Chatbot Banner */}
//             <div className={`bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white transform transition-all duration-1000 delay-500 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//             }`}>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-2">AI Assistant 24/7</h3>
//                   <p className="text-purple-100">
//                     Get instant answers anytime with our AI chatbot
//                   </p>
//                 </div>
//                 <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-300">
//                   Try Now
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Visualizations */}
//           <div className={`space-y-8 transition-all duration-1000 delay-500 ${
//             isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
//           }`}>
//             {/* Office Map Visualization */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Global Presence
//               </h3>
//               <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl overflow-hidden">
//                 {/* Simplified world map with office locations */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="relative w-48 h-48">
//                     {/* World map circles */}
//                     <div className="absolute inset-0 border-2 border-blue-300 rounded-full"></div>
//                     <div className="absolute inset-4 border-2 border-blue-400 rounded-full"></div>
                    
//                     {/* Office markers */}
//                     <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse">
//                       <div className="absolute -top-8 -left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
//                         NY
//                       </div>
//                     </div>
//                     <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-pulse">
//                       <div className="absolute -top-8 -left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
//                         LDN
//                       </div>
//                     </div>
//                     <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse">
//                       <div className="absolute -top-8 -left-4 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
//                         SG
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Live Chat Interface Preview */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Live Chat Interface
//               </h3>
//               <div className="bg-gray-900 rounded-xl p-4">
//                 <div className="bg-gray-800 rounded-lg p-4 h-48 space-y-3">
//                   {/* Chat messages */}
//                   <div className="flex justify-start">
//                     <div className="bg-blue-600 text-white rounded-2xl rounded-bl-none px-4 py-2 max-w-xs">
//                       Hi! How can I help you today?
//                     </div>
//                   </div>
//                   <div className="flex justify-end">
//                     <div className="bg-gray-700 text-white rounded-2xl rounded-br-none px-4 py-2 max-w-xs">
//                       I need help with my order
//                     </div>
//                   </div>
//                   <div className="flex justify-start">
//                     <div className="bg-blue-600 text-white rounded-2xl rounded-bl-none px-4 py-2 max-w-xs">
//                       Sure, I'd be happy to help!
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-3 flex space-x-2">
//                   <input
//                     type="text"
//                     placeholder="Type your message..."
//                     className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Chat Modal */}
//       {isChatOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
//           <div className="bg-white rounded-2xl w-full max-w-md mx-4 transform animate-scale-in">
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-semibold">Live Chat Support</h3>
//                 <button
//                   onClick={() => setIsChatOpen(false)}
//                   className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>
//             <div className="p-6">
//               <p className="text-gray-600 mb-4">
//                 Our support team will be with you shortly. In the meantime, you can try our AI assistant for instant help.
//               </p>
//               <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
//                 Start AI Chat
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ContactSection;



// components/ContactSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Bot,
  ExternalLink,
  Send,
  User,
  Loader2
} from 'lucide-react';

// Types
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type: 'text' | 'quick_reply';
  quickReplies?: string[];
}

interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  color: string;
  delay: number;
}

interface RegionalOffice {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

// AI Response Data
const aiResponses = {
  greetings: [
    "Hello! I'm your AI assistant. How can I help you today?",
    "Hi there! I'm here to assist you. What can I do for you?",
    "Welcome! I'm your 24/7 AI support assistant. How can I help?"
  ],
  sales: [
    "I'd be happy to help with sales inquiries! Our team can provide detailed pricing and product information. Would you like me to connect you with a sales representative?",
    "For sales questions, I can help with product details, pricing, and demos. Our sales team is also available for personalized assistance.",
    "Great question about sales! Let me get you the information you need about our products and services."
  ],
  support: [
    "I can help with technical support issues. Could you describe the problem you're experiencing in more detail?",
    "For support assistance, I'll do my best to help troubleshoot. You can also reach our human support team via email or phone.",
    "I understand you need support. Let me guide you through some common solutions or connect you with our support team."
  ],
  pricing: [
    "Our pricing varies based on your needs. We offer flexible plans starting at $29/month. Would you like to see a detailed breakdown?",
    "I can provide detailed pricing information based on your requirements. We have several plans designed for different business sizes.",
    "For pricing details, let me share our current plans and help you find the best fit for your needs."
  ],
  features: [
    "Our platform includes features like real-time analytics, automated reporting, 24/7 support, and customizable workflows. Which features are you most interested in?",
    "We offer a comprehensive suite of features including AI-powered insights, integration capabilities, and advanced security. Let me know what you'd like to learn more about!",
    "Our key features include seamless integration, powerful analytics, and enterprise-grade security. Is there a specific feature you'd like me to elaborate on?"
  ],
  default: [
    "I understand. Let me connect you with the right team member who can assist you further.",
    "Thanks for your question! I'll make sure you get the help you need from our specialized team.",
    "I appreciate you reaching out. Let me guide you to the best resource for your specific needs."
  ]
};

const quickReplyOptions = [
  "Pricing information",
  "Product features",
  "Technical support",
  "Speak with human",
  "Schedule demo"
];

const ContactSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Contact methods data
  const contactMethods: ContactMethod[] = [
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Get detailed assistance via email',
      action: 'mailto:support@company.com',
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      id: 'phone',
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      action: 'tel:+1-555-123-4567',
      color: 'from-green-500 to-green-600',
      delay: 0.2
    },
    {
      id: 'chat',
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Instant messaging support',
      action: '#chat',
      color: 'from-purple-500 to-purple-600',
      delay: 0.3
    },
    {
      id: 'ai-chatbot',
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Chatbot',
      description: '24/7 automated assistance',
      action: '#ai-chat',
      color: 'from-orange-500 to-orange-600',
      delay: 0.4
    },
    {
      id: 'offices',
      icon: <MapPin className="w-6 h-6" />,
      title: 'Regional Offices',
      description: 'Find our physical locations',
      action: '#offices',
      color: 'from-red-500 to-red-600',
      delay: 0.5
    }
  ];

  // Regional offices data
  const regionalOffices: RegionalOffice[] = [
    {
      id: 'ny',
      name: 'New York Office',
      address: '123 Business Ave, New York, NY 10001',
      phone: '+1-555-100-1001',
      email: 'ny-office@company.com',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 'london',
      name: 'London Office',
      address: '456 Commerce St, London, UK EC2A 1AB',
      phone: '+44-20-7946-0958',
      email: 'london-office@company.com',
      coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    {
      id: 'singapore',
      name: 'Singapore Office',
      address: '789 Trade Blvd, Singapore 018989',
      phone: '+65-6011-2233',
      email: 'singapore-office@company.com',
      coordinates: { lat: 1.3521, lng: 103.8198 }
    }
  ];

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)],
        sender: 'ai',
        timestamp: new Date(),
        type: 'quick_reply',
        quickReplies: quickReplyOptions
      };
      setMessages([welcomeMessage]);
    }
  }, [isChatOpen]);

  // Simulate AI typing and response
  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Analyze user message to determine response type
    const lowerMessage = userMessage.toLowerCase();
    let responseType: keyof typeof aiResponses = 'default';
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      responseType = 'greetings';
    } else if (lowerMessage.includes('sale') || lowerMessage.includes('buy') || lowerMessage.includes('purchase')) {
      responseType = 'sales';
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('problem')) {
      responseType = 'support';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('plan')) {
      responseType = 'pricing';
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('what can') || lowerMessage.includes('capability')) {
      responseType = 'features';
    }

    const responses = aiResponses[responseType];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    // Simulate typing delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: 'ai',
        timestamp: new Date(),
        type: 'quick_reply',
        quickReplies: Math.random() > 0.3 ? quickReplyOptions : undefined // Sometimes show quick replies
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  };

  const sendMessage = () => {
    if (message.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: message,
        sender: 'user',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, userMessage]);
      setMessage('');
      simulateAIResponse(message);
    }
  };

  const handleQuickReply = (reply: string) => {
    const quickReplyMessage: Message = {
      id: Date.now().toString(),
      content: reply,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };
    
    setMessages(prev => [...prev, quickReplyMessage]);
    simulateAIResponse(reply);
  };

  const handleContactAction = (action: string) => {
    if (action === '#chat' || action === '#ai-chat') {
      setIsChatOpen(true);
    } else if (action.startsWith('http') || action.startsWith('mailto') || action.startsWith('tel')) {
      window.open(action, '_blank');
    }
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 mt-10">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reach sales and support via email, phone, chat, regional offices—AI chatbot available 24x7
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => handleContactAction(method.action)}
              className="cursor-pointer group"
            >
              <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {method.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  <span>Contact Now</span>
                  <ExternalLink className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regional Offices Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Regional Offices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our global locations for personalized support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalOffices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {office.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                </div>

                <div className="mt-4 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 font-medium">Office Map</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI Chatbot Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              24/7 AI Chatbot Support
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get instant answers to your questions anytime, anywhere with our intelligent AI assistant
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsChatOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start AI Chat
            </motion.button>
          </div>
        </motion.section>
      </div>

      {/* Enhanced Chat Interface Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[600px] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bot className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="font-semibold text-lg">AI Assistant</h3>
                      <p className="text-blue-100 text-sm">Online • 24/7 Support</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          msg.sender === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-purple-600 text-white'
                        }`}>
                          {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        
                        <div className={`rounded-2xl p-4 ${
                          msg.sender === 'user'
                            ? 'bg-blue-600 text-white rounded-br-none'
                            : 'bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100'
                        }`}>
                          <p className="text-sm">{msg.content}</p>
                          <p className={`text-xs mt-1 ${
                            msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                          }`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Quick Replies */}
                  {messages.length > 0 && messages[messages.length - 1].sender === 'ai' && 
                   messages[messages.length - 1].quickReplies && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-wrap gap-2 mt-4"
                    >
                      {messages[messages.length - 1].quickReplies!.map((reply, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickReply(reply)}
                          className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          {reply}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end space-x-2">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-bl-none p-4 shadow-sm border border-gray-100">
                          <div className="flex space-x-1">
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={sendMessage}
                    disabled={!message.trim() || isTyping}
                    className="bg-blue-600 text-white p-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                  >
                    {isTyping ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactSection;