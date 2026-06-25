import { motion } from "framer-motion";
import { Mail, AlertTriangle, BellRing, ShieldCheck } from "lucide-react";

export default function Alerting() {
  return (
    <section className="relative bg-white text-slate-900 px-6 md:px-10 py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.4,
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            Alerting
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Email alerts the moment something new appears
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
            Alerts fire only on genuinely new findings and are de-duplicated so your inbox stays clean. Severity-tiered into <strong className="text-slate-900">critical</strong> and <strong className="text-slate-900">notable</strong> so the high-stakes events stay visible.
          </p>

          <ul className="space-y-3">
            {[
              { icon: AlertTriangle, label: "A new critical exposure on a tracked supplier" },
              { icon: BellRing, label: "A new live, MFA-bypassing session cookie" },
              { icon: ShieldCheck, label: "A worsening grade or score since the last check" },
            ].map((row) => (
              <li key={row.label} className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
                  <row.icon className="w-4 h-4" />
                </div>
                <span className="text-sm text-slate-700 leading-relaxed pt-1">{row.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sample email mockup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background card stack */}
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent blur-2xl rounded-2xl pointer-events-none" />

          <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-200 overflow-hidden">
            {/* Email chrome */}
            <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Mail className="w-3.5 h-3.5" />
                <span className="font-mono">alerts@whiteintel.io</span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                <AlertTriangle className="w-3 h-3" />
                Critical
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="text-xs text-slate-500 mb-1">Subject</div>
                <div className="text-base font-semibold text-slate-900 leading-snug">
                  New live session cookie detected on vendor-a.com (grade A → C)
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  An active session cookie tied to <strong className="text-slate-900">okta.vendor-a.com</strong> appeared in a stealer log distributed today. The cookie is currently replayable without re-authentication.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Supplier</div>
                    <div className="text-sm text-slate-900 font-semibold">vendor-a.com</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Score change</div>
                    <div className="text-sm font-semibold text-red-600">82 → 64</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Source</div>
                    <div className="text-sm text-slate-900 font-semibold">Lumma stealer log</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">First seen</div>
                    <div className="text-sm text-slate-900 font-semibold">2 minutes ago</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://platform.whiteintel.io"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                >
                  View evidence
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
