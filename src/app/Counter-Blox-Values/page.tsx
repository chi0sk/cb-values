import { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import SearchFiltersClient from "@/components/SearchFiltersClient";
import Footer from "@/components/Footer";
import { items } from "@/lib/mock-data";
import { FilterState } from "@/lib/types";

export const metadata: Metadata = {
  title: "Counter Blox Value List 2025 | Official Values",
  description: "Explore the Official Counter Blox Value List 2025 with up-to-date values for all weapons, skins, knives, and more.",
};

export default function CounterBloxValuesPage() {
  const defaultFilters: FilterState = {
    search: "",
    types: [],
    statuses: [],
    sortBy: "By Category",
    valueRange: { from: null, to: null },
    category: "all"
  };

  // For pagination example: 15 items per page
  const itemsPerPage = 15;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <CategoryTabs activeCategory={defaultFilters.category} />
        <SearchFiltersClient
          defaultFilters={defaultFilters}
          items={items}
          currentPage={1}
          totalPages={totalPages}
          baseUrl="/Counter-Blox-Values"
        />
      </main>
      <Footer />
    </div>
  );
}
