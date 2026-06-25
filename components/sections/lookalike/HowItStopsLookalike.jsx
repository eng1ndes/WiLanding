import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  FileCode,
  BellRing,
  ChevronRight
} from "lucide-react";

const stepIcons = [Globe, Search, FileCode, BellRing];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HowItStopsImpersonation() {
  const { t } = useTranslation("features");

  const steps = stepIcons.map((icon, idx) => ({
    icon,
    title: t(`lookalike.howItStops.items.${idx}.title`),
    desc: t(`lookalike.howItStops.items.${idx}.description`),
  }));

  return (
    <section className="relative bg-white text-slate-900 px-6 md:px-10 py-24 overflow-hidden">
      
      {/* Background Pattern (Subtle Dots for Texture) */}
      <div className="absolute inset-0 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.4 }}>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
            {t("lookalike.howItStops.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            {t("lookalike.howItStops.title")} <span className="text-blue-600">{t("lookalike.howItStops.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("lookalike.howItStops.description")}
          </p>
        </div>

        {/* Process Flow Grid - Updated to 4 Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-4 gap-6 relative"
        >
          {/* Connecting Line (Desktop Only) - sits behind cards */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>

          {steps.map((s, i) => (
            <motion.div 
              key={s.title} 
              variants={itemVariants}
              className="relative flex flex-col items-center text-center z-10 group"
            >
              {/* Card Container */}
              <div className="w-full h-full bg-white p-6 pt-0 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                
                {/* Icon Wrapper (Floating on top border) */}
                <div className="relative -mt-6 mb-4 mx-auto w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
                  <s.icon className="w-6 h-6" />
                </div>

                {/* Step Number */}
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {t("lookalike.howItStops.stepLabel")} 0{i + 1}
                </div>

                {/* Title */}
                <h4 className="font-bold text-slate-900 text-lg mb-3">
                  {s.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Mobile Connector (Vertical Line) */}
              {i !== steps.length - 1 && (
                <div className="md:hidden h-8 w-px bg-slate-300 my-2"></div>
              )}

              {/* Desktop Connector (Chevron) */}
              {i !== steps.length - 1 && (
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