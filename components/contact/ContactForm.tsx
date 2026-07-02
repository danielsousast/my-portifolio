"use client";

import { useState, type FormEvent } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { useLocale } from "@/providers/LocaleProvider";

export function ContactForm() {
  const { t, data } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const recipientEmail = data.profile.contactDetails.find(
    (detail) => detail.icon === "email",
  )?.value;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!recipientEmail) return;

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = t.form.mailtoSubject.replace("{name}", name);
    const body = `${t.form.name}: ${name}\n${t.form.email}: ${email}\n\n${message}`;

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-8 text-center font-mono text-sm text-gray-600">
        // {t.form.thankYou}
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5 rounded-lg border border-ide-border bg-surface-muted p-5"
    >
      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs font-medium text-gray-700"
        >
          {t.form.name} *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-ide-border bg-white px-3 py-2 font-mono text-sm text-gray-900 outline-none focus:border-accent"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs font-medium text-gray-700"
        >
          {t.form.email} *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-ide-border bg-white px-3 py-2 font-mono text-sm text-gray-900 outline-none focus:border-accent"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs font-medium text-gray-700"
        >
          {t.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full resize-none rounded-md border border-ide-border bg-white px-3 py-2 font-mono text-sm text-gray-900 outline-none focus:border-accent"
        />
      </div>
      <GradientButton type="submit" className="max-w-xs">
        {t.form.send}
      </GradientButton>
    </form>
  );
}
