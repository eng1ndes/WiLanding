import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Mail,
  SearchCheck,
  Server,
  Workflow,
  Briefcase,
  FileJson,
  Webhook,
  CheckCircle2,
  Building2,
  ArrowRight
} from "lucide-react";

const featureIcons = [Shield, SearchCheck, Server, Workflow];
const featureVisuals = ["tenants", "context", "stack", "automate"];

export default function Capabilities() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = featureIcons.map((icon, idx) => ({
    id: idx,
    icon,
    title: t(`mssp.capabilities.items.${idx}.title`),
    description: t(`mssp.capabilities.items.${idx}.description`),
    visual: featureVisuals[idx],
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
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            {t("mssp.capabilities.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t("mssp.capabilities.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {t("mssp.capabilities.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("mssp.capabilities.description")}
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
                      ? "bg-slate-800/60 border-purple-500/30 shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]" 
                      : "bg-transparent border-transparent hover:bg-slate-800/30 hover:border-white/5"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-purple-600 text-white scale-110 shadow-lg shadow-purple-900/50" 
                        : "bg-slate-800 text-slate-400 group-hover:text-purple-400 group-hover:bg-slate-700"
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
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-purple-500 rounded-l-xl"
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
               
               {/* SCENE 1: TENANTS (Multi-Tenant Management) */}
               {features[activeFeature].visual === 'tenants' && (
                 <motion.div 
                    key="tenants"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col gap-3 w-[80%]"
                 >
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Active Tenants</div>
                    
                    {/* Tenant 1 */}
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                       className="bg-slate-800 p-4 rounded-xl border border-purple-500/50 flex items-center justify-between shadow-lg shadow-purple-900/20"
                    >
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400"><Briefcase className="w-4 h-4"/></div>
                          <div>
                             <div className="text-sm font-bold text-white">Acme Corp</div>
                             <div className="text-[10px] text-slate-400">acme.com • 3 Domains</div>
                          </div>
                       </div>
                       <div className="text-xs text-red-400 font-bold bg-red-900/20 px-2 py-1 rounded">2 CRITICAL</div>
                    </motion.div>

                    {/* Tenant 2 */}
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                       className="bg-slate-800 p-4 rounded-xl border border-white/5 flex items-center justify-between opacity-60"
                    >
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-slate-400"><Building2 className="w-4 h-4"/></div>
                          <div>
                             <div className="text-sm font-bold text-white">Beta Logistics</div>
                             <div className="text-[10px] text-slate-400">beta-log.com • 1 IP Range</div>
                          </div>
                       </div>
                       <div className="text-xs text-green-400 font-bold bg-green-900/20 px-2 py-1 rounded">SECURE</div>
                    </motion.div>
                 </motion.div>
               )}

               {/* SCENE 2: CONTEXT (Analyst Ready Data) */}
               {features[activeFeature].visual === 'context' && (
                  <motion.div 
                    key="context"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="w-[85%] bg-slate-950 rounded-lg border border-slate-800 shadow-xl overflow-hidden"
                  >
                     <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900">
                        <div className="flex items-center gap-2">
                           <FileJson className="w-4 h-4 text-purple-400" />
                           <span className="text-xs text-slate-300 font-mono">enrichment_data.json</span>
                        </div>
                     </div>
                     <div className="p-4 font-mono text-[10px] leading-relaxed">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                           <span className="text-purple-400">"threat_level"</span>: <span className="text-red-400">"HIGH"</span>,
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                           <span className="text-purple-400">"source"</span>: <span className="text-green-400">"Stealer Log #882"</span>,
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                           <span className="text-purple-400">"compromised_assets"</span>: [
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="pl-4">
                           {"{"} <span className="text-blue-300">"hostname"</span>: "WS-FIN-01", <span className="text-blue-300">"malware_path"</span>: "c:\" {"}"}
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                           ]
                        </motion.div>
                     </div>
                  </motion.div>
               )}

               {/* SCENE 3: STACK (Integration Flow) */}
               {features[activeFeature].visual === 'stack' && (
                 <motion.div 
                    key="stack"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-4 relative w-full"
                 >
                    {/* Whiteintel Node */}
                    <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)] z-10 relative">
                       <Shield className="w-8 h-8 text-white" />
                       <div className="absolute -bottom-6 text-[10px] text-white font-bold">Whiteintel</div>
                    </div>

                    {/* Animated Particles */}
                    <div className="w-24 h-px bg-slate-700 relative overflow-hidden">
                       <motion.div 
                          className="absolute top-0 w-1/2 h-full bg-purple-400 blur-[2px]"
                          animate={{ left: ["-50%", "150%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                       />
                    </div>

                    {/* Destination Nodes (Stack) */}
                    <div className="flex flex-col gap-3">
                       <motion.div 
                          initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                          className="bg-slate-800 border border-white/10 px-4 py-2 rounded-lg text-xs text-slate-300 flex items-center gap-2"
                       >
                          <Webhook className="w-3 h-3 text-blue-400" /> Splunk / SIEM
                       </motion.div>
                       <motion.div 
                          initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                          className="bg-slate-800 border border-white/10 px-4 py-2 rounded-lg text-xs text-slate-300 flex items-center gap-2"
                       >
                          <Briefcase className="w-3 h-3 text-green-400" /> Jira / ITSM
                       </motion.div>
                                 <motion.div 
                          initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                          className="bg-slate-800 border border-white/10 px-4 py-2 rounded-lg text-xs text-slate-300 flex items-center gap-2"
                       >
                          <Mail className="w-3 h-3 text-green-400" /> Slack
                       </motion.div>
                    </div>
                 </motion.div>
               )}

               {/* SCENE 4: AUTOMATE (Playbook Response) */}
               {features[activeFeature].visual === 'automate' && (
                  <motion.div 
                    key="automate"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 w-[80%]"
                  >
                     <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>Active Playbook</span>
                        <span className="text-green-400 font-mono">RUNNING</span>
                     </div>
                     
                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                        className="bg-slate-800 p-3 rounded-lg border border-purple-500/30 flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <Workflow className="w-4 h-4 text-purple-400" />
                           <span className="text-xs text-white">Auto-Triage Ticket</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                     </motion.div>

                     {/* Connector */}
                     <div className="flex justify-center -my-1 text-slate-600"><div className="h-4 w-px bg-slate-700"></div></div>

                     <motion.div 
                        initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                        className="bg-slate-800 p-3 rounded-lg border border-white/5 flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                           <Webhook className="w-4 h-4 text-blue-400" />
                           <span className="text-xs text-white">Notify Customer</span>
                        </div>
                        <div className="w-3 h-3 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
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