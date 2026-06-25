import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/ad/Hero";
import ValueProps from "../components/sections/ad/ValueProps";
import HowItWorks from "../components/sections/ad/HowItWorks";
import Capabilities from "../components/sections/ad/Capabilities";
import FAQSection from "../components/sections/platform/FAQ";
import FeaturedResourcesWithFooter from "../components/FooterSection";
export default function ActiveDirectoryProtection() {
  return (
    <>
     <div className="bg-black text-white">
      <Helmet>
        <title>Active Directory Protection | Detect Compromised AD Credentials – Whiteintel</title>
        <meta name="description" content="Detect compromised Active Directory credentials from dark web sources before attackers move laterally. Whiteintel correlates leaked hostnames, IPs, and credentials directly to your AD users and endpoints." />
        <meta name="keywords" content="Active Directory protection, compromised AD credentials, dark web AD monitoring, credential leak Active Directory, lateral movement prevention, AD identity protection, domain credential exposure, enterprise identity security" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="Active Directory Protection | Detect Compromised AD Credentials – Whiteintel" />
        <meta property="og:description" content="Detect compromised Active Directory credentials from dark web sources before attackers move laterally. Whiteintel correlates leaked credentials to your AD users and endpoints." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/active-directory-protection" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Active Directory Protection | Detect Compromised AD Credentials – Whiteintel" />
        <meta name="twitter:description" content="Detect compromised Active Directory credentials from dark web sources before attackers move laterally." />
        <link rel="canonical" href="https://whiteintel.io/active-directory-protection" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Active Directory Protection",
          "description": "Detect compromised Active Directory credentials from dark web sources before attackers move laterally. Correlate leaked hostnames, IPs, and credentials to your AD users and endpoints.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Cybersecurity Threat Intelligence",
          "url": "https://whiteintel.io/active-directory-protection"
        }`}</script>
      </Helmet>

      <Navbar solidBg />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Capabilities />
      <FAQSection />
      <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}
