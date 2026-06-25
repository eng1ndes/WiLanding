// src/pages/Reports.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Building2, Lock, ChevronRight, AlertTriangle, X, Search, ShieldCheck, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { Turnstile } from "@marsidev/react-turnstile";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import { trackFreeSignupClick } from "../utils/conversions";

/* ================== API endpoints ================== */
const API_URL = "https://whiteintel.io/report_handler_v2.php";
const API_FETCH_BY_UUID = "https://whiteintel.io/insight_fetch.php";

export default function SecurityInsightsPage(props) {
  const { t } = useTranslation("reports");
  // ... (All existing state logic remains exactly the same) ...
  const params = new URLSearchParams(window.location.search);
  const urlMode = params.get("mode");
  const urlUuid = params.get("uuid");

  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [captchaVisible, setCaptchaVisible] = useState(false);

  // Mode
  const [mode, setMode] = useState(null); 

  // Email state
  const [email, setEmail] = useState("");
  const [emailInfo, setEmailInfo] = useState({ matches: 0, lastSeen: null, sources: 0 });
  const [emailSamples, setEmailSamples] = useState([]);

  // Domain state
  const [domain, setDomain] = useState("");
  const [consumer, setConsumer] = useState({ title: t("consumerRisk"), lastIncident: "—", metrics: [{ label: t("count"), value: 0 }] });
  const [corporate, setCorporate] = useState({ title: t("corporateRisk"), lastIncident: "—", metrics: [{ label: t("count"), value: 0 }] });
  const [consumerSamples, setConsumerSamples] = useState([]);
  const [corporateSamples, setCorporateSamples] = useState([]);

  // UX
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(!!urlUuid);
  const [errorMsg, setErrorMsg] = useState("");

  // Derived
  const emailRisk = useMemo(() => normalizeRiskFromEmail(emailInfo), [emailInfo]);
  const consumerRisk = useMemo(() => normalizeRiskFromCard(consumer), [consumer]);
  const corporateRisk = useMemo(() => normalizeRiskFromCard(corporate), [corporate]);

  const hasEmailSignals = useMemo(() => {
    const m = Number(emailInfo?.matches ?? 0);
    return m > 0 || !!parseDate(emailInfo?.lastSeen) || (Array.isArray(emailSamples) && emailSamples.length > 0);
  }, [emailInfo, emailSamples]);

  const hasDomainSignals = useMemo(() => {
    const consumerHas = hasExposure(consumer) || (Array.isArray(consumerSamples) && consumerSamples.length > 0);
    const corporateHas = hasExposure(corporate) || (Array.isArray(corporateSamples) && corporateSamples.length > 0);
    return consumerHas || corporateHas;
  }, [consumer, corporate, consumerSamples, corporateSamples]);

  const hasReport = mode === "email" || mode === "company";
  const pageShowsExposure = !hasReport
    ? false
    : mode === "email"
    ? hasEmailSignals
    : hasDomainSignals;

  useEffect(() => {
    if (!urlUuid) return;
    if (urlMode === "company" || urlMode === "email") setMode(urlMode);
  }, [urlUuid, urlMode]);

  useEffect(() => {
    document.title = hasReport
      ? mode === "email"
        ? `Exposure Report for ${email || "—"}`
        : `Exposure Report for ${domain || "—"}`
      : t("securityInsights");
  }, [hasReport, mode, email, domain]);

  useEffect(() => {
    if (errorMsg) {
      try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch {}
    }
  }, [errorMsg]);

  useEffect(() => {
    if (!urlUuid) return;
    const fetchByUuid = async () => {
      setErrorMsg("");
      setInitialLoading(true);
      try {
        const res = await fetch(`${API_FETCH_BY_UUID}?uuid=${encodeURIComponent(urlUuid)}`);
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Failed to fetch report.");

        const nextMode = json.mode === "email" ? "email" : "company";
        setMode(nextMode);

        if (nextMode === "email") {
          setEmail(json.email || "");
          setEmailInfo(json.emailInfo || { matches: 0, lastSeen: null, sources: 0 });
          setEmailSamples(Array.isArray(json.emailSamples) ? json.emailSamples : []);
        } else {
          setDomain(json.domain || "");
          setConsumer(json.consumer || { title: t("consumerRisk"), lastIncident: "—", metrics: [{ label: t("count"), value: 0 }] });
          setCorporate(json.corporate || { title: t("corporateRisk"), lastIncident: "—", metrics: [{ label: t("count"), value: 0 }] });
          setConsumerSamples(Array.isArray(json.consumerSamples) ? json.consumerSamples : []);
          setCorporateSamples(Array.isArray(json.corporateSamples) ? json.corporateSamples : []);
        }
      } catch (e) {
        setErrorMsg(e.message || "Something went wrong while preparing the report.");
      } finally {
        setInitialLoading(false);
      }
    };
    fetchByUuid();
  }, [urlUuid]);

  const runQuery = async (query) => {
    setErrorMsg("");
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          turnstileToken
            ? { domain: query, "cf-turnstile-response": turnstileToken }
            : { domain: query }
        ),
      });
      const { uuid, error } = await res.json();
      if (!res.ok || !uuid) throw new Error(error || "Request failed");

      const fetchRes = await fetch(`${API_FETCH_BY_UUID}?uuid=${encodeURIComponent(uuid)}`);
      const json = await fetchRes.json();
      if (!fetchRes.ok) throw new Error(json?.error || "Failed to fetch report.");

      const nextMode = json.mode === "email" ? "email" : "company";
      setMode(nextMode);

      if (nextMode === "email") {
        setEmail(json.email || query);
        setEmailInfo(json.emailInfo || { matches: 0, lastSeen: null, sources: 0 });
        setEmailSamples(Array.isArray(json.emailSamples) ? json.emailSamples : []);
      } else {
        setDomain(json.domain || query);
        setConsumer(json.consumer || { title: t("consumerRisk"), lastIncident: "—", metrics: [{ label: t("count"), value: 0 }] });
        setCorporate(json.corporate || { title: t("corporateRisk"), lastIncident: "—", metrics: [{ label: t("count"), value: 0 }] });
        setConsumerSamples(Array.isArray(json.consumerSamples) ? json.consumerSamples : []);
        setCorporateSamples(Array.isArray(json.corporateSamples) ? json.corporateSamples : []);
      }
    } catch (e) {
      const msg = e.message || "Something went wrong";
      setErrorMsg(msg);
      if (/captcha|bot/i.test(msg)) setCaptchaVisible(true);
    } finally {
      setLoading(false);
      setTurnstileToken("");
      setTurnstileKey((k) => k + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white grid place-items-center px-4">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-semibold tracking-tight">{t("preparingReport")}</div>
          <div className="mt-6 mx-auto h-8 w-8 rounded-full border-2 border-slate-800 border-t-blue-500 animate-spin" />
        </div>
      </div>
    );
  }

  /* ================== Landing (No Report) ================== */
  if (!hasReport) {
    return (
      <>
        <Helmet>
          <title>Security Insights Report | Whiteintel</title>
          <meta name="description" content="Run a free dark web exposure report on any email address. See if your credentials, personal data, or company records have been compromised." />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Security Insights Report | Whiteintel" />
          <meta property="og:description" content="Run a free dark web exposure report on any email. Powered by Whiteintel's threat intelligence platform." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://whiteintel.io/reports" />
          <meta property="og:site_name" content="Whiteintel" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@whiteintel_io" />
          <link rel="canonical" href="https://whiteintel.io/reports" />
        </Helmet>
        {/* FIX: Added 'text-white' to ensure hamburger/links are visible */}
        <div className="fixed inset-x-0 top-0 z-[200] border-b border-white/5 bg-[#020617]/90 backdrop-blur-xl text-white">
          <div className="mx-auto max-w-7xl px-4">
            <Navbar variant="dark" />
          </div>
        </div>

        <div className="min-h-screen bg-[#020617] text-slate-300 pt-20 overflow-x-hidden">
          <header className="border-b border-white/5 relative">
            <div className="mx-auto max-w-7xl px-4 py-16 relative overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[400px] bg-blue-900/10 blur-[80px] md:blur-[120px] rounded-full opacity-30 pointer-events-none" />
              
              <div className="relative z-10 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
                    {t("checkExposure")}
                </h1>
                <p className="text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed mx-auto md:mx-0">
                    {t("checkExposureDesc")}
                </p>
              </div>
            </div>

            <ErrorBanner message={errorMsg} onClose={() => setErrorMsg("")} />
          </header>

          <main className="mx-auto max-w-7xl px-4 py-12">
            <div className="max-w-2xl mx-auto md:mx-0">
              <AnotherQueryCard
                onRun={runQuery}
                loading={loading}
                turnstileKey={turnstileKey}
                onToken={setTurnstileToken}
                showCaptcha={captchaVisible}
              />
            </div>
          </main>

          <FeaturedResourcesWithFooter />
        </div>
      </>
    );
  }

  /* ================== Report View ================== */
  return (
    <>
      {/* FIX: Added 'text-white' here as well */}
      <div className="fixed inset-x-0 top-0 z-[200] border-b border-white/5 bg-[#020617]/90 backdrop-blur-xl text-white">
        <div className="mx-auto max-w-7xl px-4">
          <Navbar variant="dark" />
        </div>
      </div>

      <div className="min-h-screen bg-[#020617] text-slate-300 pt-20 font-sans overflow-x-hidden">
        
        <header className="border-b border-white/5 bg-[#020617] relative">
          <div className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {pageShowsExposure ? (
                <span className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span>{t("weDiscovered")}</span>
                    <span className="text-red-500">{t("breachSignals")}</span>
                </span>
              ) : (
                <span className="flex items-center gap-3">
                    <ShieldCheck className="text-emerald-500 w-6 h-6 md:w-8 md:h-8 shrink-0" />
                    <span className="text-white">{t("noBreachSignals")}</span>
                </span>
              )}
            </h1>
            <p className="mt-3 text-slate-400 text-sm md:text-lg">
              {t("correlatedResults")}
            </p>
          </div>

          <ErrorBanner message={errorMsg} onClose={() => setErrorMsg("")} />
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 relative z-10">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <span className="uppercase tracking-wide text-slate-500 font-bold text-xs">{t("analysisTarget")}</span>
            <span className="font-mono text-white bg-white/5 px-3 py-1 rounded border border-white/10 break-all">
              {mode === "email" ? `${email || "—"}` : `${domain || "—"}`}
            </span>
          </div>

          {mode === "email" ? (
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-6">
                 <PersonalRiskCard
                    email={email}
                    emailInfo={emailInfo}
                    risk={emailRisk}
                    samples={emailSamples}
                />
              </div>
              <SampleList title={t("sampleBreachData")} items={emailSamples} />
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-6">
                <DomainRiskCard
                  title={consumer?.title || t("consumerRisk")}
                  entityLabel={t("domain")}
                  entityValue={domain}
                  risk={consumerRisk}
                  lastIncident={consumer?.lastIncident}
                  metrics={safeMetrics(consumer)}
                  tone="consumer"
                />
                <DomainRiskCard
                  title={corporate?.title || t("corporateRisk")}
                  entityLabel={t("domain")}
                  entityValue={domain}
                  risk={corporateRisk}
                  lastIncident={corporate?.lastIncident}
                  metrics={safeMetrics(corporate)}
                  tone="corporate"
                />
              </div>

              <TabbedSamples
                defaultTab={
                  Array.isArray(corporateSamples) && corporateSamples.length > 0
                    ? "corporate"
                    : "consumer"
                }
                consumerSamples={consumerSamples}
                corporateSamples={corporateSamples}
              />
            </div>
          )}

          <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-sm text-blue-200 flex items-start gap-3">
             <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
             <p className="leading-relaxed opacity-90">{t("securityDisclaimer")}</p>
          </div>

          <div className="mt-12">
            <AnotherQueryCard
              onRun={runQuery}
              loading={loading}
              turnstileKey={turnstileKey}
              onToken={setTurnstileToken}
            />
          </div>
        </main>

        <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}

