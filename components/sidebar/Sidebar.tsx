"use client";

import { Download } from "@/lib/icons";
import type { Profile } from "@/types/portfolio";
import { useLocale } from "@/providers/LocaleProvider";
import { GradientButton } from "../ui/GradientButton";
import { JsonContactBlock } from "./JsonContactBlock";
import { ProfileHeader } from "./ProfileHeader";

interface SidebarProps {
  profile: Profile;
}

export function Sidebar({ profile }: SidebarProps) {
  const { t } = useLocale();

  return (
    <aside className="w-full shrink-0 border-b border-ide-border bg-gray-50/50 p-5 md:w-72 md:border-r md:border-b-0 lg:w-80">
      <ProfileHeader profile={profile} />

      <div className="mt-6">
        <JsonContactBlock details={profile.contactDetails} />
      </div>

      <div className="mt-6">
        <GradientButton href={profile.cvUrl}>
          <Download className="h-4 w-4" />
          {t.downloadCv}
        </GradientButton>
      </div>
    </aside>
  );
}
