import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  SearchCheck,
  Server,
  Workflow,
  Users,
  Network,
  FileCode,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Terminal
} from "lucide-react";

export default function Capabilities() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: Shield,
      title: t("ad.capabilities.items.0.title"),
      description: t("ad.capabilities.items.0.description"),
      visual: "user"
    },
    {
      id: 1,
      icon: SearchCheck,
      title: t("ad.capabilities.items.1.title"),
      description: t("ad.capabilities.items.1.description"),
      visual: "graph"
    },
    {
      id: 2,
      icon: Server,
      title: t("ad.capabilities.items.2.title"),
      description: t("ad.capabilities.items.2.description"),
      visual: "path"
    },
    {
      id: 3,
      icon: Workflow,
      title: t("ad.capabilities.items.3.title"),
      description: t("ad.capabilities.items.3.description"),
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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {t("ad.capabilities.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t("ad.capabilities.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {t("ad.capabilities.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("ad.capabilities.description")}
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
                      ? "bg-slate-800/60 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]" 
                      : "bg-transparent border-transparent hover:bg-slate-800/30 hover:border-white/5"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-900/50" 
                        : "bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-700"
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
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500 rounded-l-xl"
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
               
               {/* SCENE 1: AD USER (Credential Exposure) */}
               {features[activeFeature].visual === 'user' && (
                 <motion.div 
                    key="user"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center gap-6"
                 >
                    <div className="relative">
                       {/* User Card */}
                       <div className="w-64 bg-slate-800 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 relative z-10 shadow-2xl">
                          <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center border border-white/5">
                             <Users className="w-8 h-8 text-slate-300" />
                          </div>
                          <div className="text-center">
                             <div className="text-white font-bold">CN=Admin_Sys</div>
                             <div className="text-xs text-slate-400 font-mono">OU=IT_Privileged</div>
                          </div>
                       </div>

                       {/* Threat Badge */}
                       <motion.div 
                          initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }}
                          className="absolute -top-4 -right-4 bg-red-600 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg border border-red-400 z-20 flex items-center gap-1"
                       >
                          <AlertTriangle className="w-3 h-3" />
                          {t("ad.capabilities.visuals.user.leaked")}
                       </motion.div>

                       {/* Pulsing Red BG */}
                       <motion.div 
                          className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl"
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                       />
                    </div>
                 </motion.div>
               )}

               {/* SCENE 2: CORRELATION (Hosts & IPs) */}
               {features[activeFeature].visual === 'graph' && (
                  <motion.div 
                    key="graph"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex items-center justify-center w-full gap-8 relative"
                  >
                     {/* Node 1: Stealer Log */}
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                        className="bg-slate-800 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 z-10"
                     >
                        <FileCode className="w-6 h-6 text-yellow-500" />
                        <span className="text-xs text-slate-300">{t("ad.capabilities.visuals.graph.stealerLog")}</span>
                        <span className="text-[9px] text-slate-500 font-mono">192.168.4.20</span>
                     </motion.div>

                     {/* Connection Line */}
                     <div className="h-px w-24 bg-slate-700 relative overflow-hidden">
                        <motion.div 
                           className="absolute top-0 bottom-0 w-1/2 bg-red-500 blur-[2px]"
                           animate={{ left: ["-50%", "150%"] }}
                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                     </div>

                     {/* Node 2: Internal Host */}
                     <motion.div 
                        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                        className="bg-slate-800 p-4 rounded-xl border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)] flex flex-col items-center gap-2 z-10"
                     >
                        <Network className="w-6 h-6 text-red-400" />
                        <span className="text-xs text-white">WS-FIN-01</span>
                        <span className="text-[9px] bg-red-500/20 text-red-400 px-1 rounded">{t("ad.capabilities.visuals.graph.matched")}</span>
                     </motion.div>
                  </motion.div>
               )}

               {/* SCENE 3: PATH (Malware Artifacts) */}
               {features[activeFeature].visual === 'path' && (
                 <motion.div 
                    key="path"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="w-[85%] bg-slate-950 rounded-lg border border-slate-800 shadow-xl overflow-hidden font-mono text-xs"
                 >
                   <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex gap-2 items-center">
                      <Terminal className="w-3 h-3 text-slate-500" />
                      <span className="text-slate-400">{t("ad.capabilities.visuals.path.artifactExplorer")}</span>
                   </div>
                   
                   <div className="p-4 space-y-3">
                      <div className="flex items-center gap-2 text-slate-500">
                         <div className="w-px h-8 bg-slate-700"></div>
                         <span>C:\Users\Admin\AppData\Local\Temp\</span>
                      </div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                        className="bg-red-900/10 border-l-2 border-red-500 p-2 ml-4 text-slate-300"
                      >
                         <div className="flex justify-between items-center mb-1">
                            <span className="text-red-400 font-bold">Redline_Stealer.exe</span>
                            <span className="text-[9px] text-slate-500">2MB</span>
                         </div>
                         <p className="text-[10px] text-slate-500">Hash: e3b0c44298fc1c149afbf4...</p>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                        className="bg-yellow-900/10 border-l-2 border-yellow-500 p-2 ml-4 text-slate-300"
                      >
                         <span className="text-yellow-400 font-bold">Ulp_forum.txt</span>
                         <p className="text-[10px] text-slate-500">{t("ad.capabilities.visuals.path.containsCredentials")}</p>
                      </motion.div>
                   </div>
                 </motion.div>
               )}

               {/* SCENE 4: AUTOMATE (AD Response) */}
               {features[activeFeature].visual === 'automate' && (
                  <motion.div 
                    key="automate"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 w-[80%]"
                  >
                     {/* Alert Card */}
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                        className="bg-slate-800 p-3 rounded-lg border border-white/5 flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <Shield className="w-4 h-4 text-blue-400" />
                           <span className="text-xs text-slate-300">{t("ad.capabilities.visuals.automate.policyViolation")}</span>
                        </div>
                        <div className="text-[9px] text-slate-500">{t("ad.capabilities.visuals.automate.now")}</div>
                     </motion.div>

                     {/* Action Arrows */}
                     <div className="flex justify-center text-slate-600"><div className="h-4 w-px bg-slate-700"></div></div>

                     {/* Action Card */}
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                        className="bg-slate-800 p-3 rounded-lg border border-red-500/30 shadow-lg flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <Lock className="w-4 h-4 text-red-400" />
                           <span className="text-xs text-white font-bold">{t("ad.capabilities.visuals.automate.disableAccount")}</span>
                        </div>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                     </motion.div>

                     {/* Action Arrows */}
                     <div className="flex justify-center text-slate-600"><div className="h-4 w-px bg-slate-700"></div></div>

                     {/* Success Card */}
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                        className="bg-green-900/10 p-3 rounded-lg border border-green-500/30 flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <CheckCircle2 className="w-4 h-4 text-green-400" />
                           <span className="text-xs text-green-300">{t("ad.capabilities.visuals.automate.workflowCompleted")}</span>
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