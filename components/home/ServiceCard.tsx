import { serviceIcons } from "@/lib/icons";
import type { Service } from "@/types/portfolio";

function toFnSlug(title: string): string {
  return (
    title
      .toLowerCase()
      .replace(/\s+development$/i, "-dev")
      .replace(/\s+/g, "-") + ".fn"
  );
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];
  const slug = toFnSlug(service.title);

  return (
    <div className="overflow-hidden rounded-lg border border-ide-border bg-white transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between border-b border-ide-border bg-surface-muted px-4 py-2">
        <span className="font-mono text-xs text-gray-700">{slug}</span>
        <span className="rounded bg-teal-50 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-accent uppercase">
          function
        </span>
      </div>
      <div className="p-5">
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-ide-border bg-teal-50 text-accent"
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {service.description}
        </p>
      </div>
    </div>
  );
}
