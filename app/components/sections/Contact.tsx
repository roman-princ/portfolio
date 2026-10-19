"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/app/constants";
import { scrollToTarget } from "@/app/lib/scroll";
import { easeOut, Reveal } from "../common/Reveal";

type Status = "idle" | "sending" | "success" | "error";

const SEND_LABEL: Record<Status, string> = {
  idle: "Send message",
  sending: "Sending…",
  success: "Sent. Talk soon.",
  error: "That failed. Email me instead.",
};

/** The address, big; a click copies it, and it says so. */
function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };
  return (
    <button onClick={copy} className="group block text-left" aria-label={`Copy ${CONTACT_INFO.email}`}>
      <span className="title draw block break-all pb-1 text-[clamp(1.5rem,3.6vw,2.75rem)]">{CONTACT_INFO.email}</span>
      <span className="mt-2 inline-flex h-5 overflow-hidden text-sm text-muted">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={String(copied)}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: easeOut }}
            className={copied ? "text-ink" : ""}
          >
            {copied ? "Copied to your clipboard ✓" : "Click to copy"}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const field =
    "w-full border-b border-line-strong bg-transparent py-3 text-lg text-ink placeholder:text-dim transition-colors focus:border-white focus:outline-none";

  return (
    <section id="contact" className="px-5 pt-24 md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-5 flex items-center gap-3 text-sm text-muted">
          <span className="font-mono text-dim">05</span>
          <span className="h-px w-8 bg-line-strong" />
          <span>Contact</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mb-16 text-[clamp(3.25rem,10vw,8.5rem)] md:mb-24">
            Let&apos;s build
            <br />
            something
            <br />
            <span className="text-muted">people remember.</span>
          </h2>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <Reveal className="space-y-10 md:col-span-6">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Got a product to launch, an app to rescue, or an idea that needs an engineer who actually ships? My inbox is
              open, and the first reply is usually the same day.
            </p>
            <CopyEmail />
            <div className="space-y-2 text-muted">
              <p>{CONTACT_INFO.location}, working worldwide, remote-first</p>
              <div className="flex gap-6">
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="draw pb-0.5 transition-colors hover:text-ink">
                  GitHub
                </a>
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="draw pb-0.5 transition-colors hover:text-ink">
                  LinkedIn
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="draw pb-0.5 transition-colors hover:text-ink">
                  Open in Mail
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
            <form onSubmit={submit} className="space-y-8">
              <label className="block">
                <span className="text-sm text-dim">Name</span>
                <input type="text" name="name" value={form.name} onChange={change} required autoComplete="name" placeholder="Jane Doe" className={field} />
              </label>
              <label className="block">
                <span className="text-sm text-dim">Email</span>
                <input type="email" name="email" value={form.email} onChange={change} required autoComplete="email" placeholder="jane@company.com" className={field} />
              </label>
              <label className="block">
                <span className="text-sm text-dim">Project</span>
                <textarea name="message" value={form.message} onChange={change} required rows={4} placeholder="Tell me what you're building" className={`${field} resize-none`} />
              </label>
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`group inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium transition-all duration-300 ${
                  status === "idle"
                    ? "bg-white text-black hover:scale-[1.03] active:scale-95"
                    : status === "sending"
                      ? "cursor-wait bg-white/80 text-black"
                      : "cursor-default border border-line-strong text-ink"
                }`}
                aria-live="polite"
              >
                {SEND_LABEL[status]}
                {status === "idle" && (
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto mt-32 flex max-w-6xl flex-col gap-4 border-t border-line py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between md:mt-44">
        <span>© {new Date().getFullYear()} Roman Princ</span>
        <span>Designed and built in Prague</span>
        <button onClick={() => scrollToTarget(0)} className="group inline-flex items-center gap-2 transition-colors hover:text-ink">
          Back to the top
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </footer>
    </section>
  );
}
