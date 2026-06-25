import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  BookOpen,
  Tag,
  ArrowRight,
  Search,
} from "lucide-react";
import Navbar from "../components/Navbar";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import { GLOSSARY_TERMS } from "../data/glossaryTerms";

const CATEGORY_COLORS = {
  "Attack Types": "text-red-400 bg-red-500/10 border-red-500/20",
  "Malware & Infrastructure": "text-orange-400 bg-orange-500/10 border-orange-500/20",
  "Threat Intelligence": "text-blue-400 bg-blue-500/10 border-blue-500/20",
  "Threat Actors": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  "Data & Leaks": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  "Defensive Security": "text-green-400 bg-green-500/10 border-green-500/20",
  "Security Concepts": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  "Vulnerabilities": "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "Cybercrime": "text-pink-400 bg-pink-500/10 border-pink-500/20",
};

const CATEGORY_GLOW = {
  "Attack Types": "bg-red-900/10",
  "Malware & Infrastructure": "bg-orange-900/10",
  "Threat Intelligence": "bg-blue-900/10",
  "Threat Actors": "bg-purple-900/10",
  "Data & Leaks": "bg-yellow-900/10",
  "Defensive Security": "bg-green-900/10",
  "Security Concepts": "bg-cyan-900/10",
  "Vulnerabilities": "bg-rose-900/10",
  "Cybercrime": "bg-pink-900/10",
};

