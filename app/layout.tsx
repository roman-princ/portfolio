import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/common/Navigation";
import ThemeToggle from "./components/common/ThemeToggle";
import SmoothScroll from "./components/common/SmoothScroll";

export const metadata: Metadata = {
  title: "Roman Princ - Software Engineering Student",
  description:
    "Roman Princ's portfolio, a software engineering student specializing in modern web technologies and mobile development.",
  keywords: [
    "Roman Princ",
    "Software Engineering Student",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Ionic",
    "Capacitor",
    "PWA",
    "Angular",
    "Ionic",
    "Vývoj",
    "Programování",
    "IT",
    "Software",
    "Engineering",
    "Student",
    "Práce",
    "Projekty",
    "Coding",
    "Development",
    "IT",
    "Software",
    "Engineering",
    "Student",
    "Práce",
    "Projekty",
    "Coding",
    "Development",
    "IT",
    "Software",
    "Engineering",
    "Student",
  ],
  authors: [{ name: "Roman Princ" }],
  creator: "Roman Princ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.princdev.com",
    title: "Roman Princ - Software Engineering Student",
    description:
      "Roman Princ's portfolio, a software engineering student specializing in modern web technologies and mobile development.",
    siteName: "Roman Princ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Princ - Software Engineering Student",
    description:
      "Roman Princ's portfolio, a software engineering student specializing in modern web technologies and mobile development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
