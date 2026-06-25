import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Capabilities from "../components/sections/enterprise/Capabilities";
import FAQSection from "../components/sections/platform/FAQ";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import DarkWebValueProps from "../components/sections/darkwebmention/ValueProps";
import DarkWebHowItWorks from "../components/sections/darkwebmention/HowItWorks";
import DarkWebMonitoring from "../components/sections/darkwebmention/Capabilities";
import ConsumerProtectionHero from "../components/sections/consumer/Hero";
import ConsumerProtectionValueProps from "../components/sections/consumer/ValueProps";
import ConsumerProtectionHowItWorksLight from "../components/sections/consumer/HowItWorks";
import ConsumerProtectionFeatures from "../components/sections/consumer/Capabilities";
export default function ConsumerProtection() {
  return (
    <>
    <div className="bg-black text-white">
      <Helmet>
        <title>Consumer Credential Protection | Dark Web Monitoring for Customer Accounts – Whiteintel</title>
        <meta name="description" content="Protect your customers from credential theft and account takeovers. Whiteintel monitors dark web marketplaces and stealer logs for your users' compromised credentials — so you can notify and protect them before attackers strike." />
        <meta name="keywords" content="consumer credential protection, customer account takeover prevention, dark web monitoring for consumers, stolen customer credentials, user data breach detection, consumer identity protection, credential stuffing prevention, customer data leak monitoring" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Whiteintel" />
        <meta property="og:title" content="Consumer Credential Protection | Dark Web Monitoring for Customer Accounts – Whiteintel" />
        <meta property="og:description" content="Protect your customers from credential theft and account takeovers. Monitor dark web marketplaces and stealer logs for compromised user credentials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/consumer-protection" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/c2e4c339-1bd9-427b-9bfc-5e721d95be00/w=1200,q=85" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Consumer Credential Protection | Dark Web Monitoring for Customer Accounts – Whiteintel" />
        <meta name="twitter:description" content="Protect your customers from credential theft and account takeovers. Monitor dark web marketplaces for compromised user credentials." />
        <link rel="canonical" href="https://whiteintel.io/consumer-protection" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consumer Credential Protection",
          "description": "Protect your customers from credential theft and account takeovers. Monitor dark web marketplaces and stealer logs for compromised user credentials.",
          "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
          "serviceType": "Cybersecurity Threat Intelligence",
          "url": "https://whiteintel.io/consumer-protection"
        }`}</script>
      </Helmet>

      <Navbar />
      <ConsumerProtectionHero />
      <ConsumerProtectionValueProps />
      <ConsumerProtectionHowItWorksLight />
      <ConsumerProtectionFeatures />
      <TrustedBySection />
      <FAQSection />
      <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}
