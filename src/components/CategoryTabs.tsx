import Link from "next/link";
import { categories } from "@/lib/mock-data";
import { ItemCategory } from "@/lib/types";

interface CategoryTabsProps {
  activeCategory: ItemCategory;
}

export default function CategoryTabs({ activeCategory }: CategoryTabsProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 min-w-max px-4 py-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={category === "all" ? "/Counter-Blox-Values" : `/Counter-Blox-Values/${category}`}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
