import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  ArrowRight,
  Database,
  User,
  FileText,
  Terminal,
  Activity,
  AlertOctagon,
  CheckCircle2
} from "lucide-react";

const ConsumerProtectionHero = () => {
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
      {/* Subtle Red/Grid Pattern - Flat and Stable */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(to right, #ef4444 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Soft Ambient Glow (Static) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* LEFT COLUMN: Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Activity className="w-3 h-3" />
            {t("consumer.hero.badge")}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
            {t("consumer.hero.title")} <br />
            {t("consumer.hero.titlePrefix")} <span className="text-red-500">{t("consumer.hero.titleHighlight")}</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("consumer.hero.description")}
          </p>

        </div>

        {/* RIGHT COLUMN: The Flat Dashboard Visual */}
        <div className="flex-1 w-full max-w-2xl">
           
           {/* Main Window Frame */}
           <div className="w-full bg-[#0f172a] border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden flex flex-col">
              
              {/* Window Header */}
              <div className="h-10 bg-slate-900 border-b border-slate-700/50 flex items-center px-4 justify-between">
                 <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                 </div>
                 <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                    <ShieldAlert className="w-3 h-3" />
                    THREAT_INTEL_FEED :: CONNECTED
                 </div>
              </div>

              {/* Dashboard Content - Split View */}
              <div className="flex flex-col md:flex-row h-[320px]">
                 
                 {/* LEFT PANEL: Raw Data Stream */}
                 <div className="flex-1 bg-slate-900/50 border-r border-slate-700/50 p-4 flex flex-col gap-3 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Raw Ingestion Stream</span>
                       <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">LIVE</span>
                    </div>

                    {/* Scrolling/Static Log Lines */}
                    <div className="space-y-2 relative z-10">
                        <LogLine text="[Log_8821] Source: Vidar_Stealer" time="10:42:01" opacity={0.3} />
                        <LogLine text="[Log_8822] Source: Raccoon_v2" time="10:42:03" opacity={0.5} />
                        
                        {/* THE MATCHED LOG (Highlighted) */}
                        <motion.div 
                           initial={{ x: -10, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.5 }}
                           className="bg-red-500/10 border-l-2 border-red-500 p-2 rounded-r-md"
                        >
                           <div className="flex justify-between items-start">
                              <div className="flex items-center gap-2 text-xs font-mono text-red-200">
                                 <FileText className="w-3 h-3" />
                                 <span>RedLine_Log.txt</span>
                              </div>
                              <span className="text-[9px] text-red-400/70 font-mono">10:42:05</span>
                           </div>
                           <div className="mt-1 text-[10px] text-slate-400 font-mono truncate">
                              Host: accounts.google.com <br/>
                              <span className="text-white bg-red-500/20">User: a.miller@example.com</span>
                           </div>
                        </motion.div>

                        <LogLine text="[Log_8824] Source: Unknown_Dump" time="10:42:08" opacity={0.4} />
                        <LogLine text="[Log_8825] Source: Telegram_Group" time="10:42:09" opacity={0.2} />
                    </div>
                 </div>

                 {/* RIGHT PANEL: The Result/Classification */}
                 <div className="flex-1 p-5 flex flex-col justify-center bg-slate-950/30">
                    <div className="mb-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Automated Classification</span>
                    </div>

                    {/* The User Card */}
                    <div className="bg-[#1e293b] border border-slate-700 rounded-lg p-4 shadow-xl relative">
                        {/* Status Badge */}
                        <div className="absolute -top-3 right-4 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg flex items-center gap-1">
                           <AlertOctagon className="w-3 h-3" />
                           COMPROMISED
                        </div>

                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
                              <User className="w-5 h-5" />
                           </div>
                           <div>
                              <div className="text-sm font-bold text-white">a.miller@example.com</div>
                              <div className="text-[10px] text-slate-400">Customer ID: 882190-C</div>
                           </div>
                        </div>

                        {/* Analysis Details */}
                        <div className="space-y-2">
                           <MetricRow label="Malware Family" value="RedLine Stealer" isAlert />
                           <MetricRow label="Data Exposed" value="Password" />
                           <MetricRow label="Infection Date" value="Just now" textClass="text-red-400" />
                        </div>

                        {/* Action Button */}
                        <div className="mt-4 pt-3 border-t border-white/5">
                           <div className="w-full py-1.5 bg-red-600/10 border border-red-600/30 rounded text-center text-[10px] font-bold text-red-400">
                              SEND TO JIRA
                           </div>
                        </div>
                    </div>
                 </div>

              </div>

              {/* Footer Console Log */}
              <div className="h-8 bg-black/40 border-t border-slate-800 flex items-center px-4 gap-2">
                 <Terminal className="w-3 h-3 text-slate-500" />
                 <span className="text-[10px] font-mono text-slate-500 truncate">
                    System Output: Match found for user ID 882190. Webhook sent to API endpoint.
                 </span>
              </div>

           </div>
           
           {/* Decorative Under-Glow (Subtle) */}
           <div className="absolute -inset-2 bg-red-500/5 blur-xl -z-10 rounded-xl"></div>
        </div>

      </div>
    </section>
  );
};

// --- Sub-Components ---

function LogLine({ text, time, opacity }) {
   return (
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400" style={{ opacity }}>
         <span>{text}</span>
         <span className="text-slate-600">{time}</span>
      </div>
   );
}

function MetricRow({ label, value, isAlert, textClass = "text-slate-200" }) {
   return (
      <div className="flex justify-between items-center text-[11px] bg-slate-900/50 p-1.5 rounded border border-white/5">
         <span className="text-slate-500">{label}</span>
         <span className={`font-mono font-medium ${isAlert ? 'text-red-300' : textClass}`}>
            {value}
         </span>
      </div>
   );
}

export default ConsumerProtectionHero;