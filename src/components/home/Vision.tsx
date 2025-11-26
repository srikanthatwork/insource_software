import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Zap, Shield, Award, Globe } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import Card from "../common/Card";
import { companyInfo, awards } from "../../data/company";

const Vision: React.FC = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize healthcare through innovative digital solutions that improve patient outcomes and operational efficiency.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Diagnostics Management",
      description:
        "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Retail Store App",
      description:
        "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Distribution ERP",
      description:
        "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-30 blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      

        {/* Awards Section */}
        {/* <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Recognition &{" "}
              <span className="animate-gradient-text">Awards</span>
            </h3>
            <p className="text-xl text-gray-600">
              Trusted by industry leaders and recognized for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 text-center hover-lift ">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {award.title}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    {award.organization}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {award.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {award.year}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection> */}

        {/* Global Reach */}
        <AnimatedSection>
          <div className="mt-20 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Globe className="w-full h-full" />
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                Serving  organizations globally through <br /> innovative technology solutions
              </h2>
             

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {/* {companyInfo.clients} */}
                    <div className="text-4xl font-bold mb-2">10000 +</div>

                  </div>
                  <div className="text-blue-100"> Beds</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50 +</div>
                  <div className="text-blue-100"> Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {companyInfo.countries} +
                  </div>
                  <div className="text-blue-100">Users</div>
                </div>
               
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Vision;
