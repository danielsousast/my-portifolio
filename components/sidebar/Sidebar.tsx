import { Download } from "@/lib/icons";
import type { Profile } from "@/types/portfolio";
import { ContactItem } from "./ContactItem";
import { GradientButton } from "../ui/GradientButton";
import { ProfileHeader } from "./ProfileHeader";

interface SidebarProps {
  profile: Profile;
}

export function Sidebar({ profile }: SidebarProps) {
  return (
    <aside className="w-full shrink-0 rounded-3xl bg-white p-6 shadow-lg md:w-72 lg:w-80">
      <ProfileHeader profile={profile} />

      <div className="mt-6 space-y-4 rounded-2xl bg-[#F3F6F6] p-4">
        {profile.contactDetails.map((detail) => (
          <ContactItem key={detail.label} detail={detail} />
        ))}
      </div>

      <div className="mt-6">
        <GradientButton href={profile.cvUrl}>
          <Download className="h-4 w-4" />
          Download CV
        </GradientButton>
      </div>
    </aside>
  );
}
