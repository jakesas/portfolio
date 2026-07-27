import { Project, ExperienceItem, SkillCategory, EducationItem, StatItem, MetadataChip } from '../types';
import portraitImg from '../assets/images/New Profile Picture.png';
import floodImg from '../assets/images/flood_warning_system.png';
import autonomousPcImg from '../assets/images/autonomous_pc_troubleshooter.png';
import kapenatinImg from '../assets/images/kapenatin.png';
import cdpeImg from '../assets/images/cdpe_freelancing.png';
import fixMateImg from '../assets/images/fix_mate.jpg';

export const PORTFOLIO_HEADER = {
  name: "JOSEQUEL PANAGUITON JR.",
  handle: "jakesas",
  title: "JUNIOR FULL STACK DEVELOPER, TECHNICAL SUPPORT, AND DATA ENTRY SPECIALIST",
  location: "SAGAY CITY, NEGROS OCCIDENTAL, PHILIPPINES // UTC+08:00",
  status: "OPEN FOR OPPORTUNITIES",
  version: "V2.4.0_PROD",
  portraitImage: portraitImg
};

export const METADATA_CHIPS: MetadataChip[] = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'josequelpanaguiton5@gmail.com',
    icon: 'Mail',
    href: 'mailto:josequelpanaguiton5@gmail.com'
  },
  {
    id: 'phone',
    label: 'PHONE',
    value: '+63 9988024269',
    icon: 'Phone',
    href: 'tel:+639988024269'
  },
  {
    id: 'location',
    label: 'LOCATION',
    value: 'SAGAY CITY, PHILIPPINES',
    icon: 'MapPin',
    href: 'https://maps.google.com/?q=Sagay+City+Negros+Occidental'
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/jose-panaguiton',
    icon: 'Linkedin',
    href: 'https://linkedin.com'
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'github.com/jakesas',
    icon: 'Github',
    href: 'https://github.com/jakesas'
  },
  {
    id: 'status',
    label: 'STATUS',
    value: 'OPEN FOR OPPORTUNITIES',
    icon: 'Briefcase'
  }
];

