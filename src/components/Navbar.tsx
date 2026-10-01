"use client";

import { useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#services", label: "Services", caret: true },
  { href: "#insights", label: "Insights", caret: false },
  { href: "#talent", label: "Talent", caret: false },
  { href: "#company", label: "Company", caret: true },
];

const CTA_LABEL = "Book a call";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <a href="#top" aria-label="Zaelot home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] backdrop-blur md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm text-foreground/90 transition-colors hover:bg-white/10"
            >
              {link.label}
              {link.caret && <CaretDown size={12} weight="bold" aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-[0_0_0_0_rgba(242,183,5,0)] transition-all duration-300 hover:shadow-[0_6px_24px_-6px_var(--accent)] active:-translate-y-px active:scale-[0.98]"
          >
            {CTA_LABEL}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground md:hidden"
        >
          {open ? (
            <X size={16} weight="regular" aria-hidden="true" />
          ) : (
            <List size={16} weight="regular" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-[1400px] rounded-2xl border border-white/10 bg-surface px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 text-base text-foreground/90 transition-colors hover:text-foreground"
              >
                {link.label}
                {link.caret && <CaretDown size={13} weight="bold" aria-hidden="true" />}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
            >
              {CTA_LABEL}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
