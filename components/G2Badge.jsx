// src/components/G2Badge.jsx
import { Star } from "lucide-react";
import g2Logo from "../assets/g2-logo.png";

export default function G2Badge({
  rating = 4.8,
  href = "https://www.g2.com/products/whiteintel-dark-web-intelligence/reviews",
}) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Rated ${rating.toFixed(1)} out of 5 on G2`}
      className="group inline-flex items-stretch overflow-hidden rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm shadow-lg shadow-black/40 hover:bg-white/[0.07] hover:border-white/20 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-0.5 transition-all"
    >
      {/* Left: G2 mark */}
      <div className="flex flex-col items-center justify-center px-3 py-2 bg-white/[0.03] border-r border-white/10">
        <img src={g2Logo} alt="G2" className="h-7 w-auto" />
        <span className="mt-0.5 text-[8px] font-bold tracking-[0.15em] text-slate-400 uppercase">
          Verified
        </span>
      </div>

      {/* Right: rating */}
      <div className="flex flex-col justify-center px-3 py-2 min-w-[140px]">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-extrabold text-white leading-none tabular-nums">
            {rating.toFixed(1)}
          </span>
          <span className="text-xs font-semibold text-slate-500 leading-none">/ 5</span>
        </div>

        {/* Stars with precise partial fill */}
        <div className="relative mt-1 inline-block leading-none">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-white/15 text-white/15" strokeWidth={0} />
            ))}
          </div>
          <div
            className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
            style={{ width: `${pct}%` }}
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-[#FF492C] text-[#FF492C] shrink-0"
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-1 text-[10px] font-semibold text-slate-400 leading-tight">
          Based on{" "}
          <span className="text-[#FF492C] group-hover:underline font-bold">
            reviews on G2 →
          </span>
        </div>
      </div>
    </a>
  );
}
