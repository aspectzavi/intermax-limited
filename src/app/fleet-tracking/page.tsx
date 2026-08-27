import type { Metadata } from "next";
import Section from "@/components/Section";
import TrackingLeadForm from "@/components/TrackingLeadForm";

export const metadata: Metadata = {
  title: "Fleet Tracking Kenya",
  description:
    "Intermax Limited fleet tracking solutions help Kenyan businesses monitor and manage multiple vehicles from one dashboard.",
};

const fleetBenefits = [
  { title: "Multi-vehicle dashboard", desc: "See every vehicle in your fleet in one place." },
  { title: "Route & trip history", desc: "Review where vehicles have been and how they got there." },
  { title: "Geofencing alerts", desc: "Know when vehicles enter or leave approved zones." },
  { title: "Improved accountability", desc: "Better visibility into how your fleet is being used." },
];

export default function FleetTrackingPage() {
  return (
    <>
      <section className="bg-[#0a1a33] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Take Control of Your Fleet</h1>
          <p className="mt-6 text-base text-slate-300">
            Businesses with multiple vehicles can use Intermax tracking technology to
            monitor vehicles, improve visibility and manage their fleet more effectively.
          </p>
          <a
            href="#fleet-quote"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2f8fff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#1c78e6]"
          >
            Request a Fleet Quote
          </a>
        </div>
      </section>

      <Section eyebrow="Fleet Tracking" title="Built for Growing Businesses">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleetBenefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-[#0a1a33]">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="fleet-quote" className="scroll-mt-24 bg-[#0d2144] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">Request a Fleet Quote</h2>
          </div>
          <div className="mt-10 rounded-2xl bg-white p-6 sm:p-8">
            <TrackingLeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