export const TECH_STACK_GROUPS = [
  {
    label: 'DEV',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss' },
      { name: 'PHP', icon: 'SiPhp' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
  {
    label: 'SUPPORT',
    items: [
      { name: 'Hardware', icon: 'Monitor' },
      { name: 'Network', icon: 'Network' },
      { name: 'Software', icon: 'Terminal' },
    ],
  },
  {
    label: 'DATA',
    items: [
      { name: 'Excel', icon: 'FileSpreadsheet' },
      { name: 'Office 365', icon: 'FileText' },
    ],
  },
  {
    label: 'CLOUD',
    items: [
      { name: 'Google Cloud', icon: 'SiGooglecloud' },
    ],
  },
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'flood-warning-system',
    title: 'FLOOD EARLY WARNING SYSTEM',
    tagline: 'Real-time flood monitoring and early warning alert system',
    category: 'systems',
    description: 'A flood early warning system that monitors real-time water levels and weather data to provide timely alerts and notifications for disaster preparedness.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    image: floodImg,
    demoUrl: '/flood-demo.html',
    demoVideos: ['https://www.youtube.com/embed/dDXbOTAWqBc', 'https://www.youtube.com/embed/EIP5Wh5cILY'],
    githubUrl: 'https://github.com/jakesas/flood-early-warning-system',
    featured: true,
    metrics: ['Real-time Monitoring', 'Early Warning Alerts', 'Data-driven Insights'],
    architectureOverview: 'Built with a modern full-stack architecture using Next.js and Node.js, integrating real-time data APIs for water level and weather monitoring with automated alert dispatch.',
    keyChallenges: [
      'Integrated multiple real-time data sources for accurate flood level monitoring.',
      'Designed a responsive alert system for timely notifications to end users.'
    ]
  },
  {
    id: 'kapenatin',
    title: 'KAPENATIN',
    tagline: 'Point-of-sale system for Kapenatin Coffee Shop',
    category: 'web',
    description: 'A complete point-of-sale (POS) system for Kapenatin Coffee Shop featuring order taking, billing, menu management, and sales tracking.',
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    image: kapenatinImg,
    demoVideos: ['https://www.youtube.com/embed/VlNscI0JkHg'],
    githubUrl: 'https://github.com',
    featured: true,
    metrics: ['POS Order Taking', 'Billing & Receipts', 'Sales Dashboard'],
    architectureOverview: 'Built with PHP backend and MySQL database for real-time transaction processing, featuring an intuitive POS interface for order entry, payment handling, and daily sales reporting.',
    keyChallenges: [
      'Designed a complete order lifecycle system from menu browsing to order fulfillment.',
      'Built an intuitive admin interface for managing menu items, orders, and customer data.'
    ]
  },
  {
    id: 'cdpe-freelancing',
    title: 'CDPE LOCAL FREELANCING',
    tagline: 'Career Development Program and Employer platform for local freelancers',
    category: 'web',
    description: 'A career development and employment platform connecting local freelancers with employers, featuring job listings, skill profiling, and program management tools.',
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    image: cdpeImg,
    demoVideos: ['https://www.youtube.com/embed/pcTmeme4Gu0'],
    githubUrl: 'https://github.com',
    featured: true,
    metrics: ['Job Listings', 'Freelancer Profiles', 'Program Management'],
    architectureOverview: 'Built with PHP backend and MySQL database for managing job postings, freelancer applications, and career development program tracking.',
    keyChallenges: [
      'Designed a dual-sided platform serving both freelancers and employer needs.',
      'Built a program management system for tracking career development milestones.'
    ]
  },
  {
    id: 'fix-mate',
    title: 'FIX MATE',
    tagline: 'AI-powered PC troubleshooting and repair support assistant',
    category: 'ai',
    description: 'An AI-driven support system that diagnoses hardware and software issues, provides step-by-step repair guidance, and automates common troubleshooting workflows for PC maintenance.',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS'],
    image: fixMateImg,
    imageFit: 'contain',
    githubUrl: 'https://github.com',
    featured: false,
    demoVideos: ['https://www.youtube.com/embed/Aa-6IRO5gCc', 'https://www.youtube.com/embed/aa-LHudCgBk'],
    metrics: ['AI Diagnostics', 'Step-by-Step Repair Guides', 'Automated Troubleshooting'],
    architectureOverview: 'Built with React Native for cross-platform access and Firebase for real-time data sync, integrating AI-powered diagnostic engines to analyze system logs and recommend repair actions.',
    keyChallenges: [
      'Developed an AI diagnostic engine that identifies common PC hardware and software issues from user-reported symptoms.',
      'Designed an intuitive step-by-step repair workflow accessible to non-technical users.'
    ]
  },
  {
    id: 'server-pc-troubleshooter',
    title: 'SERVER PC TROUBLE SHOOTER',
    tagline: 'Server and PC infrastructure diagnostics and maintenance assistant',
    category: 'systems',
    description: 'A diagnostic system that monitors server and PC health, detects hardware and software issues, analyzes system logs, and provides step-by-step troubleshooting for enterprise environments.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    image: autonomousPcImg,
    demoVideos: ['https://www.youtube.com/embed/0vAX0VB_T8E'],
    githubUrl: 'https://github.com/jakesas',
    featured: true,
    metrics: ['Network Diagnostics', 'Server Log Analysis', 'Guided Repair Flow'],
    architectureOverview: 'Built with a modular diagnostic pipeline using Next.js for the frontend interface and Node.js for the backend inference engine, integrating system log parsers and hardware/software probe agents.',
    keyChallenges: [
      'Designed a diagnostic rule engine that adapts to varying hardware configurations and server OS environments.',
      'Built a real-time log streaming parser capable of identifying error patterns across system and server sources.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'fullstack',
    title: 'FULL STACK DEVELOPMENT',
    skills: [
      { name: 'TypeScript / JavaScript (ESNext)', level: 98, category: 'fullstack', years: 6, highlight: true },
      { name: 'React 18/19 & Next.js', level: 96, category: 'fullstack', years: 6, highlight: true },
      { name: 'Tailwind CSS v3/v4 & Neo-Brutalism', level: 95, category: 'fullstack', years: 5, highlight: true },
      { name: 'HTML5 Canvas & WebGL / Shader Math', level: 88, category: 'fullstack', years: 4, highlight: true },
      { name: 'Framer Motion & Micro-Interactions', level: 92, category: 'fullstack', years: 4 },
      { name: 'State Management & Performance Opt.', level: 94, category: 'fullstack', years: 6 },
      { name: 'Node.js / Express / Fastify', level: 95, category: 'fullstack', years: 6, highlight: true },
      { name: 'RESTful API & GraphQL Design', level: 92, category: 'fullstack', years: 5 },
      { name: 'PostgreSQL / Cloud SQL / Drizzle ORM', level: 90, category: 'fullstack', years: 5, highlight: true },
      { name: 'Firestore & Firebase Architecture', level: 88, category: 'fullstack', years: 4 },
      { name: 'WebSockets & Event-Driven Pipelines', level: 91, category: 'fullstack', years: 5 },
      { name: 'Security & Auth (OAuth2, JWT, Sanitize)', level: 90, category: 'fullstack', years: 5 }
    ]
  },
  {
    id: 'devops_ai',
    title: 'DEVOPS & AI INTEGRATION',
    skills: [
      { name: 'Google Cloud Platform (Cloud Run, Functions)', level: 90, category: 'devops_ai', years: 5, highlight: true },
      { name: 'Docker Containerization & Multi-Stage Builds', level: 92, category: 'devops_ai', years: 5 },
      { name: 'CI/CD (GitHub Actions, Automated Testing)', level: 88, category: 'devops_ai', years: 4 },
      { name: 'Vite / ESBuild / Webpack Tooling', level: 94, category: 'devops_ai', years: 5 },
      { name: 'Git Workflow & Release Management', level: 96, category: 'devops_ai', years: 6 },
      { name: 'Gemini API (@google/genai SDK)', level: 94, category: 'devops_ai', years: 3, highlight: true },
      { name: 'Function Calling & Grounding Pipelines', level: 90, category: 'devops_ai', years: 2 },
      { name: 'Prompt Engineering & Structured JSON Output', level: 95, category: 'devops_ai', years: 3 },
      { name: 'LLM Proxy & Token Optimization', level: 89, category: 'devops_ai', years: 2 }
    ]
  },
  {
    id: 'technical',
    title: 'TECHNICAL SKILLS',
    skills: [
      { name: 'Hardware Troubleshooting', level: 100, category: 'technical', years: 0, highlight: true },
      { name: 'Software Troubleshooting', level: 100, category: 'technical', years: 0, highlight: true },
      { name: 'Network Troubleshooting', level: 100, category: 'technical', years: 0, highlight: true },
      { name: 'Network Configuration', level: 100, category: 'technical', years: 0, highlight: true },
      { name: 'CCTV Setup', level: 100, category: 'technical', years: 0, highlight: true },
      { name: 'Printer Troubleshooting', level: 100, category: 'technical', years: 0, highlight: true },
      { name: 'Microsoft 365', level: 100, category: 'technical', years: 0, highlight: true }
    ]
  },
  {
    id: 'data_entry',
    title: 'DATA ENTRY',
    skills: [
      { name: 'Data Entry', level: 100, category: 'data_entry', years: 0, highlight: true },
      { name: 'Microsoft Office', level: 100, category: 'data_entry', years: 0, highlight: true },
      { name: 'Microsoft Word', level: 100, category: 'data_entry', years: 0, highlight: true },
      { name: 'Microsoft Excel', level: 100, category: 'data_entry', years: 0, highlight: true },
      { name: 'Microsoft PowerPoint', level: 100, category: 'data_entry', years: 0, highlight: true }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'GNET NETWORK AND DATA SOLUTION',
    role: 'TECHNICAL SUPPORT & FIELD OPERATIONS',
    period: 'JAN 2026 — PRESENT',
    location: 'BACOLOD CITY, NEGROS OCCIDENTAL',
    isCurrent: true,
    summary: 'On-the-job training at Gnet Network and Data Solution handling fiber optic installations, network troubleshooting, client database management, and inventory system development.',
    keyOutcomes: [
      'Performed fiber optic line and connector installation, network connectivity troubleshooting, and technical field support.',
      'Maintained and updated client master list including monthly payment records, internet subscription plan upgrades, and account status monitoring.',
      'Participated in the development of an inventory management system that tracked inventory levels, device assignments, technician tool check-outs, and return equipment records.'
    ],
    techStack: ['Fiber Optics', 'Network Configuration', 'Database Management', 'Inventory System Dev', 'Technical Support'],
    impactMetric: 'FIBER INSTALLATION // CLIENT DATABASE // INVENTORY SYSTEM'
  },
  {
    id: 'exp-2',
    company: 'FREELANCE / INDEPENDENT CONTRACTOR',
    role: 'JUNIOR FULL STACK DEVELOPER',
    period: '2022 — 2026',
    location: 'SAGAY CITY, PHILIPPINES',
    summary: 'Developed and maintained web applications for small businesses and personal projects, handling both frontend and backend development from concept to deployment.',
    keyOutcomes: [
      'Built responsive websites and web applications using HTML, CSS, JavaScript, React, and Node.js.',
      'Provided end-to-end development services including database setup, API integration, and deployment.',
      'Managed multiple projects simultaneously, delivering on time and within scope.'
    ],
    techStack: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Git', 'Tailwind CSS'],
    impactMetric: 'MULTIPLE WEB PROJECTS // FULL STACK DELIVERY'
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
    institution: 'NORTH NEGROS COLLEGE',
    period: '2026',
    location: 'CADIZ CITY, NEGROS OCCIDENTAL',
    highlights: [
      'Completed Bachelor of Science in Computer Science.'
    ],
    type: 'degree'
  },
  {
    id: 'cert-1',
    degree: 'EPAS NC II & CSS NC II',
    institution: 'TESDA',
    period: '2025',
    location: 'PHILIPPINES',
    highlights: [
      'EPAS NC II (Electronic Products Assembly and Servicing)',
      'CSS NC II (Computer Systems Servicing)'
    ],
    type: 'certification'
  },
  {
    id: 'award-1',
    degree: 'BEST IN UI/UX AND BACKEND DEVELOPER',
    institution: 'NORTH NEGROS COLLEGE',
    period: '2025',
    location: 'CADIZ CITY, NEGROS OCCIDENTAL',
    highlights: [
      'Awarded Best in UI/UX and Backend Developer at school.'
    ],
    type: 'award'
  }
];

export const PHILOSOPHY_POINTS = [
  {
    number: '01',
    title: 'ZERO-BLOAT PRAGMATISM',
    description: 'Every line of code and every library dependency must justify its existence. Lean code runs faster, breaks less, and stays maintainable.'
  },
  {
    number: '02',
    title: 'DETERMINISTIC STATE & TYPES',
    description: 'Leverage strict TypeScript contracts to catch errors at compile-time rather than runtime. Predictable data flows produce rock-solid systems.'
  },
  {
    number: '03',
    title: 'SUB-50MS UI INTENT',
    description: 'Micro-interactions and hotkey support make tools feel like an extension of the human mind. Perception of speed is fundamental to usability.'
  },
  {
    number: '04',
    title: 'RADICAL AESTHETIC INTEGRITY',
    description: 'Monochrome contrast, sharp edges, and purposeful typography reflect precision engineering. Form follows function with uncompromising craft.'
  }
];
