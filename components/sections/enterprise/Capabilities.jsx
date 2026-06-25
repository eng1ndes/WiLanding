import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  SearchCheck,
  Server,
  Workflow,
  Lock,
  UserCheck,
  AlertTriangle,
  Laptop,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

const featureMeta = [
  { id: 0, icon: Shield, visual: "sso" },
  { id: 1, icon: SearchCheck, visual: "trace" },
  { id: 2, icon: Server, visual: "endpoint" },
  { id: 3, icon: Workflow, visual: "automate" },
];

export default function Capabilities() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);
  const features = featureMeta.map((meta, i) => ({
    ...meta,
    title: t(`enterprise.capabilities.items.${i}.title`),
    description: t(`enterprise.capabilities.items.${i}.description`),
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
          {/* Curve dips DOWN from white into dark */}
          <path
            d="M0,0 C240,100 1200,100 1440,0 L1440,0 L0,0 Z"
            className="fill-white" 
          />
        </svg>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {t("enterprise.capabilities.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t("enterprise.capabilities.title")}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("enterprise.capabilities.description")}
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
                      <p className={`text-medium leading-relaxed transition-colors ${
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
               
               {/* SCENE 1: SSO SHIELD (Prevent Compromise) */}
               {features[activeFeature].visual === 'sso' && (
                 <motion.div 
                    key="sso"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center gap-6"
                 >
                    <div className="relative">
                       {/* The Shield */}
                       <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30 z-10 relative">
                          <Lock className="w-10 h-10 text-white" />
                       </div>
                       
             <motion.div 
    key="credential_detect"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="relative w-full h-full flex flex-col items-center justify-center p-8"
  >
    {/* Background Matrix/Stream Effect */}
    <div className="absolute inset-0 opacity-20 mask-image-linear-to-b">
       {[...Array(10)].map((_, i) => (
          <motion.div 
             key={i}
             className="absolute h-[1px] bg-blue-500 w-full"
             style={{ top: `${i * 10}%`, opacity: 0.3 }}
             animate={{ opacity: [0, 0.5, 0] }}
             transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
       ))}
    </div>

    {/* Main Detection Window */}
    <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
       
       {/* Header */}
       <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-3">
          <span className="text-[10px] font-mono text-slate-400">LOG_ANALYZER_V1.0</span>
          <div className="flex gap-1.5">
             <div className="w-2 h-2 rounded-full bg-slate-600"></div>
             <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>
       </div>

       {/* Data Rows */}
       <div className="p-4 space-y-3 font-mono text-xs">
          
          {/* Row 1: Safe */}
          <div className="flex items-center gap-3 opacity-30">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
             <span className="text-slate-500">user_8821</span>
             <span className="ml-auto text-slate-600">SAFE</span>
          </div>

          {/* Row 2: Safe */}
          <div className="flex items-center gap-3 opacity-30">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
             <span className="text-slate-500">admin_sys</span>
             <span className="ml-auto text-slate-600">SAFE</span>
          </div>

          {/* Row 3: DETECTED (Animated) */}
          <motion.div 
             initial={{ backgroundColor: "rgba(30,41,59,0)" }}
             animate={{ backgroundColor: "rgba(239,68,68,0.1)" }}
             transition={{ delay: 0.5 }}
             className="flex items-center gap-3 p-2 -mx-2 rounded border border-transparent animate-pulse border-red-500/30"
          >
             <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)] animate-pulse" />
             <div className="flex flex-col">
                <span className="text-white font-bold">m.thompson@acme.co</span>
                <span className="text-[9px] text-red-400">Pass: P@ssw0rd123!</span>
             </div>
             <div className="ml-auto flex flex-col items-end">
                <span className="text-red-500 font-bold tracking-wider">LEAKED</span>
                <span className="text-[8px] text-slate-400">Source: Stealer</span>
             </div>
          </motion.div>

          {/* Row 4: Safe */}
          <div className="flex items-center gap-3 opacity-30">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
             <span className="text-slate-500">dev_team</span>
             <span className="ml-auto text-slate-600">SAFE</span>
          </div>

       </div>
       
       {/* Bottom Alert Bar */}
       <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-red-500 text-white p-2 text-[10px] font-bold text-center tracking-widest uppercase"
       >
          Credential Match Confirmed
       </motion.div>

    </div>
  </motion.div>

                       {/* Block Animation */}
                       <motion.div 
                          className="absolute inset-0 border-2 border-red-500 rounded-2xl scale-125 opacity-0"
                          animate={{ scale: [1.2, 1.4], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                       />
                    </div>
                    
                    <div className="bg-slate-900/80 backdrop-blur border border-white/10 px-4 py-2 rounded-lg text-sm text-green-400 flex items-center gap-2">
                       <Shield className="w-4 h-4" />
                       Credential Stuffing Blocked
                    </div>
                 </motion.div>
               )}

               {/* SCENE 2: USER TRACE (Investigate Exposures) */}
               {features[activeFeature].visual === 'trace' && (
                  <motion.div 
                    key="trace"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="w-[85%] bg-slate-950 rounded-lg border border-slate-800 shadow-xl font-mono text-xs overflow-hidden"
                  >
                    <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                       <div className="ml-auto text-slate-500">Query: alice@corp.com</div>
                    </div>
                    <div className="p-4 space-y-3">
                       <div className="flex items-center gap-2 text-slate-400">
                          <SearchCheck className="w-3 h-3" /> Searching 150M+ Records...
                       </div>
                       
                       <motion.div 
                          initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                          className="bg-slate-900 p-2 rounded border-l-2 border-yellow-500"
                       >
                          <p className="text-yellow-500 font-bold mb-1">Exposure Found</p>
                          <p className="text-slate-300">Source: Stealer Log (Redline)</p>
                          <p className="text-slate-500">Date: 2 days ago</p>
                       </motion.div>

                       <motion.div 
                          initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }}
                          className="bg-slate-900 p-2 rounded border-l-2 border-red-500"
                       >
                          <p className="text-red-400 font-bold mb-1">Critical Match</p>
                          <p className="text-slate-300">Asset: VPN Credential</p>
                          <p className="text-slate-500">Status: <span className="text-red-400">Active</span></p>
                       </motion.div>
                    </div>
                  </motion.div>
               )}

               {/* SCENE 3: ENDPOINT (Risky Devices) */}
{/* SCENE: INFECTED DEVICE FINGERPRINTING */}
{features[activeFeature].visual === 'endpoint' && ( /* Assuming mapped to 'map' or your specific key */
  <motion.div 
    key="infected_device"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="relative w-full h-full flex items-center justify-center bg-[#0b1121]"
  >
     {/* Background Grid */}
     <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', 
            backgroundSize: '20px 20px', 
            opacity: 0.2 
          }} 
     />

     {/* Central Device Mockup (Wireframe Laptop) */}
     <div className="relative z-10 flex flex-col items-center">
        {/* Device Icon */}
        <div className="relative w-32 h-20 border-2 border-slate-600 rounded-lg bg-slate-800/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">
           <div className="w-1 h-1 bg-white rounded-full absolute top-2"></div>
           {/* Screen Content - Glitch Effect */}
           <motion.div 
              className="w-24 h-12 bg-slate-900/80 rounded flex items-center justify-center overflow-hidden relative"
           >
              <motion.div 
                 className="absolute inset-0 bg-red-500/10"
                 animate={{ opacity: [0, 0.5, 0] }}
                 transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="text-[8px] font-mono text-slate-500">SYSTEM_COMPROMISED</span>
           </motion.div>
        </div>
        {/* Laptop Base */}
        <div className="w-40 h-3 bg-slate-700 rounded-b-lg border-t border-slate-600 shadow-xl"></div>

        {/* The Scanning Laser Beam */}
        <motion.div 
           className="absolute top-0 left-[-10%] w-[120%] h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] z-20"
           animate={{ top: ["0%", "100%", "0%"] }}
           transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />
     </div>

     {/* Floating Fingerprint Data Points (Connecting to device) */}
     
     {/* 1. IP Address Node */}
     <motion.div 
        className="absolute top-1/4 left-10 md:left-20 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
     >
        <div className="flex flex-col items-end">
           <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Public IP</span>
           <span className="text-xs text-blue-400 font-mono bg-blue-500/10 px-1 border border-blue-500/20 rounded">
              104.22.51.12
           </span>
        </div>
        <div className="w-12 h-px bg-slate-700 relative">
           <div className="absolute right-0 w-1 h-1 bg-blue-500 rounded-full"></div>
        </div>
     </motion.div>

     {/* 2. Hardware ID Node */}
     <motion.div 
        className="absolute bottom-1/3 right-8 md:right-16 flex items-center gap-2"
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
     >
        <div className="w-12 h-px bg-slate-700 relative">
           <div className="absolute left-0 w-1 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <div className="flex flex-col">
           <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">HWID Signature</span>
           <span className="text-xs text-slate-300 font-mono">
              7C99-12F1-A882
           </span>
        </div>
     </motion.div>

     {/* 3. Malware Detection Alert (Bottom Center) */}
     <motion.div 
        className="absolute bottom-10 bg-slate-900 border border-red-500/30 rounded-lg p-3 flex items-center gap-4 shadow-xl shadow-red-900/10"
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }}
     >
        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
           <div className="w-4 h-4 text-red-500">
              {/* Simple bug/alert icon shape */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
           </div>
        </div>
        <div>
           <div className="text-[10px] text-red-400 font-bold uppercase tracking-widest mb-0.5">Threat Identified</div>
           <div className="text-sm text-white font-medium">Stealer Infection</div>
           <div className="text-[10px] text-slate-500 mt-0.5">Path: C:\Users\Admin\AppData...</div>
        </div>
     </motion.div>

  </motion.div>
)}

               {/* SCENE 4: AUTOMATE (Workflow Response) */}
               {features[activeFeature].visual === 'automate' && (
                  <motion.div 
                    key="automate"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 w-[80%]"
                  >
                     {/* Step 1: Alert */}
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-white/5"
                     >
                        <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-400"><AlertTriangle className="w-4 h-4"/></div>
                        <div className="text-xs text-slate-300">New Exposure Alert</div>
                     </motion.div>

                     {/* Connector Line */}
                     <div className="h-4 w-0.5 bg-slate-700 ml-7"></div>

                     {/* Step 2: Action */}
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                        className="flex items-center gap-3 bg-blue-900/20 p-3 rounded-lg border border-blue-500/30"
                     >
                        <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400"><RefreshCw className="w-4 h-4 animate-spin-slow"/></div>
                        <div className="text-xs text-white">Trigger Password Reset</div>
                     </motion.div>

                     {/* Connector Line */}
                     <div className="h-4 w-0.5 bg-slate-700 ml-7"></div>

                     {/* Step 3: Success */}
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }}
                        className="flex items-center gap-3 bg-green-900/20 p-3 rounded-lg border border-green-500/30"
                     >
                        <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400"><CheckCircle2 className="w-4 h-4"/></div>
                        <div className="text-xs text-white">User Notified & Ticket Closed</div>
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