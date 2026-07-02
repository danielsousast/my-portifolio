import Image from "next/image";
import type { Project } from "@/types/portfolio";

function toProjectSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-") + "/";
}

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const slug = toProjectSlug(project.title);

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group w-full cursor-pointer overflow-hidden rounded-lg border border-ide-border bg-white text-left transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-between border-b border-ide-border bg-surface-muted px-3 py-1.5">
        <span className="font-mono text-[10px] text-gray-600">{slug}</span>
        <span className="font-mono text-[10px] text-gray-400">
          {project.category.toLowerCase()}
        </span>
      </div>
      <div
        className="flex aspect-[4/3] items-center justify-center p-6"
        style={{ backgroundColor: project.bgColor }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={200}
          height={200}
          className="object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-sm font-bold text-gray-900">{project.title}</h3>
        <p className="mt-1 font-mono text-[10px] text-gray-400">
          {project.client}
        </p>
      </div>
    </button>
  );
}
