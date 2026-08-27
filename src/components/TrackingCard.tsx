import Link from "next/link";
import { TrackingSolution } from "@/data/trackingSolutions";

export default function TrackingCard({ solution }: { solution: TrackingSolution }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0d2144] p-6 text-white transition hover:border-[#2f8fff]/60">
      <h3 className="text-lg font-semibold">{solution.name}</h3>
      <p className="mt-2 text-sm text-slate-300">{solution.description}</p>
      <ul className="mt-4 space-y-1 text-xs text-slate-400">
        {solution.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2f8fff]" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={`/tracking-systems#${solution.slug}`}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-[#2f8fff] px-4 py-2 text-xs font-semibold text-[#2f8fff] transition hover:bg-[#2f8fff] hover:text-white"
      >
        Get a Quote
      </Link>
    </div>
  );
}
