import { Testimonial, CaseStudy } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
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
    name: "Michael Chen",
    position: "Operations Director",
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
    name: "Emma Rodriguez",
    position: "VP of Technology",
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
    title: "Global E-commerce Platform Deployment",
    description: "Seamless integration across 12 countries with localized solutions",
    client: "Global Retail Inc",
    clientLogo: "🛒",
    results: [
      "45% increase in conversion rates",
      "60% reduction in loading times",
      "Unified platform across regions"
    ],
    duration: "6 months",
    location: "Multiple countries"
  },
  {
    id: 2,
    title: "Enterprise SaaS Implementation",
    description: "Multi-national deployment with custom integration",
    client: "TechCorp Global",
    clientLogo: "🏢",
    results: [
      "78% improvement in team productivity",
      "95% user adoption rate",
      "24/7 global support coverage"
    ],
    duration: "4 months",
    location: "Worldwide"
  }
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