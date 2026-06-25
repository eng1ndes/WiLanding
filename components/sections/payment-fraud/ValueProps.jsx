import { motion } from "framer-motion";
import { ShieldCheck, Bookmark, Building2, RefreshCcw, ArrowRight } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Pre-transaction validation",
    desc: "Check every card against the exposed-card index before authorization. Block compromised cards before the charge ever clears.",
  },
  {
    icon: Bookmark,
    title: "BIN-level watchlist",
    desc: "Watchlist the BINs you issue or accept (up to 256). Get alerted the moment a new compromised card is detected on any of them.",
  },
  {
    icon: Building2,
    title: "Rich issuer attribution",
    desc: "Every match enriched with issuer bank, country, network, type, and tier. Prioritize chargeback prevention by issuer risk.",
  },
  {
    icon: RefreshCcw,
    title: "Validity at query time",
    desc: "Validity is computed every time you query, not pulled from a stale snapshot. You act on what's true right now.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ValueProps() {
  return (
    <section className="relative bg-[#020617] px-6 md:px-10 py-24 border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Compromised-card intelligence <span className="text-blue-500">your fraud stack can call directly</span>
          </h2>
          <p className="text-lg text-slate-400">
            Validate, attribute, watchlist, and alert — the four primitives your fraud team needs against stolen-card volume.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>

              <h3 className="relative text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                {item.title}
              </h3>
              <p className="relative text-sm text-slate-400 leading-relaxed">{item.desc}</p>

              <div className="absolute bottom-4 right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
