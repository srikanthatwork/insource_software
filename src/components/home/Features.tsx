import React from "react";
import {
  BarChart3,
  Boxes,
  Brain,
  MapPinned,
  Users2,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <BarChart3 size={36} />,
      title: "End-to-End Visibility",
      description:
        "Custom dashboards track every product, order, and shipment in real time—across regions and warehouses. Data analytics help prevent stockouts and minimize overstock.",
    },
    {
      icon: <Boxes size={36} />,
      title: "Advanced Stock Tracking",
      description:
        "IoT sensors and barcode/RFID scanning assure precise inventory movement. Mobile-first design reduces error rates and manual entry.",
    },
    {
      icon: <Brain size={36} />,
      title: "AI Forecasting & Reorder Alerts",
      description:
        "Predicts future demand using transaction, seasonality, and market trends. Notifies when replenishment is needed and adapts sourcing strategies to disruptions.",
    },
    {
      icon: <MapPinned size={36} />,
      title: "Distribution Scheduling & Route Planning",
      description:
        "AI optimizes delivery paths, cutting costs, enhancing customer satisfaction, and boosting logistics resilience.",
    },
    {
      icon: <Users2 size={36} />,
      title: "Real-Time Vendor and Customer Management",
      description:
        "Live order monitoring, two-way communication portals, supplier analytics, and feedback systems promote deeper relationships and loyalty.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Features
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Empowering operations with AI-driven insights, precision tracking, and real-time visibility.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
