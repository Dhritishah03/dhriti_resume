"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";

const LINKS = [
  {
    label: "Email",
    href: `mailto:${portfolio.email}`,
    display: portfolio.email,
  },
  {
    label: "LinkedIn",
    href: portfolio.linkedin,
    display: portfolio.linkedin.replace("https://", ""),
  },
  {
    label: "GitHub",
    href: portfolio.github,
    display: portfolio.github.replace("https://", ""),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-canvas py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-6 bg-muted/40" />
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Contact
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
          {/* Left */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="mb-3 font-serif text-[28px] leading-[1.1] text-ink md:text-[32px]">
              Let&apos;s work together.
            </h2>
            <p className="text-[15px] font-light leading-[1.8] text-muted">
              I&apos;m open to backend engineering roles across product,
              infrastructure, or AI/ML — ideally at a company building
              something with real-world impact. I work best in environments
              where ownership and speed are valued.
            </p>
            <p className="mt-3 font-mono text-[12px] text-muted">
              I usually respond within 48 hours.
            </p>
          </motion.div>

          {/* Right — link rows */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-2"
          >
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex min-h-[48px] items-center justify-between rounded-xl border border-[rgba(0,0,0,0.09)] px-4 py-2.5 transition-colors duration-150 hover:border-accent/30 hover:bg-accent-light"
              >
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted group-hover:text-accent">
                  {link.label}
                </span>
                <span className="font-mono text-[12px] text-muted group-hover:text-accent">
                  {link.display} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
