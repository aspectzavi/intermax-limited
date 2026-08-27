import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Intermax Limited.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-slate-700 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-[#0a1a33]">Terms & Conditions</h1>
      <p className="mt-4 text-xs text-slate-400">
        Placeholder — replace with terms reviewed for {siteConfig.companyName} before launch.
      </p>
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="font-semibold text-[#0a1a33]">Use of This Website</h2>
          <p className="mt-2">
            By using this website, you agree to provide accurate information when
            submitting tracking requests, contact forms or orders.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[#0a1a33]">Products & Services</h2>
          <p className="mt-2">
            Product availability, pricing and specifications are subject to change.
            Tracking system installation is arranged directly with our team following
            your request.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[#0a1a33]">Payments</h2>
          <p className="mt-2">
            Where applicable, payments including M-Pesa are arranged and confirmed
            directly with our team as part of the order process.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[#0a1a33]">Contact</h2>
          <p className="mt-2">For questions about these terms, contact us at {siteConfig.email}.</p>
        </div>
      </div>
    </section>
  );
}
