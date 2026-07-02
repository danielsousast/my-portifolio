"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/portfolio";

interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="min-w-0 flex-1">
      <ul className="flex items-center justify-around gap-0 sm:justify-center sm:gap-1 md:gap-2">
        {items.map((item) => {
          const Icon = navIcons[item.icon];
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href} className="min-w-0 flex-1 sm:flex-none">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[9px] font-medium transition-colors sm:rounded-xl sm:px-2 sm:py-2 sm:text-[10px] md:gap-1 md:px-4 md:py-2.5 md:text-xs",
                  isActive
                    ? "gradient-accent text-white"
                    : "text-gray-500 hover:text-gray-800",
                )}
              >
                <Icon className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
