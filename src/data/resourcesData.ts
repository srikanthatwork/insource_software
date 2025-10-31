import { ResourceSection } from './types';

export const resourcesData: ResourceSection = {
  title: "Developer Resources",
  description: "Everything you need to build amazing applications with our platform",
  resources: [
    {
      id: "1",
      title: "Documentation",
      description: "Comprehensive guides and reference materials",
      icon: "📚",
      category: "documentation",
      link: "/docs",
      tags: ["getting-started", "tutorials", "reference"]
    },
    {
      id: "2",
      title: "API Portal",
      description: "Interactive API documentation and testing tools",
      icon: "🔌",
      category: "api",
      link: "/api",
      tags: ["rest", "graphql", "testing"]
    },
    {
      id: "3",
      title: "FAQs",
      description: "Frequently asked questions and solutions",
      icon: "❓",
      category: "guides",
      link: "/faq",
      tags: ["help", "troubleshooting", "common-issues"]
    },
    {
      id: "4",
      title: "Whitepapers",
      description: "In-depth technical papers and case studies",
      icon: "📄",
      category: "whitepapers",
      link: "/whitepapers",
      tags: ["research", "case-studies", "technical"]
    },
    {
      id: "5",
      title: "Product Screenshots",
      description: "Visual guides and product interface examples",
      icon: "🖼️",
      category: "guides",
      link: "/screenshots",
      tags: ["visual", "ui", "examples"]
    },
    {
      id: "6",
      title: "Developer Diagrams",
      description: "Architecture diagrams and system overviews",
      icon: "📊",
      category: "documentation",
      link: "/diagrams",
      tags: ["architecture", "system-design", "flowcharts"]
    }
  ]
};