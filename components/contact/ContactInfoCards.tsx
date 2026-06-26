import { cn } from "@/lib/utils";
import type { ContactInfoCard } from "@/types/portfolio";

interface ContactInfoCardsProps {
  cards: ContactInfoCard[];
}

const themeStyles = {
  pink: "bg-surface-muted",
  blue: "bg-surface-blue",
};

export function ContactInfoCards({ cards }: ContactInfoCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.title}
          className={cn("rounded-2xl p-6", themeStyles[card.theme])}
        >
          <h3 className="text-sm font-bold text-gray-900">{card.title} :</h3>
          <ul className="mt-3 space-y-1">
            {card.values.map((value) => (
              <li key={value} className="text-sm text-gray-600">
                {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
