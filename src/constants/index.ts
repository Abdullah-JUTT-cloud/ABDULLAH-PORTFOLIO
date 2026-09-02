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
  Terminal,
  ShieldCheck,
  BrainCircuit,
  Sparkles,
  Crosshair,
  Bug,
  Network,
  Server,
  ScanSearch,
  Briefcase,
  UserRound,
  Rocket,
  Handshake,
} from 'lucide-react';
import { SiFiverr, SiUpwork, SiFreelancer } from 'react-icons/si';

export const NAV_ITEMS = [
  { name: 'Home', href: '/', index: '01' },
  { name: 'Work', href: '/work', index: '02' },
  { name: 'Security', href: '/security', index: '03' },
  { name: 'Credentials', href: '/credentials', index: '04' },
  { name: 'Contact', href: '/#contact', index: '05' },
] as const;

/* ============================================================
   CASE STUDIES — problem → approach → outcome framing.
   All facts sourced from the original site content; no invented
   metrics, clients, or results.
   ============================================================ */

export type CaseStudy = {
  title: string;
  category: string;
  image: string;
  link: string;
  outcome: string;
  problem: string;
  approach: string;
  stack: readonly string[];
  group: 'production' | 'lab';
  selected?: boolean;
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    title: 'MedAlerto',
    category: 'Healthcare SaaS',
    image: '/p1.png',
    link: 'https://medalerto.me/',
    outcome: 'Live in production at medalerto.me',
    problem:
      'Healthcare workflows are slow and fragmented — missed follow-ups, forgotten patients, and chaotic doctor schedules.',
    approach:
      'A multi-entity platform with distinct patient and provider roles: REST API with JWT role-level access control, input-validation and structured error-handling middleware, deployed with Docker and isolated service boundaries on cloud infrastructure.',
    stack: ['REST API', 'JWT · RBAC', 'Docker', 'Cloud'],
    group: 'production',
    selected: true,
  },
  {
    title: 'Enterprise Banking System',
    category: 'Full-Stack Finance',
    image: '/p3.png',
    link: 'https://enterpriselevelbankingsystem.vercel.app/login',
    outcome: 'Deployed and publicly accessible',
    problem:
      'Banking software has zero tolerance for loose ends — accounts, transactions, and access all demand strict correctness.',
    approach:
      'An enterprise-style banking system built full-stack, with authenticated, login-gated flows from the first screen onward.',
    stack: ['Full-Stack', 'Authentication', 'Finance'],
    group: 'production',
    selected: true,
  },
  {
    title: 'HOMEIGO',
    category: 'Real Estate Platform',
    image: '/p2.png',
    link: 'https://homeigo-fullstack-project-1.onrender.com/listings',
    outcome: 'Live listings platform, deployed on Render',
    problem:
      'Real-estate browsing needs listings, detail views, and account flows working together in one place.',
    approach:
      'A MERN build — MongoDB, Express, React, Node — with authentication and a scalable backend behind the listings experience.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    group: 'production',
    selected: true,
  },
  {
    title: 'Chatify',
    category: 'Real-Time Messaging',
    image: '/p5.png',
    link: 'https://chatify-v8u2.onrender.com/login',
    outcome: 'Deployed real-time messaging app',
    problem: 'Chat is only useful if messages arrive the instant they are sent.',
    approach:
      'A full-stack real-time messaging application with account login and live message delivery.',
    stack: ['Real-Time', 'Full-Stack', 'Auth'],
    group: 'production',
    selected: true,
  },
  {
    title: 'Lazarev.agency Rebuild',
    category: 'Front-End Craft',
    image: '/p4.png',
    link: 'https://beamish-cajeta-b009d1.netlify.app/',
    outcome: 'Front-end rebuild, live on Netlify',
    problem:
      'Award-level agency sites live or die on motion, layout precision, and detail.',
    approach:
      'Recreated the Lazarev.agency experience front-end — layout, interactions, and scroll-driven motion.',
    stack: ['Front-End', 'Animation'],
    group: 'lab',
  },
  {
    title: 'Sudoku',
    category: 'Puzzle Game',
    image: '/p6.png',
    link: 'https://sudukoreact.vercel.app/',
    outcome: 'Playable in the browser',
    problem: 'Sudoku is pure logic — a clean fit for algorithmic thinking inside a UI.',
    approach:
      'An interactive Sudoku game built with React — board state, validation, and gameplay handled client-side.',
    stack: ['React', 'Game Logic'],
    group: 'lab',
  },
  {
    title: 'Chess',
    category: 'Strategy Game',
    image: '/p7.png',
    link: 'https://github.com/Abdullah-JUTT-cloud/Chess_java',
    outcome: 'Open-source on GitHub',
    problem:
      'Chess is the classic object-oriented design exercise: pieces, rules, and board state.',
    approach: 'A chess game implemented in Java with an object-oriented design.',
    stack: ['Java', 'OOP'],
    group: 'lab',
  },
] as const;


