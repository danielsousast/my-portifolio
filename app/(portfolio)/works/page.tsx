import { PortfolioGrid } from "@/components/works/PortfolioGrid";
import { getPortfolioData } from "@/lib/portfolio-data";

export default function WorksPage() {
  const { projectCategories, projects } = getPortfolioData();

  return (
    <PortfolioGrid categories={projectCategories} projects={projects} />
  );
}
