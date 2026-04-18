// Portfolio Constants

import {
  Code,
  Database,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Cpu,
  Globe,
} from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'home', href: '#home' },
  { name: 'expertise', href: '#expertise' },
  { name: 'work', href: '#work' },
  { name: 'experience', href: '#experience' },
  { name: 'contact', href: '#contact' },
] as const;



export const EXPERTISE_DATA = [
  {
    title: 'Software Engineering',
    highlight: 'DSA, OOP, Systems Design,Databse Designs',
    description:
      'Strong foundation in data structures, algorithms, and object-oriented design. Building efficient, scalable solutions across multiple languages.',
    icon: Code,
    technologies: ['C++', 'Java', 'JavaScript', 'TypeScript', 'DSA'],
  },
  {
    title: 'Frontend Engineering',
    highlight: 'React, Next.js, React Native, Typescript',
    description:
      'Designing and building high-performance user interfaces with modern frameworks and smooth interactive experiences.',
    icon: Code,
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'LocomotiveJS',
      'React Native',
    ],
  },
  {
    title: 'Backend Engineering',
    highlight: 'Spring Boot, Node.js, APIs',
    description:
      'Developing scalable backend systems and APIs with strong focus on performance, structure, and maintainability.',
    icon: Database,
    technologies: [
      'Spring Boot',
      'Java',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'SQL',
    ],
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: 'MERN Stack Developer',
    company: 'Devverx',
    location: 'Pakistan',
    period: '1 Year',
    workType: 'On-site' as const,
    description:
      'Worked on building and maintaining full-stack web applications using the MERN stack, focusing on scalable architecture, API development, and responsive UI.',
    technologies: [
      { name: 'React.js', level: 90, icon: Code },
      { name: 'Node.js', level: 85, icon: Database },
      { name: 'Express.js', level: 85, icon: Database },
      { name: 'MongoDB', level: 85, icon: Database },
      { name: 'Tailwind CSS', level: 90, icon: Code },
    ],
    website: '#',
    logo: 'DVX',
    expanded: true,
    achievements: [
      'Built and deployed production-level MERN applications',
      'Designed RESTful APIs and handled backend logic',
      'Improved UI performance and responsiveness',
      'Collaborated on real-world client projects',
    ],
    type: 'Full-Stack' as const,
  },
  {
    title: 'Software Engineering Student',
    company: 'University',
    location: 'Pakistan',
    period: 'Present',
    workType: 'On-site' as const,
    description:
      'Studying core software engineering concepts including system design, algorithms, and database systems while applying them in real-world projects.',
    technologies: [
      { name: 'C++', level: 85, icon: Code },
      { name: 'Java', level: 85, icon: Code },
      { name: 'Data Structures', level: 80, icon: Database },
      { name: 'Algorithms', level: 80, icon: Cpu },
      { name: 'SQL', level: 75, icon: Database },
    ],
    website: '#',
    logo: 'UNI',
    expanded: false,
    achievements: [
      'Built algorithmic projects including backtracking systems',
      'Developed strong OOP and database design skills',
      'Applied theoretical concepts in full-stack applications',
    ],
    type: 'Backend' as const,
  },
  {
    title: 'Full Stack Engineer',
    company: 'Freelance / Projects',
    location: 'Remote',
    period: '2023 - Present',
    workType: 'Remote' as const,
    description:
      'Building full-stack applications with focus on performance, scalability, and real-world usability across multiple domains.',
    technologies: [
      { name: 'React.js', level: 90, icon: Code },
      { name: 'Node.js', level: 85, icon: Database },
      { name: 'Express.js', level: 85, icon: Database },
      { name: 'MongoDB', level: 85, icon: Database },
      { name: 'Spring Boot', level: 80, icon: Database },
    ],
    website: 'https://github.com/Abdullah-JUTT-cloud',
    logo: 'FS',
    expanded: false,
    achievements: [
      'Built real estate platform (HOMEIGO)',
      'Developed real-time applications and APIs',
      'Implemented authentication and scalable backend systems',
      'Worked across MERN and Spring Boot ecosystems',
    ],
    type: 'Full-Stack' as const,
  },
] as const;

export const CONTACT_METHODS = [
  {
    icon: Mail,
    href: 'mailto:abdullahjuttjutt910@gmail.com',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/muhammad-abdullah-757aa2287/',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Github,
    href: 'https://github.com/Abdullah-JUTT-cloud',
    color: 'hsl(var(--accent))',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/Abdullah-JUTT-cloud',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/muhammad-abdullah-757aa2287/',
    color: 'hsl(var(--primary))',
  },
  {
    icon: Mail,
    href: 'mailto:abdullahjuttjutt910@gmail.com',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/abdullah_jutt.44?igsh=dGVwODBvcnN2N3c0',
    color: 'hsl(var(--primary))',
  },
] as const;

export const ANIMATION_DELAYS = {
  STAGGER: 0.1,
  INITIAL: 0.2,
  HEADER: 0.4,
  CONTENT: 0.6,
  CARDS: 0.8,
} as const;

export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const CONTACT_INFO = {
  email: 'abdullahjuttjutt910@gmail.com', // Update with your actual email
  phone: '+92 3214194045', // Update with your actual phone
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/muhammad-abdullah-757aa2287/',
  github: 'https://github.com/Abdullah-JUTT-cloud',
} as const;
