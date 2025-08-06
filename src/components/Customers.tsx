import React from "react";
import { motion } from "framer-motion";
import ClientSlider from "./clientSlider";

const Customers: React.FC = () => {
  return (
    <section className="py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="flex space-x-16 w-max ">
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
