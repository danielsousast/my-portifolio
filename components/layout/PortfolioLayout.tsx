import { BackgroundPattern } from "./BackgroundPattern";
import { Navbar } from "../navigation/Navbar";
import { Sidebar } from "../sidebar/Sidebar";
import { getPortfolioData } from "@/lib/portfolio-data";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const { profile, navigation } = getPortfolioData();

  return (
    <>
      <BackgroundPattern />
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-6 p-4 md:grid-cols-[18rem_1fr] md:p-8 lg:grid-cols-[20rem_1fr]">
        <div className="hidden md:block" aria-hidden="true" />
        <div className="flex justify-end pt-4 md:pt-8">
          <Navbar items={navigation} />
        </div>
        <Sidebar profile={profile} />
        <main className="rounded-3xl bg-white p-6 shadow-lg md:p-8 lg:p-10">
          {children}
        </main>
      </div>
    </>
  );
}
