import { socialIcons } from "@/lib/icons";
import type { SocialLink } from "@/types/portfolio";

interface SocialLinksProps {
  socials: SocialLink[];
}

export function SocialLinks({ socials }: SocialLinksProps) {
  return (
    <div className="mt-4 flex gap-2">
      {socials.map((social) => {
        const Icon = socialIcons[social.platform];
        if (!Icon) return null;

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-ide-border bg-gray-50 text-gray-500 transition-colors hover:border-accent hover:bg-teal-50 hover:text-accent"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        );
      })}
    </div>
  );
}
