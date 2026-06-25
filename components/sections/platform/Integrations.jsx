import { motion } from "framer-motion";
import { Webhook, Link2, Cpu, Eye } from "lucide-react";

const items = [
  { icon: <Webhook />, title: "Webhooks", desc: "Real-time push to your endpoints." },
  { icon: <Link2 />, title: "APIs", desc: "Pull exposures, entities, artifacts." },
  { icon: <Cpu />, title: "SIEM/SOAR", desc: "Splunk, Sentinel, QRadar & more." },
  { icon: <Eye />, title: "Chat & ITSM", desc: "Slack, Teams, Jira, ServiceNow." },
];

export default function Integrations() {
  return (
    <section className="bg-white px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-3">Integrations</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Fits Right Into Your Stack</h2>
        <p className="text-gray-500">Bring exposures into SIEM, SOAR, ITSM, chat, or your apps with APIs & webhooks.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {items.map((i, idx) => (
            <motion.div key={i.title}
              initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}}
              transition={{duration:0.5, ease:"easeOut", delay:idx*0.06}}
              className="rounded-xl border border-gray-200 p-5 hover:-translate-y-1 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">{i.icon}</div>
                <h4 className="font-semibold">{i.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
