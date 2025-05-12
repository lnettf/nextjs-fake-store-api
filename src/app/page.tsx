"use client";

import { useState, useEffect } from "react";
import { getProducts, getCategories, Product } from "@/lib/api";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import SearchInput from "@/components/SearchInput";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercasedQuery) ||
        product.description.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredProducts(filtered);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-700 to-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        <SearchInput onSearch={handleSearch} />

        {categories.length > 0 && <CategoryFilter categories={categories} />}

        {isLoading ? (
          <LoadingSpinner />
        ) : filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-300 text-xl">No products found</p>
          </div>
        )}
      </div>
    </main>
  );
}
