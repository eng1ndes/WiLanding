import { motion } from "framer-motion";
import { ShieldCheck, FileWarning, Bookmark } from "lucide-react";

const CASES = [
  {
    icon: ShieldCheck,
    audience: "Acquirers · merchants · PSPs",
    title: "Pre-transaction validation",
    desc: "Hit /cards/check at authorization time against the candidate card. Decline or step-up high-risk authorizations before the charge clears. Sits next to your existing scoring model as an external signal.",
    bullets: [
      "Real-time API call (sub-second response)",
      "Returns compromised flag + full enrichment",
      "Drops into existing fraud-score pipelines",
    ],
  },
  {
    icon: FileWarning,
    audience: "Card issuers · banks",
    title: "Chargeback prevention",
    desc: "Surface your own issued cards that have surfaced on carding shops, in stealer logs, or in dark web channels. Cancel and reissue before the cardholder disputes a charge that you'll otherwise eat.",
    bullets: [
      "BIN watchlist scoped to your issued range",
      "Email alerts on new compromised cards",
      "Issuer-level enrichment for batch reissue workflows",
    ],
  },
  {
    icon: Bookmark,
    audience: "Fraud ops · BIN sponsors",
    title: "BIN watchlist monitoring",
    desc: "Watch up to 256 BINs covering the cards you care about: your own issued range, partner-issued ranges, or the BINs that historically generate disproportionate fraud loss. New compromised cards on those BINs trigger alerts.",
    bullets: [
      "Up to 256 BINs per watchlist",
      "Severity-tiered, de-duplicated alerts",
      "UI dashboard + email delivery",
    ],
  },
];

export default function UseCases() {
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

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            Use cases
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Three workflows, same data layer
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you accept cards, issue cards, or sponsor BIN ranges, the integration shape is the same: query the index, get the answer.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mb-5">
                <c.icon className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                {c.audience}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{c.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{c.desc}</p>
              <ul className="space-y-2 border-t border-slate-100 pt-4">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
