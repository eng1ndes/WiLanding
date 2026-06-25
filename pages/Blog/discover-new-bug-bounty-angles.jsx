import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Linkedin, 
  Twitter, 
  Copy,
  Search,
  Terminal,
  Bug,
  Globe,
  Database,
  ShieldCheck,
  FileText
} from "lucide-react";
import Navbar from "../../components/Navbar"; 
import FeaturedResourcesWithFooter from "../../components/FooterSection";


// --- MOCK IMAGE PLACEHOLDERS ---
// URLs are estimated based on Whiteintel's blog structure.
// The onError handlers ensure a fallback visualization if the specific file is not found.
const POST_IMAGES = {
  hero: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/9769966b-7ef8-4fed-a4e6-5661a349f600/w=1200,q=85,format=auto",
  dashboard: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85,format=auto",
  bitbucket_results: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/ce4179ed-afbb-421d-bc7d-bd58f706c400/w=1200,q=85,format=auto",
  affected_urls: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c8bd5e0a-252f-4c52-5474-21969044f200/w=1200,q=85,format=auto"
};

const BugBountyAngles = () => {
  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      <Helmet>
        <title>Discover New Bug Bounty Angles with Leaked Data | Whiteintel</title>
        <meta name="description" content="Learn how to leverage leaked credentials and OSINT tools like Subfinder and Shodan to uncover hidden SaaS panels and CI/CD pipelines for bug bounty hunting." />
        <meta name="keywords" content="bug bounty tips, leaked credentials, OSINT tools, subfinder, shodan, SaaS reconnaissance, CI/CD vulnerability, Whiteintel" />
        <meta property="og:title" content="Discover New Bug Bounty Angles with Leaked Data" />
        <meta property="og:description" content="A guide to combining leaked stealer logs with OSINT for high-impact bug bounty findings." />
        <meta property="og:image" content={POST_IMAGES.hero} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://whiteintel.io/blog/discover-new-bug-bounty-angles" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel Research Team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel" />
        <meta name="twitter:title" content="Discover New Bug Bounty Angles with Leaked Data" />
        <meta name="twitter:description" content="A guide to combining leaked stealer logs with OSINT for high-impact bug bounty findings." />
        <meta name="twitter:image" content={POST_IMAGES.hero} />
        <link rel="canonical" href="https://whiteintel.io/blog/discover-new-bug-bounty-angles" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "BlogPosting",
          "headline": "Discover New Bug Bounty Angles with Leaked Data",
          "description": "Learn how to leverage leaked credentials and OSINT tools to uncover hidden SaaS panels and CI/CD pipelines for bug bounty hunting.",
          "url": "https://whiteintel.io/blog/discover-new-bug-bounty-angles",
          "image": "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/06576d86-e746-432f-4c02-8fd91f6a3400/w=1200,q=85,format=auto",
          "datePublished": "2024-11-01",
          "author": {"@type": "Organization", "name": "Whiteintel Research Team", "url": "https://whiteintel.io"},
          "publisher": {"@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io"},
          "articleSection": "Threat Research", "keywords": "bug bounty, leaked credentials, OSINT, infostealer"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://whiteintel.io"},
            {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://whiteintel.io/blog"},
            {"@type": "ListItem", "position": 3, "name": "Discover New Bug Bounty Angles with Leaked Data", "item": "https://whiteintel.io/blog/discover-new-bug-bounty-angles"}
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full opacity-40" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
              Bug Bounty & Research
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
              Discover New Bug Bounty Angles with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Leaked Data</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Bug bounty hunting has become a sophisticated field where hunters need to stay updated with new techniques and approaches. Leveraging leaked credentials can provide a significant advantage.
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
                <Calendar size={14} /> Nov 1, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> 8 min read
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-16 bg-slate-900 group">
             <div className="bg-slate-800 flex items-center justify-center text-slate-600 min-h-[400px]">
                <img 
                  src={POST_IMAGES.hero} fetchpriority="high" loading="eager" 
                  alt="Bug Bounty Hero" 
                  className="w-full h-auto block" width={1200} height={630}
                  onError={(e) => {
                    e.target.style.display='none';
                    e.target.parentElement.innerHTML = '<div class="flex flex-col items-center gap-4"><div class="flex gap-4 text-6xl">🐛 🔍</div><span class="text-xl font-mono">Advanced Reconnaissance</span></div>';
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
                This post dives deep into what leaked credentials and stealer logs are, how to find valuable assets with OSINT tools, and highlights critical SaaS services and CI/CD pipeline tools to target. Additionally, we will discuss nuances such as redirection to Microsoft for authorization and the importance of enumerating paths for hidden login pages.
              </p>

              <br />
              <h2><strong>What Are Leaked Credentials and Stealers?</strong></h2>
              <p>
                Leaked credentials are sets of login details that have been exposed due to data breaches or malware logs. Stealer malware is designed to collect information from compromised systems, such as usernames, passwords, and cookies. These credentials often surface on dark-web forums and marketplaces, presenting both risks and opportunities for security professionals.
              </p>
              
              {/* IMAGE: Dashboard */}
              <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.dashboard} loading="lazy"
                      alt="Whiteintel Dashboard" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Dashboard: Credential Search Interface</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 1: Incorporating leaked credentials into your bug bounty workflow
                </figcaption>
              </figure>

              <p>
                Incorporating leaked credentials into your bug bounty work—ethically and within program policies—can help you identify high-value vulnerabilities, especially when combined with detailed OSINT enumeration.
              </p>

              <br />
              <h2><strong>Increase Your Impact with OSINT Tools</strong></h2>
              <p>
                OSINT tools can reveal exposed services and applications that might be overlooked. By integrating OSINT with leaked credential analysis, you can uncover assets such as SaaS instances and CI/CD platforms. Below are key tools and techniques:
              </p>

              <div className="bg-slate-800/40 p-6 rounded-xl border border-white/5 my-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Terminal size={20} className="text-purple-500"/>
                   Top OSINT Tools and Techniques
                </h4>
                <ul className="space-y-4 m-0 pl-0 list-none">
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold min-w-[100px]">Subfinder:</span>
                        <span className="text-slate-300">Discovers subdomains (e.g., <code>admin.target.com</code>, <code>jira.target.atlassian.net</code>).</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold min-w-[100px]">Fofa:</span>
                        <span className="text-slate-300">Searches for exposed services like Jira and GitLab. Queries: <code>domain="atlassian.net"</code>.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold min-w-[100px]">Shodan:</span>
                        <span className="text-slate-300">Scans for exposed devices. Use terms like <code>http.title:"Jira"</code>.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold min-w-[100px]">Amass:</span>
                        <span className="text-slate-300">Maps subdomains and identifies exposed services like <code>ci.target.com</code>.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-purple-400 font-bold min-w-[100px]">ffuf / GoBuster:</span>
                        <span className="text-slate-300">Invaluable for brute-forcing directories (e.g., <code>/login</code>, <code>/admin</code>) to find hidden portals.</span>
                    </li>
                </ul>
              </div>

              <br />
              <h2><strong>Redirection to Microsoft for Authorization</strong></h2>
              <p>
                In some cases, SaaS services are configured to redirect users to Microsoft for authentication through Azure AD. This adds an extra layer of complexity but can be a strong indicator of other accessible login endpoints that bypass the standard Microsoft flow.
              </p>
              <p>
                <strong>Key Points:</strong> When encountering such redirection, look for alternate paths and login pages that might not be protected by SSO. Use ffuf and GoBuster to enumerate directories like <code>/login.do</code>, <code>/auth</code>, and <code>/user</code>.
              </p>

              <div className="bg-black/50 p-4 rounded-lg border border-white/10 font-mono text-sm text-green-400 my-4 overflow-x-auto">
                ffuf -u https://company.atlassian.net/FUZZ -w /path/to/wordlist.txt -mc 200,302
              </div>

              <br />
              <h2><strong>Examples of High-Value SaaS Panels and CI/CD Tools</strong></h2>
              <p>
                Below are examples of SaaS platforms and CI/CD tools that bug bounty hunters should target. These tools often contain critical data and are commonly found on subdomains.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-900/50 p-5 rounded-lg border border-white/5">
                    <h5 className="text-purple-400 font-bold mb-3 uppercase text-xs tracking-wider">SaaS Panels</h5>
                    <ul className="text-sm space-y-2 text-slate-300 list-none pl-0">
                        <li><strong>Jira:</strong> Exposes project management data.</li>
                        <li><strong>Confluence:</strong> Reveals internal documentation.</li>
                        <li><strong>ServiceNow:</strong> Service management info.</li>
                        <li><strong>Salesforce:</strong> Customer data and CRM records.</li>
                        <li><strong>Bitbucket:</strong> Source code and configs.</li>
                        <li><strong>Slack:</strong> Team communication.</li>
                    </ul>
                </div>
                <div className="bg-slate-900/50 p-5 rounded-lg border border-white/5">
                    <h5 className="text-purple-400 font-bold mb-3 uppercase text-xs tracking-wider">CI/CD Pipeline Tools</h5>
                    <ul className="text-sm space-y-2 text-slate-300 list-none pl-0">
                        <li><strong>Jenkins:</strong> Build and deployment configs.</li>
                        <li><strong>GitLab CI/CD:</strong> Automated build deployment.</li>
                        <li><strong>TeamCity:</strong> Sensitive configurations.</li>
                        <li><strong>Travis CI:</strong> Check for environment variables.</li>
                        <li><strong>CircleCI:</strong> Pipeline secrets.</li>
                        <li><strong>Azure DevOps:</strong> Comprehensive code management.</li>
                    </ul>
                </div>
              </div>

              {/* IMAGE: Bitbucket Results */}
              <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.bitbucket_results} loading="lazy"
                      alt="Whiteintel Example Results for Bitbucket" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Example: Bitbucket Credential Search</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 2: Identifying SaaS instances via Whiteintel search
                </figcaption>
              </figure>

              <br />
              <h2><strong>Identifying SaaS Instances and Hidden Login Pages</strong></h2>
              <p>
                To maximize your findings, enumerate paths using tools like ffuf to scan for login endpoints. If initial subdomain enumeration yields no results, directly enumerate subdomains for popular SaaS domains (e.g., <code>subfinder -d atlassian.net</code>) and grep for your target's name.
              </p>

              <br />
              <h2><strong>Add a little bit of Sauce - Search with Whiteintel</strong></h2>
              <p>
                Whiteintel.io provides powerful search capabilities that allow you to search by domain names, subdomain names, and email addresses. With our advanced search filters, you can quickly identify affected SaaS credentials related to your bug bounty target.
              </p>
              
               {/* IMAGE: Affected URLs */}
               <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.affected_urls} loading="lazy"
                      alt="Whiteintel Affected URLs Page" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Feature: Affected URLs Search</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 3: Searching for notable compromised URLs
                </figcaption>
              </figure>

              <br />
              <h2><strong>Sample Report Template for Submission</strong></h2>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-xl font-mono text-sm text-slate-300">
                <p><strong className="text-white">Title:</strong> [Unauthorized Access to [SaaS/CI/CD Panel] for [Target Name]]</p>
                <p className="mt-4"><strong className="text-white">Summary:</strong> A vulnerability was discovered on [e.g., jira.company.atlassian.net] using leaked credentials and OSINT tools...</p>
                <p className="mt-4"><strong className="text-white">Details:</strong></p>
                <ul className="list-disc pl-4 mt-2 space-y-1">
                    <li>Asset Type: [e.g., Jira panel]</li>
                    <li>Discovery Method: Leaked credentials + OSINT</li>
                    <li>Login Endpoints: [e.g., /login.do]</li>
                </ul>
                <p className="mt-4"><strong className="text-white">Steps to Reproduce:</strong></p>
                <ol className="list-decimal pl-4 mt-2 space-y-1">
                    <li>Access the target URL.</li>
                    <li>Log in using verified credentials [following ethical guidelines].</li>
                    <li>Note the presence of sensitive data.</li>
                </ol>
              </div>

              <br />
              <h2><strong>How Whiteintel Helps Bug Bounty Researchers</strong></h2>
              <p>
                Whiteintel is committed to empowering bug bounty researchers. Our newly launched <strong>Researcher License</strong> is tailored specifically for verified bug bounty hunters, offering exclusive access to extensive breach data, advanced search features, and real-time updates.
              </p>
              <p>
                The Researcher License enables hunters to deepen their investigations, save valuable time, and submit high-impact reports by validating unauthorized access to systems using responsible methods.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm">
                   To learn more about the Researcher License, contact us via the form at <a href="https://whiteintel.io" target="_blank" className="text-purple-400 hover:text-purple-300">whiteintel.io</a>.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* 5. RELATED ARTICLE CTA */}
        <div className="max-w-4xl mx-auto mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Read Next</h3>
            <a href="/blog/third-party-app-risks-infostealers" className="block group">
                <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 hover:bg-slate-900 hover:border-purple-500/30 transition-all">
                    <div className="flex flex-col justify-center">
                        <div className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Supply Chain</div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Third-Party App Risks in the Age of Infostealer Malware</h4>
                        <p className="text-slate-400 text-sm line-clamp-2">How organizations are opening doors to new cyber risks through third-party integrations.</p>
                    </div>
                </div>
            </a>
        </div>

      </article>
                  <FeaturedResourcesWithFooter />
      
    </div>
  );
};

export default BugBountyAngles;