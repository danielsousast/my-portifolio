"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/types/portfolio";
import { useLocale } from "@/providers/LocaleProvider";
import { CategoryFilter } from "./CategoryFilter";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

interface PortfolioGridProps {
  categories: string[];
  projects: Project[];
}

export function PortfolioGrid({ categories, projects }: PortfolioGridProps) {
  const { t } = useLocale();
  const allCategory = categories[0];
  const [activeCategory, setActiveCategory] = useState(allCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setActiveCategory(allCategory);
  }, [allCategory]);

  const filteredProjects =
    activeCategory === allCategory
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase() === activeCategory.toLowerCase() ||
            p.category.toLowerCase().includes(activeCategory.toLowerCase()),
        );

  return (
    <>
      <SectionHeading title={t.portfolio} />
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
