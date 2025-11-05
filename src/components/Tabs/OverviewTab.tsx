import React from "react";
import * as Icons from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import Card from "../common/Card";

interface OverviewTabProps {
  product: {
    description: string;
  };
}

const OverviewTab: React.FC<OverviewTabProps> = ({ product }) => {
  return (
    <AnimatedSection>
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Product Overview
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          {product.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">Improved hiring</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">Engagement Retention</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">Administrative Efficiency</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">Global Compliance</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Technical Specs
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">Cloud-based architecture</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">Mobile responsive design</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">
                  Real-time data synchronization
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-gray-600">Enterprise-grade security</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OverviewTab;