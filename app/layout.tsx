import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/common/Navigation";
import ThemeToggle from "./components/common/ThemeToggle";
import SmoothScroll from "./components/common/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default:
      "Roman Princ - Full Stack Developer & Software Engineering Student",
    template: "%s | Roman Princ",
  },
  description:
    "Full Stack Developer and Software Engineering Student specializing in React, Next.js, TypeScript, Node.js, and mobile development. View my portfolio of web applications and mobile projects.",
  keywords: [
    "Roman Princ",
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
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "SASS",
    "Mobile Development",
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
    "Vercel",
    "Netlify",
    "Web Applications",
    "Mobile Apps",
    "Responsive Design",
    "UI/UX Design",
    "Czech Republic",
    "Prague",
    "Freelance Developer",
    "Software Development",
    "Modern Web Technologies",
  ],
  authors: [{ name: "Roman Princ", url: "https://portfolio.princdev.com" }],
  creator: "Roman Princ",
  publisher: "Roman Princ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      "Full Stack Developer and Software Engineering Student specializing in React, Next.js, TypeScript, Node.js, and mobile development. View my portfolio of web applications and mobile projects.",
    siteName: "Roman Princ Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roman Princ - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Princ - Full Stack Developer & Software Engineering Student",
    description:
      "Full Stack Developer and Software Engineering Student specializing in React, Next.js, TypeScript, Node.js, and mobile development.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://portfolio.princdev.com",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roman Princ",
    jobTitle: "Full Stack Developer",
    description:
      "Software Engineering Student specializing in modern web technologies and mobile development",
    url: "https://portfolio.princdev.com",
    sameAs: [
      "https://github.com/roman-princ",
      "https://linkedin.com/in/roman-princ-717a58244",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Mobile Development",
      "Full Stack Development",
      "Software Engineering",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "ČVUT Fakulta Informačních Technologií",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
      addressRegion: "Prague",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
