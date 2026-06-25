import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, Users, Lock, AppWindowMac, Mail } from "lucide-react";

/**
 * Props:
 * open: boolean
 * onClose: () => void
 * statType?: "domain" | "email"
 * domain?: string
 * email?: string
 * consumer?: { title, lastIncident, risk, metrics[] } | null
 * corporate?: { title, lastIncident, risk, metrics[] } | null
 * emailInfo?: { matches: number|string, lastSeen: string|null, risk?: "Low"|"Medium"|"High"|"—" }
 * locale?: string  // default "en-US"
 */
export default function SecurityInsightsModal({
  open,
  onClose,
  statType = "domain",
  domain = "",
  email = "",
  consumer,
  corporate,
  emailInfo,
  locale = "en-US",
}) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const isEmail = statType === "email";
  const hasConsumer = !!consumer;
  const hasCorporate = !!corporate;
  const headingTarget = isEmail ? email : domain;

  // Intro text
  const introText = (() => {
    if (isEmail) {
      if ((emailInfo?.matches ?? 0) > 0) {
        return (
          <>
            We found leaked credential records associated with{" "}
            <span className="text-white/90 font-medium">{email}</span>. The latest
            appearance was on{" "}
            <span className="text-white/90 font-medium">
              {fmtHumanDate(emailInfo?.lastSeen, locale)}
            </span>
            . Consider rotating passwords and enabling MFA.
          </>
        );
      }
      return (
        <>
          No leaked credential records were found for{" "}
          <span className="text-white/90 font-medium">{email}</span> at this time.
          This isn’t a guarantee of safety—new exposures can appear later.
        </>
      );
    }

    if (hasConsumer && hasCorporate)
      return "Signals show both consumer and corporate accounts tied to this domain have been exposed via info stealers and illicit credential sharing. Internal systems such as VPNs, ticketing systems and code bases may be at risk.";
    if (hasConsumer && !hasCorporate)
      return "Signals show consumer account exposure via info stealers and illicit credential sharing. These users may face account-takeover risk.";
    if (!hasConsumer && hasCorporate)
      return "Signals show corporate account exposure via info stealers and illicit credential sharing. Internal systems may be at risk.";
    return "No active exposure signals were found for this domain at this time. Continue monitoring to catch new incidents early.";
  })();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Dark web Exposure Report For ${headingTarget}`}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="
              relative w-[min(1080px,92vw)] max-h-[88vh] overflow-auto
              rounded-2xl bg-[#0b1227]/95 ring-1 ring-white/5
              p-6 md:p-8 shadow-2xl
            "
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 12, scale: 0.98, opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300/90 hover:text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-3">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                Dark Web Exposure Report -{" "}
                <span className="text-blue-400">{headingTarget}</span>
              </h2>
            </div>

            {/* Content */}
            <div className="grid gap-6 md:grid-cols-2 md:items-start">
              {/* Left: intro + CTA */}
              <div className="space-y-4">
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  {introText}
                </p>

                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5">
                  <div className="text-white font-semibold text-lg md:text-xl">
                    Ready to Explore?
                  </div>
                  <p className="text-slate-300 mt-2 text-sm md:text-base">
                    Run focused searches, set automated alerts, and Stay Informed of account
                    takeover & fraud.
                  </p>
                  <button
                    className="mt-4 inline-flex items-center justify-center rounded-lg px-4 py-2.5
                               font-semibold text-white
                               bg-gradient-to-r from-blue-500 to-indigo-500
                               hover:from-blue-500/90 hover:to-indigo-500/90"
                  >
                    Get a Free Account
                  </button>
                </div>
              </div>

              {/* Right: cards */}
              <div className="space-y-4">
                {isEmail ? (
                  <EmailKpiPanel emailInfo={emailInfo} locale={locale} />
                ) : (
                  <>
                    {hasConsumer && <InsightCard card={consumer} />}
                    {hasCorporate && <InsightCard card={corporate} />}
                    {!hasConsumer && !hasCorporate && <EmptyCard />}
                  </>
                )}
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-6 border-t border-white/10 pt-4 text-slate-400 text-xs md:text-sm">
              These insights reflect known breaches. Confirm impact, rotate credentials,
              and keep monitoring for new signals.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* -------- Email panel (now with Risk chip) -------- */
function EmailKpiPanel({ emailInfo, locale }) {
  const matches = emailInfo?.matches != null ? String(emailInfo.matches) : "0";
  const lastSeen = fmtHumanDate(emailInfo?.lastSeen, locale);
  const risk = (emailInfo?.risk ?? "—").toString();

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Mail className="text-blue-300" size={18} />
          Email Exposure
        </div>
        <RiskBadge risk={risk} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <KpiTile value={matches} label="Leaked Records" />
        <KpiTile value={lastSeen} label="Latest Seen" />
      </div>
    </div>
  );
}

function RiskBadge({ risk }) {
  const tone =
    risk === "High"
      ? "bg-red-500/15 text-red-300 border-red-500/30"
      : risk === "Medium"
      ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
      : risk === "Low"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
      : "bg-slate-500/15 text-slate-300 border-slate-500/30";

  return (
    <span
      className={`inline-flex h-7 items-center rounded-md px-2 text-xs font-semibold border ${tone}`}
      title="Assessed exposure risk"
    >
      <ShieldAlert className="mr-1 h-4 w-4" /> {risk} {risk !== "—" ? "Risk" : ""}
    </span>
  );
}

function KpiTile({ value, label }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0f1731] px-4 py-3">
      <div className="text-2xl font-bold text-white leading-tight">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-400 mt-1">
        {label}
      </div>
    </div>
  );
}

/* -------- Domain cards -------- */
function InsightCard({ card }) {
  const title = card?.title ?? "Breach Insights";
  const lastIncident = card?.lastIncident ?? "—";
  const risk = (card?.risk ?? "—").toString();

  const metrics = Array.isArray(card?.metrics) ? card.metrics : [];

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-white font-semibold text-lg">{title}</div>
          <div className="text-slate-400 text-sm mt-1">
            Last Incident: <span className="text-slate-200">{lastIncident}</span>
          </div>
        </div>
        <RiskBadge risk={risk} />
      </div>

      {metrics.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-[#0f1731] px-3 py-2.5 flex items-baseline gap-3"
            >
              <span className="text-white font-bold text-xl leading-none">
                {m.value}
              </span>
              <span className="text-slate-400 text-sm">{m.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="text-white font-semibold text-lg">No Current Breach Signals</div>
      <p className="text-slate-300 mt-2 text-sm">
        We didn’t find active exposure signals for this domain. Keep monitoring to
        catch new incidents early.
      </p>
    </div>
  );
}

/* Utility: stable, readable dates */
function fmtHumanDate(s, locale = "en-US") {
  if (!s) return "—";
  const d = new Date(String(s).replace(" ", "T"));
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export const Icons = { Users, Lock, AppWindowMac };
