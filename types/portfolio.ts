export type SocialPlatform = "github" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  icon: "phone" | "location" | "email" | "birthday";
}

export interface Profile {
  name: string;
  title: string;
  image: string;
  cvUrl: string;
  socials: SocialLink[];
  contactDetails: ContactDetail[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: "home" | "resume" | "works" | "contact";
}

export interface Service {
  title: string;
  description: string;
  icon: "design" | "development" | "photography" | "mobile";
  bgColor: string;
  iconColor: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface TechnicalSkill {
  name: string;
  icon: string;
  level: SkillLevel;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  type: string;
  languages: string[];
  previewUrl: string;
  description: string;
  thumbnail: string;
  featuredImage: string;
  bgColor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ContactInfoCard {
  title: string;
  values: string[];
  theme: "pink" | "blue";
}

export interface PortfolioData {
  profile: Profile;
  navigation: NavItem[];
  aboutMe: string[];
  services: Service[];
  education: TimelineEntry[];
  experience: TimelineEntry[];
  skills: TechnicalSkill[];
  projectCategories: string[];
  projects: Project[];
  blogs: BlogPost[];
  contact: {
    intro: string;
    infoCards: ContactInfoCard[];
  };
}
