import Image from "next/image";
import { Product } from "@/lib/api";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="bg-white/95 rounded-lg shadow-xl overflow-hidden border border-indigo-300/20">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2 bg-white p-8 flex items-center justify-center">
          <div className="relative h-80 w-full max-w-md">
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="p-4"
            />
          </div>
        </div>
        <div className="p-8 md:w-1/2 bg-indigo-900 text-white">
          <div className="uppercase tracking-wide text-sm text-indigo-300 font-semibold mb-2">
            {product.category}
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            {product.title}
          </h1>

          <div className="flex items-center mb-6 bg-indigo-800/50 p-3 rounded-lg">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-white font-medium">
                {product.rating.rate}
              </span>
            </div>
            <span className="text-indigo-200 ml-2">
              ({product.rating.count} reviews)
            </span>
          </div>

          <div className="text-4xl font-bold text-indigo-200 mb-6">
            ${product.price.toFixed(2)}
          </div>

          <div className="bg-indigo-800/50 p-4 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-indigo-200 mb-2">
              Description:
            </h3>
            <p className="text-indigo-100">{product.description}</p>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-indigo-500 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-400 transition-colors">
              Add to Cart
            </button>
            <button className="bg-indigo-800 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors border border-indigo-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
