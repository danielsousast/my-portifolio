"use client";

import { useState, type FormEvent } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { useLocale } from "@/providers/LocaleProvider";

export function ContactForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-8 text-center text-sm text-gray-600">
        {t.form.thankYou}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          {t.form.name} *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          {t.form.email} *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none focus:border-accent"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-700"
        >
          {t.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full resize-none border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none focus:border-accent"
        />
      </div>
      <GradientButton type="submit" className="max-w-xs">
        {t.form.send}
      </GradientButton>
    </form>
  );
}
