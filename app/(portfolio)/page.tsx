import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { getPortfolioData } from "@/lib/portfolio-data";

export default function HomePage() {
  const { aboutMe, services } = getPortfolioData();

  return (
    <>
      <AboutSection paragraphs={aboutMe} />
      <ServicesGrid services={services} />
    </>
  );
}
