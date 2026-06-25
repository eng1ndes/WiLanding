import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  SearchCheck,
  Bug,
  Workflow,
  Lock,
  Globe,
  FileWarning,
  Server,
  AlertOctagon,
  Ban,
  Network
} from "lucide-react";

export default function Capabilities() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: Shield,
      title: t("ransomware.capabilities.items.0.title"),
      description: t("ransomware.capabilities.items.0.description"),
      visual: "access"
    },
    {
      id: 1,
      icon: SearchCheck,
      title: t("ransomware.capabilities.items.1.title"),
      description: t("ransomware.capabilities.items.1.description"),
      visual: "vector"
    },
    {
      id: 2,
      icon: Bug,
      title: t("ransomware.capabilities.items.2.title"),
      description: t("ransomware.capabilities.items.2.description"),
      visual: "foothold"
    },
    {
      id: 3,
      icon: Workflow,
      title: t("ransomware.capabilities.items.3.title"),
      description: t("ransomware.capabilities.items.3.description"),
      visual: "automate"
    },
  ];

  return (
    <section className="relative bg-[#020617] text-white pt-32 pb-24 px-6 md:px-10 overflow-hidden">
      
      {/* --- TOP CURVE TRANSITION (White to Dark) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,0 C240,100 1200,100 1440,0 L1440,0 L0,0 Z"
            className="fill-white" 
          />
        </svg>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {t("ransomware.capabilities.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t("ransomware.capabilities.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {t("ransomware.capabilities.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("ransomware.capabilities.description")}
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Interactive Feature List */}
          <div className="space-y-3">
            {features.map((feature, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(idx)}
                  className={`group relative p-5 rounded-xl cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? "bg-slate-800/60 border-red-500/30 shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)]" 
                      : "bg-transparent border-transparent hover:bg-slate-800/30 hover:border-white/5"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-red-600 text-white scale-110 shadow-lg shadow-red-900/50" 
                        : "bg-slate-800 text-slate-400 group-hover:text-red-400 group-hover:bg-slate-700"
                    }`}>
                      <feature.icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className={`font-semibold text-lg mb-1 transition-colors ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        isActive ? "text-slate-300" : "text-slate-500 group-hover:text-slate-400"
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeLine"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-500 rounded-l-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Visualization Window */}
          <div className="sticky top-24 min-h-[400px] h-full w-full bg-[#0b1229] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center relative perspective-[1000px]">
             
             {/* Background Grid inside visual */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

             <AnimatePresence mode="wait">
               
               {/* SCENE 1: INITIAL ACCESS (Dark Market RDP Sale) */}
               {features[activeFeature].visual === 'access' && (
                 <motion.div 
                    key="access"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center gap-6 w-[80%]"
                 >
                    <div className="w-full bg-slate-900 border border-white/10 rounded-xl p-4 shadow-2xl relative overflow-hidden">
                       <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                          <div className="flex items-center gap-2 text-slate-400 text-xs">
                             <Globe className="w-3 h-3" /> {t("ransomware.capabilities.visuals.access.marketLabel")}
                          </div>
                          <div className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-500">{t("ransomware.capabilities.visuals.access.timeAgo")}</div>
                       </div>
                       
                       <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-500">
                             <Server className="w-5 h-5" />
                          </div>
                          <div>
                             <div className="text-sm font-bold text-white">{t("ransomware.capabilities.visuals.access.corporateAccess")}</div>
                             <div className="text-xs text-slate-400">{t("ransomware.capabilities.visuals.access.userInfo")}</div>
                             <div className="text-xs text-green-400 mt-1 font-mono">$500 USD</div>
                          </div>
                       </div>

                       {/* "BLOCKED" Stamp Animation */}
                       <motion.div 
                          initial={{ scale: 2, opacity: 0, rotate: -15 }}
                          animate={{ scale: 1, opacity: 1, rotate: -5 }}
                          transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                          className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm z-10"
                       >
                          <div className="border-4 border-red-500 text-red-500 px-6 py-2 rounded-lg font-black text-2xl tracking-widest uppercase transform -rotate-12 shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                             {t("ransomware.capabilities.visuals.access.detected")}
                          </div>
                       </motion.div>
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur border border-white/10 px-4 py-2 rounded-lg text-sm text-red-400 flex items-center gap-2">
                       <Shield className="w-4 h-4" />
                       {t("ransomware.capabilities.visuals.access.brokerIdentified")}
                    </div>
                 </motion.div>
               )}

               {/* SCENE 2: VECTOR TRACE (Phishing to Endpoint) */}
               {features[activeFeature].visual === 'vector' && (
                  <motion.div 
                    key="vector"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center w-full gap-4 relative"
                  >
                     <motion.div 
                        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                        className="bg-slate-800 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2"
                     >
                        <Globe className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-slate-300">{t("ransomware.capabilities.visuals.vector.stealerCampaign")}</span>
                     </motion.div>

                     {/* Trace Line Down */}
                     <div className="h-12 w-px bg-slate-700 relative overflow-hidden">
                        <motion.div 
                           className="absolute top-0 w-full h-1/2 bg-purple-500 blur-[1px]"
                           animate={{ top: ["-50%", "150%"] }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                     </div>

                     {/* Middle Node: Compromised User */}
                     <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}
                        className="bg-slate-800 px-4 py-2 rounded-lg border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)] flex items-center gap-2"
                     >
                        <AlertOctagon className="w-4 h-4 text-red-400" />
                        <span className="text-xs text-white">{t("ransomware.capabilities.visuals.vector.compromisedUser")}</span>
                     </motion.div>

                     {/* Trace Line Down */}
                     <div className="h-12 w-px bg-slate-700 relative overflow-hidden">
                        <motion.div 
                           className="absolute top-0 w-full h-1/2 bg-red-500 blur-[1px]"
                           animate={{ top: ["-50%", "150%"] }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                     </div>

                     {/* Bottom Node: Endpoint */}
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                        className="bg-slate-800 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 opacity-50"
                     >
                        <Server className="w-4 h-4 text-slate-500" />
                        <span className="text-xs text-slate-400">{t("ransomware.capabilities.visuals.vector.endpoint")}</span>
                     </motion.div>
                  </motion.div>
               )}

               {/* SCENE 3: FOOTHOLD (Malware Precursor) */}
               {features[activeFeature].visual === 'foothold' && (
                 <motion.div 
                    key="foothold"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
                    className="relative w-full h-full flex items-center justify-center"
                 >
                    {/* Radar Sweep */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                       <div className="w-64 h-64 border border-red-500/20 rounded-full"></div>
                       <div className="w-48 h-48 border border-red-500/20 rounded-full absolute"></div>
                       <div className="w-32 h-32 border border-red-500/20 rounded-full absolute"></div>
                    </div>

                    <motion.div 
                       className="w-1/2 h-1/2 bg-gradient-to-tr from-transparent to-red-500/10 absolute top-0 right-0 origin-bottom-left"
                       animate={{ rotate: 360 }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       style={{ borderLeft: '1px solid rgba(239,68,68,0.3)' }}
                    />

                    {/* Malware Icon */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                       <div className="w-20 h-20 bg-slate-900 border border-red-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                          <Bug className="w-10 h-10 text-red-500" />
                       </div>
                       <div className="bg-slate-900 border border-red-500/30 px-3 py-1 rounded text-red-400 text-xs font-bold animate-pulse">
                          {t("ransomware.capabilities.visuals.foothold.stealerDetected")}
                       </div>
                    </div>

                    {/* Floating Particles */}
                    {[...Array(5)].map((_, i) => (
                       <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-red-500 rounded-full"
                          animate={{ 
                             x: Math.cos(i) * 60, 
                             y: Math.sin(i) * 60,
                             opacity: [0, 1, 0] 
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                       />
                    ))}
                 </motion.div>
               )}

               {/* SCENE 4: AUTOMATE (Containment Workflow) */}
               {features[activeFeature].visual === 'automate' && (
                  <motion.div 
                    key="automate"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 w-[80%]"
                  >
                     {/* Step 1: Ingest */}
                     <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>{t("ransomware.capabilities.visuals.automate.threatSignal")}</span>
                        <span>{t("ransomware.capabilities.visuals.automate.action")}</span>
                     </div>
                     
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                        className="bg-slate-800 p-3 rounded-lg border border-white/5 flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <FileWarning className="w-4 h-4 text-yellow-500" />
                           <span className="text-xs text-white">{t("ransomware.capabilities.visuals.automate.precursorIdentified")}</span>
                        </div>
                     </motion.div>

                     {/* Arrow */}
                     <div className="flex justify-center -my-1 text-slate-600"><div className="h-4 w-px bg-slate-700"></div></div>

                     {/* Step 2: SOAR Action */}
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                        className="bg-red-900/10 p-3 rounded-lg border border-red-500/30 shadow-lg flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <Network className="w-4 h-4 text-red-400" />
                           <span className="text-xs text-white font-bold">{t("ransomware.capabilities.visuals.automate.isolateEndpoint")}</span>
                        </div>
                        <div className="text-[9px] text-red-400 bg-red-900/20 px-1.5 rounded border border-red-500/20">EDR API</div>
                     </motion.div>

                     {/* Arrow */}
                     <div className="flex justify-center -my-1 text-slate-600"><div className="h-4 w-px bg-slate-700"></div></div>

                     {/* Step 3: Ticket */}
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                        className="bg-blue-900/10 p-3 rounded-lg border border-blue-500/30 flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <Lock className="w-4 h-4 text-blue-400" />
                           <span className="text-xs text-blue-300">{t("ransomware.capabilities.visuals.automate.resetCredentials")}</span>
                        </div>
                     </motion.div>
                  </motion.div>
               )}

             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}