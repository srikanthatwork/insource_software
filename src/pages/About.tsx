import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import AnimatedSection from "../components/common/AnimatedSection";
import Card from "../components/common/Card";
import {
  companyInfo,
  whyChooseUs,
  // teamMembers,
  testimonials,
} from "../data/company";
import CustomersSections from "../components/customers";

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 blur-xl"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 0.8, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-40 blur-xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            >
              {/* <Icons.Sparkles className="w-4 h-4 mr-2" /> */}
              About Us
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Provide Best{" "}
              <span className="animate-gradient-text">Business Solutions</span>{" "}
              For You
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {companyInfo.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="animate-gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in {companyInfo.foundedYear} with a vision to
                  transform healthcare through technology, Insource Software has
                  been at the forefront of healthcare digitization for over a
                  decade. We understand the unique challenges faced by
                  healthcare organizations and have developed comprehensive
                  solutions that address these pain points.
                </p>
                <p>
                  Our team of healthcare technology experts, software engineers,
                  and industry specialists work together to create solutions
                  that not only meet current needs but anticipate future
                  requirements. We believe in building long-term partnerships
                  with our clients, supporting them through every step of their
                  digital transformation journey.
                </p>
                <p>
                  Today, we serve over {companyInfo.clients} healthcare
                  facilities worldwide, from small clinics to large hospital
                  networks, helping them improve patient outcomes while reducing
                  operational costs and complexity. Our solutions have processed
                  millions of patient records and facilitated countless
                  healthcare interactions.
                </p>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {companyInfo.foundedYear}
                  </div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {companyInfo.clients}
                  </div>
                  <div className="text-sm text-gray-600">+ Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {companyInfo.countries}
                  </div>
                  <div className="text-sm text-gray-600">+ Experts Staffs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {companyInfo.employees}
                  </div>
                  <div className="text-sm text-gray-600">+ Win Awards</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-green-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated background elements */}
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-32 h-32 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    >
                      <Icons.Heart className="w-16 h-16 text-white animate-pulse" />
                    </motion.div>
                    <p className="text-gray-600 font-medium">
                      Healthcare Innovation
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="animate-gradient-text">Insource?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep healthcare industry knowledge with cutting-edge
              technology to deliver solutions that truly make a difference
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = Icons[
                item.icon as keyof typeof Icons
              ] as React.ComponentType<any>;

              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <Card className="p-8 text-center h-full hover-lift">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="animate-gradient-text">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation in healthcare technology
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <Card className="p-6 text-center hover-lift">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mb-4"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-medium mb-2">
                    {member.position}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="animate-gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by healthcare professionals worldwide
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <Card className="p-8 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icons.Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    {/* <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    /> */}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      {/* <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div> */}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-cyan-50 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icons.Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize healthcare delivery through innovative
                  digital solutions that empower healthcare professionals,
                  improve patient outcomes, and create more efficient healthcare
                  systems worldwide. We strive to make healthcare technology
                  accessible, intuitive, and impactful.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-emerald-50 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Icons.Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {companyInfo.vision}. We envision a future where technology
                  seamlessly integrates with healthcare to create better
                  experiences for both providers and patients, ultimately
                  leading to improved health outcomes for communities worldwide.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* <section> */}
        <CustomersSections />
      {/* </section> */}
    </div>
  );
};

export default About;
