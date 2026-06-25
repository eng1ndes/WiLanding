import { motion } from "framer-motion";
import { Bug, Layers, Database, Clock } from "lucide-react";

const INDICES = [
  {
    icon: Bug,
    name: "Malware / Stealer Index",
    desc: "Employees infected by infostealers across the supplier's workforce, including live session cookies for corporate systems.",
  },
  {
    icon: Layers,
    name: "Combolist Index",
    desc: "Corporate credentials for the supplier's domains circulating in active combolists used for credential-stuffing campaigns.",
  },
  {
    icon: Database,
    name: "Breach Index",
    desc: "Supplier credentials exposed in third-party breach databases. Long-tail exposure aggregated across known dumps.",
  },
];

const GRADES = [
  { letter: "A", color: "emerald", range: "85–100", label: "Healthy" },
  { letter: "B", color: "blue", range: "70–84", label: "Watch" },
  { letter: "C", color: "amber", range: "55–69", label: "Elevated" },
  { letter: "D", color: "orange", range: "40–54", label: "High" },
  { letter: "F", color: "red", range: "0–39", label: "Critical" },
];

export default function RiskScore() {
  return (
    <section className="relative bg-[#020617] text-white px-6 md:px-10 py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            Risk score
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            A 0&ndash;100 score and an A&ndash;F grade per supplier
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Refreshed continuously, recency-weighted so today's exposure outweighs last year's, and broken down into three independent indices you can interrogate. Includes a 24-month exposure timeline per supplier.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: score card mockup */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Supplier</div>
                <div className="text-lg font-semibold text-white mt-0.5">vendor-a.com</div>
              </div>
              <span className="w-12 h-12 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-2xl font-bold">F</span>
            </div>

            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white tabular-nums">32</span>
              <span className="text-sm text-slate-400">/ 100</span>
              <span className="ml-auto text-xs text-red-400 font-mono">−14 since last check</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800 overflow-hidden mb-6">
              <div className="h-full bg-gradient-to-r from-red-500 to-orange-400" style={{ width: "32%" }} />
            </div>

            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Index breakdown</div>
            <div className="space-y-3">
              {[
                { label: "Malware / Stealer", value: 18, color: "red" },
                { label: "Combolist", value: 42, color: "amber" },
                { label: "Breach", value: 56, color: "blue" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-300">{row.label}</span>
                    <span className="text-slate-400 font-mono">{row.value} / 100</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full ${
                        row.color === "red" ? "bg-red-500" : row.color === "amber" ? "bg-amber-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> 24-month exposure timeline
              </div>
              <div className="flex items-end gap-1 h-12">
                {[2, 3, 1, 4, 2, 5, 3, 6, 4, 8, 7, 12, 9, 11, 8, 14, 12, 10, 13, 17, 15, 19, 22, 28].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-red-500/60 to-red-500/20 rounded-sm"
                    style={{ height: `${(h / 28) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: explainer (indices + grades) */}
          <div className="lg:col-span-3 space-y-10">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-3">Three independent indices</div>
              <div className="space-y-4">
                {INDICES.map((index, i) => (
                  <motion.div
                    key={index.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-4 p-5 bg-slate-900/40 border border-white/5 rounded-xl"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                      <index.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">{index.name}</div>
                      <div className="text-sm text-slate-400 leading-relaxed">{index.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-3">Grade bands</div>
              <div className="grid grid-cols-5 gap-2">
                {GRADES.map((g) => (
                  <div
                    key={g.letter}
                    className={`p-3 rounded-lg border text-center ${
                      g.color === "emerald"
                        ? "bg-emerald-500/10 border-emerald-500/30"
                        : g.color === "blue"
                        ? "bg-blue-500/10 border-blue-500/30"
                        : g.color === "amber"
                        ? "bg-amber-500/10 border-amber-500/30"
                        : g.color === "orange"
                        ? "bg-orange-500/10 border-orange-500/30"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div
                      className={`text-2xl font-bold ${
                        g.color === "emerald"
                          ? "text-emerald-400"
                          : g.color === "blue"
                          ? "text-blue-400"
                          : g.color === "amber"
                          ? "text-amber-400"
                          : g.color === "orange"
                          ? "text-orange-400"
                          : "text-red-400"
                      }`}
                    >
                      {g.letter}
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 mt-1 tracking-widest uppercase">{g.range}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{g.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
