"use client";

import { motion, useReducedMotion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroCopy() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? false : "hidden"}
      animate={reduce ? undefined : "show"}
      className="flex flex-col items-start gap-6"
    >
      <motion.h1
        variants={reduce ? undefined : item}
        className="text-balance bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-5xl font-black leading-[1.05] tracking-tight text-transparent md:text-6xl"
      >
        Senior talent for the AI era.
      </motion.h1>

      <motion.p
        variants={reduce ? undefined : item}
        className="max-w-[48ch] text-base leading-relaxed text-muted md:text-lg"
      >
        Nearshore tech leads and engineers who embed in your team, in your
        time zone, from week one.
      </motion.p>

      <motion.div
        variants={reduce ? undefined : item}
        className="flex flex-wrap items-center gap-4 pt-2"
      >
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform active:-translate-y-px active:scale-[0.98]"
        >
          Book a call
        </a>
        <a
          href="#assessment"
          className="inline-flex items-center rounded-full border border-accent/50 px-6 py-3 text-sm font-medium text-accent transition-colors hover:border-accent active:-translate-y-px active:scale-[0.98]"
        >
          Take 5 minute assessment
        </a>
      </motion.div>
    </motion.div>
  );
}
