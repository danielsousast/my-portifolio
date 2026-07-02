"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineSection } from "@/components/resume/TimelineSection";
import { useLocale } from "@/providers/LocaleProvider";

export default function ResumePage() {
  const { data, t } = useLocale();
  const { education, experience } = data;

  return (
    <>
      <SectionHeading title={t.resume} />
      <div className="grid gap-8 md:grid-cols-2">
        <TimelineSection
          title={t.experience}
          entries={experience}
          variant="experience"
        />
        <TimelineSection
          title={t.education}
          entries={education}
          variant="education"
        />
      </div>
    </>
  );
}
