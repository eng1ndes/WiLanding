import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  SearchCheck,
  Server,
  GlobeLock,
  Workflow,
  AlertTriangle,
  Terminal,
  Globe,
  MessageSquare,
  Copy,
  Send,
  Bug,
  Rss,
  Scan,
  Cloud,
  Database,
  Activity
} from "lucide-react";

const features = [
  {
    id: 0,
    icon: Shield,
    title: "Stop Credential Abuse",
    description: "Identify and neutralize stolen usernames and passwords before attackers can use them to infiltrate your systems.",
    visual: "shield"
  },
  {
    id: 1,
    icon: SearchCheck,
    title: "Expose Hidden Threats",
    description: "Investigate domains, IPs, and hostnames to uncover compromised assets hiding in dark web data.",
    visual: "terminal"
  },
  {
    id: 2,
    icon: Server,
    title: "Spot Infected Devices",
    description: "Detect endpoints infected by infostealers and other malware to cut off attacker footholds fast.",
    visual: "map"
  },
  {
    id: 3,
    icon: GlobeLock,
    title: "Monitor Dark Web Mentions",
    description: "Get real-time alerts when your data or brand surfaces in underground forums and markets.",
    visual: "feed"
  },
  {
    id: 4,
    icon: Workflow,
    title: "Detect Look-alike Domains",
    description: "Stay informed when someone registers a domain that mimics your brand for phishing attacks.",
    visual: "clone"
  },
];

