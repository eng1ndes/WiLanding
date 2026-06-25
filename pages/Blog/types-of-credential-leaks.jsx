import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  Database, 
  Layers, 
  Ghost, 
  List, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle,
  ArrowLeft,
  Calendar,
  Clock,
  User
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FeaturedResourcesWithFooter from "../../components/FooterSection";


// --- IMAGE ASSETS ---
const POST_IMAGES = {
  hero: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/91e39fef-7d33-4b52-da0a-d966621c9f00/w=1200,q=85,format=auto", // Using the image you provided in the prompt
  readNextThumb: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/b4901473-3091-4c7d-73e0-146f51803100/w=1200,q=85,format=auto" // Thumbnail for the 'Read Next' article
};

const TypesOfCredentialLeaks = () => {
  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200 text-slate-300">
      
      {/* SEO & METADATA SECTION */}
      <Helmet>
        <title>Hackers Have Your Credentials But Which Ones Matter? | Whiteintel</title>
        <meta 
          name="description" 
          content="Understand the 4 types of credential leaks: Database leaks, Compilations, Infostealers, and Combolists. Learn why most threat intel alerts are noise and how to focus on actionable threats." 
        />
        <meta name="keywords" content="credential leaks, infostealer malware, combolists, database breaches, cybersecurity, threat intelligence, Whiteintel" />
        <meta name="author" content="Whiteintel Research Team" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Database Leaks? Compilations? Infostealers? Oh My!" />
        <meta property="og:description" content="The credential economy has evolved. Learn the difference between 10-year-old database leaks and active infostealer logs." />
        <meta property="og:url" content="https://whiteintel.io/blog/which-credential-leaks-matter-most" />
        <meta property="og:image" content={POST_IMAGES.hero} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Database Leaks vs. Infostealers: A Taxonomy" />
        <meta name="twitter:description" content="Stop drowning in alerts about decade-old breaches. Learn to identify fresh, exploitable credentials." />
        <meta name="twitter:image" content={POST_IMAGES.hero} />
      </Helmet>

      <Navbar variant="dark" />

      {/* PROGRESS BAR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 origin-left z-[60]"
        initial={{ scaleX: 0 }} 
        animate={{ scaleX: 1 }} 
        transition={{ duration: 1.5, ease: "circOut" }}
      />

      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        
        {/* Abstract Background for Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-60" />
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full opacity-40" />
        </div>

        <div className="relative z-10">
            {/* Breadcrumb */}
<div className="flex justify-start mb-8"> {/* Changed to justify-start */}
    <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors"
    >
        <ArrowLeft size={16} /> Back to Intelligence Center
    </Link>
</div>

            {/* Meta Tags Visual */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-3 mb-6"
            >
                <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                Threat Research
                </span>

            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            > Hackers Have Your Credentials (But Which Ones Matter?)
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
Security teams are drowning in alerts from decade-old breaches while fresh threats slip through. An analysis into the four types of credential leaks and why timing matters more than volume.
            </motion.p>

            {/* Author Block */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-6 text-sm text-slate-400 border-t border-white/5 pt-6 inline-flex"
            >
                <div className="flex items-center gap-2">
                    <User size={14} className="text-blue-500" /> Whiteintel Research
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={14} /> Feb 16, 2026
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={14} /> 6 min read
                </div>
            </motion.div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-slate-900 group">
             <div className="bg-slate-800 flex items-center justify-center text-slate-600 min-h-[400px]">
                <img 
                  src={POST_IMAGES.hero} fetchpriority="high" loading="eager" 
                  alt="Evolution of Credential Theft Hero" 
                  className="w-full h-auto block object-cover" width={1200} height={630}
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-24 relative z-10">
        
        {/* Intro */}
        <div className="prose prose-lg prose-invert max-w-none prose-p:text-slate-400 prose-headings:text-white prose-strong:text-white prose-li:text-slate-400">
   
            <p className="lead text-xl text-white font-medium mb-8">
                         <h1><strong>Database Leaks? Compilations? Infostealer Malware? Combolists? Oh my!</strong></h1><br />
                The credential economy has evolved dramatically. What began with opportunistic database breaches in the late 2000s has transformed into a sophisticated supply chain where credentials are harvested, aggregated, and weaponized at industrial scale.
            </p>
            <p>
                Today's threat landscape doesn't wait for companies to get breached. Infostealers silently extract credentials from endpoints. Combolists automate credential stuffing across thousands of targets simultaneously. And somewhere in an underground market, your employee's reused password from 2012 is being tested against your VPN right now.
            </p>
            <p>
                The problem isn't just that credentials leak - it's that security teams are drowning in alerts about decade-old breaches while fresh, actively exploitable credentials slip through unnoticed.
            </p>
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* 1. DATABASE LEAKS */}
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Database size={24} /></div>
                <h2 className="text-2xl font-bold text-white">1. Database Leaks – The OG</h2>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
                A database leak is exactly what it sounds like: a compromised application or service exposes its user database. That database often contains emails, usernames, and passwords - sometimes hashed, sometimes poorly hashed, and occasionally stored in plaintext (because 2009 was a wild time).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-900/50 border border-white/5 p-5 rounded-xl">
                    <h3 className="text-white font-bold mb-2">RockYou (2009)</h3>
                    <p className="text-sm text-slate-400">Over 32 million plaintext passwords. To this day, <code className="bg-slate-800 text-blue-300 px-1 py-0.5 rounded">rockyou.txt</code> remains a rite of passage in penetration testing labs everywhere.</p>
                </div>
                <div className="bg-slate-900/50 border border-white/5 p-5 rounded-xl">
                    <h3 className="text-white font-bold mb-2">Sony PSN (2011)</h3>
                    <p className="text-sm text-slate-400">77 million accounts exposed. The network went dark for 23 days. It showed how authentication failures cascade into operational disasters.</p>
                </div>
            </div>

            <p className="text-slate-400">
                Database leaks are static. They represent a moment in time: a snapshot of poor password hygiene and inadequate security controls. <strong>They are the fossils of the credential leak landscape.</strong>
            </p>
        </section>

        {/* 2. COMPILATIONS */}
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><Layers size={24} /></div>
                <h2 className="text-2xl font-bold text-white">2. Compilations – The Franken-Lists</h2>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
                Imagine someone took dozens (or hundreds) of database leaks and stitched them together into one massive credential monster. That's a "compilation."
            </p>
            <p className="text-slate-400 mb-6">
                Compilations aggregate breached credentials from multiple incidents into unified searchable datasets. They're often deduplicated, reformatted, and enriched. It's like a Spotify playlist but for identity theft.
            </p>
            
            <blockquote className="border-l-4 border-purple-500 pl-4 py-1 my-6 italic text-slate-300 bg-slate-900/30 p-4 rounded-r-lg">
                "Unlike single database leaks, compilations create scale. If database leaks are fossils, compilations are the museum gift shop."
            </blockquote>

            <p className="text-slate-400">
                A famous example is <strong>COMB 2021</strong> (Compilation of Many Breaches) - a mega-compilation claiming over 3.2 billion credentials.
            </p>
        </section>

        {/* 3. INFOSTEALERS */}
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg text-red-400"><Ghost size={24} /></div>
                <h2 className="text-2xl font-bold text-white">3. Infostealer Malware – The Future Is Now</h2>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
                Here's where things get modern. And uncomfortable. Infostealers are malware families designed specifically to extract credentials, session tokens, browser data, and crypto wallets from infected endpoints.
            </p>
            <p className="text-slate-400 mb-6">
                Unlike database leaks, these aren't server-side breaches. <strong>They're client-side harvests.</strong> An employee clicks a malicious attachment, or a contractor installs a "free" video converter, and suddenly:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {["Browser-stored passwords", "Autofill data", "Session cookies", "Saved VPN credentials", "SSH keys", "Desktop wallet files"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 bg-slate-900/50 px-3 py-2 rounded border border-white/5 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> {item}
                    </li>
                ))}
            </ul>

            <p className="text-slate-400">
                Modern families like <strong>RedLine, Raccoon, Vidar, and META</strong> have turned credential theft into an automated assembly line. Infostealers don't wait for companies to get breached; they turn individuals into breach vectors.
            </p>
        </section>

        {/* 4. COMBOLISTS */}
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><List size={24} /></div>
                <h2 className="text-2xl font-bold text-white">4. Combolists – Automation's Favorite Snack</h2>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
                A combolist is a structured list of <code className="text-emerald-300">email:password</code> pairs, often harvested from database leaks and infostealer logs. These lists are designed for one purpose: automation and unauthorized access at massive scale.
            </p>
            
            <div className="bg-[#0f172a] p-4 rounded-lg border border-slate-700 font-mono text-sm text-slate-300 mb-6 shadow-inner">
                <div className="opacity-50 mb-2">// Typical Combolist Format</div>
                <div>user@example.com:Password123</div>
                <div>john.doe@company.com:Summer2023!</div>
                <div>admin@target.com:qwerty</div>
                <div>gamer420@yahoo.com:ilovemymom1</div>
            </div>

            <p className="text-slate-400">
                Tools like <strong>OpenBullet</strong> and <strong>SilverBullet</strong> allow attackers to load combolists and test credentials against specific websites using configurable "configs." Attackers don't care where the credentials came from - only whether they still work.
            </p>
        </section>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* WHITEINTEL APPROACH */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Whiteintel Approach</h2>
            <p className="text-slate-400 mb-8 text-center max-w-2xl mx-auto">
                Most threat intelligence platforms ingest everything. Every ancient database leak. Every recycled compilation. The result? <strong>Alert Fatigue.</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Traditional Card */}
                <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <XCircle size={100} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
                        <XCircle className="text-slate-500" size={20} /> Traditional Vendor
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-slate-950/50 p-3 rounded border-l-2 border-slate-600">
                            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Alert</div>
                            <div className="text-slate-300 text-sm">Domain found in breach</div>
                        </div>
                        <div className="bg-slate-950/50 p-3 rounded border-l-2 border-slate-600">
                            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Source</div>
                            <div className="text-slate-300 text-sm">LinkedIn 2021 (47th notification)</div>
                        </div>
                        <div className="bg-slate-950/50 p-3 rounded border-l-2 border-slate-600">
                            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Result</div>
                            <div className="text-slate-400 text-sm italic">Ignored by SOC</div>
                        </div>
                    </div>
                </div>

                {/* Whiteintel Card */}
                <div className="bg-blue-900/10 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ShieldAlert size={100} className="text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-blue-500" size={20} /> Whiteintel Workflow
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-slate-900/80 p-3 rounded border-l-2 border-blue-500">
                            <div className="text-xs text-blue-400 uppercase font-bold mb-1">Alert</div>
                            <div className="text-white text-sm">Employee credentials in RedLine log</div>
                        </div>
                        <div className="bg-slate-900/80 p-3 rounded border-l-2 border-blue-500">
                            <div className="text-xs text-blue-400 uppercase font-bold mb-1">Timing</div>
                            <div className="text-white text-sm">Harvested 48 hours ago</div>
                        </div>
                        <div className="bg-slate-900/80 p-3 rounded border-l-2 border-blue-500">
                            <div className="text-xs text-blue-400 uppercase font-bold mb-1">Contains</div>
                            <div className="text-white text-sm">Active session tokens, MFA cookies</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-10 text-center">
                <p className="text-lg text-slate-300 mb-6">
                    In 2026, the question isn't whether your credentials will leak. It's whether you'll identify the actively exploitable ones in time to respond.
                </p>

            </div>
        </section>

        {/* 5. READ NEXT SECTION */}
        <div className="max-w-4xl mx-auto mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Read Next</h3>
            <Link to="/blog/infostealers-2025-year-in-review" className="block group">
                <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 hover:bg-slate-900 hover:border-blue-500/30 transition-all">
                    {/* Read Next Thumb */}
                    <div className="w-full sm:w-48 h-32 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0">
                         <img
                             src={POST_IMAGES.readNextThumb}
                             alt="2025 Review"
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                             width={600}
                             height={400}
                         />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Threat Research</div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Infostealers in 2025: A Year in Review</h4>
                        <p className="text-slate-400 text-sm line-clamp-2">From law enforcement takedowns to death threats made out to threat intelligence researchers.</p>
                    </div>
                </div>
            </Link>
        </div>

      </article>

      <FeaturedResourcesWithFooter />
    </div>
  );
};

export default TypesOfCredentialLeaks;