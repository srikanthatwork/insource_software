// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
// import AnimatedSection from "../components/common/AnimatedSection";
// import Card from "../components/common/Card";
// // import Button from "../components/common/Button";
// import { companyInfo } from "../data/company";
// import ContactForm from "../components/ContactForm";

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     phone: "",
//     subject: "demo",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone",
//       details: companyInfo.contact.phone,
//       description: "Mon-Fri from 8am to 5pm",
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       details: companyInfo.contact.email,
//       description: "We'll respond within 24 hours",
//     },
//     {
//       icon: MapPin,
//       title: "Office",
//       details: companyInfo.contact.address,
//       description: "Visit us at our headquarters",
//     },
//     // {
//     //   icon: Clock,
//     //   title: "Business Hours",
//     //   details: "Mon-Fri: 8:00 AM - 5:00 PM",
//     //   description: "EST (Eastern Standard Time)",
//     // },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}

//       {/* Contact Form & Map */}
//       <section className="  py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <AnimatedSection>
//               <Card className="p-8 border">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                   Send us a Message
//                 </h2>

//                 {isSubmitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <CheckCircle className="w-8 h-8 text-green-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                       Message Sent Successfully!
//                     </h3>
//                     <p className="text-gray-600">
//                       Thank you for contacting us. We'll get back to you within
//                       24 hours.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   // <form onSubmit={handleSubmit} className="space-y-6">
//                   //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   //     <div>
//                   //       <label
//                   //         htmlFor="name"
//                   //         className="block text-sm font-medium text-gray-700 mb-2"
//                   //       >
//                   //         Full Name *
//                   //       </label>
//                   //       <input
//                   //         type="text"
//                   //         id="name"
//                   //         name="name"
//                   //         required
//                   //         value={formData.name}
//                   //         onChange={handleInputChange}
//                   //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   //         placeholder="Enter your full name"
//                   //       />
//                   //     </div>

//                   //     <div>
//                   //       <label
//                   //         htmlFor="email"
//                   //         className="block text-sm font-medium text-gray-700 mb-2"
//                   //       >
//                   //         Email Address *
//                   //       </label>
//                   //       <input
//                   //         type="email"
//                   //         id="email"
//                   //         name="email"
//                   //         required
//                   //         value={formData.email}
//                   //         onChange={handleInputChange}
//                   //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   //         placeholder="Enter your email"
//                   //       />
//                   //     </div>

//                   //     <div>
//                   //       <label
//                   //         htmlFor="company"
//                   //         className="block text-sm font-medium text-gray-700 mb-2"
//                   //       >
//                   //         Company/Organization
//                   //       </label>
//                   //       <input
//                   //         type="text"
//                   //         id="company"
//                   //         name="company"
//                   //         value={formData.company}
//                   //         onChange={handleInputChange}
//                   //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   //         placeholder="Enter your company name"
//                   //       />
//                   //     </div>

//                   //     <div>
//                   //       <label
//                   //         htmlFor="phone"
//                   //         className="block text-sm font-medium text-gray-700 mb-2"
//                   //       >
//                   //         Phone Number
//                   //       </label>
//                   //       <input
//                   //         type="tel"
//                   //         id="phone"
//                   //         name="phone"
//                   //         value={formData.phone}
//                   //         onChange={handleInputChange}
//                   //         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   //         placeholder="Enter your phone number"
//                   //       />
//                   //     </div>
//                   //   </div>

//                   //   <div>
//                   //     <label
//                   //       htmlFor="subject"
//                   //       className="block text-sm font-medium text-gray-700 mb-2"
//                   //     >
//                   //       Subject *
//                   //     </label>
//                   //     <select
//                   //       id="subject"
//                   //       name="subject"
//                   //       required
//                   //       value={formData.subject}
//                   //       onChange={handleInputChange}
//                   //       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                   //     >
//                   //       {/* <option value="">Select a subject</option> */}
//                   //       <option value="demo">Request a Demo</option>
//                   //       <option value="sales">Sales Inquiry</option>
//                   //       {/* <option value="support">Technical Support</option> */}
//                   //       <option value="partnership">
//                   //         Partnership Opportunity
//                   //       </option>
//                   //       <option value="other">Other</option>
//                   //     </select>
//                   //   </div>

//                   //   <div>
//                   //     <label
//                   //       htmlFor="message"
//                   //       className="block text-sm font-medium text-gray-700 mb-2"
//                   //     >
//                   //       Message *
//                   //     </label>
//                   //     <textarea
//                   //       id="message"
//                   //       name="message"
//                   //       rows={6}
//                   //       required
//                   //       value={formData.message}
//                   //       onChange={handleInputChange}
//                   //       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
//                   //       placeholder="Tell us about your requirements..."
//                   //     />
//                   //   </div>

//                   //   <Button
//                   //     type="submit"
//                   //     size="lg"
//                   //     icon={Send}
//                   //     iconPosition="right"
//                   //     className="w-full"
//                   //   >
//                   //     Send Message
//                   //   </Button>
//                   // </form>

//                   <ContactForm />
//                 )}
//               </Card>
//             </AnimatedSection>

