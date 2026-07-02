"use client";

import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

export function LanguageSwitcher() {
  const { locale, setLocale, locales, localeLabels } = useLocale();

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 rounded-md border border-ide-border bg-white p-0.5"
      role="group"
      aria-label="Language"
    >
      {locales.map((code: Locale) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "rounded px-2.5 py-1 font-mono text-[10px] font-semibold transition-colors sm:text-xs",
            locale === code
              ? "bg-accent text-white"
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
