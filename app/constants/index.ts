import {
  Project,
  Skill,
  Experience,
  Education,
  ContactInfo,
  Certificate,
} from "../types";

export const PERSONAL_INFO = {
  name: "Roman Princ",
  tagline: "Getting payed for writing colorful text",
  bio: "Freelancer & Software Engineering student at CTU Prague.",
  location: "Prague, Czech Republic",
  yearsOfExperience: new Date().getFullYear() - 2022,
};

export const CONTACT_INFO: ContactInfo = {
  email: "roman.princ00@gmail.com",
  location: "Prague, Czech Republic",
  linkedin: "https://www.linkedin.com/in/roman-princ-717a58244/",
  github: "https://github.com/roman-princ",
  website: "https://portfolio.princdev.com",
};

export const SKILLS: Skill[] = [
  // Frontend Technologies
  { name: "React", level: "Advanced", category: "Frontend" },
  { name: "Angular", level: "Advanced", category: "Frontend" },
  { name: "TypeScript", level: "Advanced", category: "Frontend" },
  { name: "Electron", level: "Intermediate", category: "Frontend" },

  // Backend Technologies
  { name: "C#", level: "Advanced", category: "Backend" },
  { name: ".NET", level: "Advanced", category: "Backend" },
  { name: "Node.js", level: "Advanced", category: "Backend" },
  { name: "Python", level: "Advanced", category: "Backend" },
  { name: "C++", level: "Intermediate", category: "Backend" },
  { name: "C", level: "Intermediate", category: "Backend" },

  // Mobile Development
  { name: "React Native", level: "Advanced", category: "Mobile" },
  { name: "Ionic", level: "Intermediate", category: "Mobile" },
  { name: "Capacitor", level: "Intermediate", category: "Mobile" },

  // Database Technologies
  { name: "PostgreSQL", level: "Advanced", category: "Database" },

  // Cloud & DevOps
  { name: "Oracle Cloud", level: "Intermediate", category: "Cloud" },
  { name: "Git", level: "Advanced", category: "Tools" },
  { name: "Jenkins", level: "Intermediate", category: "Tools" },

  // CMS
  { name: "WordPress", level: "Intermediate", category: "CMS" },
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "FreshPoint B2C Application",
    description:
      "Full-stack B2C application with cross-platform mobile support. Led development and infrastructure design, working directly with sales team.",
    technologies: [
      "Angular",
      "Ionic",
      "Node.js",
      "TypeScript",
      "Capacitor",
      "PWA",
    ],
    github: "",
    demo: "https://prod1.freshpoint.cz/end-user-ui",
    featured: true,
  },
  {
    id: "project-2",
    title: "CHESTER IoT Management App",
    description:
      "React Native mobile application for managing IoT gateways. Built from scratch with cross-platform support for Android and iOS. Award-winning project that placed 5th nationally in SOČ competition.",
    technologies: [
      "React Native",
      "REST API",
      "IoT",
      "Low-level Communication",
      "Firmware Updates",
    ],
    github: "",
    demo: "https://apps.apple.com/cz/app/statotest/id6479359279?l=cs",
    featured: true,
  },
  {
    id: "project-4",
    title: "Image Editor with Fourier Transform",
    description:
      "CLI-controlled graphics editor utilizing Fourier Transform for fast filter application. Advanced mathematical algorithms implementation.",
    technologies: ["Python", "Fourier Transform", "Image Processing", "CLI"],
    github: "",
    demo: "https://github.com/roman-princ/cli-image-editor",
    featured: false,
  },
  {
    id: "project-5",
    title: "Spotify Statistics Web App",
    description:
      "Personal Spotify statistics viewer with data visualization and user insights.",
    technologies: ["React", "Spotify API", "Data Visualization"],
    github: "",
    demo: "https://spotiapp.princdev.com",
    featured: true,
  },
  {
    id: "project-6",
    title: "Excel Engine in C++",
    description:
      "High-performance Excel processing engine built from scratch in C++.",
    technologies: ["C++", "Excel Processing", "Performance Optimization"],
    github: "https://github.com/roman-princ/cpp-excel",
    demo: "",
    featured: true,
  },
  {
    id: "project-7",
    title: "Galvanika Čakovice presentation website",
    description: "Company presentation website built with WordPress.",
    technologies: ["WordPress", "PHP"],
    github: "",
    demo: "https://galvanika.cz",
    featured: false,
  },
  {
    id: "project-8",
    title: "U Prutu - Food & drink pitstop near the Jablonec dam",
    description: "Website for a food & drink business near the Jablonec dam.",
    technologies: ["WordPress", "PHP"],
    github: "",
    demo: "https://uprutu.cz",
    featured: false,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-0",
    company: "Trueslav s.r.o. (Freelance)",
    position: "Software Engineer",
    period: "February 2025 - Present",
    current: true,
    description: [
      "Working mainly on projects using TypeScript, GraphQL and React",
      "Developing a kiosk application for a client",
      "Looking forward what the future holds",
    ],
    technologies: [
      "TypeScript",
      "GraphQL",
      "React",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "exp-1",
    company: "FreshPoint s.r.o. (Freelance)",
    position: "Full Stack Developer",
    period: "August 2024 - February 2025",
    description: [
      "Led development of new B2C application using Angular, Ionic, and Node.js",
      "Designed application infrastructure and coordinated with sales department",
      "Developed cross-platform mobile apps for Android, iOS, and Windows using Capacitor",
      "Built Progressive Web Application (PWA) for enhanced user experience",
    ],
    technologies: [
      "Angular",
      "Ionic",
      "Node.js",
      "TypeScript",
      "Capacitor",
      "PWA",
      "Jenkins",
    ],
  },
  {
    id: "exp-2",
    company: "Sinfin.digital",
    position: "Full Stack Developer",
    period: "November 2023 - May 2024",
    description: [
      "Developed website for Ivigee using Ruby on Rails framework",
      "Fixed bugs and improved functionality on Vyvolej.to / Squared.one platforms",
      "Worked with Redis caching and Folio CMS for content management",
      "Maintained PostgreSQL databases and optimized query performance",
    ],
    technologies: ["Ruby on Rails", "Redis", "Folio CMS", "PostgreSQL"],
  },
  {
    id: "exp-3",
    company: "NM Pharma Limited",
    position: "Full Stack Developer (Erasmus+ Internship)",
    period: "June 2023 - September 2023",
    description: [
      "Developed internal system for Excel file processing and web visualization",
      "Focused primarily on backend development using C# and .NET",
      "Built React components for frontend data presentation",
      "Deployed applications on Microsoft Azure cloud platform",
    ],
    technologies: ["React", "C#", ".NET", "REST API", "Azure", "MSSQL"],
  },
  {
    id: "exp-4",
    company: "Statotest s.r.o.",
    position: "Mobile App Developer",
    period: "May 2022 - September 2023",
    description: [
      "Developed React Native app for CHESTER IoT gateway management from scratch",
      "Implemented cross-platform solution for both Android and iOS",
      "Built features for sensor measurement control and firmware updates",
      "Handled low-level communication and extensive REST API integration",
    ],
    technologies: [
      "React Native",
      "REST API",
      "IoT",
      "Low-level Communication",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "edu-1",
    institution: "Czech Technical University in Prague (CTU)",
    degree: "Bachelor of Software Engineering",
    period: "2023 - Present (2nd year)",
    description:
      "Currently studying Software Engineering with focus on C, C++, Python, PostgreSQL, Assembly language, and analytical thinking. Developing strong foundations in computer science and software development methodologies.",
  },
  {
    id: "edu-2",
    institution: "SPŠSE a VOŠ Liberec",
    degree: "Information Technology (Maturita with Honors)",
    period: "2019 - 2023",
    description:
      "Graduated with honors in Information Technology. Gained expertise in C#, .NET, Python, JavaScript, HTML, CSS, React, Unity, and REST API development. Strong foundation in web development and software engineering principles.",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    name: "5th place at the 45th national exhibition of High school Vocational Activities in the IT field",
    issuer: "SOČ",
    issueDate: "2023",
    description:
      "Awarded for the 5th place at the 45th national exhibition of High school Vocational Activities in the IT field.",
    skills: ["React Native", "IoT", "Low-level Communication"],
  },
  {
    id: "cert-2",
    name: "Database Design",
    link: "https://github.com/roman-princ/certifications/blob/main/dd_database_design.pdf",
    issuer: "Oracle",
    issueDate: "2024",
    description:
      "Comprehensive certification covering database design, normalization, and SQL.",
    skills: ["Database Design", "Normalization", "SQL"],
  },
  {
    id: "cert-3",
    name: "Database programming with SQL",
    link: "https://github.com/roman-princ/certifications/blob/main/database_programming.pdf",
    issuer: "Oracle",
    issueDate: "2024",
    description:
      "Comprehensive certification covering database programming with SQL.",
    skills: ["SQL", "Database Programming", "Database Design"],
  },
  {
    id: "cert-4",
    name: "Introduction to IoT",
    link: "https://www.credly.com/badges/41e91729-143a-4dcb-93c3-ac069a95a5c5",
    issuer: "Cisco",
    issueDate: "2022",
    description: "Comprehensive course on IoT.",
    skills: ["IoT"],
  },
  {
    id: "cert-5",
    name: "CCNA: Introduction to Networks",
    link: "https://www.credly.com/badges/faee6efd-a4f8-471c-a621-3c8070b3430b",
    issuer: "Cisco",
    issueDate: "2022",
    description: "Comprehensive course on networks.",
    skills: ["Networking"],
  },
  {
    id: "cert-6",
    name: "IT Essentials",
    link: "https://www.credly.com/badges/29e8a39e-0bdf-408f-aebf-60f19ab41a29/public=url",
    issuer: "Cisco",
    issueDate: "2022",
    description: "Comprehensive course on IT essentials.",
    skills: ["IT Essentials"],
  },
  {
    id: "cert-7",
    name: "Python (Basic) Certification",
    link: "https://www.hackerrank.com/certificates/b0ab0e5d66de",
    issuer: "HackerRank",
    issueDate: "2022",
    description: "Basic Python certification.",
    skills: ["Python"],
  },
];
