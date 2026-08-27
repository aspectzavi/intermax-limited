import Link from "next/link";
import { siteConfig } from "@/data/config";

const footerLinks = [
  { href: "/tracking-systems", label: "Tracking Systems" },
  { href: "/fleet-tracking", label: "Fleet Tracking" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071328] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-white">{siteConfig.companyName}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {siteConfig.description} Kenya&apos;s tracking-first technology partner for
            individuals, businesses and fleets.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-[#2f8fff]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Phone: {siteConfig.phoneNumber}</li>
            <li>WhatsApp: {siteConfig.phoneNumber}</li>
            <li>Email: {siteConfig.email}</li>
            <li>{siteConfig.physicalLocation}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Hours</h4>
          <p className="mt-4 text-sm text-slate-400">{siteConfig.businessHours}</p>
          <p className="mt-4 text-xs text-slate-500">
            Social links: configure in{" "}
            <code className="rounded bg-white/5 px-1 py-0.5">src/data/config.ts</code>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}
