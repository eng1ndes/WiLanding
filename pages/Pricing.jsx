import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import { Check, ShieldCheck, Zap, Lock, Database, Search, Scissors, Minus, ChevronDown, Crown, CreditCard } from "lucide-react";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesSection from "../components/FeaturedResources";

function usePlans() {
  const { t } = useTranslation("pricing");
  return [
    {
      id: "researcher",
      name: t("plans.researcher"),
      tagline: "For solo researchers & freelancers",
      priceMonthly: "$200",
      priceYearly: "$2,000 / year",
      yearlySavings: "$400",   // $200 × 12 = $2,400 vs $2,000 yearly
      yearlyOnly: false,
      icon: Zap,
      highlight: false,
      buttonText: t("cta.contactUs"),
      buttonLink: "/contact",
      // Curated key points shown on the mobile card (the matrix carries the full detail)
      highlights: [
        "Fully unmasked data, passwords included",
        "Leak Discovery: consumer, corporate, email, attack surface",
        "750 data unlocks / month",
        "10 domain + 5 email watchlist tokens",
        "1 user seat",
        "Standard support",
      ],
    },
    {
      id: "enterprise",
      name: t("plans.enterprise"),
      tagline: "For SOC teams of 2-5",
      priceMonthly: "$400",
      priceYearly: "$4,000 / year",
      yearlySavings: "$800",   // $400 × 12 = $4,800 vs $4,000 yearly
      yearlyOnly: false,
      icon: ShieldCheck,
      highlight: false,
      buttonText: t("cta.contactUs"),
      buttonLink: "/contact",
      highlights: [
        "Everything in Researcher, plus:",
        "Unlimited data unlocks",
        "Brand Protection & look-alike monitoring",
        "Dark-web mention + GitHub scanning",
        "Leak Discovery API, 50 calls / day",
        "SSO, Jira, Slack integrations",
        "2 seats, priority support",
      ],
    },
    {
      id: "threat_intel",
      name: t("plans.threatIntelligence"),
      tagline: "For MSSPs & Security products and enterprise SOCs",
      priceMonthly: "$750",
      priceYearly: "$7,500 / year",
      yearlySavings: "$1,500", // $750 × 12 = $9,000 vs $7,500 yearly
      yearlyOnly: false,
      icon: Lock,
      highlight: false,
      buttonText: t("cta.contactUs"),
      buttonLink: "/contact",
      highlights: [
        "Everything in Enterprise, plus:",
        "All Leak Discovery identifiers",
        "Investigation+ included",
        "Full stealer-log archive downloads",
        "Leak Discovery API, 500 calls / day",
        "Webhook integration & data streaming",
        "3 seats, priority developer support",
      ],
    },
    {
      id: "extended_threat_intel",
      name: "Extended Threat Intelligence",
      shortName: "Extended TI",
      tagline: "All features and add-ons included",
      priceMonthly: "$2,083", // $25,000 / 12 ≈ $2,083 (per-month equivalent — yearlyOnly, no monthly billing)
      priceYearly: "$25,000 / year",
      yearlySavings: "",       // Not applicable: billed annually only
      yearlyOnly: true,
      icon: Crown,
      highlight: true,
      buttonText: t("cta.contactUs"),
      buttonLink: "/contact",
      highlights: [
        "Everything in Threat Intelligence, plus:",
        "Every add-on bundled in",
        "Payment Fraud: 500 searches / day",
        "Threat Feeds GUI + API, 1000 calls / day",
        "Supplier Security for 256 suppliers",
        "20 managed takedowns / year",
        "5 seats, priority developer support",
      ],
    },
  ];
}

