import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, ArrowRight, BookOpen, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES } from "../data/glossaryTerms";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const GlossaryPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLetter, setActiveLetter] = useState("All");

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((t) => {
      const matchesSearch =
        search === "" ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.shortDef.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || t.category === activeCategory;
      const matchesLetter =
        activeLetter === "All" ||
        t.term.toUpperCase().startsWith(activeLetter);
      return matchesSearch && matchesCategory && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [search, activeCategory, activeLetter]);

  const usedLetters = useMemo(
    () => new Set(GLOSSARY_TERMS.map((t) => t.term[0].toUpperCase())),
    []
  );

  return (
    <div className="bg-[#020617] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Helmet>
        <title>Cybersecurity & Threat Intelligence Glossary | Whiteintel</title>
        <meta
          name="description"
          content="Comprehensive definitions of cybersecurity and threat intelligence terms. From account takeover to zero-day exploits — learn the language of modern cyber threats."
        />
        <meta
          name="keywords"
          content="cybersecurity glossary, threat intelligence terms, infostealer definition, dark web glossary, credential stuffing, account takeover, ransomware definition, phishing glossary"
        />
        <meta property="og:title" content="Cybersecurity & Threat Intelligence Glossary | Whiteintel" />
        <meta
          property="og:description"
          content="Clear, expert definitions of the most important cybersecurity and threat intelligence terms — from infostealers to zero-days."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/glossary" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Cybersecurity & Threat Intelligence Glossary | Whiteintel" />
        <meta name="twitter:description" content="Clear, expert definitions for the most important cybersecurity and threat intelligence terms." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://whiteintel.io/glossary" />

        {/* DefinedTermSet schema — tells search engines this is an authoritative glossary */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "name": "Whiteintel Cybersecurity & Threat Intelligence Glossary",
          "description": "Comprehensive definitions of cybersecurity and threat intelligence terms, maintained by Whiteintel Research.",
          "url": "https://whiteintel.io/glossary",
          "publisher": {
            "@type": "Organization",
            "name": "Whiteintel",
            "url": "https://whiteintel.io"
          },
          "hasDefinedTerm": GLOSSARY_TERMS.map(t => ({
            "@type": "DefinedTerm",
            "name": t.term,
            "description": t.shortDef,
            "url": `https://whiteintel.io/glossary/${t.slug}`
          }))
        })}</script>

        {/* Sitelinks Searchbox schema */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://whiteintel.io",
          "name": "Whiteintel",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://whiteintel.io/glossary?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}</script>
      </Helmet>

      <Navbar variant="dark" />

      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-50" />
          <img
            src="/assets/banner-background.png"
            className="w-full h-full object-cover opacity-[0.04] mix-blend-screen"
            alt=""
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen size={12} /> Threat Intelligence Glossary
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Cybersecurity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Glossary
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Clear, expert definitions for the terms that matter most in
              cybersecurity and threat intelligence — from infostealers and
              dark web monitoring to zero-days and advanced persistent threats.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 text-sm text-slate-500 mb-10">
              <span className="flex items-center gap-2">
                <BookOpen size={14} className="text-blue-400" />
                <strong className="text-white">{GLOSSARY_TERMS.length}</strong> terms defined
              </span>
              <span className="flex items-center gap-2">
                <Tag size={14} className="text-blue-400" />
                <strong className="text-white">{GLOSSARY_CATEGORIES.length - 1}</strong> categories
              </span>
            </div>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search terms, e.g. phishing, infostealer, zero-day..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveLetter("All");
                }}
                className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 transition-all placeholder:text-slate-600 text-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24">

        {/* FILTERS ROW */}
        <div className="flex flex-col gap-4 mb-10">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {GLOSSARY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                    : "bg-slate-800/60 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-700/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Alphabet filter */}
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setActiveLetter("All")}
              className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                activeLetter === "All"
                  ? "bg-blue-600 text-white"
                  : "text-slate-500 hover:text-white hover:bg-slate-800"
              }`}
            >
              All
            </button>
            {ALPHABET.map((letter) => {
              const available = usedLetters.has(letter);
              return (
                <button
                  key={letter}
                  onClick={() => available && setActiveLetter(letter === activeLetter ? "All" : letter)}
                  className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                    activeLetter === letter
                      ? "bg-blue-600 text-white"
                      : available
                      ? "text-slate-400 hover:text-white hover:bg-slate-800"
                      : "text-slate-700 cursor-default"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* RESULTS COUNT */}
        <p className="text-sm text-slate-500 mb-6">
          Showing <span className="text-white font-semibold">{filteredTerms.length}</span> term{filteredTerms.length !== 1 && "s"}
          {activeCategory !== "All" && (
            <span> in <span className="text-blue-400">{activeCategory}</span></span>
          )}
        </p>

        {/* TERMS GRID */}
        {filteredTerms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map((term, i) => (
              <motion.div
                key={term.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.5) }}
              >
                <Link
                  to={`/glossary/${term.slug}`}
                  className="group flex flex-col h-full bg-slate-900/30 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/70 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {term.term}
                    </h2>
                    <ArrowRight
                      size={15}
                      className="text-slate-600 group-hover:text-blue-400 flex-shrink-0 mt-0.5 transition-colors group-hover:translate-x-0.5 duration-300"
                    />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 line-clamp-3">
                    {term.shortDef}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400/70 bg-blue-500/10 px-2 py-0.5 rounded-full">
                      {term.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
              <Search className="w-7 h-7 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No terms found</h3>
            <p className="text-slate-400 text-sm mb-6">
              Try a different search term or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
                setActiveLetter("All");
              }}
              className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      <FeaturedResourcesWithFooter />
    </div>
  );
};

export default GlossaryPage;
