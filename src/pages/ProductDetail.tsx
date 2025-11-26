// import React, { useState } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import * as Icons from "lucide-react";
// import AnimatedSection from "../components/common/AnimatedSection";
// import Card from "../components/common/Card";
// import Button from "../components/common/Button";
// import { products } from "../data/products";

// const ProductDetail: React.FC = () => {
//   const { productId } = useParams<{ productId: string }>();
//   const [activeTab, setActiveTab] = useState("overview");

//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return <Navigate to="/products" replace />;
//   }

//   const IconComponent = Icons[
//     product.icon as keyof typeof Icons
//   ] as React.ComponentType<any>;

//   const tabs = [
//     { id: "overview", label: "Overview" },
//     { id: "features", label: "Features" },
//     { id: "modules", label: "Modules" },
//   ];

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section
//         className={`py-20 bg-gradient-to-br ${product.color
//           .replace("from-", "from-")
//           .replace("to-", "to-")}/10`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection>
//               <div
//                 className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-3xl flex items-center justify-center mb-6`}
//               >
//                 <IconComponent className="w-10 h-10 text-white" />
//               </div>

//               <h1 className="text-5xl font-bold text-gray-900 mb-4">
//                 {product.name}
//               </h1>

//               <p className="text-xl text-gray-600 mb-6 font-medium">
//                 {product.fullName}
//               </p>

//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 {product.description}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button size="lg">Request Demo</Button>
//                 <Button variant="outline" size="lg">
//                   Download Brochure
//                 </Button>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection direction="right">
//               <div className="relative">
//                 <div
//                   className={`w-full h-96 bg-gradient-to-br ${product.color
//                     .replace("from-", "from-")
//                     .replace(
//                       "to-",
//                       "to-"
//                     )}/20 rounded-3xl flex items-center justify-center`}
//                 >
//                   <div className="text-center">
//                     <div
//                       className={`w-32 h-32 bg-gradient-to-r ${product.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
//                     >
//                       <IconComponent className="w-16 h-16 text-white" />
//                     </div>
//                     <p className="text-gray-600 font-medium">
//                       {product.fullName}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Navigation */}
//       <div className="sticky top-16 bg-white border-b border-gray-200 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex space-x-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === tab.id
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Overview Tab */}
//           {activeTab === "overview" && (
//             <AnimatedSection>
//               <div className="prose prose-lg max-w-none">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8">
//                   Product Overview
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed mb-8">
//                   {product.description}
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
//                   <Card className="p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">
//                       Key Benefits
//                     </h3>
//                     <ul className="space-y-3">
//                       <li className="flex items-center space-x-3">
//                         {/* <Icons.Check className="w-5 h-5 text-green-500" /> */}
//                         <span className="text-gray-600">
//                           Improved hiring
//                         </span>
//                       </li>
//                       <li className="flex items-center space-x-3">
//                         {/* <Icons.Check className="w-5 h-5 text-green-500" /> */}
//                         <span className="text-gray-600">
//                           Engagement Retention 
//                         </span>
//                       </li>
//                       <li className="flex items-center space-x-3">
//                         {/* <Icons.Check className="w-5 h-5 text-green-500" /> */}
//                         <span className="text-gray-600">
//                           Administrative Efficiency
//                         </span>
//                       </li>
//                       <li className="flex items-center space-x-3">
//                         {/* <Icons.Check className="w-5 h-5 text-green-500" /> */}
//                         <span className="text-gray-600">
//                          Global Compliance  
//                         </span>
//                       </li>
//                     </ul>
//                   </Card>

