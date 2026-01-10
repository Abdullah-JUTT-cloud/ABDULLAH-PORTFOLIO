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
  // { name: 'experience', href: '#experience' },
  { name: 'contact', href: '#contact' },
] as const;

export const EXPERTISE_DATA = [
  {
    title: 'Software Development',
    highlight: 'Development',
    description:
      'Experienced in both functional and OOP and DSA: JavaScript, TypeScript, Java,C++.',
    icon: Code,
    technologies: ['JavaScript', 'TypeScript', 'Java', 'C++','DSA'],
  },
  {
    title: 'Frontend Dev',
    highlight: 'React, NextJS,TypeScript',
    description:
      'Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS, GASP, LocomoticeJS frameworks.',
    icon: Code,
    technologies: [
      'React',
      'NextJS',
      'Tailwind',
      'Framer Motion',
      'TypeScript',
      'GASP',
      'LocomoticeJS',
      'JavaScript',
    ],
  },
  {
    title: 'Backend Dev',
    highlight: 'Node.js, Express, MongoDB, SQL',
    description:
      'Skilled in developing scalable backend solutions and APIs using Node.js, Express, and MongoDB.',
    icon: Database,
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis','SQL'],
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: 'Software Engineering Student',  
    company: 'University',
    location: 'Pakistan',
    period: 'Present',
    workType: 'On-site' as const,
    description:
      'Pursuing knowledge in software engineering principles, algorithms, and system design. Actively building projects to apply theoretical concepts in practical scenarios.',
    technologies: [
      { name: 'C++', level: 85, icon: Code },
      { name: 'Java', level: 85, icon: Code },
      { name: 'Data Structures', level: 80, icon: Database },
      { name: 'Algorithms', level: 80, icon: Cpu },
      { name: 'SQL', level: 75, icon: Database },
    ],
    website: '#',
    logo: 'UNI',
    expanded: true,
    achievements: [
      'Mastered Data Structures and Algorithms',
      'Built Sudoku solver using Backtracking',
      'Developed strong foundation in OOP and Database Design',
      'Consistently exploring new technologies',
    ],
    type: 'Frontend' as const,
    contact: '',
  },
  {
    title: 'Full Stack Engineer',
    company: 'Freelance / Projects',
    location: 'Remote',
    period: '2023 - Present',
    workType: 'Remote' as const,
    description:
      'Developing modern web applications using the MERN stack. Building projects like HOMEIGO (Real Estate Platform) and Weather Applications. Focusing on responsive UI, SEO optimization, and scalable backend architecture.',
    technologies: [
      { name: 'React.js', level: 90, icon: Code },
      { name: 'Node.js', level: 85, icon: Database },
      { name: 'Express.js', level: 85, icon: Database },
      { name: 'MongoDB', level: 85, icon: Database },
      { name: 'Tailwind CSS', level: 90, icon: Code },
    ],
    website: 'https://github.com/Abdullah-JUTT-cloud',
    logo: 'FS',
    expanded: false,
    achievements: [
      'Built full-stack real estate platform (HOMEIGO)',
      'Developed real-time chat applications',
      'Implemented secure authentication and REST APIs',
      'Created responsive weather forecasting apps',
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
