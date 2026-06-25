import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Biohazard,
  ScanFace,
  ShieldBan,
  Zap,
  FileWarning,
  Terminal,
  LockKeyhole,
  UserX
} from "lucide-react";

const featureMeta = [
  { id: 0, icon: Biohazard, visual: "ingest" },
  { id: 1, icon: ScanFace, visual: "match" },
  { id: 2, icon: ShieldBan, visual: "block" },
  { id: 3, icon: Zap, visual: "automate" },
];

export default function ConsumerProtectionFeatures() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = featureMeta.map((meta, idx) => ({
    ...meta,
    title: t(`consumer.capabilities.items.${idx}.title`),
    description: t(`consumer.capabilities.items.${idx}.description`),
  }));

  return (
    <section className="relative bg-[#020617] text-white pt-32 pb-24 px-6 md:px-10 overflow-hidden">
      
      {/* --- TOP CURVE TRANSITION --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
          <path d="M0,0 C240,100 1200,100 1440,0 L1440,0 L0,0 Z" className="fill-slate-50" />
        </svg>
      </div>

      {/* Background Effects (Red/Orange for Infection Theme) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {t("consumer.capabilities.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t("consumer.capabilities.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
              {t("consumer.capabilities.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("consumer.capabilities.description")}
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
                      ? "bg-slate-900/80 border-red-500/30 shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)]" 
                      : "bg-transparent border-transparent hover:bg-slate-900/40 hover:border-white/5"
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
                      layoutId="activeLineRed"
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
          <div className="sticky top-24 min-h-[400px] h-full w-full bg-[#0b0f19] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center relative perspective-[1000px]">
             
             {/* Background Grid inside visual */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(to right, #ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

             <AnimatePresence mode="wait">
               
               {/* SCENE 1: INGEST (Raw Logs) */}
               {features[activeFeature].visual === 'ingest' && (
                 <motion.div 
                    key="ingest"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="w-[85%] flex flex-col gap-3"
                 >
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Incoming Stream</span>
                       <span className="bg-red-500/10 text-red-500 text-[10px] px-2 py-1 rounded border border-red-500/20 font-bold animate-pulse">LIVE</span>
                    </div>

                    {/* Log Card 1 */}
                    <motion.div 
                       initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                       className="bg-slate-900 p-3 rounded border border-slate-700 flex items-center gap-3"
                    >
                       <FileWarning className="w-8 h-8 text-slate-600" />
                       <div className="flex-1 min-w-0">
                          <div className="text-xs text-red-300 font-mono">RedLine_Stealer_v44.zip</div>
                          <div className="text-[10px] text-slate-500 truncate">Contains: 442 Passwords, 12 Wallets</div>
                       </div>
                       <div className="text-[10px] text-slate-500 font-mono">2KB</div>
                    </motion.div>

                    {/* Log Card 2 (Active Analysis) */}
                    <motion.div 
                       initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                       className="bg-red-900/10 p-3 rounded border border-red-500/40 flex items-center gap-3 relative overflow-hidden"
                    >
                       {/* Scan Line */}
                       <motion.div 
                          className="absolute top-0 bottom-0 w-1 bg-red-500 z-10 opacity-50 blur-sm"
                          animate={{ left: ["0%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                       />
                       <FileWarning className="w-8 h-8 text-red-500" />
                       <div className="flex-1 min-w-0">
                          <div className="text-xs text-white font-mono font-bold">Vidar_Log_Dump.txt</div>
                          <div className="text-[10px] text-red-200/70 truncate">Parsing credentials...</div>
                       </div>
                    </motion.div>

                    {/* Log Card 3 */}
                    <motion.div 
                       initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                       className="bg-slate-900 p-3 rounded border border-slate-700 flex items-center gap-3 opacity-50"
                    >
                       <FileWarning className="w-8 h-8 text-slate-600" />
                       <div className="flex-1 min-w-0">
                          <div className="text-xs text-slate-400 font-mono">Raccoon_Stealer_Export.rar</div>
                       </div>
                    </motion.div>
                 </motion.div>
               )}

               {/* SCENE 2: MATCH (Identity Resolution) */}
               {features[activeFeature].visual === 'match' && (
                  <motion.div 
                    key="match"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="w-[85%] relative"
                  >
                     {/* The Connection Visual */}
                     <div className="flex justify-between items-center mb-6">
                        {/* Malware Side */}
                        <div className="bg-slate-800 p-3 rounded-lg border border-slate-600 text-center w-24">
                           <Biohazard className="w-6 h-6 text-red-400 mx-auto mb-2" />
                           <div className="text-[10px] text-slate-400">Malware Log</div>
                        </div>

                        {/* Animated Line */}
                        <div className="flex-1 h-[2px] bg-slate-700 relative mx-4">
                           <motion.div 
                              className="absolute top-0 left-0 h-full bg-red-500 shadow-[0_0_10px_red]"
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                           />
                        </div>

                        {/* User Side */}
                        <div className="bg-slate-800 p-3 rounded-lg border border-slate-600 text-center w-24">
                           <ScanFace className="w-6 h-6 text-white mx-auto mb-2" />
                           <div className="text-[10px] text-slate-400">User DB</div>
                        </div>
                     </div>

                     {/* The Result Card */}
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                        className="bg-slate-950 border border-red-500/50 rounded-lg p-4 shadow-2xl"
                     >
                        <div className="flex items-start gap-3">
                           <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                              <span className="text-xs font-bold text-white">JD</span>
                           </div>
                           <div className="flex-1">
                              <div className="flex justify-between items-start">
                                 <div>
                                    <div className="text-sm font-bold text-white">John Doe</div>
                                    <div className="text-[10px] text-slate-500">user_id: 88219</div>
                                 </div>
                                 <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">MATCH</span>
                              </div>
                              <div className="mt-3 text-[11px] text-slate-300 bg-slate-900 p-2 rounded border border-white/5">
                                 <div className="grid grid-cols-[60px_1fr] gap-1">
                                    <span className="text-slate-500">Source:</span>
                                    <span className="text-red-300">Vidar Stealer Log</span>
                                    <span className="text-slate-500">Data:</span>
                                    <span className="truncate">j.doe@company.com / P@ssword123</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  </motion.div>
               )}

               {/* SCENE 3: BLOCK (ATO Prevention) */}
               {features[activeFeature].visual === 'block' && (
                 <motion.div 
                    key="block"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-[80%] max-w-sm"
                 >
                    {/* Fake Login Window */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl relative">
                       {/* Overlay that appears instantly */}
                       <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                          className="absolute inset-0 bg-slate-900/95 z-20 flex flex-col items-center justify-center text-center p-6"
                       >
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                             <ShieldBan className="w-6 h-6 text-red-600" />
                          </div>
                          <h4 className="text-white font-bold text-lg mb-1">Access Denied</h4>
                          <p className="text-slate-400 text-xs mb-4">
                             This account has been flagged for security review due to detected compromised credentials.
                          </p>
                          <button className="bg-red-600 text-white text-xs py-2 px-4 rounded font-bold">Contact Support</button>
                       </motion.div>

                       {/* Underlying Login Form (Blurred/Disabled) */}
                       <div className="p-6 bg-slate-50">
                          <div className="h-4 w-24 bg-slate-200 rounded mb-6 mx-auto"></div>
                          <div className="space-y-3">
                             <div className="h-8 bg-slate-200 rounded w-full"></div>
                             <div className="h-8 bg-slate-200 rounded w-full"></div>
                             <div className="h-8 bg-blue-500 rounded w-full opacity-50"></div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
               )}

               {/* SCENE 4: AUTOMATE (API Remediation) */}
               {features[activeFeature].visual === 'automate' && (
                  <motion.div 
                    key="automate"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-[90%]"
                  >
                     <div className="bg-slate-950 rounded-lg border border-slate-800 shadow-2xl overflow-hidden font-mono text-[10px] md:text-xs">
                        {/* Terminal Header */}
                        <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex gap-2">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                        </div>
                        
                        {/* Terminal Body */}
                        <div className="p-4 space-y-2 text-slate-400">
                           <div>
                              <span className="text-green-400">➜</span> <span className="text-blue-300">~</span> detection_engine --status
                           </div>
                           <div className="text-slate-500 italic">
                              Listening for events...
                           </div>
                           
                           {/* Event Trigger */}
                           <motion.div 
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                              className="pt-2"
                           >
                              <div className="text-red-400">[ALERT] Compromised Credential Detected: user_id:88219</div>
                              <div className="text-slate-500">Initiating automated workflow...</div>
                           </motion.div>

                           {/* API Call Visualization */}
                           <motion.div 
                              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                              className="bg-slate-900 p-2 rounded border-l-2 border-yellow-500 my-2"
                           >
                              <span className="text-yellow-300">POST</span> /api/v1/users/88219/reset_password <br/>
                              <span className="text-slate-500">{`{ "reason": "compromised_device", "force": true }`}</span>
                           </motion.div>

                           {/* Success Response */}
                           <motion.div 
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                           >
                              <div className="text-green-400">✓ Success: Password reset email sent.</div>
                              <div className="text-green-400">✓ Success: Active sessions terminated.</div>
                           </motion.div>
                        </div>
                     </div>
                  </motion.div>
               )}

             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}