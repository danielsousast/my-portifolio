import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutSectionProps {
  paragraphs: string[];
}

export function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <section>
      <SectionHeading title="About Me" />
      <div className="space-y-4 text-sm leading-relaxed text-gray-600 md:text-base">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
