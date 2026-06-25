import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ScanEye,
  FileText,
  BellRing,
  AlertTriangle,
  Fingerprint,
  ArrowRight,
  Code
} from "lucide-react";

const featureMeta = [
  { id: 0, icon: Globe, visual: "scan" },
  { id: 1, icon: ScanEye, visual: "compare" },
  { id: 2, icon: FileText, visual: "whois" },
  { id: 3, icon: BellRing, visual: "api" },
];

export default function DomainCapabilities() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = featureMeta.map((meta, idx) => ({
    ...meta,
    title: t(`lookalike.capabilities.items.${idx}.title`),
    description: t(`lookalike.capabilities.items.${idx}.description`),
  }));

  return (
    <section className="relative bg-[#020617] text-white pb-24 pt-32 lg:pt-40 overflow-hidden">
      
      {/* Background Ambience (Blue) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {t("lookalike.capabilities.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            {t("lookalike.capabilities.title")} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {t("lookalike.capabilities.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("lookalike.capabilities.description")}
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Interactive List */}
          <div className="space-y-4">
            {features.map((feature, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(idx)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? "bg-slate-800/40 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]" 
                      : "bg-transparent border-transparent hover:bg-slate-800/20"
                  }`}
                >
                  <div className="flex gap-5">
                    {/* Icon Column */}
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 group-hover:text-blue-400"
                    }`}>
                      <feature.icon className="w-5 h-5" />
                    </div>

                    {/* Text Column */}
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        isActive ? "text-slate-300" : "text-slate-500"
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="progressBar"
                      className="absolute left-0 bottom-0 h-[2px] bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Visuals */}
          <div className="relative h-[400px] md:h-[500px] w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
             
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

             <AnimatePresence mode="wait">
               
               {/* SCENE 1: SCANNING (Feed of new domains) */}
               {features[activeFeature].visual === 'scan' && (
                 <motion.div 
                    key="scan"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="relative w-full h-full p-8 flex flex-col overflow-hidden"
                 >
                   <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900 z-10" />
                   
                   {/* Scrolling List Animation */}
                   <motion.div 
                     animate={{ y: [-200, 0] }}
                     transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                     className="space-y-3 pt-10"
                   >
                     {[...Array(8)].map((_, i) => (
                       <div key={i} className="flex items-center justify-between p-3 rounded border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                             <Globe className="w-4 h-4 text-slate-500" />
                             <span className="text-sm font-mono text-slate-300">
                               {['paypal-verify.com', 'secure-login.net', 'apple-id-support.info', 'chase-bank-verify.org', 'netflix-update.tv'][i % 5]}
                             </span>
                          </div>
                          <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">NEW REG</span>
                       </div>
                     ))}
                   </motion.div>
                   
                   <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 z-10" />
                   
                   {/* Center Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-slate-900/90 border border-blue-500/30 p-4 rounded-xl backdrop-blur-md shadow-2xl flex flex-col items-center gap-2">
                         <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                         <span className="text-xs font-bold text-blue-400 tracking-widest">LIVE FEED ACTIVE</span>
                      </div>
                   </div>
                 </motion.div>
               )}

               {/* SCENE 2: COMPARE (Similarity Engine) */}
               {features[activeFeature].visual === 'compare' && (
                  <motion.div 
                    key="compare"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
                    className="flex flex-col items-center gap-6 w-full max-w-md px-6"
                  >
                    {/* Legitimate Domain */}
                    <div className="w-full bg-slate-900/50 border border-green-500/30 p-4 rounded-lg flex justify-between items-center opacity-50">
                       <div className="flex flex-col">
                          <span className="text-xs text-green-500 font-bold uppercase mb-1">Your Brand</span>
                          <span className="font-mono text-lg text-white">facebook.com</span>
                       </div>
                       <div className="bg-green-500/20 p-2 rounded-full">
                          <Fingerprint className="w-5 h-5 text-green-500" />
                       </div>
                    </div>

                    <ArrowRight className="w-6 h-6 text-slate-500 rotate-90" />

                    {/* Malicious Domain */}
                    <div className="w-full bg-slate-900 border border-red-500/50 p-5 rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.1)] relative overflow-hidden">
                       <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl">
                          High Risk
                       </div>
                       <div className="flex justify-between items-end mb-4">
                          <div className="flex flex-col">
                             <span className="text-xs text-red-400 font-bold uppercase mb-1">Detected Threat</span>
                             {/* Emphasize the homoglyph visually */}
                             <span className="font-mono text-xl text-white">
                               fac<span className="text-red-500 underline decoration-wavy decoration-red-500/50">ẹ</span>book.com
                             </span>
                          </div>
                       </div>
                       
                       {/* Similarity Score */}
                       <div className="space-y-2">
                          <div className="flex justify-between text-xs text-slate-400">
                             <span>Similarity Score</span>
                             <span className="text-red-400 font-bold">96% Match</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }} animate={{ width: "96%" }} transition={{ delay: 0.2, duration: 1 }}
                               className="h-full bg-red-500" 
                             />
                          </div>
                          <p className="text-[10px] text-slate-500 mt-2">
                             Analysis: IDN Homoglyph detected (Cyrillic 'e').
                          </p>
                       </div>
                    </div>
                  </motion.div>
               )}

               {/* SCENE 3: WHOIS (Data Card) */}
               {features[activeFeature].visual === 'whois' && (
                  <motion.div 
                    key="whois"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    className="w-80 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl overflow-hidden"
                  >
                     <div className="h-2 bg-blue-600 w-full" />
                     <div className="p-5 space-y-4">
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                           <div className="p-2 bg-slate-900 rounded-lg border border-slate-700">
                              <FileText className="w-5 h-5 text-blue-400" />
                           </div>
                           <div>
                              <div className="text-xs text-slate-500 uppercase font-bold">Domain Info</div>
                              <div className="text-sm text-white font-mono">example-login.net</div>
                           </div>
                        </div>

                        <div className="space-y-3">
                           <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-500">Registrar</span>
                              <span className="text-slate-300">NameCheap, Inc.</span>
                           </div>
                           <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-500">Created</span>
                              <span className="text-slate-300">2023-11-02 (2 days ago)</span>
                           </div>
                           <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-500">Country</span>
                              <span className="text-slate-300 flex items-center gap-1">
                                 <span className="w-2 h-2 rounded-full bg-red-500" /> RU (Russia)
                              </span>
                           </div>
                        </div>

                        <div className="bg-slate-900 p-3 rounded border border-slate-800 mt-2">
                           <div className="flex items-center gap-2 mb-1">
                              <AlertTriangle className="w-3 h-3 text-yellow-500" />
                              <span className="text-[10px] font-bold text-yellow-500 uppercase">Suspicious Pattern</span>
                           </div>
                           <p className="text-[10px] text-slate-400 leading-tight">
                              Email address <span className="text-slate-300">admin@bad-actor.net</span> associated with 14 other phishing domains.
                           </p>
                        </div>
                     </div>
                  </motion.div>
               )}

               {/* SCENE 4: API (Code Block) */}
               {features[activeFeature].visual === 'api' && (
                  <motion.div 
                    key="api"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="w-[90%] max-w-md bg-[#0f172a] rounded-lg border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs"
                  >
                    {/* Window Controls */}
                    <div className="bg-slate-900 px-3 py-2 flex items-center justify-between border-b border-slate-800">
                       <div className="flex gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                       </div>
                       <div className="text-[10px] text-slate-500">webhook-listener.js</div>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-4 text-slate-300 space-y-1">
                       <div className="flex gap-2 text-slate-500">
                          <span>1</span> <span>// Incoming Webhook Payload</span>
                       </div>
                       <div className="flex gap-2">
                          <span className="text-slate-600">2</span> 
                          <span>
                             <span className="text-purple-400">const</span> alert <span className="text-blue-400">=</span> <span className="text-yellow-300">{"{"}</span>
                          </span>
                       </div>
                       <div className="flex gap-2">
                          <span className="text-slate-600">3</span> 
                          <span className="pl-4">
                             type: <span className="text-green-400">"domain_match"</span>,
                          </span>
                       </div>
                       <div className="flex gap-2">
                          <span className="text-slate-600">4</span> 
                          <span className="pl-4">
                             domain: <span className="text-green-400">"g0ogle-login.com"</span>,
                          </span>
                       </div>
                       <div className="flex gap-2">
                          <span className="text-slate-600">5</span> 
               
                       </div>
                       <div className="flex gap-2">
                          <span className="text-slate-600">6</span> 
                          <span className="pl-4">
                             mx_records: <span className="text-purple-400">true</span>
                          </span>
                       </div>
                       <div className="flex gap-2">
                          <span className="text-slate-600">7</span> 
                          <span><span className="text-yellow-300">{"}"}</span>;</span>
                       </div>
                       
                       <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                          className="mt-4 p-2 bg-blue-900/20 border-l-2 border-blue-500 text-blue-200"
                       >
                          <span className="font-bold">POST</span> /api/v1/alert sent successfully.
                       </motion.div>
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