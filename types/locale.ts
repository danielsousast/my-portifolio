export type Locale = "en" | "pt-BR";

export const locales: Locale[] = ["en", "pt-BR"];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português (BR)",
};
