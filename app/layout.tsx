import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/common/Navigation";
import ThemeToggle from "./components/common/ThemeToggle";
import SmoothScroll from "./components/common/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.princdev.com"),
  title: {
    default:
      "Roman Princ - Full Stack Developer & Software Engineering Student | Portfolio",
    template: "%s | Roman Princ",
  },
  description:
    "Roman Princ is a Full Stack Developer and Software Engineering Student at CTU Prague specializing in React, Next.js, TypeScript, Node.js, .NET, and mobile development. Explore my portfolio of web applications, mobile projects, and software engineering work.",
  keywords: [
    "Roman Princ",
    "Roman Princ Developer",
    "Roman Princ Portfolio",
    "Roman Princ Full Stack Developer",
    "Roman Princ Software Engineer",
    "Roman Princ CTU Prague",
    "Roman Princ Czech Republic",
    "Full Stack Developer",
    "Software Engineer",
    "Software Engineering Student",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    ".NET Developer",
    "C# Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "C#",
    ".NET",
    "ASP.NET",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "SASS",
    "Mobile Development",
    "React Native",
    "Ionic Framework",
    "Capacitor",
    "PWA",
    "Progressive Web Apps",
    "Angular",
    "Vue.js",
    "REST API",
    "GraphQL",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Oracle Cloud",
    "Vercel",
    "Netlify",
    "Web Applications",
    "Mobile Apps",
    "Responsive Design",
    "UI/UX Design",
    "Czech Republic",
    "Prague",
    "CTU Prague",
    "ČVUT",
    "Freelance Developer",
    "Software Development",
    "Modern Web Technologies",
    "Developer Portfolio",
    "Software Engineering Portfolio",
  ],
  authors: [{ name: "Roman Princ", url: "https://portfolio.princdev.com" }],
  creator: "Roman Princ",
  publisher: "Roman Princ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["cs_CZ"],
    url: "https://portfolio.princdev.com",
    title: "Roman Princ - Full Stack Developer & Software Engineering Student",
    description:
      "Roman Princ is a Full Stack Developer and Software Engineering Student at CTU Prague specializing in React, Next.js, TypeScript, Node.js, .NET, and mobile development. View my portfolio of web applications and mobile projects.",
    siteName: "Roman Princ Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Roman Princ - Full Stack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Princ - Full Stack Developer & Software Engineering Student",
    description:
      "Full Stack Developer and Software Engineering Student specializing in React, Next.js, TypeScript, Node.js, and mobile development.",
    images: ["/opengraph-image"],
    creator: "@romanprinc", // Update with your actual Twitter handle if you have one
  },
  alternates: {
    canonical: "https://portfolio.princdev.com",
    languages: {
      "en-US": "https://portfolio.princdev.com",
      "cs-CZ": "https://portfolio.princdev.com",
    },
  },
  category: "Technology",
  classification: "Portfolio Website",
  verification: {
    // Add these when you set up Search Console
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced structured data with multiple schemas for better SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://portfolio.princdev.com/#person",
    name: "Roman Princ",
    alternateName: ["Roman Princ Developer", "Roman Princ Software Engineer"],
    givenName: "Roman",
    familyName: "Princ",
    jobTitle: "Full Stack Developer",
    description:
      "Roman Princ is a Full Stack Developer and Software Engineering Student at CTU Prague, specializing in React, TypeScript, Node.js, .NET, and mobile development with React Native and Ionic.",
    url: "https://portfolio.princdev.com",
    image: "https://portfolio.princdev.com/opengraph-image",
    sameAs: [
      "https://github.com/roman-princ",
      "https://linkedin.com/in/roman-princ-717a58244",
      "https://portfolio.princdev.com",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "C#",
      ".NET",
      "Python",
      "Angular",
      "React Native",
      "Mobile Development",
      "Full Stack Development",
      "Software Engineering",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "PostgreSQL",
      "Ionic",
      "Capacitor",
    ],
    knowsLanguage: ["en", "cs"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Czech Technical University in Prague",
      alternateName: "ČVUT FIT",
      sameAs: "https://fit.cvut.cz",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Prague",
      addressCountry: "CZ",
      addressRegion: "Prague",
    },
    email: "roman.princ00@gmail.com",
    nationality: {
      "@type": "Country",
      name: "Czech Republic",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://portfolio.princdev.com/#website",
    url: "https://portfolio.princdev.com",
    name: "Roman Princ - Full Stack Developer Portfolio",
    description:
      "Official portfolio website of Roman Princ, showcasing web development projects, mobile applications, and software engineering expertise.",
    author: {
      "@id": "https://portfolio.princdev.com/#person",
    },
    inLanguage: "en-US",
    copyrightYear: 2025,
    copyrightHolder: {
      "@id": "https://portfolio.princdev.com/#person",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://portfolio.princdev.com/#profilepage",
    url: "https://portfolio.princdev.com",
    name: "Roman Princ - Professional Portfolio",
    description:
      "Professional portfolio of Roman Princ featuring full-stack development projects, certificates, and experience in modern web technologies.",
    mainEntity: {
      "@id": "https://portfolio.princdev.com/#person",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://portfolio.princdev.com",
        },
      ],
    },
  };

  return (
    <html lang="en" itemScope itemType="https://schema.org/WebPage">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
        <script
          defer
          src="https://analytics.princdev.com/script.js"
          data-website-id="987c635e-4251-4bf2-9db7-8736002863b8"></script>
      </head>
      <body className="font-sf-pro antialiased">
        <Navigation />
        <ThemeToggle />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
