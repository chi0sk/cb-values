import { Item, FilterState } from "@/lib/types";
import ItemCard from "./ItemCard";

interface ItemGridProps {
  items: Item[];
  filters: FilterState;
}

export default function ItemGrid({ items, filters }: ItemGridProps) {
  const filteredItems = items.filter(item => {
    // Filter by category
    if (filters.category !== "all" && item.category !== filters.category) {
      return false;
    }

    // Filter by search
    if (
      filters.search &&
      !item.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Filter by type
    if (filters.types.length > 0 && !filters.types.includes(item.type)) {
      return false;
    }

    // Filter by status
    if (filters.statuses.length > 0 && !filters.statuses.includes(item.status)) {
      return false;
    }

    // Filter by value range
    if (filters.valueRange.from !== null || filters.valueRange.to !== null) {
      const numericValue = typeof item.baseValue === "number"
        ? item.baseValue
        : parseValueToNumber(item.baseValue.toString());

      if (filters.valueRange.from !== null && numericValue < filters.valueRange.from) {
        return false;
      }

      if (filters.valueRange.to !== null && numericValue > filters.valueRange.to) {
        return false;
      }
    }

    return true;
  });

  // Sort items
  const sortedItems = sortItems(filteredItems, filters.sortBy);

  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {sortedItems.map(item => (
          <ItemCard key={`${item.id}-${item.type}`} item={item} />
        ))}
      </div>

      {sortedItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No items found with the current filters.</p>
          <p className="text-sm mt-2">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
}

function parseValueToNumber(value: string): number {
  if (value === "???") return 0;

  // Handle values like "460k", "1.6M", etc.
  const multipliers: Record<string, number> = {
    "k": 1000,
    "K": 1000,
    "m": 1000000,
    "M": 1000000,
  };

  for (const [suffix, multiplier] of Object.entries(multipliers)) {
    if (value.endsWith(suffix)) {
      const numPart = parseFloat(value.replace(suffix, ""));
      return numPart * multiplier;
    }
  }

  return parseFloat(value) || 0;
}

function sortItems(items: Item[], sortBy: FilterState["sortBy"]): Item[] {
  const sorted = [...items];

  switch (sortBy) {
    case "Newest":
      // Assuming newer items have more recent lastUpdated
      // In practice you'd want a proper date comparison
      return sorted.sort((a, b) => {
        if (a.lastUpdated.includes("month") && b.lastUpdated.includes("year")) return -1;
        if (a.lastUpdated.includes("year") && b.lastUpdated.includes("month")) return 1;
        return 0;
      });

    case "Oldest":
      // Reverse of newest
      return sorted.sort((a, b) => {
        if (a.lastUpdated.includes("month") && b.lastUpdated.includes("year")) return 1;
        if (a.lastUpdated.includes("year") && b.lastUpdated.includes("month")) return -1;
        return 0;
      });

    case "Value Low to High":
      return sorted.sort((a, b) => {
        const aValue = typeof a.baseValue === "number"
          ? a.baseValue
          : parseValueToNumber(a.baseValue.toString());

        const bValue = typeof b.baseValue === "number"
          ? b.baseValue
          : parseValueToNumber(b.baseValue.toString());

        return aValue - bValue;
      });

    case "Value High to Low":
      return sorted.sort((a, b) => {
        const aValue = typeof a.baseValue === "number"
          ? a.baseValue
          : parseValueToNumber(a.baseValue.toString());

        const bValue = typeof b.baseValue === "number"
          ? b.baseValue
          : parseValueToNumber(b.baseValue.toString());

        return bValue - aValue;
      });

    case "By Category":
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
}
