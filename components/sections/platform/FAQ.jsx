import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const { t } = useTranslation("common");
  const faqs = Array.from({ length: 10 }, (_, idx) => ({
    question: t(`faq.items.${idx}.question`),
    answer: t(`faq.items.${idx}.answer`),
  }));
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#020617] px-6 md:px-10 py-24 overflow-hidden border-t border-white/5">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]" 
        style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
        }}
      ></div>
      
      {/* Soft gradient fade from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-500/20">
            <HelpCircle className="w-3 h-3" />
            {t("faq.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("faq.description")}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "bg-slate-900/40 border-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)]" 
                    : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg transition-colors duration-300 ${
                    isOpen ? "text-blue-400" : "text-slate-200 group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? "bg-blue-500/20 border-blue-500/30 text-blue-400 rotate-180" 
                      : "bg-transparent border-white/10 text-slate-400 group-hover:border-white/30 group-hover:text-white"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-transparent">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}