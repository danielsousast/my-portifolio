import { contactIcons } from "@/lib/icons";
import type { ContactDetail } from "@/types/portfolio";

interface ContactItemProps {
  detail: ContactDetail;
}

export function ContactItem({ detail }: ContactItemProps) {
  const Icon = contactIcons[detail.icon];

  const iconColors: Record<string, string> = {
    phone: "text-accent",
    location: "text-emerald-600",
    email: "text-accent",
    birthday: "text-slate-600",
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ${iconColors[detail.icon]}`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-400">{detail.label}</p>
        <p className="truncate text-sm font-medium text-gray-800">
          {detail.value}
        </p>
      </div>
    </div>
  );
}
