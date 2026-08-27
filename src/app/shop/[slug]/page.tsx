import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import AddToCartSection from "@/components/AddToCartSection";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/shop" className="text-xs font-semibold text-[#2f8fff] hover:underline">
        ← Back to Shop
      </Link>
      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex h-72 items-center justify-center rounded-2xl bg-slate-50 text-slate-300 md:h-96">
          <span className="text-xs uppercase tracking-wide">{product.category}</span>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2f8fff]">
            {product.category}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-[#0a1a33] sm:text-3xl">{product.name}</h1>
          <p className="mt-4 text-sm text-slate-600">{product.description}</p>
          <p className="mt-6 text-2xl font-extrabold text-[#0a1a33]">
            KES {product.price.toLocaleString()}
          </p>
          <p className={`mt-1 text-sm font-medium ${product.available ? "text-emerald-600" : "text-red-500"}`}>
            {product.available ? "In stock" : "Out of stock"}
          </p>
          <AddToCartSection product={product} />
        </div>
      </div>
    </section>
  );
}
