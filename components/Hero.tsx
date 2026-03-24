"use client";

import { motion } from "framer-motion";
import { heroFadeUp } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-[88vh] items-center bg-canvas">
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        {/* Availability label */}
        <motion.p
          custom={0}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-accent"
        >
          {portfolio.available
            ? "Available for Full-Time Roles"
            : "Not currently available"}
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 font-serif text-[36px] leading-[1.05] text-ink md:text-[56px]"
        >
          {portfolio.headline.prefix}
          <br />
          <em>{portfolio.headline.emphasis}</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-lg font-sans text-[16px] font-light leading-[1.75] text-muted"
        >
          {portfolio.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="min-h-[44px] rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-surface transition-colors duration-150 hover:bg-ink/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="min-h-[44px] rounded-lg border border-[rgba(0,0,0,0.15)] px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-150 hover:bg-chip hover:border-[rgba(0,0,0,0.2)]"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Location note */}
        <motion.p
          custom={4}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono text-xs text-muted"
        >
          Available to join · Remote or {portfolio.location}
        </motion.p>
      </div>
    </section>
  );
}