const ADDONS = [
  {
    name: "Payment Fraud Intelligence",
    icon: CreditCard,
    price: "$17,500",
    period: "USD / Year",
    note: "Yearly purchases only",
    description:
      "Compromised-card intelligence for fraud teams. BIN coverage, issuer attribution, and validity tracking against the exposed-card index for real-time transaction defense.",
    sectionTitle: "Data Coverage",
    features: [
      "BIN-6 · BIN-8 · last 4",
      "Issuer bank",
      "Issuer country",
      "Card network",
      "Card type and tier",
      "Expiry date",
      "Validity computed at query time",
      "15,000 UI searches / month",
      "100 API calls / day",
      "Watchlist: up to 256 BINs",
    ],
    availability: "Available for Enterprise and Threat Intelligence plans. Bundled (500 searches / day) on Extended Threat Intelligence.",
  },
  {
    name: "Threat Feed API",
    icon: Database,
    price: "$3,000",
    period: "USD / Year",
    note: "Yearly purchases only",
    description:
      "A comprehensive stream of structured dark-web telemetry providing real-time visibility into dark-web chatter, data and access sales, ransomware lifecycle events, and emerging adversary methodologies.",
    sectionTitle: "Intelligence Vectors",
    features: [
      "Hacker Forum Monitoring",
      "Geographical Attribution",
      "Industry-Specific Targeting",
      "Attack Vector Identification",
      "Threat Actor Attribution",
      "Ransomware Event Monitoring",
      "Exfiltrated Data Auctions",
      "Initial Access Brokerage",
      "Zero-Day & Exploit Intel",
      "Mainstream OSINT Signals",
      "50 API calls / day",
    ],
    availability: "Available for yearly Enterprise and Threat Intelligence plans. Bundled (500 calls / day) on Extended Threat Intelligence.",
  },
  {
    name: "Investigation+ Beta",
    icon: Search,
    price: "$1,500",
    period: "USD / Year",
    note: null,
    description:
      "A dual-purpose neural engine for unmasking threat actor identities and conducting deep-trace forensic analysis on compromised victims.",
    sectionTitle: "Forensic Capabilities",
    features: [
      "Adversary Unmasking",
      "Detailed Victimology",
      "Automated Risk Scoring",
      "Target Prioritization",
      "Neural Identity Mapping",
      "Lateral Vector Analysis",
      "Forensic Footprinting",
      "Pivot-Point Discovery",
    ],
    availability: "Already included on Threat Intelligence and Extended Threat Intelligence plans.",
  },
  {
    name: "Managed Takedowns",
    icon: Scissors,
    price: "$1,000",
    period: "USD / 10 Takedowns",
    note: "$100 each, minimum pack",
    description:
      "Hand off the registrar abuse process to our analysts. We file, follow up, and document evidence on look-alike and phishing domains until they go down.",
    sectionTitle: "What's Included",
    features: [
      "Look-alike Domains",
      "Phishing & Harvesters",
      "Registrar Abuse Filing",
      "Evidence Bundles",
      "Provider Escalations",
      "Lifecycle Tracking",
      "Ad-hoc Takedowns",
      "Analyst Communication",
      "10 takedowns / pack",
      "Never expires while subscribed",
    ],
    availability: "Available for Enterprise and Threat Intelligence plans. Bundled (20 takedowns / year) on Extended Threat Intelligence.",
  },
];

