export interface Product {
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
    id: "hims",
    name: "HIMS",
    fullName: "Hospital Information Management Software",
    description: "Comprehensive hospital management solution that streamlines operations, enhances patient care, and improves overall efficiency across all departments with AI-powered analytics and real-time monitoring capabilities.",
    shortDescription: "Complete hospital management solution for enhanced patient care and operational efficiency",
    icon: "Building2",
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Reduce administrative costs by up to 40%",
      "Improve patient satisfaction scores by 35%",
      "Decrease medication errors by 60%",
      "Streamline discharge process by 50%",
      "Enhance staff productivity by 45%"
    ],
    integrations: [
      "Epic", "Cerner", "Allscripts", "MEDITECH", "NextGen",
      "Laboratory Systems", "Radiology PACS", "Pharmacy Systems",
      "Insurance Providers", "Government Health Databases"
    ],
    pricing: {
      starter: "$299/month",
      professional: "$599/month",
      enterprise: "Custom pricing"
    },
    features: [
      {
        title: "Patient Management",
        description: "Complete patient lifecycle management from admission to discharge with real-time tracking",
        icon: "UserPlus"
      },
      {
        title: "Electronic Health Records",
        description: "Secure, comprehensive digital health records with easy access and advanced search capabilities",
        icon: "FileText"
      },
      {
        title: "Billing & Insurance",
        description: "Automated billing processes with insurance claim management and revenue cycle optimization",
        icon: "CreditCard"
      },
      {
        title: "Inventory Management",
        description: "Real-time tracking of medical supplies and equipment with automated reordering",
        icon: "Package"
      },
      {
        title: "Clinical Decision Support",
        description: "AI-powered clinical decision support with evidence-based recommendations",
        icon: "Brain"
      },
      {
        title: "Quality Metrics",
        description: "Comprehensive quality metrics and reporting for continuous improvement",
        icon: "BarChart3"
      }
    ],
    modules: [
      {
        name: "Patient Registration",
        description: "Streamlined patient admission and registration process with digital forms",
        icon: "UserPlus",
        image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Quick patient registration with barcode scanning",
          "Insurance verification and pre-authorization",
          "Appointment scheduling with automated reminders",
          "Patient demographics management and updates",
          "Emergency contact management",
          "Medical history import and validation"
        ]
      },
      {
        name: "Clinical Management",
        description: "Comprehensive clinical workflow management with AI assistance",
        icon: "Stethoscope",
        image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Electronic prescriptions with drug interaction alerts",
          "Lab test ordering and result management",
          "Clinical notes with voice-to-text capability",
          "Treatment planning and care coordination",
          "Vital signs monitoring and trending",
          "Clinical decision support algorithms"
        ]
      },
      {
        name: "Radiology",
        description: "Complete radiology department management with DICOM integration",
        icon: "Scan",
        image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "DICOM image management and viewing",
          "Radiology reporting with templates",
          "Equipment scheduling and maintenance",
          "Image archiving and retrieval system",
          "3D image reconstruction capabilities",
          "Teleradiology support for remote reading"
        ]
      },
      {
        name: "Pharmacy",
        description: "Integrated pharmacy management system with automated dispensing",
        icon: "Pill",
        image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Drug inventory management with expiry tracking",
          "Prescription processing and verification",
          "Drug interaction and allergy alerts",
          "Automated dispensing unit integration",
          "Controlled substance tracking",
          "Pharmacy billing and insurance processing"
        ]
      },
      {
        name: "Emergency Department",
        description: "Specialized emergency department workflow optimization",
        icon: "Ambulance",
        image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Triage management with severity scoring",
          "Bed management and patient tracking",
          "Emergency protocols and checklists",
          "Trauma team activation workflows",
          "Discharge planning and follow-up",
          "Emergency department analytics"
        ]
      }
    ]
  },
  {
    id: "hrms",
    name: "HRMS", 
    fullName: "Human Resources Management Software",
    description: "Complete HR solution that manages the entire employee lifecycle from recruitment to retirement, with advanced payroll and performance management capabilities, AI-powered analytics, and comprehensive workforce planning tools.",
    shortDescription: "Comprehensive HR solution for employee lifecycle and payroll management",
    icon: "Users",
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Reduce HR administrative time by 60%",
      "Improve employee satisfaction by 45%",
      "Decrease payroll processing time by 70%",
      "Enhance recruitment efficiency by 50%",
      "Increase performance management effectiveness by 40%"
    ],
    integrations: [
      "ADP", "Workday", "BambooHR", "Slack", "Microsoft Teams",
      "LinkedIn", "Indeed", "Glassdoor", "QuickBooks", "SAP"
    ],
    pricing: {
      starter: "$15/employee/month",
      professional: "$25/employee/month",
      enterprise: "Custom pricing"
    },
    features: [
      {
        title: "Employee Management",
        description: "Complete employee lifecycle management and record keeping with digital onboarding",
        icon: "User"
      },
      {
        title: "Payroll Processing",
        description: "Automated payroll calculation with tax compliance and multi-country support",
        icon: "Calculator"
      },
      {
        title: "Attendance Tracking",
        description: "Biometric and digital attendance management system with mobile check-in",
        icon: "Clock"
      },
      {
        title: "Performance Management",
        description: "Goal setting, performance reviews, and career development planning",
        icon: "Target"
      },
      {
        title: "Learning Management",
        description: "Employee training and development with certification tracking",
        icon: "GraduationCap"
      },
      {
        title: "Analytics Dashboard",
        description: "HR analytics and insights with predictive workforce planning",
        icon: "BarChart3"
      }
    ],
    modules: [
      {
        name: "Employee Records",
        description: "Centralized employee information management with document storage",
        icon: "User",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Personal information management with photo ID",
          "Document storage and version control",
          "Employment history and career progression",
          "Skills and certifications tracking",
          "Emergency contact management",
          "Organizational chart visualization"
        ]
      },
      {
        name: "Attendance Management",
        description: "Comprehensive attendance and time tracking with mobile support",
        icon: "Clock",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Biometric integration (fingerprint, face recognition)",
          "Shift management and scheduling",
          "Leave management with approval workflows",
          "Overtime calculation and approval",
          "Mobile attendance with GPS tracking",
          "Attendance analytics and reporting"
        ]
      },
      {
        name: "Payroll System",
        description: "Advanced payroll processing and management with compliance",
        icon: "Calculator",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Automated salary calculation with variables",
          "Tax deductions and compliance management",
          "Bonus and incentive management",
          "Payslip generation and distribution",
          "Bank integration for direct deposits",
          "Payroll analytics and cost center reporting"
        ]
      },
      {
        name: "Recruitment",
        description: "End-to-end recruitment process management with AI matching",
        icon: "UserPlus",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Job posting management across platforms",
          "Candidate tracking and scoring",
          "Interview scheduling and feedback",
          "Offer management and negotiation",
          "Background verification integration",
          "Recruitment analytics and sourcing metrics"
        ]
      },
      {
        name: "Performance Management",
        description: "Comprehensive performance evaluation and development system",
        icon: "Target",
        image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Goal setting and OKR management",
          "360-degree feedback collection",
          "Performance review cycles and templates",
          "Career development planning",
          "Succession planning and talent mapping",
          "Performance analytics and insights"
        ]
      }
    ]
  },
  {
    id: "lims",
    name: "LIMS",
    fullName: "Lab Information Management Software", 
    description: "Advanced laboratory management platform that ensures accurate sample tracking, efficient workflow management, and comprehensive reporting for all laboratory operations with AI-powered quality control and automated instrument integration.",
    shortDescription: "Advanced laboratory management platform for accurate sample tracking and reporting",
    icon: "FlaskConical",
    color: "from-orange-500 to-red-500",
    benefits: [
      "Reduce sample processing time by 50%",
      "Improve result accuracy by 99.8%",
      "Decrease turnaround time by 40%",
      "Enhance quality control by 60%",
      "Increase laboratory efficiency by 55%"
    ],
    integrations: [
      "Roche", "Abbott", "Siemens", "Beckman Coulter", "Thermo Fisher",
      "Epic", "Cerner", "HL7 FHIR", "ASTM", "LIS Systems"
    ],
    pricing: {
      starter: "$199/month",
      professional: "$399/month",
      enterprise: "Custom pricing"
    },
    features: [
      {
        title: "Sample Management",
        description: "Complete sample lifecycle tracking from collection to disposal with barcode integration",
        icon: "TestTube"
      },
      {
        title: "Quality Control",
        description: "Comprehensive quality assurance and control processes with automated validation",
        icon: "CheckCircle"
      },
      {
        title: "Reporting & Analytics",
        description: "Advanced reporting with data analytics and insights for laboratory optimization",
        icon: "BarChart3"
      },
      {
        title: "Instrument Integration",
        description: "Seamless integration with laboratory instruments and equipment with bidirectional data flow",
        icon: "Settings"
      },
      {
        title: "Workflow Automation",
        description: "Automated laboratory workflows with intelligent task routing and prioritization",
        icon: "Workflow"
      },
      {
        title: "Compliance Management",
        description: "Regulatory compliance management with audit trails and documentation",
        icon: "FileCheck"
      }
    ],
    modules: [
      {
        name: "Sample Tracking",
        description: "Complete sample lifecycle management with chain of custody",
        icon: "TestTube",
        image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Barcode sample tracking and labeling",
          "Chain of custody documentation",
          "Sample storage management with location tracking",
          "Disposal tracking and environmental compliance",
          "Sample aliquoting and derivative tracking",
          "Temperature monitoring and alerts"
        ]
      },
      {
        name: "Test Management",
        description: "Comprehensive test ordering and processing with automation",
        icon: "FlaskConical",
        image: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Test catalog management with protocols",
          "Automated workflows and task routing",
          "Result entry and validation with ranges",
          "Reference ranges and critical values",
          "Method validation and verification",
          "Proficiency testing management"
        ]
      },
      {
        name: "Quality Assurance",
        description: "Quality control and compliance management with automation",
        icon: "Shield",
        image: "https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "QC sample management and scheduling",
          "Statistical quality control with Levey-Jennings charts",
          "Proficiency testing and external QA",
          "Audit trails and electronic signatures",
          "Compliance reporting and documentation",
          "Corrective action tracking and management"
        ]
      },
      {
        name: "Reporting",
        description: "Advanced reporting and analytics platform with customization",
        icon: "BarChart3",
        image: "https://images.pexels.com/photos/3825546/pexels-photo-3825546.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Custom report builder with templates",
          "Automated report delivery and scheduling",
          "Data visualization and dashboards",
          "Statistical analysis and trending",
          "Regulatory reporting and submissions",
          "Business intelligence and KPI tracking"
        ]
      },
      {
        name: "Instrument Integration",
        description: "Seamless laboratory instrument connectivity and data management",
        icon: "Settings",
        image: "https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800",
        features: [
          "Bidirectional instrument communication",
          "Automated result import and validation",
          "Instrument maintenance scheduling",
          "Calibration management and tracking",
          "Error handling and troubleshooting",
          "Multi-vendor instrument support"
        ]
      }
    ]
  }
];

export const productComparisons = {
  hims: {
    competitors: ["Epic", "Cerner", "MEDITECH"],
    advantages: [
      "50% faster implementation",
      "40% lower total cost of ownership",
      "Superior user experience rating",
      "24/7 dedicated support"
    ]
  },
  hrms: {
    competitors: ["Workday", "ADP", "BambooHR"],
    advantages: [
      "More affordable pricing",
      "Better customization options",
      "Faster deployment time",
      "Local support team"
    ]
  },
  lims: {
    competitors: ["LabWare", "Thermo Fisher", "Abbott Informatics"],
    advantages: [
      "Higher accuracy rates",
      "Better instrument integration",
      "More intuitive interface",
      "Comprehensive training program"
    ]
  }
};