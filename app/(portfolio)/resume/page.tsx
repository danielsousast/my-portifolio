import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineSection } from "@/components/resume/TimelineSection";
import { getPortfolioData } from "@/lib/portfolio-data";

export default function ResumePage() {
  const { education, experience } = getPortfolioData();

  return (
    <>
      <SectionHeading title="Resume" />
      <div className="grid gap-8 md:grid-cols-2">
        <TimelineSection
          title="Education"
          entries={education}
          variant="education"
        />
        <TimelineSection
          title="Experience"
          entries={experience}
          variant="experience"
        />
      </div>
    </>
  );
}
