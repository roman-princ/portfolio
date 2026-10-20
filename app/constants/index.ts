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
    id: "project-10",
    slug: "wingman",
    title: "Wingman — Flight Price Tracker",
    description:
      "Flight price tracker that keeps searching Google Flights for your routes and pings your phone when a fare drops or a faster flight appears. Tries every departure day of flexible months and weekends, joins self-transfers through a hub, totals round trips in 29 currencies and tells you whether to buy or wait. Web app with push notifications in ten languages, a native iPhone app on the way.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Web Push",
      "SwiftUI",
      "Docker",
    ],
    github: "",
    demo: "https://wingmanfares.com",
    featured: true,
    year: "2026",
    role: "Design, backend, web and iOS",
    highlights: [
      "Searches Google Flights again and again for every date you give it, and keeps two records per route: the cheapest trip and the fastest door to door.",
      "Flexible months and weekends: it tries every departure day and keeps the best round trip.",
      "Self-transfers: joins two separate low-cost flights through a hub, often the cheapest way there.",
      "Tells you whether to buy or wait, from the prices it has seen.",
      "Notifications straight to your phone with Web Push, no app to install. Email works too.",
      "A native iPhone app with every route on a 3D globe, on its way.",
    ],
    mac: {
      kind: "image",
      src: "/work/wingman/mac.webp",
      alt: "The Wingman dashboard: five routes being watched, the best round trip at 196 €, round-trip totals and a table of every route",
    },
    phones: [
      { src: "/work/wingman/phone-globe.webp", alt: "The iPhone app: every watched route as an arc on a 3D globe, with its price on it" },
      { src: "/work/wingman/phone-route.webp", alt: "Prague to Bangkok on the globe: the cheapest trip via Istanbul and the fastest via Doha" },
      { src: "/work/wingman/phone-web.webp", alt: "The web app on a phone: a trip to Bangkok with its cheapest round trip at 740 €" },
    ],
  },
  {
    id: "project-9",
    slug: "powderline",
    title: "Powderline — Browser Snowboarding Game",
    description:
      "Endless alpine snowboarding game running entirely in the browser. Terrain, trees, rider and audio are all procedurally generated — no assets to load. Features trick physics with graded landings, rails and kickers, 1v1 multiplayer races, quests, a shop and online leaderboards.",
    technologies: [
      "Three.js",
      "React",
      "Vite",
      "Supabase",
      "WebRTC",
      "Procedural Generation",
    ],
    github: "",
    demo: "https://powderlinegame.com",
    featured: true,
    year: "2026",
    highlights: [
      "An endless mountain, generated as you ride: the terrain, the trees, the rider and even the audio, with no assets to download.",
      "Trick physics with graded landings, rails, kickers and boosters.",
      "1v1 races against a friend, quests, a shop and online leaderboards.",
      "Plays with a keyboard, a gamepad or touch, free in the browser.",
    ],
    mac: { kind: "image", src: "/work/powderline/mac.webp", alt: "Powderline's home page: a rider carving the procedural mountain under the gondolas" },
    phones: [{ src: "/work/powderline/phone.webp", alt: "Powderline on a phone", statusBar: true }],
  },

  {
    id: "project-2",
    slug: "chester-iot",
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
    featured: false,
    year: "2022–2023",
    role: "Mobile developer at Statotest",
    highlights: [
      "Manages CHESTER IoT gateways in the field: sensor measurements, configuration and firmware updates.",
      "Low-level communication with the devices, and a REST API behind it all.",
      "One React Native codebase for Android and iOS, built from scratch.",
      "Placed 5th nationally at the SOČ competition.",
    ],
    phones: [
      { src: "/work/chester/phone-device.webp", alt: "A measurement point's device: its serial number, Bluetooth details and actions" },
      { src: "/work/chester/phone-data.webp", alt: "Measured data: temperature, humidity and tilt over time, as charts" },
      { src: "/work/chester/phone-export.webp", alt: "Exporting measured data as CSV, JSON, Excel or PDF" },
    ],
  },
  {
    id: "project-4",
    slug: "image-editor",
    title: "Image Editor with Fourier Transform",
    description:
      "CLI-controlled graphics editor utilizing Fourier Transform for fast filter application. Advanced mathematical algorithms implementation.",
    technologies: ["Python", "NumPy", "SciPy", "Fourier Transform", "Image Processing", "CLI"],
    github: "",
    demo: "https://github.com/roman-princ/cli-image-editor",
    featured: false,
    year: "2024",
    highlights: [
      "Filters run as convolutions through the Fourier transform (SciPy's fftconvolve), fast on large images.",
      "Sobel–Feldman and Roberts cross edge detection, sharpening and blur.",
      "Rotate, mirror, grayscale, negative, lighten and darken, chained in a single command.",
      "Tested with pytest.",
    ],
    mac: {
      kind: "terminal",
      title: "editor — zsh",
      prompt: "editor %",
      lines: [
        { cmd: "python main.py --rotate 90 input.jpg output.jpg", out: "Image saved successfully to output.jpg" },
        { cmd: "python main.py --bw --lighten 25 input.jpg output.jpg", out: "Image saved successfully to output.jpg" },
        { cmd: "python main.py --sharpen --darken 10 input.jpg output.jpg", out: "Image saved successfully to output.jpg" },
        { cmd: "python main.py --ed input.jpg edges.jpg", out: "Image saved successfully to edges.jpg" },
      ],
    },
  },
  {
    id: "project-5",
    slug: "spotify-stats",
    title: "Spotify Statistics Web App",
    description:
      "Personal Spotify statistics viewer with data visualization and user insights.",
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Spotify API", "Data Visualization"],
    github: "",
    demo: "https://spotiappv2.princdev.com",
    featured: true,
    highlights: [
      "Sign in with Spotify to see your top tracks and artists.",
      "Analyzes your listening history, and takes the full history file from Spotify's privacy download for a view across the years.",
      "A Next.js front end on a TypeScript and Express API, the history kept in PostgreSQL through Prisma.",
    ],
    mac: { kind: "image", src: "/work/spotify/mac.webp", alt: "SpotiApp's start: connect with Spotify to see your stats" },
  },
  {
    id: "project-6",
    slug: "excel-engine",
    title: "Excel Engine in C++",
    description:
      "High-performance Excel processing engine built from scratch in C++.",
    technologies: ["C++", "Excel Processing", "Performance Optimization"],
    github: "https://github.com/roman-princ/cpp-excel",
    demo: "",
    featured: true,
    mac: { kind: "spreadsheet" },
  },
];

