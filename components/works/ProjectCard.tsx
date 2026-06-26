import Image from "next/image";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-shadow hover:shadow-lg"
      style={{ backgroundColor: project.bgColor }}
    >
      <div className="flex aspect-[4/3] items-center justify-center p-6">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={200}
          height={200}
          className="object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <div className="px-5 pb-5">
        <p className="text-xs text-gray-400">{project.category}</p>
        <h3 className="mt-1 text-base font-bold text-gray-900">
          {project.title}
        </h3>
      </div>
    </button>
  );
}
