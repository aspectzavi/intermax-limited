"use client";

import { Product } from "@/data/products";
import { useCart } from "@/lib/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="flex h-40 items-center justify-center bg-slate-50 text-slate-300">
        <span className="text-xs uppercase tracking-wide">{product.category}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-sm font-semibold text-[#0a1a33]">{product.name}</h3>
        <p className="line-clamp-2 text-xs text-slate-500">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-base font-bold text-[#0a1a33]">
            KES {product.price.toLocaleString()}
          </span>
          <span
            className={`text-xs font-medium ${
              product.available ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {product.available ? "In stock" : "Out of stock"}
          </span>
        </div>
        <button
          onClick={() => addItem(product)}
          disabled={!product.available}
          className="mt-3 w-full rounded-full bg-[#0a1a33] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2f8fff] disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {product.available ? "Add to Cart" : "Enquire"}
        </button>
      </div>
    </div>
  );
}