//             <div className="flex flex-col border">
//               <section className="py-14 bg-gradient-to-br ">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                   <AnimatedSection className="text-center">
//                     <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                       Get in{" "}
//                       <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         Touch
//                       </span>
//                     </h1>
//                     <p className="text-md text-gray-600 max-w-4xl mx-auto leading-relaxed">
//                       Ready to transform your healthcare operations? Contact our
//                       team of experts to learn how our solutions can be
//                       customized for your specific needs.
//                     </p>
//                   </AnimatedSection>
//                 </div>
//               </section>

//               <div className="flex w-full border border-red-300">
//                 {/* Map & Additional Info */}
//                 <AnimatedSection direction="right" className="w-full">
//                   <div className="space-y-8 w-full">
//                     {/* Map Placeholder */}
//                     <Card className="p-0 overflow-hidden w-full">
//                       <div className="h-64 flex items-center justify-center w-full">
//                         <div className="text-center w-full h-full">
//                           <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.188067659278!2d78.37644087493584!3d17.434228133461012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e1!3m2!1sen!2sin!4v1753936962526!5m2!1sen!2sin"
//                             className="w-full h-full"
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                           ></iframe>
//                         </div>
//                       </div>
//                     </Card>

//                     {/* Quick Contact */}
//                     <Card className="p-6 w-full">
//                       <h3 className="text-xl font-bold text-gray-900 mb-4">
//                         Need Immediate Assistance?
//                       </h3>
//                       <div className="space-y-4">
//                         <div className="flex items-center space-x-3">
//                           <Phone className="w-5 h-5 text-blue-500" />
//                           <div>
//                             <p className="font-medium text-gray-900">
//                               Call us directly
//                             </p>
//                             <p className="text-sm text-gray-600">
//                               {companyInfo.contact.phone}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-3">
//                           <Mail className="w-5 h-5 text-blue-500" />
//                           <div>
//                             <p className="font-medium text-gray-900">
//                               Email support
//                             </p>
//                             <p className="text-sm text-gray-600">
//                               {companyInfo.contact.email}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </Card>

//                     {/* Office Hours */}
//                     <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
//                       <h3 className="text-xl font-bold text-gray-900 mb-4">
//                         Office Hours
//                       </h3>
//                       <div className="space-y-2 text-sm">
//                         <div className="flex justify-between">
//                           <span className="text-gray-600">Monday - Friday</span>
//                           <span className="font-medium text-gray-900">
//                             8:00 AM - 5:00 PM
//                           </span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-gray-600">Saturday</span>
//                           <span className="font-medium text-gray-900">
//                             9:00 AM - 2:00 PM
//                           </span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="text-gray-600">Sunday</span>
//                           <span className="font-medium text-gray-900">
//                             Closed
//                           </span>
//                         </div>
//                       </div>
//                     </Card>
//                   </div>
//                 </AnimatedSection>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-20 bg-white  ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//           <div className=" gap-8 flex md:flex-row flex-col justify-center items-center">
//             {contactInfo.map((info, index) => (
//               <AnimatedSection key={info.title} delay={index * 0.1}>
//                 <Card className="p-6 text-center h-full">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
//                     <info.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     {info.title}
//                   </h3>
//                   <p className="text-gray-900 font-medium mb-2">
//                     {info.details}
//                   </p>
//                   <p className="text-sm text-gray-600">{info.description}</p>
//                 </Card>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import AnimatedSection from "../components/common/AnimatedSection";
import Card from "../components/common/Card";
import ContactForm from "../components/ContactForm";
import { companyInfo } from "../data/company";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: companyInfo.contact.phone,
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: Mail,
      title: "Email",
      details: companyInfo.contact.email,
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: companyInfo.contact.address,
      description: "Visit us at our headquarters",
    },
  ];

  return (
    <div>
      {/* Main Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="">
                {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2> */}

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 "
                  >
                    <div className="w-16 h-16   rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <ContactForm onSuccess={() => setIsSubmitted(true)} />
                )}
              </Card>
            </AnimatedSection>

            {/* Contact Info + Map */}
            <div className="flex flex-col w-full">
              <section className="py-14">
                <div className="text-center max-w-3xl mx-auto">
                  <AnimatedSection>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      Get in{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Touch
                      </span>
                    </h1>
                    <p className="text-md text-gray-600 leading-relaxed">
                      Ready to transform your healthcare operations? Contact our
                      team of experts to learn how our solutions can be
                      customized for your specific needs.
                    </p>
                  </AnimatedSection>
                </div>
              </section>

              <AnimatedSection direction="right" className="w-full">
                <div className="space-y-8 w-full">
                  {/* Google Map */}
                  <Card className="p-0 overflow-hidden w-full">
                    <div className="h-64 w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.188067659278!2d78.37644087493584!3d17.434228133461012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd18410b0f%3A0x8d7e3fea891858ce!2sT-Hub!5e1!3m2!1sen!2sin!4v1753936962526!5m2!1sen!2sin"
                        className="w-full h-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </Card>

                  {/* Quick Contact */}
                  <Card className="p-6 w-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Call us directly
                          </p>
                          <p className="text-sm text-gray-600">
                            {companyInfo.contact.phone}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Email support
                          </p>
                          <p className="text-sm text-gray-600">
                            {companyInfo.contact.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Office Hours */}
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium text-gray-900">
                          8:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium text-gray-900">
                          9:00 AM - 1:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium text-gray-900">
                          Closed
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <Card className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-900 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
        {/* <ContactSection/> */}
      {/* <IndustriesServed/> */}
      
    </div>
  );
};

export default Contact;
