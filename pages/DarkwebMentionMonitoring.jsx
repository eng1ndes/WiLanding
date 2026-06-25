import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import DarkWebHero from "../components/sections/darkwebmention/Hero";
import Capabilities from "../components/sections/enterprise/Capabilities";
import FAQSection from "../components/sections/platform/FAQ";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import DarkWebValueProps from "../components/sections/darkwebmention/ValueProps";
import DarkWebHowItWorks from "../components/sections/darkwebmention/HowItWorks";
import DarkWebMonitoring from "../components/sections/darkwebmention/Capabilities";

export default function DarkwebMentionMonitoring() {
  return (
    <>
    <div className="bg-black text-white">
      <Helmet>
        <title>Dark Web Brand Monitoring | Detect Darknet Mentions – Whiteintel</title>
        <meta name="description" content="Monitor the dark web for mentions of your brand, domain, executives, and keywords. Whiteintel alerts you when your organization appears on darknet forums, paste sites, or threat actor channels — before it becomes a breach." />
        <meta name="keywords" content="dark web brand monitoring, darknet mention monitoring, dark web brand mentions, dark web threat monitoring, brand impersonation dark web, darknet forum monitoring, threat actor mentions, dark web alerts" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="Dark Web Brand Monitoring | Detect Darknet Mentions – Whiteintel" />
        <meta property="og:description" content="Monitor the dark web for mentions of your brand, domain, and executives. Get alerted when your organization appears on darknet forums or threat actor channels." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/darkweb-mention-monitoring" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Dark Web Brand Monitoring | Detect Darknet Mentions – Whiteintel" />
        <meta name="twitter:description" content="Monitor the dark web for mentions of your brand, domain, and executives. Get alerted when your organization appears on darknet forums." />
        <link rel="canonical" href="https://whiteintel.io/darkweb-mention-monitoring" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Dark Web Brand Monitoring",
          "description": "Monitor the dark web for mentions of your brand, domain, executives, and keywords. Get alerted when your organization appears on darknet forums, paste sites, or threat actor channels.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Cybersecurity Threat Intelligence",
          "url": "https://whiteintel.io/darkweb-mention-monitoring"
        }`}</script>
      </Helmet>

      <Navbar />
      <DarkWebHero />
      <DarkWebValueProps />
      <DarkWebHowItWorks />
      <DarkWebMonitoring />
      <TrustedBySection />
      <FAQSection />
      <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}
