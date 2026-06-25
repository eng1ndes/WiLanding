import { useEffect, useState } from "react";
import { CreditCard, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [navHeight, setNavHeight] = useState(64);

  useEffect(() => {
    const nav = document.getElementById("nav-root");
    const measure = () => {
      if (nav) setNavHeight(nav.offsetHeight || 64);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      className="relative w-full bg-[#020617] text-white overflow-hidden"
      style={{
        paddingTop: `calc(${navHeight}px + 4rem)`,
        paddingBottom: "6rem",
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />

      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Payment Fraud Intelligence
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400">
            Stolen card &amp; BIN monitoring for fraud teams.
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            Check any card against the WhiteIntel exposed-card index in milliseconds. Watch your own BINs for new compromised cards. Block fraud before the authorization response.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://platform.whiteintel.io/signup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
            >
              Start free
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 hover:bg-white/5 hover:border-white/30 text-white font-semibold text-sm transition-colors"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Right column: validation result mock */}
        <div className="relative hidden lg:block h-full min-h-[500px] w-full perspective-[2000px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] aspect-[4/3] bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl p-6 flex flex-col gap-4 transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-x-[0deg] transition-transform duration-700 ease-out group">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Card lookup</div>
                  <div className="text-xs text-slate-400">GET /api/v1/cards/check</div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">200 OK</div>
            </div>

            <div className="space-y-2.5 pt-2 font-mono text-xs">
              {[
                { k: "bin_6", v: "414720" },
                { k: "bin_8", v: "41472013" },
                { k: "last_4", v: "····7842" },
                { k: "issuer", v: "JPMorgan Chase" },
                { k: "country", v: "US" },
                { k: "network", v: "Visa" },
                { k: "type", v: "Credit · Platinum" },
                { k: "expiry", v: "07 / 2027" },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between p-2 bg-white/[0.03] rounded border border-white/5">
                  <span className="text-slate-500">{row.k}</span>
                  <span className="text-slate-200">{row.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 flex gap-3">
              <div className="h-8 flex-1 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center gap-1.5 text-xs text-red-300 font-medium">
                <AlertTriangle className="w-3 h-3" />
                Compromised
              </div>
              <div className="h-8 flex-1 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center justify-center gap-1.5 text-xs text-emerald-300 font-medium">
                <CheckCircle2 className="w-3 h-3" />
                Valid
              </div>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
