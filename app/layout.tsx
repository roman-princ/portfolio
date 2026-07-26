import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./components/common/Navigation";
import SmoothScroll from "./components/common/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.princdev.com"),
  title: {
    default: "Roman Princ — Full Stack Developer & Software Engineer",
    template: "%s | Roman Princ",
  },
  description:
    "Roman Princ is a Full Stack Developer and freelancer from Prague, Czech Republic — Software Engineering student at CTU Prague building web apps, mobile apps and backends with React, Next.js, TypeScript, Node.js and .NET.",
  keywords: [
    "Roman Princ",
    "Roman Princ developer",
    "Roman Princ portfolio",
    "Roman Princ Prague",
    "Roman Princ CTU",
    "Full Stack Developer Prague",
    "Freelance Developer Prague",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    ".NET Developer",
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
    type: "profile",
    firstName: "Roman",
    lastName: "Princ",
    username: "roman-princ",
    locale: "en_US",
    url: "https://portfolio.princdev.com",
    title: "Roman Princ — Full Stack Developer & Software Engineer",
    description:
      "Roman Princ is a Full Stack Developer and freelancer from Prague, Czech Republic — Software Engineering student at CTU Prague building web apps, mobile apps and backends.",
    siteName: "Roman Princ",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Roman Princ — Full Stack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Princ — Full Stack Developer & Software Engineer",
    description:
      "Roman Princ — Full Stack Developer and freelancer from Prague building web apps, mobile apps and backends.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://portfolio.princdev.com",
  },
  category: "Technology",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://portfolio.princdev.com/#person",
        name: "Roman Princ",
        givenName: "Roman",
        familyName: "Princ",
        jobTitle: "Full Stack Developer",
        description:
          "Roman Princ is a Full Stack Developer and freelancer from Prague, Czech Republic — Software Engineering student at CTU Prague specializing in React, TypeScript, Node.js, .NET, and mobile development with React Native and Ionic.",
        url: "https://portfolio.princdev.com",
        mainEntityOfPage: {
          "@id": "https://portfolio.princdev.com/#profilepage",
        },
        image: "https://portfolio.princdev.com/opengraph-image",
        sameAs: [
          "https://github.com/roman-princ",
          "https://www.linkedin.com/in/roman-princ-717a58244",
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
          "Ionic",
          "Capacitor",
          "PostgreSQL",
          "Mobile Development",
          "Full Stack Development",
          "Software Engineering",
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
        },
        email: "mailto:roman.princ00@gmail.com",
        nationality: {
          "@type": "Country",
          name: "Czech Republic",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://portfolio.princdev.com/#website",
        url: "https://portfolio.princdev.com",
        name: "Roman Princ",
        alternateName: "Roman Princ Portfolio",
        description:
          "Official portfolio website of Roman Princ, showcasing web development projects, mobile applications, and software engineering expertise.",
        author: { "@id": "https://portfolio.princdev.com/#person" },
        publisher: { "@id": "https://portfolio.princdev.com/#person" },
        copyrightHolder: { "@id": "https://portfolio.princdev.com/#person" },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://portfolio.princdev.com/#profilepage",
        url: "https://portfolio.princdev.com",
        name: "Roman Princ — Full Stack Developer & Software Engineer",
        description:
          "Professional portfolio of Roman Princ featuring full-stack development projects, certificates, and experience in modern web technologies.",
        isPartOf: { "@id": "https://portfolio.princdev.com/#website" },
        about: { "@id": "https://portfolio.princdev.com/#person" },
        mainEntity: { "@id": "https://portfolio.princdev.com/#person" },
        dateCreated: "2025-06-01T00:00:00+02:00",
        dateModified: "2026-07-26T00:00:00+02:00",
        inLanguage: "en",
      },
    ],
  };

  return (
    <html
      lang="en"
      itemScope
      itemType="https://schema.org/WebPage"
      className={`dark ${syne.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0b0618" />
        <meta name="color-scheme" content="dark" />
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
      <body className="font-sf-pro antialiased noise">
        <div className="aurora fixed inset-0 -z-10" aria-hidden />
        <Navigation />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
