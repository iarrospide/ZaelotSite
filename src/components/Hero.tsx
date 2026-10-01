import { HeroCopy } from "./HeroCopy";
import { TeamCardStack } from "./TeamCardStack";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--accent) 55%, transparent) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          maskImage:
            "radial-gradient(60% 55% at 78% 18%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 55% at 78% 18%, black 0%, transparent 70%)",
          opacity: 0.5,
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 pb-16 pt-16 md:px-10 lg:min-h-[calc(100dvh-5.5rem)] lg:grid-cols-12 lg:gap-10 lg:pt-20">
        <div className="lg:col-span-7">
          <HeroCopy />
        </div>

        <div className="order-first flex justify-center lg:order-last lg:col-span-5">
          <TeamCardStack />
        </div>
      </div>
    </section>
  );
}
