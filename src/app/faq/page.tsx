import type { Metadata } from "next";
import Section from "@/components/Section";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Intermax Limited's GPS vehicle tracking systems and electronics.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-[#0a1a33] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Frequently Asked Questions</h1>
        </div>
      </section>
      <Section eyebrow="FAQ" title="Answers to Common Questions">
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
    </>
  );
}
