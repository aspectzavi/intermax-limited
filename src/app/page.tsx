import Link from "next/link";
import Section from "@/components/Section";
import TrackingCard from "@/components/TrackingCard";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/config";
import { trackingSolutions } from "@/data/trackingSolutions";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";

const benefits = [
  { title: "Real-time vehicle tracking", desc: "See your vehicle's live location whenever you need to." },
  { title: "Fleet management", desc: "Monitor multiple vehicles from a single dashboard." },
  { title: "Geofencing", desc: "Get alerts when a vehicle enters or leaves a set area." },
  { title: "Trip history", desc: "Review past routes and journeys for any tracked vehicle." },
  { title: "Speed monitoring", desc: "Keep track of vehicle speed for safety and accountability." },
  { title: "Reliable customer support", desc: "Our team is on hand to help with setup and questions." },
];

const steps = [
  { title: "Choose your tracking solution", desc: "Pick the option that fits your vehicle and needs." },
  { title: "We install & configure", desc: "Our team installs and sets up your tracker." },
  { title: "Access your dashboard", desc: "View your vehicle's location and tracking information." },
  { title: "Monitor & manage", desc: "Stay in control of your vehicle, anytime, anywhere." },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero — Vehicle Tracking */}
      <section className="relative overflow-hidden bg-[#0a1a33] text-white">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#2f8fff,transparent_45%),radial-gradient(circle_at_80%_60%,#10b981,transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2f8fff]">
              GPS Vehicle Tracking · Kenya
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Track Your Vehicle. Protect What Matters.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300">
              {siteConfig.description} Know where your vehicles are, monitor their
              movement and protect your assets with {siteConfig.companyName}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/tracking-systems"
                className="rounded-full bg-[#2f8fff] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f8fff]/30 transition hover:bg-[#1c78e6]"
              >
                Get a Tracking System
              </Link>
              <WhatsAppButton />
            </div>
          </div>
          <div className="relative mx-auto flex h-72 w-full max-w-md items-center justify-center rounded-3xl border border-white/10 bg-white/5 sm:h-96">
            <div className="text-center">
              <svg className="mx-auto h-20 w-20 text-[#2f8fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="mt-4 text-sm text-slate-300">
                Live map & tracking dashboard visual placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Intermax */}
      <Section
        eyebrow="Why Intermax"
        title="Why Choose Intermax?"
        subtitle="Tracking solutions built for individuals and businesses across Kenya."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-[#0a1a33]">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Tracking Solutions */}
      <Section
        dark
        eyebrow="Solutions"
        title="Tracking Solutions"
        subtitle="Choose the right tracking package for your vehicle or fleet."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trackingSolutions.map((s) => (
            <TrackingCard key={s.slug} solution={s} />
          ))}
        </div>
      </Section>

      {/* 4. How It Works */}
      <Section
        eyebrow="Process"
        title="How It Works"
        subtitle="Getting a tracking system installed is simple."
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-slate-200 p-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2f8fff] text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-[#0a1a33]">{s.title}</h3>
              <p className="mt-2 text-xs text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Electronics Store (secondary) */}
      <Section
        eyebrow="Also from Intermax"
        title="Electronics Store"
        subtitle="Phones, computers, CCTV, networking gear and more — alongside our tracking systems."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-[#0a1a33] px-6 py-3 text-sm font-semibold text-[#0a1a33] transition hover:bg-[#0a1a33] hover:text-white"
          >
            Browse the Shop
          </Link>
        </div>
      </Section>

      {/* 6. Business / Fleet Solutions */}
      <section className="bg-[#0d2144] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Take Control of Your Fleet</h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Businesses with multiple vehicles can use Intermax tracking technology to
            monitor vehicles, improve visibility and manage their fleet more effectively.
          </p>
          <Link
            href="/fleet-tracking"
            className="rounded-full bg-[#2f8fff] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f8fff]/30 transition hover:bg-[#1c78e6]"
          >
            Request a Fleet Quote
          </Link>
        </div>
      </section>

      {/* 7. Trust Section */}
      <Section eyebrow="Trust" title="Trusted Across Kenya" subtitle="Placeholder statistics — replace with real figures.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-8 text-center">
            <p className="text-3xl font-extrabold text-[#0a1a33]">{siteConfig.stats.yearsInBusiness}</p>
            <p className="mt-2 text-sm text-slate-600">Years in Business</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-8 text-center">
            <p className="text-3xl font-extrabold text-[#0a1a33]">{siteConfig.stats.customersServed}</p>
            <p className="mt-2 text-sm text-slate-600">Customers Served</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-8 text-center">
            <p className="text-3xl font-extrabold text-[#0a1a33]">{siteConfig.stats.vehiclesTracked}</p>
            <p className="mt-2 text-sm text-slate-600">Vehicles Tracked</p>
          </div>
        </div>
      </Section>

      {/* 8. Testimonials */}
      <Section dark eyebrow="Testimonials" title="What Our Customers Say" subtitle="Placeholder testimonials — swap in real customer quotes.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name + t.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm italic text-slate-200">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold text-white">{t.name}</p>
              <p className="text-xs text-slate-400">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. FAQ (preview) */}
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="mx-auto max-w-3xl divide-y divide-slate-200">
          {faqs.slice(0, 5).map((f) => (
            <details key={f.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[#0a1a33]">
                {f.question}
                <span className="ml-4 text-[#2f8fff] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-slate-600">{f.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="text-sm font-semibold text-[#2f8fff] hover:underline">
            View all FAQs →
          </Link>
        </div>
      </Section>

      {/* 10. Final CTA */}
      <section className="bg-[#0a1a33] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to Start Tracking?</h2>
          <p className="mt-4 text-sm text-slate-300">
            Protect your vehicle and get better visibility with {siteConfig.companyName}{" "}
            tracking solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tracking-systems"
              className="rounded-full bg-[#2f8fff] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2f8fff]/30 transition hover:bg-[#1c78e6]"
            >
              Get a Tracking System
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Intermax
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
