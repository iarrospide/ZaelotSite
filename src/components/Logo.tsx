export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`text-xl font-black lowercase tracking-tight text-foreground ${className ?? ""}`}
    >
      zælot
    </span>
  );
}
