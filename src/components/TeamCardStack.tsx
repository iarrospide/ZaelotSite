"use client";

import { useState } from "react";
import { CaretLeft, CaretRight, UserCircle } from "@phosphor-icons/react/dist/ssr";

const TEAM = [
  { role: "Principal Engineer", stack: "Systems · Platform · AI" },
  { role: "Senior Frontend Engineer", stack: "React · TypeScript · Design systems" },
  { role: "DevOps Lead", stack: "AWS · Kubernetes · CI/CD" },
];

export function TeamCardStack() {
  const [index, setIndex] = useState(0);
  const prev = TEAM[(index - 1 + TEAM.length) % TEAM.length];
  const active = TEAM[index];
  const next = TEAM[(index + 1) % TEAM.length];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative aspect-square w-full max-w-[380px]">
        <div className="absolute left-0 top-6 h-[78%] w-[62%] rotate-[-6deg] rounded-2xl bg-gradient-to-br from-accent-from to-accent-to opacity-60" />
        <div className="absolute right-0 top-10 h-[78%] w-[62%] rotate-[6deg] rounded-2xl bg-gradient-to-bl from-accent-to to-accent-from opacity-70" />
        <div className="absolute inset-x-[14%] top-0 flex h-[88%] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-accent-to to-accent-from shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
          <UserCircle
            size={72}
            weight="light"
            className="text-accent-foreground/70"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIndex((index - 1 + TEAM.length) % TEAM.length)}
          aria-label={`Previous: ${prev.role}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-accent/60 hover:text-accent"
        >
          <CaretLeft size={14} weight="bold" aria-hidden="true" />
        </button>

        <div className="text-center">
          <p className="text-sm font-medium text-accent">{active.role}</p>
          <p className="text-xs text-muted">{active.stack}</p>
        </div>

        <button
          type="button"
          onClick={() => setIndex((index + 1) % TEAM.length)}
          aria-label={`Next: ${next.role}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-accent/60 hover:text-accent"
        >
          <CaretRight size={14} weight="bold" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
