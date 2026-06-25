import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useTranslation } from "react-i18next";

function Counter({ value, suffix, start, delay }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, value, {
      duration: 2.2,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, value, delay]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

const StatsSection = () => {
  const { t, i18n } = useTranslation("home");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const STATS = [
    { value: 80, suffix: "M+", label: t("stats.stealerLogs") },
    { value: 15, suffix: "B+", label: t("stats.uniqueCredentials") },
    { value: 11, suffix: "K+", label: t("stats.threatActors") },
    { value: 83, suffix: "K+", label: t("stats.darkWebEvents") },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-[#020617] py-24 md:py-32 px-6 overflow-x-hidden text-white font-sans"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-indigo-600/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span lang={i18n.resolvedLanguage} className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-base font-bold uppercase tracking-widest">
              {t("stats.badge")}
            </span>
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t("stats.title")}{" "}
            <span className="text-slate-500 font-medium">{t("stats.titleHighlight")}</span>
          </h2>
          <p className="text-slate-300 text-xl md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t("stats.description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-12 md:gap-0">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`flex-1 text-center px-4 md:px-8 ${
                idx > 0 ? "md:border-l md:border-white/[0.06]" : ""
              }`}
            >
              <div className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-tight mb-6 tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} start={inView} delay={idx * 0.12} />
              </div>
              <div className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
