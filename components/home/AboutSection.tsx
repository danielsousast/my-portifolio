"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/providers/LocaleProvider";

interface AboutSectionProps {
  paragraphs: string[];
}

export function AboutSection({ paragraphs }: AboutSectionProps) {
  const { t } = useLocale();

  return (
    <section>
      <SectionHeading title={t.aboutMe} />
      <div className="space-y-4 text-sm leading-relaxed text-gray-600 md:text-base">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
