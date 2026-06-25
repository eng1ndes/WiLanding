import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "What is Payment Fraud Intelligence?",
    answer:
      "Payment Fraud Intelligence is WhiteIntel's compromised-card monitoring module. It indexes stolen cards surfacing across carding shops, underground markets, infostealer logs, and dark web channels, enriches every match with BIN-level data (issuer, country, network, type, tier, expiry), computes validity at query time, and lets fraud teams validate cards in real time or watchlist their own BINs for new exposure.",
  },
  {
    question: "What data is returned per card?",
    answer:
      "Every match returns: BIN-6, BIN-8, last-4, issuer bank, issuer country, card network (Visa, MasterCard, Amex, Discover, JCB, UnionPay), card type (credit, debit, prepaid, charge), card tier (consumer, business, premium, corporate, platinum, gold), expiry date when present in the source, a validity status computed at query time, and source attribution with first-seen and last-seen timestamps.",
  },
  {
    question: "How is card validity determined?",
    answer:
      "Validity is computed every time you query the index, not stored as a stale snapshot. The signal weights how recently the card surfaced, whether it has been re-listed, the card's stated expiry date relative to today, and any issuer reissue signals we can see. The output is a categorical status so your fraud rules can treat valid and stale matches differently.",
  },
  {
    question: "What's a BIN watchlist?",
    answer:
      "A BIN watchlist is a list of BIN-6 or BIN-8 prefixes (up to 256 per account) representing the cards you issue, accept, or sponsor. Once a BIN is on the watchlist, any new compromised card detected with that prefix triggers an email alert. The watchlist is the right primitive for issuers and BIN sponsors who want continuous coverage without writing per-card checks.",
  },
  {
    question: "Where does the compromised-card data come from?",
    answer:
      "The index aggregates cards from carding shops on the dark web, underground marketplaces, infostealer logs (millions of infected-machine logs across active families like Lumma, StealC, Vidar, Redline, Raccoon), dark web and Telegram channel monitoring, and direct seller feeds. Cards typically appear in the index within hours of surfacing in their source channel.",
  },
  {
    question: "Who is Payment Fraud Intelligence for?",
    answer:
      "Acquirers, merchants, and PSPs running pre-transaction validation. Card issuers and banks monitoring their own BIN ranges for chargeback prevention. Fraud-operations teams that need a real-time exposed-card signal next to their existing scoring stack. The product is built for the same workflow shape across all three audiences: query the index, get the answer.",
  },
  {
    question: "How does pricing and access work?",
    answer:
      "Payment Fraud Intelligence is available as an add-on at $17,500 USD / year (annual only) for Enterprise and Threat Intelligence plans, with 15,000 UI searches per month and 100 API calls per day, plus a 256-BIN watchlist. On Extended Threat Intelligence the capability is bundled with 500 UI searches per day and 1000 API calls per day.",
  },
  {
    question: "Can I use this at authorization time without latency penalties?",
    answer:
      "Yes. The /cards/check endpoint is designed for sub-second response so it sits comfortably inside an authorization pipeline. The standard pattern is to call it as a parallel signal alongside your existing fraud-score model, then combine the WhiteIntel compromised flag with your model's score in your decision logic.",
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
            Payment Fraud Intelligence FAQ
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Common questions about stolen-card and BIN monitoring.
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
