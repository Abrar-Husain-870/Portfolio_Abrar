export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Next.js' | 'React' | 'HTML' | 'Fullstack';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  spotlight?: boolean;
  role?: string;
  impact?: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
  numericValue: number;
  suffix: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  details: string[];
  type: 'experience' | 'education' | 'leadership';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'avatar';
  text: string;
  timestamp: string;
}
