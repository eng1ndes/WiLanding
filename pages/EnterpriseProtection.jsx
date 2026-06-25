import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/enterprise/Hero";
import ValueProps from "../components/sections/enterprise/ValueProps";
import HowItWorks from "../components/sections/enterprise/HowItWorks";
import Capabilities from "../components/sections/enterprise/Capabilities";
import FAQSection from "../components/sections/platform/FAQ";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesWithFooter from "../components/FooterSection";

export default function EnterpriseProtection() {
  return (
    <>
    <div className="bg-black text-white">
      <Helmet>
        <title>Enterprise Dark Web Monitoring | Employee Credential Leak Detection – Whiteintel</title>
        <meta name="description" content="Protect your workforce from credential-based attacks. Whiteintel monitors dark web sources and stealer logs 24/7 to detect leaked employee credentials, session tokens, and corporate identity data before attackers exploit them." />
        <meta name="keywords" content="enterprise dark web monitoring, employee credential leak detection, corporate identity protection, stealer log monitoring, session token theft, dark web employee credentials, credential exposure monitoring, enterprise threat intelligence" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="Enterprise Dark Web Monitoring | Employee Credential Leak Detection – Whiteintel" />
        <meta property="og:description" content="Protect your workforce from credential-based attacks. Detect leaked employee credentials, session tokens, and corporate identity data with Whiteintel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/enterprise-protection" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Enterprise Dark Web Monitoring | Employee Credential Leak Detection – Whiteintel" />
        <meta name="twitter:description" content="Protect your workforce from credential-based attacks. Detect leaked employee credentials, session tokens, and corporate identity data with Whiteintel." />
        <link rel="canonical" href="https://whiteintel.io/enterprise-protection" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Enterprise Dark Web Monitoring",
          "description": "Protect your workforce from credential-based attacks. Whiteintel monitors dark web sources and stealer logs 24/7 to detect leaked employee credentials, session tokens, and corporate identity data.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Cybersecurity Threat Intelligence",
          "url": "https://whiteintel.io/enterprise-protection"
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
