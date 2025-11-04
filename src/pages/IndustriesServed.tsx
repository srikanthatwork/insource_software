// import React from "react";
// import {
//   Building2,
//   Users,
//   Truck,
//   Pill,
//   Store,
//   Factory,
// } from "lucide-react";

// interface Industry {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   color: string;
//   hoverColor: string;
// }

// const IndustriesServed: React.FC = () => {
//   const industries: Industry[] = [
//     {
//       icon: <Building2 size={36} />,
//       title: "Hospitals & Clinics",
//       description:
//         "Digitize patient records, billing, and operations for faster, more accurate care. Improve efficiency and enhance patient satisfaction.",
//       color: "text-blue-500",
//       hoverColor: "hover:bg-blue-50",
//     },
//     {
//       icon: <Store size={36} />,
//       title: "Distributors & Wholesale",
//       description:
//         "Automate orders, manage inventory in real time, and streamline logistics for better coordination and profitability.",
//       color: "text-amber-500",
//       hoverColor: "hover:bg-amber-50",
//     },
//     {
//       icon: <Users size={36} />,
//       title: "HR Workforce Management",
//       description:
//         "Simplify hiring, payroll, and performance tracking with smart tools that boost productivity and ensure compliance.",
//       color: "text-green-500",
//       hoverColor: "hover:bg-green-50",
//     },
//     {
//       icon: <Truck size={36} />,
//       title: "Field Service & Sales",
//       description:
//         "Equip field teams with mobile tools for tracking visits, managing leads, and improving customer engagement.",
//       color: "text-indigo-500",
//       hoverColor: "hover:bg-indigo-50",
//     },
//     {
//       icon: <Pill size={36} />,
//       title: "Pharma & Medical Devices",
//       description:
//         "Ensure product traceability, regulatory compliance, and faster distribution across healthcare networks.",
//       color: "text-pink-500",
//       hoverColor: "hover:bg-pink-50",
//     },
//     {
//       icon: <Factory size={36} />,
//       title: "Retail, Manufacturing & Services",
//       description:
//         "Enhance operations with real-time analytics, stock automation, and optimized workflows for better outcomes.",
//       color: "text-yellow-500",
//       hoverColor: "hover:bg-yellow-50",
//     },
//   ];

//   return (
//     <section className="bg-white py-20 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//         <span className="animate-gradient-text"> Industries Served</span>  
//         </h2>
//         <p className="text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
//           Empowering businesses across diverse sectors with smart, scalable, and efficient
//           solutions that simplify operations, improve decision-making, and deliver measurable growth.
//         </p>

//         {/* Industry Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {industries.map((item, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${item.hoverColor}`}
//             >
//               <div className={`${item.color} mb-4`}>{item.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesServed;
