import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  SearchCheck,
  Server,
  Workflow,
  AlertTriangle,
  Terminal,
  CheckCircle2,
  Lock,
  Globe,
  User
} from "lucide-react";

const featureMeta = [
  { id: 0, icon: Shield, visual: "shield" },
  { id: 1, icon: SearchCheck, visual: "terminal" },
  { id: 2, icon: Server, visual: "map" },
  { id: 3, icon: Workflow, visual: "workflow" },
];

export default function Capabilities() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);
  const features = featureMeta.map((meta, i) => ({
    ...meta,
    title: t(`ato.capabilities.items.${i}.title`),
    description: t(`ato.capabilities.items.${i}.description`),
  }));

  return (
    <section className="relative bg-[#020617] text-white pb-24 pt-32 lg:pt-40 overflow-hidden">
      
      {/* --- TOP TRANSITION (White to Dark) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">

      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {t("ato.capabilities.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            {t("ato.capabilities.title")}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("ato.capabilities.description")}
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
                  
                  {/* Progress Bar (Only visible when active) */}
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

          {/* RIGHT: Dynamic Visual (CSS-Only Mockups) */}
          <div className="relative h-[400px] md:h-[500px] w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
             {/* Grid background inside the mockup */}
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

             <AnimatePresence mode="wait">
               
               {/* SCENE 1: SHIELD / PROTECTION */}
               {features[activeFeature].visual === 'shield' && (
                 <motion.div 
                    key="shield"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
                    className="relative flex flex-col items-center gap-6"
                 >
                   <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-20 rounded-full" />
                      <Shield className="w-32 h-32 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                      <motion.div 
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full border border-slate-900"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
                      >
                        BLOCKED
                      </motion.div>
                   </div>
                   <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-4 rounded-lg w-64 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                         <User className="w-3 h-3" /> user@company.com
                      </div>
                      <div className="flex items-center gap-2 text-xs text-red-400">
                         <AlertTriangle className="w-3 h-3" /> Stolen Corporate Record
                      </div>
                      <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[80%]"></div>
                      </div>
                   </div>
                 </motion.div>
               )}

               {/* SCENE 2: TERMINAL / SOURCE */}
               {features[activeFeature].visual === 'terminal' && (
                  <motion.div 
                    key="terminal"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="w-[90%] max-w-sm bg-slate-950 rounded-lg border border-slate-800 shadow-2xl font-mono text-xs overflow-hidden"
                  >
                    <div className="bg-slate-900 px-3 py-2 flex gap-2 border-b border-slate-800">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-4 space-y-2 text-slate-300">
                       <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> search --domain whiteintel.io</p>
                       <p className="opacity-50">Searching dark web sources...</p>
                       <div className="pl-2 border-l-2 border-red-500/30 my-2">
                          <p className="text-red-400">! MATCH FOUND</p>
                          <p>Source: <span className="text-yellow-400">Stealer Log #8821</span></p>
                          <p>Date: <span className="text-slate-400">2023-10-14</span></p>
                       </div>
                       <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> _</p>
                    </div>
                  </motion.div>
               )}

               {/* SCENE 3: MAP / INFECTED DEVICES */}
                   {features[activeFeature].visual === 'map' && (
            <motion.div 
              key="map"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center bg-[#020617] rounded-2xl overflow-hidden border border-slate-800/50"
            >
              {/* 1. Tactical Background Grid */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" 
                style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
              />
          
              {/* 2. Concentric Radar Rings (Perfect O-Shape) */}
              {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full border border-blue-500/10"
                  style={{ width: `${scale * 100}%`, height: `${scale * 100}%`, maxWidth: '500px', maxHeight: '500px' }}
                />
              ))}
          
              {/* 3. The Main Solar Sweep */}
              <motion.div 
                className="absolute w-[500px] h-[500px] rounded-full z-10 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/20 via-transparent to-transparent border-l border-blue-500/40 origin-bottom-left" 
                  style={{ borderRadius: '100% 0 0 0' }}
                />
                {/* Leading Edge Spark */}
                <div className="absolute top-0 left-1/2 w-px h-1/2 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] origin-bottom" />
              </motion.div>
          
              {/* 4. Coordinate Crosshairs */}
              <div className="absolute w-full h-px bg-slate-800/50" />
              <div className="absolute h-full w-px bg-slate-800/50" />
          
              {/* 5. Geospatial Data Nodes (Infections) */}
              {[
                { id: 1, t: '22%', l: '35%', ip: '104.21.4.12', loc: 'RU' },
                { id: 2, t: '45%', l: '65%', ip: '192.168.1.44', loc: 'CN' },
                { id: 3, t: '70%', l: '40%', ip: '45.122.0.12', loc: 'BR' },
              ].map((node) => (
                <motion.div 
                  key={node.id}
                  className="absolute z-20"
                  style={{ top: node.t, left: node.l }}
                >
                  {/* The Ping Dot */}
                  <motion.div 
                    className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                    animate={{ opacity: [0, 1, 0.3], scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: node.id * 1.2 }}
                  />
                  
                  {/* Floating Data Readout (Synced with Ping) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: [0, 1, 0], x: [10, 15, 10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: node.id * 1.2 }}
                    className="ml-4 mt-[-10px] bg-slate-950/80 border border-red-500/20 backdrop-blur-sm px-2 py-1 rounded flex flex-col gap-0.5"
                  >
                    <span className="text-[8px] font-mono text-red-400 font-bold uppercase tracking-tighter">Infection Detected</span>
                    <span className="text-[9px] font-mono text-white opacity-90">{node.ip} [{node.loc}]</span>
                  </motion.div>
                </motion.div>
              ))}
          
              {/* 6. Active Scanner Status HUD */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute bottom-6 left-6 z-30 flex flex-col gap-1 font-mono"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Signal: Intercepting</span>
                </div>
                <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em]">Long-Range Scan Active</div>
              </motion.div>
          
              {/* 7. Bottom Central Alert Banner */}
          
            </motion.div>
          )}

               {/* SCENE 4: WORKFLOW / AUTOMATION */}
               {features[activeFeature].visual === 'workflow' && (
                  <motion.div 
                    key="workflow"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center">
                          <AlertTriangle className="w-5 h-5 text-red-400" />
                       </div>
                       <motion.div 
                          className="h-[2px] w-12 bg-slate-700 overflow-hidden"
                       >
                          <motion.div className="h-full bg-blue-500 w-1/2" animate={{ x: [-20, 50] }} transition={{ duration: 1, repeat: Infinity }} />
                       </motion.div>
                       <div className="w-12 h-12 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20 flex items-center justify-center">
                          <Workflow className="w-5 h-5 text-white" />
                       </div>
                       <motion.div 
                          className="h-[2px] w-12 bg-slate-700 overflow-hidden"
                       >
                          <motion.div className="h-full bg-green-500 w-1/2" animate={{ x: [-20, 50] }} transition={{ duration: 1, repeat: Infinity, delay: 0.5 }} />
                       </motion.div>
                       <div className="w-12 h-12 bg-slate-800 rounded-lg border border-green-500/30 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                       </div>
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-4 bg-slate-900/50 px-3 py-1 rounded">
                       STATUS: <span className="text-green-400">REMEDIATED</span>
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