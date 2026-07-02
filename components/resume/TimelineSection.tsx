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
  const fileName =
    variant === "education" ? "education.json" : "experience.json";

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-accent" />
        <h3 className="font-mono text-sm font-semibold text-gray-900">
          {fileName}
        </h3>
        <span className="font-mono text-xs text-gray-400">— {title}</span>
      </div>
      <div className="space-y-3">
        {entries.map((entry) => (
          <TimelineCard
            key={entry.period + entry.title}
            entry={entry}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
