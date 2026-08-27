import type { Metadata } from "next";
import Section from "@/components/Section";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackingLeadForm from "@/components/TrackingLeadForm";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Intermax Limited via phone, WhatsApp or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0a1a33] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Contact {siteConfig.companyName}</h1>
          <p className="mt-4 text-sm text-slate-300">
            Reach out via phone, WhatsApp, or send us a message below.
          </p>
        </div>
      </section>

      <Section eyebrow="Get in Touch" title="We'd Love to Hear From You">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-700">
            <p><strong>Phone:</strong> {siteConfig.phoneNumber}</p>
            <p><strong>Email:</strong> {siteConfig.email}</p>
            <p><strong>Location:</strong> {siteConfig.physicalLocation}</p>
            <p><strong>Business Hours:</strong> {siteConfig.businessHours}</p>
            <WhatsAppButton />
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 sm:p-8">
            <TrackingLeadForm />
          </div>
        </div>
      </Section>
    </>
  );
}
