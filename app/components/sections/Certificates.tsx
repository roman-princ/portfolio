"use client";

import { CERTIFICATES } from "@/app/constants";
import { useCursorLight } from "@/app/hooks/useCursorLight";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 relative overflow-hidden">
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
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-right mb-8 px-4 gradient-text">
          Certs & Awards
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {CERTIFICATES.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CertificateCardProps {
  certificate: (typeof CERTIFICATES)[0];
  index: number;
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
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
        scale: 1.02,
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group">
      <div
        ref={cursorRef as any}
        className="h-full glass-card cursor-light rounded-2xl p-6 transition-all duration-500 shadow-lg hover:shadow-xl"
        onClick={() => {
          if (certificate.credentialUrl || certificate.link) {
            window.open(
              certificate.credentialUrl || certificate.link,
              "_blank"
            );
          }
        }}
        style={{
          cursor:
            certificate.credentialUrl || certificate.link
              ? "pointer"
              : "default",
        }}>
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </motion.div>

          {(certificate.credentialUrl || certificate.link) && (
            <motion.a
              href={certificate.credentialUrl || certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>

        <motion.h3
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
          className="text-title font-semibold mb-2">
          {certificate.name}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="flex items-center gap-2 mb-4">
          <div className="text-lg font-medium text-purple-600 dark:text-purple-400">
            {certificate.issuer}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            {certificate.issueDate}
          </div>
        </motion.div>

        {certificate.credentialId && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="mb-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Credential ID:{" "}
              <span className="font-mono font-medium">
                {certificate.credentialId}
              </span>
            </span>
          </motion.div>
        )}

        {certificate.description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            className="text-caption text-gray-600 dark:text-gray-300 mb-6">
            {certificate.description}
          </motion.p>
        )}

        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, skillIndex) => (
            <CertSkillBadge
              key={skill}
              skill={skill}
              delay={index * 0.1 + skillIndex * 0.02}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface CertSkillBadgeProps {
  skill: string;
  delay: number;
}

function CertSkillBadge({ skill, delay }: CertSkillBadgeProps) {
  const getSkillBadgeStyle = (skill: string) => {
    const skillLower = skill.toLowerCase();

    // Frontend Technologies
    if (
      skillLower.includes("react") ||
      skillLower.includes("javascript") ||
      skillLower.includes("frontend") ||
      skillLower.includes("html") ||
      skillLower.includes("css")
    ) {
      return "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Cloud & DevOps
    if (
      skillLower.includes("azure") ||
      skillLower.includes("cloud") ||
      skillLower.includes("aws") ||
      skillLower.includes("gcp")
    ) {
      return "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Mobile Technologies
    if (
      skillLower.includes("mobile") ||
      skillLower.includes("ios") ||
      skillLower.includes("android") ||
      skillLower.includes("cross-platform")
    ) {
      return "bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Backend Technologies
    if (
      skillLower.includes("node") ||
      skillLower.includes("backend") ||
      skillLower.includes("full stack")
    ) {
      return "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // State Management
    if (skillLower.includes("state") || skillLower.includes("management")) {
      return "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 shadow-md hover:shadow-lg";
    }

    // Default
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
          ${getSkillBadgeStyle(skill)}
        `}>
        {skill}
      </div>
    </motion.div>
  );
}
