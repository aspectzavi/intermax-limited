import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  dark = false,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-6 lg:px-8 ${dark ? "bg-[#0a1a33] text-white" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2f8fff]">
              {eyebrow}
            </p>
          )}
          <h2
            className={`mt-2 text-2xl font-bold sm:text-3xl ${dark ? "text-white" : "text-[#0a1a33]"}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-3 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