/* ───────────────────── COMPARISON TABLE ─────────────────────
   Categories + rows mirror the in-app upgrades matrix so marketing and
   logged-in pages always show the same content. Cell vocabulary on `values`:
     "check"          → green check chip   (included)
     "check:<label>"  → check + annotation (included with quota / detail)
     "dash" or null   → hollow dash        (not included)
     "Add-on"         → amber chip         (available, sold separately)
     any other string → rendered verbatim
   Column order matches PLAN ids: researcher / enterprise / threat_intel / extended_threat_intel
*/
const COMPARISON = [
  {
    category: "Core Features",
    rows: [
      { feature: "Fully unmasked data (incl. passwords)", values: ["check", "check", "check", "check"] },
      {
        feature: "Leak Discovery",
        description: "All identifiers: consumer accounts, corporate accounts, email addresses, passwords, attack surface, IP addresses, computer names, and country codes.",
        values: ["Consumer, corporate, email, attack surface", "Consumer, corporate, email, attack surface", "All identifiers available", "All identifiers available"],
      },
      { feature: "Data unlocks", values: ["750 / month", "Unlimited", "Unlimited", "Unlimited"] },
      {
        feature: "Threat Feeds",
        description: "Curated dark-web telemetry: data sales, ransomware lifecycle events, access listings, and adversary chatter.",
        values: ["GUI only", "GUI only", "GUI only", "GUI + API"],
      },
      {
        feature: "Brand Protection",
        description: "Lookalike domain tracking, brand impersonation detection, and abuse takedown workflows.",
        values: ["dash", "check", "check", "check"],
      },
      {
        feature: "Payment Fraud",
        description: "Compromised-card monitoring: BIN coverage, issuer attribution, validity tracking.",
        values: ["dash", "Add-on", "Add-on", "check:500 searches / day"],
      },
      {
        feature: "Investigation+",
        description: "Advanced pivoting, multi-identifier graph navigation, and analyst workflow tooling for threat-hunting teams.",
        values: ["Add-on", "Add-on", "check", "check"],
      },
      {
        feature: "Supplier Security",
        description: "Continuous credential-exposure scoring for vendors and partners, with per-supplier risk grades and event timelines.",
        values: ["dash", "64 suppliers", "128 suppliers", "256 suppliers"],
      },
      { feature: "User seats", values: ["1", "2", "3", "5"] },
    ],
  },
  {
    category: "Exports & Downloads",
    rows: [
      { feature: "Data exports", values: ["10 / month · 2-month look-back", "10 / day · 1-year look-back", "500 / day · 2-year look-back", "500 / day · 2-year look-back"] },
      { feature: "Full stealer-log archive downloads", values: ["dash", "dash", "check", "check"] },
    ],
  },
  {
    category: "Monitoring",
    rows: [
      { feature: "Watchlist tokens", values: ["10 domains + 5 emails", "64 (domains + emails)", "128 (all identifiers)", "256 (all identifiers)"] },
      { feature: "Dark-web mention monitoring", values: ["dash", "8 keywords", "16 keywords", "64 keywords"] },
      { feature: "Public GitHub repository scanning", values: ["dash", "8 repositories", "16 repositories", "64 repositories"] },
      { feature: "Look-alike domain monitoring", values: ["dash", "check", "check", "check"] },
      { feature: "Direct content access for watchlist events", values: ["dash", "check", "check", "check"] },
    ],
  },
  {
    category: "API Access",
    rows: [
      { feature: "Leak Discovery API", values: ["dash", "50 calls / day", "500 calls / day", "1000 calls / day"] },
      {
        feature: "Leak Discovery API endpoints",
        description: "Basic: consumer, corporate, email, and last leaks search endpoints. Full: adds IP-address and computer-name search endpoints.",
        values: ["dash", "Basic", "Full", "Full"],
      },
      { feature: "Webhook integration & data streaming", values: ["dash", "dash", "check", "check"] },
      { feature: "Threat Feed API", values: ["dash", "Add-on", "Add-on", "1000 calls / day"] },
      { feature: "Payment Fraud API", values: ["dash", "Add-on", "Add-on", "100 calls / day"] },
    ],
  },
  {
    category: "Alerting & Integrations",
    rows: [
      { feature: "Real-time alerts", values: ["Metadata only", "Full · CSV included", "Full · CSV included", "Full · CSV included"] },
      { feature: "SSO", values: ["dash", "check", "check", "check"] },
      { feature: "Jira", values: ["dash", "check", "check", "check"] },
      { feature: "Slack", values: ["dash", "check", "check", "check"] },
      { feature: "Investigation+ Module", values: ["dash", "Add-on", "check", "check"] },
      { feature: "Managed Takedowns", values: ["dash", "Add-on", "Add-on", "20 / year"] },
    ],
  },
  {
    category: "Commercial & Support",
    rows: [
      { feature: "Resale & customer-facing product rights", values: ["dash", "dash", "check", "check"] },
      { feature: "Support tier", values: ["Standard", "Priority", "Priority developer", "Priority developer"] },
    ],
  },
];

