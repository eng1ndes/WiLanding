import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

/**
 * WhiteIntelFeed
 * A live "Watchlist Events"https://t.me/BreachForumsCloud stream styled to match the WhiteIntel product.
 *
 * Drop-in usage:
 *   logoUrl       string  URL of your real logo. If omitted, a globe mark is rendered as a fallback.
 *   brandName     string  Wordmark text. Default "whiteintel".
 *   org           string  Watchlist scope label shown nowhere by default — pass through events instead.
 *   events        array   Event objects (see DEFAULT_EVENTS shape). Cycled on a loop.
 *   intervalMs    number  Time between new events sliding in. Default 3300.
 *   width         number  Max width in px. Default 568.
 *   visibleCount  number  How many cards are shown at once. Default 3.
 *   cardHeight    number  Fixed height per card in px — this is what keeps the panel from
 *                         growing/shrinking as alerts change. Default 150.
 *   date          string  Date label shown on each card. Default "2026-06-11".
 */

// Muted palette — everything stays in the indigo/slate family so the pills
// read as quiet metadata instead of competing with the panel's glow.
const TAG_PALETTE = {
  stealer:   { t: "#a5b4fc", b: "rgba(129,140,248,0.28)", bg: "rgba(99,102,241,0.08)" },
  mention:   { t: "#94a3b8", b: "rgba(148,163,184,0.22)", bg: "rgba(148,163,184,0.06)" },
  lookalike: { t: "#a5b4fc", b: "rgba(129,140,248,0.28)", bg: "rgba(99,102,241,0.08)" },
  bin:       { t: "#94a3b8", b: "rgba(148,163,184,0.22)", bg: "rgba(148,163,184,0.06)" },
  consumer:  { t: "#93b4f5", b: "rgba(96,140,245,0.26)",  bg: "rgba(70,130,245,0.07)" },
  corporate: { t: "#b5aef7", b: "rgba(150,130,250,0.26)", bg: "rgba(140,120,250,0.07)" },
  open:      { t: "#8896b3", b: "rgba(255,255,255,0.10)", bg: "rgba(255,255,255,0.03)" },
};

// Cards ARRIVE one by one (long stagger, like alerts streaming in),
// then the whole batch EXITS together (no stagger) before the next batch.
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1.3, delayChildren: 0.35 },
  },
  exit: {
    opacity: 1,
    transition: { staggerChildren: 0 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    transition: { duration: 1.0, ease: [0.45, 0, 0.55, 1] },
  },
};

// All demo events reference the fictional "acme" org only. Never put real
// company names in fabricated breach claims on the marketing site.
const DEFAULT_EVENTS = [
  {
    title: "Consumer Account Credentials Compromised via Malware-Infected Device: acme.com",
    meta: "356 credentials",
    chip: "acme.com",
    tags: [["stealer", "stealer"], ["consumer", "consumer"], ["open", "open"]],
  },
  {
    title: "Corporate User Credentials Compromised via Malware-Infected Device: acme.com",
    meta: "12 credentials",
    chip: "acme.com",
    tags: [["stealer", "stealer"], ["corporate", "corporate"], ["open", "open"]],
  },
  {
    title: "Company Asset Referenced in Dark Web Data Sale: acme.io",
    meta: "BreachForums · data sale",
    chip: "acme.io",
    tags: [["mention", "mention"], ["corporate", "corporate"], ["open", "open"]],
  },
  {
    title: "Lookalike Domain Detected Impersonating Brand: acme-login.com",
    meta: "Registered 2h ago",
    chip: "acme-login.com",
    tags: [["lookalike", "lookalike"], ["open", "open"]],
  },
  {
    title: "Card BIN Linked to Issuer Exposed in Carding Shop: BIN 414720",
    meta: "38 cards · Visa",
    chip: "Acme Bank",
    tags: [["carding", "bin"], ["open", "open"]],
  },
];

function GlobeMark({ size = 26 }) {
  // Fallback mark — replace by passing the `logoUrl` prop with your real logo.
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#f4f6fb" />
      <g stroke="#0a0e1a" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <circle cx="16" cy="16" r="9" />
        <ellipse cx="16" cy="16" rx="3.6" ry="9" />
        <line x1="7" y1="16" x2="25" y2="16" />
        <path d="M9 11 Q16 13 23 11" />
        <path d="M9 21 Q16 19 23 21" />
      </g>
    </svg>
  );
}

