"use client";

import { PERSONAL_INFO, SKILLS } from "@/app/constants";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useCursorLight } from "@/app/hooks/useCursorLight";
import { useState } from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-left mb-16 px-4 bg-gradient-to-r from-gray-600 to-white dark:from-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
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
              className="text-title font-semibold mb-6 bg-gradient-to-r from-gray-600 to-white dark:from-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
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
                className="text-title font-semibold mb-4 bg-gradient-to-r from-gray-600 to-white dark:from-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
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
                  `🌱 Always learning and growing`,
                  `📱 Trying to convert to mobile development`,
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-right mb-12 px-4 bg-gradient-to-r from-gray-600 to-white dark:from-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
            Tech Stack
          </motion.h3>
        </motion.div>
      </div>

      {/* Full width skills slider */}
      <div className="w-full overflow-hidden">
        <SkillsSlider skills={SKILLS} />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-xl"
      />
    </section>
  );
}

interface SkillsSliderProps {
  skills: typeof SKILLS;
}

function SkillsSlider({ skills }: SkillsSliderProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTechIcon = (skill: string) => {
    const iconMapping: Record<string, string> = {
      React: "/skillsIcons/react-original.svg",
      Angular: "/skillsIcons/angularjs-plain.svg",
      TypeScript: "/skillsIcons/typescript-plain.svg",
      JavaScript: "/skillsIcons/javascript-plain.svg",
      Electron: "/skillsIcons/electron-original.svg",
      "C#": "/skillsIcons/csharp-original.svg",
      ".NET": "/skillsIcons/dotnetcore-original.svg",
      "Node.js": "/skillsIcons/nodejs-original.svg",
      Python: "/skillsIcons/python-original.svg",
      "C++": "/skillsIcons/cplusplus-original.svg",
      C: "/skillsIcons/c-original.svg",
      "React Native": "/skillsIcons/react-original.svg",
      Ionic: "/skillsIcons/ionic-original.svg",
      PostgreSQL: "/skillsIcons/postgresql-original.svg",
      "Oracle Cloud": "/skillsIcons/oracle-original.svg",
      Git: "/skillsIcons/git-original.svg",
      Jenkins: "/skillsIcons/jenkins-original.svg",
      WordPress: "/skillsIcons/wordpress-plain.svg",
    };
    return iconMapping[skill] || null;
  };

  const allSkills = [...skills];

  // Split skills into two rows
  const row1Skills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2Skills = allSkills.slice(Math.ceil(allSkills.length / 2));

  // Create seamless arrays - duplicate just twice for smooth loop
  const seamlessRow1 = [...row1Skills, ...row1Skills];
  const seamlessRow2 = [...row2Skills, ...row2Skills];

  return (
    <div
      className="w-full overflow-hidden space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* First Row - Left to Right */}
      <div className="relative overflow-hidden py-4">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              duration: isHovered ? 30 : 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          className="flex space-x-6 whitespace-nowrap will-change-transform">
          {seamlessRow1.map((skill, index) => (
            <SkillIcon
              key={`row1-${index}`}
              skill={skill}
              iconPath={getTechIcon(skill.name)}
            />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative overflow-hidden py-4">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              duration: isHovered ? 35 : 18,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          className="flex space-x-6 whitespace-nowrap will-change-transform">
          {seamlessRow2.map((skill, index) => (
            <SkillIcon
              key={`row2-${index}`}
              skill={skill}
              iconPath={getTechIcon(skill.name)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

interface SkillIconProps {
  skill: (typeof SKILLS)[0];
  iconPath: string | null;
}

function SkillIcon({ skill, iconPath }: SkillIconProps) {
  const cursorRef = useCursorLight();

  const getBadgeStyle = (skillName: string) => {
    // Use logo-specific colors for each technology
    const logoColors: Record<string, string> = {
      React:
        "bg-gradient-to-r from-cyan-400/80 to-cyan-600/80 dark:from-cyan-400/60 dark:to-cyan-600/60 border-cyan-400/30 text-white",
      Angular:
        "bg-gradient-to-r from-red-500/80 to-red-700/80 dark:from-red-500/60 dark:to-red-700/60 border-red-400/30 text-white",
      TypeScript:
        "bg-gradient-to-r from-blue-500/80 to-blue-700/80 dark:from-blue-500/60 dark:to-blue-700/60 border-blue-400/30 text-white",
      JavaScript:
        "bg-gradient-to-r from-yellow-400/80 to-yellow-600/80 dark:from-yellow-400/60 dark:to-yellow-600/60 border-yellow-400/30 text-black",
      Electron:
        "bg-gradient-to-r from-slate-600/80 to-slate-800/80 dark:from-slate-600/60 dark:to-slate-800/60 border-slate-400/30 text-white",
      "C#": "bg-gradient-to-r from-purple-600/80 to-purple-800/80 dark:from-purple-600/60 dark:to-purple-800/60 border-purple-400/30 text-white",
      ".NET":
        "bg-gradient-to-r from-purple-600/80 to-indigo-700/80 dark:from-purple-600/60 dark:to-indigo-700/60 border-purple-400/30 text-white",
      "Node.js":
        "bg-gradient-to-r from-green-500/80 to-green-700/80 dark:from-green-500/60 dark:to-green-700/60 border-green-400/30 text-white",
      Python:
        "bg-gradient-to-r from-blue-500/80 to-yellow-500/80 dark:from-blue-500/60 dark:to-yellow-500/60 border-blue-400/30 text-white",
      "C++":
        "bg-gradient-to-r from-blue-600/80 to-blue-800/80 dark:from-blue-600/60 dark:to-blue-800/60 border-blue-400/30 text-white",
      C: "bg-gradient-to-r from-blue-700/80 to-blue-900/80 dark:from-blue-700/60 dark:to-blue-900/60 border-blue-400/30 text-white",
      "React Native":
        "bg-gradient-to-r from-cyan-400/80 to-cyan-600/80 dark:from-cyan-400/60 dark:to-cyan-600/60 border-cyan-400/30 text-white",
      Ionic:
        "bg-gradient-to-r from-blue-500/80 to-blue-700/80 dark:from-blue-500/60 dark:to-blue-700/60 border-blue-400/30 text-white",
      Capacitor:
        "bg-gradient-to-r from-blue-500/80 to-blue-700/80 dark:from-blue-500/60 dark:to-blue-700/60 border-blue-400/30 text-white",
      PostgreSQL:
        "bg-gradient-to-r from-blue-600/80 to-blue-800/80 dark:from-blue-600/60 dark:to-blue-800/60 border-blue-400/30 text-white",
      "Oracle Cloud":
        "bg-gradient-to-r from-red-600/80 to-red-800/80 dark:from-red-600/60 dark:to-red-800/60 border-red-400/30 text-white",
      Git: "bg-gradient-to-r from-orange-500/80 to-red-600/80 dark:from-orange-500/60 dark:to-red-600/60 border-orange-400/30 text-white",
      Jenkins:
        "bg-gradient-to-r from-blue-500/80 to-blue-700/80 dark:from-blue-500/60 dark:to-blue-700/60 border-blue-400/30 text-white",
      WordPress:
        "bg-gradient-to-r from-blue-600/80 to-blue-800/80 dark:from-blue-600/60 dark:to-blue-800/60 border-blue-400/30 text-white",
    };

    return (
      logoColors[skillName] ||
      "bg-gradient-to-r from-gray-500/80 to-gray-600/80 dark:from-gray-500/60 dark:to-gray-600/60 border-gray-400/30 text-white"
    );
  };

  return (
    <motion.div
      ref={cursorRef as any}
      whileHover={{
        scale: 1.1,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={`
        flex items-center space-x-3 px-4 py-3 rounded-xl 
        glass-card cursor-light border transition-all duration-300
        ${getBadgeStyle(skill.name)}
        shadow-lg hover:shadow-xl
        min-w-fit
      `}>
      {iconPath ? (
        <img
          src={iconPath}
          alt={`${skill.name} icon`}
          className="w-8 h-8 object-contain"
        />
      ) : (
        <div className="w-8 h-8 bg-gray-500/50 rounded-md flex items-center justify-center">
          <span className="text-xs">⚙️</span>
        </div>
      )}
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{skill.name}</span>
        <span className="text-xs opacity-80">{skill.level}</span>
      </div>
    </motion.div>
  );
}
