// import image1 from "../components/assets/hims2.jpg";
// import image2 from "../components/assets/hrms.jpg";
// import image3 from "../components/assets/hims.jpg";

// export interface Product {
//   bgImage: any;
//   id: string;
//   name: string;
//   fullName: string;
//   description: string;
//   shortDescription: string;
//   icon: string;
//   color: string;
//   features: ProductFeature[];
//   modules: ProductModule[];
//   benefits: string[];
//   integrations: string[];
//   pricing: {
//     starter: string;
//     professional: string;
//     enterprise: string;
//   };
//   demoVideo?: string;
//   brochure?: string;
  
// }

// export interface ProductFeature {
//   desc3: string;
//   desc2: string;
//   title: string;
//   description: string;
//   icon: string;
// }

// export interface ProductModule {
//   name: string;
//   description: string;
//   icon: string;
//   features: string[];
//   image?: string;
// }

// export const products: Product[] = [
//   {
//     id: "hmsehr",
//     name: "Health Plus",
//     fullName: "Hospital Management Electronic Health Records",
//     description:
// "Insource HMSEHR transforms healthcare operations with a unified, cloud-based solution for hospitals, clinics, and diagnostic centers.It seamlessly integrates clinical, administrative, and financial modules under one intelligent system — designed with HL7/FHIR standards and enhanced with AI-driven analytics for better patient outcomes and compliance.",   
// shortDescription:
//       "Advanced Healthcare Platform for Tomorrows Providers",
//     icon: "Building2",
//     color: "from-blue-400 to-cyan-500",
//     bgImage: image1,
//     benefits: [
//       "Reduce administrative costs by up to 40%",
//       "Improve patient satisfaction scores by 35%",
//       "Decrease medication errors by 60%",
//       "Streamline discharge process by 50%",
//       "Enhance staff productivity by 45%",
//     ],
//     integrations: [
//       "Epic",
//       "Cerner",
//       "Allscripts",
//       "MEDITECH",
//       "NextGen",
//       "Laboratory Systems",
//       "Radiology PACS",
//       "Pharmacy Systems",
//       "Insurance Providers",
//       "Government Health Databases",
//     ],
//     pricing: {
//       starter: "$299/month",
//       professional: "$599/month",
//       enterprise: "Custom pricing",
//     },
//     features: [
//       {
//         title: "Unified Patient Records ",
//         description:
//           "• Centralizes patient history, demographics, labs, and prescriptions in one secure, interoperable platform. Real-time, multilingual access enhances provider decision-making and lowers risk of medical errors. ",
//         desc2:
//           "•	Competitors often struggle with deep interoperability—Insource excels with dynamic AI validation and global compliance.",
//         desc3:
//           "",
//         icon: "UserPlus",
//       },
//       {
//         title: "AI-Powered Clinical Decision Support",
//         description:
//           "•	Leverages advanced machine learning on historical data to predict diagnoses, recommend treatments, and anticipate complications. Tailors protocols to local and multinational standards.",
//         desc2:
//           "",
//         desc3:"",      
//         icon: "FileText",
//       },
//       {
//         title: "	Seamless Integration",
//         description:
//           "• Connects instantly with radiology, labs, and specialty networks using HL7/FHIR APIs, eliminating manual work and errors.",
//         desc2:
//           "",
//         desc3: "",
//         icon: "CreditCard",
//       },
//       {
//         title: "Personalized Engagement",
//         description:
//           "• Multilingual portals and apps empower patients to interact with providers, access education, and schedule appointments—driving satisfaction and reducing missed visits.",
//         desc2:
//           "",
//         desc3: "",
//         icon: "Package",
//       },
//       {
//         title: "Population Health Analytics",
//         description:
//           "• Aggregates cohort data for proactive asset management, risk stratification, and compliance reporting.",
//         desc2:
//           "",
//         desc3:
//           "",
//         icon: "Brain",
//       },
//       {
//         title: "Fully Paperless Across All Departments",
//         description:
//           "•	Digital central medical records management, accessible hospital-wide.",
//         desc2:
//           "",
//         desc3:
//           "",
//         icon: "BarChart3",
//       },
//     ],
//     modules: [
//       {
//         name: "Patient Administration System (PAS) ",
//         description:
//           "Centralized management for registration, admission, discharge, and transfer.",
//         icon: "UserPlus",
//         image:
//           "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//            "Minimizes manual data entry and improves operational transparency.",
     
//         ],
//       },
//       {
//         name: "Electronic Medical Records (EMR)",
//         description:
//           "Comprehensive digital records for every patient encounter.",
//         icon: "Stethoscope",
//         image:
//           "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//       " Provides 360° visibility into medical history and real-time updates.",
       
//     ],
//       },
//       {
//         name: "Laboratory Information System (LIS)",
//         description:
//           "Fully automated lab workflow integrated with analyzers.",
//         icon: "Scan",
//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//     "  Improves accuracy, reduces delays, and ensures lab compliance.",

//         ],
//       },
//       {
//         name: "Radiology Information System (RIS) + PACS",
//         description:
//           "Image archiving and reporting in one platform.",
//         icon: "Pill",
//         image:
//           "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//         "  Enables instant image access and paperless reporting for radiologists.",
//         ],
//       },
//       {
//         name: "Pharmacy & Inventory",
//         description: "SManages drug inventory, dispensing, and reordering.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Tracks stock in real-time and reduces expiry-based losses.",
          