/* ============================================================
   INTRO VIDEO  —  personal introduction / client pitch
   ============================================================ */

export const INTRO_VIDEO = {
  src: '/gig.mp4',
  poster: '/gig-poster.jpg',
  duration: '1:08',
  eyebrow: 'Introduction',
  titleLead: 'Meet Me',
  titleAccent: 'In 60 Seconds',
  subtitle:
    'Rather than reading about me — hear it directly. Who I am, what I build, and exactly how I can help you ship your next product.',
  chapters: [
    {
      icon: UserRound,
      label: 'Who I Am',
      description:
        'Software Engineer & Full Stack Developer building production-grade systems.',
    },
    {
      icon: Rocket,
      label: 'What I Do',
      description:
        'End-to-end web & mobile applications — architecture, APIs, and polished interfaces.',
    },
    {
      icon: Handshake,
      label: 'What I Bring You',
      description:
        'Clear communication, clean scalable code, and delivery you can rely on.',
    },
  ],
  highlights: [
    'Full Stack Development',
    'Scalable Architecture',
    'Clean, Maintainable Code',
    'On-Time Delivery',
  ],
} as const;

export const CERTIFICATE_CATEGORIES = [
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    subtitle: 'Penetration testing, exploitation & offensive security',
    icon: Terminal,
    color: 'hsl(var(--accent))',
    direction: 'left' as const,
    images: ['/H1.jpg', '/H2.jpg', '/H3.jpg', '/H4.jpg'],
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    subtitle: 'Network defense, threat analysis & security operations',
    icon: ShieldCheck,
    color: 'hsl(var(--primary))',
    direction: 'right' as const,
    images: ['/C1.jpg', '/C2.jpg', '/C3.jpg', '/C4.jpg', '/C5.jpg'],
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence & Agentic AI',
    subtitle: 'Machine learning, LLMs & autonomous agent systems',
    icon: BrainCircuit,
    color: 'hsl(var(--accent))',
    direction: 'left' as const,
    images: ['/A1.jpg', '/A2.jpg', '/A3.jpg', '/A4.jpg'],
  },
  {
    id: 'extras',
    title: 'Extras',
    subtitle: 'Additional achievements & professional credentials',
    icon: Sparkles,
    color: 'hsl(var(--primary))',
    direction: 'right' as const,
    images: ['/E1.jpg', '/E2.jpg', '/E3.jpg'],
  },
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

/* ============================================================
   CYBERSECURITY  —  data sourced from CV
   ============================================================ */

export const SECURITY_INTRO = {
  role: 'Cybersecurity / Ethical Hacking',
  headline:
    'A developer’s understanding of how applications are actually built, applied to offensive security.',
  summary:
    'Software Engineering student transitioning into cybersecurity and ethical hacking, backed by hands-on production engineering experience. Completed a structured, self-directed training path covering network security, Linux security, and the full Certified Ethical Hacker (CEH) curriculum, reinforced through daily practice in a self-built penetration testing lab.',
  stats: [
    { label: 'CEH Curriculum', value: '19h+' },
    { label: 'Vulnerable Lab Targets', value: '19+' },
    { label: 'Security Domains', value: '5' },
  ],
} as const;

