import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  SearchCheck,
  Server,
  Workflow,
  Terminal,
  FileJson,
  Download,
  Bell,
  Crosshair,
  Code2,
  AlertTriangle,
  Globe
} from "lucide-react";

const featureMeta = [
  { id: 0, icon: Shield, visual: "recon" },
  { id: 1, icon: SearchCheck, visual: "context" },
  { id: 2, icon: Server, visual: "export" },
  { id: 3, icon: Workflow, visual: "alert" },
];

export default function Capabilities() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = featureMeta.map((meta, idx) => ({
    ...meta,
    title: t(`vuln.capabilities.items.${idx}.title`),
    description: t(`vuln.capabilities.items.${idx}.description`),
  }));

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
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t("vuln.capabilities.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t("vuln.capabilities.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {t("vuln.capabilities.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("vuln.capabilities.description")}
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
                      ? "bg-slate-800/60 border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]" 
                      : "bg-transparent border-transparent hover:bg-slate-800/30 hover:border-white/5"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-emerald-600 text-white scale-110 shadow-lg shadow-emerald-900/50" 
                        : "bg-slate-800 text-slate-400 group-hover:text-emerald-400 group-hover:bg-slate-700"
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
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500 rounded-l-xl"
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
               
               {/* SCENE 1: RECON (Terminal CLI) */}
               {features[activeFeature].visual === 'recon' && (
                 <motion.div 
                    key="recon"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="w-[90%] bg-slate-950 rounded-lg border border-slate-800 shadow-xl font-mono text-xs overflow-hidden"
                 >
                    {/* Fake Terminal Header */}
                    <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                       <div className="ml-auto text-slate-600">bash</div>
                    </div>
                    
                    <div className="p-4 space-y-2">
                       <div className="flex items-center gap-2 text-slate-300">
                          <span className="text-emerald-500">➜</span>
                          <span>whiteintel search -d target.com</span>
                       </div>
                       
                       <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                          className="text-slate-500"
                       >
                          [*] Scanning stealer logs and breach repos...
                       </motion.div>

                       <div className="space-y-1 mt-2">
                          <motion.div 
                             initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                             className="flex gap-2 text-emerald-400"
                          >
                             <span>[+]</span> <span>admin.target.com</span> <span className="text-slate-500">(Exposed Creds)</span>
                          </motion.div>
                          <motion.div 
                             initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }}
                             className="flex gap-2 text-emerald-400"
                          >
                             <span>[+]</span> <span>vpn.target.com</span> <span className="text-slate-500">(RDP Listing)</span>
                          </motion.div>
                          <motion.div 
                             initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }}
                             className="flex gap-2 text-emerald-400"
                          >
                             <span>[+]</span> <span>dev-api.target.com</span> <span className="text-slate-500">(Dev Creds)</span>
                          </motion.div>
                       </div>
                    </div>
                 </motion.div>
               )}

               {/* SCENE 2: CONTEXT (Context Inspector) */}
               {features[activeFeature].visual === 'context' && (
                  <motion.div 
                    key="context"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
                    className="w-[85%] bg-slate-900 border border-white/10 rounded-xl p-5 shadow-2xl relative"
                  >
                     {/* Header */}
                     <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                        <div className="bg-emerald-500/10 p-2 rounded text-emerald-400">
                           <Globe className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-sm font-bold text-white">jira.internal.corp</div>
                           <div className="text-[10px] text-slate-400">Log ID: #9921 • Source: Redline</div>
                        </div>
                     </div>

                     {/* Data Fields */}
                     <div className="space-y-3 font-mono text-xs">
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                           <span className="text-slate-500 block mb-0.5">Compromised Path</span>
                           <span className="bg-slate-950 px-2 py-1 rounded text-slate-300 block border border-white/5">
                              C:\Users\Dev\AppData\Local\Google\Chrome\User Data
                           </span>
                        </motion.div>
                        
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                           <span className="text-slate-500 block mb-0.5">Related Credentials</span>
                           <div className="flex gap-2">
                              <span className="bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 px-2 py-1 rounded">
                                 admin@internal.corp
                              </span>
                              <span className="bg-slate-950 border border-white/5 text-slate-500 px-2 py-1 rounded blur-[2px]">
                                 password123
                              </span>
                           </div>
                        </motion.div>
                     </div>

                     {/* Decoration */}
                     <div className="absolute top-4 right-4 text-emerald-500 animate-pulse">
                        <Crosshair className="w-4 h-4" />
                     </div>
                  </motion.div>
               )}

               {/* SCENE 3: EXPORT (JSON Downloader) */}
               {features[activeFeature].visual === 'export' && (
                 <motion.div 
                    key="export"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-6 w-full px-12"
                 >
                    {/* File Icon */}
                    <motion.div 
                       initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                       className="relative"
                    >
                       <FileJson className="w-20 h-20 text-emerald-500" />
                       <motion.div 
                          className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-1 border border-white/10"
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
                       >
                          <Download className="w-5 h-5 text-white" />
                       </motion.div>
                    </motion.div>

                    {/* Loading Bar */}
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
                       <motion.div 
                          className="absolute top-0 left-0 h-full bg-emerald-500"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                       />
                    </div>

                    {/* Code Snippet Preview */}
                    <motion.div 
                       initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                       className="w-full bg-slate-950 p-3 rounded border border-white/5 font-mono text-[10px] text-slate-400"
                    >
                       {"{"} <br/>
                       &nbsp;&nbsp;"target": "example.com",<br/>
                       &nbsp;&nbsp;"findings": 142,<br/>
                       &nbsp;&nbsp;"exported_at": "2024-10-24T14:00:00Z"<br/>
                       {"}"}
                    </motion.div>
                 </motion.div>
               )}

               {/* SCENE 4: ALERT (Live Notification) */}
               {features[activeFeature].visual === 'alert' && (
                  <motion.div 
                    key="alert"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                     {/* Background Radar */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-64 h-64 border border-emerald-500/30 rounded-full"></div>
                        <div className="w-48 h-48 border border-emerald-500/30 rounded-full absolute"></div>
                     </div>

                     {/* Notification Card */}
                     <motion.div 
                        initial={{ y: 50, opacity: 0, scale: 0.9 }} 
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        className="bg-slate-900 border border-emerald-500/50 p-4 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.2)] flex items-start gap-4 z-10 max-w-[300px]"
                     >
                        <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
                           <Bell className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-bold text-white">New Finding</span>
                              <span className="text-[10px] text-slate-400">Just now</span>
                           </div>
                           <p className="text-xs text-slate-300">
                              Domain <strong>admin.target.com</strong> found in new Stealer Log upload.
                           </p>
                           <div className="mt-2 flex gap-2">
                              <span className="text-[10px] bg-slate-800 border border-white/10 px-2 py-0.5 rounded text-slate-400">Webhook Sent</span>
                           </div>
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