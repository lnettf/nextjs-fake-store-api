import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/api";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 flex flex-col h-full">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            className="p-4"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-semibold mb-2 text-black min-h-[3rem] line-clamp-2 hover:line-clamp-none">
            {product.title}
          </h2>
          <div className="flex justify-between items-center mt-auto">
            <p className="text-xl font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm text-gray-600">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
