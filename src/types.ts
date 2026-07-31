export type PageType = 
  | 'home'
  | 'about'
  | 'solutions'
  | 'industries'
  | 'team'
  | 'clients'
  | 'testimonials'
  | 'blog'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'admin';

export type AdminTab = 
  | 'dashboard'
  | 'team'
  | 'clients'
  | 'solutions'
  | 'blog'
  | 'testimonials'
  | 'messages'
  | 'settings';

export type DepartmentType = 
  | 'Legal'
  | 'Accounting & Finance'
  | 'Virtual Assistant'
  | 'Marketing'
  | 'Web & Software'
  | 'AI Solutions'
  | 'Design'
  | 'Business Support'
  | 'Executive'
  | 'Operations';

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: DepartmentType;
  shortDescription: string;
  skills: string[];
  email: string;
  phone: string;
  linkedIn: string;
  photoUrl: string;
  active: boolean;
  order: number;
}

export interface ClientItem {
  id: string;
  companyName: string;
  logoUrl: string;
  industry: string;
  country: string;
  description: string;
  website: string;
  featured: boolean;
  order: number;
}

export interface SolutionSubService {
  title: string;
  description: string;
  keyDeliverables?: string[];
}

export interface SolutionCategory {
  id: string;
  title: string;
  department: DepartmentType;
  slug: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  subServices: SolutionSubService[];
  practiceTags?: string[];
  keyBenefits: string[];
  typicalTimeline: string;
  contactEmail: string;
  featured: boolean;
  order: number;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  shortDescription: string;
  commonChallenges: string[];
  recommendedSolutions: string[];
  caseStudyHighlight: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  publishedDate: string;
  readTime: string;
  imageUrl: string;
  featured: boolean;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientTitle: string;
  companyName: string;
  logoUrl: string;
  avatarUrl: string;
  rating: number;
  quote: string;
  industry: string;
  solutionCategory: string;
  approved: boolean;
  order: number;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  solutionOfInterest: string;
  budgetRange: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'in_progress' | 'contacted' | 'archived';
  notes?: string;
}

export interface WebsiteSettings {
  siteName: string;
  tagline: string;
  logoText: string;
  contactEmails: {
    general: string;
    legal: string;
    accounting: string;
    marketing: string;
    support: string;
    careers: string;
  };
  phone: string;
  whatsapp: string;
  address: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    facebook: string;
    youtube: string;
    github: string;
  };
  footerDescription: string;
  copyrightText: string;
  adminPasskey?: string;
  adminRecoveryCode?: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Vetting & Quality' | 'Pricing & Models' | 'Onboarding' | 'Security & NDA';
  question: string;
  answer: string;
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}