//         ],
//       },
//         {
//         name: "Billing & Financial Management",
//         description: "Supports multi-department, package, and insurance billing.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Simplifies complex billing workflows with real-time reconciliation.",
          
//         ],
//       },
//         {
//         name: "Doctor & Nursing Module",
//         description: "Digital prescription, order management, and clinical notes.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Reduces errors, automates record-keeping, and boosts efficiency.",
//         ],
//       },
//         {
//         name: "Telemedicine & Patient Portal",
//         description: "Video consultation, chat, and reports access from anywhere.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Connects doctors and patients virtually, expanding reach and convenience.",
          
//         ],
//       },
//         {
//         name: "Analytics Dashboard",
//         description: "Visualize revenue, utilization, and patient trends.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Enables data-driven hospital management.",
//         ],
//       }
//     ],
//   },
//   {
//     id: "hcm",
//     name: "Talent Plus",
//     fullName: "Human Capital Management ",
//     description:
//     "Insource HCM simplifies HR processes through automation, analytics, and AI-powered insights.It helps organizations streamline hiring, payroll, attendance, and performance in one centralized platform — optimized for global, multi-location teams.",
//     shortDescription:
//       "Global HR Transformation for Modern Workforces",
//     icon: "Users",
//     bgImage: image2,
//     color: "from-cyan-500 to-emerald-500",
//     benefits: [
//       "Reduce HR administrative time by 60%",
//       "Improve employee satisfaction by 45%",
//       "Decrease payroll processing time by 70%",
//       "Enhance recruitment efficiency by 50%",
//       "Increase performance management effectiveness by 40%",
//     ],
//     integrations: [
//       "ADP",
//       "Workday",
//       "BambooHR",
//       "Slack",
//       "Microsoft Teams",
//       "LinkedIn",
//       "Indeed",
//       "Glassdoor",
//       "QuickBooks",
//       "SAP",
//     ],
//     pricing: {
//       starter: "$15/employee/month",
//       professional: "$25/employee/month",
//       enterprise: "Custom pricing",
//     },
//     features: [
//       {
//         title: "Centralized Profile Management & Onboarding",
//         description:
//           "• Digital forms, automated workflows, multi-country regulatory modules, and self-service portals for employees. Onboarding experience is globally localized, robustly compliant, and analytics-driven.",
//         icon: "User",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "Automated Payroll & Benefits Administration",
//         description:
//           "• AI algorithms support payroll across jurisdictions, minimizing errors and compliance risks. Seamless integrations for multinational businesses set Insource apart from regional competitors.",
//         icon: "Calculator",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "Remote Attendance Logging & Geo-Location/Geo-Fencing",
//         description:
//           "• Employees log attendance remotely via GPS-enabled mobile apps. Geo-fencing restricts check-in/out to authorized boundaries (office, client site, remote work radius). Real-time location mapping and photo/selfie attendance options ensure accountability, prevent fraud, and simplify HR audits.",
//         icon: "Clock",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "AI-Driven Performance Analytics",
//         description:
//           " • Combines feedback, goal setting, predictive retention and attrition insights, custom KPIs, and actionable reporting for managers.",
//         icon: "Target",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "	Predictive Engagement & Retention",
//         description:
//           "• AI scans surveys, activities, and signals to flag at-risk staff and recommend tailored interventions before disengagement occurs.",
//         icon: "GraduationCap",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "	Self-Service & Compliance",
//         description:
//           " • Employees update data, view stubs, access policies, and enroll in company programs from any device. Automatic compliance tracker supports global regulations.",
//         icon: "BarChart3",
//         desc3: "",
//         desc2: "",
//       },
//     ],
//     modules: [
//       {
//         name: "Recruitment & Onboarding",
//         description:
//           "Smart hiring workflow with resume parsing and automated offer management.",
//         icon: "User",
//         image:
//           "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//          "Speeds up recruitment and ensures a seamless onboarding experience.",
         
//         ],
//       },
//       {
//         name: "Time & Attendance Management",
//         description:
//           "Biometric and GPS-enabled attendance tracking.",
//         icon: "Clock",
//         image:
//           "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Eliminates timesheet errors and ensures accuracy.",
          
//         ],
//       },
//       {
//         name: "Leave & Shift Scheduling",
//         description:
//           "Dynamic scheduling and automated leave balance tracking.",
//         icon: "Calculator",
//         image:
//           "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Reduces conflicts and improves team productivity.",  
//         ]
        
//       },
//       {
//         name: "Payroll & Statutory Compliance",
//         description:
//           "Handles payroll, tax deductions, and statutory filings (PF, ESI, TDS).",
//         icon: "UserPlus",
//         image:
//           "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//            "Ensures compliance across multiple regions.",
//         ],
//       },
//       {
//         name: "Performance Management",
//         description:
//           "Goal tracking, appraisal cycles, and 360° feedback.",
//         icon: "Target",
//         image:
//           "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Encourages data-backed performance reviews.",
        
//         ],
//       },
//       {
//         name: "LMS – Learning & Development",
//         description:
//           "Personalized learning paths with certifications and tracking.",
//         icon: "Target",
//         image:
//           "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Enhances employee growth and retention.",
        
