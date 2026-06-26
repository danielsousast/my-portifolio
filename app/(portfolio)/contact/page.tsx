import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { getPortfolioData } from "@/lib/portfolio-data";

export default function ContactPage() {
  const { contact } = getPortfolioData();

  return (
    <>
      <SectionHeading title="Contact" />
      <ContactInfoCards cards={contact.infoCards} />
      <p className="mt-8 text-sm text-gray-600 md:text-base">{contact.intro}</p>
      <ContactForm />
    </>
  );
}
