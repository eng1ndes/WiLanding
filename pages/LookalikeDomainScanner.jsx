import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import DomainValueProps from "../components/sections/lookalike/ValueProps";
import HowItStopsImpersonation from "../components/sections/lookalike/HowItStopsLookalike";
import DomainCapabilities from "../components/sections/lookalike/Capabilities";
import ROI from "../components/sections/ato/ROI";
import DomainMonitoringHero from "../components/sections/lookalike/Hero";
import FAQSection from "../components/sections/platform/FAQ";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import TrustedBySection from "../components/TrustedBySection";
export default function LookAlikeDomainDetection() {
  return (
    <>
    <div className="bg-black text-white">
      <Helmet>
        <title>Lookalike Domain Detection | Typosquatting & Brand Impersonation Monitoring – Whiteintel</title>
        <meta name="description" content="Detect lookalike domains, typosquatting attempts, and brand impersonations targeting your organization. Whiteintel monitors newly registered domains and phishing infrastructure to protect your brand before employees or customers are deceived." />
        <meta name="keywords" content="lookalike domain detection, typosquatting monitoring, brand impersonation detection, phishing domain monitoring, domain squatting alerts, fake domain detection, brand protection domain, cybersquatting monitoring" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="Lookalike Domain Detection | Typosquatting & Brand Impersonation Monitoring – Whiteintel" />
        <meta property="og:description" content="Detect lookalike domains and brand impersonations targeting your organization. Monitor newly registered domains and phishing infrastructure with Whiteintel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/look-alike-domain-monitoring" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Lookalike Domain Detection | Typosquatting & Brand Impersonation Monitoring – Whiteintel" />
        <meta name="twitter:description" content="Detect lookalike domains and brand impersonations targeting your organization." />
        <link rel="canonical" href="https://whiteintel.io/look-alike-domain-monitoring" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Lookalike Domain Detection",
          "description": "Detect lookalike domains, typosquatting attempts, and brand impersonations. Monitor newly registered domains and phishing infrastructure to protect your brand.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Cybersecurity Threat Intelligence",
          "url": "https://whiteintel.io/look-alike-domain-monitoring"
        }`}</script>
      </Helmet>

      <Navbar  />
      <DomainMonitoringHero />
      <DomainValueProps />
      <HowItStopsImpersonation />
      <DomainCapabilities />
      <TrustedBySection />
      <FAQSection />
      <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}