export const SECURITY_SKILLS = [
  {
    title: 'Offensive Security',
    highlight: 'Recon → Enumeration → Exploitation',
    icon: Crosshair,
    items: [
      'Network scanning & enumeration',
      'Vulnerability assessment',
      'Web application penetration testing',
      'OSINT & reconnaissance',
      'Password attacks',
      'ARP/DNS spoofing concepts',
    ],
  },
  {
    title: 'Security Tools',
    highlight: 'Industry-standard offensive tooling',
    icon: Terminal,
    items: [
      'Nmap',
      'Burp Suite (Proxy, Repeater, Intercept)',
      'OWASP ZAP',
      'enum4linux',
      'WhatWeb',
      'h8mail',
      'Wireshark (fundamentals)',
    ],
  },
  {
    title: 'Web App Security',
    highlight: 'OWASP Top 10 exploitation',
    icon: Bug,
    items: [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'SSRF',
      'XXE',
      'Path Traversal',
      'Insecure Deserialization',
      'Authentication & Session flaws',
    ],
  },
  {
    title: 'Network Security',
    highlight: 'Defense, segmentation & monitoring',
    icon: Network,
    items: [
      'TCP/IP & OSI model',
      'Firewalls',
      'VLANs & network segmentation',
      'NAT',
      'IPSec',
      'DNS/DHCP security',
      'Honeypots',
      'IDS/IPS concepts',
    ],
  },
  {
    title: 'Systems & Platforms',
    highlight: 'Lab infrastructure & Linux internals',
    icon: Server,
    items: [
      'Kali Linux',
      'Linux command line & permissions',
      'Docker-based lab environments',
      'VirtualBox virtualization',
    ],
  },
  {
    title: 'Security Frameworks',
    highlight: 'Standards & threat models',
    icon: ShieldCheck,
    items: [
      'NIST Cybersecurity Framework',
      'COBIT',
      'Cyber Kill Chain',
      'CEH Body of Knowledge',
    ],
  },
] as const;

export const SECURITY_TRAINING = [
  {
    title: 'Certified Ethical Hacker (CEH)',
    provider: 'LinkedIn Learning',
    duration: '19h 19m',
    description:
      'Full CEH exam blueprint: footprinting & reconnaissance, scanning networks, enumeration, vulnerability analysis, system hacking, malware threats, sniffing, social engineering, denial-of-service, session hijacking, evading IDS/firewalls/honeypots, hacking web servers & applications, SQL injection, wireless hacking, cryptography, and cloud security.',
  },
  {
    title: 'IT Security Foundations: Network Security',
    provider: 'LinkedIn Learning',
    duration: 'Completed',
    description:
      'Firewalls, honeypots, VLAN/domain isolation, NAT, ARP/DNS spoofing, IPSec, secure protocols, security baselines, and physical security.',
  },
  {
    title: 'Networking Foundations & Cisco Switching / Routing',
    provider: 'LinkedIn Learning',
    duration: 'Completed',
    description:
      'OSI model, IP addressing, VLANs, trunking, Spanning Tree Protocol, and static/dynamic routing.',
  },
  {
    title: 'Cybersecurity Foundations',
    provider: 'LinkedIn Learning',
    duration: 'Completed',
    description:
      'Cyber Kill Chain, threat frameworks (NIST, COBIT), cryptography fundamentals, and incident detection and response basics.',
  },
] as const;