//         ],
//       },
//       {
//         name: "Analytics Dashboard",
//         description:
//           "Real-time workforce insights and retention analysis.",
//         icon: "Target",
//         image:
//           "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Empowers management with strategic HR decisions.",
        
//         ],
//       },
      
//     ],
//   },
//   {
//     id: "idm",
//     name: "Inventory Plus",
//     fullName: "Inventory Distribution Management",
//     description:
//     "Insource IDM enables intelligent management of supply chains, warehouses, and distribution networks.It combines AI-driven forecasting, vendor management, and IoT-based tracking for complete control over logistics and inventory lifecycles.",
//     shortDescription:
//       "Smart Inventory Control for Distributors Worldwide",
//     icon: "Boxes",
//     bgImage: image3,
//     color: "from-orange-500 to-red-500",
//     benefits: [
//       "Reduce sample processing time by 50%",
//       "Improve result accuracy by 99.8%",
//       "Decrease turnaround time by 40%",
//       "Enhance quality control by 60%",
//       "Increase laboratory efficiency by 55%",
//     ],
//     integrations: [
//       "Roche",
//       "Abbott",
//       "Siemens",
//       "Beckman Coulter",
//       "Thermo Fisher",
//       "Epic",
//       "Cerner",
//       "HL7 FHIR",
//       "ASTM",
//       "LIS Systems",
//     ],
//     pricing: {
//       starter: "$199/month",
//       professional: "$399/month",
//       enterprise: "Custom pricing",
//     },
//     features: [
//       {
//         title: "End-to-End Visibility",
//         description:
//           "Custom dashboards track every product, order, and shipment in real time—across regions and warehouses. Data analytics help prevent stockouts and minimize overstock.",
//         icon: "TestTube",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "	Advanced Stock Tracking",
//         description:
//           "IoT sensors and barcode/RFID scanning assure precise inventory movement. Mobile-first design reduces error rates and manual entry.",
//         icon: "CheckCircle",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "	AI Forecasting & Reorder Alerts",
//         description:
//           "Advanced reporting with data analytics and insights for laboratory optimization",
//         icon: "BarChart3",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "	Distribution Scheduling & Route Planning",
//         description:
//           "Seamless integration with laboratory instruments and equipment with bidirectional data flow",
//         icon: "Settings",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "Workflow Automation",
//         description:
//           "Automated laboratory workflows with intelligent task routing and prioritization",
//         icon: "Workflow",
//         desc3: "",
//         desc2: "",
//       },
//       {
//         title: "Compliance Management",
//         description:
//           "Regulatory compliance management with audit trails and documentation",
//         icon: "FileCheck",
//         desc3: "",
//         desc2: "",
//       },
//     ],
//     modules: [
//       {
//         name: "Procurement Management",
//         description:
//           "Auto vendor selection, purchase requests, and approvals.",
//         icon: "TestTube",
//         image:
//           "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Improves purchasing efficiency and reduces cost leakage.",
      
//    ],
//       },
//       {
//         name: "Warehouse & Stock Control",
//         description:
//           "Barcode-enabled storage and movement tracking.",
//         icon: "FlaskConical",
//         image:
//           "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//          "Reduces shrinkage and improves order accuracy.",
//         ],
//       },
//       {
//         name: "Demand Forecasting",
//         description:
//           "AI models predict stock needs based on historical data.",
//         icon: "Shield",
//         image:
//           "https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//            "Minimizes overstock and stock-outs.",
//         ],
//       },
//       {
//         name: "Vendor & Supplier Management",
//         description:
//           "End-to-end tracking of supplier performance.",
//         icon: "BarChart3",
//         image:
//           "https://images.pexels.com/photos/3825546/pexels-photo-3825546.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//          "Ensures reliable sourcing and quality control.",  
//         ],
//       },
//       {
//         name: "Distribution & Logistics Tracking",
//         description:
//           "Route planning and delivery monitoring using IoT.",
//         icon: "Settings",
//         image:
//           "https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Cuts delivery time and improves transparency.",
        
//         ],
//       },
//        {
//         name: "Inventory Finance & Reconciliation",
//         description:
//           "Integrated accounting and payment modules.",
//         icon: "Settings",
//         image:
//           "https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Ensures end-to-end traceability and accountability.",
        
