"use client";

import { TerminalPrompt } from "@/components/ui/TerminalPrompt";
import { useLocale } from "@/providers/LocaleProvider";

interface AboutSectionProps {
  paragraphs: string[];
}

export function AboutSection({ paragraphs }: AboutSectionProps) {
  const { t } = useLocale();

  return (
    <section>
      <TerminalPrompt command="cat ./about.md" />
      <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
        {t.aboutMe}.
      </h2>
      <div className="rounded-lg border border-ide-border bg-surface-muted p-4 font-mono text-sm leading-relaxed">
        <p className="text-ide-code-comment">/** bio.ts</p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="pl-2 text-gray-700">
            <span className="text-ide-code-comment"> * </span>
            {paragraph}
          </p>
        ))}
        <p className="text-ide-code-comment"> */</p>
      </div>
    </section>
  );
}
