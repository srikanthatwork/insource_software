// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface RequestDemoFormProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const RequestDemoForm: React.FC<RequestDemoFormProps> = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     company: '',
//     phone: '',
//     subject: 'Request a Demo',
//     product: 'HMSEHR',
//     message: ''
//   });

//   const products = [
//     { value: 'Hospital Plus ', label: 'Hospital Plus' },
//     { value: 'Talent Plus', label: 'Talent Plus' },
//     { value: 'Inventory Plus', label: 'Inventory Plus' },
//     { value: 'Fieldera', label: 'Fieldera' }
//   ];

//   const subjects = [

//     'Sales Inquiry',
//     'Partnership Opportunity',
//     'Other'
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can add API call here
//     onClose();
//   };

//   const modalVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.8
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   const overlayVariants = {
//     hidden: {
//       opacity: 0
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.3
//       }
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           variants={overlayVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//           onClick={onClose}
//         >
//           <motion.div
//             variants={modalVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6">
//               {/* Header */}
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-gray-900">Request a Demo</h2>
//                 <button
//                   onClick={onClose}
//                   className="text-gray-400 hover:text-gray-600 text-2xl font-light"
//                 >
//                   ×
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Full Name */}
//                 <div>
//                   <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     required
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your email"
//                   />
//                 </div>

//                 {/* Company */}
//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your company name"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>

//                 {/* Subject */}
//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                     Subject *
//                   </label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     required
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     {subjects.map((subject) => (
//                       <option key={subject} value={subject}>
//                         {subject}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Product Selection - Only show if subject is Request a Demo */}
//                 {formData.subject === 'Request a Demo' && (
//                   <div>
//                     <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
//                       Select Product *
//                     </label>
//                     <select
//                       id="product"
//                       name="product"
//                       required={formData.subject === 'Request a Demo'}
//                       value={formData.product}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       {products.map((product) => (
//                         <option key={product.value} value={product.value}>
//                           {product.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}

//                 {/* Message */}
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Tell us about your requirements..."
//                   />
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-gray-200 pt-4">
//                   {/* Submit Button */}
//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
//                   >
//                     Send Message
//                   </motion.button>
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default RequestDemoForm;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, AlertCircle, AlertTriangle } from 'lucide-react';

interface RequestDemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  phone?: string;
  subject?: string;
  product?: string;
  message?: string;
}

const RequestDemoForm: React.FC<RequestDemoFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'Request a Demo',
    product: 'Hospital Plus',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error' | 'warning'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');

  const products = [
    { value: 'Hospital Plus', label: 'Hospital Plus (Healthcare Management )' },
    { value: 'Talent Plus', label: 'Talent Plus (Human Capital Management)' },
    { value: 'Inventory Plus', label: 'Inventory Plus (Distribution Management)' },
    { value: 'Fieldera', label: 'Fieldera (Field Force Application)' }
  ];

  const subjects = [
    'Request a Demo',
    'Sales Inquiry',
    'Partnership Opportunity',
    'Other'
  ];

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    // Required field validation
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (formData.subject === 'Request a Demo' && !formData.product.trim()) {
      errors.product = 'Please select a product for demo';
    }

    // Optional field validation with format checks
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (formData.message && formData.message.length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const showNotificationMessage = (type: 'success' | 'error' | 'warning', message: string) => {
    setNotificationType(type);
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      showNotificationMessage('warning', 'Please fill all required fields correctly before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted successfully:', formData);
      
      // Show success notification
      showNotificationMessage('success', 'Thank you! Your demo request has been submitted successfully. We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        subject: 'Request a Demo',
        product: 'Hospital Plus',
        message: ''
      });
      
      // Clear any existing errors
      setFormErrors({});
      
      // Close modal after a delay
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotificationMessage('error', 'Sorry, there was an error submitting your request. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const notificationVariants = {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const getNotificationStyles = (type: 'success' | 'error' | 'warning') => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'text-green-500',
          title: 'text-green-800',
          text: 'text-green-700',
          iconComponent: <CheckCircle className="w-5 h-5" />
        };
      case 'error':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: 'text-red-500',
          title: 'text-red-800',
          text: 'text-red-700',
          iconComponent: <AlertCircle className="w-5 h-5" />
        };
      case 'warning':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          icon: 'text-yellow-500',
          title: 'text-yellow-800',
          text: 'text-yellow-700',
          iconComponent: <AlertTriangle className="w-5 h-5" />
        };
      default:
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'text-green-500',
          title: 'text-green-800',
          text: 'text-green-700',
          iconComponent: <CheckCircle className="w-5 h-5" />
        };
    }
  };

  const notificationStyles = getNotificationStyles(notificationType);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={onClose}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl w-full max-w-lg lg:max-w-2xl mx-auto my-8 max-h-[95vh] lg:max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 lg:mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Request a Demo</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 text-2xl lg:text-3xl font-light"
                    disabled={isSubmitting}
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    {/* Full Name */}
                    <div className="lg:col-span-1">
                      <label htmlFor="fullName" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                          formErrors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="lg:col-span-1">
                      <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                          formErrors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-1">
                      <label htmlFor="company" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Enter your company name"
                      />
                    </div>

                    {/* Phone */}
                    <div className="lg:col-span-1">
                      <label htmlFor="phone" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                          formErrors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                        formErrors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Product Selection - Only show if subject is Request a Demo */}
                  {formData.subject === 'Request a Demo' && (
                    <div>
                      <label htmlFor="product" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                        Select Product *
                      </label>
                      <select
                        id="product"
                        name="product"
                        required={formData.subject === 'Request a Demo'}
                        value={formData.product}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
                          formErrors.product ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      >
                        {products.map((product) => (
                          <option key={product.value} value={product.value}>
                            {product.label}
                          </option>
                        ))}
                      </select>
                      {formErrors.product && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.product}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm lg:text-base font-medium text-gray-700 mb-1 lg:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base resize-vertical disabled:opacity-50 disabled:cursor-not-allowed ${
                        formErrors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your requirements..."
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.message}
                      </p>
                    )}
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Optional</span>
                      <span>{formData.message.length}/1000</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 pt-4 lg:pt-6">
                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full bg-blue-600 text-white py-3 lg:py-4 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success/Error/Warning Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-4 right-4 z-[60] max-w-sm w-full ${notificationStyles.bg} ${notificationStyles.border} rounded-lg shadow-lg p-4`}
          >
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 ${notificationStyles.icon}`}>
                {notificationStyles.iconComponent}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${notificationStyles.title}`}>
                  {notificationType === 'success' ? 'Success!' : 
                   notificationType === 'error' ? 'Error!' : 'Warning!'}
                </p>
                <p className={`text-sm ${notificationStyles.text} mt-1`}>
                  {notificationMessage}
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className={`flex-shrink-0 ${
                  notificationType === 'success' 
                    ? 'text-green-400 hover:text-green-600' 
                    : notificationType === 'error'
                    ? 'text-red-400 hover:text-red-600'
                    : 'text-yellow-400 hover:text-yellow-600'
                } transition-colors`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RequestDemoForm;

