export interface HeroCard {
  title: string;
  label: string;
  lessons: string;
  image: string;
}

export interface SkillItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CareerItem {
  title: string;
  description: string;
  salary: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug?: string;
  /** Optional unique id for new posts (used for stable React keys) */
  id?: string;
}

export interface Course {
  title: string;
  description: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  lessons: string;
  badge?: string;
}

export interface Tutor {
  name: string;
  role: string;
  bio: string;
  image: string;
  courses: string[];
  badges: string[];
}

export interface ContactInfo {
  salesEmail: string;
  productionEmail: string;
  salesPhone: string;
  productionPhone: string;
  address: string[];
}

export interface SiteContent {
  siteName: string;
  hero: {
    headline: string;
    subheadline: string;
    cards: HeroCard[];
  };
  skills: {
    title: string;
    items: SkillItem[];
    stats: { value: string; label: string }[];
    image: string;
  };
  team: {
    badge: string;
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  faqs: {
    title: string;
    subtitle: string;
    items: FaqItem[];
    cta: string;
  };
  careers: {
    title: string;
    subtitle: string;
    items: CareerItem[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
    cta: string;
  };
  courses: {
    title: string;
    subtitle: string;
    categories: string[];
    items: Course[];
  };
  tutors: {
    title: string;
    subtitle: string;
    items: Tutor[];
  };
  about: {
    title: string;
    subtitle: string;
    intro: string;
    mission: string;
    statsHeading: string;
    highlights: { title: string; description: string }[];
    stats: { label: string; value: string }[];
    values: { title: string; description: string }[];
  };
  contactPage: {
    title: string;
    subtitle: string;
  };
  applyPage: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: { label: string; href: string }[];
    resources: { label: string; href: string }[];
    newsletterTitle: string;
    newsletterSubtext: string;
    contact: ContactInfo;
    copyright: string;
    legal: { label: string; href: string }[];
  };
}
