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
    name: "HMSEHR",
    fullName: "Healthcare Management Electronic Health Records",
    description:
"Insource HMSEHR reimagines clinical workflows, patient engagement, and compliance. Built for clinicians, hospital admins, and IT teams, it offers AI-accelerated charting, predictive analytics, and deeply integrated telehealth.",   shortDescription:
      "Advanced Healthcare Platform for Tomorrows Providers",
    icon: "Building2",
    color: "from-blue-400 to-cyan-500",
    bgImage: image1,
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
        icon: "UserPlus",
      },
      {
        title: "AI-Powered Clinical Decision Support",
        description:
          "•	Leverages advanced machine learning on historical data to predict diagnoses, recommend treatments, and anticipate complications. Tailors protocols to local and multinational standards.",
        desc2:
          "",
        desc3:"",      
        icon: "FileText",
      },
      {
        title: "	Seamless Integration",
        description:
          "• Connects instantly with radiology, labs, and specialty networks using HL7/FHIR APIs, eliminating manual work and errors.",
        desc2:
          "",
        desc3: "",
        icon: "CreditCard",
      },
      {
        title: "Personalized Engagement",
        description:
          "• Multilingual portals and apps empower patients to interact with providers, access education, and schedule appointments—driving satisfaction and reducing missed visits.",
        desc2:
          "",
        desc3: "",
        icon: "Package",
      },
      {
        title: "Population Health Analytics",
        description:
          "• Aggregates cohort data for proactive asset management, risk stratification, and compliance reporting.",
        desc2:
          "",
        desc3:
          "",
        icon: "Brain",
      },
      {
        title: "Fully Paperless Across All Departments",
        description:
          "•	Digital central medical records management, accessible hospital-wide.",
        desc2:
          "",
        desc3:
          "",
        icon: "BarChart3",
      },
    ],
    modules: [
      {
        name: "Healthcare teams using tablets",
        description:
          "Streamlined patient admission and registration process with digital forms",
        icon: "UserPlus",
        image:
          "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Quick patient registration with barcode scanning",
          "Insurance verification and pre-authorization",
          "Appointment scheduling with automated reminders",
          "Patient demographics management and updates",
          "Emergency contact management",
          "Medical history import and validation",
        ],
      },
      {
        name: "Dashboards with AI health graphs",
        description:
          "Comprehensive clinical workflow management with AI assistance",
        icon: "Stethoscope",
        image:
          "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Electronic prescriptions with drug interaction alerts",
          "Lab test ordering and result management",
          "Clinical notes with voice-to-text capability",
          "Treatment planning and care coordination",
          "Vital signs monitoring and trending",
          "Clinical decision support algorithms",
        ],
      },
      {
        name: "Happy patients",
        description:
          "Complete radiology department management with DICOM integration",
        icon: "Scan",
        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "DICOM image management and viewing",
          "Radiology reporting with templates",
          "Equipment scheduling and maintenance",
          "Image archiving and retrieval system",
          "3D image reconstruction capabilities",
          "Teleradiology support for remote reading",
        ],
      },
      {
        name: "Global Clinics",
        description:
          "Integrated pharmacy management system with automated dispensing",
        icon: "Pill",
        image:
          "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Drug inventory management with expiry tracking",
          "Prescription processing and verification",
          "Drug interaction and allergy alerts",
          "Automated dispensing unit integration",
          "Controlled substance tracking",
          "Pharmacy billing and insurance processing",
        ],
      },
      {
        name: "Emergency Department",
        description: "Specialized emergency department workflow optimization",
        icon: "Ambulance",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Triage management with severity scoring",
          "Bed management and patient tracking",
          "Emergency protocols and checklists",
          "Trauma team activation workflows",
          "Discharge planning and follow-up",
          "Emergency department analytics",
        ],
      },
    ],
  },
  {
    id: "hcm",
    name: "HCM",
    fullName: "Human Capital Management ",
    description:
    "Insource HCM empowers HR leaders and employees with unified payroll, onboarding, talent management, compliance, and advanced engagement analytics, with a remote-first philosophy.",
    shortDescription:
      "Global HR Transformation for Modern Workforces",
    icon: "Users",
    bgImage: image2,
    color: "from-cyan-500 to-emerald-500",
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
        icon: "Clock",
        desc3: "",
        desc2: "",
      },
      {
        title: "AI-Driven Performance Analytics",
        description:
          " • Combines feedback, goal setting, predictive retention and attrition insights, custom KPIs, and actionable reporting for managers.",
        icon: "Target",
        desc3: "",
        desc2: "",
      },
      {
        title: "	Predictive Engagement & Retention",
        description:
          "• AI scans surveys, activities, and signals to flag at-risk staff and recommend tailored interventions before disengagement occurs.",
        icon: "GraduationCap",
        desc3: "",
        desc2: "",
      },
      {
        title: "	Self-Service & Compliance",
        description:
          " • Employees update data, view stubs, access policies, and enroll in company programs from any device. Automatic compliance tracker supports global regulations.",
        icon: "BarChart3",
        desc3: "",
        desc2: "",
      },
    ],
    modules: [
      {
        name: "	Animated career roadmaps",
        description:
          "Centralized employee information management with document storage",
        icon: "User",
        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Personal information management with photo ID",
          "Document storage and version control",
          "Employment history and career progression",
          "Skills and certifications tracking",
          "Emergency contact management",
          "Organizational chart visualization",
        ],
      },
      {
        name: "Multicultural team meetings",
        description:
          "Comprehensive attendance and time tracking with mobile support",
        icon: "Clock",
        image:
          "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Biometric integration (fingerprint, face recognition)",
          "Shift management and scheduling",
          "Leave management with approval workflows",
          "Overtime calculation and approval",
          "Mobile attendance with GPS tracking",
          "Attendance analytics and reporting",
        ],
      },
      {
        name: "	Location check-ins on mobile maps",
        description:
          "Advanced payroll processing and management with compliance",
        icon: "Calculator",
        image:
          "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Automated salary calculation with variables",
          "Tax deductions and compliance management",
          "Bonus and incentive management",
          "Payslip generation and distribution",
          "Bank integration for direct deposits",
          "Payroll analytics and cost center reporting",
        ],
      },
      {
        name: "	Dashboards showing geo-fenced attendance clusters ",
        description:
          "End-to-end recruitment process management with AI matching",
        icon: "UserPlus",
        image:
          "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Job posting management across platforms",
          "Candidate tracking and scoring",
          "Interview scheduling and feedback",
          "Offer management and negotiation",
          "Background verification integration",
          "Recruitment analytics and sourcing metrics",
        ],
      },
      {
        name: "Compliance Alerts",
        description:
          "Comprehensive performance evaluation and development system",
        icon: "Target",
        image:
          "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Goal setting and OKR management",
          "360-degree feedback collection",
          "Performance review cycles and templates",
          "Career development planning",
          "Succession planning and talent mapping",
          "Performance analytics and insights",
        ],
      },
    ],
  },
  {
    id: "idm",
    name: "IDM",
    fullName: "Inventory Distribution Management",
    description:
    "Optimize procurement, warehousing, and delivery with AI-powered forecasting, smart restocking, and deep analytics. Designed for supply chain managers, distributors, finance teams, and vendors.",
    shortDescription:
      "Smart Inventory Control for Distributors Worldwide",
    icon: "Boxes",
    bgImage: image3,
    color: "from-orange-500 to-red-500",
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
        icon: "TestTube",
        desc3: "",
        desc2: "",
      },
      {
        title: "	Advanced Stock Tracking",
        description:
          "IoT sensors and barcode/RFID scanning assure precise inventory movement. Mobile-first design reduces error rates and manual entry.",
        icon: "CheckCircle",
        desc3: "",
        desc2: "",
      },
      {
        title: "	AI Forecasting & Reorder Alerts",
        description:
          "Advanced reporting with data analytics and insights for laboratory optimization",
        icon: "BarChart3",
        desc3: "",
        desc2: "",
      },
      {
        title: "	Distribution Scheduling & Route Planning",
        description:
          "Seamless integration with laboratory instruments and equipment with bidirectional data flow",
        icon: "Settings",
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
        name: "Sample Tracking",
        description:
          "Complete sample lifecycle management with chain of custody",
        icon: "TestTube",
        image:
          "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Barcode sample tracking and labeling",
          "Chain of custody documentation",
          "Sample storage management with location tracking",
          "Disposal tracking and environmental compliance",
          "Sample aliquoting and derivative tracking",
          "Temperature monitoring and alerts",
        ],
      },
      {
        name: "Test Management",
        description:
          "Comprehensive test ordering and processing with automation",
        icon: "FlaskConical",
        image:
          "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Test catalog management with protocols",
          "Automated workflows and task routing",
          "Result entry and validation with ranges",
          "Reference ranges and critical values",
          "Method validation and verification",
          "Proficiency testing management",
        ],
      },
      {
        name: "Quality Assurance",
        description:
          "Quality control and compliance management with automation",
        icon: "Shield",
        image:
          "https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "QC sample management and scheduling",
          "Statistical quality control with Levey-Jennings charts",
          "Proficiency testing and external QA",
          "Audit trails and electronic signatures",
          "Compliance reporting and documentation",
          "Corrective action tracking and management",
        ],
      },
      {
        name: "Reporting",
        description:
          "Advanced reporting and analytics platform with customization",
        icon: "BarChart3",
        image:
          "https://images.pexels.com/photos/3825546/pexels-photo-3825546.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Custom report builder with templates",
          "Automated report delivery and scheduling",
          "Data visualization and dashboards",
          "Statistical analysis and trending",
          "Regulatory reporting and submissions",
          "Business intelligence and KPI tracking",
        ],
      },
      {
        name: "Instrument Integration",
        description:
          "Seamless laboratory instrument connectivity and data management",
        icon: "Settings",
        image:
          "https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Bidirectional instrument communication",
          "Automated result import and validation",
          "Instrument maintenance scheduling",
          "Calibration management and tracking",
          "Error handling and troubleshooting",
          "Multi-vendor instrument support",
        ],
      },
    ],
  },
  {
    id: "ffa",
    name: "FFA",
    fullName: "	Field Force Application",
    description:
"Unite managers, agents, and reps with a mobile-first platform providing real-time updates, assignment, geo-tracking, and offline capability for truly global field operations.",
    shortDescription:
      "Empowering Remote Sales & Service Teams for Maximum Impact",
    icon: "Building2",
    color: "from-blue-400 to-cyan-500",
    bgImage: image1,
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
        title: "Mobile Coordination & Geo-Fencing:",
        description:
          " • Teams get instant assignment updates on any device. Geo-fencing ensures attendance and task logging only within approved zones—verify with GPS, geotagging, and selfie options.",
        desc2:
          "",
        desc3:
          "",
        icon: "UserPlus",
      },
      {
        title: "Remote Attendance Logging",
        description:
          "• Field staff mark attendance from any client site or remote location; geo-tagged, time-stamped, and supported by offline sync.	",
        desc2:
          "",
        desc3:
          "",
        icon: "FileText",
      },
      {
        title: "AI-Powered Lead Prioritization & Route Planning",
        description:
          "•	Smart lead scoring and optimal route planning using maps, live traffic, and client priority maximize conversions and minimize travel.",
        desc2:
          "",
        desc3: "",
        icon: "CreditCard",
      },
      {
        title: "	Task Scheduling & Work Automation",
        description:
          "• Digitized, automated job assignment, feedback loops, reporting, and workforce tracking. Designed for frontline mobile staff.",
        desc2:
          "",
        desc3: "",
        icon: "Package",
      },
      {
        title: "Customer Feedback, Reporting, and Sync",
        description:
          "•	Real-time feedback and reporting, even in low-connectivity regions. Data syncs automatically when connection is available.",
        desc2:
          "",
        desc3:
          "",
        icon: "Brain",
      },
      {
        title: "Performance Analytics",
        description:
          "•	Digital central medical records management, accessible hospital-wide.",
        desc2:
          "•	Secure, role-based access and robust audit trails ensure regulatory compliance.",
        desc3:
          "Dashboards for productivity, customer engagement, visit coverage, and efficiency.",
        icon: "BarChart3",
      },
    ],
    modules: [
      {
        name: "Field reps on devices",
        description:
          "Streamlined patient admission and registration process with digital forms",
        icon: "UserPlus",
        image:
          "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Quick patient registration with barcode scanning",
          "Insurance verification and pre-authorization",
          "Appointment scheduling with automated reminders",
          "Patient demographics management and updates",
          "Emergency contact management",
          "Medical history import and validation",
        ],
      },
      {
        name: "	Geo-mapped routes",
        description:
          "Comprehensive clinical workflow management with AI assistance",
        icon: "Stethoscope",
        image:
          "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Electronic prescriptions with drug interaction alerts",
          "Lab test ordering and result management",
          "Clinical notes with voice-to-text capability",
          "Treatment planning and care coordination",
          "Vital signs monitoring and trending",
          "Clinical decision support algorithms",
        ],
      },
      {
        name: "Mobile dashboards with check-in animations, feedback forms",
        description:
          "Complete radiology department management with DICOM integration",
        icon: "Scan",
        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "DICOM image management and viewing",
          "Radiology reporting with templates",
          "Equipment scheduling and maintenance",
          "Image archiving and retrieval system",
          "3D image reconstruction capabilities",
          "Teleradiology support for remote reading",
        ],
      },
      {
        name: "Pharmacy",
        description:
          "Integrated pharmacy management system with automated dispensing",
        icon: "Pill",
        image:
          "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Drug inventory management with expiry tracking",
          "Prescription processing and verification",
          "Drug interaction and allergy alerts",
          "Automated dispensing unit integration",
          "Controlled substance tracking",
          "Pharmacy billing and insurance processing",
        ],
      },
      {
        name: "Emergency Department",
        description: "Specialized emergency department workflow optimization",
        icon: "Ambulance",
        image:
          "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Triage management with severity scoring",
          "Bed management and patient tracking",
          "Emergency protocols and checklists",
          "Trauma team activation workflows",
          "Discharge planning and follow-up",
          "Emergency department analytics",
        ],
      },
    ],
  }
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
