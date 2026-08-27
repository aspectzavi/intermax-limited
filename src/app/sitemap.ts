import { MetadataRoute } from "next";
import { products } from "@/data/products";

const baseUrl = "https://www.intermaxlimited.co.ke"; // TODO: update with real domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tracking-systems",
    "/fleet-tracking",
    "/shop",
    "/about",
    "/contact",
    "/faq",
    "/cart",
    "/checkout",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/shop/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
