import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Building2,
  Globe,
  RefreshCcw,
  Bookmark,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Activity,
} from "lucide-react";

const FEATURES = [
  {
    id: 0,
    icon: CreditCard,
    visual: "lookup",
    title: "BIN-6 / BIN-8 / last-4 lookup",
    description:
      "Query by any combination of BIN-6, BIN-8, or last-4 digits. Useful both for single-card validation at authorization time and bulk lookups against your transaction stream.",
  },
  {
    id: 1,
    icon: Building2,
    visual: "issuer",
    title: "Issuer attribution",
    description:
      "Every match returns the issuing bank, the issuer country, and the card network (Visa, MasterCard, Amex, Discover, JCB, UnionPay). Route fraud workflows by issuer or geography.",
  },
  {
    id: 2,
    icon: Globe,
    visual: "type",
    title: "Card network, type, and tier",
    description:
      "Type (credit, debit, prepaid, charge) and tier (consumer, business, premium, corporate, platinum, gold). Premium-card fraud risk profiles differently from consumer-card risk; the data lets you treat them differently.",
  },
  {
    id: 3,
    icon: RefreshCcw,
    visual: "validity",
    title: "Validity at query time",
    description:
      "Cards age out of usefulness fast: expiry, issuer reissue, voluntary cancellation. Validity is computed at every query so your fraud rules don't fire on cards that have already been replaced.",
  },
  {
    id: 4,
    icon: Bookmark,
    visual: "watchlist",
    title: "BIN watchlist + new-only alerts",
    description:
      "Define a watchlist of up to 256 BINs covering the cards you issue or accept. Get email alerts the moment a new compromised card on those BINs appears. Severity-tiered, de-duplicated.",
  },
  {
    id: 5,
    icon: Terminal,
    visual: "access",
    title: "UI + API access",
    description:
      "15,000 UI searches per month for analyst workflow, 100 API calls per day for direct integration into your fraud stack. Identical payload from both interfaces.",
  },
];

export default function Capabilities() {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = FEATURES[activeFeature];

  return (
    <section className="relative bg-[#020617] text-white pb-24 pt-32 lg:pt-40 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Built for the fraud-stack integration, not the static report
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Six primitives that fit into the workflow you already have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-4">
            {FEATURES.map((f, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div
                  key={f.id}
                  onMouseEnter={() => setActiveFeature(idx)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-slate-800/40 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]"
                      : "bg-transparent border-transparent hover:bg-slate-800/20"
                  }`}
                >
                  <div className="flex gap-5">
                    <div
                      className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"
                      }`}
                    >
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-2 transition-colors ${
                          isActive ? "text-white" : "text-slate-300"
                        }`}
                      >
                        {f.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          isActive ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        {f.description}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="cardFraudProgressBar"
                      className="absolute left-0 bottom-0 h-[2px] bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative h-[420px] md:h-[500px] w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center sticky top-32">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <AnimatePresence mode="wait">
              {feature.visual === "lookup" && (
                <motion.div
                  key="lookup"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm bg-slate-950 border border-slate-800 rounded-lg shadow-2xl font-mono text-xs overflow-hidden"
                >
                  <div className="bg-slate-900 px-3 py-2 flex items-center gap-2 border-b border-slate-800">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">card lookup</span>
                  </div>
                  <div className="p-4 space-y-2 text-slate-300">
                    <p>
                      <span className="text-blue-400">GET</span> /api/v1/cards/check
                    </p>
                    <p className="text-slate-500">?bin=414720&amp;last4=7842</p>
                    <p className="text-slate-500 pt-2">→ response:</p>
                    <pre className="text-[10px] leading-relaxed text-slate-300 bg-slate-900/50 rounded p-2 mt-1">{`{
  "bin_6":  "414720",
  "bin_8":  "41472013",
  "last_4": "7842",
  "compromised": true,
  "first_seen": "2026-04-09"
}`}</pre>
                  </div>
                </motion.div>
              )}

              {feature.visual === "issuer" && (
                <motion.div
                  key="issuer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm bg-slate-950 border border-slate-800 rounded-lg shadow-2xl p-5 space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">Issuer attribution</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">BIN 414720</div>
                    </div>
                  </div>
                  <div className="space-y-2.5 text-xs font-mono">
                    {[
                      { k: "issuer", v: "JPMorgan Chase Bank" },
                      { k: "country", v: "US (840)" },
                      { k: "network", v: "Visa" },
                      { k: "scheme", v: "Visa Inc." },
                    ].map((row) => (
                      <div key={row.k} className="flex items-center justify-between p-2 bg-white/[0.03] rounded">
                        <span className="text-slate-500">{row.k}</span>
                        <span className="text-slate-200">{row.v}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {feature.visual === "type" && (
                <motion.div
                  key="type"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm space-y-3"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">Card classification</div>
                  {[
                    { label: "Type", value: "Credit", color: "blue" },
                    { label: "Tier", value: "Platinum", color: "amber" },
                    { label: "Brand", value: "Visa Signature", color: "blue" },
                    { label: "Funding", value: "Revolving credit", color: "slate" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between p-3 bg-slate-800/60 border border-slate-700/60 rounded-lg">
                      <span className="text-xs text-slate-400">{row.label}</span>
                      <span
                        className={`text-xs font-semibold ${
                          row.color === "amber" ? "text-amber-400" : row.color === "blue" ? "text-blue-300" : "text-slate-200"
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}

              {feature.visual === "validity" && (
                <motion.div
                  key="validity"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <motion.div
                      className="absolute w-full h-full rounded-full border-2 border-blue-500/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    </motion.div>
                    <div className="absolute w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">VALID · computed now</div>
                    <div className="text-[11px] text-slate-400 mt-1">Re-checked on every query</div>
                  </div>
                </motion.div>
              )}

              {feature.visual === "watchlist" && (
                <motion.div
                  key="watchlist"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm space-y-2"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">BIN watchlist · 256 max</div>
                  {[
                    { bin: "414720", issuer: "JPMorgan Chase", count: "47 new" },
                    { bin: "552235", issuer: "Bank of America", count: "12 new" },
                    { bin: "424242", issuer: "Capital One", count: "3 new" },
                    { bin: "601100", issuer: "Discover", count: "0 new", quiet: true },
                  ].map((b) => (
                    <div key={b.bin} className="flex items-center justify-between p-3 bg-slate-800/60 border border-slate-700/60 rounded-lg">
                      <div>
                        <div className="text-xs font-mono text-slate-200">{b.bin}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{b.issuer}</div>
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                          b.quiet ? "text-slate-500 bg-slate-700/40" : "text-red-300 bg-red-500/15 border border-red-500/30"
                        }`}
                      >
                        {b.count}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}

              {feature.visual === "access" && (
                <motion.div
                  key="access"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm grid grid-cols-2 gap-3"
                >
                  <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-lg">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">UI</div>
                    <div className="text-2xl font-bold text-white">15,000</div>
                    <div className="text-[10px] text-slate-400 mt-1">searches / month</div>
                  </div>
                  <div className="p-4 bg-slate-800/60 border border-slate-700/60 rounded-lg">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">API</div>
                    <div className="text-2xl font-bold text-white">100</div>
                    <div className="text-[10px] text-slate-400 mt-1">calls / day</div>
                  </div>
                  <div className="col-span-2 p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] text-slate-300 font-mono">identical JSON payload from both</span>
                  </div>
                  <div className="col-span-2 p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px] text-slate-300">Bundled at 1000 calls / day on Extended Threat Intelligence</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
