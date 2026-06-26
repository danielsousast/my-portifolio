import { Briefcase, GraduationCap } from "@/lib/icons";
import type { TimelineEntry } from "@/types/portfolio";
import { TimelineCard } from "./TimelineCard";

interface TimelineSectionProps {
  title: string;
  entries: TimelineEntry[];
  variant: "education" | "experience";
}

export function TimelineSection({
  title,
  entries,
  variant,
}: TimelineSectionProps) {
  const Icon = variant === "education" ? GraduationCap : Briefcase;

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-accent" />
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {entries.map((entry) => (
          <TimelineCard key={entry.period + entry.title} entry={entry} variant={variant} />
        ))}
      </div>
    </div>
  );
}
