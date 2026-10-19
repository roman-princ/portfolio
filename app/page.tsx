import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  );
}
