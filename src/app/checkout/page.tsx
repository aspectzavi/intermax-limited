"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { whatsappLink } from "@/data/config";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", location: "", notes: "" });
  const [placed, setPlaced] = useState(false);

  if (items.length === 0 && !placed) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-[#0a1a33]">Nothing to Check Out</h1>
        <p className="mt-3 text-sm text-slate-600">Your cart is empty.</p>
        <Link href="/shop" className="mt-6 inline-block rounded-full bg-[#2f8fff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c78e6]">
          Go to Shop
        </Link>
      </section>
    );
  }

  const orderSummary = items
    .map((i) => `${i.product.name} x${i.quantity} = KES ${(i.product.price * i.quantity).toLocaleString()}`)
    .join("\n");
  const message = `Hello Intermax Limited, I'd like to place an order.\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\n\nOrder:\n${orderSummary}\n\nTotal: KES ${totalPrice.toLocaleString()}\nNotes: ${form.notes}`;

  if (placed) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-emerald-600">Order Ready to Send</h1>
        <p className="mt-3 text-sm text-slate-600">
          Confirm your order details on WhatsApp and our team will process it. M-Pesa
          payment can be arranged directly with our team once your order is confirmed.
        </p>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
        >
          Confirm Order via WhatsApp
        </a>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-[#0a1a33]">Checkout</h1>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold text-[#0a1a33]">Order Summary</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {items.map(({ product, quantity }) => (
              <div key={product.slug} className="flex justify-between px-4 py-3 text-sm">
                <span>{product.name} × {quantity}</span>
                <span className="font-semibold">KES {(product.price * quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between px-4 py-3 text-sm font-bold">
              <span>Total</span>
              <span>KES {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPlaced(true);
            clearCart();
          }}
          className="space-y-4"
        >
          <h2 className="text-sm font-semibold text-[#0a1a33]">Delivery Details</h2>
          <input
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
          />
          <input
            required
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
          />
          <input
            required
            placeholder="Delivery location"
            value={form.location}
            onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
          />
          <textarea
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
            rows={3}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#2f8fff] focus:outline-none"
          />
          <p className="text-xs text-slate-500">
            Payment via M-Pesa can be arranged once your order is confirmed on WhatsApp.
          </p>
          <button
            type="submit"
            className="w-full rounded-full bg-[#2f8fff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c78e6]"
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}
