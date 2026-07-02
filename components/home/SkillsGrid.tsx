"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
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
      <SectionHeading title={t.technicalSkills} />
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