// the work in the order it's shown, on the home page and from one project's page to the next: the featured first
export const WORK: Project[] = [...PROJECTS.filter((p) => p.featured), ...PROJECTS.filter((p) => !p.featured)];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-0",
    company: "ScreenManager (Freelance)",
    position: "Software Engineer",
    period: "February 2025 - Present",
    current: true,
    description: [
      "Full-stack development of a cloud-native digital signage SaaS platform: a type-safe GraphQL API, a Next.js admin console and a real-time device fleet over MQTT",
      "Engineered end-to-end Proof of Play analytics: offline-first playback buffering in IndexedDB, idempotent ingestion into Elasticsearch and clock-drift correction against server time",
      "Shipped native signage players for LG webOS, Raspberry Pi video walls (Electron) and Android, with zero-touch provisioning (ZTP) and remote display controls",
      "Built scalable background CSV exports streamed to AWS S3 with live progress and signed links, plus performance optimizations across the API, data tables and rendering",
      "Delivered new product features end to end: license management, a partner console, multi-account SSO, POS-integrated menu boards and AI camera audience analytics",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "GraphQL",
      "Node.js",
      "MongoDB",
      "Elasticsearch",
      "MQTT",
      "AWS S3",
      "Electron",
      "LG webOS",
      "Docker",
    ],
  },
  {
    id: "exp-5",
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
