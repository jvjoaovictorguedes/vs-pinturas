import Link from "next/link";
import clsx from "clsx";

type Variant = "red" | "dark" | "light" | "ghost-light";

const variants: Record<Variant, string> = {
  red: "bg-brand-red text-white border-brand-red hover:bg-transparent hover:text-brand-red",
  dark: "bg-ink text-paper border-ink hover:bg-transparent hover:text-ink",
  light:
    "bg-paper text-ink border-paper hover:bg-transparent hover:text-paper",
  "ghost-light":
    "bg-transparent text-white border-white/50 hover:bg-white hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "red",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-3 border-2 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200 hover:-translate-y-px",
        variants[variant],
        className,
      )}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
