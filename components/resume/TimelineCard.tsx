import type { TimelineEntry } from "@/types/portfolio";

interface TimelineCardProps {
  entry: TimelineEntry;
  variant: "education" | "experience";
}

export function TimelineCard({ entry, variant }: TimelineCardProps) {
  return (
    <div className="rounded-lg border border-ide-border bg-white p-4 font-mono text-sm">
      <p className="text-[10px] text-accent">
        // {variant === "education" ? "degree" : "role"}
      </p>
      <p className="mt-1 text-xs text-gray-400">{entry.period}</p>
      <h3 className="mt-1 font-semibold text-gray-900">{entry.title}</h3>
      <p className="mt-1 text-xs text-gray-500">
        <span className="text-gray-400">@ </span>
        {entry.subtitle}
      </p>
    </div>
  );
}
