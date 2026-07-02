import type { SkillLevel, TechnicalSkill } from "@/types/portfolio";

const levelValues: Record<SkillLevel, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

interface SkillCardProps {
  skill: TechnicalSkill;
  levelLabel: string;
}

export function SkillCard({ skill, levelLabel }: SkillCardProps) {
  const filledSegments = levelValues[skill.level];

  return (
    <div className="rounded-2xl bg-surface-muted p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
          <img
            src={`https://cdn.simpleicons.org/${skill.icon}`}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-bold text-gray-900">{skill.name}</h4>
          <p className="mt-0.5 text-xs text-gray-500">{levelLabel}</p>
        </div>
      </div>
      <div className="mt-3 flex gap-1.5" aria-hidden="true">
        {Array.from({ length: 4 }, (_, index) => (
          <span
            key={index}
            className={`h-1.5 flex-1 rounded-full ${
              index < filledSegments ? "bg-accent" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
