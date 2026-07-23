"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  PERSONAL_INFO,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  CERTIFICATES,
} from "@/app/constants";

const easeOut = [0.16, 1, 0.3, 1] as const;

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

function Stat({
  value,
  suffix = "+",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: easeOut,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="neon-card rounded-2xl px-6 py-8 text-center">
      <div className="font-display text-5xl md:text-6xl font-extrabold text-gradient-neon mb-2 tabular-nums">
        {n}
        {suffix}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-fuchsia-400/80 mb-4"
        >
          01 — About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-14"
        >
          Not just another
          <br />
          <span className="text-gradient-neon">developer.</span>
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="md:col-span-3 space-y-5 text-white/65 text-base md:text-lg leading-relaxed"
          >
            <p>
              I&apos;m Roman — freelancer and Software Engineering student at
              CTU Prague. For the last {PERSONAL_INFO.yearsOfExperience}+ years
              I&apos;ve been the person companies call when an idea needs to
              become a product: web, mobile, backend, infrastructure — the
              whole pipeline.
            </p>
            <p>
              I&apos;ve led the build of a B2C commerce platform used in
              production, wrote a React Native app that controls IoT gateways
              in the field (and took 5th place nationally for it), and built an
              Excel engine in C++ because slow software offends me.
            </p>
            <p>
              I dive deep into rabbit holes, learn whatever the problem
              demands, and ship. That&apos;s the whole pitch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="neon-card rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-bold text-white text-lg mb-2">
                Quick facts
              </h3>
              {[
                `📍 Based in ${PERSONAL_INFO.location}`,
                `💼 ${PERSONAL_INFO.yearsOfExperience}+ years of experience`,
                "🎯 Web apps, mobile apps, and everything between",
                "🏆 National award-winning project (SOČ)",
                "🌱 Perpetually down a new rabbit hole",
              ].map((fact) => (
                <div
                  key={fact}
                  className="text-sm text-white/60 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  {fact}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          <Stat value={PERSONAL_INFO.yearsOfExperience} label="Years shipping" />
          <Stat value={PROJECTS.length} label="Projects delivered" />
          <Stat value={EXPERIENCE.length} label="Companies trusted me" />
          <Stat value={CERTIFICATES.length} label="Certs & awards" />
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10 text-right"
        >
          The arsenal<span className="text-fuchsia-400">.</span>
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                ease: easeOut,
                delay: (index % 6) * 0.06,
              }}
              whileHover={{ y: -6, rotate: index % 2 ? 1.5 : -1.5 }}
              className="neon-card rounded-xl p-4 flex flex-col items-center gap-2 text-center"
            >
              {SKILL_ICONS[skill.name] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={SKILL_ICONS[skill.name]}
                  alt=""
                  className="w-9 h-9 object-contain"
                />
              ) : (
                <span className="w-9 h-9 flex items-center justify-center text-xl">
                  ⚡
                </span>
              )}
              <span className="text-sm font-semibold text-white/85">
                {skill.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