//         ],
//       },
//     ],
//   },
//   {
//     id: "ffa",
//     name: "Fieldera",
//     fullName: "	Field Force Application",
//     description:
// "Insource Fieldera connects your on-ground workforce with real-time updates, mobile accessibility, and powerful analytics.From field service agents to sales executives, it ensures accountability, optimized routing, and faster customer resolutions through AI-enabled workflows.",
//     shortDescription:
//       "Empowering Remote Sales & Service Teams for Maximum Impact",
//     icon: "Building2",
//     color: "from-blue-400 to-cyan-500",
//     bgImage: image1,
//     benefits: [
//       "Reduce administrative costs by up to 40%",
//       "Improve patient satisfaction scores by 35%",
//       "Decrease medication errors by 60%",
//       "Streamline discharge process by 50%",
//       "Enhance staff productivity by 45%",
//     ],
//     integrations: [
//       "Epic",
//       "Cerner",
//       "Allscripts",
//       "MEDITECH",
//       "NextGen",
//       "Laboratory Systems",
//       "Radiology PACS",
//       "Pharmacy Systems",
//       "Insurance Providers",
//       "Government Health Databases",
//     ],
//     pricing: {
//       starter: "$299/month",
//       professional: "$599/month",
//       enterprise: "Custom pricing",
//     },
//     features: [
//       {
//         title: "Mobile Coordination & Geo-Fencing:",
//         description:
//           " • Teams get instant assignment updates on any device. Geo-fencing ensures attendance and task logging only within approved zones—verify with GPS, geotagging, and selfie options.",
//         desc2:
//           "",
//         desc3:
//           "",
//         icon: "UserPlus",
//       },
//       {
//         title: "Remote Attendance Logging",
//         description:
//           "• Field staff mark attendance from any client site or remote location; geo-tagged, time-stamped, and supported by offline sync.	",
//         desc2:
//           "",
//         desc3:
//           "",
//         icon: "FileText",
//       },
//       {
//         title: "AI-Powered Lead Prioritization & Route Planning",
//         description:
//           "•	Smart lead scoring and optimal route planning using maps, live traffic, and client priority maximize conversions and minimize travel.",
//         desc2:
//           "",
//         desc3: "",
//         icon: "CreditCard",
//       },
//       {
//         title: "	Task Scheduling & Work Automation",
//         description:
//           "• Digitized, automated job assignment, feedback loops, reporting, and workforce tracking. Designed for frontline mobile staff.",
//         desc2:
//           "",
//         desc3: "",
//         icon: "Package",
//       },
//       {
//         title: "Customer Feedback, Reporting, and Sync",
//         description:
//           "•	Real-time feedback and reporting, even in low-connectivity regions. Data syncs automatically when connection is available.",
//         desc2:
//           "",
//         desc3:
//           "",
//         icon: "Brain",
//       },
//       {
//         title: "Performance Analytics",
//         description:
//           "•	Digital central medical records management, accessible hospital-wide.",
//         desc2:
//           "•	Secure, role-based access and robust audit trails ensure regulatory compliance.",
//         desc3:
//           "Dashboards for productivity, customer engagement, visit coverage, and efficiency.",
//         icon: "BarChart3",
//       },
//     ],
//     modules: [
//       {
//         name: "Task Assignment & Monitoring",
//         description:
//           "Assign, prioritize, and track tasks live.",
//         icon: "UserPlus",
//         image:
//           "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Improves productivity and SLA compliance.",
//         ],
//       },
//       {
//         name: "Geo-Attendance & Tracking",
//         description:
//           "GPS-based employee location tracking and attendance.",
//         icon: "Stethoscope",
//         image:
//           "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Prevents proxy attendance and enhances reliability.",
//         ],
//       },
//       {
//         name: "Route Optimization",
//         description:
//           "AI-driven route recommendations for field visits.",
//         icon: "Scan",
//         image:
//           "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Reduces fuel costs and maximizes coverage.",
         
//         ],
//       },
//       {
//         name: "Visit Management & CRM",
//         description:
//           "End-to-end customer visit tracking and follow-up reminders.",
//         icon: "Pill",
//         image:
//           "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Boosts customer satisfaction and conversion rates.",
//         ],
//       },
//       {
//         name: "Expense & Claim Automation",
//         description: "Mobile-based claim submission and approvals.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Accelerates reimbursement and ensures accuracy.",
        
//         ],
//       },
//        {
//         name: "Offline Access Mode",
//         description: "Continue operations without internet and sync later.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Ideal for remote or low-network regions.",
        
//         ],
//       },
//        {
//         name: "Field Analytics Dashboard",
//         description: "Monitor performance metrics in real-time.",
//         icon: "Ambulance",
//         image:
//           "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
//         features: [
//           "Helps leadership identify trends and bottlenecks.",
//         ],
//       },
//     ],
//   },
 
// ];

// export const productComparisons = {
//   hims: {
//     competitors: ["Epic", "Cerner", "MEDITECH"],
//     advantages: [
//       "50% faster implementation",
//       "40% lower total cost of ownership",
//       "Superior user experience rating",
//       "24/7 dedicated support",
//     ],
//   },
//   hrms: {
//     competitors: ["Workday", "ADP", "BambooHR"],
//     advantages: [
//       "More affordable pricing",
//       "Better customization options",
//       "Faster deployment time",
//       "Local support team",
//     ],
//   },
//   lims: {
//     competitors: ["LabWare", "Thermo Fisher", "Abbott Informatics"],
//     advantages: [
//       "Higher accuracy rates",
//       "Better instrument integration",
//       "More intuitive interface",
//       "Comprehensive training program",
//     ],
//   },
// };

import image1 from "../components/assets/hims2.jpg";
import image2 from "../components/assets/hrms.jpg";
import image3 from "../components/assets/hims.jpg";

export interface Product {
  bgImage: any;
  id: string;
  name: string;
  fullName: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  features: ProductFeature[];
  modules: ProductModule[];
  benefits: string[];
  integrations: string[];
  overview: {
    benefits: string[];
    technicalSpecs: string[];
  };
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  demoVideo?: string;
  brochure?: string;
}