// ... (Rest of the component: ErrorBanner, Cards, etc. kept as is) ...
function ErrorBanner({ message, onClose }) {
  const { t } = useTranslation("reports");
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          role="alert"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-red-500/30 bg-red-950/30 backdrop-blur-md"
        >
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="flex items-start gap-3 text-sm text-red-200">
              <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <div className="flex-1 leading-5">
                <div className="font-semibold text-red-100">{t("requestFailed")}</div>
                <div className="mt-1 opacity-80">{message}</div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1 hover:bg-red-500/20 rounded transition-colors"
              >
                <X className="h-4 w-4 text-red-300" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ================== Cards ================== */

function PersonalRiskCard({ email, emailInfo, risk, samples = [] }) {
  const { t } = useTranslation("reports");
  const noData =
    !email ||
    !emailInfo ||
    (
      Number(emailInfo?.matches ?? 0) === 0 &&
      !parseDate(emailInfo?.lastSeen) &&
      (!Array.isArray(samples) || samples.length === 0)
    );

  const matches = Number(emailInfo?.matches ?? 0);
  const sources = Number(emailInfo?.sources ?? matches);
  const lastSeen = fmtHumanDate(emailInfo?.lastSeen);
  const monthsAgo = humanMonthsAgo(emailInfo?.lastSeen, t);

  return (
    <CardShell
      title={t("personalRisk")}
      titleIcon={<ShieldAlert className={risk === "High" ? "text-red-400" : "text-slate-500"} />}
      riskLevel={risk} 
      rightSlot={<RiskBadge risk={noData ? "—" : risk} />}
    >
      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="col-span-1">
             <RiskDialBlock risk={noData ? "—" : risk} />
        </div>
        
        <div className="col-span-1 grid gap-3">
            <MetricBlock value={noData ? "—" : monthsAgo} sub={lastSeen !== "—" ? t("lastDetected") : t("recentActivity")} />
            <MetricBlock value={noData ? "0" : String(sources)} sub={t("totalBreaches")} />
        </div>
      </div>

      <CTATakeAction className="mt-8" />
    </CardShell>
  );
}

function DomainRiskCard({
  title,
  entityLabel,
  entityValue,
  risk,
  lastIncident,
  metrics,
  tone = "consumer",
}) {
  const { t } = useTranslation("reports");
  const noData =
    (!metrics || metrics.length === 0 || Number(metrics?.[0]?.value ?? 0) === 0) &&
    !parseDate(lastIncident);

  const titleIcon =
    tone === "corporate" ? (
      <Lock className="text-slate-400" />
    ) : (
      <Building2 className="text-slate-400" />
    );

  const last = fmtHumanDate(lastIncident);
  const monthsAgo = humanMonthsAgo(lastIncident, t);
  const countMetric =
    Array.isArray(metrics) && metrics.length > 0
      ? String(metrics[0].value)
      : "0";

  return (
    <CardShell
      title={title}
      titleIcon={titleIcon}
      riskLevel={risk}
      rightSlot={<RiskBadge risk={noData ? "—" : risk} />}
    >
      <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="col-span-1">
             <RiskDialBlock risk={noData ? "—" : risk} />
        </div>
        <div className="col-span-1 grid gap-3">
            <MetricBlock
            value={noData ? "—" : monthsAgo}
            sub={last !== "—" ? t("lastDetected") : t("recentActivity")}
            />
            <MetricBlock
            value={noData ? "0" : countMetric}
            sub={t("totalBreaches")}
            />
        </div>
      </div>

      {tone === "corporate" ? (
        <CTATakeActionCorporate className="mt-8" />
      ) : (
        <CTATakeActionCustomer className="mt-8" />
      )}
    </CardShell>
  );
}


/* ================== Right column lists / tabs ================== */

function SampleList({ title, items = [] }) {
  const { t } = useTranslation("reports");
  const displayTitle = title || t("sampleBreachData");
  return (
    <motion.aside
      layout
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 shadow-xl backdrop-blur-sm h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="text-lg font-bold text-white">{displayTitle}</div>
        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{t("maskedPreview")}</div>
      </div>

      {!Array.isArray(items) || items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/30 p-8 text-center h-48 flex flex-col items-center justify-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-emerald-500/50 mb-3" />
          <div className="text-base font-semibold text-slate-300">{t("noSamplesFound")}</div>
          <p className="mt-1 text-sm text-slate-500">{t("noSamplesFoundDesc")}</p>
        </div>
      ) : (
        <ul className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {items.map((s, i) => (
            <li key={i} className="rounded-lg border border-white/5 bg-slate-950/40 p-3 sm:p-4 transition-colors hover:border-blue-500/20 hover:bg-slate-900">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm text-blue-300 truncate">{s.maskedAccount}</div>
                  <div className="text-xs text-slate-500 mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="bg-white/5 px-1.5 py-0.5 rounded text-slate-400 whitespace-nowrap">{s.application}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-slate-400 whitespace-nowrap">{s.breachType}</span>
                  </div>
                </div>
                <span className="shrink-0 text-[10px] font-mono text-slate-500 border border-white/5 px-2 py-1 rounded bg-black/20">
                  {fmtHumanDate(s.eventDate)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </motion.aside>
  );
}

function TabbedSamples({ defaultTab = "corporate", consumerSamples = [], corporateSamples = [] }) {
  const { t } = useTranslation("reports");
  const [active, setActive] = useState(defaultTab);

  useEffect(() => {
    const hasCorp = Array.isArray(corporateSamples) && corporateSamples.length > 0;
    const hasCons = Array.isArray(consumerSamples) && consumerSamples.length > 0;
    if (hasCorp) setActive("corporate");
    else if (hasCons) setActive("consumer");
    else setActive(defaultTab);
  }, [corporateSamples, consumerSamples, defaultTab]);

  const tabs = [
    { key: "corporate", label: `${t("corporate")}${countSuffix(corporateSamples)}`, items: corporateSamples },
    { key: "consumer", label: `${t("consumer")}${countSuffix(consumerSamples)}`, items: consumerSamples },
  ];

  const activeItems = (() => {
    const t = tabs.find((t) => t.key === active);
    return t?.items ?? [];
  })();

  return (
    <motion.aside
      layout
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 shadow-xl backdrop-blur-sm h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="text-lg font-bold text-white">{t("sampleData")}</div>
        
        <div className="flex bg-black/20 p-1 rounded-lg border border-white/5 overflow-x-auto">
            {tabs.map((t) => (
            <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`rounded-md px-4 py-1.5 text-xs font-bold transition-all whitespace-nowrap ${
                active === t.key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-500 hover:text-slate-300"
                }`}
            >
                {t.label}
            </button>
            ))}
        </div>
      </div>

      {!Array.isArray(activeItems) || activeItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/30 p-8 text-center h-48 flex flex-col items-center justify-center">
          <ShieldCheck className="mx-auto h-8 w-8 text-emerald-500/50 mb-3" />
          <div className="text-base font-semibold text-slate-300">{t("noSamplesAvailable")}</div>
          <p className="mt-1 text-sm text-slate-500">{t("noSamplesAvailableDesc")}</p>
        </div>
      ) : (
        <ul className="space-y-3 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
          {activeItems.map((s, i) => (
            <li key={i} className="rounded-lg border border-white/5 bg-slate-950/40 p-3 sm:p-4 transition-colors hover:border-blue-500/20 hover:bg-slate-900">
               <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm text-blue-300 truncate">{s.maskedAccount}</div>
                  <div className="text-xs text-slate-500 mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="bg-white/5 px-1.5 py-0.5 rounded text-slate-400 whitespace-nowrap">{s.application}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-slate-400 whitespace-nowrap">{s.breachType}</span>
                  </div>
                </div>
                <span className="shrink-0 text-[10px] font-mono text-slate-500 border border-white/5 px-2 py-1 rounded bg-black/20">
                  {fmtHumanDate(s.eventDate)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </motion.aside>
  );
}

/* ================== Bottom search card ================== */
function AnotherQueryCard({ onRun, loading, turnstileKey, onToken, showCaptcha }) {
  const { t } = useTranslation("reports");
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    if (!q || loading) return;

    if (onRun) onRun(q);
  };
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
      {/* Background Accent */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/20 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="text-lg font-bold text-white flex items-center gap-2 mb-2">
            <Search className="w-5 h-5 text-blue-500" />
            {t("newSearch")}
        </div>
        <p className="text-sm text-slate-400 mb-6 max-w-xl">{t("newSearchDesc")}</p>
        
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 sm:items-stretch">
            <input
            type="text"
            placeholder={t("searchPlaceholder")}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={loading}
            />
            <button
            type="submit"
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all ${
                loading 
                ? "bg-slate-800 cursor-not-allowed text-slate-500" 
                : "bg-blue-600 hover:bg-blue-500 shadow-blue-500/20 active:scale-95"
            }`}
            disabled={loading}
            >
            {loading ? t("scanning") : <>{t("scanNow")} <ChevronRight className="h-4 w-4" /></>}
            </button>
        </form>

        <div className={showCaptcha ? "mt-4" : "invisible h-0 overflow-hidden"}>
             <Turnstile
                key={turnstileKey}
                siteKey="0x4AAAAAABHcWCVoBFGccBYv"
                onSuccess={(token) => { if (onToken) onToken(token); }}
                options={{ theme: "dark", appearance: "interaction-only" }}
            />
        </div>
      </div>
    </div>
  );
}

/* ================== Shared shells ================== */
function CardShell({ title, titleIcon, riskLevel, rightSlot = null, children }) {
  
  // FIX: Uniform background. Only BORDER changes based on risk.
  let borderClass = "border-white/10";
  if (riskLevel === "High") borderClass = "border-red-500/50 shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)]";
  if (riskLevel === "Low") borderClass = "border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]";

  return (
    <motion.section
      layout
      className={`rounded-2xl p-4 sm:p-6 shadow-xl border backdrop-blur-sm bg-slate-900/60 ${borderClass}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-4 mb-4">
        <div className="text-lg font-bold flex items-center gap-2 text-white">
          {titleIcon}
          {title}
        </div>
        {rightSlot}
      </div>
      {children}
    </motion.section>
  );
}

function RiskBadge({ risk }) {
  const { t, i18n } = useTranslation("reports");
  const tone =
    risk === "High"
      ? "bg-red-500/10 text-red-400 border-red-500/30"
      : risk === "Low"
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      : "bg-slate-800 text-slate-400 border-slate-700";
  return (
    <span lang={i18n.resolvedLanguage} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${tone}`}>
      {risk === "High" && <AlertTriangle className="h-3 w-3" />}
      {risk === "Low" && <ShieldCheck className="h-3 w-3" />}
      {risk} {risk !== "—" ? t("risk") : ""}
    </span>
  );
}

function RiskDial({ risk, t }) {
  const color = risk === "High" ? "#ef4444" : risk === "Low" ? "#10b981" : "#475569";
  const bg = "rgba(255,255,255,0.05)";
  
  return (
    <div className="relative h-24 w-24 rounded-full" style={{ background: `conic-gradient(${color} 75%, ${bg} 0)` }}>
      <div className="absolute inset-2 rounded-full bg-[#0b1121]" /> {/* Inner cutout matches darker card bg */}
      <div className="absolute inset-0 grid place-items-center">
         <div className="text-center">
            <div className="text-2xl font-black text-white leading-none">{risk || "—"}</div>
            <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">{t("level")}</div>
         </div>
      </div>
    </div>
  );
}

function RiskDialBlock({ risk }) {
  const { t } = useTranslation("reports");
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-3 sm:gap-5 bg-black/20 p-4 rounded-xl border border-white/5 h-full">
      <RiskDial risk={risk} t={t} />
      <div className="text-center sm:text-left">
        <div className="text-sm font-medium text-slate-400">{t("riskLevel")}</div>
        <div className={`text-xl font-bold ${risk === "High" ? "text-red-400" : risk === "Low" ? "text-emerald-400" : "text-white"}`}>
            {risk || "—"}
        </div>
      </div>
    </div>
  );
}

function MetricBlock({ value, sub }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
      <div className="text-2xl font-bold text-white leading-tight">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-slate-400 mt-1 font-bold">{sub}</div>
    </div>
  );
}

// ================= CTAs (Unified, Professional Style) =================

function CTATakeAction({ className = "" }) {
  const { t } = useTranslation("reports");
  return (
    <div className={`rounded-xl border border-white/10 bg-slate-950/50 p-6 text-center ${className}`}>
      <h3 className="text-base font-bold text-white">{t("protectAccounts")}</h3>
      <p className="mt-2 text-sm text-slate-400 mb-4">
        {t("protectAccountsDesc")}
      </p>
      <button
        onClick={() => { trackFreeSignupClick(); window.open("https://platform.whiteintel.io/register", "_blank"); }}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-bold text-sm text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
      >
        {t("getStartedFree")} <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function CTATakeActionCustomer({ className = "" }) {
  const { t } = useTranslation("reports");
  return (
    <div className={`rounded-xl border border-white/10 bg-slate-950/50 p-6 text-center ${className}`}>
      <h3 className="text-base font-bold text-white">{t("protectCustomers")}</h3>
      <p className="mt-2 text-sm text-slate-400 mb-4">
        {t("protectCustomersDesc")}
      </p>
      <button
        onClick={() => { trackFreeSignupClick(); window.open("https://platform.whiteintel.io/register", "_blank"); }}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-bold text-sm text-white bg-gradient-to-r from-[#ff5120] to-[#d9380b] hover:from-[#ff6b42] hover:to-[#e63b0a]"
      >
        {t("startMonitoring")} <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function CTATakeActionCorporate({ className = "" }) {
  const { t } = useTranslation("reports");
  return (
    <div className={`rounded-xl border border-white/10 bg-slate-950/50 p-6 text-center ${className}`}>
      <h3 className="text-base font-bold text-white">{t("safeguardCompany")}</h3>
      <p className="mt-2 text-sm text-slate-400 mb-4">
        {t("safeguardCompanyDesc")}
      </p>
      <button
        onClick={() => { trackFreeSignupClick(); window.open("https://platform.whiteintel.io/register", "_blank"); }}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 font-bold text-sm text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
      >
        {t("startForFree")} <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ================== Helpers ================== */
function countSuffix(items) {
  if (!Array.isArray(items)) return " (0)";
  return ` (${items.length})`;
}
function safeMetrics(card) {
  return Array.isArray(card?.metrics) ? card.metrics : [];
}
function isPositive(n) {
  const x = Number(n);
  return Number.isFinite(x) && x > 0;
}
function parseDate(s) {
  if (!s || s === "—") return null;
  const d = new Date(String(s).replace(" ", "T"));
  return Number.isNaN(d.getTime()) ? null : d;
}
function fmtHumanDate(s, locale = "en-US") {
  const d = parseDate(s);
  if (!d) return "—";
  return d.toLocaleDateString(locale, { year: "numeric", month: "short", day: "2-digit" });
}
function humanMonthsAgo(dateString, t) {
  const d = parseDate(dateString);
  if (!d) return "—";

  const now = new Date();
  const diffMs = now - d;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffDays < 1) return t("today");
  if (diffDays === 1) return t("yesterday");
  if (diffMonths < 1) return t("daysAgo", { count: diffDays });
  if (diffMonths < 12) return t("monthsAgo", { count: diffMonths });
  return t("yearsAgo", { count: diffYears });
}

function hasExposure(card) {
  if (!card) return false;
  const metricSignal = Array.isArray(card.metrics) && card.metrics.some((m) => isPositive(m?.value));
  const lastIncidentSignal = !!parseDate(card.lastIncident);
  return metricSignal || lastIncidentSignal;
}
function normalizeRiskFromCard(card) {
  if (!card) return "—";
  return hasExposure(card) ? "High" : "Low";
}
function normalizeRiskFromEmail(emailInfo) {
  const matches = Number(emailInfo?.matches ?? 0);
  const lastSeenSignal = !!parseDate(emailInfo?.lastSeen);
  if (matches > 0 || lastSeenSignal) return "High";
  if (matches === 0 && !lastSeenSignal) return "Low";
  return "—";
}