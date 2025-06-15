"use client";

import { PROJECTS } from "@/app/constants";
import { useCursorLight } from "@/app/hooks/useCursorLight";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-right mb-16 px-4 py-1 gradient-text">
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-title font-semibold text-center mb-12">
              Other Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  featured?: boolean;
}

function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const cursorRef = useCursorLight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: featured ? 1.02 : 1.01,
        y: featured ? -6 : -3,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group">
      <div
        ref={cursorRef as any}
        className={`h-full glass-card cursor-light rounded-2xl p-6 transition-all duration-500 flex flex-col ${
          featured
            ? "shadow-2xl hover:shadow-3xl border-2 border-green-200/30 dark:border-green-400/30 bg-gradient-to-br from-green-50/50 via-emerald-50/50 to-teal-50/50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20"
            : "shadow-lg hover:shadow-xl"
        }`}>
        <div className="mb-4">
          <motion.h3
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            className={`text-title font-semibold ${
              featured ? "text-green-900 dark:text-green-100 text-xl" : ""
            }`}>
            {project.title}
          </motion.h3>
        </div>

        <p className="text-caption text-gray-600 dark:text-gray-300 mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <TechBadge
              key={tech}
              tech={tech}
              delay={index * 0.1 + techIndex * 0.02}
            />
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.github && (
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-badge px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 no-underline">
                <Github className="w-4 h-4" />
                {featured ? "Code" : ""}
              </a>
            </motion.div>
          )}
          {project.demo && (
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-700 dark:text-blue-300 hover:from-blue-600/30 hover:to-purple-600/30 transition-all flex items-center gap-2 no-underline">
                <ExternalLink className="w-4 h-4" />
                View
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface TechBadgeProps {
  tech: string;
  delay: number;
}

function TechBadge({ tech, delay }: TechBadgeProps) {
  const getTechBadgeStyle = (technology: string) => {
    const tech = technology.toLowerCase();

    // Frontend Technologies
    if (
      tech.includes("react") ||
      tech.includes("vue") ||
      tech.includes("angular") ||
      tech.includes("svelte") ||
      tech.includes("next") ||
      tech.includes("nuxt") ||
      tech.includes("typescript") ||
      tech.includes("javascript") ||
      tech.includes("html") ||
      tech.includes("css") ||
      tech.includes("tailwind") ||
      tech.includes("sass") ||
      tech.includes("scss")
    ) {
      return "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Backend Technologies
    if (
      tech.includes("node") ||
      tech.includes("express") ||
      tech.includes("fastify") ||
      tech.includes("nest") ||
      tech.includes("python") ||
      tech.includes("django") ||
      tech.includes("flask") ||
      tech.includes("php") ||
      tech.includes("laravel") ||
      tech.includes("symfony") ||
      tech.includes("java") ||
      tech.includes("spring") ||
      tech.includes("c#") ||
      tech.includes(".net") ||
      tech.includes("go") ||
      tech.includes("rust") ||
      tech.includes("ruby") ||
      tech.includes("rails")
    ) {
      return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Mobile Technologies
    if (
      tech.includes("react native") ||
      tech.includes("flutter") ||
      tech.includes("dart") ||
      tech.includes("swift") ||
      tech.includes("kotlin") ||
      tech.includes("java") ||
      tech.includes("xamarin") ||
      tech.includes("ionic") ||
      tech.includes("cordova")
    ) {
      return "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Database Technologies
    if (
      tech.includes("mongodb") ||
      tech.includes("mysql") ||
      tech.includes("postgresql") ||
      tech.includes("sqlite") ||
      tech.includes("redis") ||
      tech.includes("firebase") ||
      tech.includes("supabase") ||
      tech.includes("prisma") ||
      tech.includes("sequelize")
    ) {
      return "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Cloud & DevOps
    if (
      tech.includes("aws") ||
      tech.includes("azure") ||
      tech.includes("gcp") ||
      tech.includes("docker") ||
      tech.includes("kubernetes") ||
      tech.includes("terraform") ||
      tech.includes("jenkins") ||
      tech.includes("github actions") ||
      tech.includes("gitlab ci") ||
      tech.includes("heroku") ||
      tech.includes("vercel") ||
      tech.includes("netlify")
    ) {
      return "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Tools & Others
    if (
      tech.includes("git") ||
      tech.includes("webpack") ||
      tech.includes("vite") ||
      tech.includes("eslint") ||
      tech.includes("prettier") ||
      tech.includes("jest") ||
      tech.includes("cypress") ||
      tech.includes("storybook") ||
      tech.includes("figma") ||
      tech.includes("adobe")
    ) {
      return "bg-gradient-to-r from-pink-500 to-pink-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Default gradient for unknown technologies
    return "bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0 shadow-md hover:shadow-lg";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay,
        type: "spring",
        stiffness: 300,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}>
      <div
        className={`
          inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium 
          cursor-default transition-all duration-200 
          ${getTechBadgeStyle(tech)}
        `}>
        {tech}
      </div>
    </motion.div>
  );
}
