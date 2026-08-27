import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import TrackingCard from "@/components/TrackingCard";
import TrackingLeadForm from "@/components/TrackingLeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/config";
import { trackingSolutions } from "@/data/trackingSolutions";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "GPS Vehicle Tracking Systems in Kenya",
  description:
    "Explore Intermax Limited's GPS vehicle tracking systems in Kenya — personal, fleet, motorbike, asset and commercial tracking. Request a quote today.",
};

const benefits = [
  "Real-time location visibility",
  "Peace of mind for you and your family",
  "Improved fleet accountability for businesses",
  "Support in the event of vehicle theft",
];

export default function TrackingSystemsPage() {
  return (
    <>
      <section className="bg-[#0a1a33] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2f8fff]">
            GPS Tracking Systems
          </p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            GPS Vehicle Tracking Systems in Kenya
          </h1>
          <p className="mt-6 text-base text-slate-300">
            Reliable, real-time vehicle tracking for individuals, businesses and fleets —
            with local installation and support.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#request-form"
              className="rounded-full bg-[#2f8fff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#1c78e6]"
            >
              Request Tracking System
            </a>
            <WhatsAppButton />
            <a
              href={`tel:${siteConfig.phoneNumber.replace(/\s/g, "")}`}
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call {siteConfig.phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="Benefits" title="Benefits of GPS Tracking">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b} className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-700">
              {b}
            </div>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Types" title="Types of Tracking Systems">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trackingSolutions.map((s) => (
            <div id={s.slug} key={s.slug} className="scroll-mt-24">
              <TrackingCard solution={s} />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Installation" title="How Installation Works">
        <ol className="mx-auto max-w-2xl space-y-4 text-sm text-slate-700">
          <li className="flex gap-3">
            <span className="font-bold text-[#2f8fff]">1.</span>
            Get in touch via WhatsApp, phone or the form below to choose your solution.
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#2f8fff]">2.</span>
            Our team schedules a convenient time for installation.
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#2f8fff]">3.</span>
            The tracker is installed and configured on your vehicle.
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#2f8fff]">4.</span>
            You get access to your tracking dashboard and can start monitoring right away.
          </li>
        </ol>
      </Section>

      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="mx-auto max-w-3xl divide-y divide-slate-200">
          {faqs.map((f) => (
            <details key={f.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#0a1a33]">
                {f.question}
                <span className="ml-4 text-[#2f8fff] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-slate-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="request-form" className="scroll-mt-24 bg-[#0d2144] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">Request a Tracking System</h2>
            <p className="mt-3 text-sm text-slate-300">
              Fill in your details and our team will get back to you shortly.
            </p>
          </div>
          <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8">
            <TrackingLeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
