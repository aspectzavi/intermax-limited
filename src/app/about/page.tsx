import type { Metadata } from "next";
import Section from "@/components/Section";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Intermax Limited, Kenya's tracking-first technology company.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0a1a33] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">About {siteConfig.companyName}</h1>
          <p className="mt-4 text-sm text-slate-300">
            A Kenyan technology company specializing in GPS vehicle tracking, with a
            supporting electronics store.
          </p>
        </div>
      </section>

      <Section eyebrow="Our Story" title="Built Around Tracking Technology">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            {siteConfig.companyName} was founded to give individuals, businesses and
            fleet operators across Kenya a reliable way to track and protect their
            vehicles. Vehicle and asset tracking is at the core of what we do — everything
            else, including our electronics store, is built around that focus.
          </p>
          <p>
            We work with customers who need visibility into where their vehicles are,
            whether that&apos;s a single personal car, a motorbike, or a full commercial
            fleet. Alongside tracking systems, we also supply electronics — from phones
            and laptops to CCTV and networking equipment — for customers who want a
            trusted local technology partner.
          </p>
          <p className="text-xs text-slate-500">
            Company details such as registration information, years in operation and
            specific milestones can be added here once provided.
          </p>
        </div>
      </Section>
    </>
  );
}
