import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShoppingCart, // For Sales
  MessageSquareWarning, // For Chatter
  Siren,
  Terminal,
  Network, // For Access
  FileCode, // For Exploits
  AlertTriangle,
  SearchCode
} from "lucide-react";

const featureIcons = [MessageSquareWarning, Network, ShoppingCart, Siren];
const featureVisuals = ["chatter", "access", "market", "alert"];

export default function DarkWebMentionMonitoring() {
  const { t } = useTranslation("features");
  const [activeFeature, setActiveFeature] = useState(0);

  const features = featureIcons.map((icon, idx) => ({
    id: idx,
    icon,
    title: t(`darkweb.capabilities.items.${idx}.title`),
    description: t(`darkweb.capabilities.items.${idx}.description`),
    visual: featureVisuals[idx],
  }));

  return (
    <section className="relative bg-[#020617] text-white pt-32 pb-24 px-6 md:px-10 overflow-hidden">

      {/* --- TOP CURVE TRANSITION --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
          <path d="M0,0 C240,100 1200,100 1440,0 L1440,0 L0,0 Z" className="fill-slate-50" />
        </svg>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            {t("darkweb.capabilities.badge")}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            {t("darkweb.capabilities.title")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400">
              {t("darkweb.capabilities.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("darkweb.capabilities.description")}
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
                      ? "bg-slate-900/80 border-indigo-500/30 shadow-[0_0_30px_-10px_rgba(99,102,241,0.15)]" 
                      : "bg-transparent border-transparent hover:bg-slate-900/40 hover:border-white/5"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Box */}
                    <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-indigo-600 text-white scale-110 shadow-lg shadow-indigo-900/50" 
                        : "bg-slate-800 text-slate-400 group-hover:text-indigo-400 group-hover:bg-slate-700"
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
                      layoutId="activeLineIndigo"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-500 rounded-l-xl"
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
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

             <AnimatePresence mode="wait">
               
               {/* SCENE 1: CHATTER (Forums) */}
               {features[activeFeature].visual === 'chatter' && (
                 <motion.div 
                    key="chatter"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
                    className="w-[85%] flex flex-col gap-3"
                 >
                    {/* Forum Header */}
                    <div className="bg-slate-900/80 p-2 rounded-t flex items-center gap-2 border-b border-white/5">
                        <Globe className="w-4 h-4 text-slate-500" />
                        <span className="text-xs text-slate-400">XSS Forum / General Discussion</span>
                    </div>

                    {/* Post 1 (The Mention) */}
                    <motion.div 
                       initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                       className="bg-slate-900 p-4 rounded-b border border-indigo-500/30 relative overflow-hidden"
                    >
                       <div className="flex gap-3 mb-3">
                          <div className="w-8 h-8 rounded bg-slate-700 shrink-0" />
                          <div>
                             <div className="text-indigo-400 font-bold text-sm">KillSecGroup</div>
                             <div className="text-[10px] text-slate-500">Posted: 2 mins ago</div>
                          </div>
                       </div>
                       <div className="text-sm text-slate-300 font-mono leading-relaxed mb-3">
                          "We are targeting <span className="bg-indigo-500/20 text-indigo-300 px-1 rounded">YourBrand</span> infrastructure next week. Anyone have valid subdomains or API keys?"
                       </div>
                       
                       {/* Alert Badge */}
                       <motion.div 
                          className="inline-flex items-center gap-2 bg-red-900/30 border border-red-500/30 text-red-400 px-3 py-1 rounded text-[10px] uppercase font-bold tracking-wider"
                          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }}
                       >
                          <AlertTriangle className="w-3 h-3" />
                          High Severity Mention
                       </motion.div>
                    </motion.div>

                    {/* Fake Background Post */}
                    <div className="bg-slate-800/20 h-16 rounded border border-white/5 mx-4 blur-[2px]"></div>
                 </motion.div>
               )}

               {/* SCENE 2: ACCESS SALES (IAB) */}
               {features[activeFeature].visual === 'access' && (
                  <motion.div 
                    key="access"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-[85%] font-mono"
                  >
                     <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl relative">
                        {/* Header */}
                        <div className="bg-[#1a1a1a] px-4 py-2 flex justify-between items-center border-b border-slate-800">
                           <span className="text-amber-500 font-bold text-xs">[SELLING] Network Access</span>
                           <div className="text-slate-500 text-[10px]">Today, 04:20</div>
                        </div>

                        <div className="p-5 space-y-4">
                           {/* IAB Listing Details */}
                           <div className="space-y-2 text-sm text-slate-300">
                              <div className="flex justify-between border-b border-slate-800 pb-1">
                                 <span className="text-slate-500">Region:</span>
                                 <span>North America (USA)</span>
                              </div>
                              <div className="flex justify-between border-b border-slate-800 pb-1">
                                 <span className="text-slate-500">Revenue:</span>
                                 <span>$500M - $1B</span>
                              </div>
                              <div className="flex justify-between border-b border-slate-800 pb-1">
                                 <span className="text-slate-500">Access Type:</span>
                                 <span className="text-red-400">Citrix / VPN (Admin)</span>
                              </div>
                              <div className="flex justify-between border-b border-slate-800 pb-1">
                                 <span className="text-slate-500">Price:</span>
                                 <span className="text-green-400">$15,000 BTC</span>
                              </div>
                           </div>

                           {/* Matching Logic Visualization */}
                           <motion.div 
                              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                              className="bg-indigo-900/20 border border-indigo-500/40 p-3 rounded flex gap-3 items-center"
                           >
                              <SearchCode className="w-5 h-5 text-indigo-400" />
                              <div className="text-xs">
                                 <div className="text-indigo-300 font-bold mb-0.5">Fingerprint Match</div>
                                 <div className="text-slate-400">Industry + Rev + Tech Stack matches <span className="text-white">YourCompany</span> profile.</div>
                              </div>
                           </motion.div>
                        </div>
                     </div>
                  </motion.div>
               )}

               {/* SCENE 3: MARKET (Exploits/Data) */}
               {features[activeFeature].visual === 'market' && (
                 <motion.div 
                    key="market"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="w-[90%] relative"
                 >
                    <div className="grid grid-cols-2 gap-3">
                       {/* Listing 1 (Generic) */}
                       <div className="bg-slate-900/50 p-3 rounded border border-slate-800 opacity-50 blur-[1px]">
                          <div className="h-2 w-1/2 bg-slate-700 rounded mb-2"></div>
                          <div className="h-10 bg-slate-800 rounded"></div>
                       </div>

                       {/* Listing 2 (Targeted Exploit) */}
                       <motion.div 
                          initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                          className="bg-slate-900 p-3 rounded border border-indigo-500/50 col-span-2 relative overflow-hidden"
                       >
                          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                          <div className="flex justify-between items-start mb-2">
                             <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                                <FileCode className="w-4 h-4" />
                                <span>Zero-Day Exploit</span>
                             </div>
                             <span className="text-slate-500 text-[10px] border border-slate-700 px-1 rounded">Verified</span>
                          </div>
                          <p className="text-xs text-slate-300 mb-2">
                             "RCE Exploit for <span className="text-white font-bold">YourCustomApp v2.4</span>. Bypasses WAF. Proof of concept included."
                          </p>
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800">
                             <span className="text-[10px] text-slate-500">Seller: ExploitKing</span>
                             <button className="bg-indigo-600 text-[10px] px-2 py-1 rounded text-white">View Thread</button>
                          </div>
                       </motion.div>

                       {/* Listing 3 (Database) */}
                       <motion.div 
                          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
                          className="bg-slate-900 p-3 rounded border border-red-500/30 col-span-2"
                       >
                          <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-1">
                             <ShoppingCart className="w-4 h-4" />
                             <span>Database for Sale</span>
                          </div>
                          <p className="text-xs text-slate-400">
                             "Full SQL dump from <span className="text-white">your-partner-vendor.com</span> containing your shared API keys."
                          </p>
                       </motion.div>
                    </div>
                 </motion.div>
               )}

               {/* SCENE 4: ALERTS (Notification) */}
               {features[activeFeature].visual === 'alert' && (
                  <motion.div 
                    key="alert"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col gap-3 w-[80%]"
                  >
                     {/* Incoming Feed Item */}
                     <motion.div 
                        initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                        className="bg-slate-800 p-3 rounded-l-lg border-l-4 border-l-amber-500 border-y border-r border-slate-700 shadow-lg"
                     >
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-[10px] text-amber-500 font-bold uppercase">Ransomware Watch</span>
                           <span className="text-[10px] text-slate-500">Now</span>
                        </div>
                        <div className="text-xs text-slate-300">
                           <span className="font-bold text-white">LockBit 3.0</span> added a new victim that matches your subsidiary profile.
                        </div>
                     </motion.div>

                     {/* Processing Line */}
                     <div className="h-6 w-0.5 bg-slate-700 ml-4"></div>

                     {/* Action Item */}
                     <motion.div 
                        initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}
                        className="bg-indigo-900/20 p-3 rounded-l-lg border-l-4 border-l-indigo-500 border-y border-r border-indigo-500/20 shadow-lg"
                     >
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-[10px] text-indigo-400 font-bold uppercase">Automated Action</span>
                        </div>
                        <div className="text-xs text-white flex items-center gap-2">
                           <Terminal className="w-3 h-3" />
                           Analyst ticket created (Priority: High)
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