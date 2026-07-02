"use client";

import { PortfolioGrid } from "@/components/works/PortfolioGrid";
import { useLocale } from "@/providers/LocaleProvider";

export default function WorksPage() {
  const { data } = useLocale();
  const { projectCategories, projects } = data;

  return (
    <PortfolioGrid categories={projectCategories} projects={projects} />
  );
}
