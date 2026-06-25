import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { trackFreeSignupClick } from "../utils/conversions";

const stepMeta = [
  { id: "1", desktopPos: { left: "16.67%", top: "37.5%" }, position: "top" },
  { id: "2", desktopPos: { left: "50%", top: "37.5%" }, position: "bottom" },
  { id: "3", desktopPos: { left: "83.33%", top: "37.5%" }, position: "top" },
];

const HowItWorks = () => {
  const { t } = useTranslation("home");
  const steps = stepMeta.map((meta, idx) => ({
    ...meta,
    title: t(`howItWorks.steps.${idx}.title`),
    description: t(`howItWorks.steps.${idx}.description`),
  }));
  // Wave Path Definition
  const wavePath = "M 0 300 C 50 300, 100 150, 200 150 S 350 300, 400 300 S 500 150, 600 150 S 750 300, 800 300 S 900 150, 1000 150 S 1150 300, 1200 300";

  return (
    // FIX 1: Added overflow-x-hidden explicitly
    <section className="relative bg-[#020617] py-24 px-6 overflow-x-hidden text-white font-sans">
      
      {/* (Optional) If you have the Top Beams here in your local file, make sure to use responsive widths like: w-[300px] md:w-[600px] */}

      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-base font-bold uppercase tracking-widest">
              {t("howItWorks.badge")}
            </span>
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t("howItWorks.title")} <span className="text-slate-500 font-medium">{t("howItWorks.titleHighlight")}</span>
          </h2>
          <p className="text-slate-300 text-xl md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t("howItWorks.description")}
          </p>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="relative h-[450px] w-full hidden lg:block">
          
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            {/* 1. Base Dark Line */}
            <path d={wavePath} fill="none" stroke="#1e293b" strokeWidth="6" opacity="0.4" />
            
            {/* 2. Constant Data Stream */}
            <motion.path
              d={wavePath}
              fill="none"
              stroke="#475569"
              strokeWidth="2"
              strokeDasharray="4 8"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -240 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              opacity="0.3"
            />

            {/* 3. The Main Pulse Beam */}
            <motion.path
              d={wavePath}
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="4"
              strokeDasharray="200, 1400" 
              strokeLinecap="round"
              initial={{ strokeDashoffset: 1600 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0px 0px 8px rgba(99, 102, 241, 0.6))" }}
            />

            <defs>
              <linearGradient id="beamGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="80%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              style={{ top: step.desktopPos.top, left: step.desktopPos.left }}
              // FIX 2: Responsive Width for Cards
              // lg:w-[300px] -> Fits on 1024px screens without overflow
              // xl:w-[420px] -> Restores full size on large monitors
              className="absolute z-20 w-[300px] xl:w-[420px]" 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                
                {/* 1. THE NODE */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#020617] border-2 border-indigo-500 rounded-full z-30 shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                    <div className="absolute inset-0 w-full h-full rounded-full bg-indigo-400 animate-ping opacity-20" />
                    <div className="absolute inset-[3px] rounded-full bg-white shadow-[0_0_10px_white]" />
                </div>

                {/* 2. THE TEXT CONTENT */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 w-full text-left flex flex-col items-center
                  ${step.position === 'top' 
                    ? '-top-[25px] -translate-y-full' 
                    : 'top-[35px]'
                  }`}
                >
                   {/* Vertical Connector Line */}
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }}
                     whileInView={{ height: 32, opacity: 1 }} 
                     transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                     className={`w-[1px] bg-gradient-to-b from-indigo-500 to-transparent absolute left-1/2 -translate-x-1/2 
                     ${step.position === 'top' 
                        ? '-bottom-8 top-auto rotate-180' 
                        : '-top-8 bottom-auto'
                     }`} 
                   />

                   <div className="px-6 py-2 flex items-start gap-5">
                      {/* Metallic Number */}
                      <span className="text-8xl font-black leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-500 opacity-60 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] select-none">
                        {step.id}
                      </span>
                      
                      <div className="pt-2">
                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-300 text-medium leading-relaxed max-w-[260px]">
                          {step.description}
                        </p>
                      </div>
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="flex flex-col gap-12 lg:hidden relative z-10 mt-10">
          {steps.map((step) => (
            <div key={step.id} className="relative pl-16 border-l border-slate-800 py-2">
               {/* Fixed positioning for mobile robustness */}
               <span className="absolute -left-5 top-0 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-600 opacity-80">
                 {step.id}
               </span>
               <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
               <p className="text-slate-400 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-2 text-center relative z-10">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://platform.whiteintel.io/register" onClick={trackFreeSignupClick} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 border border-white/10">
              {t("howItWorks.startForFree")}
            </a>
            <Link
              to="/contact"
              className="border border-white/30 hover:bg-slate-800/50 px-8 py-4 rounded-xl font-bold transition-all text-slate-300 inline-flex items-center justify-center text-lg"
            >
              {t("howItWorks.contactUs")}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;