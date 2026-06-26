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
    <div className="mb-8 flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={cn(
            "text-sm font-medium transition-colors",
            activeCategory === category
              ? "text-accent"
              : "text-gray-500 hover:text-gray-800",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
