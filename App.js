import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Only HomePage loads eagerly (landing page = critical path)
import HomePage from "./pages/HomePage";

// Everything else is lazy-loaded — split into separate chunks
const PlatformOverview = lazy(() => import("./pages/PlatformOverview"));
const AtoPrevention = lazy(() => import("./pages/AtoPrevention"));
const EnterpriseProtection = lazy(() => import("./pages/EnterpriseProtection"));
const ActiveDirectoryProtection = lazy(() => import("./pages/ActiveDirectoryProtection"));
const DarkwebMentionMonitoring = lazy(() => import("./pages/DarkwebMentionMonitoring"));
const RansomwarePrevention = lazy(() => import("./pages/RansomwarePrevention"));
const MsspEnrichments = lazy(() => import("./pages/MsspEnrichments"));
const VulnerabilityResearch = lazy(() => import("./pages/VulnerabilityResearch"));
const ContactPage = lazy(() => import("./pages/Contact"));
const PricingPage = lazy(() => import("./pages/Pricing"));
const PlatformTour = lazy(() => import("./pages/PlatformTour"));
const DemoCenter = lazy(() => import("./pages/DemoCenter"));
const PrivacyPage = lazy(() => import("./pages/Privacy"));
const TermsPage = lazy(() => import("./pages/Terms"));
const SecurityInsightsPage = lazy(() => import("./pages/Reports"));
const ReportPage = lazy(() => import("./pages/2025report"));
const ConsumerProtection = lazy(() => import("./pages/ConsumerProtection"));
const LookAlikeDomainDetection = lazy(() => import("./pages/LookalikeDomainScanner"));
const ManagedTakedown = lazy(() => import("./pages/ManagedTakedown"));
const SupplierSecurity = lazy(() => import("./pages/SupplierSecurity"));
const PaymentFraudIntelligence = lazy(() => import("./pages/PaymentFraudIntelligence"));
// Alternatives pages live as static HTML in /htmlfiles/alternatives/ (served by Apache).
// Blog and Glossary are now served as static HTML by Apache — no React routes needed.
// See /htmlfiles/ directory for the static versions.


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Use resolvedLanguage (the language i18n is actually serving after fallback)
    // not the raw detected language. Otherwise a Turkish browser gets `lang="tr"`
    // applied to English fallback text, and CSS `text-transform: uppercase` then
    // uses Turkish rules — turning every lowercase "i" into "İ" on the page.
    const lang = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];
    document.documentElement.lang = lang;
  }, [i18n.resolvedLanguage, i18n.language]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#020617]" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform-overview" element={<PlatformOverview />} />
        <Route path="/ato-prevention" element={<AtoPrevention />} />
        <Route path="/enterprise-protection" element={<EnterpriseProtection />} />
        <Route path="/active-directory-protection" element={<ActiveDirectoryProtection />} />
        <Route path="/ransomware-prevention" element={<RansomwarePrevention />} />
        <Route path="/mssp-enrichments" element={<MsspEnrichments />} />
        <Route path="/vulnerability-research" element={<VulnerabilityResearch />} />
        <Route path="/look-alike-domain-monitoring" element={<LookAlikeDomainDetection />} />
        <Route path="/managed-takedown-services" element={<ManagedTakedown />} />
        <Route path="/supplier-security" element={<SupplierSecurity />} />
        <Route path="/payment-fraud-intelligence" element={<PaymentFraudIntelligence />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/platform-tour" element={<PlatformTour />} />
        <Route path="/demo-center" element={<DemoCenter />} />
        <Route path="/reports" element={<SecurityInsightsPage />} />
        <Route path="/darkweb-mention-monitoring" element={<DarkwebMentionMonitoring />} />
        <Route path="/consumer-protection" element={<ConsumerProtection />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />

        <Route path="/2025-information-stealer-landscape-report" element={<ReportPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
