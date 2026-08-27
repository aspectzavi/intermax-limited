import type { Metadata } from "next";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export const metadata: Metadata = {
  title: "Electronics Shop",
  description:
    "Shop phones, computers, CCTV, networking equipment, car electronics and GPS tracking devices from Intermax Limited, Kenya.",
};

export default function ShopPage({
  searchParams,
}: {
  searchParams?: { category?: string; q?: string };
}) {
  const activeCategory = searchParams?.category;
  const query = (searchParams?.q || "").toLowerCase();

  const filtered = products.filter((p) => {
    const matchesCategory = !activeCategory || p.category === activeCategory;
    const matchesQuery = !query || p.name.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <section className="bg-[#0a1a33] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Electronics Shop</h1>
          <p className="mt-4 text-sm text-slate-300">
            Trusted electronics from Intermax Limited — plus our full range of GPS
            tracking devices.
          </p>
        </div>
      </section>

      <Section eyebrow="Shop" title="Browse Products">
        <form className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            name="q"
            defaultValue={searchParams?.q || ""}
            placeholder="Search products..."
            className="w-full rounded-full border border-slate-300 px-5 py-2.5 text-sm focus:border-[#2f8fff] focus:outline-none sm:max-w-xs"
          />
          <div className="flex flex-wrap gap-2">
            <a
              href="/shop"
              className={`rounded-full border px-4 py-1.5 text-xs font-medium ${
                !activeCategory
                  ? "border-[#2f8fff] bg-[#2f8fff] text-white"
                  : "border-slate-300 text-slate-600"
              }`}
            >
              All
            </a>
            {categories.map((c) => (
              <a
                key={c}
                href={`/shop?category=${encodeURIComponent(c)}`}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium ${
                  activeCategory === c
                    ? "border-[#2f8fff] bg-[#2f8fff] text-white"
                    : "border-slate-300 text-slate-600"
                }`}
              >
                {c}
              </a>
            ))}
          </div>
        </form>

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-slate-500">No products match your search.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
