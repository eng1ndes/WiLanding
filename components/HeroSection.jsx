import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Turnstile } from "@marsidev/react-turnstile";
import { AlertTriangle, ArrowRight, Search, Star, X } from "lucide-react";
import WhiteIntelFeed from "./WhiteIntelFeed";
import g2Logo from "../assets/g2-logo.png";

const CREATE_REPORT_URL = "https://whiteintel.io/report_handler_v2.php";
const INSIGHTS_PATH = "/reports";

// Seeded starfield: static positions/opacities so the hero never re-randomizes
// between renders. t/l in %, s = px size, o = resting opacity,
// tw = twinkle animation delay in seconds (null = static star).
const STARS = [
  { t: 4, l: 6, s: 1, o: 0.22, tw: null },
  { t: 9, l: 18, s: 1, o: 0.14, tw: null },
  { t: 6, l: 31, s: 1, o: 0.28, tw: null },
  { t: 12, l: 44, s: 2, o: 0.18, tw: null },
  { t: 5, l: 57, s: 1, o: 0.12, tw: null },
  { t: 10, l: 68, s: 1, o: 0.3, tw: 0 },
  { t: 7, l: 79, s: 1, o: 0.16, tw: null },
  { t: 14, l: 91, s: 2, o: 0.22, tw: null },
  { t: 18, l: 11, s: 1, o: 0.12, tw: null },
  { t: 22, l: 27, s: 1, o: 0.26, tw: null },
  { t: 17, l: 38, s: 1, o: 0.1, tw: null },
  { t: 24, l: 52, s: 1, o: 0.2, tw: null },
  { t: 19, l: 63, s: 1, o: 0.14, tw: 1.6 },
  { t: 26, l: 74, s: 2, o: 0.16, tw: null },
  { t: 21, l: 86, s: 1, o: 0.3, tw: null },
  { t: 31, l: 5, s: 1, o: 0.18, tw: null },
  { t: 35, l: 16, s: 2, o: 0.12, tw: null },
  { t: 29, l: 33, s: 1, o: 0.22, tw: null },
  { t: 38, l: 47, s: 1, o: 0.1, tw: null },
  { t: 33, l: 59, s: 1, o: 0.24, tw: 3.1 },
  { t: 40, l: 71, s: 1, o: 0.14, tw: null },
  { t: 36, l: 83, s: 1, o: 0.2, tw: null },
  { t: 44, l: 94, s: 1, o: 0.26, tw: null },
  { t: 49, l: 9, s: 1, o: 0.12, tw: null },
  { t: 52, l: 22, s: 1, o: 0.18, tw: 2.2 },
  { t: 47, l: 41, s: 1, o: 0.1, tw: null },
  { t: 55, l: 66, s: 2, o: 0.2, tw: null },
  { t: 51, l: 78, s: 1, o: 0.14, tw: null },
  { t: 58, l: 88, s: 1, o: 0.28, tw: null },
  { t: 64, l: 13, s: 1, o: 0.16, tw: null },
  { t: 69, l: 29, s: 1, o: 0.1, tw: null },
  { t: 62, l: 49, s: 1, o: 0.22, tw: null },
  { t: 71, l: 61, s: 1, o: 0.12, tw: 4 },
  { t: 66, l: 76, s: 2, o: 0.18, tw: null },
  { t: 74, l: 90, s: 1, o: 0.24, tw: null },
  { t: 81, l: 8, s: 1, o: 0.14, tw: null },
  { t: 86, l: 24, s: 1, o: 0.2, tw: null },
  { t: 88, l: 58, s: 1, o: 0.16, tw: null },
  { t: 8, l: 48, s: 1, o: 0.18, tw: null },
  { t: 16, l: 73, s: 1, o: 0.12, tw: null },
  { t: 27, l: 19, s: 1, o: 0.2, tw: null },
  { t: 42, l: 28, s: 1, o: 0.12, tw: null },
  { t: 45, l: 62, s: 1, o: 0.18, tw: null },
  { t: 57, l: 35, s: 1, o: 0.1, tw: null },
  { t: 60, l: 55, s: 1, o: 0.16, tw: null },
  { t: 68, l: 92, s: 1, o: 0.2, tw: null },
  { t: 77, l: 38, s: 1, o: 0.12, tw: null },
  { t: 84, l: 79, s: 1, o: 0.18, tw: null },
  { t: 92, l: 14, s: 1, o: 0.12, tw: null },
  { t: 90, l: 41, s: 1, o: 0.14, tw: null },
];

