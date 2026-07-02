"use client";

import { TerminalPrompt } from "@/components/ui/TerminalPrompt";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { useLocale } from "@/providers/LocaleProvider";

export default function ContactPage() {
  const { data, t } = useLocale();
  const { contact } = data;

  return (
    <>
      <TerminalPrompt command="node contact.ts" />
      <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
        {t.contact}
      </h2>
      <ContactInfoCards cards={contact.infoCards} />
      <p className="mt-6 font-mono text-sm text-gray-600">
        // {contact.intro}
      </p>
      <ContactForm />
    </>
  );
}
