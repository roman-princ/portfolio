"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from "lucide-react";
import { CONTACT_INFO } from "@/app/constants";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitStatus !== "idle") return;
    setSubmitStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitStatus(response.ok ? "success" : "error");
    } catch {
      setSubmitStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-fuchsia-400/60 focus:bg-white/[0.06] transition-all";

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-fuchsia-400/80 mb-4"
        >
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="font-display text-[clamp(2.6rem,8vw,6rem)] font-extrabold tracking-tight leading-[1.02] text-white mb-16"
        >
          Let&apos;s build something
          <br />
          <span className="text-gradient-neon">people remember.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-md">
              Got a product to launch, an app to rescue, or an idea that needs
              an engineer who actually ships? My inbox is open — first reply is
              usually same-day.
            </p>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group inline-flex items-center gap-3 text-lg md:text-2xl font-display font-bold text-white hover:text-gradient-neon transition-all"
            >
              <Mail className="h-6 w-6 text-fuchsia-400" />
              {CONTACT_INFO.email}
            </a>

            <div className="flex items-center gap-3 text-white/50 text-sm">
              <MapPin className="h-4 w-4" />
              {CONTACT_INFO.location} — working worldwide, remote-first
            </div>

            <div className="flex gap-2 pt-2">
              {[
                { href: CONTACT_INFO.github, icon: Github, label: "GitHub" },
                {
                  href: CONTACT_INFO.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full text-white/50 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="neon-card rounded-3xl p-7 md:p-9 space-y-5"
            >
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Send a message
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <textarea
                name="message"
                placeholder="Tell me about your project…"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className={`${inputClasses} resize-none`}
              />
              <button
                type="submit"
                disabled={submitStatus !== "idle"}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-white transition-all ${
                  submitStatus === "success"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                    : submitStatus === "error"
                      ? "bg-red-500/20 text-red-300 border border-red-400/40"
                      : "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-fuchsia-900/40 hover:-translate-y-0.5"
                } ${submitStatus !== "idle" ? "cursor-not-allowed" : ""}`}
              >
                {submitStatus === "sending" && (
                  <>
                    <Send className="h-4 w-4 animate-pulse" /> Sending…
                  </>
                )}
                {submitStatus === "success" && (
                  <>
                    <CheckCircle className="h-4 w-4" /> Message sent — talk soon!
                  </>
                )}
                {submitStatus === "error" && (
                  <>
                    <AlertCircle className="h-4 w-4" /> Failed — email me
                    directly
                  </>
                )}
                {submitStatus === "idle" && (
                  <>
                    <Send className="h-4 w-4" /> Send it
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto mt-28 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35 uppercase tracking-[0.2em]">
        <span>© {new Date().getFullYear()} Roman Princ — Prague</span>
        <span>Next.js ✦ Three.js ✦ Too much coffee</span>
      </footer>
    </section>
  );
}
