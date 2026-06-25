import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, ScanSearch, Crosshair, Terminal, Bug, AlertTriangle, Code2, Globe } from "lucide-react";
import { trackFreeSignupClick } from "../../../utils/conversions";

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
      
      {/* 2. Emerald Green Glow (Hacker/Terminal Vibe) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            <ScanSearch className="w-3 h-3" />
            {t("vuln.hero.badge")}
          </div>

          {/* Headline (Solid White) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("vuln.hero.title")} <br />
            <span className="text-emerald-400">{t("vuln.hero.titleHighlight")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("vuln.hero.description")} <span className="text-white font-medium">{t("vuln.hero.descriptionHighlight")}</span> {t("vuln.hero.descriptionSuffix")}
          </p>

{/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            
            {/* 1. Start Scanning (External App Link) */}
            <a
              href="https://platform.whiteintel.io/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackFreeSignupClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"
            >
              {t("vuln.hero.cta")}
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* 2. API Docs (External Docs Link) */}
            <a 
              href="https://docs.whiteintel.io"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
            >
              {t("vuln.hero.ctaSecondary")}
            </a>

          </div>
        </div>

        {/* RIGHT COLUMN: The "Recon HUD" Visual */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[2000px]">
           
           {/* The Container */}
           <div className="relative w-full aspect-square max-h-[500px] bg-[#0b1229] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono">
              
              {/* Header */}
              <div className="h-12 border-b border-white/10 bg-slate-900/50 flex items-center px-4 justify-between">
                 <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Terminal className="w-4 h-4" />
                    <span className="text-emerald-500">root@recon:~/scans $</span>
                    <span className="animate-pulse">_</span>
                 </div>
                 <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 flex items-center gap-2">
                    <Crosshair className="w-3 h-3" />
                    TARGET ACQUIRED
                 </div>
              </div>

              {/* The Scanner Interface */}
              <div className="relative flex-1 p-6 flex flex-col gap-4">
                 
                 {/* Background Grid */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                 {/* Command Line */}
                 <div className="text-xs text-slate-300 mb-2">
                    {">"} whiteintel scan --domain target-corp.com --depth full
                 </div>

                 {/* Scan Results */}
                 <div className="space-y-3 relative z-10">
                    
                    {/* Item 1: Subdomain Found */}
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                       className="bg-slate-800/50 border border-white/5 p-3 rounded flex items-center justify-between"
                    >
                       <div className="flex items-center gap-3">
                          <Globe className="w-4 h-4 text-slate-400" />
                          <div className="text-xs text-slate-300">target-corp.com</div>
                       </div>
                       <span className="text-[10px] text-slate-500">200 OK</span>
                    </motion.div>

                    {/* Item 2: Hidden Asset */}
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }}
                       className="bg-slate-800/50 border border-white/5 p-3 rounded flex items-center justify-between"
                    >
                       <div className="flex items-center gap-3">
                          <Code2 className="w-4 h-4 text-blue-400" />
                          <div className="text-xs text-slate-300">dev-api.target-corp.com</div>
                       </div>
                       <span className="text-[10px] text-blue-400 border border-blue-500/20 px-1 rounded">EXPOSED</span>
                    </motion.div>

                    {/* Item 3: CRITICAL FINDING */}
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }}
                       className="bg-emerald-900/10 border border-emerald-500/30 p-3 rounded flex items-center justify-between shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                    >
                       <div className="flex items-center gap-3">
                          <Bug className="w-4 h-4 text-emerald-400" />
                          <div>
                             <div className="text-xs text-white font-bold">jira.target-corp.com</div>
                             <div className="text-[10px] text-emerald-400/80">Matched: Stealer Log #4421</div>
                          </div>
                       </div>
                       <span className="text-[10px] bg-emerald-500 text-black font-bold px-2 py-0.5 rounded animate-pulse">
                          PWNED
                       </span>
                    </motion.div>
                 </div>

                 {/* Detail Card Overlay (The "Loot") */}
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.2 }}
                    className="mt-auto bg-slate-900 border border-white/10 rounded-lg p-4 shadow-2xl relative overflow-hidden"
                 >
                    {/* Glowing Border */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    
                    <div className="flex items-center gap-2 mb-2">
                       <AlertTriangle className="w-4 h-4 text-yellow-400" />
                       <span className="text-xs font-bold text-white">Credential Dump Found</span>
                    </div>
                    <div className="bg-black/50 p-2 rounded text-[10px] text-slate-400 font-mono">
                       <div>User: admin@target-corp.com</div>
                       <div className="flex gap-2">
                          <span>Pass:</span>
                          <span className="text-emerald-400 blur-[2px] hover:blur-none transition-all cursor-pointer">Sup3rS3cr3t!</span>
                       </div>
                       <div className="text-slate-600 mt-1">Source: Redline Stealer (24h ago)</div>
                    </div>
                 </motion.div>

              </div>
           </div>

           {/* Decorative Glow */}
           <div className="absolute -inset-4 bg-emerald-600/10 blur-2xl -z-10 rounded-[30px]"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;