import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/common/Navigation";
import ThemeToggle from "./components/common/ThemeToggle";
import SmoothScroll from "./components/common/SmoothScroll";

export const metadata: Metadata = {
  title: "Roman Princ - Full Stack Developer",
  description: "Portfolio of Roman Princ, a passionate full-stack developer specializing in modern web technologies including React, Next.js, TypeScript, and Node.js.",
  keywords: ["Roman Princ", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Roman Princ" }],
  creator: "Roman Princ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://romanprinc.dev",
    title: "Roman Princ - Full Stack Developer",
    description: "Portfolio of Roman Princ, a passionate full-stack developer specializing in modern web technologies.",
    siteName: "Roman Princ Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Princ - Full Stack Developer",
    description: "Portfolio of Roman Princ, a passionate full-stack developer specializing in modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sf-pro antialiased">
        <Navigation />
        <ThemeToggle />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
