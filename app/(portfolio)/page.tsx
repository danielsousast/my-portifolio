"use client";

import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { useLocale } from "@/providers/LocaleProvider";

export default function HomePage() {
  const { data } = useLocale();
  const { aboutMe, services } = data;

  return (
    <>
      <AboutSection paragraphs={aboutMe} />
      <ServicesGrid services={services} />
    </>
  );
}