const HeroSection = () => {
  const { t } = useTranslation("home");

  const [turnstileToken, setTurnstileToken] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const turnstileRef = useRef(null);

  const handleSubmit = async () => {
    setErr("");
    const q = String(query || "").trim();
    if (!q) return setErr(t("search.errorDomain"));
    if (!turnstileToken) return setErr(t("search.errorCaptcha"));

    setLoading(true);
    try {
      const res = await fetch(CREATE_REPORT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          domain: q,
          "cf-turnstile-response": turnstileToken,
        }),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { raw: text };
      }
      if (!res.ok || !data?.uuid) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      const url = `${INSIGHTS_PATH}?uuid=${encodeURIComponent(data.uuid)}`;
      window.location.assign(url);
      return;
    } catch (e) {
      setErr(e.message || "Something went wrong.");
    } finally {
      setLoading(false);
      try {
        turnstileRef.current?.reset();
      } catch {}
      setTurnstileToken("");
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="relative bg-[#020617] pt-20 pb-24 md:pt-24 md:pb-28 px-4 overflow-hidden min-h-screen flex items-center text-white font-sans">

      {/* Background Layer — indigo glow + starfield */}
      <style>{`
        @keyframes heroTwinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.12; }
        }
        .hero-star-twinkle { animation: heroTwinkle 5.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-star-twinkle { animation: none !important; }
        }
      `}</style>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large indigo orb top-left, behind the headline */}
        <div className="absolute -top-32 -left-24 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-indigo-600/15 blur-[100px] md:blur-[140px] rounded-full" />
        {/* Smaller blue accent behind the feed (right side) */}
        <div className="absolute top-1/3 right-0 translate-x-1/3 w-[320px] h-[320px] md:w-[520px] md:h-[520px] bg-blue-600/10 blur-[100px] md:blur-[130px] rounded-full" />

        {/* Starfield: each star is a soft radial-gradient point (bright core
            fading to nothing), not a hard-edged dot, so they read as stars
            instead of stuck pixels. Brighter ones get a faint indigo cast. */}
        <div aria-hidden="true" className="absolute inset-0">
          {STARS.map((star, i) => {
            const size = star.s === 2 ? 7 : 4;
            const core = star.s === 2 ? "rgba(199,210,254,0.95)" : "rgba(255,255,255,0.9)";
            return (
              <span
                key={i}
                className={star.tw !== null ? "hero-star-twinkle" : undefined}
                style={{
                  position: "absolute",
                  top: `${star.t}%`,
                  left: `${star.l}%`,
                  width: size,
                  height: size,
                  background: `radial-gradient(circle, ${core} 0%, rgba(255,255,255,0) 65%)`,
                  opacity: Math.min(star.o + 0.25, 0.6),
                  animationDelay: star.tw !== null ? `${star.tw}s` : undefined,
                }}
              />
            );
          })}
        </div>

        {/* Bottom fade into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-10 items-center">

        {/* 1. Headline, tagline & exposure check */}
        <div className="lg:col-span-6 xl:col-span-7 order-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:self-start lg:mt-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            {/* Two sentences flow inline and balance to ~2 lines; no forced breaks.
                Sentence 1 carries the blue/indigo gradient, sentence 2 stays white bold. */}
            <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white mb-4 [text-wrap:balance]">
              <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-300 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>{" "}
              {t("hero.titleSuffix")}
            </h1>

            <p className="text-lg xl:text-xl text-slate-300 max-w-xl leading-relaxed mb-8 px-2 lg:px-0">
              {t("hero.tagline")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full max-w-xl"
          >
            <ErrorBanner message={err} onClose={() => setErr("")} />

            {/* Exposure check bar */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-xl border border-slate-700/50 bg-[#05091a]/80 p-1.5 shadow-inner transition-colors focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/30">
              <Search
                aria-hidden="true"
                className="hidden sm:block shrink-0 ml-3 h-4 w-4 text-slate-500"
              />
              <input
                type="text"
                placeholder={t("search.placeholder")}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent px-3 py-3 sm:py-2.5 text-[15px] text-slate-100 placeholder-slate-500 focus:outline-none disabled:opacity-60 text-left"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`relative w-full sm:w-auto shrink-0 whitespace-nowrap overflow-hidden group/btn rounded-lg px-5 py-3 sm:py-2.5 text-sm font-semibold text-white transition-all
                  ${loading
                    ? "bg-[#ff5120]/50 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#ff5120] to-[#d9380b] hover:from-[#ff6b42] hover:to-[#e63b0a] shadow-[0_0_24px_-8px_rgba(255,81,32,0.55)] hover:shadow-[0_0_30px_-8px_rgba(255,81,32,0.75)] active:scale-[0.98]"
                  }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  {loading ? (
                    t("search.loading")
                  ) : (
                    <>
                      {t("search.button")}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                      />
                    </>
                  )}
                </span>
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500 text-center lg:text-left">
              {t("hero.searchHint")}
            </p>

            <div className={err ? "mt-4 flex justify-center lg:justify-start" : "invisible h-0 overflow-hidden"}>
              <Turnstile
                siteKey="0x4AAAAAABHcWCVoBFGccBYv"
                onSuccess={(token) => setTurnstileToken(token)}
                options={{ theme: "dark", appearance: "always" }}
                ref={turnstileRef}
              />
            </div>

            {/* Supporting narrative under the bar, balances the column against the feed.
                Left-aligned at all breakpoints: a multi-line paragraph reads as ragged
                and disorganized when centered on mobile. */}
            <div className="mt-10 text-left">
              <h2 className="text-xs font-bold uppercase tracking-widest mb-3 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                {t("hero.storySolutionTitle")}
              </h2>
              <p className="text-[15px] text-slate-400 leading-relaxed">
                {t("hero.storySolutionBody")}
              </p>

              {/* Bare G2 rating: logo, stars, score. No pill, no background. */}
              <a
                href="https://www.g2.com/products/whiteintel-dark-web-intelligence/reviews"
                target="_blank"
                rel="noreferrer"
                aria-label="Rated 4.8 out of 5 on G2"
                className="mt-5 inline-flex items-center gap-2.5 no-underline group/g2"
              >
                <img src={g2Logo} alt="G2" className="h-5 w-auto" />
                <span className="relative inline-block leading-none">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white/15 text-white/15" strokeWidth={0} />
                    ))}
                  </span>
                  <span
                    className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                    style={{ width: "96%" }}
                  >
                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#ff5120] text-[#ff5120] shrink-0"
                          strokeWidth={0}
                        />
                      ))}
                    </span>
                  </span>
                </span>
                <span className="text-sm font-semibold text-slate-300 tabular-nums group-hover/g2:text-white transition-colors">
                  4.8
                </span>
              </a>
              <p className="mt-1.5 text-xs text-slate-500">
                {t("hero.g2Note")}
              </p>
            </div>
          </motion.div>

        </div>

        {/* 2. Live Watchlist Feed — desktop only; the grid cell itself is hidden
            below lg so mobile doesn't get an empty row + gap under the badge */}
        <div className="hidden lg:block lg:col-span-6 xl:col-span-5 order-2 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full flex justify-center"
          >
            <WhiteIntelFeed
              logoUrl="https://whiteintel.io/static/media/whiteintel-white-logo-new.47174cd49a7974a7e010.png"
              width={720}
              visibleCount={3}
              cardHeight={120}
              intervalMs={7000}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

function ErrorBanner({ message, onClose }) {
  const { t } = useTranslation("home");
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          key="error-banner"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mb-4 relative z-20"
        >
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 text-left">
            <div className="px-4 py-3 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-400 mt-[2px]" />
              <div className="flex-1 text-sm text-red-200 leading-5">
                <div className="font-semibold text-red-300">{t("search.errorTitle")}</div>
                <div className="mt-0.5 opacity-90">{message}</div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Dismiss error"
                className="rounded-md border border-red-500/20 bg-black/20 p-1 text-red-400 hover:bg-black/40 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default HeroSection;
