"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/portfolio";

const tabLabels: Record<string, string> = {
  "/": "~/home.tsx",
  "/resume": "resume.pdf",
  "/works": "works/",
  "/contact": "contact.ts",
};

interface IdeTabBarProps {
  items: NavItem[];
}

export function IdeTabBar({ items }: IdeTabBarProps) {
  const pathname = usePathname();

  return (
    <nav className="min-w-0 flex-1 overflow-x-auto">
      <ul className="flex items-end">
        {items.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const tabLabel = tabLabels[item.href] ?? item.label;

          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className={cn(
                  "block border-r border-ide-border px-4 py-2 font-mono text-xs transition-colors",
                  isActive
                    ? "border-t-2 border-t-accent bg-ide-tab-active text-gray-900"
                    : "border-t-2 border-t-transparent bg-ide-tab-inactive text-gray-500 hover:bg-gray-100 hover:text-gray-700",
                )}
              >
                {tabLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
