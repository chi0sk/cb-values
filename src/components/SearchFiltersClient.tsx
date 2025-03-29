"use client";

import { useState } from "react";
import SearchFilters from "./SearchFilters";
import ItemGrid from "./ItemGrid";
import Pagination from "./Pagination";
import { FilterState, Item } from "@/lib/types";

interface SearchFiltersClientProps {
  defaultFilters: FilterState;
  items: Item[];
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function SearchFiltersClient({
  defaultFilters,
  items,
  currentPage,
  totalPages,
  baseUrl
}: SearchFiltersClientProps) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [page, setPage] = useState(currentPage);

  return (
    <>
      <SearchFilters filters={filters} setFilters={setFilters} />
      <ItemGrid items={items} filters={filters} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        baseUrl={baseUrl}
      />
    </>
  );
}
