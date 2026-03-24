"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <div className="space-y-5">
      {portfolio.skills.map((group) => (
        <div key={group.label}>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <motion.span
                key={item}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-[6px] bg-chip px-2.5 py-1 font-mono text-[12px] text-chip-ink"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
