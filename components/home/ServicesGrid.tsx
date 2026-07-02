"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types/portfolio";
import { useLocale } from "@/providers/LocaleProvider";
import { ServiceCard } from "./ServiceCard";

interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const { t } = useLocale();

  return (
    <section className="mt-12">
      <SectionHeading title={t.whatIDo} />
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
