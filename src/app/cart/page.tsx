"use client";

import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-[#0a1a33]">Your Cart is Empty</h1>
        <p className="mt-3 text-sm text-slate-600">Browse our shop to add some products.</p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2f8fff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c78e6]"
        >
          Go to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-[#0a1a33]">Your Cart</h1>
      <div className="mt-8 divide-y divide-slate-200">
        {items.map(({ product, quantity }) => (
          <div key={product.slug} className="flex items-center justify-between gap-4 py-4">
            <div>
              <p className="text-sm font-semibold text-[#0a1a33]">{product.name}</p>
              <p className="text-xs text-slate-500">KES {product.price.toLocaleString()} each</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => updateQuantity(product.slug, Number(e.target.value))}
                className="w-16 rounded-lg border border-slate-300 px-2 py-1 text-sm"
              />
              <span className="w-24 text-right text-sm font-semibold text-[#0a1a33]">
                KES {(product.price * quantity).toLocaleString()}
              </span>
              <button
                onClick={() => removeItem(product.slug)}
                className="text-xs font-semibold text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
        <span className="text-sm font-semibold text-slate-600">Order Total</span>
        <span className="text-xl font-extrabold text-[#0a1a33]">
          KES {totalPrice.toLocaleString()}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href="/shop"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Continue Shopping
        </Link>
        <Link
          href="/checkout"
          className="rounded-full bg-[#2f8fff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c78e6]"
        >
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
}
