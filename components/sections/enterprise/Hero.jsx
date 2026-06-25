import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe, MessageCircle, FileCode, AlertTriangle, ScanLine, Lock } from "lucide-react";

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
      {/* Subtle Grid - No loud gradients */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Soft Vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900 bg-blue-900/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <ShieldCheck className="w-3 h-3" />
            {t("enterprise.badge")}
          </div>

          {/* Headline - SOLID WHITE (No Gradients) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("enterprise.hero.title")}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("enterprise.hero.description")}
          </p>

          {/* CTA Group */}

        </div>

        {/* RIGHT COLUMN: The "Source Scanner" Visual */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[2000px]">
           
           {/* The Scanner Container */}
           <div className="relative w-full aspect-square max-h-[500px] bg-[#0b1229] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header Bar */}
              <div className="h-12 border-b border-white/10 bg-slate-900/50 flex items-center px-4 justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                 </div>
                 <div className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    SCANNING EXTERNAL SOURCES...
                 </div>
              </div>

              {/* The Scanning Area */}
              <div className="relative flex-1 overflow-hidden p-6 grid grid-cols-2 gap-4">
                 
                 {/* Background Grid */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                 {/* Animated Source Cards */}
                 <SourceCard 
                    icon={MessageCircle} 
                    name="Telegram Channels" 
                    detail="Looking for 'employee_chat_logs'" 
                    status="Scanning..." 
                    delay={0}
                 />
                 <SourceCard 
                    icon={Globe} 
                    name="Hacker Forums" 
                    detail="XSS & Exploit.in Threads" 
                    status="Analyzing..." 
                    delay={0.5}
                 />
                 <SourceCard 
                    icon={FileCode} 
                    name="Stealer Logs" 
                    detail="Redline / Raccoon Stealers" 
                    status="Found 3 Matches" 
                    variant="danger" // This one triggers the alert
                    delay={1}
                 />
                 <SourceCard 
                    icon={Lock} 
                    name="Dark Marketplaces" 
                    detail="Genesis Market Listings" 
                    status="Clean" 
                    variant="success"
                    delay={1.5}
                 />

                 {/* The "Laser" Scanner Beam */}
                 <motion.div 
                    className="absolute left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] z-20 pointer-events-none"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 >
                    {/* Scanner Gradient Trail */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                 </motion.div>

              </div>

              {/* Bottom Console Log */}
              <div className="h-32 bg-slate-950 border-t border-white/10 p-4 font-mono text-[10px] text-slate-400 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent h-8 bottom-0 z-10"></div>
                 <div className="space-y-1">
                    <p className="opacity-50">[10:42:01] Initializing scan protocols...</p>
                    <p className="opacity-50">[10:42:02] Connected to threat feeds (140 sources)</p>
                    <p className="text-blue-400">[10:42:03] Telegram: Parsing new messages in #logs...</p>
                    <motion.div 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }} 
                       transition={{ delay: 2, repeat: Infinity, repeatDelay: 3 }}
                       className="text-red-400 bg-red-900/10 p-1 border-l-2 border-red-500 mt-2"
                    >
                       [ALERT] Stealer Log Match: employee@company.com found in "Redline_Logs_2025.zip"
                    </motion.div>
                 </div>
              </div>

           </div>

           {/* Decorative Glow behind the visual */}
           <div className="absolute -inset-4 bg-blue-600/10 blur-2xl -z-10 rounded-[30px]"></div>
        </div>

      </div>
    </section>
  );
};

// Sub-component for the cards inside the scanner
function SourceCard({ icon: Icon, name, detail, status, variant = "default", delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      className={`relative p-4 rounded-xl border flex flex-col gap-3 overflow-hidden ${
         variant === 'danger' ? 'bg-red-900/10 border-red-500/30' : 
         variant === 'success' ? 'bg-green-900/10 border-green-500/30' : 
         'bg-slate-800/50 border-white/5'
      }`}
    >
       {/* Flashing Overlay when scanned (Simulated) */}
       <motion.div 
          className={`absolute inset-0 opacity-0 pointer-events-none ${
             variant === 'danger' ? 'bg-red-500/20' : 'bg-blue-500/20'
          }`}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.2, delay: delay + 1.5, repeat: Infinity, repeatDelay: 3 }}
       />

       <div className="flex items-start justify-between">
          <div className={`p-2 rounded-lg ${
             variant === 'danger' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/10 text-blue-400'
          }`}>
             <Icon className="w-5 h-5" />
          </div>
          {variant === 'danger' && (
             <div className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded animate-pulse">
                THREAT
             </div>
          )}
       </div>
       
       <div>
          <div className="text-sm font-bold text-white mb-0.5">{name}</div>
          <div className="text-[10px] text-slate-400">{detail}</div>
       </div>

       <div className={`text-[10px] font-mono mt-auto pt-2 border-t border-white/5 flex items-center gap-1.5 ${
          variant === 'danger' ? 'text-red-400' : variant === 'success' ? 'text-green-400' : 'text-blue-300'
       }`}>
          {variant === 'danger' ? <AlertTriangle className="w-3 h-3" /> : <ScanLine className="w-3 h-3" />}
          {status}
       </div>
    </motion.div>
  );
}

export default HeroSection;