const GlossaryTermPage = () => {
  const { slug } = useParams();
  const term = GLOSSARY_TERMS.find((t) => t.slug === slug);

  if (!term) {
    return (
      <div className="bg-[#020617] min-h-screen font-sans">
        <Navbar variant="dark" />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <BookOpen size={48} className="text-slate-700 mb-4" />
          <h1 className="text-3xl font-bold text-white mb-3">Term Not Found</h1>
          <p className="text-slate-400 mb-8">
            We couldn't find a definition for that term.
          </p>
          <Link
            to="/glossary"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <BookOpen size={16} /> Browse Glossary
          </Link>
        </div>
        <FeaturedResourcesWithFooter />
      </div>
    );
  }

  const relatedTermObjects = (term.relatedTerms || [])
    .map((s) => GLOSSARY_TERMS.find((t) => t.slug === s))
    .filter(Boolean);

  const colorClass = CATEGORY_COLORS[term.category] || "text-blue-400 bg-blue-500/10 border-blue-500/20";
  const glowClass = CATEGORY_GLOW[term.category] || "bg-blue-900/10";

  // Convert newlines to paragraphs for rendering
  const paragraphs = term.definition.split("\n\n").filter(Boolean);

  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Helmet>
        <title>{term.term} — Definition & Explanation | Whiteintel Glossary</title>
        <meta name="description" content={`${term.shortDef} Learn the full definition and context of ${term.term} in our cybersecurity and threat intelligence glossary.`} />
        <meta name="keywords" content={`${term.term.toLowerCase()}, ${term.term.toLowerCase()} definition, cybersecurity glossary, threat intelligence, whiteintel`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel Research Team" />

        {/* Open Graph */}
        <meta property="og:title" content={`${term.term} | Whiteintel Cybersecurity Glossary`} />
        <meta property="og:description" content={term.shortDef} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://whiteintel.io/glossary/${term.slug}`} />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="article:author" content="Whiteintel Research Team" />
        <meta property="article:section" content={term.category} />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content={`${term.term} | Whiteintel Glossary`} />
        <meta name="twitter:description" content={term.shortDef} />

        <link rel="canonical" href={`https://whiteintel.io/glossary/${term.slug}`} />

        {/* DefinedTerm schema — for semantic search engines */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "name": term.term,
          "description": term.definition.replace(/\n\n/g, " "),
          "url": `https://whiteintel.io/glossary/${term.slug}`,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Whiteintel Cybersecurity Glossary",
            "url": "https://whiteintel.io/glossary",
            "publisher": {
              "@type": "Organization",
              "name": "Whiteintel",
              "url": "https://whiteintel.io"
            }
          }
        })}</script>

        {/* FAQPage schema — triggers Google AI Overviews and rich snippets */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `What is ${term.term}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": term.definition.replace(/\n\n/g, " ")
              }
            },
            {
              "@type": "Question",
              "name": `How does ${term.term} work?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": term.definition.split("\n\n")[1] || term.shortDef
              }
            }
          ]
        })}</script>

        {/* Article schema — for content authority signals */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${term.term}: Definition, Explanation & Context`,
          "description": term.shortDef,
          "url": `https://whiteintel.io/glossary/${term.slug}`,
          "author": {
            "@type": "Organization",
            "name": "Whiteintel Research Team",
            "url": "https://whiteintel.io"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Whiteintel",
            "url": "https://whiteintel.io",
            "logo": {
              "@type": "ImageObject",
              "url": "https://whiteintel.io/favicon.ico"
            }
          },
          "about": {
            "@type": "DefinedTerm",
            "name": term.term
          },
          "articleSection": term.category,
          "keywords": `${term.term}, cybersecurity, threat intelligence, dark web monitoring`
        })}</script>
      </Helmet>

      <Navbar variant="dark" />

      {/* PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 origin-left z-[60]"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "circOut" }}
      />

      <article className="relative pt-32 pb-24 px-4 sm:px-6">

        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${glowClass} blur-[120px] rounded-full opacity-50`} />
          <img src="/assets/banner-background.png" className="w-full h-full object-cover opacity-[0.03] mix-blend-screen" alt="" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">

          {/* BACK */}
          <Link
            to="/glossary"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Glossary
          </Link>

          {/* HEADER */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest ${colorClass}`}>
                <Tag size={10} /> {term.category}
              </span>
              <span className="text-slate-500 text-xs flex items-center gap-1.5">
                <BookOpen size={12} /> Cybersecurity Glossary
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {term.term}
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed border-l-2 border-blue-500/50 pl-5">
              {term.shortDef}
            </p>
          </header>

          {/* DEFINITION */}
          <section className="mb-12">
            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 block" />
              Full Definition
            </h2>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-slate-300 leading-8 text-base">
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* RELATED TERMS */}
          {relatedTermObjects.length > 0 && (
            <section className="mb-12">
              <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 block" />
                Related Terms
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedTermObjects.map((related) => {
                  const relColor = CATEGORY_COLORS[related.category] || "text-blue-400 bg-blue-500/10 border-blue-500/20";
                  return (
                    <Link
                      key={related.slug}
                      to={`/glossary/${related.slug}`}
                      className="group flex items-start gap-3 bg-slate-900/40 border border-white/5 rounded-xl p-4 hover:bg-slate-900/80 hover:border-blue-500/30 transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                          {related.term}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {related.shortDef}
                        </p>
                        <span className={`inline-block mt-2 text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded border ${relColor}`}>
                          {related.category}
                        </span>
                      </div>
                      <ArrowRight size={14} className="text-slate-600 group-hover:text-blue-400 flex-shrink-0 mt-1 transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/15 transition-all duration-700" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                Threat Intelligence Platform
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Monitor Your Exposure on Whiteintel
              </h3>
              <p className="text-slate-400 mb-6 max-w-lg text-sm leading-relaxed">
                Understanding threats is the first step. Whiteintel continuously monitors dark web sources, stealer logs, and breach databases so you know the moment your organization's data is at risk.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://platform.whiteintel.io"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-5 rounded-lg transition-colors text-sm"
                >
                  <Search size={15} />
                  Search on Whiteintel
                </a>
                <Link
                  to="/glossary"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm border border-white/10"
                >
                  <BookOpen size={15} />
                  Back to Glossary
                </Link>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whiteintel.io" },
              { "@type": "ListItem", "position": 2, "name": "Glossary", "item": "https://whiteintel.io/glossary" },
              { "@type": "ListItem", "position": 3, "name": term.term, "item": `https://whiteintel.io/glossary/${term.slug}` },
            ],
          }),
        }}
      />

      <FeaturedResourcesWithFooter />
    </div>
  );
};

export default GlossaryTermPage;
