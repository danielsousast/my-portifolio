"use client";

import { TerminalPrompt } from "@/components/ui/TerminalPrompt";
import { TimelineSection } from "@/components/resume/TimelineSection";
import { useLocale } from "@/providers/LocaleProvider";

export default function ResumePage() {
  const { data, t } = useLocale();
  const { education, experience } = data;

  return (
    <>
      <TerminalPrompt command="cat resume.pdf" />
      <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
        {t.resume}
      </h2>
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
