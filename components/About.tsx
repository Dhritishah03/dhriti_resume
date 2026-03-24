"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" className="bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-6 bg-muted/40" />
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            About
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Left — bio paragraphs */}
          <div className="space-y-4">
            {portfolio.about.paragraphs.map((para, i) => (
              <motion.p
                key={`about-para-${i}`}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="text-[15px] font-light leading-[1.8] text-muted"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right — skills */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Skills />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
