import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FeaturedResourcesWithFooter from "../components/FooterSection";

import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  User, 
} from "lucide-react";
import Navbar from "../components/Navbar";

const CATEGORIES = ["All", "Threat Research", "Product Updates"];

const BLOG_POSTS = [

  {
  id: 16,
  title: "The macOS Infostealer Explosion: 3,276% Growth in One Year",
  excerpt: "While Windows infostealer activity declined 30% year-over-year, macOS infections exploded by 3,276%. WhiteIntel's threat data reveals how the attack landscape shifted — and why the 'Macs are secure' assumption is dead.",
  category: "Threat Research",
  author: "Research Team",
  date: "Mar 31, 2026",
  readTime: "10 min read",
  image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/308ba034-4b05-44c1-ec60-76740bac4500/w=1200,q=85,format=auto",
  link: "/blog/macos-infostealer-explosion",
  featured: false
},
  {
    id: 15,
    title: "The Infostealer Lifecycle: From 0 to 48 Hours",
    excerpt: "48 hours. That's how long it takes for your employee's credentials to go from an infected laptop to an underground marketplace. A step-by-step breakdown of the infostealer kill chain.",
    category: "Threat Research",
    author: "Research Team",
    date: "Mar 24, 2026",
    readTime: "9 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/a4afb533-4350-45a6-b4fd-c5bcad498200/w=600,q=80,format=auto",
    link: "/blog/infostealer-lifecycle-48-hours",
    featured: false
  },
  {
    id: 14,
    title: "MagicSlides Data Breach: 2.3 Million User Records Exposed",
    excerpt: "In March 2026, MagicSlides.app, an AI-powered presentation platform, suffered a breach exposing over 2.3 million records including emails, phone numbers, Stripe customer IDs, Telegram IDs, and organisation data.",
    category: "Threat Research",
    author: "Research Team",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/a6005c4f-7fae-4575-5d1e-a00a6c9cfc00/w=600,q=80,format=auto",
    link: "/blog/magicslides-data-breach-2026",
    featured: false
  },
  {
    id: 3,
    title: "TLDR.Tech Data Breach: 1.2 Million Professional Profiles Exposed",
    excerpt: "In March 2026, the popular tech newsletter platform TLDR.Tech suffered a breach exposing over 1.2 million subscriber records including LinkedIn identities, job titles, company details, and career histories.",
    category: "Threat Research",
    author: "Research Team",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/65b0b18e-e3e0-4cd4-963d-c09847e9a100/w=600,q=80,format=auto",
    link: "/blog/tldr-tech-data-breach-2026",
    featured: false
  },
  {
    id: 2,
    title: "Exposing Threat Actors with Whiteintel AI",
    excerpt: "Beyond Breach Monitoring: How Neural Identity Attribution is Closing the Gap Between a Leaked Email and a Physical Identity.",
    category: "Product Updates",
    author: "Research Team",
    date: "Jan 11, 2026",
    readTime: "5 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/34e9b232-3f52-4f2c-4a9d-eb135439f900/w=600,q=80,format=auto",
    link: "/blog/exposing-threat-actors-with-whiteintel-ai",
    featured: false
  },
  {
    id: 1,
    title: "Your Employees Are Your Perimeter Now",
    excerpt: "The network perimeter you spent years hardening is irrelevant when your CFO's credentials are harvested from their gaming laptop at home.",
    category: "Threat Research",
    author: "Research Team",
    date: "Feb 27, 2026",
    readTime: "7 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/4746daeb-f677-48cd-1499-cbb68fddce00/w=600,q=80,format=auto",
    link: "/blog/employee-is-the-new-security-perimeter",
    featured: false
  },
  {
    id: 13,
    title: "1500+ Third-Party Database Breaches Now Live",
    excerpt: "We've massively expanded our threat intelligence arsenal with over 1,500 third-party database breaches, now fully searchable via our Corporate Leaks dashboard and dedicated API",
    category: "Product Updates",
    author: "Research Team",
    date: "Mar 7, 2026",
    readTime: "4 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/169e34fd-e1e7-4a99-0536-3ff7043aa100/w=600,q=80,format=auto",
    link: "/blog/third-party-database-breaches",
    featured: true
  },
  {
    id: 12,
    title: "Hackers Have Your Credentials (But Which Ones Matter?)",
    excerpt: "The credential economy has evolved from opportunistic database breaches into a sophisticated, industrial-scale supply chain where credentials are weaponized.",
    category: "Threat Research",
    author: "Research Team",
    date: "Feb 16, 2026",
    readTime: "6 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/91e39fef-7d33-4b52-da0a-d966621c9f00/w=600,q=80,format=auto",
    link: "/blog/which-credential-leaks-matter-most",
    featured: false
  },
  {
    id: 4,
    title: "Infostealers in 2025: A Year in Review",
    excerpt: "From law enforcement takedowns to death threats made out to threat intelligence researchers, it has been a very hectic year for the cybersecurity industry.",
    category: "Threat Research",
    author: "Research Team",
    date: "Dec 8, 2025",
    readTime: "5 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/b4901473-3091-4c7d-73e0-146f51803100/w=600,q=80,format=auto",
    link: "/blog/infostealers-2025-year-in-review",
    featured: false
  },
  {
    id: 5,
    title: "Exposed Secrets in Public Repos",
    excerpt: "Whiteintel now introduces Public GitHub Repository Scan, a new feature designed to help organizations detect exposed secrets.",
    category: "Product Updates",
    author: "Research Team",
    date: "Nov 11, 2025",
    readTime: "3 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/32d7e6bc-de22-4047-9a20-e8168d0d0600/w=600,q=80,format=auto",
    link: "/blog/exposed-secrets-public-repos",
    featured: false
  },
  {
    id: 6,
    title: "How Stealers Capture Android Credentials from Windows",
    excerpt: "You might be sharing more information than you think with your connected devices. See how Windows malwares steals android passwords.",
    category: "Threat Research",
    author: "Research Team",
    date: "Aug 4, 2025",
    readTime: "3 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/dc2d6bae-3193-468f-0b15-dce174d7d900/w=600,q=80,format=auto",
    link: "/blog/android-credentials-via-windows",
    featured: false
  },
  {
    id: 7,
    title: "Third-Party App Risks in the Age of Infostealer Malware",
    excerpt: "As organizations rely more on third-party apps for efficiency and scalability, they also open doors to new cyber risks.",
    category: "Threat Research",
    author: "Research Team",
    date: "Nov 19, 2024",
    readTime: "3 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/d17bd2ff-6bb5-4606-d348-9f5620a2dc00/w=600,q=80,format=auto",
    link: "/blog/third-party-app-risks-infostealers",
    featured: false
  },
  {
    id: 8,
    title: "Top 10 SaaS Credential Leaks: 2024 Whiteintel Insights",
    excerpt: "The 2024 Whiteintel insights on credential leaks from the most-used SaaS applications.",
    category: "Threat Research",
    author: "Research Team",
    date: "Sep 12, 2024",
    readTime: "12 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/f1285341-c3b7-4604-2b35-7608ba99f600/w=600,q=80,format=auto",
    link: "/blog/2024-top-10-saas-credential-leaks",
    featured: false
  },
  {
    id: 9,
    title: "Discover New Bug Bounty Angles with Leak Data",
    excerpt: "Bug bounty hunting has become a sophisticated field where hunters need to stay updated with new techniques and approaches.",
    category: "Threat Research",
    author: "Research Team",
    date: "Nov 1, 2024",
    readTime: "8 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/06576d86-e746-432f-4c02-8fd91f6a3400/w=600,q=80,format=auto",
    link: "/blog/discover-new-bug-bounty-angles",
    featured: false
  },
  {
    id: 10,
    title: "Importance of Dark web Scans",
    excerpt: "In today's digital landscape, your sensitive data is at constant risk. Cybercriminals continuously look for ways to exploit leaked information.",
    category: "Threat Research",
    author: "Research Team",
    date: "Sep 12, 2024",
    readTime: "3 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/0f9668ac-f13e-41b0-30b7-7252bc92b000/w=600,q=80,format=auto",
    link: "/blog/importance-of-darkweb-scans",
    featured: false
  },
  {
    id: 11,
    title: "Understanding Stealer Malwares",
    excerpt: "Stealer malware has become one of the most pervasive cybersecurity threats today.",
    category: "Threat Research",
    author: "Research Team",
    date: "Sep 12, 2024",
    readTime: "3 min read",
    image: "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/a73f147c-a7c7-44fd-2a2d-62d016659a00/w=600,q=80,format=auto",
    link: "/blog/understanding-stealer-malwares",
    featured: false
  },
];

