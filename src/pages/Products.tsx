import React from "react";
import { useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import AnimatedSection from "../components/common/AnimatedSection";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { products } from "../data/products";

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive healthcare management solutions designed to
              streamline operations, enhance patient care, and drive digital
              transformation in healthcare organizations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const IconComponent = Icons[
                product.icon as keyof typeof Icons
              ] as React.ComponentType<any>;

              return (
                <AnimatedSection key={product.id} delay={index * 0.2}>
                  <Card
                    className="p-8 h-full group cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mb-4 font-medium">
                      {product.fullName}
                    </p>

                    <p className="text-gray-500 leading-relaxed mb-6">
                      {product.shortDescription}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-3 mb-8">
                      {product.features.slice(0, 3).map((feature) => {
                        const FeatureIcon = Icons[
                          feature.icon as keyof typeof Icons
                        ] as React.ComponentType<any>;
                        return (
                          <div
                            key={feature.title}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <FeatureIcon className="w-4 h-4 text-gray-600" />
                            </div>
                            <span className="text-sm text-gray-600">
                              {feature.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent"
                      onClick={(e: any) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                    >
                      Learn More
                    </Button>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get in touch with our experts to learn how our solutions can be
              customized for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/contact")}
              >
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => navigate("/contact")}
              >
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;
