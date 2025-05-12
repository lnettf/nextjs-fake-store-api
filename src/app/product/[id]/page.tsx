"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getProduct, Product } from "@/lib/api";
import Navbar from "@/components/Navbar";
import ProductDetails from "@/components/ProductDetails";
import LoadingSpinner from "@/components/LoadingSpinner";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const numericId = parseInt(id, 10);

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (isNaN(numericId)) {
        router.push("/not-found");
        return;
      }

      try {
        setIsLoading(true);
        const productData = await getProduct(numericId);

        if (!productData) {
          router.push("/not-found");
          return;
        }

        setProduct(productData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
        router.push("/not-found");
      }
    };

    fetchProduct();
  }, [numericId, router]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-800 to-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-indigo-300 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          {product && (
            <>
              <Link
                href={`/category/${product.category}`}
                className="hover:text-white transition-colors"
              >
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{product?.title}</span>
            </>
          )}
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : product ? (
          <ProductDetails product={product} />
        ) : null}
      </div>
    </main>
  );
}
