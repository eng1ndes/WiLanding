import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, LayoutDashboard, Book, ChevronRight, Activity, ShieldAlert, Globe } from "lucide-react";
import { motion } from "framer-motion";

function TourSectionAto() {
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
      className="relative overflow-hidden bg-[#020617] text-white flex items-center"
      style={{
        paddingTop: `calc(${navHeight}px + 4rem)`,
        paddingBottom: "6rem",
      }}
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* --- MAIN CONTENT (Grid Layout) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: Text */}
        <div className="flex flex-col items-start text-left">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t("platform.badge")}
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
          >
            {t("platform.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
              {t("platform.titleHighlight")}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg"
          >
            {t("platform.description")}
          </motion.p>

          {/* Buttons */}
          <motion.div 
             initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
             className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
<a 
              href="https://knowledge.whiteintel.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] transition-all hover:scale-105"
            >
              {t("platform.cta")}
              <Book className="w-4 h-4" />
            </a>
            
            <a 
              href="https://docs.whiteintel.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl backdrop-blur-sm transition-colors"
            >
              {t("platform.ctaSecondary")}
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Dynamic 3D Visual */}
        <div className="relative w-full h-[500px] perspective-[2000px] flex items-center justify-center">
            
            {/* The Floating Dashboard Card */}
            <motion.div 
              className="relative w-full max-w-lg aspect-[4/3] bg-[#0b1229]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
              initial={{ rotateY: -15, rotateX: 5 }}
              animate={{ 
                rotateY: [-15, -10, -15], 
                rotateX: [5, 0, 5],
                y: [0, -10, 0] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
               {/* 1. Header Bar */}
               <div className="h-10 border-b border-white/5 bg-slate-900/50 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-[10px] text-blue-400 font-mono bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                     LIVE FEED
                  </div>
               </div>

               {/* 2. Dashboard Body */}
               <div className="p-5 relative h-full">
                  
                  {/* Grid Background inside Dashboard */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                  {/* Top Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                     <div className="p-3 rounded-lg bg-slate-800/50 border border-white/5">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Active Threats</div>
                        <div className="text-xl font-bold text-white flex items-center gap-2">
                           2,401 
                           <Activity className="w-4 h-4 text-red-400 animate-pulse" />
                        </div>
                     </div>
                     <div className="p-3 rounded-lg bg-slate-800/50 border border-white/5">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Creds Monitored</div>
                        <div className="text-xl font-bold text-white">14.2M</div>
                     </div>
                  </div>

                  {/* Dynamic Graph Area */}
                  <div className="h-24 w-full bg-slate-800/30 rounded-lg border border-white/5 mb-4 relative overflow-hidden group">
                     {/* Moving Graph Line */}
                     <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                        <motion.path 
                           d="M0,60 Q30,55 50,40 T100,30 T150,50 T200,20 T250,40 T300,30 T350,60 T400,20 L400,100 L0,100 Z" 
                           fill="url(#gradient)" 
                           stroke="rgba(59,130,246,0.6)" 
                           strokeWidth="2"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <defs>
                           <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                           </linearGradient>
                        </defs>
                     </svg>
                  </div>

                  {/* Scrolling Log Feed */}
<div className="space-y-2 overflow-hidden h-[140px] relative">
  {/* Fade out gradient at the bottom */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1229] z-10 pointer-events-none"></div>
  
  {/* We map through specific data objects instead of numbers now */}
  {[
    { title: "Corporate Credential Leaks Detected", meta: "254 affected users" },
    { title: "Consumer Credential Leaks Detected", meta: "Source: Breach Comps" },
    { title: "Dark Web Mention Detected", meta: "XSS Underground Forum" },
    { title: "New Lookalike Domain Detected", meta: "whiteintel-support.io" },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 text-xs"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      // Use index instead of 'i' for the delay calculation
      transition={{ delay: index * 0.5, duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        {/* You can optionally change the icon color based on severity here */}
        <ShieldAlert className="w-3 h-3 text-red-400" />
        <span className="text-slate-300 font-medium">{item.title}</span>
      </div>
      {/* Display relevant metadata instead of IP */}
      <span className="text-slate-500 font-mono text-[10px] truncate max-w-[100px]">
        {item.meta}
      </span>
    </motion.div>
  ))}
</div>

                  {/* The "Scanner" Beam Effect */}
                  <motion.div 
                     className="absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 pointer-events-none opacity-50"
                     animate={{ top: ["0%", "100%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
               </div>

               {/* Reflection Shine */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-xl"></div>
            </motion.div>

            {/* Glowing Map Behind the Card (Depth Layer) */}
            <motion.div 
               className="absolute -z-10 w-[120%] h-[120%] opacity-30"
               animate={{ rotate: 360 }}
               transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
               <Globe className="w-full h-full text-blue-900 stroke-[0.2]" />
            </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20" />
    </section>
  );
}

export default TourSectionAto;