// Parses "Mar 7, 2026" → Date object for reliable sorting
const parseDate = (dateStr) => new Date(dateStr);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS
    .filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    // ✅ Sort by date descending — newest post always appears first
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const featuredPost = filteredPosts.find(p => p.featured) ?? filteredPosts[0];
  const gridPosts = filteredPosts.filter(p => p !== featuredPost);

  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      <Helmet>
        <title>Intelligence Center — Threat Research & Cybersecurity Blog | Whiteintel</title>
        <meta name="description" content="Deep dives into threat research, dark web investigations, infostealer analysis, and product updates from the Whiteintel team." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Whiteintel Intelligence Center — Threat Research Blog" />
        <meta property="og:description" content="Deep dives into threat research, dark web investigations, infostealer analysis, and product updates from the Whiteintel team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/blog" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Whiteintel Intelligence Center — Threat Research Blog" />
        <meta name="twitter:description" content="Deep dives into threat research, dark web investigations, and infostealer analysis." />
        <link rel="canonical" href="https://whiteintel.io/blog" />
      </Helmet>
      <Navbar variant="dark" />

      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full opacity-50" />
          <img
            src="/assets/banner-background.png"
            className="w-full h-full object-cover opacity-[0.05] mix-blend-screen"
            alt="bg"
            width={1920}
            height={1080}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Intelligence <span className="text-blue-500">Center</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Deep dives into threat research, product updates, and dark web investigations directly from the Whiteintel team.
            </p>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto bg-slate-900/50 border border-white/10 rounded-2xl p-2 backdrop-blur-md">
              <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar px-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      activeCategory === cat 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64 px-2">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-300 text-sm rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        
        {/* FEATURED POST — always the most recent */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Link to={featuredPost.link} className="group block cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-8 hover:border-blue-500/30 transition-all duration-300">
                
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 lg:hidden" />
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={1200} height={630} />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6 text-xs font-bold uppercase tracking-wider">
                    <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Calendar size={12} /> {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white">WI</div>
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono uppercase">
                      <Clock size={12} /> {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* REGULAR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="h-full"
            >
              <Link to={post.link} className="group flex flex-col h-full bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                
                {/* Card Image */}
                <div className="h-48 overflow-hidden bg-slate-800 relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={600}
                    height={400}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                      <User size={12} className="text-blue-500" />
                      {post.author}
                    </span>
                    <span className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
              <Search className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-white">No articles found</h3>
            <p className="text-slate-400 mt-2">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-6 text-blue-400 hover:text-blue-300 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}

      </main>

      <FeaturedResourcesWithFooter />
    </div>
  );
};

export default BlogPage;