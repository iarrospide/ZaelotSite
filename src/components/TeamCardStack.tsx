"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  CaretLeft,
  CaretRight,
  CloudArrowUp,
  Code,
  Layout,
} from "@phosphor-icons/react/dist/ssr";

const TEAM = [
  {
    role: "Principal Engineer",
    stack: "Systems · Platform · AI",
    Icon: Code,
  },
  {
    role: "Senior Frontend Engineer",
    stack: "React · TypeScript · Design systems",
    Icon: Layout,
  },
  {
    role: "DevOps Lead",
    stack: "AWS · Kubernetes · CI/CD",
    Icon: CloudArrowUp,
  },
];

const AUTOPLAY_MS = 4500;

export function TeamCardStack() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const prev = TEAM[(index - 1 + TEAM.length) % TEAM.length];
  const active = TEAM[index];
  const next = TEAM[(index + 1) % TEAM.length];
  const ActiveIcon = active.Icon;

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TEAM.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduce, paused]);

  const stackRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || !stackRef.current) return;
    const rect = stackRef.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function resetTilt() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className="flex flex-col items-center gap-7">
      <div
        ref={stackRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => {
          setPaused(false);
          resetTilt();
        }}
        className="relative aspect-square w-full max-w-[400px]"
        style={{ perspective: 1200 }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-[-20%] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--accent) 45%, transparent) 0%, transparent 65%)",
          }}
        />

        <motion.div
          style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-full w-full"
        >
          <div className="absolute left-0 top-6 h-[78%] w-[62%] rotate-[-9deg] rounded-2xl border border-white/10 bg-gradient-to-br from-accent-from to-accent-to opacity-55 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.7)]" />
          <div className="absolute right-0 top-10 h-[78%] w-[62%] rotate-[8deg] rounded-2xl border border-white/10 bg-gradient-to-bl from-accent-to to-accent-from opacity-70 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.7)]" />

          <div className="absolute inset-x-[13%] top-0 flex h-[88%] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-accent-to to-accent-from shadow-[0_28px_70px_-18px_rgba(0,0,0,0.75)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.role}
                initial={reduce ? false : { opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.85, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center gap-2"
              >
                <ActiveIcon
                  size={56}
                  weight="duotone"
                  className="text-accent-foreground"
                  aria-hidden="true"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIndex((index - 1 + TEAM.length) % TEAM.length)}
          aria-label={`Previous: ${prev.role}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-all hover:border-accent/60 hover:text-accent active:scale-90"
        >
          <CaretLeft size={14} weight="bold" aria-hidden="true" />
        </button>

        <div className="w-44 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.role}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm font-medium text-accent">{active.role}</p>
              <p className="text-xs text-muted">{active.stack}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => setIndex((index + 1) % TEAM.length)}
          aria-label={`Next: ${next.role}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-all hover:border-accent/60 hover:text-accent active:scale-90"
        >
          <CaretRight size={14} weight="bold" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
