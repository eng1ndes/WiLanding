import { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  TrendingUp,
  CreditCard,
  Boxes,
  ShieldCheck,
  Fingerprint,
  Newspaper,
  Play,
  X,
  ArrowRight,
  RotateCw,
} from "lucide-react";
import Navbar from "../components/Navbar";
import TrustedBySection from "../components/TrustedBySection";
import FooterSection from "../components/FooterSection";

/* ─────────────────────────────────────────────────────────────
   DEMOS — single source of truth for the demo center.

   Each entry:
     id           unique slug
     title        card title
     description  one or two lines under the title
     category     used by the filter bar (see CATEGORY_ORDER)
     icon         a lucide icon (used in the thumbnail when no image)
     thumbnail    optional image URL for the card thumbnail; falls back
                  to a branded gradient + icon when omitted
     storylaneUrl Storylane share/demo URL. Leave "" for "Coming soon".
   ──────────────────────────────────────────────────────────── */
const DEMOS = [
  {
    id: "global-trends",
    title: "Global Trends",
    description: "Track recorded dark web events, chatter, credential leaks, infections, and threat news across the WhiteIntel dataset.",
    category: "Getting Started",
    icon: TrendingUp,
    thumbnail: "https://storylane-prod-uploads.s3.us-east-2.amazonaws.com/company/company_389e946a-14f8-4851-a6ae-3bd281d77288/project/project_09e299f0-636a-4726-bb6b-3ca6d30c6f12/page/1781325398284.png",
    storylaneUrl: "https://app.storylane.io/demo/hth6g6nis2dg",
  },
  {
    id: "global-search",
    title: "Global Search",
    description: "Search across credential leaks and stealer infections by domain, email, IP, password, and more.",
    category: "Detection",
    icon: Search,
    thumbnail: "",
    storylaneUrl: "https://app.storylane.io/demo/jk5wrpz0kyzx",
  },
  {
    id: "threat-feeds",
    title: "Threat Feeds",
    description: "Curated dark-web telemetry: data sales, ransomware, and access listings.",
    category: "Intelligence",
    icon: Newspaper,
    thumbnail: "",
    storylaneUrl: "https://app.storylane.io/demo/1bh86msd4tnr",
  },
  {
    id: "supplier-security",
    title: "Supplier Security",
    description: "Score and monitor third-party vendor exposure continuously.",
    category: "Risk",
    icon: Boxes,
    thumbnail: "",
    storylaneUrl: "https://app.storylane.io/demo/cjq9uq3bhen5",
  },
  {
    id: "brand-protection",
    title: "Brand Protection",
    description: "Track look-alike domains and brand-impersonating infrastructure.",
    category: "Risk",
    icon: ShieldCheck,
    thumbnail: "",
    storylaneUrl: "https://app.storylane.io/demo/xyuqsqgvy0mh",
  },
  {
    id: "payment-fraud",
    title: "Payment Fraud Intelligence",
    description: "Validate compromised cards and watchlist your BIN ranges.",
    category: "Detection",
    icon: CreditCard,
    thumbnail: "",
    storylaneUrl: "https://app.storylane.io/demo/kqxrfvifzyxt",
  },
  {
    id: "investigation-plus",
    title: "Investigation+",
    description: "Pivot across identifiers and unmask threat actors with deep-trace analysis.",
    category: "Intelligence",
    icon: Fingerprint,
    thumbnail: "",
    storylaneUrl: "https://app.storylane.io/demo/hlltwqsryiuf",
  },
];

// Filter order. "All Demos" is always first.
const CATEGORY_ORDER = ["Getting Started", "Detection", "Risk", "Intelligence"];

// Append the inline-embed flag Storylane expects, preserving any existing query.
function toEmbedUrl(url) {
  if (!url) return "";
  if (url.includes("embed=")) return url;
  return url + (url.includes("?") ? "&" : "?") + "embed=inline";
}

