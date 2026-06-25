import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "What is Supplier Security?",
    answer:
      "Supplier Security is WhiteIntel's third-party risk monitoring module. It continuously watches your suppliers' and vendors' credential and infrastructure exposure across the cybercrime ecosystem (infostealer logs, combolists, breach databases, dark web channels) and assigns each supplier a 0–100 supply-chain risk score with an A–F grade, alerting you the moment a tracked supplier's exposure changes for the worse.",
  },
  {
    question: "How is the supply-chain risk score calculated?",
    answer:
      "The score is built from three independent indices: a Malware/Stealer Index (employees infected by infostealers, including live session cookies), a Combolist Index (corporate credentials circulating in combolists), and a Breach Index (exposure in third-party breach databases). Each supplier's score is recency-weighted (recent exposure matters more than old) and refreshed continuously, with a 24-month exposure timeline per supplier so trends are visible.",
  },
  {
    question: "What does \"critical application exposure\" mean?",
    answer:
      "Critical application exposure flags when a supplier's employees leak credentials for high-value pivot targets that attackers use to escalate a supply-chain attack: source control (GitHub, GitLab, Bitbucket), CI/CD and artifact registries (Jenkins, CircleCI, JFrog, npm, PyPI, Docker), identity and SSO providers (Okta, Auth0, OneLogin, Ping), secrets managers (Vault, 1Password), and VPN/remote access. These credentials are weighted heavily in the risk score because their compromise enables direct supply-chain pivoting.",
  },
  {
    question: "How does WhiteIntel detect live session cookies?",
    answer:
      "Every infostealer log includes the victim's browser cookie store. WhiteIntel ingests millions of infostealer logs continuously and extracts active session cookies tied to corporate systems for the suppliers you track. Active session cookies bypass MFA on replay, so we surface the compromised machine, the application the cookie is valid for, and the status so your team can force session revocation before a buyer replays it.",
  },
  {
    question: "What kinds of alerts will I receive?",
    answer:
      "Email alerts fire only on genuinely new findings. The platform sends a critical alert for new critical-application exposures and new live session cookies, and a notable alert for a worsening grade or score since the last check. Alerts are de-duplicated and severity-tiered so the high-stakes events stay visible without inbox noise.",
  },
  {
    question: "How many suppliers can I track?",
    answer:
      "Tracked supplier count is plan-based. Enterprise plans include 64 suppliers, Threat Intelligence includes 128, and Extended Threat Intelligence includes 256. See the pricing page for the current limits per plan.",
  },
  {
    question: "What data sources feed Supplier Security?",
    answer:
      "Infostealer logs (millions of infected-machine logs across active families like Lumma, StealC, Vidar, Redline, Raccoon), credential combolists, third-party breach databases, dark web and Telegram channel monitoring, and browser session/cookie data extracted directly from stealer logs.",
  },
  {
    question: "Who is Supplier Security for?",
    answer:
      "Third-party and vendor risk teams, security teams running supply-chain risk management programs, and anyone who needs early warning before a supplier breach reaches them. The module is built for the people who answer the question \"which of our vendors is compromised right now, and how exposed are we through them?\"",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-[#020617] px-6 md:px-10 py-24 overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-500/20">
            <HelpCircle className="w-3 h-3" />
            Frequently asked
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Supplier Security FAQ
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Common questions about how Supplier Security works.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-slate-900/40 border-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)]"
                    : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                      isOpen ? "text-blue-400" : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex shrink-0 items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-500/20 border-blue-500/30 text-blue-400 rotate-180"
                        : "bg-transparent border-white/10 text-slate-400 group-hover:border-white/30 group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
