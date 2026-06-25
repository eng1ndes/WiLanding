import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Eye, 
  GlobeLock, 
  Search, 
  Fingerprint, 
  AtSign, 
  AlertCircle, 
  Radar,
  CheckCircle2
} from "lucide-react";

const DarkWebHero = () => {
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
      {/* Purple-tinted Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(to right, #a855f7 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Vignette & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Hero Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Eye className="w-3 h-3" />
            {t("darkweb.hero.badge")}
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("darkweb.hero.title")} <br />
            {t("darkweb.hero.titleLine2")} <span className="text-purple-400">{t("darkweb.hero.titleHighlight")}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("darkweb.hero.description")}
          </p>

        </div>

        {/* RIGHT COLUMN: The Visual Scanner */}
        <div className="flex-1 w-full max-w-xl lg:max-w-none relative perspective-[2000px]">
           
           {/* The Scanner Container */}
           <div className="relative w-full aspect-square max-h-[500px] bg-[#0b1229] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Header Bar */}
              <div className="h-12 border-b border-white/10 bg-slate-900/50 flex items-center px-4 justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                 </div>
                 <div className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 flex items-center gap-2">
                    <Radar className="w-3 h-3 animate-spin-slow" />
                    MONITORING ACTIVE THREADS...
                 </div>
              </div>

              {/* The Scanning Area */}
              <div className="relative flex-1 overflow-hidden p-6 grid grid-cols-2 gap-4">
                 
                 {/* Background Grid */}
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                 {/* Animated Source Cards */}
                 <SourceCard 
                    icon={Search} 
                    name="Keyword Tracker" 
                    detail="Query: ''Alpha'" 
                    status="Indexing results..." 
                    theme="purple"
                    delay={0}
                 />
                 <SourceCard 
                    icon={GlobeLock} 
                    name="Underground Forums" 
                    detail="Scanning Russian & English boards" 
                    status="Searching threads..." 
                    theme="purple"
                    delay={0.5}
                 />
                 <SourceCard 
                    icon={Fingerprint} 
                    name="Product Leaks" 
                    detail="Looking for schematics / code" 
                    status="Possible Match Found"
                    variant="warning" // Highlights in Orange
                    theme="orange"
                    delay={1}
                 />
                 <SourceCard 
                    icon={AtSign} 
                    name="VIP Targeting" 
                    detail="Monitoring exec names & handles" 
                    status="No immediate threats" 
                    variant="success"
                    theme="purple"
                    delay={1.5}
                 />

                 {/* The "Laser" Scanner Beam (Purple) */}
                 <motion.div 
                    className="absolute left-0 right-0 h-[2px] bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)] z-20 pointer-events-none"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 >
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                 </motion.div>
              </div>

              {/* Bottom Console Log */}
              <div className="h-36 bg-slate-950 border-t border-white/10 p-4 font-mono text-[10px] text-slate-400 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent h-8 bottom-0 z-10"></div>
                 <div className="space-y-1">
                    <p className="opacity-50">[03:15:22] Keyword sets loaded. Beginning sweep.</p>
                    <p className="text-purple-400">[03:15:24] XSS Forum: Thread ID #99210 matches keyword "Project Alpha".</p>
                    <p className="opacity-50">[03:15:25] Analyzing sentiment and context...</p>
                    
                    {/* Console Alert Animation */}
                    <motion.div 
                       initial={{ opacity: 0 }} 
                       animate={{ opacity: 1 }} 
                       transition={{ delay: 2.5, repeat: Infinity, repeatDelay: 4 }}
                       className="text-orange-300 bg-orange-900/20 p-1 border-l-2 border-orange-500 mt-2"
                    >
                       [MENTION DETECTED] User 'NullPointer' is discussing "selling source code for Project Alpha" on Exploit.in. Severity: High.
                    </motion.div>
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

// --- Sub-Component: SourceCard ---
function SourceCard({ icon: Icon, name, detail, status, variant = "default", theme = "purple", delay }) {
  
  const themeColors = {
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
  };

  const themeStyle = themeColors[theme] || themeColors.purple;

  // Visual logic
  let cardBg = "bg-slate-800/50 border-white/5";
  let iconBg = themeStyle.bg;
  let iconText = themeStyle.text;
  let statusIcon = <Radar className="w-3 h-3 animate-spin-slow" />;
  let statusText = themeStyle.text;

  if (variant === 'warning') {
     cardBg = "bg-orange-900/10 border-orange-500/30";
     iconBg = "bg-orange-500/20";
     iconText = "text-orange-400";
     statusIcon = <AlertCircle className="w-3 h-3" />;
     statusText = "text-orange-400";
  } else if (variant === 'success') {
     cardBg = "bg-green-900/10 border-green-500/30";
     statusIcon = <CheckCircle2 className="w-3 h-3" />;
     statusText = "text-green-400";
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      className={`relative p-4 rounded-xl border flex flex-col gap-3 overflow-hidden ${cardBg}`}
    >
       <div className="flex items-start justify-between">
          <div className={`p-2 rounded-lg ${iconBg} ${iconText}`}>
             <Icon className="w-5 h-5" />
          </div>
          {variant === 'warning' && (
             <div className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded animate-pulse">
                MATCH
             </div>
          )}
       </div>
       
       <div>
          <div className="text-sm font-bold text-white mb-0.5">{name}</div>
          <div className="text-[10px] text-slate-400 truncate">{detail}</div>
       </div>

       <div className={`text-[10px] font-mono mt-auto pt-2 border-t border-white/5 flex items-center gap-1.5 ${statusText}`}>
          {statusIcon}
          {status}
       </div>
    </motion.div>
  );
}

export default DarkWebHero;