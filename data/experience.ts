import type { TimelineItem } from '@/types';

export const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Full-Stack Developer',
    organization: 'Company / Freelance',
    period: '2023 — Present',
    description: [
      'Developed scalable web applications with Spring Boot & React',
      'Built and deployed containerized services using Docker & AWS',
      'Designed relational and NoSQL database schemas',
      'Implemented CI/CD pipelines and automated deployments',
    ],
    tags: ['Spring Boot', 'React', 'Docker', 'AWS', 'MySQL'],
    location: 'Remote',
  },
  {
    type: 'work',
    title: 'Data Analyst & BI Developer',
    organization: 'Company / Project',
    period: '2022 — 2023',
    description: [
      'Built Power BI dashboards for executive KPI reporting',
      'Designed ETL pipelines to consolidate data from multiple sources',
      'Performed exploratory data analysis and predictive modeling with Python',
      'Delivered Odoo ERP customizations and integrations',
    ],
    tags: ['Power BI', 'Python', 'Odoo', 'SQL', 'ETL'],
    location: 'On-site',
  },
  {
    type: 'work',
    title: 'Junior Developer',
    organization: 'Internship / First Role',
    period: '2021 — 2022',
    description: [
      'Developed PHP/Laravel web applications for SMB clients',
      'Built RESTful APIs consumed by Angular frontends',
      'Handled MySQL database design and query optimization',
    ],
    tags: ['Laravel', 'PHP', 'Angular', 'MySQL'],
    location: 'On-site',
  },
  {
    type: 'education',
    title: "Master's in Computer Science",
    organization: 'University',
    period: '2021 — 2023',
    description: [
      'Specialization in Software Engineering & Information Systems',
      'Thesis on data-driven decision making in ERP systems',
      'Top of graduating class',
    ],
    tags: ['Software Engineering', 'IS', 'Data Science'],
  },
  {
    type: 'education',
    title: "Bachelor's in Computer Science",
    organization: 'University',
    period: '2018 — 2021',
    description: [
      'Core curriculum: algorithms, databases, web development, networking',
      'Final project: E-commerce platform with Java Spring Boot',
    ],
    tags: ['Java', 'Web Dev', 'Databases', 'Algorithms'],
  },
];