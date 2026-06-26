import type { TimelineEntry } from "@/types/portfolio";

interface TimelineCardProps {
  entry: TimelineEntry;
  variant: "education" | "experience";
}

export function TimelineCard({ entry, variant }: TimelineCardProps) {
  const bgColor = variant === "education" ? "#F1F5F9" : "#EFF6FF";

  return (
    <div
      className="rounded-2xl p-5"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-xs font-medium text-gray-400">{entry.period}</p>
      <h3 className="mt-1 text-sm font-bold text-gray-900">{entry.title}</h3>
      <p className="mt-1 text-xs text-gray-500">{entry.subtitle}</p>
    </div>
  );
}
