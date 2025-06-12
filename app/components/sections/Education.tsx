"use client";

import { EDUCATION } from "@/app/constants";
import { useCursorLight } from "@/app/hooks/useCursorLight";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
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
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-left mb-16 px-4 gradient-text">
          Education
        </motion.h2>

        <div className="space-y-8">
          {EDUCATION.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  education: (typeof EDUCATION)[0];
  index: number;
}

function EducationCard({ education, index }: EducationCardProps) {
  const cursorRef = useCursorLight();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className={`grid md:grid-cols-12 gap-8 items-center ${
        isEven ? "md:grid-flow-col" : "md:grid-flow-col-reverse"
      }`}>
      
      {/* Card Content */}
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="md:col-span-8">
        <div
          ref={cursorRef as any}
          className="glass-card cursor-light rounded-2xl p-8 transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden">
          
          {/* Decorative Elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg"
          />
          
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 15,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </motion.div>
              
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {education.degree}
                </motion.h3>
                
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {education.institution}
                </motion.h4>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </motion.div>
              </div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {education.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
      
      {/* Fun Decorative Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 200
        }}
        className="md:col-span-4 flex justify-center">
        
        <motion.div
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.6 }
          }}
          className="relative">
          
          {/* Main decorative circle */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full flex items-center justify-center relative">
            
            {/* Inner elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [360, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
              
              {index === 0 ? (
                <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              ) : (
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              )}
            </motion.div>
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute w-2 h-2 bg-gradient-to-r ${
                  i % 2 === 0 
                    ? "from-blue-400 to-blue-600" 
                    : "from-purple-400 to-purple-600"
                } rounded-full`}
                style={{
                  top: `${20 + Math.sin(i) * 40}%`,
                  left: `${20 + Math.cos(i) * 40}%`,
                }}
              />
            ))}
          </motion.div>
          
          {/* Status indicator for current education */}
          {education.period.includes("Present") && (
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}