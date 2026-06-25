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
  Github,
  Code2,
  Lock,
  Eye,
  ShieldAlert
} from "lucide-react";
import Navbar from "../../components/Navbar"; 
import { Helmet } from "react-helmet-async";
import FeaturedResourcesWithFooter from "../../components/FooterSection";

// --- MOCK IMAGE PLACEHOLDERS ---
// Reconstructed based on typical blog assets for this topic
const POST_IMAGES = {
  hero: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/05485c15-c011-4ff1-506f-6ef3a1e77d00/w=1200,q=85,format=auto",
  leaked_code_example: "https://blog.whiteintel.io/content/images/2025/11/resim-5.png",
  attack_flow: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/25ab8fe5-e246-46b5-cbb9-693dbe35d100/w=1200,q=85,format=auto",
  dashboard_monitoring: "https://blog.whiteintel.io/content/images/size/w1600/2025/11/resim-4.png"
};

const ExposedSecretsInRepos = () => {
  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Helmet>
  <title>Exposed Secrets in Public Repos: A New Threat Frontier | Whiteintel</title>
  <meta name="description" content="Hardcoded credentials in public repositories are fueling modern cyberattacks. Learn how attackers automate secret scanning and how to protect your code." />
  <meta name="keywords" content="git secrets, github leaks, api key scanning, repository intelligence, devsecops, supply chain security, hardcoded credentials" />
  <meta property="og:title" content="Exposed Secrets in Public Repos" />
  <meta property="og:description" content="Why hardcoded credentials in GitHub, GitLab, and Bitbucket are becoming the primary entry point for modern cyberattacks." />
  <meta property="og:image" content={POST_IMAGES.hero}/>
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://whiteintel.io/blog/exposed-secrets-public-repos" />
  <meta property="og:site_name" content="Whiteintel" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Whiteintel Research Team" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@whiteintel" />
  <meta name="twitter:title" content="Exposed Secrets in Public Repos" />
  <meta name="twitter:description" content="Why hardcoded credentials in GitHub, GitLab, and Bitbucket are becoming the primary entry point for modern cyberattacks." />
  <meta name="twitter:image" content={POST_IMAGES.hero} />
  <link rel="canonical" href="https://whiteintel.io/blog/exposed-secrets-public-repos" />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org", "@type": "BlogPosting",
    "headline": "Exposed Secrets in Public Repos: A New Threat Frontier",
    "description": "Hardcoded credentials in public repositories are fueling modern cyberattacks. Learn how attackers automate secret scanning and how to protect your code.",
    "url": "https://whiteintel.io/blog/exposed-secrets-public-repos",
    "image": "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/32d7e6bc-de22-4047-9a20-e8168d0d0600/w=1200,q=85,format=auto",
    "datePublished": "2025-11-11",
    "author": {"@type": "Organization", "name": "Whiteintel Research Team", "url": "https://whiteintel.io"},
    "publisher": {"@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io"},
    "articleSection": "Product Updates", "keywords": "exposed secrets, github leaks, api key scanning, repository security"
  })}</script>
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://whiteintel.io"},
      {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://whiteintel.io/blog"},
      {"@type": "ListItem", "position": 3, "name": "Exposed Secrets in Public Repos", "item": "https://whiteintel.io/blog/exposed-secrets-public-repos"}
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
              Threat Intelligence
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]">
              Exposed Secrets in Public Repos: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">A New Frontier in Threat Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Why hardcoded credentials in GitHub, GitLab, and Bitbucket are becoming the primary entry point for modern cyberattacks.
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
                <Calendar size={14} /> Nov 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> 3 min read
              </div>
            </div>
          </header>

          {/* HERO IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-16 bg-slate-900 group">
             <div className="bg-slate-800 flex items-center justify-center text-slate-600 min-h-[400px]">
                <img 
                  src={POST_IMAGES.hero} fetchpriority="high" loading="eager" 
                  alt="Secrets in Public Repos Hero" 
                  className="w-full h-auto block" width={1200} height={630}
                  onError={(e) => {
                    e.target.style.display='none';
                    e.target.parentElement.innerHTML = '<div class="flex flex-col items-center gap-4"><span class="text-6xl">🔑</span><span class="text-xl font-mono">Exposed Secrets</span></div>';
                  }}
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
   

            {/* Article Body */}
            <div className="lg:col-span-11 prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-p:leading-8 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-xl">
              
              <p className="lead text-slate-200">
                In the race to deploy code faster, developers often bypass security protocols. The result? A massive proliferation of hardcoded API keys, database credentials, and private certificates inadvertently pushed to public repositories. This negligence has birthed a new frontier in threat intelligence: passive reconnaissance via public commits.
              </p>
              
              <br />
              <h2><strong>The Scale of the Problem</strong></h2>
              <p>
                Public repositories like GitHub, GitLab, and Bitbucket host billions of lines of code. While they are invaluable for collaboration, they are also a goldmine for threat actors. A simple mistake—forgetting to add a <code>.env</code> file to <code>.gitignore</code>—can expose an organization's entire cloud infrastructure in seconds.
              </p>
              <p>
                Recent analysis indicates that over <strong>10 million secrets</strong> were leaked in public commits in 2024 alone. These aren't just low-level tokens; they often include:
              </p>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex gap-3 items-center text-slate-300">
                    <CheckIcon /> AWS Access Key IDs & Secret Keys
                </li>
                <li className="flex gap-3 items-center text-slate-300">
                    <CheckIcon /> Stripe & PayPal Live API Keys
                </li>
                <li className="flex gap-3 items-center text-slate-300">
                    <CheckIcon /> Google Cloud Service Account JSONs
                </li>
                <li className="flex gap-3 items-center text-slate-300">
                    <CheckIcon /> Private SSH Keys (id_rsa)
                </li>
              </ul>

              {/* IMAGE: Leaked Code Example */}
              <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.leaked_code_example} loading="lazy"
                      alt="Example of Leaked AWS Keys in Python Code" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg font-mono">def connect_to_s3():<br/>&nbsp;&nbsp;key="AKIA..." # LEAKED</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 1: A typical hardcoded credential detected in a public commit
                </figcaption>
              </figure>

              <br />
              <h2><strong>How Attackers Exploit This</strong></h2>
              <p>
                The window of opportunity for an attacker is shrinking. It is no longer about humans manually searching for "password"; it is about automation. Threat actors deploy sophisticated scrapers that monitor the "firehose" of public events in real-time.
              </p>
              <p>
                When a developer pushes code containing a secret, bots detect it within seconds.
              </p>

              <div className="bg-slate-800/40 p-6 rounded-xl border border-white/5 my-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <ShieldAlert size={20} className="text-purple-500"/>
                   The Attack Lifecycle
                </h4>
                <ol className="list-decimal pl-4 space-y-3 text-slate-300 marker:text-purple-500 marker:font-bold">
                    <li><strong>Commit:</strong> Developer pushes code with `AWS_SECRET_ACCESS_KEY`.</li>
                    <li><strong>Detection:</strong> Attacker's bot scans the public feed and identifies the pattern.</li>
                    <li><strong>Validation:</strong> The bot automatically tests the key against the API to check permissions (e.g., `sts:GetCallerIdentity`).</li>
                    <li><strong>Persistence:</strong> If valid, the attacker creates a backdoor user or spins up crypto-mining instances.</li>
                </ol>
              </div>

              {/* IMAGE: Attack Flow Graph */}
              <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.attack_flow} loading="lazy"
                      alt="Attack Lifecycle Diagram" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Diagram: Commit -> Scan -> Exploit</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 2: The automated lifecycle of a secret leak exploitation
                </figcaption>
              </figure>

              <br />
              <h2><strong>Whiteintel's Approach: Proactive Monitoring</strong></h2>
              <p>
                Traditional security tools scan repositories <em>after</em> they are connected to an organization. However, shadow IT means developers often use personal accounts for work projects. Whiteintel bridges this gap by monitoring the entire public commit stream for keywords associated with your organization's domains and assets.
              </p>
              <p>
                Our "Repository Intelligence" module allows security teams to:
              </p>
              <ul className="list-disc pl-4 space-y-2 text-slate-300">
                  <li>Detect corporate emails used in personal GitHub commits.</li>
                  <li>Identify leaked internal subdomains in configuration files.</li>
                  <li>Receive alerts instantly when a high-entropy string is associated with your brand.</li>
              </ul>

              {/* IMAGE: Dashboard Monitoring */}
              <figure className="my-12">
                <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px]">
                    <img 
                      src={POST_IMAGES.dashboard_monitoring} loading="lazy"
                      alt="Whiteintel Repository Monitoring Dashboard" 
                      className="w-full h-auto block" width={1200} height={630}
                      onError={(e) => {
                        e.target.style.display='none';
                        e.target.parentElement.innerHTML = '<span class="text-slate-500 text-lg">🖼️ Dashboard: Public Repo Monitoring</span>';
                      }}
                    />
                </div>
                <figcaption className="text-center text-sm text-slate-500 mt-3">
                  Figure 3: Whiteintel Repository Intelligence Module
                </figcaption>
              </figure>

              <br />
              <h2><strong>Conclusion</strong></h2>
              <p>
                As organizations secure their perimeter, the "human element" remains the weakest link. Public repositories are the new perimeter. Ignoring them is akin to leaving the front door open while locking the windows. By leveraging automated intelligence to monitor these external sources, organizations can detect and revoke leaked credentials before they result in a catastrophic breach.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm">
                   Protect your assets today. Learn more about our Repository Monitoring at: <a href="https://whiteintel.io" target="_blank" className="text-purple-400 hover:text-purple-300">whiteintel.io</a>
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* 5. RELATED ARTICLE CTA */}
        <div className="max-w-4xl mx-auto mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Read Next</h3>
            <a href="/blog/infostealers-2025-year-in-review" className="block group">
                <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 hover:bg-slate-900 hover:border-purple-500/30 transition-all">
                    <div className="w-full sm:w-48 h-32 bg-slate-800 rounded-xl flex-shrink-0 flex items-center justify-center text-slate-600 text-xs overflow-hidden">
                         <div className="flex flex-col items-center gap-2">
                           <span className="text-2xl">🦠</span>
                           <span>2025 Review</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Threat Research</div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Infostealers in 2025: A Year in Review</h4>
                        <p className="text-slate-400 text-sm line-clamp-2">An in-depth analysis of the rise of Raccoon Stealer v3 and how MSSPs can detect compromised credentials.</p>
                    </div>
                </div>
            </a>
        </div>

      </article>
                  <FeaturedResourcesWithFooter />
      
    </div>
  );
};

// Helper Icon for the list
const CheckIcon = () => (
    <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>
);

export default ExposedSecretsInRepos;