export default function WhiteIntelFeed({
  logoUrl = null,
  brandName = "Whiteintel",
  events = DEFAULT_EVENTS,
  intervalMs = 3300,
  firstDelayMs = 3000,
  width = 568,
  visibleCount = 3,
  cardHeight = 150,
  date = "2026-06-11",
}) {
  const gap = 10;
  const listHeight = visibleCount * cardHeight + (visibleCount - 1) * gap;

  const idRef = useRef(0);
  const ptrRef = useRef(0);

  const [cards, setCards] = useState(() => {
    const batch = [];
    for (let i = 0; i < visibleCount; i++) {
      const ev = events[i % events.length];
      batch.push({ ...ev, uid: idRef.current++ });
    }
    ptrRef.current = visibleCount % events.length;
    return batch;
  });

  // Load Outfit once (skip if your app already bundles it).
  useEffect(() => {
    const id = "wi-outfit-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Swap the whole batch on each tick. The first swap fires after firstDelayMs
  // (a short pause so the initial batch is readable), then every intervalMs.
  useEffect(() => {
    if (!events.length) return undefined;
    const swap = () => {
      setCards(() => {
        const batch = [];
        for (let i = 0; i < visibleCount; i++) {
          const ev = events[(ptrRef.current + i) % events.length];
          batch.push({ ...ev, uid: idRef.current++ });
        }
        ptrRef.current = (ptrRef.current + visibleCount) % events.length;
        return batch;
      });
    };

    let intervalId;
    const firstId = setTimeout(() => {
      swap();
      intervalId = setInterval(swap, intervalMs);
    }, firstDelayMs);

    return () => {
      clearTimeout(firstId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [events, intervalMs, firstDelayMs, visibleCount]);

  const muted = "rgba(244,245,247,0.42)";

  return (
    <MotionConfig reducedMotion="user">
    <div
      style={{
        fontFamily: "'Outfit', ui-sans-serif, -apple-system, system-ui, sans-serif",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <style>{`
        @keyframes wiPulse {
          0%   { box-shadow: 0 0 0 0 rgba(129,140,248,.5); }
          70%  { box-shadow: 0 0 0 6px rgba(129,140,248,0); }
          100% { box-shadow: 0 0 0 0 rgba(129,140,248,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .wi-livedot { animation: none !important; }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: width,
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(8,13,28,0.92) 100%)",
          border: "1px solid rgba(99,102,241,0.15)",
          borderRadius: 14,
          padding: "0 18px 14px",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow:
            "0 0 70px -10px rgba(99,102,241,0.22), 0 28px 70px -26px rgba(0,0,0,0.9)",
        }}
      >
        {/* Internal radial glow at top — subtle indigo halo inside the panel */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: 180,
            background:
              "radial-gradient(ellipse at center top, rgba(99,102,241,0.18), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Header */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 2px 14px",
            borderBottom: "1px solid rgba(99,102,241,0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={brandName}
                style={{ display: "block", height: 22, width: "auto" }}
              />
            ) : (
              <GlobeMark />
            )}
            <span style={{ fontSize: 18, fontWeight: 600, color: "#eef1f7", letterSpacing: ".2px" }}>
              {brandName}
            </span>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 12,
                color: "rgba(244,245,247,0.42)",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: ".2px",
              }}
            >
              {date}
            </span>
            <span
              aria-hidden="true"
              style={{
                width: 1,
                height: 12,
                background: "rgba(255,255,255,0.12)",
              }}
            />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "#a5b4fc",
              }}
            >
              <span
                className="wi-livedot"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#818cf8",
                  animation: "wiPulse 1.9s ease-out infinite",
                }}
              />
              Live
            </span>
          </span>
        </div>

        {/* Stream — fixed height so it never grows or shrinks */}
        <div
          style={{
            position: "relative",
            height: listHeight,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap,
            paddingTop: 14,
            boxSizing: "content-box",
          }}
        >
          {/* initial={false}: the first batch shows statically; the first swap
              fires after firstDelayMs (3s), then the loop runs at intervalMs. */}
          <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={cards[0]?.uid ?? "empty"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "column",
              gap,
            }}
          >
          {cards.map((card, i) => {
            const isNew = i === 0;
            return (
              <motion.div
                key={card.uid}
                variants={cardVariants}
                style={{
                  height: cardHeight,
                  boxSizing: "border-box",
                  flex: "0 0 auto",
                  background: isNew
                    ? "linear-gradient(180deg, rgba(20,28,52,0.95), rgba(13,19,34,0.95))"
                    : "rgba(13,19,34,0.85)",
                  border: `1px solid ${
                    isNew ? "rgba(129,140,248,0.45)" : "rgba(255,255,255,0.06)"
                  }`,
                  boxShadow: isNew
                    ? "0 0 30px -5px rgba(99,102,241,0.28), 0 0 0 1px rgba(99,102,241,0.15)"
                    : "none",
                  borderRadius: 12,
                  padding: "13px 16px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 7,
                  }}
                >
                  <span style={{ fontSize: 11, color: muted, fontVariantNumeric: "tabular-nums" }}>
                    {date}
                  </span>
                  {isNew && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 9.5,
                        color: "#a5b4fc",
                        letterSpacing: ".5px",
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#818cf8" }} />
                      new
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: "#eef1f7",
                    letterSpacing: ".1px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    marginBottom: 10,
                  }}
                >
                  {card.title}
                </div>

                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {card.tags.map(([label, kind], k) => {
                    const p = TAG_PALETTE[kind] || TAG_PALETTE.open;
                    return (
                      <span
                        key={k}
                        style={{
                          fontSize: 11,
                          borderRadius: 999,
                          padding: "3px 11px",
                          color: p.t,
                          border: `1px solid ${p.b}`,
                          background: p.bg,
                        }}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
          </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 12,
            marginTop: 2,
            borderTop: "1px solid rgba(99,102,241,0.12)",
          }}
        >
          <span style={{ fontSize: 11, color: muted, letterSpacing: ".2px" }}>
            Whiteintel Dark Web Intelligence
          </span>
          <span style={{ fontSize: 11, color: muted, letterSpacing: ".2px" }}>
            Continuous monitoring
          </span>
        </div>
      </div>
    </div>
    </MotionConfig>
  );
}