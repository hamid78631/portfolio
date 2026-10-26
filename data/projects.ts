import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'PneumoScan AI',
    description:
      'Explainable AI web app that detects pneumonia from chest X-rays and shows Grad-CAM heatmaps of the regions driving each prediction, not just a raw classification. Built as an engineering capstone project.',
    tags: ['React', 'Laravel', 'FastAPI', 'TensorFlow', 'Grad-CAM', 'MySQL'],
    category: 'data',
    github: 'https://github.com/hamid78631/PneumoScan',
    featured: true,
    status: 'completed',
    year: '2026',
  },
  {
    id: '2',
    title: 'DevHub',
    description:
      'Full-stack developer community platform blending Dev.to-style article publishing, GitHub-style project showcases, and Discord-style real-time chat with WebSockets, notifications and newsletters.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'MongoDB', 'Redis', 'React', 'Docker'],
    category: 'web',
    github: 'https://github.com/hamid78631/debhub',
    demo: 'https://debhub.vercel.app',
    featured: true,
    status: 'completed',
    year: '2026',
  },
  {
    id: '3',
    title: 'CollabTask',
    description:
      'Trello/Jira-inspired collaborative task manager with multi-workspace boards, Kanban and list views, role-based permissions, and full task lifecycle tracking from backlog to done.',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
    category: 'web',
    github: 'https://github.com/hamid78631/collab-task',
    featured: true,
    status: 'in-progress',
    year: '2026',
  },
  {
    id: '4',
    title: 'ProLoc — Odoo ERP Deployment',
    description:
      'Dockerized Odoo 17 ERP setup for a rental/tooling business, with PostgreSQL persistence and a path to Contacts, Inventory, Purchasing, Invoicing and Maintenance modules.',
    tags: ['Odoo', 'Docker', 'PostgreSQL', 'WSL2'],
    category: 'erp',
    github: 'https://github.com/hamid78631/ProLoc',
    status: 'in-progress',
    year: '2026',
  },
  {
    id: '5',
    title: 'AWS Zabbix Monitoring',
    description:
      'Centralized supervision platform deployed on AWS EC2: a containerized Zabbix server monitoring a hybrid fleet of Linux and Windows Server hosts over a custom VPC.',
    tags: ['AWS', 'Docker Compose', 'Zabbix', 'Ubuntu', 'Windows Server'],
    category: 'devops',
    github: 'https://github.com/hamid78631/aws-zabbix-monitoring',
    status: 'completed',
    year: '2026',
  },
  {
    id: '6',
    title: 'eBanking App',
    description:
      'Banking application split into independent frontend and backend services, covering account operations behind a secured Java backend.',
    tags: ['Java', 'MySQL'],
    category: 'web',
    github: 'https://github.com/hamid78631/ebanking-app',
    status: 'in-progress',
    year: '2026',
  },
  {
    id: '7',
    title: 'Librasphere',
    description:
      'Modern library management platform with separate frontend, backend and analytics modules for tracking catalogues, loans and usage.',
    tags: ['JavaScript', 'React'],
    category: 'web',
    github: 'https://github.com/hamid78631/librasphere',
    status: 'in-progress',
    year: '2025',
  },
  {
    id: '8',
    title: 'AgenceImmo',
    description:
      'Real estate agency showcase built on Laravel, with Eloquent-backed property listings, migrations, and Vite-bundled frontend assets.',
    tags: ['Laravel', 'PHP', 'Vite', 'MySQL'],
    category: 'web',
    github: 'https://github.com/hamid78631/AgenceImmo',
    status: 'in-progress',
    year: '2026',
  },
  {
    id: '9',
    title: 'SnapFind',
    description:
      'React Native concept app: photograph a real-world object and find nearby retailers that sell it, using fine-grained visual search and geolocation instead of generic category matching.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    category: 'mobile',
    github: 'https://github.com/hamid78631/snapfind',
    status: 'in-progress',
    year: '2026',
  },
];

export const projectCategories = [
  { id: 'all',    label: 'All Projects' },
  { id: 'web',    label: 'Web Dev' },
  { id: 'data',   label: 'Data Science' },
  { id: 'devops', label: 'Cloud / DevOps' },
  { id: 'erp',    label: 'ERP & IS' },
  { id: 'mobile', label: 'Mobile' },
] as const;