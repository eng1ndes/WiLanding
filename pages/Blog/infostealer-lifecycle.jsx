import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  AlertTriangle,
  ShieldAlert,
  Timer,
  Bug,
  Package,
  ShoppingCart,
  Zap,
  Eye,
  Database,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet-async";
import FeaturedResourcesWithFooter from "../../components/FooterSection";

const POST_IMAGES = {
  hero: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/a4afb533-4350-45a6-b4fd-c5bcad498200/w=1200,q=85,format=auto",
};

const InfostealerLifecycle = () => {
  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-red-500/30 selection:text-red-200">
      <Helmet>
        <title>The Infostealer Lifecycle: From 0 to 48 Hours | Whiteintel Research</title>
        <meta
          name="description"
          content="48 hours. That's how long it takes for your employee's credentials to go from an infected laptop to an underground marketplace. A detailed breakdown of the infostealer kill chain."
        />
        <meta
          name="keywords"
          content="infostealer lifecycle, credential theft, stealer malware, Russian Market, Lumma Stealer, RedLine, credential harvesting, infosec, threat intelligence"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel Research Team" />
        <meta property="og:title" content="The Infostealer Lifecycle: From 0 to 48 Hours" />
        <meta
          property="og:description"
          content="48 hours. That's how long it takes for your employee's credentials to go from an infected laptop to an underground marketplace."
        />
        <meta property="og:image" content={POST_IMAGES.hero} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://whiteintel.io/blog/infostealer-lifecycle-48-hours" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="The Infostealer Lifecycle: From 0 to 48 Hours" />
        <meta name="twitter:description" content="48 hours. That's how long it takes for your employee's credentials to go from an infected laptop to an underground marketplace." />
        <meta name="twitter:image" content={POST_IMAGES.hero} />
        <link rel="canonical" href="https://whiteintel.io/blog/infostealer-lifecycle-48-hours" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "The Infostealer Lifecycle: From 0 to 48 Hours",
            "description": "48 hours. That's how long it takes for your employee's credentials to go from an infected laptop to an underground marketplace. A detailed breakdown of the infostealer kill chain.",
            "url": "https://whiteintel.io/blog/infostealer-lifecycle-48-hours",
            "image": "${POST_IMAGES.hero}",
            "datePublished": "2026-03-24",
            "author": { "@type": "Organization", "name": "Whiteintel Research Team" },
            "publisher": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
            "articleSection": "Threat Research",
            "keywords": "infostealer, credential theft, stealer malware, Russian Market, Lumma Stealer, RedLine, threat intelligence"
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whiteintel.io" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://whiteintel.io/blog" },
              { "@type": "ListItem", "position": 3, "name": "The Infostealer Lifecycle: From 0 to 48 Hours", "item": "https://whiteintel.io/blog/infostealer-lifecycle-48-hours" }
            ]
          }
        `}</script>
      </Helmet>

      <Navbar variant="dark" />

      {/* PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-amber-400 origin-left z-[60]"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
      />

      <article className="relative pt-32 pb-24 px-4 sm:px-6">

        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[120px] rounded-full opacity-40" />
          <img src="/assets/banner-background.png" className="w-full h-full object-cover opacity-[0.03] mix-blend-screen" alt="" width={1920} height={1080} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* BACK */}
          <a href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Intelligence Center
          </a>

          {/* HEADER */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              Threat Research
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
              The Infostealer Lifecycle:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">
                From 0 to 48 Hours
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              48 hours. That's how long it takes for your employee's credentials to go from an infected laptop to an underground marketplace — and into the hands of a ransomware operator.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-400 border-y border-white/5 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-xs border border-white/10 shadow-lg shadow-red-900/20">
                  WI
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Whiteintel Team</p>
                  <p className="text-xs opacity-70">Intelligence Division</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2"><Calendar size={14} /> Mar 24, 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} /> 9 min read</div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-16 bg-slate-900">
            <div className="bg-slate-800 flex items-center justify-center text-slate-600 min-h-[400px]">
              <img
                src={POST_IMAGES.hero} fetchpriority="high" loading="eager"
                alt="Infostealer Lifecycle Hero"
                className="w-full h-auto block" width={1200} height={630}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="flex flex-col items-center gap-4 py-24"><span class="text-6xl">⏱️</span><span class="text-xl font-mono text-slate-400">The Infostealer Lifecycle: 0 → 48h</span></div>';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* CONTENT */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-p:leading-8 prose-a:text-red-400 prose-a:no-underline hover:prose-a:text-red-300 prose-li:text-slate-300 prose-strong:text-white prose-img:rounded-2xl prose-img:border prose-img:border-white/10">

            <p className="lead text-slate-200 text-xl">
              Database breaches get discovered weeks or months after they happen. Forensic teams spend days reconstructing what occurred. Affected users get notified eventually. Infostealers work faster.
            </p>

            <p>
              An employee downloads cracked software on Tuesday afternoon. By Thursday morning, their credentials are listed on Russian Market for $15. Corporate VPN access, AWS credentials, session tokens that bypass MFA — all packaged and ready for purchase.
            </p>
            <p>
              The infection happens outside your network. The harvest takes minutes. The monetization is complete before your security team would typically detect anything unusual.
            </p>

            {/* TIMELINE OVERVIEW */}
            <div className="not-prose my-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { icon: Bug, label: "Hour 0–2", desc: "Infection", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
                { icon: Database, label: "Hour 2–12", desc: "Harvest", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
                { icon: Package, label: "Hour 12–24", desc: "Package", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
                { icon: ShoppingCart, label: "Hour 24–48", desc: "Marketplace", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
                { icon: Zap, label: "Hour 48+", desc: "Exploitation", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
              ].map(({ icon: Icon, label, desc, color, bg }) => (
                <div key={label} className={`border rounded-xl p-4 flex flex-col items-center text-center gap-2 ${bg}`}>
                  <Icon size={22} className={color} />
                  <p className="text-white font-bold text-sm">{label}</p>
                  <p className="text-slate-400 text-xs">{desc}</p>
                </div>
              ))}
            </div>

            {/* HOUR 0-2 */}
            <div className="not-prose flex items-center gap-3 my-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30">
                <Bug size={16} className="text-red-400" />
                <span className="text-red-400 font-bold text-sm uppercase tracking-widest">Hour 0–2</span>
              </div>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <h2><strong>The Infection Vector</strong></h2>
            <p>
              The infection begins outside your security perimeter. An employee downloads what appears to be legitimate software. A contractor clicks a malicious ad. A developer installs a cracked plugin.
            </p>

            <h3><strong>Common Distribution Methods</strong></h3>
            <p>
              <strong>Cracked software</strong> remains the primary infection vector. Productivity tools like Adobe Creative Suite, Microsoft Office, and development IDEs are packaged with infostealer payloads. Gaming cheats and "free" premium software attract users looking to bypass licensing costs.
            </p>
            <p>
              <strong>Malvertising campaigns</strong> target users through legitimate advertising networks. Threat actors purchase ad space on popular websites, redirecting victims to fake download pages hosting malware.
            </p>
            <p>
              <strong>YouTube tutorials</strong> promise free tools, hacks, or workarounds. The video description contains links to infected executables. Users following along install the malware while attempting to replicate the tutorial.
            </p>
            <p>
              <strong>Supply chain compromises</strong> embed infostealers in legitimate software updates or third-party libraries, reaching users who would never intentionally download suspicious files.
            </p>

            {/* MALWARE FAMILIES */}
            <div className="not-prose bg-slate-800/40 border border-white/5 rounded-xl p-6 my-8">
              <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                <ShieldAlert size={18} className="text-red-400" />
                Active Infostealer Families
              </h4>
              <div className="space-y-4">
                {[
                  {
                    name: "Lumma Stealer",
                    detail: "Most prevalent in 2024, surpassing RedLine. Offered as MaaS with advanced anti-detection, targeting browser credentials, crypto wallets, and auth tokens. Dominance grew as operators continuously updated evasion techniques.",
                    badge: "Most Prevalent",
                    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
                  },
                  {
                    name: "RedLine Stealer",
                    detail: "Remained widely deployed despite law enforcement action in October 2024 (Operation Magnus). Priced at $100–200/month, extracts credentials from 80+ applications including browsers, FTP clients, email, and messaging apps.",
                    badge: "MaaS",
                    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
                  },
                  {
                    name: "Raccoon Stealer v2",
                    detail: "Focuses on cryptocurrency wallet theft with broad credential harvesting. Returned as v2 in 2023 after its developer's arrest, continuing to operate through 2024.",
                    badge: "Crypto-Focused",
                    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
                  },
                  {
                    name: "Vidar",
                    detail: "Pay-per-install model distributed through cracked software and malicious ads. Extracts browser data, crypto wallets, and system information before exfiltrating to attacker-controlled servers.",
                    badge: "PPI Model",
                    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                  },
                  {
                    name: "StealC",
                    detail: "Infections increased 376% between Q1 and Q3 2024, with over 80,000 logs appearing on Russian Market during this period.",
                    badge: "+376% in 2024",
                    badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
                  },
                ].map(({ name, detail, badge, badgeColor }) => (
                  <div key={name} className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 mt-2" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-semibold text-sm">{name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${badgeColor}`}>{badge}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              The infection itself takes seconds. Modern infostealers are designed for speed and stealth — they execute, harvest data, and often self-delete within minutes of initial infection, before traditional antivirus or EDR solutions detect anomalous behavior.
            </p>

            {/* HOUR 2-12 */}
            <div className="not-prose flex items-center gap-3 my-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                <Database size={16} className="text-orange-400" />
                <span className="text-orange-400 font-bold text-sm uppercase tracking-widest">Hour 2–12</span>
              </div>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <h2><strong>The Harvest</strong></h2>
            <p>
              Once executed, the infostealer extracts data systematically. Browser credentials stored in SQLite databases. Session cookies that remain valid for weeks. VPN configurations. SSH keys. Cryptocurrency wallets. Every saved password, every active session, every piece of authentication data the user accumulated over months or years of browsing.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: Eye,
                  color: "text-orange-400",
                  title: "Browser Credentials",
                  items: ["All saved passwords across Chrome, Firefox, Edge, Opera", "Credentials for SSO portals, cloud services, banking", "Browser master password if available"],
                },
                {
                  icon: Timer,
                  color: "text-amber-400",
                  title: "Session Cookies & Tokens",
                  items: ["Active auth sessions — bypass MFA entirely", "Cookies valid for days or weeks after harvest", "Average log contains 10–25 business app credentials"],
                },
                {
                  icon: Database,
                  color: "text-yellow-400",
                  title: "Application Data",
                  items: ["FTP clients, email clients, messaging apps", "VPN configurations, SSH private keys", "Cloud service credentials from config files"],
                },
                {
                  icon: ShieldAlert,
                  color: "text-rose-400",
                  title: "High-Value Targets",
                  items: ["Cryptocurrency wallets, seed phrases, private keys", "System info: IP, geolocation, hardware specs", "Autofill: names, addresses, credit card data"],
                },
              ].map(({ icon: Icon, color, title, items }) => (
                <div key={title} className="bg-slate-800/40 border border-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={17} className={color} />
                    <h4 className="text-white font-bold text-sm">{title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p>
              Browser credentials live in SQLite databases within user profile directories. The stealer copies these databases, extracts the encrypted credentials, and decrypts them using keys stored elsewhere in the system. Session cookies are simpler — already decrypted and ready to use.
            </p>

            {/* HOUR 12-24 */}
            <div className="not-prose flex items-center gap-3 my-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                <Package size={16} className="text-amber-400" />
                <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">Hour 12–24</span>
              </div>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <h2><strong>The Package</strong></h2>
            <p>
              The harvested data doesn't get sold as raw database files. It's packaged, categorized, and formatted for buyers. Each "log" — the industry term for a package of stolen data from a single infection — is compressed, uploaded, and in some cases automatically parsed for searchability.
            </p>

            <div className="not-prose bg-slate-800/40 border border-white/5 rounded-xl p-6 my-8">
              <h4 className="text-white font-bold mb-4">What a Typical Log Contains</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                {[
                  "System metadata (IP, geolocation, OS, hardware)",
                  "Credentials organized by application / website",
                  "Session cookies and authentication tokens",
                  "Cryptocurrency wallet data (if present)",
                  "Autofill information (names, addresses, cards)",
                  "Harvested files (if configured to target file types)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h3><strong>Quality Tiers</strong></h3>
            <p>Not all logs are equal. Marketplaces categorize logs by value:</p>

            <div className="not-prose space-y-3 my-6">
              {[
                { tier: "High-Value", desc: "Corporate infrastructure (VPN, AWS, Azure, admin panels), crypto wallets with confirmed balances, banking credentials. Command premium prices.", color: "border-red-500/40 bg-red-500/5", badge: "text-red-400" },
                { tier: "Medium-Value", desc: "Credentials for popular services (streaming, e-commerce, social media) or business applications without obvious financial access.", color: "border-amber-500/40 bg-amber-500/5", badge: "text-amber-400" },
                { tier: "Low-Value", desc: "Primarily consumer credentials with limited monetization potential.", color: "border-slate-500/40 bg-slate-500/5", badge: "text-slate-400" },
              ].map(({ tier, desc, color, badge }) => (
                <div key={tier} className={`border rounded-xl p-4 flex items-start gap-4 ${color}`}>
                  <span className={`font-bold text-sm min-w-[110px] ${badge}`}>{tier}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* HOUR 24-48 */}
            <div className="not-prose flex items-center gap-3 my-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                <ShoppingCart size={16} className="text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">Hour 24–48</span>
              </div>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <h2><strong>The Marketplace</strong></h2>
            <p>By this point, the stolen credentials are for sale.</p>

            <h3><strong>Primary Marketplaces</strong></h3>
            <p>
              <strong>Russian Market</strong> operates as one of the largest infostealer log marketplaces. As of early 2024, it contained over 17 million stolen credentials with daily uploads from multiple infostealer families. The platform offers a search interface allowing buyers to filter by domain, country, or specific credential types.
            </p>
            <p>
              <strong>2easy</strong> emerged as a major marketplace following the decline of Genesis Market after law enforcement action in 2023, hosting millions of compromised credentials with a user-friendly interface for searching and purchasing logs.
            </p>
            <p>
              <strong>Telegram channels</strong> increasingly serve as both marketplace and distribution platform. Private channels advertise fresh logs, often organized by target organization or credential type. Telegram's encrypted messaging and lack of centralized oversight make it attractive for threat actors seeking alternatives to web-based marketplaces.
            </p>

            <h3><strong>Who's Buying</strong></h3>
            <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                { buyer: "Credential Stuffing Operators", desc: "Buy logs in bulk for automated account takeover campaigns against streaming services, e-commerce, and subscription platforms." },
                { buyer: "Targeted Attackers", desc: "Search for specific corporate domains, filtering marketplaces for credentials to particular organizations. Pay premium for confirmed access." },
                { buyer: "Cryptocurrency Thieves", desc: "Target logs containing wallet data for immediate financial theft. No waiting — wallets get drained within minutes." },
                { buyer: "Initial Access Brokers", desc: "Purchase corporate credentials ($50–500) and resell access to ransomware operators for $5,000–50,000 depending on the target." },
              ].map(({ buyer, desc }) => (
                <div key={buyer} className="bg-slate-800/40 border border-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold text-sm mb-1">{buyer}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* HOUR 48+ */}
            <div className="not-prose flex items-center gap-3 my-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30">
                <Zap size={16} className="text-rose-400" />
                <span className="text-rose-400 font-bold text-sm uppercase tracking-widest">Hour 48+</span>
              </div>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <h2><strong>The Exploitation</strong></h2>
            <p>
              By hour 48, the credentials are in use. Automated tools test stolen credentials against thousands of websites. VPN credentials provide direct access to corporate environments. Stolen session cookies bypass authentication entirely — the system sees a valid session, no login attempt, no MFA prompt, no anomaly. Cryptocurrency wallets get drained immediately. Corporate infrastructure credentials bought for $500 get resold to ransomware operators for $50,000.
            </p>

            <div className="not-prose bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-8">
              <div className="flex items-start gap-4">
                <AlertTriangle size={22} className="text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold mb-2">The Detection Problem</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Traditional security monitoring sees <strong className="text-white">legitimate authentication</strong>. Logs show successful logins from residential IPs. No malware on corporate infrastructure. No intrusion detection alerts. The compromise happened outside your visibility — the exploitation looks like normal user activity.
                  </p>
                </div>
              </div>
            </div>

            {/* WHITEINTEL APPROACH */}
            <h2><strong>The Whiteintel Approach: Monitoring the Marketplace</strong></h2>
            <p>
              Your security tools can't see what happens on an employee's personal laptop. They can't detect when an infostealer harvests credentials from an unmanaged device at home. But they can monitor where those credentials end up.
            </p>

            <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              {[
                { title: "Latest Infostealer Logs", desc: "Credentials harvested from infected endpoints within actionable timeframes. Alerts come while you can still revoke access and investigate the compromised device.", color: "border-red-500/30 bg-red-500/5" },
                { title: "Active Combolists", desc: "Credential pairs currently being tested against your authentication systems in active stuffing campaigns.", color: "border-orange-500/30 bg-orange-500/5" },
                { title: "Database Leaks", desc: "Credentials originating from third-party applications that include enterprise users — mapped to your organization.", color: "border-amber-500/30 bg-amber-500/5" },
              ].map(({ title, desc, color }) => (
                <div key={title} className={`border rounded-xl p-5 ${color}`}>
                  <p className="text-white font-bold text-sm mb-2">{title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="not-prose bg-slate-800/60 border border-white/10 rounded-xl p-6 my-8">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">The Whiteintel Response Window</h4>
              <div className="space-y-2">
                {[
                  { step: "Hour 0", label: "Employee device gets infected", color: "bg-red-500" },
                  { step: "Hour 2–12", label: "Credentials harvested by stealer", color: "bg-orange-500" },
                  { step: "Hour 24", label: "Log appears on marketplace", color: "bg-amber-500" },
                  { step: "Hour 0–24", label: "Whiteintel detects and alerts your team", color: "bg-green-500" },
                  { step: "Immediate", label: "Credential revocation, session invalidation, endpoint investigation — all within the exploitation window", color: "bg-blue-500" },
                ].map(({ step, label, color }) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${color}`} />
                    <div className="flex items-baseline gap-2">
                      <span className="text-slate-400 text-xs font-mono min-w-[70px]">{step}</span>
                      <span className="text-slate-300 text-sm">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Traditional breach monitoring alerts you months after a database breach, long after affected users have changed jobs or reset passwords. Whiteintel alerts you while the credentials are fresh and actively being sold. The difference is responding <strong>before</strong> exploitation, not after.
            </p>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group not-prose">
              <div className="absolute top-0 right-0 p-32 bg-red-500/10 blur-[100px] rounded-full group-hover:bg-red-500/20 transition-all duration-700" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                  Real-Time Credential Monitoring
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Are Your Employees' Credentials Already for Sale?
                </h2>
                <p className="text-slate-400 mb-6 max-w-xl">
                  Whiteintel monitors infostealer marketplaces in real time. Find out if your organisation's credentials are being sold — before attackers act on them.
                </p>
                <a
                  href="https://platform.whiteintel.io"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <Eye size={18} />
                  Check Your Exposure
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* READ NEXT */}
        <div className="max-w-4xl mx-auto mt-24">
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Read Next</h3>
          <a href="/blog/infostealers-2025-year-in-review" className="block group">
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-slate-900 hover:border-red-500/30 transition-all">
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Threat Research</div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                Infostealers in 2025: A Year in Review
              </h4>
              <p className="text-slate-400 text-sm line-clamp-2">
                From law enforcement takedowns to major corporate breaches — a comprehensive look back at the infostealer landscape of 2025.
              </p>
            </div>
          </a>
        </div>

      </article>

      <FeaturedResourcesWithFooter />
    </div>
  );
};

export default InfostealerLifecycle;
