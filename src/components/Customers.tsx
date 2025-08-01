import React from "react";
import { motion } from "framer-motion";
import ClientSlider from "./clientSlider";

const CustomersSections: React.FC = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Trusted Partners
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional results
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <div className="flex space-x-16 w-max">
            {/* {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-md flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))} */}
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSections;
