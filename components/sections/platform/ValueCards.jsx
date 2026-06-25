import { motion } from "framer-motion";
import { ShieldCheck, BellRing, ServerCog, Webhook, Search, Lock, ArrowUpRight } from "lucide-react";

const items = [
  { 
    icon: ShieldCheck, 
    title: "Credential Leak Intelligence", 
    desc: "Detect exposed identities from infostealers, forums, Telegram, and dark web marketplaces in real-time." 
  },
  { 
    icon: BellRing, 
    title: "Real-Time Alerts", 
    desc: "Instant notifications mapped to your specific domains, emails, or VIPs via Webhook or Email." 
  },
  { 
    icon: ServerCog, 
    title: "Operationalized Actions", 
    desc: "Automate takedowns, password resets, and ticketing workflows to reduce MTTD and MTTR." 
  },
  { 
    icon: Webhook, 
    title: "Easy Integrations", 
    desc: "Deliver findings directly to Jira, Slack, SIEMs, SOAR, ITSM, and your internal applications." 
  },
  { 
    icon: Search, 
    title: "Global Discovery", 
    desc: "Correlate mentions, credentials, infected devices, and artifacts across the entire threat landscape." 
  },
  { 
    icon: Lock, 
    title: "Built for Security", 
    desc: "Enterprise-grade security with strict access controls, audit logging, and SSO support." 
  },
];

export default function ValueCards() {
  return (
    <section className="relative bg-white text-slate-900 px-6 md:px-10 py-24 overflow-hidden">
      
      {/* --- BACKGROUND PATTERN (Matches your other light sections) --- */}
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
            Why Whiteintel
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Reduce Noise, <span className="text-blue-600">Accelerate Response</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We unify external exposure intelligence with practical workflows, giving your team the clarity they need to act fast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((c, i) => (
            <motion.div 
              key={c.title}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <c.icon className="w-6 h-6" />
              </div>

              {/* Title & Desc */}
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {c.title}
                </h3>
                {/* Subtle arrow that appears on hover */}
                <ArrowUpRight className="w-5 h-5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              
              <p className="text-slate-500 leading-relaxed">
                {c.desc}
              </p>

              {/* Bottom blue line accent on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}