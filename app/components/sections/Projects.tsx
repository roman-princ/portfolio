"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/app/constants";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400/80 mb-4"
        >
          03 — Selected work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-16"
        >
          Built to be
          <span className="text-gradient-neon"> used.</span>
        </motion.h2>

        <div className="space-y-8 mb-20">
          {featured.map((project, index) => {
            const link = project.demo || project.github;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="group neon-card rounded-3xl p-8 md:p-12 overflow-hidden relative"
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 md:items-center ${
                    index % 2 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="font-display text-[clamp(4rem,10vw,8rem)] font-extrabold leading-none text-white/[0.06] group-hover:text-white/[0.12] transition-colors select-none shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-gradient-neon transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55 border border-white/10 bg-white/[0.03] rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 rounded-full px-5 py-2.5 transition-all"
                        >
                          Live project
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/40 rounded-full px-5 py-2.5 transition-all"
                        >
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                      )}
                      {!link && (
                        <span className="text-xs uppercase tracking-[0.2em] text-white/30 self-center">
                          Client project — private
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="font-display text-2xl md:text-3xl font-bold text-white/80 mb-8"
        >
          Also on the shelf
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project, index) => {
            const link = project.demo || project.github;
            const Tag = link ? "a" : "div";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
              >
                <Tag
                  {...(link
                    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group neon-card rounded-2xl p-6 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-display text-lg font-bold text-white leading-snug pr-3">
                      {project.title}
                    </h4>
                    {link && (
                      <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-fuchsia-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/45 border border-white/10 rounded-full px-2.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
