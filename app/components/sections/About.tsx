"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { CERTIFICATES, EXPERIENCE, PERSONAL_INFO, PROJECTS, SKILLS } from "@/app/constants";
import type { Skill } from "@/app/types";
import { easeOut, Reveal, SectionHead } from "../common/Reveal";

const SKILL_ICONS: Record<string, string> = {
  React: "/skillsIcons/react-original.svg",
  Angular: "/skillsIcons/angularjs-plain.svg",
  TypeScript: "/skillsIcons/typescript-plain.svg",
  Electron: "/skillsIcons/electron-original.svg",
  "C#": "/skillsIcons/csharp-original.svg",
  ".NET": "/skillsIcons/dotnetcore-original.svg",
  "Node.js": "/skillsIcons/nodejs-original.svg",
  Python: "/skillsIcons/python-original.svg",
  "C++": "/skillsIcons/cplusplus-original.svg",
  C: "/skillsIcons/c-original.svg",
  "React Native": "/skillsIcons/react-original.svg",
  Ionic: "/skillsIcons/ionic-original.svg",
  Capacitor: "/skillsIcons/ionic-original.svg",
  PostgreSQL: "/skillsIcons/postgresql-original.svg",
  "Oracle Cloud": "/skillsIcons/oracle-original.svg",
  Git: "/skillsIcons/git-original.svg",
  Jenkins: "/skillsIcons/jenkins-original.svg",
  WordPress: "/skillsIcons/wordpress-plain.svg",
};

// the toolbox in four columns
const GROUPS: { name: string; categories: Skill["category"][] }[] = [
  { name: "Frontend", categories: ["Frontend"] },
  { name: "Backend", categories: ["Backend"] },
  { name: "Mobile", categories: ["Mobile"] },
  { name: "Data, cloud & tools", categories: ["Database", "Cloud", "Tools", "CMS", "DevOps"] },
];

const FACTS = [
  ["Based in", PERSONAL_INFO.location],
  ["Experience", `${PERSONAL_INFO.yearsOfExperience}+ years`],
  ["Focus", "Web apps, mobile apps and everything between"],
  ["Recognition", "National award-winning project (SOČ)"],
  ["Currently", "Down a new rabbit hole"],
];

/** A number counting up from zero the first time it's seen. */
function Stat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: easeOut, onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);
  return (
    // two by two on a phone, four in a row from a tablet, hairlines between
    <div
      ref={ref}
      className="border-line py-8 even:border-l even:pl-6 [&:nth-child(n+3)]:border-t md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:[&:nth-child(n+3)]:border-t-0"
    >
      <div className="display mb-2 text-[clamp(3.5rem,7vw,5.5rem)] tabular-nums">
        {n}
        <span className="text-dim">+</span>
      </div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead index="02" label="About">
          Not just another
          <br />
          developer.
        </SectionHead>

        <div className="mb-24 grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted md:col-span-7 md:text-xl">
            <p>
              <span className="text-ink">
                I&apos;m Roman Princ, a freelancer and Software Engineering student at CTU Prague.
              </span>{" "}
              For the last {PERSONAL_INFO.yearsOfExperience}+ years I&apos;ve been the person companies call when an idea
              needs to become a product: web, mobile, backend, infrastructure, the whole pipeline.
            </p>
            <p>
              I&apos;ve led the build of a B2C commerce platform used in production, wrote a React Native app that controls
              IoT gateways in the field (and took 5th place nationally for it), and built an Excel engine in C++ because slow
              software offends me.
            </p>
            <p>I dive deep into rabbit holes, learn whatever the problem demands, and ship. That&apos;s the whole pitch.</p>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <dl className="border-t border-line">
              {FACTS.map(([term, value]) => (
                <div key={term} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4 text-[15px]">
                  <dt className="text-dim">{term}</dt>
                  <dd className="text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="mb-28 grid grid-cols-2 border-y border-line md:grid-cols-4">
          <Stat value={PERSONAL_INFO.yearsOfExperience} label="Years shipping" />
          <Stat value={PROJECTS.length} label="Projects shipped" />
          <Stat value={EXPERIENCE.length} label="Companies I've worked with" />
          <Stat value={CERTIFICATES.length} label="Certificates & awards" />
        </Reveal>

        <Reveal>
          <h3 className="title mb-10 text-3xl md:text-4xl">Toolbox</h3>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8">
          {GROUPS.map((group, g) => (
            <Reveal key={group.name} delay={0.06 * g}>
              <p className="mb-4 text-sm text-dim">{group.name}</p>
              <ul className="space-y-1">
                {SKILLS.filter((s) => group.categories.includes(s.category)).map((skill) => (
                  <li key={skill.name} className="group flex items-center gap-3 py-1.5 text-[17px] text-ink">
                    {SKILL_ICONS[skill.name] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={SKILL_ICONS[skill.name]} alt="" className="logo-mono h-5 w-5 object-contain" />
                    ) : (
                      <span className="h-5 w-5" />
                    )}
                    <span className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
