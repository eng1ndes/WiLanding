import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Activity,
  Gauge,
  ShieldAlert,
  FileSearch,
  BellRing,
  Lock,
  GitBranch,
  Cookie,
  AlertTriangle,
  CheckCircle2,
  Cpu,
} from "lucide-react";

const FEATURES = [
  {
    id: 0,
    icon: Network,
    visual: "portfolio",
    title: "Supplier tracking and tiering",
    description:
      "Track each vendor by domain and tag them with tier (critical / high / medium / low), name, size, country, industry, category, and notes. One organized portfolio view, with a plan-based limit on tracked supplier count.",
  },
  {
    id: 1,
    icon: Activity,
    visual: "scan",
    title: "Continuous monitoring",
    description:
      "Automated scheduled re-scans keep every supplier's posture current. Near-real-time updates push fresh exposure into the score and timeline as soon as new leaked data referencing the supplier surfaces.",
  },
  {
    id: 2,
    icon: Gauge,
    visual: "score",
    title: "Critical application exposure",
    description:
      "We flag when employees leak credentials for high-value pivot targets: source control (GitHub, GitLab, Bitbucket), CI/CD and artifact registries (Jenkins, CircleCI, JFrog, npm, PyPI, Docker), identity / SSO (Okta, Auth0, OneLogin, Ping), secrets managers (Vault, 1Password), and VPN / remote access. These are the credentials an attacker uses to pivot into a supply-chain attack.",
  },
  {
    id: 3,
    icon: Cookie,
    visual: "cookie",
    title: "Live MFA-bypassing session cookies",
    description:
      "Every infostealer log carries the victim's browser cookie store. We extract active session cookies tied to corporate systems and surface the compromised machines so you can revoke sessions before the buyer replays them.",
  },
  {
    id: 4,
    icon: FileSearch,
    visual: "evidence",
    title: "Per-supplier evidence and findings",
    description:
      "For each supplier you see the latest corporate exposures, the critical-application exposures, the specific compromised machines and sessions, and a plain-language findings summary that explains the risk in business terms.",
  },
  {
    id: 5,
    icon: BellRing,
    visual: "alerting",
    title: "New-only alerting",
    description:
      "Email alerts fire the moment something new appears: a new critical exposure, a new live session cookie, or a worsening grade or score. Severity-tiered (critical / notable) and de-duplicated to avoid noise.",
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
            Every layer of supplier risk, monitored continuously
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            What we track, how we score it, and how you act on it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Interactive feature list */}
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
                      layoutId="capabilityProgressBar"
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

          {/* RIGHT: Dynamic visual */}
          <div className="relative h-[420px] md:h-[500px] w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center sticky top-32">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <AnimatePresence mode="wait">
              {feature.visual === "portfolio" && (
                <motion.div
                  key="portfolio"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm space-y-3"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">Supplier Portfolio</div>
                  {[
                    { name: "vendor-a.com", tier: "CRITICAL", grade: "F", color: "red" },
                    { name: "vendor-b.io", tier: "HIGH", grade: "C", color: "amber" },
                    { name: "vendor-c.net", tier: "MEDIUM", grade: "B", color: "blue" },
                    { name: "vendor-d.org", tier: "LOW", grade: "A", color: "emerald" },
                  ].map((v) => (
                    <div key={v.name} className="flex items-center justify-between p-3 bg-slate-800/60 border border-slate-700/60 rounded-lg">
                      <div>
                        <div className="text-xs font-mono text-slate-200">{v.name}</div>
                        <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">{v.tier}</div>
                      </div>
                      <span
                        className={`w-9 h-9 rounded text-sm font-bold flex items-center justify-center ${
                          v.color === "red"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : v.color === "amber"
                            ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                            : v.color === "blue"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        }`}
                      >
                        {v.grade}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}

              {feature.visual === "scan" && (
                <motion.div
                  key="scan"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="relative flex flex-col items-center gap-6"
                >
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    {[1, 0.75, 0.5].map((s, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border border-blue-500/30"
                        style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                    <div className="absolute w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">Scanning</div>
                    <div className="text-[11px] text-slate-400 mt-1">128 suppliers • near real time</div>
                  </div>
                </motion.div>
              )}

              {feature.visual === "score" && (
                <motion.div
                  key="score"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm space-y-3"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-2">Critical exposures detected</div>
                  {[
                    { svc: "GitHub", icon: GitBranch },
                    { svc: "Okta SSO", icon: Lock },
                    { svc: "Vault", icon: ShieldAlert },
                    { svc: "Docker Registry", icon: Cpu },
                  ].map((s) => (
                    <div key={s.svc} className="flex items-center justify-between p-3 bg-slate-800/60 border border-red-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <s.icon className="w-4 h-4 text-red-400" />
                        <span className="text-xs text-slate-200">{s.svc}</span>
                      </div>
                      <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">EXPOSED</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {feature.visual === "cookie" && (
                <motion.div
                  key="cookie"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="w-[90%] max-w-sm bg-slate-950 rounded-lg border border-slate-800 shadow-2xl font-mono text-xs overflow-hidden"
                >
                  <div className="bg-slate-900 px-3 py-2 flex items-center gap-2 border-b border-slate-800">
                    <Cookie className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] uppercase tracking-widest text-slate-400">Live session cookie</span>
                  </div>
                  <div className="p-4 space-y-2 text-slate-300">
                    <p>
                      <span className="text-slate-500">host:</span> okta.vendor-a.com
                    </p>
                    <p>
                      <span className="text-slate-500">user:</span> j.smith@vendor-a.com
                    </p>
                    <p>
                      <span className="text-slate-500">cookie:</span> <span className="text-amber-400">sid=...</span>
                    </p>
                    <p>
                      <span className="text-slate-500">status:</span> <span className="text-red-400">ACTIVE · MFA already satisfied</span>
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2 text-[10px] text-red-300">
                      <AlertTriangle className="w-3 h-3" />
                      Attacker can replay this cookie without re-auth
                    </div>
                  </div>
                </motion.div>
              )}

              {feature.visual === "evidence" && (
                <motion.div
                  key="evidence"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm bg-slate-950 border border-slate-800 rounded-lg shadow-2xl p-5 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <div className="text-sm font-semibold text-white">vendor-a.com</div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">Findings summary</div>
                    </div>
                    <span className="w-8 h-8 rounded bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-sm font-bold">F</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    12 employees infected by infostealers in the past 90 days. 4 credentials for critical applications including source control and SSO. 2 active session cookies still valid.
                  </p>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Exposure timeline · 24 mo</div>
                  <div className="flex items-end gap-1 h-10">
                    {[2, 3, 1, 4, 2, 5, 3, 6, 4, 8, 7, 12].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-red-500/50 to-red-500/20 rounded-sm"
                        style={{ height: `${(h / 12) * 100}%` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {feature.visual === "alerting" && (
                <motion.div
                  key="alerting"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-[90%] max-w-sm bg-slate-950 border border-slate-800 rounded-lg shadow-2xl overflow-hidden"
                >
                  <div className="bg-red-500/10 border-b border-red-500/30 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-[10px] uppercase tracking-widest text-red-300 font-bold">Critical alert</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">2 min ago</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="text-sm font-semibold text-white leading-snug">
                      New live session cookie detected for vendor-a.com
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      An active Okta session for j.smith@vendor-a.com has appeared in a Lumma stealer log distributed today. Cookie is replayable without MFA.
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Grade A → C</span>
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </div>
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