export interface ProductFeature {
  desc3: string;
  desc2: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProductModule {
  name: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export const products: Product[] = [
  {
    id: "hmsehr",
    name: "Health Plus",
    fullName: "Hospital Management Electronic Health Records",
    description:
"Insource HMSEHR transforms healthcare operations with a unified, cloud-based solution for hospitals, clinics, and diagnostic centers.It seamlessly integrates clinical, administrative, and financial modules under one intelligent system — designed with HL7/FHIR standards and enhanced with AI-driven analytics for better patient outcomes and compliance.",   
shortDescription:
      "Advanced Healthcare Platform for Tomorrows Providers",
    icon: "Heart",
    color: "from-blue-400 to-cyan-500",
    bgImage: image1,
    overview: {
      benefits: [
        "100% Paperless Operations",
        "Automated Clinical Workflows", 
        "Real-Time Patient Data Access",
        "Improved Compliance & Accuracy",
        "Enhanced Doctor–Patient Communication",
        "Reduce administrative costs by up to 40%",
        "Improve patient satisfaction scores by 35%",
        "Decrease medication errors by 60%",
        "Streamline discharge process by 50%",
        "Enhance staff productivity by 45%",
      ],
      technicalSpecs: [
        "Cloud-based scalable architecture",
        "Mobile-first responsive design", 
        "Real-time data synchronization",
        "Enterprise-grade security protocols",
        "HL7/FHIR interoperability standards",
        "AI-powered clinical decision support"
      ]
    },
    benefits: [
      "Reduce administrative costs by up to 40%",
      "Improve patient satisfaction scores by 35%",
      "Decrease medication errors by 60%",
      "Streamline discharge process by 50%",
      "Enhance staff productivity by 45%",
    ],
    integrations: [
      "Epic",
      "Cerner",
      "Allscripts",
      "MEDITECH",
      "NextGen",
      "Laboratory Systems",
      "Radiology PACS",
      "Pharmacy Systems",
      "Insurance Providers",
      "Government Health Databases",
    ],
    pricing: {
      starter: "$299/month",
      professional: "$599/month",
      enterprise: "Custom pricing",
    },
    features: [
      {
        title: "Unified Patient Records ",
        description:
          "• Centralizes patient history, demographics, labs, and prescriptions in one secure, interoperable platform. Real-time, multilingual access enhances provider decision-making and lowers risk of medical errors. ",
        desc2:
          "•	Competitors often struggle with deep interoperability—Insource excels with dynamic AI validation and global compliance.",
        desc3:
          "",
        icon: "FileText",
      },
      {
        title: "AI-Powered Clinical Decision Support",
        description:
          "•	Leverages advanced machine learning on historical data to predict diagnoses, recommend treatments, and anticipate complications. Tailors protocols to local and multinational standards.",
        desc2:
          "",
        desc3:"",      
        icon: "Brain",
      },
      {
        title: "	Seamless Integration",
        description:
          "• Connects instantly with radiology, labs, and specialty networks using HL7/FHIR APIs, eliminating manual work and errors.",
        desc2:
          "",
        desc3: "",
        icon: "Link",
      },
      {
        title: "Personalized Engagement",
        description:
          "• Multilingual portals and apps empower patients to interact with providers, access education, and schedule appointments—driving satisfaction and reducing missed visits.",
        desc2:
          "",
        desc3: "",
        icon: "Users",
      },
      {
        title: "Population Health Analytics",
        description:
          "• Aggregates cohort data for proactive asset management, risk stratification, and compliance reporting.",
        desc2:
          "",
        desc3:
          "",
        icon: "BarChart3",
      },
      {
        title: "Fully Paperless Across All Departments",
        description:
          "•	Digital central medical records management, accessible hospital-wide.",
        desc2:
          "",
        desc3:
          "",
        icon: "FileCheck",
      },
    ],
    modules: [
      {
        name: "Patient Administration System (PAS) ",
        description:
          "Centralized management for registration, admission, discharge, and transfer.",
        icon: "UserCheck",
        image:
          "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
           "Minimizes manual data entry and improves operational transparency.",
        ],
      },
      {
        name: "Electronic Medical Records (EMR)",
        description:
          "Comprehensive digital records for every patient encounter.",
        icon: "FileText",
        image:
          "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Provides 360° visibility into medical history and real-time updates.",
        ],
      },
      {
        name: "Laboratory Information System (LIS)",
        description:
          "Fully automated lab workflow integrated with analyzers.",
        icon: "FlaskConical",
        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Improves accuracy, reduces delays, and ensures lab compliance.",
        ],
      },
      {
        name: "Radiology Information System (RIS) + PACS",
        description:
          "Image archiving and reporting in one platform.",
        icon: "Scan",
        image:
          "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Enables instant image access and paperless reporting for radiologists.",
        ],
      },
      {
        name: "Pharmacy & Inventory",
        description: "Manages drug inventory, dispensing, and reordering.",
        icon: "Pill",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Tracks stock in real-time and reduces expiry-based losses.",
        ],
      },
      {
        name: "Billing & Financial Management",
        description: "Supports multi-department, package, and insurance billing.",
        icon: "CreditCard",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Simplifies complex billing workflows with real-time reconciliation.",
        ],
      },
      {
        name: "Doctor & Nursing Module",
        description: "Digital prescription, order management, and clinical notes.",
        icon: "Stethoscope",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Reduces errors, automates record-keeping, and boosts efficiency.",
        ],
      },
      {
        name: "Telemedicine & Patient Portal",
        description: "Video consultation, chat, and reports access from anywhere.",
        icon: "Video",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Connects doctors and patients virtually, expanding reach and convenience.",
        ],
      },
      {
        name: "Analytics Dashboard",
        description: "Visualize revenue, utilization, and patient trends.",
        icon: "BarChart3",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Enables data-driven hospital management.",
        ],
      }
    ],
  },
  {
    id: "hcm",
    name: "Talent Plus",
    fullName: "Human Capital Management ",
    description:
    "Insource HCM simplifies HR processes through automation, analytics, and AI-powered insights.It helps organizations streamline hiring, payroll, attendance, and performance in one centralized platform — optimized for global, multi-location teams.",
    shortDescription:
      "Global HR Transformation for Modern Workforces",
    icon: "Users",
    bgImage: image2,
    color: "from-cyan-500 to-emerald-500",
    overview: {
      benefits: [
        "Real-time HR insights & dashboards",
        "Increased employee retention",
        "24/7 accessibility through mobile app", 
        "Statutory & labor law compliance",
        "Seamless payroll integration",
        "Reduce HR administrative time by 60%",
        "Improve employee satisfaction by 45%", 
        "Decrease payroll processing time by 70%",
        "Enhance recruitment efficiency by 50%",
        "Increase performance management effectiveness by 40%",
      ],
      technicalSpecs: [
        "Cloud-native microservices architecture",
        "Mobile-first responsive platform",
        "Real-time analytics and reporting",
        "Enterprise-grade security with SOC 2 compliance",
        "Multi-country payroll processing engine",
        "AI-powered predictive analytics"
      ]
    },
    benefits: [
      "Reduce HR administrative time by 60%",
      "Improve employee satisfaction by 45%",
      "Decrease payroll processing time by 70%",
      "Enhance recruitment efficiency by 50%",
      "Increase performance management effectiveness by 40%",
    ],
    integrations: [
      "ADP",
      "Workday",
      "BambooHR",
      "Slack",
      "Microsoft Teams",
      "LinkedIn",
      "Indeed",
      "Glassdoor",
      "QuickBooks",
      "SAP",
    ],
    pricing: {
      starter: "$15/employee/month",
      professional: "$25/employee/month",
      enterprise: "Custom pricing",
    },
    features: [
      {
        title: "Centralized Profile Management & Onboarding",
        description:
          "• Digital forms, automated workflows, multi-country regulatory modules, and self-service portals for employees. Onboarding experience is globally localized, robustly compliant, and analytics-driven.",
        icon: "User",
        desc3: "",
        desc2: "",
      },
      {
        title: "Automated Payroll & Benefits Administration",
        description:
          "• AI algorithms support payroll across jurisdictions, minimizing errors and compliance risks. Seamless integrations for multinational businesses set Insource apart from regional competitors.",
        icon: "Calculator",
        desc3: "",
        desc2: "",
      },
      {
        title: "Remote Attendance Logging & Geo-Location/Geo-Fencing",
        description:
          "• Employees log attendance remotely via GPS-enabled mobile apps. Geo-fencing restricts check-in/out to authorized boundaries (office, client site, remote work radius). Real-time location mapping and photo/selfie attendance options ensure accountability, prevent fraud, and simplify HR audits.",
        icon: "MapPin",
        desc3: "",
        desc2: "",
      },
      {
        title: "AI-Driven Performance Analytics",
        description:
          " • Combines feedback, goal setting, predictive retention and attrition insights, custom KPIs, and actionable reporting for managers.",
        icon: "BarChart3",
        desc3: "",
        desc2: "",
      },
      {
        title: "	Predictive Engagement & Retention",
        description:
          "• AI scans surveys, activities, and signals to flag at-risk staff and recommend tailored interventions before disengagement occurs.",
        icon: "TrendingUp",
        desc3: "",
        desc2: "",
      },
      {
        title: "	Self-Service & Compliance",
        description:
          " • Employees update data, view stubs, access policies, and enroll in company programs from any device. Automatic compliance tracker supports global regulations.",
        icon: "Shield",
        desc3: "",
        desc2: "",
      },
    ],
    modules: [
      {
        name: "Recruitment & Onboarding",
        description:
          "Smart hiring workflow with resume parsing and automated offer management.",
        icon: "UserPlus",
        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Speeds up recruitment and ensures a seamless onboarding experience.",
        ],
      },
      {
        name: "Time & Attendance Management",
        description:
          "Biometric and GPS-enabled attendance tracking.",
        icon: "Clock",
        image:
          "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Eliminates timesheet errors and ensures accuracy.",
        ],
      },
      {
        name: "Leave & Shift Scheduling",
        description:
          "Dynamic scheduling and automated leave balance tracking.",
        icon: "Calendar",
        image:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Reduces conflicts and improves team productivity.",  
        ]
      },
      {
        name: "Payroll & Statutory Compliance",
        description:
          "Handles payroll, tax deductions, and statutory filings (PF, ESI, TDS).",
        icon: "CreditCard",
        image:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Ensures compliance across multiple regions.",
        ],
      },
      {
        name: "Performance Management",
        description:
          "Goal tracking, appraisal cycles, and 360° feedback.",
        icon: "Target",
        image:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Encourages data-backed performance reviews.",
        ],
      },
      {
        name: "LMS – Learning & Development",
        description:
          "Personalized learning paths with certifications and tracking.",
        icon: "GraduationCap",
        image:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Enhances employee growth and retention.",
        ],
      },
      {
        name: "Analytics Dashboard",
        description:
          "Real-time workforce insights and retention analysis.",
        icon: "BarChart3",
        image:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Empowers management with strategic HR decisions.",
        ],
      },
    ],
  },
  {
    id: "idm",
    name: "Inventory Plus",
    fullName: "Inventory Distribution Management",
    description:
    "Insource IDM enables intelligent management of supply chains, warehouses, and distribution networks.It combines AI-driven forecasting, vendor management, and IoT-based tracking for complete control over logistics and inventory lifecycles.",
    shortDescription:
      "Smart Inventory Control for Distributors Worldwide",
    icon: "Package",
    bgImage: image3,
    color: "from-orange-500 to-red-500",
    overview: {
      benefits: [
        "Reduced wastage & overstocking",
        "AI-based demand forecasting",
        "Transparent supply chain",
        "Faster procurement cycle",
        "Real-time stock valuation",
        "Reduce stockouts by 80% with AI forecasting",
        "Improve inventory accuracy to 99.8%",
        "Decrease carrying costs by 35%",
        "Enhance order fulfillment speed by 60%",
        "Increase supplier performance by 45%",
      ],
      technicalSpecs: [
        "IoT-enabled real-time tracking system",
        "AI-powered demand forecasting engine",
        "Mobile-first warehouse management",
        "Blockchain-based supply chain verification",
        "Multi-warehouse synchronization",
        "Predictive analytics dashboard"
      ]
    },
    benefits: [
      "Reduce sample processing time by 50%",
      "Improve result accuracy by 99.8%",
      "Decrease turnaround time by 40%",
      "Enhance quality control by 60%",
      "Increase laboratory efficiency by 55%",
    ],
    integrations: [
      "Roche",
      "Abbott",
      "Siemens",
      "Beckman Coulter",
      "Thermo Fisher",
      "Epic",
      "Cerner",
      "HL7 FHIR",
      "ASTM",
      "LIS Systems",
    ],
    pricing: {
      starter: "$199/month",
      professional: "$399/month",
      enterprise: "Custom pricing",
    },
    features: [
      {
        title: "End-to-End Visibility",
        description:
          "Custom dashboards track every product, order, and shipment in real time—across regions and warehouses. Data analytics help prevent stockouts and minimize overstock.",
        icon: "Eye",
        desc3: "",
        desc2: "",
      },
      {
        title: "Advanced Stock Tracking",
        description:
          "IoT sensors and barcode/RFID scanning assure precise inventory movement. Mobile-first design reduces error rates and manual entry.",
        icon: "Package",
        desc3: "",
        desc2: "",
      },
      {
        title: "AI Forecasting & Reorder Alerts",
        description:
          "Advanced reporting with data analytics and insights for laboratory optimization",
        icon: "TrendingUp",
        desc3: "",
        desc2: "",
      },
      {
        title: "Distribution Scheduling & Route Planning",
        description:
          "Seamless integration with laboratory instruments and equipment with bidirectional data flow",
        icon: "Truck",
        desc3: "",
        desc2: "",
      },
      {
        title: "Workflow Automation",
        description:
          "Automated laboratory workflows with intelligent task routing and prioritization",
        icon: "Workflow",
        desc3: "",
        desc2: "",
      },
      {
        title: "Compliance Management",
        description:
          "Regulatory compliance management with audit trails and documentation",
        icon: "FileCheck",
        desc3: "",
        desc2: "",
      },
    ],
    modules: [
      {
        name: "Procurement Management",
        description:
          "Auto vendor selection, purchase requests, and approvals.",
        icon: "ShoppingCart",
        image:
          "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Improves purchasing efficiency and reduces cost leakage.",
        ],
      },
      {
        name: "Warehouse & Stock Control",
        description:
          "Barcode-enabled storage and movement tracking.",
        icon: "Warehouse",
        image:
          "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Reduces shrinkage and improves order accuracy.",
        ],
      },
      {
        name: "Demand Forecasting",
        description:
          "AI models predict stock needs based on historical data.",
        icon: "LineChart",
        image:
          "https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Minimizes overstock and stock-outs.",
        ],
      },
      {
        name: "Vendor & Supplier Management",
        description:
          "End-to-end tracking of supplier performance.",
        icon: "Users",
        image:
          "https://images.pexels.com/photos/3825546/pexels-photo-3825546.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Ensures reliable sourcing and quality control.",  
        ],
      },
      {
        name: "Distribution & Logistics Tracking",
        description:
          "Route planning and delivery monitoring using IoT.",
        icon: "Map",
        image:
          "https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Cuts delivery time and improves transparency.",
        ],
      },
      {
        name: "Inventory Finance & Reconciliation",
        description:
          "Integrated accounting and payment modules.",
        icon: "Calculator",
        image:
          "https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Ensures end-to-end traceability and accountability.",
        ],
      },
    ],
  },
  {
    id: "ffa",
    name: "Fieldera",
    fullName: "Field Force Application",
    description:
"Insource Fieldera connects your on-ground workforce with real-time updates, mobile accessibility, and powerful analytics.From field service agents to sales executives, it ensures accountability, optimized routing, and faster customer resolutions through AI-enabled workflows.",
    shortDescription:
      "Empowering Remote Sales & Service Teams for Maximum Impact",
    icon: "MapPin",
    color: "from-blue-400 to-cyan-500",
    bgImage: image1,
    overview: {
      benefits: [
        "Real-time tracking and updates",
        "Seamless communication between field & HQ",
        "30% improvement in task turnaround time",
        "Smart insights for resource allocation",
        "Increase field team productivity by 55%",
        "Reduce travel time and costs by 40%",
        "Improve customer visit completion rate by 65%",
        "Enhance real-time reporting accuracy by 80%",
        "Decrease administrative overhead by 50%",
      ],
      technicalSpecs: [
        "GPS-enabled mobile field applications",
        "AI-powered route optimization engine",
        "Offline-first data synchronization",
        "Real-time location tracking and geo-fencing",
        "Cloud-based central command dashboard",
        "Integrated CRM and task management"
      ]
    },
    benefits: [
      "Reduce administrative costs by up to 40%",
      "Improve patient satisfaction scores by 35%",
      "Decrease medication errors by 60%",
      "Streamline discharge process by 50%",
      "Enhance staff productivity by 45%",
    ],
    integrations: [
      "Epic",
      "Cerner",
      "Allscripts",
      "MEDITECH",
      "NextGen",
      "Laboratory Systems",
      "Radiology PACS",
      "Pharmacy Systems",
      "Insurance Providers",
      "Government Health Databases",
    ],
    pricing: {
      starter: "$299/month",
      professional: "$599/month",
      enterprise: "Custom pricing",
    },
    features: [
      {
        title: "Mobile Coordination & Geo-Fencing",
        description:
          "• Teams get instant assignment updates on any device. Geo-fencing ensures attendance and task logging only within approved zones—verify with GPS, geotagging, and selfie options.",
        desc2:
          "",
        desc3:
          "",
        icon: "MapPin",
      },
      {
        title: "Remote Attendance Logging",
        description:
          "• Field staff mark attendance from any client site or remote location; geo-tagged, time-stamped, and supported by offline sync.",
        desc2:
          "",
        desc3:
          "",
        icon: "Clock",
      },
      {
        title: "AI-Powered Lead Prioritization & Route Planning",
        description:
          "• Smart lead scoring and optimal route planning using maps, live traffic, and client priority maximize conversions and minimize travel.",
        desc2:
          "",
        desc3: "",
        icon: "Navigation",
      },
      {
        title: "Task Scheduling & Work Automation",
        description:
          "• Digitized, automated job assignment, feedback loops, reporting, and workforce tracking. Designed for frontline mobile staff.",
        desc2:
          "",
        desc3: "",
        icon: "CheckSquare",
      },
      {
        title: "Customer Feedback, Reporting, and Sync",
        description:
          "• Real-time feedback and reporting, even in low-connectivity regions. Data syncs automatically when connection is available.",
        desc2:
          "",
        desc3:
          "",
        icon: "MessageSquare",
      },
      {
        title: "Performance Analytics",
        description:
          "• Dashboards for productivity, customer engagement, visit coverage, and efficiency.",
        desc2:
          "• Secure, role-based access and robust audit trails ensure regulatory compliance.",
        desc3:
          "",
        icon: "BarChart3",
      },
    ],
    modules: [
      {
        name: "Task Assignment & Monitoring",
        description:
          "Assign, prioritize, and track tasks live.",
        icon: "CheckSquare",
        image:
          "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Improves productivity and SLA compliance.",
        ],
      },
      {
        name: "Geo-Attendance & Tracking",
        description:
          "GPS-based employee location tracking and attendance.",
        icon: "MapPin",
        image:
          "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Prevents proxy attendance and enhances reliability.",
        ],
      },
      {
        name: "Route Optimization",
        description:
          "AI-driven route recommendations for field visits.",
        icon: "Navigation",
        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Reduces fuel costs and maximizes coverage.",
        ],
      },
      {
        name: "Visit Management & CRM",
        description:
          "End-to-end customer visit tracking and follow-up reminders.",
        icon: "Users",
        image:
          "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Boosts customer satisfaction and conversion rates.",
        ],
      },
      {
        name: "Expense & Claim Automation",
        description: "Mobile-based claim submission and approvals.",
        icon: "CreditCard",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Accelerates reimbursement and ensures accuracy.",
        ],
      },
      {
        name: "Offline Access Mode",
        description: "Continue operations without internet and sync later.",
        icon: "WifiOff",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Ideal for remote or low-network regions.",
        ],
      },
      {
        name: "Field Analytics Dashboard",
        description: "Monitor performance metrics in real-time.",
        icon: "BarChart3",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Helps leadership identify trends and bottlenecks.",
        ],
      },
    ],
  },
];

export const productComparisons = {
  hims: {
    competitors: ["Epic", "Cerner", "MEDITECH"],
    advantages: [
      "50% faster implementation",
      "40% lower total cost of ownership",
      "Superior user experience rating",
      "24/7 dedicated support",
    ],
  },
  hrms: {
    competitors: ["Workday", "ADP", "BambooHR"],
    advantages: [
      "More affordable pricing",
      "Better customization options",
      "Faster deployment time",
      "Local support team",
    ],
  },
  lims: {
    competitors: ["LabWare", "Thermo Fisher", "Abbott Informatics"],
    advantages: [
      "Higher accuracy rates",
      "Better instrument integration",
      "More intuitive interface",
      "Comprehensive training program",
    ],
  },
};
