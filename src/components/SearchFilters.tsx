import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { FilterState, ItemType, ItemStatus } from "@/lib/types";
import Image from "next/image";

interface SearchFiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export default function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const toggleType = (type: ItemType) => {
    if (filters.types.includes(type)) {
      setFilters({ ...filters, types: filters.types.filter(t => t !== type) });
    } else {
      setFilters({ ...filters, types: [...filters.types, type] });
    }
  };

  const toggleStatus = (status: ItemStatus) => {
    if (filters.statuses.includes(status)) {
      setFilters({ ...filters, statuses: filters.statuses.filter(s => s !== status) });
    } else {
      setFilters({ ...filters, statuses: [...filters.statuses, status] });
    }
  };

  const setSortBy = (sortBy: FilterState["sortBy"]) => {
    setFilters({ ...filters, sortBy });
  };

  const setValueRange = (from: number | null, to: number | null) => {
    setFilters({ ...filters, valueRange: { from, to } });
  };

  const resetFilters = () => {
    setFilters({
      ...filters,
      search: "",
      types: [],
      statuses: [],
      sortBy: "By Category",
      valueRange: { from: null, to: null },
    });
  };

  return (
    <div className="container mx-auto px-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search"
            value={filters.search}
            onChange={handleSearch}
            className="pl-10 bg-muted border-muted"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image
              src="https://ext.same-assets.com/3519986169/2675620144.svg"
              alt="Search"
              width={20}
              height={20}
            />
          </div>
        </div>
        <Button
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          className="bg-primary"
        >
          Filter
        </Button>
      </div>

      {isFilterExpanded && (
        <div className="bg-muted rounded-lg p-4 space-y-4 mb-4">
          <div>
            <h3 className="text-white font-medium mb-2">Type</h3>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="normal"
                  checked={filters.types.includes("normal")}
                  onCheckedChange={() => toggleType("normal")}
                />
                <label htmlFor="normal" className="text-sm text-muted-foreground">
                  Normal
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="statTrack"
                  checked={filters.types.includes("Stat Track")}
                  onCheckedChange={() => toggleType("Stat Track")}
                />
                <label htmlFor="statTrack" className="text-sm text-muted-foreground">
                  Stat Track
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">Status</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="stable"
                  checked={filters.statuses.includes("Stable")}
                  onCheckedChange={() => toggleStatus("Stable")}
                />
                <label htmlFor="stable" className="text-sm text-muted-foreground">
                  Stable
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fluctuating"
                  checked={filters.statuses.includes("Fluctuating")}
                  onCheckedChange={() => toggleStatus("Fluctuating")}
                />
                <label htmlFor="fluctuating" className="text-sm text-muted-foreground">
                  Fluctuating
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rising"
                  checked={filters.statuses.includes("Rising")}
                  onCheckedChange={() => toggleStatus("Rising")}
                />
                <label htmlFor="rising" className="text-sm text-muted-foreground">
                  Rising
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dropping"
                  checked={filters.statuses.includes("Dropping")}
                  onCheckedChange={() => toggleStatus("Dropping")}
                />
                <label htmlFor="dropping" className="text-sm text-muted-foreground">
                  Dropping
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">Sort By</h3>
            <div className="flex flex-wrap gap-3">
              <SortButton
                active={filters.sortBy === "By Category"}
                onClick={() => setSortBy("By Category")}
              >
                By Category
              </SortButton>
              <SortButton
                active={filters.sortBy === "Newest"}
                onClick={() => setSortBy("Newest")}
              >
                Newest
              </SortButton>
              <SortButton
                active={filters.sortBy === "Oldest"}
                onClick={() => setSortBy("Oldest")}
              >
                Oldest
              </SortButton>
              <SortButton
                active={filters.sortBy === "Value Low to High"}
                onClick={() => setSortBy("Value Low to High")}
              >
                Value Low to High
              </SortButton>
              <SortButton
                active={filters.sortBy === "Value High to Low"}
                onClick={() => setSortBy("Value High to Low")}
              >
                Value High to Low
              </SortButton>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-2">Value Range</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-muted-foreground block mb-1">From:</label>
                <Input
                  type="number"
                  value={filters.valueRange.from || ""}
                  onChange={(e) =>
                    setValueRange(
                      e.target.value ? Number(e.target.value) : null,
                      filters.valueRange.to
                    )
                  }
                  className="bg-muted-foreground/10 border-muted"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-1">To:</label>
                <Input
                  type="number"
                  value={filters.valueRange.to || ""}
                  onChange={(e) =>
                    setValueRange(
                      filters.valueRange.from,
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                  className="bg-muted-foreground/10 border-muted"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <Button
              variant="outline"
              onClick={resetFilters}
              className="border-muted-foreground/30 text-muted-foreground hover:text-white"
            >
              Reset
            </Button>
            <Button
              onClick={() => setIsFilterExpanded(false)}
              className="bg-primary"
            >
              Apply
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function SortButton({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
        active
          ? "bg-primary text-white"
          : "bg-muted-foreground/10 text-muted-foreground hover:bg-muted-foreground/20"
      }`}
    >
      {children}
    </button>
  );
}
