"use client";

import { IdeTabBar } from "./IdeTabBar";
import { IdeWindowChrome } from "./IdeWindowChrome";
import { StatusBar } from "./StatusBar";
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
    <div className="flex min-h-screen items-start justify-center p-3 sm:p-6 md:items-center">
      <div className="flex w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-ide-border bg-white shadow-2xl">
        <IdeWindowChrome />

        <div className="flex items-center justify-between border-b border-ide-border bg-ide-tab-inactive">
          <IdeTabBar items={navigation} />
          <div className="shrink-0 px-3 py-1.5">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex min-h-[calc(100vh-8rem)] flex-col md:min-h-[calc(100vh-10rem)] md:flex-row">
          <Sidebar profile={profile} />
          <main className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8">
            {children}
          </main>
        </div>

        <StatusBar />
      </div>
    </div>
  );
}