export default function UnifiedIntel() {
  const [activeFeature, setActiveFeature] = useState(0);

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
            Unified Intelligence
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Built for Security Teams, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Enterprises & Researchers
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We continuously collect from infostealers, breach repos, dark web forums, 
            Telegram channels, and paste sites. Curated for signal, not noise.
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
               
               {/* SCENE 1: SHIELD (Credential Abuse) */}
{features[activeFeature].visual === 'shield' && (
  <motion.div
    key="shield-gathering-v3"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="relative h-[320px] w-full flex items-center justify-center"
  >
    {/* --- 1. The Threat Sources (Outer Nodes) --- */}
    {[
      { 
        Icon: Send, 
        label: "Telegram Channels", 
        // Explicitly define classes for Tailwind to pick them up
        color: "text-sky-400", 
        dotColor: "bg-sky-400", 
        containerBg: "bg-sky-500/10", 
        borderColor: "border-sky-500/20",
        stroke: "#38bdf8", // Hex for stroke logic
        x: -110, y: -80, delay: 0 
      },
      { 
        Icon: Bug, 
        label: "Hacker Forums", 
        color: "text-red-400", 
        dotColor: "bg-red-400", 
        containerBg: "bg-red-500/10", 
        borderColor: "border-red-500/20",
        stroke: "#f87171",
        x: 110, y: -80, delay: 0.4 
      },
      { 
        Icon: GlobeLock, 
        label: "Dark Web Resources", 
        color: "text-purple-400", 
        dotColor: "bg-purple-400", 
        containerBg: "bg-purple-500/10", 
        borderColor: "border-purple-500/20",
        stroke: "#c084fc",
        x: -110, y: 80, delay: 0.8 
      },
      { 
        Icon: Rss, 
        label: "Threat Feeds", 
        color: "text-orange-400", 
        dotColor: "bg-orange-400", 
        containerBg: "bg-orange-500/10", 
        borderColor: "border-orange-500/20",
        stroke: "#fb923c",
        x: 110, y: 80, delay: 1.2 
      },
    ].map((source, i) => (
      <div 
        key={i} 
        className="absolute z-20 flex flex-col items-center gap-2" 
        style={{ transform: `translate(${source.x}px, ${source.y}px)` }}
      >
        
        {/* Floating Source Icon */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: source.delay }}
          className={`p-2.5 rounded-lg border backdrop-blur-sm ${source.containerBg} ${source.borderColor} shadow-lg`}
        >
          <source.Icon className={`w-5 h-5 ${source.color}`} />
        </motion.div>

        {/* Source Label */}
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + source.delay }}
          className={`text-[10px] font-bold uppercase tracking-wider ${source.color} bg-slate-900/80 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap`}
        >
          {source.label}
        </motion.span>
        
        {/* The Connector Line */}
        <svg className="absolute top-4 left-1/2 -z-10 overflow-visible" style={{ width: 0, height: 0 }}>
          <line 
            x1="0" y1="0" 
            x2={-source.x} y2={-source.y} 
            stroke={source.stroke}
            strokeOpacity="0.2"
            strokeWidth="1" 
            strokeDasharray="3 3"
          />
        </svg>

        {/* The Data Packet Signal */}
        {/* Adjusted start position to center of icon (top-4 is approx center of 40px height) */}
        <motion.div
          className={`absolute top-4 left-1/2 w-2 h-2 rounded-full z-10 ${source.dotColor} shadow-[0_0_8px_currentColor]`}
          style={{ marginLeft: "-4px", marginTop: "-4px" }} // Exact centering
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: [0, -source.x], // Move exactly to center
            y: [0, -source.y], // Move exactly to center
            opacity: [0, 1, 1, 0], // Fade in, travel, fade out on impact
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeIn", 
            delay: source.delay 
          }}
        />
      </div>
    ))}

    {/* --- 2. The Central Processing Core (Shield) --- */}
    <div className="relative z-30 flex flex-col items-center justify-center mt-4">
       {/* Impact Ripples */}
       {[0, 0.5, 1].map((delay) => (
         <motion.div
           key={delay}
           className="absolute border border-blue-500/30 rounded-full"
           initial={{ width: "50px", height: "50px", opacity: 1 }}
           animate={{ width: "120px", height: "120px", opacity: 0 }}
           transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "easeOut" }}
         />
       ))}
       
       {/* Main Icon */}
       <Shield className="relative z-10 w-16 h-16 text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" strokeWidth={1.5} />

        {/* Status Badge */}
       <div className="absolute -bottom-14 flex gap-2 whitespace-nowrap">
          <motion.div 
            initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
            className="bg-slate-900/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-full text-[10px] text-slate-300 flex items-center gap-2 shadow-xl"
          >
             <Database className="w-3 h-3 text-blue-400 animate-pulse" /> 
             <span>Ingesting Intelligence...</span>
          </motion.div>
       </div>
    </div>
  </motion.div>
)}

               {/* SCENE 2: TERMINAL (Hidden Threats) */}
               {features[activeFeature].visual === 'terminal' && (
                  <motion.div 
                    key="terminal"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="w-[85%] bg-slate-950 rounded-lg border border-slate-800 shadow-xl font-mono text-xs overflow-hidden relative"
                  >
                    {/* Matrix Rain Effect (Simplified) */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                           <motion.div
                             key={i}
                             className="absolute top-0 w-px bg-green-500/50 h-20"
                             style={{ left: `${i * 20 + 10}%` }}
                             animate={{ top: ["-100%", "100%"] }}
                             transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                           />
                        ))}
                    </div>

                    <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex gap-2 relative z-10">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                       <div className="ml-auto text-[9px] text-slate-500">BASH</div>
                    </div>
                    
                    <div className="p-4 space-y-2 text-slate-300 relative z-10">
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                          <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> intel search --target "admin@corp.com"
                       </motion.div>
                       
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-slate-500">
                          [+] Initializing dark web scrapers...
                       </motion.div>
                       
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-slate-500">
                          [+] Scanning 140+ sources... <span className="animate-pulse">_</span>
                       </motion.div>

                       <motion.div 
                          initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2.2 }}
                          className="bg-slate-900/80 p-3 rounded border-l-2 border-red-500 mt-2 backdrop-blur-sm"
                       >
                          <div className="flex justify-between items-center mb-1">
                             <p className="text-red-400 font-bold flex items-center gap-2"><AlertTriangle className="w-3 h-3" /> HIT FOUND</p>
                             <span className="text-[10px] bg-red-500/10 text-red-400 px-1 rounded">CRITICAL</span>
                          </div>
                          <p>Source: <span className="text-yellow-400">Infostealer Infection</span></p>
                          <p className="flex justify-between">
                             <span>Password:</span> 
                             <span className="text-slate-500 blur-[2px] hover:blur-none transition-all cursor-help">password123</span>
                          </p>
                       </motion.div>
                    </div>
                  </motion.div>
               )}

               {/* SCENE 3: MAP (Infected Devices) */}
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

               {/* SCENE 4: FEED (Dark Web Mentions) */}
               {features[activeFeature].visual === 'feed' && (
                  <motion.div 
                    key="feed"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-[85%] relative"
                  >
                     <div className="absolute -top-6 right-0 flex items-center gap-2 text-[10px] text-green-400 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        LIVE FEED
                     </div>

                     <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                           <motion.div 
                              key={i}
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ 
                                 delay: i * 0.4, 
                                 type: "spring", stiffness: 100 
                              }}
                              className="bg-slate-800/50 border border-white/5 p-3 rounded-lg flex gap-3 hover:bg-slate-800/80 transition-colors"
                           >
                              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                 <MessageSquare className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                                    <span>{i === 1 ? "Telegram" : i === 2 ? "XSS Forum" : "Dark Market"}</span>
                                    <span>{i}m ago</span>
                                 </div>
                                 <div className="text-xs text-slate-200 truncate">
                                    {i === 1 ? "WTS: Full database dump of [Brand]..." : i === 2 ? "Looking for [Brand] employee logins..." : "Selling RDP access to corporate network..."}
                                 </div>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               )}

               {/* SCENE 5: CLONE (Look-alike Domains) */}
               {features[activeFeature].visual === 'clone' && (
                  <motion.div 
                    key="clone"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="relative w-full px-10 flex flex-col items-center gap-6"
                  >
                     {/* Scanner Line */}
                     <motion.div 
                        className="absolute top-0 bottom-0 w-[2px] bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)] z-20"
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                     />

                     <div className="flex items-center gap-8 w-full justify-center">
                         {/* Original */}
                         <div className="flex flex-col items-center gap-3 opacity-50 grayscale">
                            <div className="w-16 h-16 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center">
                               <Shield className="w-8 h-8 text-slate-500" />
                            </div>
                            <span className="text-xs text-slate-500">whiteintel.io</span>
                         </div>
                         
                         {/* Match Indicator */}
                         <motion.div 
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}
                            className="h-8 px-3 rounded bg-red-500/10 border border-red-500/30 flex items-center text-xs text-red-500 font-bold"
                         >
                            98% MATCH
                         </motion.div>

                         {/* Fake (Glitching) */}
                         <div className="flex flex-col items-center gap-3 relative">
                            <motion.div 
                               animate={{ x: [-1, 1, -1, 0] }}
                               transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 2 }}
                               className="w-20 h-20 rounded-xl bg-slate-800 border-2 border-red-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                            >
                               <Copy className="w-8 h-8 text-red-400" />
                            </motion.div>
                            <span className="text-xs text-red-400 font-bold tracking-wider">white-intel.net</span>
                            
                            {/* Phishing Tag */}
                            <motion.div 
                               initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
                               className="absolute -top-4 -right-4 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-lg"
                            >
                               PHISHING
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