export const SECURITY_LAB_WORK = [
  {
    command: 'docker compose up websploit-labs',
    title: 'Isolated Penetration Testing Lab',
    icon: Server,
    description:
      'Built a Kali Linux (VirtualBox) attack environment and deployed WebSploit Labs — 19+ intentionally vulnerable Docker containers including OWASP Juice Shop, WebGoat, and DVWA — covering SQL injection, XSS, SSRF, XXE, path traversal, insecure deserialization, and GraphQL vulnerabilities.',
    tools: ['Kali Linux', 'VirtualBox', 'Docker', 'Juice Shop', 'WebGoat', 'DVWA'],
  },
  {
    command: 'nmap -sS -sV <target>',
    title: 'Network Reconnaissance & Service Discovery',
    icon: ScanSearch,
    description:
      'Performed network reconnaissance with Nmap (SYN scans, service/version detection) against lab targets to identify open ports and running services (FTP, SSH, DNS, HTTP, SMB) as a precursor to enumeration.',
    tools: ['Nmap', 'SYN Scan', 'Service Detection'],
  },
  {
    command: 'enum4linux -a <target>',
    title: 'SMB / NetBIOS Enumeration',
    icon: Network,
    description:
      'Conducted SMB/NetBIOS enumeration with enum4linux to extract host, share, and user information from lab targets.',
    tools: ['enum4linux', 'SMB', 'NetBIOS'],
  },
  {
    command: 'burpsuite --proxy --intercept',
    title: 'Live HTTP Traffic Interception',
    icon: Crosshair,
    description:
      'Used Burp Suite (Proxy, Intercept, Repeater) to inspect, intercept, and analyze live HTTP traffic against DVWA and other lab web applications.',
    tools: ['Burp Suite', 'Proxy', 'Repeater'],
  },
  {
    command: 'zap-cli active-scan <target>',
    title: 'Automated Scanning & Vulnerability Triage',
    icon: Bug,
    description:
      'Ran OWASP ZAP active/passive scans against test targets, triaged findings (missing security headers, cookie attribute issues, information disclosure), and practiced writing clear vulnerability descriptions.',
    tools: ['OWASP ZAP', 'Security Headers', 'Reporting'],
  },
  {
    command: 'whatweb <target> && h8mail -t <email>',
    title: 'OSINT & Information Gathering',
    icon: Terminal,
    description:
      'Performed OSINT reconnaissance using WhatWeb (technology fingerprinting) and h8mail (breach-data exposure checks) as part of the information-gathering phase of the ethical hacking methodology.',
    tools: ['WhatWeb', 'h8mail', 'OSINT'],
  },
] as const;

export const SECURITY_APPLIED_PRACTICES = [
  'Multi-entity REST API with JWT-based role-level access control (patient vs. provider)',
  'Input-validation and structured error-handling middleware to reduce malicious input exposure',
  'Role-based access control enforced across a live production healthcare SaaS platform',
  'Docker-based deployment with isolated service boundaries on cloud infrastructure',
] as const;

export const FREELANCE_PLATFORMS = [
  {
    name: 'Fiverr',
    icon: SiFiverr,
    href: 'https://www.fiverr.com/s/42ePl8y',
    tagline: 'Fixed-scope gigs',
    cta: 'Place Your Order',
  },
  {
    name: 'Upwork',
    icon: SiUpwork,
    href: 'https://www.upwork.com/freelancers/~01960cac3b684eba9d?mp_source=share',
    tagline: 'Hourly & contract work',
    cta: 'Hire Me',
  },
  {
    name: 'Contra',
    icon: Briefcase,
    href: 'https://contra.com/muhammad_abdullah_m5bn5vlv?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=muhammad_abdullah_m5bn5vlv',
    tagline: 'Commission-free projects',
    cta: 'Start a Project',
  },
  {
    name: 'Freelancer',
    icon: SiFreelancer,
    href: 'https://www.freelancer.com/u/abdullahjutt44?frm=abdullahjutt44&sb=t',
    tagline: 'Project bidding',
    cta: 'Post Your Project',
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

export const EDUCATION_DATA = [
  {
    institution: 'University of Central Punjab',
    degree: 'BSSE (Software Engineering)',
    graduationDate: 'March-04-2027',
    cgpa: '3.73',
    details: [
      'Focusing on Software Engineering, advanced systems design, database management systems, and algorithms.',
      'Maintaining a strong academic performance with a 3.73 CGPA.',
      'Gaining practical development experience through lab projects and curriculum coursework.',
    ],
    courses: [
      'Software Engineering',
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Database Systems',
      'System Design',
    ],
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
