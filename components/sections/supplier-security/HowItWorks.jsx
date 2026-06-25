import { motion } from "framer-motion";
import { ListChecks, Radar, Gauge, BellRing, ChevronRight } from "lucide-react";

const STEPS = [
  {
    icon: ListChecks,
    title: "Add your suppliers",
    desc: "Track each vendor by domain. Assign a tier and metadata (size, country, industry, category, notes) so risk maps to your portfolio structure.",
  },
  {
    icon: Radar,
    title: "We monitor continuously",
    desc: "Automated scheduled re-scans and near-real-time updates from infostealer logs, combolists, breach databases, and dark web channels.",
  },
  {
    icon: Gauge,
    title: "Score and evidence",
    desc: "Each supplier gets a 0–100 risk score, an A–F grade, a 24-month exposure timeline, and a plain-language findings summary.",
  },
  {
    icon: BellRing,
    title: "Alerted on new exposure",
    desc: "Email alerts the moment a new critical exposure, a new live session cookie, or a worsening grade appears. Severity-tiered and de-duplicated.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItWorks() {
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            From vendor list to early warning, in four steps
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            You define the portfolio. We do the monitoring, the scoring, and the alerting.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-4 gap-6 relative"
        >
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>

          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center z-10 group"
            >
              <div className="w-full h-full bg-white p-6 pt-0 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative -mt-6 mb-4 mx-auto w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                  <s.icon className="w-6 h-6" />
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Step 0{i + 1}
                </div>

                <h4 className="font-bold text-slate-900 text-lg mb-3">{s.title}</h4>

                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>

              {i !== STEPS.length - 1 && (
                <div className="md:hidden h-8 w-px bg-slate-300 my-2"></div>
              )}

              {i !== STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-[1.75rem] top-16 text-slate-300 z-0">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
