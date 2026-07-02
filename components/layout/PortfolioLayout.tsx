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
      <div className="mx-auto min-h-screen max-w-6xl p-4 pt-[4.75rem] md:p-8 md:pt-8">
        <div className="fixed inset-x-0 top-0 z-50 md:static md:z-10">
          <div className="border-b border-gray-200/70 bg-background/95 px-4 py-3 backdrop-blur-sm md:border-b-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
            <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-[18rem_1fr] lg:grid-cols-[20rem_1fr]">
              <div className="hidden md:block" aria-hidden="true" />
              <div className="flex items-center justify-center md:justify-end md:pt-8">
                <div className="flex w-full min-w-0 items-center gap-1 rounded-2xl bg-white px-2 py-1.5 shadow-lg sm:gap-2 sm:rounded-full sm:px-3 sm:py-2 md:w-auto md:gap-3 md:px-4">
                  <LanguageSwitcher />
                  <div
                    className="h-6 w-px shrink-0 bg-gray-200 sm:h-8"
                    aria-hidden="true"
                  />
                  <Navbar items={navigation} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:mt-6 md:grid-cols-[18rem_1fr] lg:grid-cols-[20rem_1fr]">
          <Sidebar profile={profile} />
          <main className="rounded-3xl bg-white p-6 shadow-lg md:p-8 lg:p-10">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
