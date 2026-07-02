"use client";

import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SkillsGrid } from "@/components/home/SkillsGrid";
import { useLocale } from "@/providers/LocaleProvider";

export default function HomePage() {
  const { data } = useLocale();
  const { aboutMe, services, skills } = data;

  return (
    <>
      <AboutSection paragraphs={aboutMe} />
      <ServicesGrid services={services} />
      <SkillsGrid skills={skills} />
    </>
  );
}
