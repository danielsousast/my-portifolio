import type { SkillLevel, TechnicalSkill } from "@/types/portfolio";

const levelValues: Record<SkillLevel, number> = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

function toPkgSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "") + ".pkg";
}

interface SkillCardProps {
  skill: TechnicalSkill;
  levelLabel: string;
}

export function SkillCard({ skill, levelLabel }: SkillCardProps) {
  const filledSegments = levelValues[skill.level];
  const slug = toPkgSlug(skill.name);

  return (
    <div className="overflow-hidden rounded-lg border border-ide-border bg-white">
      <div className="border-b border-ide-border bg-surface-muted px-3 py-1.5">
        <span className="font-mono text-[10px] text-gray-600">{slug}</span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ide-border bg-gray-50">
            <img
              src={`https://cdn.simpleicons.org/${skill.icon}`}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm font-bold text-gray-900">
              {skill.name}
            </h4>
            <p className="mt-0.5 font-mono text-[10px] text-gray-500">
              {levelLabel}
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-1" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <span
              key={index}
              className={`h-1 flex-1 rounded-full ${
                index < filledSegments ? "bg-accent" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
