"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={cn(
            "rounded-md border px-3 py-1 font-mono text-xs transition-colors",
            activeCategory === category
              ? "border-accent bg-teal-50 text-accent"
              : "border-ide-border bg-white text-gray-500 hover:border-gray-300 hover:text-gray-800",
          )}
        >
          {category.toLowerCase()}/
        </button>
      ))}
    </div>
  );
}