/* ───────────────────── SHARED PRICE COPY ─────────────────────
   Single source of truth for the price / period / sub-copy branching so the
   desktop matrix header cells and the mobile twin header cards never drift.
   yearlyOnly plans show the per-month equivalent when the toggle is monthly,
   so they remain comparable, but billing reality stays yearly-only.
*/
function planPriceCopy(plan, billingCycle, t) {
  const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly.split(" /")[0];
  const period = billingCycle === "monthly" ? t("billing.perMonth") : t("billing.perYear");

  let subCopy = null; // { text, tone: 'muted' | 'save' }
  if (plan.yearlyOnly) {
    subCopy =
      billingCycle === "monthly"
        ? { text: "Per-month equivalent, billed annually only", lines: ["Per-month equivalent", "Billed annually only"], tone: "muted" }
        : { text: "Billed annually only", lines: ["Billed annually only"], tone: "muted" };
  } else if (billingCycle === "yearly" && plan.yearlySavings) {
    subCopy = { text: `Save ${plan.yearlySavings} / yr`, lines: [`Save ${plan.yearlySavings} / yr`], tone: "save" };
  } else if (billingCycle === "monthly") {
    subCopy = { text: t("billing.cancelAnytime"), lines: [t("billing.cancelAnytime")], tone: "muted" };
  } else {
    subCopy = { text: t("billing.billedAnnually"), lines: [t("billing.billedAnnually")], tone: "muted" };
  }

  return { price, period, subCopy };
}

function ComparisonCell({ value, highlight }) {
  // Tick: bare "check" string OR legacy boolean true. Renders a filled circular chip.
  if (value === "check" || value === true) {
    return (
      <span
        role="img"
        aria-label="Included"
        className={`inline-flex items-center justify-center h-5 w-5 rounded-full ${
          highlight ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
        }`}
      >
        <Check className="h-3 w-3" strokeWidth={3.5} />
      </span>
    );
  }
  // "check:<label>": included AND has a quota/annotation worth surfacing
  // (e.g. "check:500 searches / day"). Tick + inline label.
  if (typeof value === "string" && value.startsWith("check:")) {
    const label = value.slice("check:".length).trim();
    return (
      <span className="inline-flex items-center justify-center gap-1.5">
        <span
          role="img"
          aria-label="Included"
          className={`inline-flex items-center justify-center h-5 w-5 rounded-full shrink-0 ${
            highlight ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
          }`}
        >
          <Check className="h-3 w-3" strokeWidth={3.5} />
        </span>
        <span className={`text-[12px] leading-snug ${highlight ? "text-neutral-900 font-semibold" : "text-neutral-700"}`}>
          {label}
        </span>
      </span>
    );
  }
  // Not included: explicit "dash" string, legacy boolean false, or nullish.
  if (value === "dash" || value === false || value == null) {
    return (
      <span
        role="img"
        aria-label="Not included"
        className="inline-block h-px w-3.5 bg-neutral-300"
      />
    );
  }
  if (value === "Add-on") {
    return (
      <span className="inline-flex items-center gap-1 text-[10.5px] uppercase tracking-wider px-2 py-0.5 rounded-md ring-1 ring-inset ring-amber-200 bg-amber-50 text-amber-700 font-semibold">
        Add-on
      </span>
    );
  }
  return (
    <span className={`text-[12.5px] leading-snug ${highlight ? "text-neutral-900 font-semibold" : "text-neutral-700"}`}>
      {value}
    </span>
  );
}

/* ───────── Mobile plan cards ─────────
   Below lg the comparison matrix is unreadable, so mobile gets a simple
   stacked card per plan: name, price (respecting the billing toggle),
   tagline, CTA, and the curated `highlights` list. The full matrix is still
   one tap away via the desktop view on larger screens. */
