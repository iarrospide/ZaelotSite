import { SiCloudinary, SiSanity } from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export function TrustBar() {
  return (
    <section className="border-t border-border px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8">
        <p className="text-sm text-muted">Certified partners across your stack</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-foreground/70">
          <SiCloudinary size={28} aria-label="Cloudinary" />
          <FaAws size={30} aria-label="AWS" />
          <SiSanity size={26} aria-label="Sanity" />
          <span className="text-xl font-semibold tracking-tight" aria-label="Braze">
            braze
          </span>
          <span className="text-xl font-semibold tracking-tight" aria-label="Profound">
            Profound
          </span>
        </div>
      </div>
    </section>
  );
}
