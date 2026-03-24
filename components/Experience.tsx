"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-canvas py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-6 bg-muted/40" />
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Experience
          </p>
        </div>

        {/* Timeline */}
        <div>
          {portfolio.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="border-t border-[rgba(0,0,0,0.09)] py-6 last:border-b"
            >
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr] sm:gap-8">
                {/* Date */}
                <p className="font-mono text-[12px] leading-6 text-muted">
                  {job.period}
                </p>

                {/* Details */}
                <div>
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    <span className="text-[15px] font-medium text-ink">
                      {job.role}
                    </span>
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${job.company} (opens in new tab)`}
                      className="font-mono text-[13px] text-accent hover:underline underline-offset-2"
                    >
                      {job.company} <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <p className="mb-2.5 text-[14px] font-light leading-[1.7] text-muted">
                    {job.description}
                  </p>

                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="space-y-1">
                      {job.highlights.map((point, j) => (
                        <li
                          key={`${job.company}-highlight-${j}`}
                          className="flex items-start gap-2 text-[13px] font-light leading-[1.6] text-muted"
                        >
                          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-muted/50" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
