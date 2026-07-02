"use client";

import { TerminalPrompt } from "@/components/ui/TerminalPrompt";
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
      <TerminalPrompt command="ls ./capabilities" />
      <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
        {t.whatIDo}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
