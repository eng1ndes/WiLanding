import { Link } from "react-router-dom";
import {
  Eye, Cpu, Info, Share2, Plug,
  Headphones, BadgeDollarSign, Zap, ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const benefitIcons = [Eye, Cpu, Info, Share2, Plug, Headphones, BadgeDollarSign, Zap];

const KeyBenefitsSection = () => {
  const { t } = useTranslation("home");
  const benefits = benefitIcons.map((Icon, idx) => ({
    icon: <Icon size={20} />,
    title: t(`benefits.items.${idx}.title`),
    description: t(`benefits.items.${idx}.description`),
  }));
  return (
    <section className="relative bg-[#020617] py-24 px-6 md:px-12 text-white overflow-hidden">
      {/* Structural Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(30,58,138,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="max-w-4xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            {t("benefits.badge")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
          >
            {t("benefits.title")} <span className="text-slate-400 font-medium">{t("benefits.titleHighlight")}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {t("benefits.description")}
          </motion.p>
        </header>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-500"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.02] rounded-2xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-100 flex items-center justify-between">
                  {item.title}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeyBenefitsSection;