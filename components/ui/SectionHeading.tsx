import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full gradient-accent-fade" />
    </div>
  );
}
