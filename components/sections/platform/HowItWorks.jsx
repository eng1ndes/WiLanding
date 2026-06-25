import { motion } from "framer-motion";
import { Globe2, Database, Layers, BellRing, Zap, ArrowRight } from "lucide-react";

const steps = [
  // DETECT PHASE
  { 
    id: "collect",
    phase: "Detect",
    icon: Globe2, 
    title: "Collect", 
    desc: "Ingesting logs from stealer clouds, forums, Telegram, and paste sites." 
  },
  { 
    id: "normalize",
    phase: "Detect",
    icon: Database, 
    title: "Normalize", 
    desc: "Parsing, de-duplicating, and enriching raw data with entity context." 
  },
  // PRIORITIZE PHASE
  { 
    id: "correlate",
    phase: "Prioritize",
    icon: Layers, 
    title: "Correlate", 
    desc: "Linking identities and artifacts to pinpoint high-risk exposures." 
  },
  { 
    id: "alert",
    phase: "Prioritize",
    icon: BellRing, 
    title: "Alert", 
    desc: "Routing validated intelligence to the right teams in real-time." 
  },
  // PREVENT PHASE
  { 
    id: "remediate",
    phase: "Prevent",
    icon: Zap, 
    title: "Remediate", 
    desc: "Triggering automated resets and takedowns via API workflows." 
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white px-6 md:px-10 py-24 overflow-hidden">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{ 
            backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
        }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-100">
            The Pipeline
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            From Signals to <span className="text-blue-600">Actionable Outcomes</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            An automated intelligence lifecycle that turns raw dark web noise into definitive security responses.
          </p>
        </div>

        {/* --- THE PIPELINE VISUAL --- */}
        <div className="relative">
          
          {/* 1. Connecting Line (Background) */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[3px] bg-slate-100 rounded-full overflow-hidden">
             {/* The "Pulse" Beam Animation */}
             <motion.div 
               className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"
               animate={{ x: ["-100%", "400%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {/* 2. Steps Grid */}
          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((s, i) => (
              <div key={s.id} className="relative flex flex-col items-center group">
                
                {/* Phase Label (Mobile hidden, Desktop visible) */}
                <div className="hidden md:block absolute -top-12 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                   {/* Only show phase label on the first item of that phase */}
                   {(i === 0 || steps[i-1].phase !== s.phase) && (
                      <span className="bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">
                        {s.phase}
                      </span>
                   )}
                </div>

                {/* Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Active Highlight Border on Hover/Active */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Icon */}
                  <div className="relative mb-6 flex items-center justify-center w-14 h-14 mx-auto rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <s.icon className="w-7 h-7" />
                    {/* Ring Pulse Effect behind icon */}
                    <div className="absolute inset-0 rounded-xl border border-blue-500/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">
                      {s.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Connector Arrow (Desktop Only) */}
                {i !== steps.length - 1 && (
                   <div className="hidden md:block absolute -right-[1.25rem] top-[60px] z-0 text-slate-300">
                      <ArrowRight className="w-5 h-5" />
                   </div>
                )}
                
                {/* Connector Line (Mobile Only) */}
                {i !== steps.length - 1 && (
                   <div className="md:hidden h-8 w-[2px] bg-slate-100 my-2"></div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}