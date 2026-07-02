"use client";

import { BackgroundPattern } from "./BackgroundPattern";
import { Navbar } from "../navigation/Navbar";
import { Sidebar } from "../sidebar/Sidebar";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useLocale } from "@/providers/LocaleProvider";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const { data } = useLocale();
  const { profile, navigation } = data;

  return (
    <>
      <BackgroundPattern />
      <div className="mx-auto min-h-screen max-w-6xl p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-[18rem_1fr] lg:grid-cols-[20rem_1fr]">
          <div className="hidden md:block" aria-hidden="true" />
          <div className="flex items-center justify-end gap-3 pt-4 md:pt-8">
            <LanguageSwitcher />
            <Navbar items={navigation} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[18rem_1fr] lg:grid-cols-[20rem_1fr]">
          <Sidebar profile={profile} />
          <main className="rounded-3xl bg-white p-6 shadow-lg md:p-8 lg:p-10">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
