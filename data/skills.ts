import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5',      icon: 'html5',              color: '#E34F26', category: 'frontend', level: 5 },
  { name: 'CSS3',       icon: 'css3',               color: '#1572B6', category: 'frontend', level: 5 },
  { name: 'JavaScript', icon: 'javascript',          color: '#F7DF1E', category: 'frontend', level: 4 },
  { name: 'TypeScript', icon: 'typescript',          color: '#3178C6', category: 'frontend', level: 3 },
  { name: 'React',      icon: 'react',               color: '#61DAFB', category: 'frontend', level: 4 },
  { name: 'Angular',    icon: 'angularjs',           color: '#DD0031', category: 'frontend', level: 4 },

  // Backend
  { name: 'Java',       icon: 'java',                color: '#007396', category: 'backend',  level: 5 },
  { name: 'Spring Boot',icon: 'spring',              color: '#6DB33F', category: 'backend',  level: 4 },
  { name: 'PHP',        icon: 'php',                 color: '#777BB4', category: 'backend',  level: 4 },
  { name: 'Laravel',    icon: 'laravel',             color: '#FF2D20', category: 'backend',  level: 4 },

  // Data & AI
  { name: 'Python',     icon: 'python',              color: '#3776AB', category: 'data',     level: 4 },
  { name: 'Pandas',     icon: 'pandas',              color: '#150458', category: 'data',     level: 4 },
  { name: 'NumPy',      icon: 'numpy',               color: '#013243', category: 'data',     level: 3 },
  { name: 'Power BI',   icon: 'powerbi',             color: '#F2C811', category: 'data',     level: 4 },

  // Cloud & DevOps
  { name: 'Docker',     icon: 'docker',              color: '#2496ED', category: 'devops',   level: 4 },
  { name: 'AWS',        icon: 'amazonwebservices',   color: '#FF9900', category: 'devops',   level: 3 },
  { name: 'Git',        icon: 'git',                 color: '#F05032', category: 'devops',   level: 5 },
  { name: 'Linux',      icon: 'linux',               color: '#FCC624', category: 'devops',   level: 3 },

  // Databases
  { name: 'MySQL',      icon: 'mysql',               color: '#4479A1', category: 'database', level: 5 },
  { name: 'MongoDB',    icon: 'mongodb',             color: '#47A248', category: 'database', level: 4 },
  { name: 'PostgreSQL', icon: 'postgresql',          color: '#336791', category: 'database', level: 3 },

  // ERP & IS
  { name: 'Odoo',       icon: 'odoo',                color: '#714B67', category: 'erp',      level: 4 },
];

export const categoryLabels: Record<Skill['category'] | 'all', string> = {
  all:      'All',
  frontend: 'Frontend',
  backend:  'Backend',
  data:     'Data & BI',
  devops:   'Cloud & DevOps',
  database: 'Databases',
  erp:      'ERP & IS',
};