import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  AlertTriangle,
  Network,
  SearchCode,
  ArrowUpRight,
  Activity
} from "lucide-react";

const DomainMonitoringHero = () => {
  const { t } = useTranslation("features");
  const [navHeight, setNavHeight] = useState(64);

  // Measure Navbar height to ensure perfect spacing
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
      {/* Cyan/Blue Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(to right, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Vignette & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-900/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* LEFT COLUMN: Hero Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Globe className="w-3 h-3" />
            {t("lookalike.hero.badge")}
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("lookalike.hero.title")} <br />
            {t("lookalike.hero.titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t("lookalike.hero.titleHighlight")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("lookalike.hero.description")}
          </p>

          {/* Buttons */}


        </div>

        {/* RIGHT COLUMN: The Visual (The "Radar" Map) */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[1000px]">
           
           {/* Main Container */}
           <div className="relative w-full aspect-[4/3] bg-[#0b1229] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header UI */}
              <div className="h-10 border-b border-white/5 bg-slate-900/80 flex items-center px-4 justify-between backdrop-blur-sm z-20">
                 <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Network className="w-3 h-3" />
                    <span>Whiteintel Scanner</span>
                 </div>
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                 </div>
              </div>

              {/* The "Radar" Viewport */}
              <div className="relative flex-1 bg-[#020617] overflow-hidden flex items-center justify-center">
                 
                 {/* Radar Grid Circles */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-[150px] h-[150px] border border-cyan-500 rounded-full"></div>
                    <div className="w-[300px] h-[300px] border border-cyan-500 rounded-full absolute"></div>
                    <div className="w-[450px] h-[450px] border border-cyan-500 rounded-full absolute border-dashed"></div>
                 </div>

                 {/* The Rotating Radar Sweep */}
                 <motion.div 
                    className="absolute w-[450px] h-[450px] rounded-full pointer-events-none z-0"
                    style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(6,182,212,0.1) 60deg, transparent 60deg)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 />

                 {/* CENTER NODE (Your Brand) */}
                 <div className="absolute z-20 flex flex-col items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] border-4 border-[#0b1229] z-20 relative">
                       <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-2 px-2 py-0.5 bg-cyan-900/50 border border-cyan-500/30 rounded text-[10px] text-cyan-200 font-mono backdrop-blur-sm">
                       acme-corp.com
                    </div>
                 </div>

                 {/* ORBITING NODES (Threats) */}
                 {/* Node 1: Typosquatting (Right Top) */}
                 <ThreatNode 
                    x={80} y={-60} 
                    delay={0.5} 
                    domain="acrne-corp.com" 
                    type="Typosquatting" 
                    risk="High"
                 />

                 {/* Node 2: TLD Variant (Left Bottom) */}
                 <ThreatNode 
                    x={-90} y={40} 
                    delay={1.8} 
                    domain="acme-corp.net" 
                    type="TLD Variant" 
                    risk="Medium"
                    color="yellow"
                 />

                 {/* Node 3: Homoglyph (Right Bottom - Far) */}
                 <ThreatNode 
                    x={120} y={90} 
                    delay={2.9} 
                    domain="acmẹ-corp.com" 
                    type="Homoglyph" 
                    risk="Critical"
                    color="red"
                 />
                 
                 {/* Decorative Background Dots (Innocent domains) */}
                 <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                 <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                 <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-slate-800 rounded-full"></div>

              </div>

              {/* Bottom "Live Feed" Panel */}
              <div className="h-40 bg-slate-950 border-t border-white/10 p-4 font-mono text-[11px] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 text-[10px] text-cyan-500/70 font-bold tracking-wider flex items-center gap-1">
                    <Activity className="w-3 h-3" /> LIVE FEED
                 </div>
                 <div className="flex flex-col gap-2 mt-2">
                    <FeedItem 
                       time="10:42:01" 
                       msg="New registration detected: acme-suport.com" 
                       status="ANALYZING" 
                       color="text-slate-400"
                    />
                    <FeedItem 
                       time="10:42:05" 
                       msg="Visual similarity score: 98% (Phishing Risk)" 
                       status="ALERT" 
                       color="text-red-400" 
                    />
                    <FeedItem 
                       time="10:42:06" 
                       msg="MX Records found. Email active." 
                       status="WARNING" 
                       color="text-orange-400"
                    />
                    <FeedItem 
                       time="10:42:08" 
                       msg="Takedown request auto-drafted." 
                       status="ACTION" 
                       color="text-cyan-400"
                    />
                 </div>
                 {/* Fade out bottom */}
                 <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950 to-transparent"></div>
              </div>

           </div>
           
           {/* Background Glow for visual depth */}
           <div className="absolute -inset-4 bg-cyan-600/10 blur-3xl -z-10 rounded-full"></div>

        </div>

      </div>
    </section>
  );
};

// --- Sub-component: Threat Node ---
// Represents a dot on the radar that expands into details when "scanned"
const ThreatNode = ({ x, y, delay, domain, type, risk, color = "red" }) => {
   
   // Color configs
   const colors = {
      red: { bg: "bg-red-500", border: "border-red-500/30", text: "text-red-400", glow: "shadow-red-500/50" },
      yellow: { bg: "bg-yellow-500", border: "border-yellow-500/30", text: "text-yellow-400", glow: "shadow-yellow-500/50" },
   };
   // Removed TypeScript 'as keyof typeof colors' casting
   const c = colors[color] || colors.red;

   return (
      <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: [0, 1, 1], scale: [0.5, 1, 1] }}
         transition={{ delay: delay, duration: 0.5, times: [0, 0.5, 1] }}
         className="absolute flex items-center gap-3 z-10"
         style={{ transform: `translate(${x}px, ${y}px)` }}
      >
         {/* The Dot */}
         <div className={`relative w-3 h-3 ${c.bg} rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] ${c.glow}`}>
            {/* Ping effect ring */}
            <div className={`absolute -inset-2 rounded-full border ${c.border} opacity-50 animate-ping`}></div>
         </div>

         {/* The Label Card (pops out) */}
         <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.2 }}
            className={`hidden sm:block bg-slate-900/90 backdrop-blur border ${c.border} px-3 py-2 rounded-lg shadow-xl w-40`}
         >
            <div className="text-white font-bold text-xs mb-1 flex justify-between items-center">
               {domain}
               <ArrowUpRight className="w-3 h-3 opacity-50" />
            </div>
            <div className="flex flex-col gap-0.5">
               <span className="text-[10px] text-slate-400 uppercase tracking-wider">{type}</span>
               <span className={`text-[10px] font-bold ${c.text} flex items-center gap-1`}>
                  <AlertTriangle className="w-2.5 h-2.5" />
                  RISK: {risk.toUpperCase()}
               </span>
            </div>
         </motion.div>
      </motion.div>
   );
};

// --- Sub-component: Feed Item (Text Typewriter effect) ---
// Removed TypeScript type annotations
const FeedItem = ({ time, msg, status, color }) => {
   return (
      <div className="flex gap-3 items-start opacity-80">
         <span className="text-slate-600">[{time}]</span>
         <span className={`${color} font-bold min-w-[60px]`}>{status}</span>
         <span className="text-slate-300">{msg}</span>
      </div>
   );
};

export default DomainMonitoringHero;