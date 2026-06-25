import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Globe2, Building2, Share2, Activity, CheckCircle2 } from "lucide-react";

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
      
      {/* 2. Purple/Blue Glow (Partner/API Vibe) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Briefcase className="w-3 h-3" />
            {t("mssp.hero.badge")}
          </div>

          {/* Headline (Solid White) */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("mssp.hero.title")} <br />
            {t("mssp.hero.titleLine2")} <span className="text-purple-400">{t("mssp.hero.titleHighlight")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("mssp.hero.descriptionPrefix")}
            <span className="text-white font-medium">{t("mssp.hero.descriptionHighlight")}</span>{t("mssp.hero.descriptionSuffix")}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<Link 
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)]"
      >
        {t("mssp.hero.ctaPrimary")}
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* 2. External Link: API Documentation -> docs.whiteintel.io */}
      <a
        href="https://docs.whiteintel.io"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
      >
        {t("mssp.hero.ctaSecondary")}
      </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Multi-Tenant Dispatcher Visual */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[2000px]">
           
           {/* The Container */}
           <div className="relative w-full aspect-square max-h-[500px] bg-[#0b1229] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="h-12 border-b border-white/10 bg-slate-900/50 flex items-center px-4 justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                 </div>
                 <div className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 flex items-center gap-2">
                    <Activity className="w-3 h-3" />
                    SYSTEM_STATUS: ACTIVE
                 </div>
              </div>

              {/* The Visual Area */}
              <div className="relative flex-1 p-8 flex flex-col items-center justify-center">
                 
                 {/* Background Grid */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                 {/* CENTRAL NODE: Whiteintel Feed */}
                 <div className="relative z-20 mb-12 w-full flex justify-center">
                    <div className="w-48 bg-slate-900 border border-purple-500/50 p-3 rounded-xl flex items-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                       <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center text-white">
                          <Globe2 className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-white font-bold text-sm">Intel Feed</div>
                          <div className="text-[10px] text-purple-400 animate-pulse">Streaming Events...</div>
                       </div>
                    </div>
                 </div>

                 {/* CONNECTOR LINES */}
                 <div className="relative w-full h-12 mb-4">
                    <svg className="absolute inset-0 w-full h-full overflow-visible">
                       {/* Paths to 3 Clients */}
                       <path d="M50% 0 L20% 100%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                       <path d="M50% 0 L50% 100%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                       <path d="M50% 0 L80% 100%" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />

                       {/* Animated Data Packets */}
                       <circle r="3" fill="#a855f7">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M50% 0 L20% 100%" />
                       </circle>
                       <circle r="3" fill="#a855f7">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M50% 0 L50% 100%" begin="0.5s" />
                       </circle>
                       <circle r="3" fill="#a855f7">
                          <animateMotion dur="2s" repeatCount="indefinite" path="M50% 0 L80% 100%" begin="1s" />
                       </circle>
                    </svg>
                 </div>

                 {/* CLIENT NODES */}
                 <div className="grid grid-cols-3 gap-4 w-full relative z-20">
                    
                    {/* Client A */}
                    <ClientNode 
                       name="Acme Corp" 
                       status="1 Alert" 
                       statusColor="text-yellow-400" 
                       delay={0} 
                    />

                    {/* Client B */}
                    <ClientNode 
                       name="Beta Ltd" 
                       status="Secure" 
                       statusColor="text-green-400" 
                       delay={0.5} 
                    />

                    {/* Client C */}
                    <ClientNode 
                       name="Gamma Inc" 
                       status="Scanning" 
                       statusColor="text-blue-400" 
                       delay={1} 
                    />

                 </div>

                 {/* API Integration Badge at bottom */}
                 <div className="mt-12 bg-slate-900/80 border border-white/5 px-4 py-2 rounded-full text-xs text-slate-400 font-mono flex items-center gap-2">
                    <Share2 className="w-3 h-3" />
                    <span>JSON API Integration Active</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                 </div>

              </div>
           </div>

           {/* Decorative Glow */}
           <div className="absolute -inset-4 bg-purple-600/10 blur-2xl -z-10 rounded-[30px]"></div>
        </div>

      </div>
    </section>
  );
};

// Sub-component for Client Nodes
function ClientNode({ name, status, statusColor, delay }) {
  return (
    <motion.div 
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: delay + 0.5 }}
       className="flex flex-col items-center gap-3"
    >
       <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-lg relative group">
          <Building2 className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          {/* Status Indicator Dot */}
          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900 ${
             status === 'Secure' ? 'bg-green-500' : status === 'Scanning' ? 'bg-blue-500' : 'bg-yellow-500'
          }`}></div>
       </div>
       <div className="text-center">
          <div className="text-xs font-bold text-white">{name}</div>
          <div className={`text-[10px] font-mono ${statusColor}`}>{status}</div>
       </div>
    </motion.div>
  );
}

export default HeroSection;