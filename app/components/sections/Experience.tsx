"use client";

import { EXPERIENCE } from "@/app/constants";
import { useCursorLight } from "@/app/hooks/useCursorLight";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

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
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-left mb-16 px-4 gradient-text">
          Experience
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 dark:from-blue-300 dark:via-purple-400 dark:to-indigo-500 rounded-full shadow-lg">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 0 10px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full rounded-full"
            />
          </motion.div>

          <div className="space-y-16">
            {EXPERIENCE.map((experience, index) => (
              <DesktopExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-x-auto overflow-y-hidden pb-8">
              <div
                style={{ overflowY: "hidden" }}
                className="flex space-x-8 min-w-max px-4">
                {EXPERIENCE.map((experience, index) => (
                  <MobileExperienceCard
                    key={experience.id}
                    experience={experience}
                    index={index}
                  />
                ))}
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "calc(100% - 2rem)" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-16 left-4 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 dark:from-blue-300 dark:via-purple-400 dark:to-indigo-500 rounded-full shadow-lg">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 8px 0 rgba(59, 130, 246, 0.6)",
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}

function DesktopExperienceCard({ experience, index }: ExperienceCardProps) {
  const cursorRef = useCursorLight();
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center">
      {/* Timeline Point */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="absolute left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="bg-white dark:bg-gray-800 px-2 py-1 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 mb-2">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
            {experience.period.split(" - ")[0]}
          </span>
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.4)",
              "0 0 0 8px rgba(59, 130, 246, 0)",
              "0 0 0 0 rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
            experience.current
              ? "bg-gradient-to-r from-blue-500 to-purple-600"
              : "bg-gradient-to-r from-blue-400 to-indigo-500"
          }`}></motion.div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        className={`group w-full max-w-lg ${isLeft ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
        <div
          ref={cursorRef as any}
          className={`${
            experience.current
              ? "bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-purple-900/40 border-2 border-blue-200/60 dark:border-blue-700/60"
              : "glass-card border border-gray-200/50 dark:border-gray-700/50"
          } cursor-light rounded-2xl p-6 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden`}>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">
                {experience.position}
              </h3>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-base font-medium text-blue-600 dark:text-blue-400 mb-2">
                {experience.company}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                {experience.period}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            className="mb-4">
            <ul className="space-y-1.5">
              {experience.description.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5 + itemIndex * 0.1,
                  }}
                  className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.slice(0, 6).map((tech, techIndex) => (
              <ExpTechBadge
                key={tech}
                tech={tech}
                delay={index * 0.1 + techIndex * 0.02}
              />
            ))}
            {experience.technologies.length > 6 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                +{experience.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MobileExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center min-w-[280px] relative">
      {/* Timeline Point */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="flex flex-col items-center mb-6 relative z-10">
        <div className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 mb-3">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {experience.period.split(" - ")[0]}
          </span>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.4)",
              "0 0 0 12px rgba(59, 130, 246, 0)",
              "0 0 0 0 rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          className={`w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
            experience.current
              ? "bg-gradient-to-r from-blue-500 to-purple-600"
              : "bg-gradient-to-r from-blue-400 to-indigo-500"
          }`}></motion.div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className="w-full">
        <div
          className={`${
            experience.current
              ? "bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-purple-900/40 border-2 border-blue-200/60 dark:border-blue-700/60"
              : "glass-card border border-gray-200/50 dark:border-gray-700/50"
          } cursor-light rounded-xl p-5 transition-all duration-500 shadow-lg hover:shadow-xl`}>
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold mb-1 truncate">
                {experience.position}
              </h3>
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1 truncate">
                {experience.company}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="w-3 h-3" />
                {experience.period}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <ul className="space-y-1">
              {experience.description.slice(0, 2).map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-1.5">
                  <span className="text-blue-500 mt-1 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
              {experience.description.length > 2 && (
                <li className="text-xs text-gray-500 dark:text-gray-400 italic">
                  +{experience.description.length - 2} more responsibilities
                </li>
              )}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1">
            {experience.technologies.slice(0, 4).map((tech, techIndex) => (
              <ExpTechBadgeMobile
                key={tech}
                tech={tech}
                delay={index * 0.1 + techIndex * 0.02}
              />
            ))}
            {experience.technologies.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-1.5 py-0.5">
                +{experience.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ExpTechBadgeProps {
  tech: string;
  delay: number;
}

function ExpTechBadge({ tech, delay }: ExpTechBadgeProps) {
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
      <div className="inline-flex items-center rounded-full font-medium cursor-default transition-all duration-200 px-2 py-1 text-xs glass-badge">
        {tech}
      </div>
    </motion.div>
  );
}

function ExpTechBadgeMobile({ tech, delay }: ExpTechBadgeProps) {
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
      <div className="inline-flex items-center rounded-full font-medium cursor-default transition-all duration-200 px-2 py-1 text-xs glass-badge">
        {tech}
      </div>
    </motion.div>
  );
}
