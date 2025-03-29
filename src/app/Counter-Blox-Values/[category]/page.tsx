import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import SearchFiltersClient from "@/components/SearchFiltersClient";
import Footer from "@/components/Footer";
import { items, categories } from "@/lib/mock-data";
import { FilterState, ItemCategory } from "@/lib/types";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = params.category;

  return {
    title: `${category} Values | Counter Blox Value List`,
    description: `Explore the latest ${category} values in Counter Blox. Find up-to-date prices for all ${category.toLowerCase()} in Counter Blox.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category as ItemCategory;

  // Check if the category is valid
  if (!categories.includes(category)) {
    notFound();
  }

  const defaultFilters: FilterState = {
    search: "",
    types: [],
    statuses: [],
    sortBy: "By Category",
    valueRange: { from: null, to: null },
    category: category
  };

  // For pagination: 15 items per page
  const itemsPerPage = 15;
  const totalPages = Math.ceil(
    items.filter(item => item.category === category).length / itemsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <CategoryTabs activeCategory={category} />
        <SearchFiltersClient
          defaultFilters={defaultFilters}
          items={items}
          currentPage={1}
          totalPages={totalPages}
          baseUrl={`/Counter-Blox-Values/${category}`}
        />
      </main>
      <Footer />
    </div>
  );
}
