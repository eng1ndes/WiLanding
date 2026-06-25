import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Scissors,
  Globe,
  AlertTriangle,
  ShieldCheck,
  FileText,
  Clock,
  MessageSquare,
  Activity,
  ArrowRight,
  CheckCircle2,
  Mail,
  Network,
  Search,
  Trash2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesWithFooter from "../components/FooterSection";

export default function ManagedTakedown() {
  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans">
      <Helmet>
        <title>Managed Takedown Services | Phishing & Lookalike Domain Removal — Whiteintel</title>
        <meta
          name="description"
          content="Whiteintel's Managed Takedown Services file, escalate, and resolve takedown requests for phishing domains, typosquats, and lookalike sites pretending to be your brand — so your team doesn't have to chase registrars."
        />
        <meta
          name="keywords"
          content="managed takedown service, phishing domain takedown, lookalike domain removal, typosquat takedown, registrar abuse, IDN homoglyph takedown, brand protection service"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="Managed Takedown Services — Whiteintel" />
        <meta
          property="og:description"
          content="We file, escalate, and resolve takedowns for phishing domains and lookalike infrastructure pretending to be your brand so your team can focus on response, not paperwork."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/managed-takedown-services" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Managed Takedown Services — Whiteintel" />
        <meta
          name="twitter:description"
          content="Whiteintel files, follows, and closes takedowns for phishing and lookalike domains."
        />
        <link rel="canonical" href="https://whiteintel.io/managed-takedown-services" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Managed Takedown Services",
          "description": "End-to-end takedown of phishing domains, typosquats, and lookalike sites — managed by the Whiteintel team. Files with registrars, hosts, and CDNs on your behalf.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Brand Protection / Domain Takedown",
          "url": "https://whiteintel.io/managed-takedown-services"
        }`}</script>
      </Helmet>

      <Navbar />

      {/* HERO */}
      <Hero />

      {/* WHAT WE TAKE DOWN */}
      <WhatWeTakeDown />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* SLA & TRUST */}
      <SlaPanel />

      {/* DELIVERABLES */}
      <Deliverables />

      <TrustedBySection />

      {/* CTA */}
      <FinalCta />

      <FeaturedResourcesWithFooter />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-4 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-rose-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT — copy */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6">
            <Scissors className="w-3 h-3" />
            Managed Takedown Service
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            We take the phishing site down.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              You stay focused on response.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            Phishing domains, typosquats, and lookalike infrastructure pretending to be your brand —
            Whiteintel's takedown analysts file, escalate, and follow up with registrars, hosts, and CDNs
            on your behalf until the domain is suspended. No DIY abuse forms, no chasing replies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://platform.whiteintel.io/signup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-blue-900/30 transition-all"
            >
              Request a Takedown <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://calendly.com/whiteintel-sales"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white border border-white/15 hover:bg-white/5 transition-all"
            >
              Talk to the Takedown Team
            </a>
          </div>

          {/* trust line */}
          <div className="flex items-center gap-6 mt-10 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Median 24-hour response
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Status updates at every step
            </div>
          </div>
        </div>

        {/* RIGHT — case ticker mock */}
        <div className="lg:col-span-6 w-full">
          <CaseTicker />
        </div>
      </div>
    </section>
  );
}

function CaseTicker() {
  const cases = [
    {
      type: "TYPOSQUAT DOMAIN",
      target: "acme-suport.com",
      stage: "Resolved",
      stageColor: "text-emerald-400",
      stageBg: "bg-emerald-500/10 border-emerald-500/30",
      detail: "Registrar suspended · 4h 12m",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      type: "HOMOGLYPH DOMAIN",
      target: "acmẹ-corp.com",
      stage: "Resolved",
      stageColor: "text-emerald-400",
      stageBg: "bg-emerald-500/10 border-emerald-500/30",
      detail: "Host suspended · 18h 04m",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      type: "ACTIVE PHISHING SITE",
      target: "secure-acme-login[.]net",
      stage: "Filed",
      stageColor: "text-cyan-400",
      stageBg: "bg-cyan-500/10 border-cyan-500/30",
      detail: "Registrar abuse request sent",
      icon: <AlertTriangle className="w-4 h-4" />,
    },
    {
      type: "TLD VARIANT",
      target: "acme-portal.co",
      stage: "In Review",
      stageColor: "text-amber-400",
      stageBg: "bg-amber-500/10 border-amber-500/30",
      detail: "Awaiting registrar response",
      icon: <Globe className="w-4 h-4" />,
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-cyan-600/10 blur-3xl -z-10 rounded-full" />
      <div className="rounded-2xl border border-slate-800 bg-[#0b1229] shadow-2xl overflow-hidden">
        {/* header */}
        <div className="h-10 border-b border-white/5 bg-slate-900/80 flex items-center px-4 justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Activity className="w-3 h-3" />
            <span>Whiteintel · Takedown Queue</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </div>
        </div>

        {/* cases */}
        <div className="p-4 flex flex-col gap-3">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-lg border border-white/5 bg-slate-950/60 p-4 flex items-center gap-3"
            >
              <div className="p-2 rounded-md bg-white/5 text-slate-300 shrink-0">{c.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{c.type}</div>
                <div className="text-sm font-semibold text-white truncate">{c.target}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{c.detail}</div>
              </div>
              <span
                className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${c.stageBg} ${c.stageColor}`}
              >
                {c.stage}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────── WHAT WE TAKE DOWN ───────────────────── */
