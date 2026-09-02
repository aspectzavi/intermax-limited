"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/lib/CartContext";
import { whatsappLink } from "@/data/config";

export default function AddToCartSection({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (product.priceOnRequest) {
    return (
      <div className="mt-6">
        <a
          href={whatsappLink(
            `Hello Intermax Limited, I'd like pricing and availability for ${product.name}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
        >
          Enquire on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="mt-6 flex items-center gap-4">
      <input
        type="number"
        min={1}
        value={qty}
        onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
        className="w-20 rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      <button
        disabled={!product.available}
        onClick={() => {
          addItem(product, qty);
          setAdded(true);
          setTimeout(() => setAdded(false), 2000);
        }}
        className="rounded-full bg-[#0a1a33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2f8fff] disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {added ? "Added ✓" : product.available ? "Add to Cart" : "Enquire"}
      </button>
    </div>
  );
}
