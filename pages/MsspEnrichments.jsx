import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/mssp/Hero";
import ValueProps from "../components/sections/mssp/ValueProps";
import HowItWorks from "../components/sections/mssp/HowItWorksMssp";
import Capabilities from "../components/sections/mssp/Capabilities";
import FAQSection from "../components/sections/platform/FAQ";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import TrustedBySection from "../components/TrustedBySection";

export default function MsspEnrichments() {
  return (
    <>
     <div className="bg-black text-white">
      <Helmet>
        <title>MSSP Dark Web Intelligence | Threat Enrichment API for Managed Security – Whiteintel</title>
        <meta name="description" content="Enrich your MSSP platform with real-time dark web intelligence. Whiteintel delivers multi-tenant credential leak monitoring, stealer log feeds, and breach data via API — purpose-built for managed security providers." />
        <meta name="keywords" content="MSSP dark web intelligence, managed security provider threat intelligence, MSSP credential monitoring, dark web API MSSP, EASM enrichment, threat intelligence API, stealer log API, managed detection dark web" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="MSSP Dark Web Intelligence | Threat Enrichment API for Managed Security – Whiteintel" />
        <meta property="og:description" content="Enrich your MSSP platform with real-time dark web intelligence. Multi-tenant credential leak monitoring and breach data via API." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/mssp-enrichments" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="MSSP Dark Web Intelligence | Threat Enrichment API – Whiteintel" />
        <meta name="twitter:description" content="Enrich your MSSP platform with real-time dark web intelligence. Multi-tenant credential leak monitoring and breach data via API." />
        <link rel="canonical" href="https://whiteintel.io/mssp-enrichments" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "MSSP Dark Web Intelligence Enrichment",
          "description": "Enrich your MSSP platform with real-time dark web intelligence. Multi-tenant credential leak monitoring, stealer log feeds, and breach data via API — purpose-built for managed security providers.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Cybersecurity Threat Intelligence API",
          "url": "https://whiteintel.io/mssp-enrichments"
        }`}</script>
      </Helmet>

      <Navbar solidBg />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Capabilities />
      <TrustedBySection />
      <FAQSection />
      <FeaturedResourcesWithFooter />

      </div>
    </>
  );
}
