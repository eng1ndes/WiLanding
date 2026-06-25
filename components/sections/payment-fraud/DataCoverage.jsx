import { motion } from "framer-motion";
import { Hash, Building2, Globe, CreditCard, Layers, Award, Calendar, CheckCircle2 } from "lucide-react";

const FIELDS = [
  {
    icon: Hash,
    name: "BIN-6, BIN-8, last-4",
    desc: "Card number prefix and suffix segments. Query by any combination.",
  },
  {
    icon: Building2,
    name: "Issuer bank",
    desc: "Bank that issued the card, resolved from BIN range.",
  },
  {
    icon: Globe,
    name: "Issuer country",
    desc: "ISO country code and name for the issuing institution.",
  },
  {
    icon: CreditCard,
    name: "Card network",
    desc: "Visa, MasterCard, Amex, Discover, JCB, UnionPay.",
  },
  {
    icon: Layers,
    name: "Card type",
    desc: "Credit, debit, prepaid, charge. Used for fraud-rule routing.",
  },
  {
    icon: Award,
    name: "Card tier",
    desc: "Consumer, business, premium, corporate, platinum, gold.",
  },
  {
    icon: Calendar,
    name: "Expiry date",
    desc: "Month and year, when present in the source. Used to weight validity.",
  },
  {
    icon: CheckCircle2,
    name: "Validity at query time",
    desc: "Computed every time you query, not pulled from a stale snapshot.",
  },
];

export default function DataCoverage() {
  return (
    <section className="relative bg-[#020617] text-white px-6 md:px-10 py-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            Data coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Every field your fraud rules need, returned on every query
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            One call returns the BIN, the issuer, the network, the card type and tier, the expiry, and the current validity status. No second hop, no enrichment vendor stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: fields grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-3"
          >
            {FIELDS.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex gap-3 p-4 bg-slate-900/40 border border-white/5 rounded-xl"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                  <f.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{f.name}</div>
                  <div className="text-xs text-slate-400 leading-relaxed">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: sample JSON */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <div className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  GET /api/v1/cards/check
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">200 OK</span>
              </div>
              <pre className="p-5 text-[11.5px] leading-relaxed text-slate-300 font-mono overflow-x-auto">{`{
  "bin_6":      "414720",
  "bin_8":      "41472013",
  "last_4":     "7842",
  "issuer":     "JPMorgan Chase Bank",
  "country":    "US",
  "network":    "Visa",
  "type":       "Credit",
  "tier":       "Platinum",
  "expiry":     "07/2027",
  "compromised": true,
  "validity":   "VALID",
  "first_seen": "2026-04-09T13:22:41Z",
  "last_seen":  "2026-05-28T07:14:11Z",
  "source":     "carding_shop"
}`}</pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
