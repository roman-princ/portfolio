import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import TechMarquee from "./components/common/TechMarquee";
import SceneWrapper from "./components/three/SceneWrapper";

const STACK_MARQUEE = [
  "React",
  "TypeScript",
  ".NET",
  "Node.js",
  "React Native",
  "Angular",
  "PostgreSQL",
  "Python",
  "C++",
  "GraphQL",
  "Docker",
];

const HIRE_MARQUEE = [
  "Available for freelance",
  "Web apps",
  "Mobile apps",
  "APIs & backends",
  "Prague → Worldwide",
];

export default function Home() {
  return (
    <>
      <SceneWrapper />
      <main className="relative z-10 min-h-screen">
        <Hero />
        <TechMarquee items={STACK_MARQUEE} />
        <About />
        <Experience />
        <TechMarquee items={HIRE_MARQUEE} reverse />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}
