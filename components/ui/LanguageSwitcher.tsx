"use client";

import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

export function LanguageSwitcher() {
  const { locale, setLocale, locales, localeLabels } = useLocale();

  return (
    <div
      className="flex items-center gap-1 rounded-xl bg-white p-1 shadow-lg"
      role="group"
      aria-label="Language"
    >
      {locales.map((code: Locale) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "rounded-lg px-2.5 py-1.5 text-[10px] font-semibold transition-colors md:px-3 md:py-2 md:text-xs",
            locale === code
              ? "gradient-accent text-white"
              : "text-gray-500 hover:text-gray-800",
          )}
          aria-pressed={locale === code}
        >
          {code === "en" ? "EN" : "PT"}
          <span className="sr-only">{localeLabels[code]}</span>
        </button>
      ))}
    </div>
  );
}
