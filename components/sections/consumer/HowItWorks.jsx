import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  DatabaseZap,
  ScanLine,
  UserX,
  KeyRound,
  ShieldAlert,
  ArrowRight
} from "lucide-react";

const stepMeta = [
  { id: "ingest", icon: DatabaseZap },
  { id: "parse", icon: ScanLine },
  { id: "match", icon: UserX },
  { id: "reset", icon: KeyRound },
  { id: "block", icon: ShieldAlert },
];

export default function ConsumerProtectionHowItWorksLight() {
  const { t } = useTranslation("features");

  const steps = stepMeta.map((meta, idx) => ({
    ...meta,
    phase: t(`consumer.howItWorks.steps.${idx}.phase`),
    title: t(`consumer.howItWorks.steps.${idx}.title`),
    desc: t(`consumer.howItWorks.steps.${idx}.description`),
  }));

  return (
    <section className="relative bg-slate-50 px-6 md:px-10 py-24 overflow-hidden border-t border-slate-200">
      
      {/* Background Pattern (Subtle Red Grid on Light) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
            backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(to right, #ef4444 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Radial fade to blend edges into background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_90%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-red-200">
            {t("consumer.howItWorks.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            {t("consumer.howItWorks.title")} <span className="text-red-600">{t("consumer.howItWorks.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t("consumer.howItWorks.description")}
          </p>
        </div>

        {/* --- THE PIPELINE VISUAL --- */}
        <div className="relative">
          
          {/* 1. Connecting Line (Background) - Light Gray */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[3px] bg-slate-200 rounded-full overflow-hidden">
             {/* The "Pulse" Beam Animation (Red) */}
             <motion.div 
               className="h-full w-1/3 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-sm"
               animate={{ x: ["-100%", "400%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {/* 2. Steps Grid */}
          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((s, i) => (
              <div key={s.id} className="relative flex flex-col items-center group">
                
                {/* Phase Label (Desktop visible) */}
                <div className="hidden md:block absolute -top-12 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                   {/* Only show phase label on the first item of that phase */}
                   {(i === 0 || steps[i-1].phase !== s.phase) && (
                      <span className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm text-red-600">
                        {s.phase}
                      </span>
                   )}
                </div>

                {/* Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="w-full bg-white p-6 pt-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center h-full"
                >
                  {/* Active Highlight Border on Top */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Icon */}
                  <div className="relative mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
                    <s.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-red-700 transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>

                {/* Connector Arrow (Desktop Only) */}
                {i !== steps.length - 1 && (
                   <div className="hidden md:block absolute -right-[1.25rem] top-[60px] z-0 text-slate-300">
                      <ArrowRight className="w-5 h-5" />
                   </div>
                )}
                
                {/* Connector Line (Mobile Only) */}
                {i !== steps.length - 1 && (
                   <div className="md:hidden h-8 w-[2px] bg-slate-200 my-2"></div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}