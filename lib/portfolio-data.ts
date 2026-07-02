import portfolioEn from "@/data/portfolio.en.json";
import portfolioPtBr from "@/data/portfolio.pt-BR.json";
import type { PortfolioData } from "@/types/portfolio";
import type { Locale } from "@/types/locale";

const portfolioByLocale: Record<Locale, PortfolioData> = {
  en: portfolioEn as PortfolioData,
  "pt-BR": portfolioPtBr as PortfolioData,
};

export function getPortfolioData(locale: Locale = "en"): PortfolioData {
  return portfolioByLocale[locale];
}
