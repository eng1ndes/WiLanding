import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TrendingUp, FileWarning, Users, ArrowUpRight } from "lucide-react";

const statMeta = [
  { id: 1, icon: TrendingUp, highlight: true },
  { id: 2, icon: Users, highlight: false },
  { id: 3, icon: FileWarning, highlight: false },
];

export default function AtoRoiSection() {
  const { t } = useTranslation("features");
  const stats = statMeta.map((meta, i) => ({
    ...meta,
    value: t(`ato.roi.stats.${i}.value`),
    label: t(`ato.roi.stats.${i}.label`),
    sub: t(`ato.roi.stats.${i}.sub`, { defaultValue: "" }),
    desc: t(`ato.roi.stats.${i}.description`),
  }));

  return (
    <section className="relative bg-white py-24 px-6 md:px-10 overflow-hidden border-t border-slate-100">
      
      {/* Background: Subtle Graph Paper Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
            backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Radial fade to keep focus in center */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Group */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                 {t("ato.roi.badge")}
               </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t("ato.roi.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">{t("ato.roi.titleHighlight")}</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-sm leading-relaxed text-right md:text-left">
            {t("ato.roi.description")}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                stat.highlight 
                  ? "bg-slate-900 text-white border-slate-900 shadow-2xl md:col-span-1" 
                  : "bg-white text-slate-900 border-slate-200 hover:border-blue-200"
              }`}
            >
              {/* Icon & Label Header */}
              <div className="flex items-start justify-between mb-8">
                <div className={`p-3 rounded-lg ${
                    stat.highlight ? "bg-white/10 text-blue-300" : "bg-blue-50 text-blue-600"
                }`}>
                    <stat.icon className="w-6 h-6" />
                </div>
                {/* Arrow Icon that appears on hover */}
                <ArrowUpRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${
                    stat.highlight ? "text-white" : "text-slate-400"
                }`} />
              </div>

              {/* Big Number */}
              <div className="mt-auto">
                <h3 className={`text-5xl md:text-6xl font-bold tracking-tighter mb-2 ${
                    stat.highlight ? "text-white" : "text-slate-900"
                }`}>
                    {stat.value}
                </h3>
                <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                    stat.highlight ? "text-slate-400" : "text-slate-500"
                }`}>
                    {stat.label}
                </p>
                
                {/* Divider Line */}
                <div className={`h-px w-full my-4 ${
                    stat.highlight ? "bg-white/10" : "bg-slate-100"
                }`} />

                {/* Footer / Description */}
                <div className="flex flex-col gap-1">
                    <p className={`text-sm leading-relaxed ${
                        stat.highlight ? "text-slate-300" : "text-slate-600"
                    }`}>
                        {stat.desc}
                    </p>
                    <p className={`text-[10px] mt-3 uppercase tracking-wider ${
                        stat.highlight ? "text-slate-500" : "text-slate-400"
                    }`}>
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}