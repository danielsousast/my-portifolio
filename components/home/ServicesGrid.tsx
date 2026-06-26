import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/types/portfolio";
import { ServiceCard } from "./ServiceCard";

interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="mt-12">
      <SectionHeading title="What I do!" />
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
