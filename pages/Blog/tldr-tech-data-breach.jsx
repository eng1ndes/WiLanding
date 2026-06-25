import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  AlertTriangle,
  ShieldAlert,
  Database,
  Search,
  User,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet-async";
import FeaturedResourcesWithFooter from "../../components/FooterSection";

const POST_IMAGES = {
  hero: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/65b0b18e-e3e0-4cd4-963d-c09847e9a100/w=1200,q=85,format=auto",
};

const TldrTechDataBreach = () => {
  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-red-500/30 selection:text-red-200">
      <Helmet>
        <title>TLDR.Tech Data Breach Exposes 1.2 Million User Records | Whiteintel Research</title>
        <meta
          name="description"
          content="In March 2026, TLDR.Tech suffered a data breach exposing over 1.2 million unique user records including emails, LinkedIn profiles, job titles, and professional history. Whiteintel has indexed the breach."
        />
        <meta
          name="keywords"
          content="TLDR.Tech data breach, newsletter breach 2026, LinkedIn data leak, professional data exposure, Whiteintel, corporate records breach"
        />
        <meta property="og:title" content="TLDR.Tech Data Breach Exposes 1.2 Million User Records" />
        <meta
          property="og:description"
          content="Over 1.2 million TLDR.Tech subscribers had their professional profiles, LinkedIn data, and contact details exposed in a March 2026 breach."
        />
        <meta property="og:image" content={POST_IMAGES.hero} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* NAVBAR */}
      <Navbar variant="dark" />

      {/* PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-400 origin-left z-[60]"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
      />

      <article className="relative pt-32 pb-24 px-4 sm:px-6">

        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-900/10 blur-[120px] rounded-full opacity-40" />
          <img src="/assets/banner-background.png" className="w-full h-full object-cover opacity-[0.03] mix-blend-screen" alt="" width={1920} height={1080} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* BACK BUTTON */}
          <a href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Intelligence Center
          </a>

          {/* ARTICLE HEADER */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
              Threat Research
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
              TLDR.Tech Data Breach:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                1.2 Million Professional Profiles Exposed
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              In March 2026, the popular tech newsletter platform TLDR.Tech suffered a significant data breach, exposing rich professional data on over 1.2 million subscribers — including LinkedIn identities, job histories, and company details.
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
              <div className="flex items-center gap-2">
                <Calendar size={14} /> Mar 14, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> 5 min read
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-16 bg-slate-900 group">
            <div className="bg-slate-800 flex items-center justify-center text-slate-600 min-h-[400px]">
              <img
                src={POST_IMAGES.hero} fetchpriority="high" loading="eager"
                alt="TLDR.Tech Data Breach Hero"
                className="w-full h-auto block" width={1200} height={630}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="flex flex-col items-center gap-4 py-24"><span class="text-6xl">📧</span><span class="text-xl font-mono text-slate-400">TLDR.Tech — 1.2M Records Exposed</span></div>';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-11 prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-p:leading-8 prose-a:text-red-400 prose-a:no-underline hover:prose-a:text-red-300 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-xl">

              <p className="lead text-slate-200">
                TLDR.Tech has become one of the most-read daily newsletters in the technology industry, boasting a large subscriber base of developers, engineers, founders, and tech professionals. In March 2026, that subscriber base became the target of a significant data exposure event — one that goes well beyond leaked email addresses.
              </p>
              <br />

              <h2><strong>What Happened</strong></h2>
              <p>
                In March 2026, TLDR.Tech — the widely read technology-focused newsletter accessible via tldr.tech — suffered a data breach that resulted in the exposure of over <strong>1.2 million unique user records</strong>. The compromised dataset contains far more than basic contact details; it includes rich professional identity data that appears to have been enriched with or sourced from LinkedIn and similar professional networks.
              </p>
              <p>
                The full scope of the breach is still being assessed, and not all fields have been independently verified across every record. However, the dataset has been indexed by Whiteintel and is available for corporate exposure checks through the Global Search feature using the <strong>Corporate Records</strong> type.
              </p>
              <br />

              {/* ALERT BOX */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-8 not-prose">
                <div className="flex items-start gap-4">
                  <AlertTriangle size={22} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold mb-2">Breach Summary</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li><span className="text-red-400 font-semibold">Target:</span> TLDR.Tech newsletter platform (tldr.tech)</li>
                      <li><span className="text-red-400 font-semibold">Date:</span> March 2026</li>
                      <li><span className="text-red-400 font-semibold">Records Exposed:</span> 1,200,000+ unique user records</li>
                      <li><span className="text-red-400 font-semibold">Status:</span> Indexed by Whiteintel — searchable via Global Search (Corporate Records)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2><strong>Compromised Data Fields</strong></h2>
              <p>
                What makes this breach particularly sensitive is the depth of professional data involved. Unlike typical newsletter breaches that expose only email addresses, the TLDR.Tech dataset contains extensive professional profile information for each affected subscriber. The exposed fields span four major categories:
              </p>
              <br />

              {/* DATA FIELDS GRID */}
              <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">

                <div className="bg-slate-800/40 border border-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <User size={18} className="text-red-400" />
                    <h4 className="text-white font-bold">Personal Identity</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {["Email address", "First name", "Last name", "Phone number", "Location", "Profile photo URL"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/40 border border-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={18} className="text-orange-400" />
                    <h4 className="text-white font-bold">LinkedIn & Professional</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {["LinkedIn profile URL", "LinkedIn identifier", "Professional headline", "Job title", "Seniority level", "Skills"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/40 border border-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Database size={18} className="text-blue-400" />
                    <h4 className="text-white font-bold">Company Details</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {["Company name", "Company industry", "Company website", "Company LinkedIn page"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/40 border border-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap size={18} className="text-purple-400" />
                    <h4 className="text-white font-bold">Career History</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {["Current & historical job positions", "School / education history", "Additional profile data"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              <br />

              <h2><strong>Why This Breach Is Especially Dangerous</strong></h2>
              <p>
                Most data breaches expose commoditized data — email and password combinations that are quickly cycled through credential stuffing tools. The TLDR.Tech breach is different. Its subscriber base consists heavily of <strong>technology professionals</strong>: software engineers, CTOs, product managers, security researchers, and startup founders. This makes the exposed data a high-value intelligence asset for threat actors.
              </p>

              <h3><strong>Targeted Spear-Phishing</strong></h3>
              <p>
                With access to a subscriber's job title, seniority level, employer, and professional headline, attackers can craft highly convincing and contextually relevant phishing emails. A message tailored to a "Senior Engineering Manager at a SaaS company in London" is far more credible — and far more dangerous — than a generic phishing attempt.
              </p>

              <h3><strong>Corporate Exposure via Employee Data</strong></h3>
              <p>
                The inclusion of company names, industries, and LinkedIn pages means this breach has a direct corporate dimension. Threat actors can map leaked subscriber records to specific organizations, identifying employees by name and role for targeted social engineering, business email compromise (BEC) attacks, or supply chain fraud.
              </p>

              <h3><strong>Identity Correlation & Deanonymization</strong></h3>
              <p>
                LinkedIn URLs and identifiers allow attackers to directly link a leaked record to a live, verified public profile. Combined with phone numbers and location data, this enables rapid identity correlation and physical profiling — a particular risk for high-profile individuals in the dataset.
              </p>
              <br />

              <div className="bg-slate-800/40 p-6 rounded-xl border border-white/5 my-8 not-prose">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <ShieldAlert size={20} className="text-orange-400" />
                  Who Is Most at Risk
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  {[
                    "Technology executives and C-suite",
                    "Senior engineers and architects",
                    "Startup founders and investors",
                    "Security professionals",
                    "Product managers and tech leads",
                    "Employees at high-value tech companies",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/60" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <h2><strong>How to Check Your Exposure</strong></h2>
              <p>
                Whiteintel has fully indexed this breach. Organizations can determine whether their employees appear in the leaked dataset by using the <strong>Global Search</strong> feature and selecting <strong>Corporate Records</strong> as the record type. This allows security teams to quickly identify exposed staff, assess the scope of organizational exposure, and take proactive steps before threat actors act on the data.
              </p>

              {/* CTA BOX */}
              <div className="mt-12 bg-gradient-to-br from-red-900/20 to-slate-900 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group not-prose">
                <div className="absolute top-0 right-0 p-32 bg-red-500/10 blur-[100px] rounded-full group-hover:bg-red-500/20 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                    Now Indexed on Whiteintel
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Is Your Organization Affected?
                  </h2>
                  <p className="text-slate-400 mb-6 max-w-xl">
                    Use Whiteintel's Global Search to check if your employees appear in the TLDR.Tech breach. Select <strong className="text-white">Corporate Records</strong> as the record type to search by company name, email domain, or individual.
                  </p>
                  <a
                    href="https://platform.whiteintel.io"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    <Search size={18} />
                    Search on Whiteintel
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* READ NEXT */}
        <div className="max-w-4xl mx-auto mt-24">
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Read Next</h3>
          <a href="/blog/third-party-database-breaches" className="block group">
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 hover:bg-slate-900 hover:border-red-500/30 transition-all">
              <div className="flex flex-col justify-center">
                <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Product Update</div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  1500+ Third-Party Database Breaches Now Live
                </h4>
                <p className="text-slate-400 text-sm line-clamp-2">
                  We've massively expanded our threat intelligence arsenal with over 1,500 third-party database breaches, now fully searchable via our Corporate Leaks dashboard and dedicated API.
                </p>
              </div>
            </div>
          </a>
        </div>

      </article>

      <FeaturedResourcesWithFooter />
    </div>
  );
};

export default TldrTechDataBreach;
