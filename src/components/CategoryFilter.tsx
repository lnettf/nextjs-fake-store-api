"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const category = pathname.includes("/category/")
      ? pathname.split("/category/")[1]
      : null;
    setActiveCategory(category);
  }, [pathname]);

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link
        href="/"
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${
            !activeCategory
              ? "bg-indigo-500 text-white"
              : "bg-indigo-900/50 text-white hover:bg-indigo-700"
          }`}
      >
        All
      </Link>

      {categories.map((category) => (
        <Link
          key={category}
          href={`/category/${category}`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              activeCategory === category
                ? "bg-indigo-500 text-white"
                : "bg-indigo-900/50 text-white hover:bg-indigo-700"
            }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      ))}
    </div>
  );
}
