"use client";

import { PERSONAL_INFO, SKILLS } from "@/app/constants";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCursorLight } from "@/app/hooks/useCursorLight";

export default function About() {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900/50 dark:via-blue-900/20 dark:to-indigo-900/20"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-headline font-bold text-center mb-16">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-title font-semibold mb-6">
              Who I Am
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-body text-gray-600 dark:text-gray-300 mb-6">
              {PERSONAL_INFO.bio}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-caption text-gray-600 dark:text-gray-300 mb-6">
              With {PERSONAL_INFO.yearsOfExperience}+ years of experience in
              software development, I specialize in creating modern, responsive
              web applications that provide exceptional user experiences.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-caption text-gray-600 dark:text-gray-300">
              I'm passionate about clean code, performance optimization, and
              staying up-to-date with the latest technologies and best practices
              in web development.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8">
            <div>
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-title font-semibold mb-4">
                Quick Facts
              </motion.h4>
              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-2 text-caption text-gray-600 dark:text-gray-300">
                {[
                  `📍 Based in ${PERSONAL_INFO.location}`,
                  `💼 ${PERSONAL_INFO.yearsOfExperience}+ years of experience`,
                  `🎯 Focus on modern web technologies`,
                  `🌱 Always learning and growing`
                ].map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="cursor-default">
                    {fact}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-title font-semibold text-center mb-12">
            Skills & Technologies
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
                categoryIndex={categoryIndex}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-xl"
      />
    </section>
  );
}

interface SkillCategoryProps {
  category: string;
  skills: typeof SKILLS;
  categoryIndex: number;
}

function SkillCategory({ category, skills, categoryIndex }: SkillCategoryProps) {
  const cursorRef = useCursorLight();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
      className="space-y-4">
      <motion.h4 
        ref={cursorRef as any}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-lg font-semibold text-center p-4 glass-card cursor-light rounded-xl">
        {category}
      </motion.h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, skillIndex) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            delay={categoryIndex * 0.1 + skillIndex * 0.03}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface SkillBadgeProps {
  skill: typeof SKILLS[0];
  delay: number;
}

function SkillBadge({ skill, delay }: SkillBadgeProps) {
  const getBadgeStyle = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-md hover:shadow-lg";
      case "Advanced":
        return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-md hover:shadow-lg";
      case "Intermediate":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 shadow-md hover:shadow-lg";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0 shadow-md hover:shadow-lg";
    }
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
          ${getBadgeStyle(skill.level)}
        `}>
        {skill.name}
      </div>
    </motion.div>
  );
}
