import { serviceIcons } from "@/lib/icons";
import type { Service } from "@/types/portfolio";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <div
      className="rounded-2xl p-6 transition-shadow hover:shadow-md"
      style={{ backgroundColor: service.bgColor }}
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
        style={{ color: service.iconColor }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-base font-bold text-gray-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>
    </div>
  );
}
