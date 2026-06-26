"use client";

import { useState, type FormEvent } from "react";
import { GradientButton } from "@/components/ui/GradientButton";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-8 text-center text-sm text-gray-600">
        Thank you for your message! I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name *
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
          Email *
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
          Message *
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
        Send Message
      </GradientButton>
    </form>
  );
}