//                   <Card className="p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">
//                       Technical Specs
//                     </h3>
//                     <ul className="space-y-3">
//                       <li className="flex items-center space-x-3 " >
//                         <Icons.Cloud className="w-5 h-5 text-blue-500" />
//                         <span className="text-gray-600">
//                           Cloud-based architecture
//                         </span>
//                       </li>
//                       <li className="flex items-center space-x-3">
//                         <Icons.Smartphone className="w-5 h-5 text-blue-500" />
//                         <span className="text-gray-600">
//                           Mobile responsive design
//                         </span>
//                       </li>
//                       <li className="flex items-center space-x-3">
//                         <Icons.Database className="w-5 h-5 text-blue-500" />
//                         <span className="text-gray-600">
//                           Real-time data synchronization
//                         </span>
//                       </li>
//                       <li className="flex items-center space-x-3">
//                         <Icons.Shield className="w-5 h-5 text-blue-500" />
//                         <span className="text-gray-600">
//                           Enterprise-grade security
//                         </span>
//                       </li>
//                     </ul>
//                   </Card>
//                 </div>
//               </div>
//             </AnimatedSection>
//           )}

//           {/* Features Tab */}
//           {activeTab === "features" && (
//             <AnimatedSection>
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">
//                 Key Features
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {product.features.map((feature, index) => {
//                   const FeatureIcon = Icons[
//                     feature.icon as keyof typeof Icons
//                   ] as React.ComponentType<any>;
//                   return (
//                     <motion.div
//                       key={feature.title}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <Card className="p-6 h-full">
//                         <div
//                           className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4`}
//                         >
//                           <FeatureIcon className="w-6 h-6 text-white" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-3">
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed ">
//                           {feature.description}
//                         </p>{" "}
//                         <p className="text-gray-600 leading-relaxed">
//                           {feature.desc2}
//                         </p>{" "}
//                         {/* <p className="text-gray-600 leading-relaxed">
//                           {feature.desc3}
//                         </p> */}
//                       </Card>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </AnimatedSection>
//           )}

//           {/* Modules Tab */}
//           {activeTab === "modules" && (
//             <AnimatedSection>
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">
//                  Modules
//               </h2>
//               <div className="space-y-8">
//                 {product.modules.map((module, index) => {
//                   const ModuleIcon = Icons[
//                     module.icon as keyof typeof Icons
//                   ] as React.ComponentType<any>;
//                   return (
//                     <motion.div
//                       key={module.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <Card className="p-8">
//                         <div className="flex items-start space-x-6">
                          
//                           <div className="flex-1">
//                             <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                               {module.name}
//                             </h3>
//                             <p className="text-gray-600 mb-6 leading-relaxed">
//                               {module.description}
//                             </p>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                               {module.features.map((feature) => (
//                                 <div
//                                   key={feature}
//                                   className="flex items-center space-x-3"
//                                 >
//                                   <Icons.CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
//                                   <span className="text-gray-600">
//                                     {feature}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </Card>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </AnimatedSection>
//           )}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <section className={`py-20 bg-gradient-to-r ${product.color}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <AnimatedSection>
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Ready to Get Started with {product.name}?
//             </h2>
//             <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
//               Contact our team to schedule a personalized demo and see how{" "}
//               {product.fullName} can transform your operations.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button variant="secondary" size="lg">
//                 Schedule Demo
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-white text-white  hover:text-gray-900"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useState, useRef, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"; // Added useNavigate import
import { motion, useScroll, useTransform } from "framer-motion";
import * as Icons from "lucide-react";
import AnimatedSection from "../components/common/AnimatedSection";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { products } from "../data/products";
import RequestDemoForm from "../components/common/RequestDemoForm";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  
  const navigate = useNavigate(); 

  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const modulesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const IconComponent = Icons[
    product.icon as keyof typeof Icons
  ] as React.ComponentType<any>;

  const sections = [
    { id: "overview", label: "Overview", ref: overviewRef },
    { id: "features", label: "Features", ref: featuresRef },
    { id: "modules", label: "Modules", ref: modulesRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]); // Added sections dependency

  const scrollToSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section?.ref.current) {
      window.scrollTo({
        top: section.ref.current.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const handleRequestDemo = () => {
    setIsDemoFormOpen(true);
  };

  const handleContactSales = () => {
    navigate('/contact');
  };

  // Add type safety for overview benefits
  const overviewBenefits = product.overview?.benefits || [
    "Improved hiring efficiency and quality",
    "Enhanced employee engagement and retention", 
    "Streamlined administrative processes",
    "Global compliance and risk management"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className={`py-20 bg-gradient-to-br ${product.color
          .replace("from-", "from-")
          .replace("to-", "to-")}/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div
                className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-3xl flex items-center justify-center mb-6`}
              >
                <IconComponent className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-xl text-gray-600 mb-6 font-medium">
                {product.fullName}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleRequestDemo}
                >
                  Request a Demo
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div
                  className={`w-full h-96 bg-gradient-to-br ${product.color
                    .replace("from-", "from-")
                    .replace("to-", "to-")}/20 rounded-3xl flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div
                      className={`w-32 h-32 bg-gradient-to-r ${product.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      {product.fullName}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sticky Navigation - Uncomment if needed */}
      {/* <motion.div 
        className="sticky top-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-40"
        style={{ opacity, scale }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-all duration-300 ${
                  activeSection === section.id
                    ? "border-blue-500 text-blue-600 scale-105"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </motion.div> */}

      {/* Main Content - All Sections in One Page */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
             {/* Modules Section */}
            <section id="modules" ref={modulesRef} className="scroll-mt-20">
              <AnimatedSection>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Product Overview

                </h2>
                <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                  Discover what makes our product unique and powerful.



                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.modules.map((module, index) => {
                    const ModuleIcon = Icons[
                      module.icon as keyof typeof Icons
                    ] as React.ComponentType<any>;
                    return (
                      <motion.div
                        key={module.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="h-full flex"
                      >
                      <Card className="p-4 h-full hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group w-full">
                        {/* Icon and Title */}
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <ModuleIcon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-tight">
                            {module.name}
                          </h3>
                        </div>

                          {/* Description */}
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                            {module.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-2">
                            {module.features.map((feature, featureIndex) => (
                              <div
                                key={feature}
                                className="flex items-start space-x-2 py-1"
                              >
                                <Icons.CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-xs leading-relaxed flex-1">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </section>

          {/* Overview Section */}
          <section id="overview" ref={overviewRef} className="scroll-mt-20">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Key Benefits
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                Discover the powerful benefits that make Health Plus the ultimate solution for your needs

                </p>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {overviewBenefits.map((benefits, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 text-center">
                        <div className={`w-8 h-8 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <Icons.CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {benefits}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>


              
              </div>
              </AnimatedSection>
              </section>


              {/* key Features */}
               <section id="overview" ref={overviewRef} className="scroll-mt-20">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Key Features
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                Discover the powerful features that make Health Plus the ultimate solution for your needs

                </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

                    {product.features.map((feature, index) => {
                                const FeatureIcon = Icons[
                                  feature.icon as keyof typeof Icons
                                ] as React.ComponentType<any>;
                                return (
                                  <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.03 }}
                                    className="h-full"
                                  >
                            <Card className="p-4 h-full hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col min-h-[200px] w-full">
                              {/* Icon Section */}
                              <div
                                className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-3 flex-shrink-0`}
                              >
                                <FeatureIcon className="w-5 h-5 text-white" />
                              </div>

                              {/* Content Section */}
                              <div className="flex flex-col flex-1">
                                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                                  {feature.title}
                                </h3>
                                
                                <div className="space-y-1.5 flex-1">
                                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                                    {feature.description}
                                  </p>
                                  {feature.desc2 && (
                                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                                      {feature.desc2}
                                    </p>
                                  )}
                                  {feature.desc3 && (
                                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                                      {feature.desc3}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Card>
                                  </motion.div>
                                );
                              })}
              </div>
           </div>
              </AnimatedSection>
              </section>

          {/* Features Section */}
          <section id="features" ref={featuresRef} className="scroll-mt-20">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Comprehensive Modules
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Explore our integrated modules designed to work seamlessly together

              </p>
                  {/* Key Benefits Grid */}
               <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-20">
                {product.overview.benefits2.map((benefit, index) => {
                  const BenefitIcon = Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<any>;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="min-w-0" // Prevent overflow
                    >
                      <Card className="p-2 h-full hover:shadow-sm transition-all duration-300 border border-gray-200">
                        <div className="text-center">
                          <div className="flex flex-row items-center justify-center mb-1 gap-1">
                            <div className="text-lg font-bold text-gray-900 truncate">
                              {benefit.initialValue}%
                            </div>
                            <BenefitIcon className="w-5 h-5 text-black flex-shrink-0" />
                          </div>
                          <p className="text-gray-600 text-[10px] xs:text-xs leading-tight line-clamp-2 min-h-[2rem] flex items-center justify-center">
                            {benefit.text}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </section>

         
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${product.color}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started with {product.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our team to schedule a personalized demo and see how{" "}
              {product.fullName} can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleRequestDemo}
              >
                Request a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:text-gray-900 transition-colors"
                onClick={handleContactSales}
              >
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Request Demo Form Modal */}
      <RequestDemoForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </div>
  );
};

export default ProductDetail;



// import React, { useState } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import * as Icons from "lucide-react";
// import AnimatedSection from "../components/common/AnimatedSection";
// import Button from "../components/common/Button";
// import { products } from "../data/products";
// import RequestDemoForm from "../components/common/RequestDemoForm";
// import OverviewTab from "../components/Tabs/OverviewTab";
// import FeaturesTab from "../components/Tabs/FeaturesTab";
// import ModulesTab from "../components/Tabs/ModulesTab";

// const ProductDetail: React.FC = () => {
//   const { productId } = useParams<{ productId: string }>();
//   const [activeTab, setActiveTab] = useState("overview");
//   const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

//   const product = products.find((p) => p.id === productId);

//   if (!product) {
//     return <Navigate to="/products" replace />;
//   }

//   const IconComponent = Icons[
//     product.icon as keyof typeof Icons
//   ] as React.ComponentType<any>;

//   const tabs = [
//     { id: "overview", label: "Overview" },
//     { id: "features", label: "Features" },
//     { id: "modules", label: "Modules" },
//   ];

//   const handleRequestDemo = () => {
//     setIsDemoFormOpen(true);
//   };

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section
//         className={`py-20 bg-gradient-to-br ${product.color
//           .replace("from-", "from-")
//           .replace("to-", "to-")}/10`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection>
//               <div
//                 className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-3xl flex items-center justify-center mb-6`}
//               >
//                 <IconComponent className="w-10 h-10 text-white" />
//               </div>

//               <h1 className="text-5xl font-bold text-gray-900 mb-4">
//                 {product.name}
//               </h1>

//               <p className="text-xl text-gray-600 mb-6 font-medium">
//                 {product.fullName}
//               </p>

//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 {product.description}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button size="lg" onClick={handleRequestDemo}>
//                   Request a Demo
//                 </Button>
//                 <Button variant="outline" size="lg">
//                   Download Brochure
//                 </Button>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection direction="right">
//               <div className="relative">
//                 <div
//                   className={`w-full h-96 bg-gradient-to-br ${product.color
//                     .replace("from-", "from-")
//                     .replace("to-", "to-")}/20 rounded-3xl flex items-center justify-center`}
//                 >
//                   <div className="text-center">
//                     <div
//                       className={`w-32 h-32 bg-gradient-to-r ${product.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
//                     >
//                       <IconComponent className="w-16 h-16 text-white" />
//                     </div>
//                     <p className="text-gray-600 font-medium">
//                       {product.fullName}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Navigation */}
//       <div className="sticky top-16 bg-white border-b border-gray-200 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex space-x-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === tab.id
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {activeTab === "overview" && <OverviewTab product={product} />}
//           {activeTab === "features" && <FeaturesTab product={product} />}
//           {activeTab === "modules" && <ModulesTab product={product} />}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <section className={`py-20 bg-gradient-to-r ${product.color}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <AnimatedSection>
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Ready to Get Started with {product.name}?
//             </h2>
//             <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
//               Contact our team to schedule a personalized demo and see how{" "}
//               {product.fullName} can transform your operations.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 variant="secondary"
//                 size="lg"
//                 onClick={handleRequestDemo}
//               >
//                 Schedule Demo
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-white text-white hover:text-gray-900"
//               >
//                 Contact Sales
//               </Button>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Request Demo Form Modal */}
//       <RequestDemoForm
//         isOpen={isDemoFormOpen}
//         onClose={() => setIsDemoFormOpen(false)}
//       />
//     </div>
//   );
// };

// export default ProductDetail;