function MobilePlanCards({ plans, billingCycle, t }) {
  return (
    <div className="flex flex-col gap-5 lg:hidden">
      {plans.map((plan) => {
        const isHighlight = plan.highlight;
        const activePrice =
          billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly.split(" /")[0];
        const activePeriod =
          billingCycle === "monthly" ? t("billing.perMonth") : t("billing.perYear");

        return (
          <div
            key={plan.id}
            className={`relative rounded-2xl border bg-white p-6 ${
              isHighlight
                ? "border-blue-300 shadow-[0_8px_30px_-12px_rgba(37,99,235,0.35)]"
                : "border-neutral-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            }`}
          >
            {isHighlight && (
              <>
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-blue-600" />
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm shadow-blue-600/30">
                  Most capable
                </div>
              </>
            )}

            <div className={isHighlight ? "mt-3" : ""}>
              <div
                className={`text-[15px] font-bold uppercase tracking-tight ${
                  isHighlight ? "text-blue-700" : "text-neutral-900"
                }`}
              >
                {plan.name}
              </div>
              <p className="mt-1 text-[12.5px] text-neutral-500 leading-snug">{plan.tagline}</p>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[32px] font-mono font-bold tracking-tight text-neutral-900 leading-none">
                  {activePrice}
                </span>
                <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-tighter">
                  {activePeriod}
                </span>
              </div>
              <p className="mt-1.5 text-[11px] font-medium leading-snug">
                {plan.yearlyOnly ? (
                  billingCycle === "monthly" ? (
                    <span className="text-neutral-500">Per-month equivalent, billed annually only</span>
                  ) : (
                    <span className="text-neutral-500">Billed annually only</span>
                  )
                ) : billingCycle === "yearly" && plan.yearlySavings ? (
                  <span className="text-emerald-600 font-semibold">Save {plan.yearlySavings} / yr</span>
                ) : billingCycle === "monthly" ? (
                  <span className="text-neutral-500">{t("billing.cancelAnytime")}</span>
                ) : (
                  <span className="text-neutral-500">{t("billing.billedAnnually")}</span>
                )}
              </p>

              <a
                href={plan.buttonLink}
                className={`mt-5 block w-full text-center rounded-lg px-4 py-3 text-[13px] font-semibold transition-all ${
                  isHighlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                {plan.buttonText}
              </a>

              <ul className="mt-6 flex flex-col gap-2.5">
                {plan.highlights.map((h, i) => {
                  // A "plus:" lead-in line gets styled as a quiet sub-label, not a checkmark item.
                  const isLeadIn = /, plus:$/.test(h) || h.endsWith("plus:");
                  if (isLeadIn) {
                    return (
                      <li key={i} className="text-[12px] font-semibold text-neutral-500 pt-0.5">
                        {h}
                      </li>
                    );
                  }
                  return (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${isHighlight ? "text-blue-600" : "text-blue-500"}`}
                        strokeWidth={3}
                      />
                      <span className="text-[13.5px] text-neutral-700 leading-snug">{h}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ComparisonTable({ plans, billingCycle, t }) {
  // plans: full plan objects (name, tagline, price, CTA). Highlight is the last one (Extended Threat Intelligence).
  const HIGHLIGHT_COL = plans.findIndex((p) => p.highlight);

  const PlanCTA = ({ plan, highlight }) => (
    <a
      href={plan.buttonLink}
      className={`block w-full text-center rounded-lg px-3 py-2.5 text-[12px] font-semibold transition-all ${
        highlight
          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20"
          : "bg-white text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400 border border-neutral-300"
      }`}
    >
      {plan.buttonText}
    </a>
  );

  return (
    <div className="relative rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Matrix: 1 feature column + 4 plan columns. Desktop only (lg+). */}
      <table className="w-full border-collapse text-left">
          <thead>
            <tr className="align-top">
              {/* Feature column — quiet left rail */}
              <th
                className="bg-neutral-50/60 border-b border-neutral-200 px-5 pt-8 pb-7 align-bottom"
                style={{ width: "22%" }}
              >
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.18em]">
                  Compare plans
                </span>
                <div className="mt-1 text-[14px] font-semibold text-neutral-900 leading-snug">
                  Every capability,<br />side by side
                </div>
              </th>

              {plans.map((plan, i) => {
                const isHighlight = i === HIGHLIGHT_COL;
                const { price: activePrice, period: activePeriod, subCopy } = planPriceCopy(plan, billingCycle, t);

                return (
                  <th
                    key={plan.name}
                    className={`relative align-top text-center pt-8 pb-7 px-4 border-b border-neutral-200 ${
                      i > 0 ? "border-l border-neutral-200" : ""
                    } ${isHighlight ? "bg-blue-50" : "bg-white"}`}
                    style={{ width: "19.5%" }}
                  >
                    {/* Top color bar on highlight column */}
                    {isHighlight && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600" />
                    )}
                    {plan.highlight && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[9.5px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm shadow-blue-600/30">
                        Most capable
                      </div>
                    )}

                    <div className={`${plan.highlight ? "mt-6" : ""}`}>
                      <div
                        className={`text-[12.5px] font-bold uppercase tracking-tight mb-1.5 ${
                          isHighlight ? "text-blue-700" : "text-neutral-900"
                        }`}
                      >
                        {plan.shortName || plan.name}
                      </div>

                      {plan.tagline && (
                        <p className="text-[11px] text-neutral-500 leading-snug font-normal normal-case tracking-normal mb-5 min-h-[42px]">
                          {plan.tagline}
                        </p>
                      )}

                      <div className="mb-1">
                        <span className="text-[26px] font-mono font-bold tracking-tight text-neutral-900 leading-none">
                          {activePrice}
                        </span>
                        <span className="ml-1.5 text-[10px] font-medium text-neutral-500 uppercase tracking-tighter">
                          {activePeriod}
                        </span>
                      </div>

                      <p className="text-[10px] font-medium mb-5 min-h-[28px] normal-case tracking-normal leading-snug">
                        <span className={subCopy.tone === "save" ? "text-emerald-600 font-semibold" : "text-neutral-500"}>
                          {subCopy.lines.map((line, li) => (
                            <React.Fragment key={li}>
                              {li > 0 && <br />}
                              {line}
                            </React.Fragment>
                          ))}
                        </span>
                      </p>

                      <PlanCTA plan={plan} highlight={isHighlight} />
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {COMPARISON.map((group, gi) => (
              <React.Fragment key={group.category}>
                {/* Category band — bg fill + bolder label gives the matrix vertical rhythm */}
                <tr>
                  <td className="bg-neutral-100 border-t border-b border-neutral-200 py-2.5 px-6">
                    <span className="text-[10.5px] font-bold text-neutral-700 uppercase tracking-[0.18em]">
                      {group.category}
                    </span>
                  </td>
                  {plans.map((plan, i) => {
                    const isHighlight = i === HIGHLIGHT_COL;
                    return (
                      <td
                        key={plan.name}
                        className={`bg-neutral-100 border-t border-b border-neutral-200 ${
                          i > 0 ? "border-l border-neutral-200" : ""
                        } ${isHighlight ? "bg-blue-100/60" : ""}`}
                      />
                    );
                  })}
                </tr>

                {/* Feature rows */}
                {group.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="group/row border-t border-neutral-100 first:border-t-0"
                  >
                    <td className="py-3.5 px-6 align-middle bg-neutral-50/40 group-hover/row:bg-neutral-50">
                      <div className="text-[13px] text-neutral-800 font-medium leading-snug">
                        {row.feature}
                      </div>
                      {row.description && (
                        <div className="mt-1 text-[11px] text-neutral-500 leading-snug">
                          {row.description}
                        </div>
                      )}
                    </td>
                    {row.values.map((v, i) => {
                      const isHighlight = i === HIGHLIGHT_COL;
                      return (
                        <td
                          key={i}
                          className={`py-3.5 px-4 text-center align-middle ${
                            i > 0 ? "border-l border-neutral-200" : ""
                          } ${
                            isHighlight
                              ? "bg-blue-50/70 group-hover/row:bg-blue-100/60"
                              : "group-hover/row:bg-neutral-50"
                          }`}
                        >
                          <ComparisonCell value={v} highlight={isHighlight} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}

            {/* Bottom CTA row — committed conversion bar */}
            <tr className="border-t-2 border-neutral-200">
              <td className="bg-neutral-50/60 py-5 px-6 align-middle">
                <div className="text-[12px] font-semibold text-neutral-900">Ready to start?</div>
                <div className="text-[11px] text-neutral-500 mt-0.5">Same-day deployment, no sales call required</div>
              </td>
              {plans.map((plan, i) => {
                const isHighlight = i === HIGHLIGHT_COL;
                return (
                  <td
                    key={plan.name}
                    className={`py-5 px-4 align-middle ${
                      i > 0 ? "border-l border-neutral-200" : ""
                    } ${isHighlight ? "bg-blue-50/70" : "bg-neutral-50/60"}`}
                  >
                    <PlanCTA plan={plan} highlight={isHighlight} />
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
    </div>
  );
}

/* ───────────────────── FAQ ───────────────────── */
const FAQ_ITEMS = [
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately with prorated billing; downgrades apply at the next billing cycle.",
  },
  {
    q: "What's included in Extended Threat Intelligence?",
    a: "Extended Threat Intelligence bundles every feature and add-on at the top tier: full Leak Discovery (1000 API calls / day), Threat Feeds (GUI + API at 1000 calls / day), Brand Protection, Payment Fraud (500 UI searches / day with 1000 API calls / day), Investigation+, Supplier Security for 256 suppliers, 256 watchlist tokens, 64 keyword and GitHub repository slots, Webhook + Streaming, 20 managed takedowns per year, and 5 seats. Billed annually only at $25,000 / year.",
  },
  {
    q: "Are add-ons available on every plan?",
    a: "No. Payment Fraud Intelligence and Threat Feed API are available only with yearly Enterprise and Threat Intelligence subscriptions (both are bundled at production volumes on Extended Threat Intelligence). Investigation+ works with Researcher and Enterprise (already included on Threat Intelligence and Extended Threat Intelligence). Managed Takedowns is available for Enterprise and Threat Intelligence as a pack purchase (bundled 20 / year on Extended Threat Intelligence).",
  },
  {
    q: "How are seats counted?",
    a: "A seat is one named user on the platform. Researcher includes 1, Enterprise includes 2, Threat Intelligence includes 3, and Extended Threat Intelligence includes 5. Additional seats can be added at any time; contact your account team.",
  },
  {
    q: "Do you offer custom or higher-volume contracts?",
    a: "Yes. If your organisation needs higher API limits, more watchlist tokens, additional seats, or custom data-sharing terms, get in touch and we'll scope a custom plan.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Card payments for monthly and yearly plans. Wire transfer and POs are available for yearly Enterprise, Threat Intelligence, and Extended Threat Intelligence subscriptions.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="pb-24 max-w-4xl mx-auto px-6 scroll-mt-24">
      <div className="border-t border-neutral-200 pt-20">
        <div className="mb-10">
          <span className="inline-block text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQ_ITEMS.map(({ q, a }) => (
            <details key={q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-[15px] font-semibold text-neutral-900 pr-6">{q}</span>
                <ChevronDown className="h-5 w-5 text-neutral-400 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-[14px] text-neutral-600 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function AddonCard({ addon }) {
  const Icon = addon.icon;
  return (
    <div className="relative flex flex-col rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all">
      <div className="p-6 flex-1 flex flex-col">
        {/* Header: icon + name */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-1.5 rounded-md bg-neutral-100 text-neutral-500">
            <Icon className="h-4 w-4" />
          </div>
          <h3 className="text-base font-bold uppercase tracking-tight text-neutral-900">{addon.name}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-500 leading-snug mb-5">{addon.description}</p>

        {/* Price */}
        <div className="mb-5 pb-5 border-b border-neutral-100">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-mono font-bold tracking-tight text-neutral-900">{addon.price}</span>
            <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-tighter">{addon.period}</span>
          </div>
          {addon.note && (
            <p className="text-[11px] font-medium text-neutral-500 mt-1.5">{addon.note}</p>
          )}
        </div>

        {/* Capabilities — 2-col grid for density */}
        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">{addon.sectionTitle}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 mb-6 flex-1">
          {addon.features.map((f) => (
            <li key={f} className="flex items-start gap-1.5">
              <Check className="h-3 w-3 mt-1 text-blue-600 shrink-0" strokeWidth={3} />
              <span className="text-[12px] leading-snug text-neutral-700">{f}</span>
            </li>
          ))}
        </ul>

        {/* Availability footer */}
        <p className="mt-auto text-[11px] text-neutral-500 italic leading-snug pt-4 border-t border-neutral-100">
          {addon.availability}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const { t } = useTranslation("pricing");
  const plans = usePlans();
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      <Helmet>
        <title>Pricing | Whiteintel Dark Web Monitoring & Threat Intelligence</title>
        <meta name="description" content="Simple, transparent pricing for Whiteintel's dark web monitoring and threat intelligence platform. Find the right plan for your team or enterprise." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Pricing | Whiteintel" />
        <meta property="og:description" content="Simple, transparent pricing for dark web monitoring and threat intelligence. Start free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/pricing" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Pricing | Whiteintel" />
        <meta name="twitter:description" content="Simple, transparent pricing for dark web monitoring and threat intelligence. Start free." />
        <link rel="canonical" href="https://whiteintel.io/pricing" />
      </Helmet>
      <div
        className="text-neutral-900"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage:
            "radial-gradient(circle, rgba(15, 23, 42, 0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <Navbar variant="light" />
        <main className="text-black">
          <section className="pt-32 pb-24 max-w-7xl mx-auto px-6">

            {/* Compact inline header */}
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                {t("seo.heroTitle", "Transparent pricing.")}{" "}
                <span className="text-neutral-500">{t("seo.heroHighlight", "No hidden fees.")}</span>
              </h1>
            </div>

            {/* Page jump links — same affordance as a sidebar but lighter */}
            <nav aria-label="Pricing sections" className="flex justify-center gap-2 mb-10 flex-wrap">
              {[
                { label: "Plans & pricing", href: "#compare" },
                { label: "Add-ons", href: "#addons" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] font-semibold text-neutral-600 px-3 py-1.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Billing toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-neutral-100 p-1 rounded-lg inline-flex">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-5 py-2 rounded-md text-sm font-semibold transition-all ${
                    billingCycle === "monthly"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {t("billing.monthly")}
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-5 py-2 rounded-md text-sm font-semibold transition-all ${
                    billingCycle === "yearly"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {t("billing.yearly")}
                  <span className={`ml-2 text-xs font-medium ${
                    billingCycle === "yearly" ? "text-blue-600" : "text-neutral-400"
                  }`}>
                    Save 17%
                  </span>
                </button>
              </div>
            </div>

            <div id="compare" className="scroll-mt-24">
              {/* Mobile: simple stacked plan cards. Desktop: full comparison matrix. */}
              <MobilePlanCards plans={plans} billingCycle={billingCycle} t={t} />
              <div className="hidden lg:block">
                <ComparisonTable plans={plans} billingCycle={billingCycle} t={t} />
              </div>
            </div>

          </section>

          {/* ============== ADD-ONS SECTION ============== */}
          <section id="addons" className="pb-24 max-w-7xl mx-auto px-6 scroll-mt-24">
            <div className="border-t border-neutral-200 pt-20">
              <div className="max-w-3xl mb-12">
                <span className="inline-block text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
                  Add-ons
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                  Optional capabilities
                </h2>
                <p className="text-neutral-500 text-base leading-relaxed">
                  Specialized intelligence streams and managed services that attach to selected plans.
                  Configured during onboarding or added later via your account team.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 items-stretch">
                {ADDONS.map((addon) => (
                  <AddonCard key={addon.name} addon={addon} />
                ))}
              </div>

              <p className="text-[12px] text-neutral-500 mt-8">
                To add any of these to an existing subscription, contact your account team or{" "}
                <a href="/contact" className="text-blue-600 font-semibold hover:underline">reach Sales</a>.
              </p>
            </div>
          </section>

          {/* ============== FAQ SECTION ============== */}
          <FAQSection />
        </main>
      </div>

      <TrustedBySection />
      <FeaturedResourcesSection />
      <FeaturedResourcesWithFooter />
    </>
  );
}