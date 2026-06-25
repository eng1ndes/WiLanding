import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Turnstile } from "@marsidev/react-turnstile";
import { AlertTriangle, ArrowRight, X } from "lucide-react";

/** ===================== Config ===================== */
const CREATE_REPORT_URL = "https://whiteintel.io/report_handler_v2.php";
const INSIGHTS_PATH = "/reports";

/** ===================== Component ===================== */
const SearchSection = () => {
  const { t } = useTranslation("home");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const turnstileRef = useRef(null);
  const cardRef = useRef(null);

  // Mouse tracking for the soft indigo spotlight on the glass panel
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  useEffect(() => {
    if (err) {
      try {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [err]);

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
    <section className="relative bg-[#020617] text-white px-6 md:px-10 pt-8 sm:pt-10 md:pt-0 pb-12">
      {/* Quiet ambient glow so the panel reads as glass on mobile too */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-4 -translate-x-1/2 w-[420px] h-[260px] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto mt-0 md:-translate-y-[78%] md:-mb-64 z-10">
        <motion.div
          ref={(node) => {
            cardRef.current = node;
            divRef.current = node;
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative group overflow-hidden text-left"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(8,13,28,0.92) 100%)",
            border: "1px solid rgba(99,102,241,0.15)",
            borderRadius: 14,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "0 0 70px -10px rgba(99,102,241,0.22), 0 28px 70px -26px rgba(0,0,0,0.9)",
          }}
        >
          {/* Spotlight, a soft indigo sheen that follows the cursor */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
            style={{
              opacity,
              background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.08), transparent 40%)`,
            }}
          />

          {/* Internal radial indigo glow at the top, identical to the feed panel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[180px] z-0"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(99,102,241,0.18), transparent 70%)",
            }}
          />

          {/* Top edge hairline highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent z-10" />

          {/* Body */}
          <div className="relative z-10 px-5 sm:px-7 pt-7 pb-6 sm:pt-8 sm:pb-7">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-300 bg-clip-text text-transparent">
              {t("search.title")}
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-400">
              {t("search.subtitle")}
            </p>

            <ErrorBanner message={err} onClose={() => setErr("")} />

            {/* Command bar: input and CTA fused into one row on desktop */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 rounded-xl border border-slate-700/50 bg-[#05091a]/80 p-1.5 shadow-inner transition-colors focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/30">
              <span
                aria-hidden="true"
                className="hidden sm:block select-none pl-3 font-mono text-sm text-indigo-400/70"
              >
                {">"}
              </span>
              <input
                type="text"
                placeholder={t("search.placeholder")}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent px-3 py-3 sm:py-2.5 font-mono text-[15px] text-slate-100 placeholder-slate-500 focus:outline-none disabled:opacity-60"
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

            {/* Helper microcopy, quiet and mono like console output */}
            <p
              className="mt-3 font-mono text-[11px] tracking-[0.02em]"
              style={{ color: "rgba(244,245,247,0.42)" }}
            >
              Domain or work email · results in seconds · no signup needed
            </p>

            <div className="flex flex-col items-start gap-2 relative z-20">
              <div className={err ? "mt-4" : "invisible h-0 overflow-hidden"}>
                <Turnstile
                  siteKey="0x4AAAAAABHcWCVoBFGccBYv"
                  onSuccess={(token) => setTurnstileToken(token)}
                  options={{ theme: "dark", appearance: "always" }}
                  ref={turnstileRef}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function ErrorBanner({ message, onClose }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          key="error-banner"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-4 relative z-20"
        >
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 text-left">
            <div className="px-4 py-3 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-400 mt-[2px]" />
              <div className="flex-1 text-sm text-red-200 leading-5">
                <div className="font-semibold text-red-300">We couldn’t complete your request</div>
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

export default SearchSection;
