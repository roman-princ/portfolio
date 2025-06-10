import { Project, Skill, Experience, Education, ContactInfo } from "../types";

export const PERSONAL_INFO = {
  name: "Roman Princ",
  title: "Full Stack Developer",
  tagline:
    "Building innovative digital solutions with cutting-edge technologies",
  bio: "Passionate full-stack developer and Software Engineering student at CTU Prague. From mobile apps with React Native to enterprise systems with .NET and Ruby on Rails, I create efficient, scalable solutions. National athletics champion with a record-breaking mindset applied to code.",
  location: "Jablonec nad Nisou / Praha, Czech Republic",
  yearsOfExperience: 2,
};

export const CONTACT_INFO: ContactInfo = {
  email: "roman.princ00@gmail.com",
  location: "Jablonec nad Nisou / Praha, Czech Republic",
  linkedin: "https://www.linkedin.com/in/roman-princ-717a58244/",
  github: "https://github.com/romanprinc",
  twitter: "https://twitter.com/romanprinc",
  website: "https://romanprinc.dev",
};

export const SKILLS: Skill[] = [
  // Frontend Technologies
  { name: "React", level: "Advanced", category: "Frontend" },
  { name: "Angular", level: "Advanced", category: "Frontend" },
  { name: "JavaScript", level: "Advanced", category: "Frontend" },
  { name: "TypeScript", level: "Advanced", category: "Frontend" },
  { name: "HTML/CSS", level: "Advanced", category: "Frontend" },

  // Backend Technologies
  { name: "C#", level: "Advanced", category: "Backend" },
  { name: ".NET", level: "Advanced", category: "Backend" },
  { name: "Ruby on Rails", level: "Intermediate", category: "Backend" },
  { name: "Node.js", level: "Advanced", category: "Backend" },
  { name: "Python", level: "Advanced", category: "Backend" },
  { name: "C++", level: "Intermediate", category: "Backend" },
  { name: "C", level: "Intermediate", category: "Backend" },
  { name: "REST API", level: "Advanced", category: "Backend" },

  // Mobile Development
  { name: "React Native", level: "Advanced", category: "Mobile" },
  { name: "Ionic", level: "Intermediate", category: "Mobile" },
  { name: "Capacitor", level: "Intermediate", category: "Mobile" },
  { name: "Kotlin", level: "Beginner", category: "Mobile" },

  // Database Technologies
  { name: "PostgreSQL", level: "Advanced", category: "Database" },
  { name: "MSSQL", level: "Intermediate", category: "Database" },
  { name: "Redis", level: "Intermediate", category: "Database" },

  // Cloud & DevOps
  { name: "Azure", level: "Intermediate", category: "Cloud" },
  { name: "Git", level: "Advanced", category: "Tools" },

  // CMS & Game Development
  { name: "WordPress", level: "Intermediate", category: "CMS" },
  { name: "Unity", level: "Intermediate", category: "Game Dev" },
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
    demo: "",
    featured: true,
  },
  {
    id: "project-2",
    title: "CHESTER IoT Management App",
    description:
      "React Native mobile application for managing IoT gateways. Built from scratch with cross-platform support for Android and iOS.",
    technologies: [
      "React Native",
      "REST API",
      "IoT",
      "Low-level Communication",
      "Firmware Updates",
    ],
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: "project-3",
    title: "Excel Processing System",
    description:
      "Internal system for processing Excel files and displaying data in web interface. Full-stack development with Azure deployment.",
    technologies: ["React", "C#", ".NET", "Azure", "MSSQL", "REST API"],
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: "project-4",
    title: "Image Editor with Fourier Transform",
    description:
      "CLI-controlled graphics editor utilizing Fourier Transform for fast filter application. Advanced mathematical algorithms implementation.",
    technologies: ["Python", "Fourier Transform", "Image Processing", "CLI"],
    github: "",
    demo: "",
    featured: false,
  },
  {
    id: "project-5",
    title: "Spotify Statistics Web App",
    description:
      "Personal Spotify statistics viewer with data visualization and user insights.",
    technologies: ["React", "Spotify API", "Data Visualization"],
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: "project-6",
    title: "Excel Engine in C++",
    description:
      "High-performance Excel processing engine built from scratch in C++. Award-winning project that placed 5th nationally in SOČ competition.",
    technologies: ["C++", "Excel Processing", "Performance Optimization"],
    github: "",
    demo: "",
    featured: false,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    company: "FreshPoint s.r.o. (Freelance)",
    position: "Full Stack Developer & Development Lead",
    period: "2024",
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
