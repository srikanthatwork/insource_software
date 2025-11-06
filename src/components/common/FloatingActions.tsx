// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, X, Send } from "lucide-react";
// import { SiWhatsapp } from "react-icons/si";

// const FloatingActions: React.FC = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessages, setChatMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! Welcome to Insource Software. How can I help you today?",
//       sender: "bot",
//       timestamp: new Date(),
//     },
//   ]);
//   const [newMessage, setNewMessage] = useState("");

//   const handleWhatsAppClick = () => {
//     const phoneNumber = "7569690353"; // Replace with actual WhatsApp number
//     const message =
//       "Hi! I'm interested in learning more about Insource Software solutions.";
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const userMessage = {
//         id: chatMessages.length + 1,
//         text: newMessage,
//         sender: "user",
//         timestamp: new Date(),
//       };

//       setChatMessages((prev) => [...prev, userMessage]);
//       setNewMessage("");

//       // Simulate bot response
//       setTimeout(() => {
//         const botResponse = {
//           id: chatMessages.length + 2,
//           text: "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our products or contact us directly.",
//           sender: "bot",
//           timestamp: new Date(),
//         };
//         setChatMessages((prev) => [...prev, botResponse]);
//       }, 1000);
//     }
//   };

//   const quickReplies = [
//     "Tell me about Health Plus",
//     "Pricing information",
//     "Schedule a demo",
//     "Contact sales team",
//   ];

//   return (
//     <>
//       {/* Floating Action Buttons */}
//       <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
//         {/* WhatsApp Button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handleWhatsAppClick}
//           className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 neon-green"
//         >
//           <SiWhatsapp className="w-6 h-6" />
//         </motion.button>

//         {/* Chatbot Button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsChatOpen(!isChatOpen)}
//           className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 neon-blue"
//         >
//           {isChatOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <MessageCircle className="w-6 h-6" />
//           )}
//         </motion.button>
//       </div>

//       {/* Chatbot Modal */}
//       <AnimatePresence>
//         {isChatOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 20 }}
//             // className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden glass"
//             className="fixed bottom-20 right-4 sm:right-6 w-[90%] max-w-sm h-[70vh] sm:h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden glass"
//           >
//             {/* Chat Header */}
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//                   <MessageCircle className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Insource Assistant</h3>
//                   <p className="text-xs opacity-90">Online now</p>
//                 </div>
//               </div>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-1 p-4 overflow-y-auto space-y-3">
//               {chatMessages.map((message) => (
//                 <motion.div
//                   key={message.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className={`flex ${
//                     message.sender === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
//                       message.sender === "user"
//                         ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
//                         : "bg-gray-100 text-gray-800"
//                     }`}
//                   >
//                     {message.text}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Quick Replies */}
//             <div className="px-4 pb-2">
//               <div className="flex flex-wrap gap-2">
//                 {quickReplies.map((reply, index) => (
//                   <motion.button
//                     key={index}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setNewMessage(reply)}
//                     className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
//                   >
//                     {reply}
//                   </motion.button>
//                 ))}
//               </div>
//             </div>

//             {/* Chat Input */}
//             <div className="p-4 border-t border-gray-200">
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                   placeholder="Type your message..."
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={handleSendMessage}
//                   className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
//                 >
//                   <Send className="w-4 h-4" />
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Backdrop */}
//       <AnimatePresence>
//         {isChatOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsChatOpen(false)}
//             className="fixed inset-0 bg-black/20 z-40 md:hidden"
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default FloatingActions;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const FloatingActions: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{
    id: number;
    text: string;
    sender: string;
    timestamp: Date;
    link?: string | null;
  }>>([
    {
      id: 1,
      text: "Hello! Welcome to Insource Software. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "7569690353";
    const message =
      "Hi! I'm interested in learning more about Insource Software solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const getProductResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("health plus")) {
      return {
        text: "🏥 Health Plus is our comprehensive healthcare management system designed for hospitals and clinics. It includes:\n\n✓ Patient Management\n✓ Appointment Scheduling\n✓ Electronic Medical Records\n✓ Billing & Insurance\n✓ Pharmacy Management\n✓ Lab Integration\n\nWould you like to schedule a demo or learn more about specific features?",
        link: "/products/hmsehr"
      };
    } else if (lowerMessage.includes("talent plus")) {
      return {
        text: "👥 Talent Plus is our advanced HR & Recruitment management solution. Key features include:\n\n✓ Applicant Tracking System\n✓ Employee Onboarding\n✓ Performance Management\n✓ Payroll Integration\n✓ Leave Management\n✓ Training & Development\n\nPerfect for streamlining your HR processes! Need more details?",
        link: "/products/hcm"
      };
    } else if (lowerMessage.includes("inventory plus")) {
      return {
        text: "📦 Inventory Plus is our smart inventory management system that helps you:\n\n✓ Real-time Stock Tracking\n✓ Multi-warehouse Management\n✓ Purchase Order Management\n✓ Barcode & QR Scanning\n✓ Low Stock Alerts\n✓ Detailed Analytics & Reports\n\nIdeal for retail, wholesale, and manufacturing! Want to see it in action?",
        link: "/products/idm"
      };
    } else if (lowerMessage.includes("field era") || lowerMessage.includes("fieldera")) {
      return {
        text: "🚀 Fieldera is our powerful field service management platform featuring:\n\n✓ Work Order Management\n✓ GPS Tracking & Route Optimization\n✓ Mobile App for Field Teams\n✓ Customer Portal\n✓ Invoicing & Payments\n✓ Service History & Reports\n\nBoost your field operations efficiency! Interested in a free trial?",
        link: "/products/ffa"
      };
    } else if (lowerMessage.includes("pricing")) {
      return {
        text: "💰 Our pricing is flexible and tailored to your needs! It varies based on:\n\n• Number of users\n• Features required\n• Implementation scope\n• Support level\n\nI'd recommend connecting with our sales team for a customized quote. Would you like me to arrange a call?",
        link: "/contact"
      };
    } else if (lowerMessage.includes("demo")) {
      return {
        text: "🎯 Great! I'd love to schedule a demo for you. Our product demos typically last 30-45 minutes and cover:\n\n• Live product walkthrough\n• Feature demonstrations\n• Q&A session\n• Custom use case discussion\n\nPlease share your preferred date/time or contact our team at sales@insourcesoftware.com",
        link: "/contact"
      };
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("sales")) {
      return {
        text: "📞 You can reach our sales team through:\n\n• Email: sales@insourcesoftware.com\n• Phone: +91 7569690353\n• WhatsApp: Click the green button below\n• Website: www.insourcesoftware.com\n\nOur team is available Mon-Fri, 9 AM - 6 PM IST. How else can I assist you?",
        link: "/contact"
      };
    }
    
    return {
      text: "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our products or contact us directly. You can also try asking about Health Plus, Talent Plus, Inventory Plus, or Fieldera!",
      link: null
    };
  };

  const handleProductLinkClick = (link: string) => {
    navigate(link);
    setIsChatOpen(false); // Close chat when navigating
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };

      setChatMessages((prev) => [...prev, userMessage]);
      const currentMessage = newMessage;
      setNewMessage("");

      // Simulate bot response with product-specific content
      setTimeout(() => {
        const response = getProductResponse(currentMessage);
        const botResponse = {
          id: chatMessages.length + 2,
          text: response.text,
          sender: "bot",
          timestamp: new Date(),
          link: response.link,
        };
        setChatMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const quickReplies = [
    "Tell me about Health Plus",
    "What is Talent Plus?",
    "Inventory Plus features",
    "Fieldera info",
  ];

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300"
        >
          <SiWhatsapp className="w-6 h-6" />
        </motion.button>

        {/* Chatbot Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300"
        >
          {isChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[90%] max-w-sm h-[70vh] sm:h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Insource Assistant</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${
                    message.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm whitespace-pre-line ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.link && message.sender === "bot" && (
                    <motion.button
                      onClick={() => handleProductLinkClick(message.link!)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                    >
                      View Product Details
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setNewMessage(reply)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsChatOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActions;