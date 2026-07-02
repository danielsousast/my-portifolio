import type { ContactDetail } from "@/types/portfolio";

const jsonKeys: Record<ContactDetail["icon"], string> = {
  phone: "phone",
  location: "location",
  email: "email",
  birthday: "age",
};

interface JsonContactBlockProps {
  details: ContactDetail[];
}

export function JsonContactBlock({ details }: JsonContactBlockProps) {
  return (
    <div className="rounded-lg border border-ide-border bg-surface-muted p-3 font-mono text-xs leading-relaxed">
      <span className="text-gray-400">{"{"}</span>
      <div className="pl-3">
        {details.map((detail, index) => (
          <div key={detail.label}>
            <span className="text-accent">&quot;{jsonKeys[detail.icon]}&quot;</span>
            <span className="text-gray-500">: </span>
            <span className="text-gray-800">
              {detail.icon === "phone" || detail.icon === "email"
                ? detail.value
                : `"${detail.value}"`}
            </span>
            {index < details.length - 1 && (
              <span className="text-gray-400">,</span>
            )}
          </div>
        ))}
      </div>
      <span className="text-gray-400">{"}"}</span>
    </div>
  );
}
