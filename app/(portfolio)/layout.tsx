import { PortfolioLayout } from "@/components/layout/PortfolioLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PortfolioLayout>{children}</PortfolioLayout>;
}
