import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export function GradientButton({
  children,
  href,
  onClick,
  className,
  type = "button",
}: GradientButtonProps) {
  const classes = cn(
    "inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90",
    className,
  );

  if (href) {
    return (
      <a href={href} download className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
