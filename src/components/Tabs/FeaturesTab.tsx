import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import Card from "../common/Card";

interface Feature {
  title: string;
  description: string;
  desc2?: string;
  icon: string;
}

interface FeaturesTabProps {
  product: {
    features: Feature[];
    color: string;
  };
}

const FeaturesTab: React.FC<FeaturesTabProps> = ({ product }) => {
  return (
    <AnimatedSection>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {product.features.map((feature, index) => {
          const FeatureIcon = Icons[
            feature.icon as keyof typeof Icons
          ] as React.ComponentType<any>;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <FeatureIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                {feature.desc2 && (
                  <p className="text-gray-600 leading-relaxed mt-2">
                    {feature.desc2}
                  </p>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default FeaturesTab;