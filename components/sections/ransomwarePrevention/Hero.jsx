import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Lock, DoorOpen, FileKey, Skull, Ban, Search } from "lucide-react";

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
      {/* 1. Engineering Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* 2. Red/Orange Threat Glow (Subtle warning vibe) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-900 bg-red-900/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            <ShieldAlert className="w-3 h-3" />
            {t("ransomware.hero.badge")}
          </div>

          {/* Headline (Solid White) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("ransomware.hero.title")} <br />
            {t("ransomware.hero.titleLine2")}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("ransomware.hero.description")} <span className="text-white font-medium">{t("ransomware.hero.descriptionHighlight")}</span> {t("ransomware.hero.descriptionSuffix")}
          </p>

        </div>

        {/* RIGHT COLUMN: The "Kill Chain" Interceptor */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[2000px]">
           
           {/* The Container */}
           <div className="relative w-full aspect-square max-h-[500px] bg-[#0b1229] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="h-12 border-b border-white/10 bg-slate-900/50 flex items-center px-4 justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                 </div>
                 <div className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    {t("ransomware.hero.killChainMonitor")}
                 </div>
              </div>

              {/* The Visual Area */}
              <div className="relative flex-1 p-8 flex flex-col justify-center gap-8">
                 
                 {/* Background Grid */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                 {/* STAGE 1: INITIAL ACCESS (The Focus) */}
                 <div className="relative z-10">
                    <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                       <span>{t("ransomware.hero.stage1Label")}</span>
                       <span className="text-red-400 animate-pulse">{t("ransomware.hero.detected")}</span>
                    </div>
                    
                    <motion.div 
                       className="bg-slate-800 border border-white/10 p-4 rounded-xl flex items-center gap-4 relative overflow-hidden"
                       initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                    >
                       <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300">
                          <DoorOpen className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-white font-bold text-sm">{t("ransomware.hero.vpnCredential")}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{t("ransomware.hero.sourceHackerForum")}</div>
                       </div>
                       
                       {/* The Interceptor Overlay */}
                       <motion.div 
                          className="absolute inset-0 bg-blue-600/90 flex items-center justify-center gap-2 backdrop-blur-sm"
                          initial={{ opacity: 0 }} 
                          animate={{ opacity: [0, 1, 1, 0] }} 
                          transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, delay: 1 }}
                       >
                          <Ban className="w-6 h-6 text-white" />
                          <span className="text-white font-bold tracking-widest">{t("ransomware.hero.blocked")}</span>
                       </motion.div>
                    </motion.div>
                 </div>

                 {/* Connector Arrow */}
                 <div className="flex justify-center -my-2 opacity-30">
                    <div className="h-8 w-px bg-white"></div>
                 </div>

                 {/* STAGE 2: ENCRYPTION (Prevented) */}
                 <div className="relative z-10 opacity-50 grayscale">
                    <div className="flex justify-between text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                       <span>{t("ransomware.hero.stage2Label")}</span>
                       <span>{t("ransomware.hero.prevented")}</span>
                    </div>
                    
                    <div className="bg-slate-900 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500">
                          <FileKey className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-slate-300 font-bold text-sm">{t("ransomware.hero.ransomwarePayload")}</div>
                          <div className="text-[10px] text-slate-600 font-mono">LockBit / Conti</div>
                       </div>
                    </div>
                 </div>

                 {/* STAGE 3: EXTORTION (Prevented) */}
                 <div className="relative z-10 opacity-30 grayscale">
                    <div className="flex justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                       <span>{t("ransomware.hero.stage3Label")}</span>
                    </div>
                    
                    <div className="bg-slate-950 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                       <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-600">
                          <Skull className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-slate-500 font-bold text-sm">{t("ransomware.hero.dataLeakSite")}</div>
                          <div className="text-[10px] text-slate-700 font-mono">{t("ransomware.hero.publicExposure")}</div>
                       </div>
                    </div>
                 </div>

              </div>

              {/* Scanner Line Overlay */}
              <motion.div 
                 className="absolute top-0 left-0 right-0 h-1 bg-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.5)] z-20 pointer-events-none"
                 animate={{ top: ["15%", "35%"] }} // Only scans the top part (Initial Access)
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
              />

           </div>

           {/* Decorative Glow */}
           <div className="absolute -inset-4 bg-red-600/10 blur-2xl -z-10 rounded-[30px]"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;