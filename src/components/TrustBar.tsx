"use client";

import { motion, useReducedMotion } from "motion/react";
import { SiCloudinary, SiSanity } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const PARTNERS = [
  { label: "Cloudinary", node: <SiCloudinary size={28} aria-label="Cloudinary" /> },
  { label: "AWS", node: <FaAws size={30} aria-label="AWS" /> },
  { label: "Sanity", node: <SiSanity size={26} aria-label="Sanity" /> },
  {
    label: "Braze",
    node: (
      <span className="text-xl font-semibold tracking-tight" aria-label="Braze">
        braze
      </span>
    ),
  },
  {
    label: "Profound",
    node: (
      <span className="text-xl font-semibold tracking-tight" aria-label="Profound">
        Profound
      </span>
    ),
  },
];

export function TrustBar() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-border px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8">
        <p className="text-sm text-muted">Certified partners across your stack</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="text-foreground/70 grayscale transition-all duration-300 hover:text-accent hover:grayscale-0"
            >
              {partner.node}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
