"use client";

import { TerminalPrompt } from "@/components/ui/TerminalPrompt";
import type { TechnicalSkill } from "@/types/portfolio";
import { useLocale } from "@/providers/LocaleProvider";
import { SkillCard } from "./SkillCard";

interface SkillsGridProps {
  skills: TechnicalSkill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const { t } = useLocale();

  return (
    <section className="mt-12">
      <TerminalPrompt command="ls ./skills" />
      <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
        {t.technicalSkills}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            levelLabel={t.skillLevels[skill.level]}
          />
        ))}
      </div>
    </section>
  );
}
