"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);

      // Add slight delay for mobile menu animation to complete
      setTimeout(() => {
        // Get the navigation height to offset scroll position
        const navHeight = document.querySelector("nav")?.offsetHeight || 0;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight - 20; // Extra 20px padding

        // Use different scroll methods for better mobile compatibility
        if ("scrollTo" in window) {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          // Fallback for older mobile browsers
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Wait for mobile menu close animation
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-white/60 dark:bg-gray-900/60 backdrop-blur-apple border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl rounded-full p-2 transition-colors">
            🏠
          </motion.button>

          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative">
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <div className="hidden md:block w-24"></div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden">
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.2 }}
                className="px-2 pt-2 pb-3 space-y-1 light:bg-white dark:bg-transparent border-t border-gray-200 dark:border-gray-700">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                    {item.name}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
