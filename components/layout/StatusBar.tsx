"use client";

import { Braces, Check, GitBranch } from "lucide-react";
import { usePathname } from "next/navigation";

const fileTypes: Record<string, string> = {
  "/": "TypeScript JSX",
  "/resume": "PDF",
  "/works": "TypeScript",
  "/contact": "TypeScript",
};

export function StatusBar() {
  const pathname = usePathname();
  const fileType = fileTypes[pathname] ?? "TypeScript";

  return (
    <div className="flex items-center justify-between bg-ide-statusbar px-3 py-1 font-mono text-[10px] text-white/90 sm:text-xs">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch className="h-3 w-3 shrink-0" />
          <span className="truncate">main</span>
        </span>
        <span className="hidden truncate text-white/70 sm:inline">
          danielsousast
        </span>
      </div>
      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <span className="hidden sm:inline">Ln 54, Col 30</span>
        <span className="hidden md:inline">Spaces: 2</span>
        <span className="hidden lg:inline">UTF-8</span>
        <span className="hidden lg:inline">LF</span>
        <span className="flex items-center gap-1">
          <Braces className="h-3 w-3" />
          {fileType}
        </span>
        <span className="flex items-center gap-0.5">
          <Check className="h-3 w-3" />
          Prettier
        </span>
      </div>
    </div>
  );
}
