"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getProductsByCategory, getCategories, Product } from "@/lib/api";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const decodedSlug = decodeURIComponent(slug);

  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [categoriesData, productsData] = await Promise.all([
          getCategories(),
          getProductsByCategory(decodedSlug),
        ]);

        setCategories(categoriesData);
        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [decodedSlug]);

  const categoryName =
    decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-700 to-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">{categoryName} Products</h1>

        {categories.length > 0 && <CategoryFilter categories={categories} />}

        {isLoading ? (
          <LoadingSpinner />
        ) : products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-300 text-xl">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
