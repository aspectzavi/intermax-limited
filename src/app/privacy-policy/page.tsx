import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Intermax Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-slate-700 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-[#0a1a33]">Privacy Policy</h1>
      <p className="mt-4 text-xs text-slate-400">
        Placeholder — replace with a policy reviewed for {siteConfig.companyName}&apos;s
        actual data practices before launch.
      </p>
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="font-semibold text-[#0a1a33]">Information We Collect</h2>
          <p className="mt-2">
            When you use this website, we may collect information you provide directly,
            such as your name, phone number, email address and vehicle details, when you
            submit a tracking request, contact form or order.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[#0a1a33]">How We Use Information</h2>
          <p className="mt-2">
            We use the information you provide to respond to enquiries, process orders,
            arrange tracking system installations and improve our services.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[#0a1a33]">Contact</h2>
          <p className="mt-2">
            For questions about this policy, contact us at {siteConfig.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
