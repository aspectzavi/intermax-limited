"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/lib/CartContext";
import { whatsappLink } from "@/data/config";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative h-40 bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-sm font-semibold text-[#0a1a33]">{product.name}</h3>
        <p className="line-clamp-2 text-xs text-slate-500">{product.description}</p>
        {product.addOn4G && (
          <p className="text-[11px] font-medium text-[#2f8fff]">{product.addOn4G}</p>
        )}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-base font-bold text-[#0a1a33]">
            {product.priceOnRequest ? "Contact for Price" : `KES ${product.price.toLocaleString()}`}
          </span>
          <span
            className={`text-xs font-medium ${
              product.available ? "text-emerald-600" : "text-red-500"
            }`}
          >
            {product.available ? "In stock" : "Out of stock"}
          </span>
        </div>
        {product.priceOnRequest ? (
          <a
            href={whatsappLink(`Hello Intermax Limited, I'd like pricing and availability for ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full rounded-full bg-[#0a1a33] px-4 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#2f8fff]"
          >
            Enquire on WhatsApp
          </a>
        ) : (
          <button
            onClick={() => addItem(product)}
            disabled={!product.available}
            className="mt-3 w-full rounded-full bg-[#0a1a33] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#2f8fff] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {product.available ? "Add to Cart" : "Enquire"}
          </button>
        )}
      </div>
    </div>
  );
}
