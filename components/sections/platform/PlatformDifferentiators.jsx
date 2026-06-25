import { motion } from "framer-motion";
import { Sparkles, DatabaseZap, ShieldCheck, Layers } from "lucide-react";

export default function PlatformDifferentiators() {
  const items = [
    {
      icon: Sparkles,
      title: "High Signal-to-Noise",
      desc:
        "We curate data aggressively. No raw noise—only actionable intelligence integrated directly into Jira, Slack, and your security stack.",
    },
    {
      icon: DatabaseZap,
      title: "Unrivaled Data Depth",
      desc:
        "Continuous collection from difficult sources: private stealer logs, invite-only forums, Telegram channels, and zero-day paste sites.",
    },
    {
      icon: ShieldCheck,
      title: "Rich Context Labels",
      desc:
        "Every alert includes deep context: compromised hostnames, malware paths, antivirus status, and geolocation for immediate triage.",
    },
  ];

  return (
    <section className="relative bg-[#020617] text-white px-6 md:px-10 py-24 border-t border-white/10 overflow-hidden">
      
      {/* Background: Engineering Grid (Subtle & Technical) */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header - Clean & Solid */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900 bg-blue-900/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Layers className="w-3 h-3" />
            The Difference
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Why Teams Choose Whiteintel
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We don't just dump data. We unify monitoring across high-value external sources 
            to proactively detect the exposures that lead to ransomware and data loss.
          </p>
        </div>

        {/* Cards - Matte Finish, No Gradients */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#0b1229] border border-white/10 rounded-xl p-8 hover:border-blue-600 transition-colors duration-300"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/20">
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-3">
                    {it.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Metrics Bar - Industrial Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-[#0b1229] grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          <Metric
            value="10B+"
            label="Accounts Monitored"
            sub="Across stealer logs, forums, and combos."
          />
          <Metric
            value="80M+"
            label="Stealer Logs Indexed"
            sub="High-quality, deduplicated logs with identities."
          />
        </motion.div>

      </div>
    </section>
  );
}

function Metric({ value, label, sub }) {
  return (
    <div className="p-8 md:p-12 text-center">
      {/* Solid White Number - No Gradient */}
      <div className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
        {value}
      </div>
      <div className="text-lg font-bold text-blue-400 mb-2">{label}</div>
      <div className="text-sm text-slate-500">{sub}</div>
    </div>
  );
}