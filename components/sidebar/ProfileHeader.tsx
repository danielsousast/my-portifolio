"use client";

import Image from "next/image";
import type { Profile } from "@/types/portfolio";
import { useLocale } from "@/providers/LocaleProvider";
import { SocialLinks } from "./SocialLinks";

interface ProfileHeaderProps {
  profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const { t } = useLocale();

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="overflow-hidden rounded-2xl bg-teal-50 p-1">
          <Image
            src={profile.image}
            alt={profile.name}
            width={160}
            height={160}
            className="rounded-xl object-cover"
            priority
          />
        </div>
        <span className="absolute -bottom-1 right-0 flex items-center gap-1.5 rounded-full border border-ide-border bg-white px-2 py-0.5 font-mono text-[10px] text-gray-600 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse-available" />
          {t.available}
        </span>
      </div>
      <h1 className="text-xl font-bold text-gray-900">{profile.name}</h1>
      <p className="mt-1 font-mono text-xs font-semibold tracking-widest text-accent uppercase">
        {profile.title}
      </p>
      <SocialLinks socials={profile.socials} />
    </div>
  );
}
