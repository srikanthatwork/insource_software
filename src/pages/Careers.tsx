import React from "react";
import { motion } from "framer-motion";
// import { MapPin, Clock, Briefcase, Send } from "lucide-react";
import AnimatedSection from "../components/common/AnimatedSection";
import Card from "../components/common/Card";
// import Button from "../components/common/Button";
import { careerOptions, careerQuote, whyChooseUs } from "../data/company";
import * as Icons from "lucide-react";
import ContentShowcase from "../components/home/ContentShowcase";
import Resources from "../components/home/Resource/Resources";
import CareerHero from "../components/home/CareerHero";
import { CareerSection } from '../components/AnimatedSection/CareerSection';
import { CareerOption } from '../data/career';

const Careers: React.FC = () => {
  const careerQuote = "Join us in building the future of technology. At Insource, we don't just offer jobs - we offer careers that make a difference.";

  const careerOptions: CareerOption[] = [
    {
      title: "Software Development",
      description: "Work with cutting-edge technologies and build scalable solutions that impact millions of users worldwide.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Science",
      description: "Transform data into insights and drive business decisions with advanced analytics and machine learning.",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Product Management",
      description: "Lead product strategy and collaborate with cross-functional teams to deliver exceptional user experiences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "UX/UI Design",
      description: "Create beautiful, intuitive interfaces that solve real user problems and enhance digital experiences.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps Engineering",
      description: "Build and maintain robust infrastructure that ensures reliability, scalability, and security.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Quality Assurance",
      description: "Ensure product excellence through comprehensive testing strategies and quality processes.",
      color: "from-yellow-500 to-orange-500"
    }
  ];
  // const [selectedJob, setSelectedJob] = useState<number | null>(null);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   position: "",
  //   resume: null as File | null,
  //   coverLetter: "",
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log("Application submitted:", formData);
  // };

  return (
    <div className="pt-16">
      <CareerHero/>
      <Resources/>
      <ContentShowcase/>
     {/* <CareerSection 
        careerQuote={careerQuote}
        careerOptions={careerOptions}
      /> */}
      

    

      {/* Job Openings */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Openings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with us
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <AnimatedSection key={job.id} delay={index * 0.1}>
                <Card 
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedJob === job.id ? 180 : 0 }}
                      className="ml-4"
                    >
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>

                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {job.description}
                      </p>
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData(prev => ({ ...prev, position: job.title }));
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Apply Now
                      </Button>
                    </motion.div>
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      {/* <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apply for a Position
            </h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Submit your application below.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" icon={Send} iconPosition="right">
                    Submit Application
                  </Button>
                </div>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </section> */}

      {/* events */}
     
    </div>
  );
};

export default Careers;
