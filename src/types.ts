export type SectionId = 
  | 'home' 
  | 'about' 
  | 'skills' 
  | 'experience' 
  | 'projects' 
  | 'education' 
  | 'contact';

export type ThemeMode = 'dark' | 'light';

export interface MetadataChip {
  id: string;
  label: string;
  value: string;
  icon: string;
  href?: string;
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  subtext: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'systems' | 'web' | 'ai' | 'cli';
  description: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  demoVideos?: string[];
  githubUrl?: string;
  featured: boolean;
  metrics: string[];
  architectureOverview: string;
  keyChallenges: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: 'frontend' | 'backend' | 'devops' | 'ai_tools';
  years: number;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  summary: string;
  keyOutcomes: string[];
  techStack: string[];
  impactMetric: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
  type: 'degree' | 'certification' | 'award';
}

export interface ContactFormData {
  name: string;
  email: string;
  inquiryType: 'project' | 'consulting' | 'hiring' | 'general';
  message: string;
}
