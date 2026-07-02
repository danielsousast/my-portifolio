"use client";

import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

export function LanguageSwitcher() {
  const { locale, setLocale, locales, localeLabels } = useLocale();

  return (
    <div
      className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5"
      role="group"
      aria-label="Language"
    >
      {locales.map((code: Locale) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "rounded-md px-2.5 py-1.5 text-[10px] font-semibold transition-colors md:px-3 md:py-2 md:text-xs",
            locale === code
              ? "gradient-accent text-white shadow-sm"
              : "text-gray-400 hover:text-gray-600",
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
