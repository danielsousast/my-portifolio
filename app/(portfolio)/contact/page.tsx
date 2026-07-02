"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { useLocale } from "@/providers/LocaleProvider";

export default function ContactPage() {
  const { data, t } = useLocale();
  const { contact } = data;

  return (
    <>
      <SectionHeading title={t.contact} />
      <ContactInfoCards cards={contact.infoCards} />
      <p className="mt-8 text-sm text-gray-600 md:text-base">{contact.intro}</p>
      <ContactForm />
    </>
  );
}
