import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Linkedin, 
  Twitter, 
  Copy,
  AlertTriangle,
  ShieldAlert,
  FileText
} from "lucide-react";
import Navbar from "../../components/Navbar"; 
import { Helmet } from "react-helmet-async";
import FeaturedResourcesWithFooter from "../../components/FooterSection";

// --- MOCK IMAGE PLACEHOLDERS ---
// Note: These URLs are estimated based on the blog's structure.
// If they fail to load, the onError handler in the img tag will show a text placeholder.
const POST_IMAGES = {
  hero: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/6b5646a9-489c-4e57-e712-71d3c7669100/w=1200,q=85,format=auto", 
  royal_mail: "https://blog.whiteintel.io/content/images/2025/12/image-3.png",
  jaguar: "https://blog.whiteintel.io/content/images/2025/12/image-4.png",
  salesforce: "https://blog.whiteintel.io/content/images/2025/12/image-5.png",
  lumma_takedown: "https://blog.whiteintel.io/content/images/2025/12/image-6.png",
  rahadamanthys_takedown: "https://blog.whiteintel.io/content/images/2025/12/resim.png",
  report_cover: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/f1314ab2-68cc-437b-520d-e640552cad00/w=1200,q=85,format=auto",

};

const InfostealersIn2025Review = () => {
  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Helmet>
  <title>Infostealers in 2025: A Year in Review | Whiteintel Research</title>
  <meta name="description" content="A comprehensive analysis of 2025's major infostealer incidents, including Royal Mail, Salesforce, and the Lumma Stealer takedown. Read the full report." />
  <meta name="keywords" content="infostealer 2025, cybersecurity report, malware trends, Lumma stealer, Royal Mail breach, cyber threat landscape" />
  <meta property="og:title" content="Infostealers in 2025: A Year in Review" />
  <meta property="og:description" content="From law enforcement takedowns to major corporate breaches. A look back at the infostealer landscape of 2025." />
  <meta property="og:image" content={POST_IMAGES.hero} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://whiteintel.io/blog/infostealers-2025-year-in-review" />
  <meta property="og:site_name" content="Whiteintel" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Whiteintel Research Team" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@whiteintel" />
  <meta name="twitter:title" content="Infostealers in 2025: A Year in Review" />
  <meta name="twitter:description" content="From law enforcement takedowns to major corporate breaches. A look back at the infostealer landscape of 2025." />
  <meta name="twitter:image" content={POST_IMAGES.hero} />
  <link rel="canonical" href="https://whiteintel.io/blog/infostealers-2025-year-in-review" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org", "@type": "BlogPosting",
    "headline": "Infostealers in 2025: A Year in Review",
    "description": "A comprehensive analysis of 2025's major infostealer incidents, including Royal Mail, Salesforce, and the Lumma Stealer takedown.",
    "url": "https://whiteintel.io/blog/infostealers-2025-year-in-review",
    "image": "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/6b5646a9-489c-4e57-e712-71d3c7669100/w=1200,q=85,format=auto",
    "datePublished": "2025-12-08",
    "author": {"@type": "Organization", "name": "Whiteintel Research Team", "url": "https://whiteintel.io"},
    "publisher": {"@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io"},
    "articleSection": "Threat Research", "keywords": "infostealer 2025, cybersecurity report, malware trends, Lumma stealer"
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://whiteintel.io"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://whiteintel.io/blog"},
      {"@type": "ListItem", "position": 3, "name": "Infostealers in 2025: A Year in Review", "item": "https://whiteintel.io/blog/infostealers-2025-year-in-review"}
    ]
  })}</script>
