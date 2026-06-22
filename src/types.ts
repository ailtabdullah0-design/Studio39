export interface Project {
  id: string;
  title: string;
  category: 'video' | 'marketing' | 'graphic' | 'interior';
  image: string;
  client: string;
  tags: string[];
  description: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  details: string;
  features: string[];
  stats: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface WhyUsReason {
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}
