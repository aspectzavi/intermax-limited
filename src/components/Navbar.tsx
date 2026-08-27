"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/config";
import { useCart } from "@/lib/CartContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tracking-systems", label: "Tracking Systems" },
  { href: "/fleet-tracking", label: "Fleet Solutions" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a1a33]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">
            {siteConfig.companyName}
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition hover:text-[#2f8fff]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/cart"
            className="relative text-sm font-medium text-slate-200 hover:text-[#2f8fff]"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#2f8fff] text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            href="/tracking-systems"
            className="rounded-full bg-[#2f8fff] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#2f8fff]/30 transition hover:bg-[#1c78e6]"
          >
            Get a Tracker
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a1a33] px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              Cart {totalItems > 0 ? `(${totalItems})` : ""}
            </Link>
            <Link
              href="/tracking-systems"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#2f8fff] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Tracker
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
