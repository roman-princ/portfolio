"use client";

import { EXPERIENCE } from "@/app/constants";
import { useCursorLight } from "@/app/hooks/useCursorLight";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
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
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-xl"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-left mb-16 px-4 bg-gradient-to-r from-gray-600 to-white dark:from-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
          Experience
        </motion.h2>

        <div className="space-y-8">
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: typeof EXPERIENCE[0];
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const cursorRef = useCursorLight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.01,
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group">
      <div
        ref={cursorRef as any}
        className={`${
          experience.current 
            ? "bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50" 
            : "glass-card"
        } cursor-light rounded-2xl p-8 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden`}>

        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <motion.h3
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="text-title font-semibold mb-1">
                  {experience.position}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {experience.company}
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4" />
                {experience.period}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="mb-6">
              <ul className="space-y-2">
                {experience.description.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.5 + itemIndex * 0.1 
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="text-caption text-gray-600 dark:text-gray-300 flex items-start gap-2">
                    <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <ExpTechBadge 
                  key={tech} 
                  tech={tech} 
                  delay={index * 0.1 + techIndex * 0.02} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ExpTechBadgeProps {
  tech: string;
  delay: number;
}

function ExpTechBadge({ tech, delay }: ExpTechBadgeProps) {
  const getTechBadgeStyle = (technology: string) => {
    const tech = technology.toLowerCase();
    
    // Frontend Technologies
    if (tech.includes('react') || tech.includes('vue') || tech.includes('angular') || tech.includes('svelte') || tech.includes('next') || tech.includes('nuxt') || tech.includes('typescript') || tech.includes('javascript') || tech.includes('html') || tech.includes('css') || tech.includes('tailwind') || tech.includes('sass') || tech.includes('scss')) {
      return "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-md hover:shadow-lg";
    }
    
    // Backend Technologies
    if (tech.includes('node') || tech.includes('express') || tech.includes('fastify') || tech.includes('nest') || tech.includes('python') || tech.includes('django') || tech.includes('flask') || tech.includes('php') || tech.includes('laravel') || tech.includes('symfony') || tech.includes('java') || tech.includes('spring') || tech.includes('c#') || tech.includes('.net') || tech.includes('go') || tech.includes('rust') || tech.includes('ruby') || tech.includes('rails')) {
      return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-md hover:shadow-lg";
    }
    
    // Mobile Technologies
    if (tech.includes('react native') || tech.includes('flutter') || tech.includes('dart') || tech.includes('swift') || tech.includes('kotlin') || tech.includes('java') || tech.includes('xamarin') || tech.includes('ionic') || tech.includes('cordova') || tech.includes('capacitor')) {
      return "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-md hover:shadow-lg";
    }
    
    // Database Technologies
    if (tech.includes('mongodb') || tech.includes('mysql') || tech.includes('postgresql') || tech.includes('sqlite') || tech.includes('redis') || tech.includes('firebase') || tech.includes('supabase') || tech.includes('prisma') || tech.includes('sequelize') || tech.includes('mssql')) {
      return "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-md hover:shadow-lg";
    }
    
    // Cloud & DevOps
    if (tech.includes('aws') || tech.includes('azure') || tech.includes('gcp') || tech.includes('docker') || tech.includes('kubernetes') || tech.includes('terraform') || tech.includes('jenkins') || tech.includes('github actions') || tech.includes('gitlab ci') || tech.includes('heroku') || tech.includes('vercel') || tech.includes('netlify')) {
      return "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-0 shadow-md hover:shadow-lg";
    }
    
    // Tools & Others
    if (tech.includes('git') || tech.includes('webpack') || tech.includes('vite') || tech.includes('eslint') || tech.includes('prettier') || tech.includes('jest') || tech.includes('cypress') || tech.includes('storybook') || tech.includes('figma') || tech.includes('adobe') || tech.includes('graphql') || tech.includes('rest api') || tech.includes('pwa') || tech.includes('iot')) {
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
        stiffness: 300
      }}
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 }
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