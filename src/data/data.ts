import { Testimonial, CaseStudy } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lorem ipsum",
    position: "Lorem ipsum",
    company: "TechCorp Global",
    companyLogo: "🏢",
    image: "👩‍💼",
    text: "The deployment across our international offices was seamless. We saw immediate improvements in efficiency and team collaboration.",
    stats: {
      before: "42%",
      after: "89%",
      improvement: "+47%"
    },
    videoUrl: "#video1"
  },
  {
    id: 2,
    name: "Lorem ipsum",
    position: "Lorem ipsum",
    company: "Global Retail Inc",
    companyLogo: "🛒",
    image: "👨‍💼",
    text: "Implementation across 15 countries was completed ahead of schedule. The results have exceeded our expectations.",
    stats: {
      before: "35%",
      after: "78%",
      improvement: "+43%"
    }
  },
  {
    id: 3,
    name: "Lorem ipsum",
    position: "Lorem ipsum",
    company: "FinTech Solutions",
    companyLogo: "💳",
    image: "👩‍💻",
    text: "The scalability and support during our European expansion was outstanding. Highly recommended for international deployments.",
    stats: {
      before: "28%",
      after: "82%",
      improvement: "+54%"
    }
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Global Medical Systems Inc",
    description: "Seamless EHR implementation across 50+ hospitals with customized integration",
    client: "",
    clientLogo: "🏥",
    results: [
      "98% patient data accuracy achieved through automated systems",
      "70% faster patient record access for medical staff",
      "Unified health platform across multiple specialties"
    ],
    duration: "8 months",
    location: "Multiple countries"
  },
  {
    id: 2,
    title: "Pharmaceutical Supply Chain Optimization MediPharm Global",
    description: "End-to-end inventory management system for critical medications.",
    client: "",
    clientLogo: "💊",
    results: [
      "45% reduction in drug shortages through predictive analytics",
      "60% faster medication distribution to partner clinics",
      "Real-time temperature monitoring for vaccine storage"
    ],
    duration: "5 months",
    location: "Worldwide"
  },
   {
    id: 3,
    title: "Telemedicine Platform Deployment HealthConnect Worldwide",
    description: "Scalable virtual care solution for rural healthcare access",
    client: "",
    clientLogo: "🩺",
    results: [
      "300% increase in patient consultations in remote areas",
      "85% patient satisfaction rate with virtual visits",
      "Integrated diagnostic device connectivity"
    ],
    duration: "3 months",
    location: "Rural healthcare networks across 8 countries"
  },
   {
    id: 4,
    title: "Medical Research Cloud Implementation BioResearch Consortium",
    description: "Secure data collaboration platform for clinical trial management",
    client: "",
    clientLogo: "🔬",
    results: [
      "90% faster clinical data processing for research teams",
      "100% regulatory compliance across international standards",
      "Multi-center trial coordination in real-time"
    ],
    duration: "7 months",
    location: "Research institutions across 12 countries"
  },
];

import { OfficeLocation, LeadershipMember, Milestone, ProductLaunch } from './types';

export const officeLocations: OfficeLocation[] = [
  {
    id: '1',
    city: 'San Francisco',
    country: 'USA',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    employees: 250
  },
  {
    id: '2',
    city: 'London',
    country: 'UK',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    employees: 180
  },
  {
    id: '3',
    city: 'Singapore',
    country: 'Singapore',
    coordinates: { lat: 1.3521, lng: 103.8198 },
    employees: 120
  },
  {
    id: '4',
    city: 'Berlin',
    country: 'Germany',
    coordinates: { lat: 52.5200, lng: 13.4050 },
    employees: 95
  },
  {
    id: '5',
    city: 'Tokyo',
    country: 'Japan',
    coordinates: { lat: 35.6762, lng: 139.6503 },
    employees: 110
  }
];

export const leadershipTeam: LeadershipMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    position: 'CEO',
    department: 'Executive',
    image: '/api/placeholder/150/150'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    position: 'CTO',
    department: 'Technology',
    image: '/api/placeholder/150/150'
  },
  {
    id: '3',
    name: 'Aisha Khan',
    position: 'COO',
    department: 'Operations',
    image: '/api/placeholder/150/150'
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'CPO',
    department: 'Product',
    image: '/api/placeholder/150/150'
  }
];

export const milestones: Milestone[] = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Insource Software started as a  startup',
    achievement: 'First 100 customers'
  },
  {
    year: '2018',
    title: 'Series A Funding',
    description: 'Secured $10M in funding for expansion',
    achievement: 'Expanded to 3 new countries'
  },
  {
    year: '2020',
    title: 'Digital Transformation Leader',
    description: 'Recognized as industry leader in digital solutions',
    achievement: '1M+ users worldwide'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Became worldwide provider serving millions',
    achievement: '5M+ active users'
  }
];

export const productLaunches: ProductLaunch[] = [
  {
    id: '1',
    name: 'Insource Platform v2.0',
    date: '2023 Q1',
    description: 'Next-generation digital transformation platform',
    image: '/api/placeholder/400/250',
    impact: '200% performance improvement'
  },
  {
    id: '2',
    name: 'Mobile Suite Pro',
    date: '2023 Q3',
    description: 'Enterprise mobile solution for remote teams',
    image: '/api/placeholder/400/250',
    impact: '500K+ downloads in first month'
  }
];