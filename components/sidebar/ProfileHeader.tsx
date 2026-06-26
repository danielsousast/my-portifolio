import Image from "next/image";
import type { Profile } from "@/types/portfolio";
import { SocialLinks } from "./SocialLinks";

interface ProfileHeaderProps {
  profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative -mt-16 mb-4 overflow-hidden rounded-2xl bg-surface-slate p-1">
        <Image
          src={profile.image}
          alt={profile.name}
          width={160}
          height={160}
          className="rounded-xl object-cover"
          priority
        />
      </div>
      <h1 className="text-xl font-bold text-gray-900">{profile.name}</h1>
      <p className="mt-1 text-sm text-gray-500">{profile.title}</p>
      <SocialLinks socials={profile.socials} />
    </div>
  );
}
