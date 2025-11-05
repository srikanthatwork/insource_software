import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import Card from "../common/Card";

interface Module {
  name: string;
  description: string;
  icon: string;
  features: string[];
}

interface ModulesTabProps {
  product: {
    modules: Module[];
  };
}

const ModulesTab: React.FC<ModulesTabProps> = ({ product }) => {
  return (
    <AnimatedSection>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Modules</h2>
      <div className="space-y-8">
        {product.modules.map((module, index) => {
          const ModuleIcon = Icons[
            module.icon as keyof typeof Icons
          ] as React.ComponentType<any>;
          return (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {module.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-3"
                        >
                          <Icons.CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default ModulesTab;