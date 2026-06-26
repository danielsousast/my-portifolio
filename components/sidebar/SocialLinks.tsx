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
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-accent hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
