import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ScanEye,
  GlobeLock,
  FileText,
  Gavel,
  ArrowRight
} from "lucide-react";

const icons = [ScanEye, GlobeLock, FileText, Gavel];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DomainValueProps() {
  const { t } = useTranslation("features");

  const items = icons.map((icon, idx) => ({
    icon,
    title: t(`lookalike.valueProps.items.${idx}.title`),
    desc: t(`lookalike.valueProps.items.${idx}.description`),
  }));

  return (
    <section className="relative bg-[#020617] px-6 md:px-10 py-24 border-t border-white/5">
      
      {/* Visual Divider: Blue gradient (Original) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {t("lookalike.valueProps.title")} <span className="text-blue-500">{t("lookalike.valueProps.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-slate-400">
            {t("lookalike.valueProps.description")}
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient Glow Effect (Blue) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container (Blue) */}
              <div className="relative mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>

              {/* Text Content (Blue Hover State) */}
              <h3 className="relative text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                {item.title}
              </h3>
              <p className="relative text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
              
              {/* Arrow Anchor (Blue) */}
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