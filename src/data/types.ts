export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  companyLogo: string;
  image: string;
  text: string;
  stats: {
    before: string;
    after: string;
    improvement: string;
  };
  videoUrl?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  client: string;
  clientLogo: string;
  results: string[];
  duration: string;
  location: string;
}
export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  coordinates: { lat: number; lng: number };
  employees: number;
}

export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  achievement: string;
}

export interface ProductLaunch {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
  impact: string;
}


export interface ContentItem {
  id: string;
  type: 'trend' | 'deep-dive' | 'compliance' | 'supply-chain' | 'update';
  title: string;
  description: string;
  image?: string;
  author?: string;
  date: string;
  tags: string[];
}

export interface ContentSection {
  title: string;
  items: ContentItem[];
}

export interface ContentItem {
  id: string;
  type: 'trend' | 'deep-dive' | 'compliance' | 'supply-chain' | 'update';
  title: string;
  description: string;
  image?: string;
  author?: string;
  date: string;
  tags: string[];
}

export interface ContentSection {
  title: string;
  items: ContentItem[];
}


export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'documentation' | 'api' | 'guides' | 'whitepapers';
  link: string;
  tags: string[];
}

export interface ResourceSection {
  title: string;
  description: string;
  resources: ResourceItem[];
}