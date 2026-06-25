import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Server, Users, Laptop, Lock, AlertTriangle, Network } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation("features");
  const [navHeight, setNavHeight] = useState(64);

  useEffect(() => {
    const nav = document.getElementById("nav-root");
    const measure = () => {
      if (nav) setNavHeight(nav.offsetHeight || 64);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      className="relative w-full bg-[#020617] text-white overflow-hidden"
      style={{
        paddingTop: `calc(${navHeight}px + 4rem)`,
        paddingBottom: "6rem",
      }}
    >
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Engineering Grid (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* 2. Soft Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Text */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900 bg-blue-900/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Network className="w-3 h-3" />
            {t("ad.hero.badge")}
          </div>

          {/* Headline (Solid White) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("ad.hero.title")} <br />
            {t("ad.hero.titleLine2")}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("ad.hero.description")} <span className="text-white font-medium">{t("ad.hero.descriptionHighlight")}</span> {t("ad.hero.descriptionSuffix")}
          </p>

          {/* CTA Group */}

        </div>

        {/* RIGHT COLUMN: Network Topology Visual */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[2000px]">
           
           {/* The Container */}
           <div className="relative w-full aspect-square max-h-[500px] bg-[#0b1229] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="h-12 border-b border-white/10 bg-slate-900/50 flex items-center px-4 justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                 </div>

              </div>

              {/* The Network Map */}
              <div className="relative flex-1 p-8 flex flex-col items-center justify-center">
                 
                 {/* Background Grid */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                 {/* LEVEL 1: Domain Controller (Root) */}
                 <div className="relative z-20 mb-16">
                    <div className="w-20 h-20 rounded-2xl bg-blue-600 border border-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center relative">
                       <Server className="w-8 h-8 text-white" />
                       {/* Pulsing Ring */}
                       <div className="absolute inset-0 rounded-2xl border border-blue-400/50 animate-ping"></div>
                    </div>
                    <div className="absolute -right-24 top-6 text-xs text-blue-400 font-mono bg-blue-900/20 px-2 py-1 rounded border border-blue-500/30">
                       {t("ad.hero.domainController")}
                    </div>
                 </div>

                 {/* Connector Lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {/* Lines from Root to Children */}
                    <line x1="50%" y1="35%" x2="20%" y2="65%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                    <line x1="50%" y1="35%" x2="50%" y2="65%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                    <line x1="50%" y1="35%" x2="80%" y2="65%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                 </svg>

                 {/* LEVEL 2: Assets */}
                 <div className="grid grid-cols-3 gap-8 w-full relative z-20">
                    
                    {/* Node 1: User (Safe) */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-14 h-14 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center">
                          <Users className="w-6 h-6 text-slate-400" />
                       </div>
                       <span className="text-[10px] text-slate-500">CORP\J.Doe</span>
                       <span className="text-[9px] text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">{t("ad.hero.statusActive")}</span>
                    </div>

                    {/* Node 2: Admin (Safe) */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-14 h-14 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center">
                          <ShieldCheck className="w-6 h-6 text-blue-400" />
                       </div>
                       <span className="text-[10px] text-slate-500">CORP\Admin</span>
                       <span className="text-[9px] text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">{t("ad.hero.statusSecure")}</span>
                    </div>

                    {/* Node 3: Device (Compromised) */}
                    <div className="flex flex-col items-center gap-2 relative">
                       {/* The Node Box */}
                       <motion.div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center border transition-colors duration-500"
                          animate={{ 
                             backgroundColor: ["#1e293b", "#450a0a", "#1e293b"], 
                             borderColor: ["rgba(255,255,255,0.1)", "rgba(239,68,68,0.8)", "rgba(255,255,255,0.1)"] 
                          }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                       >
                          <Laptop className="w-6 h-6 text-slate-400" />
                       </motion.div>
                       
                       <span className="text-[10px] text-slate-500">WS-FIN-04</span>
                       
                       {/* Status Tag Animation */}
                       <motion.div 
                          className="text-[9px] px-1.5 py-0.5 rounded font-bold"
                          animate={{ 
                             backgroundColor: ["rgba(34,197,94,0.1)", "rgba(239,68,68,0.2)", "rgba(100,116,139,0.2)"],
                             color: ["#4ade80", "#f87171", "#94a3b8"],
                          }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                       >
                          <StatusText />
                       </motion.div>

                       {/* Lock Overlay Animation */}
                       <motion.div
                          className="absolute -top-4 right-0 bg-slate-900 border border-red-500 text-red-500 p-1.5 rounded-lg shadow-xl z-30"
                          initial={{ opacity: 0, scale: 0, y: 10 }}
                          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5], y: [10, 0, 0, 10] }}
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, times: [0, 0.1, 0.9, 1] }}
                       >
                          <Lock className="w-4 h-4" />
                       </motion.div>

                    </div>

                 </div>

                 {/* Scanning Effect Overlay */}
                 <motion.div 
                    className="absolute top-0 w-full h-[2px] bg-blue-500/50 blur-[2px] z-10 pointer-events-none"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 />

              </div>

              {/* Bottom Logs */}
              <div className="h-28 bg-slate-950 border-t border-white/10 p-4 font-mono text-[10px] text-slate-400">
                 <p className="opacity-50">{t("ad.hero.logSync")}</p>
                 <p className="opacity-50">{t("ad.hero.logMonitoring")}</p>
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                    className="text-red-400 mt-1"
                 >
                    {t("ad.hero.logAlert")}
                    <br />
                    <span className="text-yellow-500">{t("ad.hero.logAction")}</span>
                 </motion.div>
              </div>

           </div>

           {/* Decorative Glow */}
           <div className="absolute -inset-4 bg-blue-600/10 blur-2xl -z-10 rounded-[30px]"></div>
        </div>

      </div>
    </section>
  );
};

// Helper component to cycle text
const StatusText = () => {
    const { t } = useTranslation("features");
    const [text, setText] = useState(t("ad.hero.statusOnline"));

    useEffect(() => {
        const interval = setInterval(() => {
            // Cycle: Online -> Infected -> Isolated -> Online
            setTimeout(() => setText(t("ad.hero.statusInfected")), 100);
            setTimeout(() => setText(t("ad.hero.statusIsolated")), 1500);
            setTimeout(() => setText(t("ad.hero.statusOnline")), 3800);
        }, 6000); // Total cycle length matches parent animation (4s + 2s delay)
        return () => clearInterval(interval);
    }, [t]);

    return <>{text}</>;
}

export default HeroSection;