function WhatWeTakeDown() {
  const categories = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Typosquatting & Misspellings",
      detail:
        "Common-typo domains targeting your brand — extra letters, swapped characters, missing dashes. Filed with the registrar and abuse contacts the same day they're flagged.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Homoglyph & IDN Attacks",
      detail:
        "Visually identical Unicode lookalikes (Latin-i swapped for Cyrillic-і, accented characters). High-priority because the human eye can't catch them — escalated as deceptive-similarity abuse.",
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "TLD Variants & Subdomain Abuse",
      detail:
        "Your-brand.co, your-brand.net, your-brand.support — and abusive subdomains under compromised hosts. Filed with the relevant registrar or host based on attribution.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Active Phishing Infrastructure",
      detail:
        "Domains with active MX records, hosting cloned login pages, or running credential-harvesting kits. Critical-priority queue — filed simultaneously with registrar, host, and CDN to maximize takedown speed.",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4">
            What We Take Down
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Every flavor of phishing &amp; lookalike domain
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            If a domain is pretending to be your brand, we'll get it suspended. One service, one queue,
            one point of accountability — across registrars, hosts, and CDNs worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((c, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-4">
                {c.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{c.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── HOW IT WORKS ───────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Detect",
      detail:
        "Whiteintel surfaces the threat (phishing domain, fake account, leaked data) — either through your existing monitoring or by your team flagging it via the platform.",
    },
    {
      num: "02",
      icon: <FileText className="w-5 h-5" />,
      title: "File",
      detail:
        "Our analysts assemble evidence (WHOIS, DNS, screenshots, content classification) and file the right takedown request — registrar abuse desk, hosting provider, or CDN — formatted to that provider's spec.",
    },
    {
      num: "03",
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Escalate",
      detail:
        "If the first request stalls, we escalate to second-line abuse contacts, upstream providers, registries, and legal teams. We don't wait for a reply — we follow it up.",
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Resolve",
      detail:
        "When the asset is removed (or definitively rejected), we close the case with a full timeline, evidence package, and the next recommended action.",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#020617] to-[#040b1f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            From detection to resolution — without your team filing a single form
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0b1229] border-2 border-cyan-500/40 text-cyan-300 mx-auto mb-5 relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                {s.icon}
              </div>
              <div className="text-center">
                <div className="text-[10px] font-bold tracking-widest text-cyan-400/70 mb-1">STEP {s.num}</div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── SLA / TRUST ───────────────────── */
function SlaPanel() {
  const stats = [
    { num: "< 24h", label: "Median time-to-first-action after request", icon: <Clock className="w-5 h-5" /> },
    { num: "92%", label: "Case resolution rate within 7 days", icon: <CheckCircle2 className="w-5 h-5" /> },
    { num: "200+", label: "Direct-contact relationships across registrars, hosts, and CDNs", icon: <Network className="w-5 h-5" /> },
  ];

  return (
    <section className="relative py-24 px-4 bg-[#040b1f]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-blue-500/[0.05] p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block text-cyan-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4">
                Built for response, not paperwork
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5">
                Outcomes you can put in a board report
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Every case is tracked end-to-end with a documented timeline, copies of the requests filed,
                and confirmation of resolution. Reports export cleanly to your governance, risk, and
                compliance tooling.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map((s, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-slate-950/40 p-5">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-300 mb-3">
                    {s.icon}
                  </div>
                  <div className="text-3xl font-extrabold text-white tabular-nums">{s.num}</div>
                  <div className="text-xs text-slate-400 leading-snug mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── DELIVERABLES ───────────────────── */
function Deliverables() {
  const items = [
    "Per-case timeline with every action and response logged",
    "Evidence package (screenshots, WHOIS, DNS, headers, archived copies)",
    "Copies of every abuse request and reply correspondence",
    "Status webhook + email alerts on stage transitions",
    "Slack / Teams / Jira / ServiceNow integrations",
    "Monthly executive summary with case-mix and resolution metrics",
  ];

  return (
    <section className="relative py-24 px-4 bg-[#040b1f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="inline-block text-cyan-400 text-xs font-extrabold tracking-[0.2em] uppercase mb-4">
            What you get back
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-5">
            A receipt for every removed threat
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Takedowns are only useful if you can prove they happened. Every case in your queue ships with a
            structured artifact your SOC, legal, and compliance teams can reference — long after the threat
            is gone.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold"
          >
            Talk to the Takedown Team <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <ul className="space-y-3">
              {items.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── CTA ───────────────────── */
function FinalCta() {
  return (
    <section className="relative py-20 px-4 bg-[#020617]">
      <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-slate-900 p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4">
            <Trash2 className="w-3 h-3" /> Get Started
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Stop chasing abuse forms.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Hand off the takedown workload to a team that does it every day. We file, follow up, and resolve —
            you get the receipt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://platform.whiteintel.io/signup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-blue-900/30 transition-all"
            >
              Request a Takedown <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:info@whiteintel.io?subject=Managed%20Takedown%20Inquiry"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white border border-white/15 hover:bg-white/5 transition-all"
            >
              <Mail className="w-4 h-4" /> Email the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
