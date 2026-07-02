import { cn } from "@/lib/utils";
import type { ContactInfoCard } from "@/types/portfolio";

interface ContactInfoCardsProps {
  cards: ContactInfoCard[];
}

export function ContactInfoCards({ cards }: ContactInfoCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg border border-ide-border bg-surface-muted p-4 font-mono text-sm"
        >
          <p className="text-xs text-accent">
            &quot;{card.title.toLowerCase()}&quot;:
          </p>
          <ul className="mt-2 space-y-1 pl-2">
            {card.values.map((value) => (
              <li key={value} className="text-gray-700">
                {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