</Helmet>
      {/* 1. NAVBAR */}
      <Navbar variant="dark" />

      {/* 2. PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 origin-left z-[60]"
        style={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ duration: 1.5, ease: "circOut" }}
      />

      <article className="relative pt-32 pb-24 px-4 sm:px-6">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full opacity-40" />
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
              Infostealers in 2025: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">A Year in Review</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              From law enforcement takedowns to death threats made out to threat intelligence researchers, it has been a very hectic year for the cybersecurity industry with no signs of slowing down.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-400 border-y border-white/5 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-xs border border-white/10 shadow-lg shadow-blue-900/20">
                  WI
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Whiteintel Team</p>
                  <p className="text-xs opacity-70">Intelligence Division</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <Calendar size={14} /> Dec 8, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> 6 min read
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-16 bg-slate-900 group">
             <div className="bg-slate-800 flex items-center justify-center text-slate-600 min-h-[400px]">
                <img 
                  src={POST_IMAGES.hero} fetchpriority="high" loading="eager" 
                  alt="Infostealers in 2025 Hero" 
                  className="w-full h-auto block" width={1200} height={630}
                  onError={(e) => {
                    e.target.style.display='none';
                    e.target.parentElement.innerHTML = '<div class="flex flex-col items-center gap-4"><span class="text-6xl">🦠</span><span class="text-xl font-mono">Infostealer 2025 Landscape</span></div>';
                  }}
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar (Share) */}
       

            {/* Article Body */}
            <div className="lg:col-span-11 prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-p:leading-8 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-xl">
              
              <p className="lead text-slate-200">
                Despite all the defensive security advancements and wins achieved in 2025, Threat Actors remain resilient, motivated and appear to be capable more than ever. Whiteintel Threat Intelligence researchers have made this blog post to discuss some of the most notable incidents and developments in the cyberspace.
              </p>
                  <br />
              <h2><strong>Honorary Mentions - Notable Victims</strong></h2>
              <p>
                A few years back, Infostealers were the “up-and-coming” threat vector in terms of popularity and it has mainly targeted regular users for crypto draining and account hijacking for financial purposes. We are now 2025 and Infostealer have arrived fast and hard, taking down critical infrastructure and costing businesses a fortune at an alarming rate.
              </p>
              <p>Here are the most notable Infostealer incidents of 2025:</p>
             <br />
              <h3><strong>Royal Mail – Samsung</strong></h3>
              <p>
                Royal Mail Group dealt with the fallout of a major data breach after a threat actor released roughly 144 GB of internal information online. An attacker with the alias “GHNA,” claimed to have had unrestricted access to hundreds of internal folders belonging to Spectos GmbH, a third-party analytics provider working with Royal Mail.
              </p>
              <p>
                Investigators later traced the intrusion back to an old infostealer infection on a Spectos employee's device from 2021. The stolen credentials and session tokens eventually gave the intruder a foothold into systems containing customer delivery records, internal Zoom videos, SQL databases, mailing lists, and logistics datasets.
              </p>

              {/* IMAGE: Royal Mail */}
              <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.royal_mail} loading="lazy"
                      alt="Royal Mail Breach Data" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Royal Mail Breach - Internal Folders Screenshot</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 1: Internal folders accessed via stolen credentials
                </figcaption>
              </figure>

              <p>
                The incident became even more noteworthy when investigation showed that the same attacker had recently leaked data connected to Samsung, and both breaches appeared to originate from the same compromised Spectos employee endpoint. This incident underscored how a single infected workstation inside a supplier could silently expose multiple major organizations over time.
              </p>
                      <br />
              <h3><strong>Jaguar Land Rover</strong></h3>
              <p>
                Jaguar Land Rover faced a particularly messy infostealer-driven breach. Attackers stole developer credentials from compromised endpoints and logged into internal Jira, Confluence, and code-related systems with active sessions.
              </p>
              <p>
                Proof came in the form of captured screenshots showing internal project pages, debug logs, and documentation outlining development pipelines. The stolen material also included interface captures from internal tooling - enough to confirm attackers had interactive access, not just static files.
              </p>

              {/* IMAGE: Jaguar */}
              <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.jaguar} loading="lazy"
                      alt="Jaguar Internal Jira Screenshot" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Jaguar Internal Jira/Confluence Screenshot</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 2: Compromised Developer Dashboard
                </figcaption>
              </figure>

              <h3><strong>Salesforce Incidents</strong></h3>
              <p>
                Several major companies were impacted when OAuth tokens and session cookies tied to Salesforce integrations were stolen from infected employee machines. With those tokens in hand, attackers replayed active sessions and accessed CRM dashboards without tripping MFA or login alerts.
              </p>
              <p>
                Attackers posted screenshots of Salesforce dashboards, customer records, support cases, and in some cases exported CSV files from the CRM environment. Teams were forced to rotate OAuth secrets, revoke active sessions, and tighten access policies around their SaaS integrations.
              </p>

               {/* IMAGE: Salesforce */}
               <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.salesforce} loading="lazy"
                      alt="Salesforce CRM Dashboard Leak" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Salesforce CRM Dashboard Screenshot</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 3: Unauthorized Access to Salesforce CRM
                </figcaption>
              </figure>

              <div className="bg-slate-800/40 p-6 rounded-xl border border-white/5 my-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <ShieldAlert size={20} className="text-red-500"/>
                   Publicly named affected organizations included:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Zscaler", "Palo Alto Networks", "Cloudflare", "Proofpoint", "Cyberark", "Elastic"].map((company) => (
                        <div key={company} className="flex items-center gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                            {company}
                        </div>
                    ))}
                </div>
              </div>

              <h2><strong>Threat Actors Are Combining Attack Vectors</strong></h2>
              <p>
                One of the biggest shifts this year was how infostealers were paired with other attack vectors. Observing the techniques from the Salesforce incident, Infostealers have become a pivoting point to larger attack vectors.
              </p>
              <p>
                A single infected endpoint often translated into full access to cloud dashboards, internal documentation portals, or even financial systems. Attackers fed stolen cookies and tokens directly into session replay tools, while infostealer infected credentials became the entry point for deeper lateral movement.
              </p>
              <p>
                This fusion of techniques made infostealers one of the most reliable tools for threat actors in 2025.
              </p>
                <br />
              <h2><strong>The hand of the law: Lumma Stealer Takedown</strong></h2>
              <p>
                A major highlight of the year was the coordinated takedown of the Lumma Stealer infrastructure. Law enforcement seized servers, dismantled distribution channels, and disrupted the operator's entire backend.
              </p>
              <p>
                The impact was immediate - Lumma activity dipped, operators went quiet, and affiliates scrambled to migrate to forks and alternative platforms. The takedown showed that even entrenched malware services aren't untouchable when agencies coordinate intelligence and enforcement.
              </p>

               {/* IMAGE: Lumma Takedown */}
               <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.lumma_takedown} loading="lazy"
                      alt="Lumma Stealer Infrastructure Takedown" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Lumma Stealer Seizure Notice</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 4: Law Enforcement Seizure Notice
                </figcaption>
              </figure>

              <h3> <strong>Another strike from Law: Rhadamanthys Stealer Takedown</strong></h3>
              <p>
                Following the recent Lumma Stealer takedowns, law enforcement delivered another major blow to the cybercrime ecosystem. In a large cross-border operation carried out between 10–14 November 2025, Europol and its international partners dismantled more than 1,025 servers tied to high-impact malware networks including Rhadamanthys, VenomRAT, and Elysium.
              </p>
              <p>
                The action resulted in 20 domain seizures, multiple arrests, and the disruption of infrastructure responsible for compromising hundreds of thousands of systems worldwide. While cybercriminals will inevitably try to rebuild, this marks one of the most significant coordinated strikes against ransomware- and malware-as-a-service operations to date.
              </p>

                              <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.rahadamanthys_takedown} loading="lazy"
                      alt="Royal Mail Breach Data" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Rhadamanthys Takedown - Operation Endgame</span>';
                      }}
                    />
                </div>
                <br />



              <div className="mt-16 bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                            New Report
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Whiteintel 2025 Infostealer Report</h2>
                        <p className="text-slate-400 mb-6">
                            To wrap up the year, Whiteintel compiled a detailed statistics and trend report covering the most impactful infostealer incidents of 2025. The clear takeaway: infostealers are no longer just a consumer threat - they're a fully established enterprise risk.
                        </p>
                        <a href="https://whiteintel.io/2025-information-stealer-landscape-report" target="_blank" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            <FileText size={18} />
                            Get Full Report
                        </a>
                    </div>
                    {/* Report Cover Placeholder */}
                    <div className="w-full md:w-64 aspect-[3/4] bg-slate-800 rounded-lg shadow-2xl shadow-black border border-white/5 flex items-center justify-center text-slate-600">
                         <img 
                            src={POST_IMAGES.report_cover} loading="lazy"
                            alt="2025 Report Cover" 
                            className="w-full h-full object-cover rounded-lg opacity-80"
                            onError={(e) => {
                                e.target.style.display='none';
                                e.target.parentElement.innerHTML = '<div class="text-center p-4"><span class="text-4xl block mb-2">📊</span><span class="text-xs font-bold uppercase tracking-widest">2025 Report</span></div>';
                            }}
                         />
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 5. RELATED ARTICLE CTA */}
        <div className="max-w-4xl mx-auto mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Read Next</h3>
            <a href="/blog/exposing-threat-actors-with-whiteintel-ai" className="block group">
                <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 hover:bg-slate-900 hover:border-blue-500/30 transition-all">
   
                    <div className="flex flex-col justify-center">
                        <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Product Update</div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Exposing Threat Actors with Whiteintel AI</h4>
                        <p className="text-slate-400 text-sm line-clamp-2">Beyond Breach Monitoring: How Neural Identity Attribution is Closing the Gap Between a Leaked Email and a Physical Identity.</p>
                    </div>
                </div>
            </a>
        </div>

      </article>
                  <FeaturedResourcesWithFooter />
      
    </div>
  );
};

export default InfostealersIn2025Review;