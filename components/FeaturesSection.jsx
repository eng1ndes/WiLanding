import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  AlertTriangle, Bug, Key, GitBranch, GlobeLock,
  Newspaper, ArrowRight, Boxes, CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";

const featureIcons = [Key, Bug, GlobeLock, AlertTriangle, GitBranch, Newspaper, Boxes, CreditCard];

// Per-feature widget — each visual ties to what the card describes
// (alert badge, host card, forum quote, domain pair, code diff, news ticker,
//  supplier score, compromised card mock).
const VISUAL_BOX = "rounded-xl bg-[rgba(13,19,34,0.85)] border border-white/[0.06] p-2.5";

const FeatureVisual = ({ idx }) => {
  switch (idx) {
    case 0: // Credential Leak Monitoring → alert widget with leaked row
      return (
        <div className={VISUAL_BOX}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="inline-flex items-center gap-1.5 text-[9.5px] text-indigo-300 tracking-[0.5px]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              exposed
            </span>
            <span className="text-[9px] text-slate-500 font-mono">2m</span>
          </div>
          <div className="font-mono text-[11px] text-slate-200 truncate">admin@acme.com</div>
          <div className="font-mono text-[11px] text-slate-500 tracking-[0.2em]">••••••••</div>
        </div>
      );
    case 1: // Infostealer Intelligence → infected host card + threat gauge
      return (
        <div className={VISUAL_BOX}>
          <div className="flex items-center gap-2 mb-1.5">
            <Bug className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span className="text-[11px] font-mono text-slate-200 truncate">DESKTOP-A47XJ</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400" style={{ width: "78%" }} />
            </div>
            <span className="text-[9px] font-medium text-indigo-300 tracking-wider">High</span>
          </div>
        </div>
      );
    case 2: // Dark Web Mention → forum chat quote
      return (
        <div className={VISUAL_BOX}>
          <div className="text-[11px] text-slate-300 italic leading-snug mb-1.5 truncate">
            "selling acme.com DB..."
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-slate-500 font-mono">XSS Forum</span>
            <span className="text-[9px] text-indigo-300 font-mono">2h ago</span>
          </div>
        </div>
      );
    case 3: // Look-alike Domain → real vs fake comparison
      return (
        <div className={`${VISUAL_BOX} space-y-1`}>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] text-slate-200 truncate">acme.com</span>
            <span className="text-indigo-300 text-[11px] leading-none">✓</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[11px] text-indigo-300 truncate">acme-support.io</span>
            <span className="text-indigo-400 text-[11px] leading-none">⚠</span>
          </div>
        </div>
      );
    case 4: // GitHub Secret → diff-style code with redacted key
      return (
        <div className={`${VISUAL_BOX} font-mono`}>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-indigo-300 leading-none">+</span>
            <span className="text-[10.5px] text-slate-300 truncate">AWS_KEY=</span>
          </div>
          <div className="text-[10.5px] text-indigo-300 tracking-wider truncate pl-3">"AKIA••••••••"</div>
          <div className="text-[9px] text-slate-500 mt-1">acme/api · public</div>
        </div>
      );
    case 5: // Continuous Threat News → ticker card
      return (
        <div className={VISUAL_BOX}>
          <div className="flex items-center justify-between mb-1">
            <span className="inline-flex items-center gap-1.5 text-[9.5px] text-indigo-300 tracking-[0.5px]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              new
            </span>
            <span className="text-[9px] text-slate-500 font-mono">14m</span>
          </div>
          <div className="text-[11px] text-slate-200 leading-snug">
            APT29 targets EU banking sector
          </div>
        </div>
      );
    case 6: // Supplier Security → score widget with grade
      return (
        <div className={VISUAL_BOX}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10.5px] text-slate-300 truncate">Vendor Acme</span>
            <div className="inline-flex items-center gap-1.5">
              <span className="text-[13px] font-bold text-indigo-300 leading-none">82</span>
              <span className="text-[9px] font-medium px-1.5 py-0.5 rounded text-[#a5b4fc] border border-[rgba(129,140,248,0.28)] bg-[rgba(99,102,241,0.08)] leading-none">B</span>
            </div>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400" style={{ width: "82%" }} />
          </div>
        </div>
      );
    case 7: // Payment Fraud → compromised card widget
      return (
        <div className={`${VISUAL_BOX} relative overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), transparent 60%)" }}
          />
          <div className="relative font-mono text-[11px] text-slate-200 tracking-[0.18em] mb-1.5">
            •••• •••• •••• 4242
          </div>
          <div className="relative flex items-center justify-between">
            <span className="text-[9px] text-slate-500 font-mono">VISA · 09/27</span>
            <span className="text-[9px] font-medium text-indigo-300 tracking-wider">Compromised</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const FeaturesSection = () => {
  const { t } = useTranslation("home");
  const featureItems = featureIcons.map((Icon, idx) => ({
    title: t(`features.items.${idx}.title`),
    description: t(`features.items.${idx}.description`),
    idx,
  }));

  return (
    <section className="relative bg-[#020617] text-white py-32 px-6 lg:px-12 overflow-hidden font-sans">
      
      {/* --- Section Divider / Light Beam --- */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent z-20"></div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] h-[100px] bg-indigo-600/10 blur-[60px] rounded-full pointer-events-none z-10"></div>

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-0 md:left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full opacity-30"></div>
        {/* Right-side weight where the dashboard backdrop used to sit */}
        <div className="hidden lg:block absolute top-1/3 right-0 translate-x-1/3 w-[520px] h-[520px] bg-blue-600/10 blur-[130px] rounded-full"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-base font-bold uppercase tracking-widest">
              {t("features.badge")}
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-300 bg-clip-text text-transparent">
              {t("features.title")}
            </span>{" "}
            <br />
            <span className="text-white">{t("features.titleHighlight")}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg leading-relaxed max-w-2xl"
          >
            {t("features.description")}
          </motion.p>
        </div>

        {/* Features 4-column grid — compact glass cards, scans as an index of capabilities. */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureItems.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-6 rounded-[14px] border border-indigo-500/15 transition-all duration-300 hover:border-indigo-400/45 hover:-translate-y-1 shadow-[0_0_40px_-12px_rgba(99,102,241,0.18)] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.28),0_0_0_1px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col"
              style={{
                background: "linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(8,13,28,0.92) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:to-transparent rounded-[14px] transition-all duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[16px] md:text-[17px] font-semibold text-slate-100 group-hover:text-white transition-colors mb-2.5 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors mb-4">
                  {feature.description}
                </p>

                {/* Feature-specific widget visual */}
                <div className="mt-auto">
                  <FeatureVisual idx={feature.idx} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Tour CTA — centered below the grid */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/platform-tour"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors no-underline"
          >
            {t("features.platformTour")}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;