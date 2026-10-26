export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'web' | 'data' | 'devops' | 'bi' | 'erp' | 'mobile';
  github?: string;
  demo?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress';
  year: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'data' | 'devops' | 'database' | 'erp';
  level: number;
}

export interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description: string[];
  tags: string[];
  location?: string;
}