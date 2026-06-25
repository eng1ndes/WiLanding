import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/ransomwarePrevention/Hero";
import ValueProps from "../components/sections/ransomwarePrevention/ValueProps";
import HowItWorks from "../components/sections/ransomwarePrevention/HowItWorks";
import Capabilities from "../components/sections/ransomwarePrevention/Capabilities";
import FAQSection from "../components/sections/platform/FAQ";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesWithFooter from "../components/FooterSection";

export default function RansomwarePrevention() {
  return (
    <>
    <div className="bg-black text-white">
      <Helmet>
        <title>Ransomware Prevention | Stop Attacks Before They Start – Whiteintel</title>
        <meta name="description" content="Detect ransomware precursors before attackers strike. Whiteintel monitors dark web forums, initial access broker listings, and stealer logs to alert you the moment your organization is targeted." />
        <meta name="keywords" content="ransomware prevention, ransomware detection, initial access broker monitoring, dark web ransomware, pre-ransomware alerts, stealer log monitoring, credential leak ransomware, threat intelligence ransomware" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="Ransomware Prevention | Stop Attacks Before They Start – Whiteintel" />
        <meta property="og:description" content="Detect ransomware precursors before attackers strike. Monitor initial access broker listings and dark web forums with Whiteintel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/ransomware-prevention" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Ransomware Prevention | Stop Attacks Before They Start – Whiteintel" />
        <meta name="twitter:description" content="Detect ransomware precursors before attackers strike. Monitor initial access broker listings and dark web forums with Whiteintel." />
        <link rel="canonical" href="https://whiteintel.io/ransomware-prevention" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Ransomware Prevention",
          "description": "Detect ransomware precursors before attackers strike. Whiteintel monitors dark web forums, initial access broker listings, and stealer logs to alert you the moment your organization is targeted.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Cybersecurity Threat Intelligence",
          "url": "https://whiteintel.io/ransomware-prevention"
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