// Reusable matchMedia hook.
function useMediaQuery(query, initial = false) {
  const [match, setMatch] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : initial
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatch(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return match;
}

// Desktop width: skip the heavy live Storylane embeds on mobile (branded
// thumbnail used instead) and switch the demo modal to full-screen on phones.
const useIsDesktop = () => useMediaQuery("(min-width: 768px)", true);

// Phone held in portrait: Storylane demos are landscape desktop UIs, so we
// prompt the user to rotate for a readable view. Auto-clears in landscape.
const usePortraitPhone = () =>
  useMediaQuery("(max-width: 767px) and (orientation: portrait)", false);

function DemoModal({ demo, onClose }) {
  const portraitPhone = usePortraitPhone();
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-stretch justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#020617]/85 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 12 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex flex-col w-full h-full sm:h-auto sm:max-w-[1400px]"
      >
        <div className="flex items-center justify-between gap-3 p-4 sm:px-1 sm:pb-3 sm:pt-0">
          <div className="min-w-0">
            <div className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              {demo.category}
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white truncate">{demo.title}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close demo"
            className="shrink-0 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* On mobile the demo fills the remaining screen height; on desktop it's
            a centered 16:9 card. */}
        <div className="relative w-full flex-1 sm:flex-none sm:aspect-video overflow-hidden border-y sm:border sm:rounded-2xl border-indigo-500/20 sm:shadow-[0_0_70px_-10px_rgba(99,102,241,0.3)] bg-[#0b1229]">
          {portraitPhone ? (
            /* The demo is a landscape desktop UI, so it's unreadable in portrait.
               We hold the embed until the phone is rotated (also avoids loading
               it where it can't be used). Auto-swaps to the demo in landscape. */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center bg-[#0b1229]">
              <RotateCw className="h-10 w-10 text-indigo-300 animate-pulse" />
              <div>
                <p className="text-white font-semibold text-base">Rotate your phone</p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  This demo is built for a wide screen. Turn your device sideways for a readable, full-size view.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="absolute inset-0 bg-slate-900 animate-pulse" />
              <iframe
                title={demo.title}
                loading="lazy"
                className="sl-demo relative z-10"
                src={toEmbedUrl(demo.storylaneUrl)}
                name="sl-embed"
                allow="fullscreen"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none", background: "transparent" }}
              />
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DemoCard({ demo, onOpen, isDesktop }) {
  const Icon = demo.icon;
  const available = Boolean(demo.storylaneUrl);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        available
          ? "border-white/10 hover:border-indigo-400/40 hover:-translate-y-1 cursor-pointer"
          : "border-white/5 opacity-70"
      }`}
      style={{
        background: "linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(8,13,28,0.92) 100%)",
      }}
      onClick={() => available && onOpen(demo)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5 bg-[#0b1229]">
        {/* Branded base layer — shows until the image/embed paints, and stays
            for coming-soon cards. */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-[#0b1229] to-[#05091a]">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-56 h-40 bg-indigo-500/20 blur-[60px] rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-12 h-12 text-indigo-300/60" strokeWidth={1.5} />
          </div>
        </div>

        {/* Static screenshot wins if set. Otherwise show the live Storylane
            first frame ONLY on desktop — on mobile the branded base layer above
            is used instead, so phones never load 8 player iframes. */}
        {demo.thumbnail ? (
          <img
            src={demo.thumbnail}
            alt={demo.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          available && isDesktop && (
            <iframe
              src={toEmbedUrl(demo.storylaneUrl)}
              title={`${demo.title} preview`}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              scrolling="no"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, pointerEvents: "none" }}
            />
          )
        )}

        {/* Play cue. Always visible on mobile (no hover); reveals on hover on
            desktop with a scrim. */}
        {available && (
          <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors duration-300 bg-[#020617]/10 md:bg-transparent md:group-hover:bg-[#020617]/25">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-500/90 text-white shadow-lg shadow-indigo-900/50 transition-all duration-300 opacity-100 scale-100 md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100">
              <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
            </span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-wider text-indigo-200 px-2.5 py-1">
            {demo.category}
          </span>
        </div>

        {!available && (
          <div className="absolute top-3 right-3 z-20">
            <span className="rounded-full bg-black/40 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5 py-1">
              Coming soon
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[17px] font-semibold text-white mb-1.5 leading-tight">{demo.title}</h3>
        <p className="text-[13.5px] text-slate-400 leading-relaxed mb-5">{demo.description}</p>

        <div className="mt-auto">
          {available ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 group-hover:text-white transition-colors">
              Take a tour
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function DemoCenter() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [filter, setFilter] = useState("All Demos");
  const isDesktop = useIsDesktop();

  // Load the Storylane script once so embeds initialize.
  useEffect(() => {
    if (!document.querySelector('script[src="https://js.storylane.io/js/v2/storylane.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.storylane.io/js/v2/storylane.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const open = useCallback((demo) => setActiveDemo(demo), []);
  const close = useCallback(() => setActiveDemo(null), []);

  const filters = [
    "All Demos",
    ...CATEGORY_ORDER.filter((c) => DEMOS.some((d) => d.category === c)),
  ];
  const visibleDemos = filter === "All Demos" ? DEMOS : DEMOS.filter((d) => d.category === filter);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans">
      <Helmet>
        <title>Demo Center — Interactive Product Demos | Whiteintel</title>
        <meta
          name="description"
          content="Explore Whiteintel through short, interactive demos. See global search, credential leak monitoring, payment fraud intelligence, supplier security, and more in action, no signup required."
        />
        <meta name="keywords" content="whiteintel demo, interactive product demo, dark web monitoring demo, threat intelligence demo, storylane" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://whiteintel.io/demo-center" />
        <meta property="og:title" content="Demo Center — Interactive Product Demos | Whiteintel" />
        <meta property="og:description" content="Short, interactive demos of Whiteintel's dark web monitoring and threat intelligence platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/demo-center" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Demo Center — Interactive Product Demos | Whiteintel" />
        <meta name="twitter:description" content="Short, interactive demos of Whiteintel's dark web monitoring and threat intelligence platform." />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-10 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/15 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-base font-bold uppercase tracking-widest bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Demo Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] mb-5"
          >
            <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-300 bg-clip-text text-transparent">
              Your front-row seat to Whiteintel.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Step through short, interactive demos of the features that matter to you. No signup, no sales call, click any demo and explore it yourself.
          </motion.p>
        </div>
      </section>

      {/* Filter bar — horizontal swipe on mobile, centered wrap on desktop */}
      <div className="sticky top-[72px] lg:top-[80px] z-30 bg-[#020617]/85 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex gap-2 overflow-x-auto md:flex-wrap md:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active
                    ? "bg-indigo-500/15 text-white border border-indigo-400/40"
                    : "text-slate-400 border border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <section className="relative z-10 px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visibleDemos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} onOpen={open} isDesktop={isDesktop} />
            ))}
          </div>

   
        </div>
      </section>

      <FooterSection />

      <AnimatePresence>
        {activeDemo && <DemoModal demo={activeDemo} onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
