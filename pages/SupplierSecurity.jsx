import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/supplier-security/Hero";
import ValueProps from "../components/sections/supplier-security/ValueProps";
import HowItWorks from "../components/sections/supplier-security/HowItWorks";
import Capabilities from "../components/sections/supplier-security/Capabilities";
import RiskScore from "../components/sections/supplier-security/RiskScore";
import Alerting from "../components/sections/supplier-security/Alerting";
import ClosingCTA from "../components/sections/supplier-security/ClosingCTA";
import FAQ from "../components/sections/supplier-security/FAQ";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesWithFooter from "../components/FooterSection";

export default function SupplierSecurity() {
  return (
    <>
      <div className="bg-black text-white">
        <Helmet>
          <title>Supplier Security | Supply-Chain &amp; Third-Party Risk Monitoring – Whiteintel</title>
          <meta
            name="description"
            content="WhiteIntel Supplier Security continuously monitors your vendors' credential and infrastructure exposure across infostealer logs, combolists, breach databases, and dark web channels. Each supplier gets a 0–100 supply-chain risk score, an A–F grade, a 24-month exposure timeline, and email alerts the moment something new appears — including live MFA-bypassing session cookies and credentials for critical pivot targets (source control, CI/CD, SSO, secrets managers, VPN)."
          />
          <meta
            name="keywords"
            content="supplier security, supply chain risk monitoring, third-party risk monitoring, vendor risk monitoring, supply chain attack prevention, vendor credential exposure, supplier credential monitoring, third-party security score, vendor risk score, supply chain dark web monitoring, infostealer vendor exposure"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Whiteintel" />
          <meta
            property="og:title"
            content="Supplier Security | Supply-Chain &amp; Third-Party Risk Monitoring – Whiteintel"
          />
          <meta
            property="og:description"
            content="Continuous credential and infrastructure exposure monitoring for every supplier in your portfolio, with a 0–100 supply-chain risk score per vendor and email alerts on every new exposure."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://whiteintel.io/supplier-security" />
          <meta property="og:site_name" content="Whiteintel" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@whiteintel_io" />
          <meta
            name="twitter:title"
            content="Supplier Security | Supply-Chain &amp; Third-Party Risk Monitoring – Whiteintel"
          />
          <meta
            name="twitter:description"
            content="Know which of your vendors is compromised before attackers use it against you. Continuous risk scoring + alerts on new exposure."
          />
          <link rel="canonical" href="https://whiteintel.io/supplier-security" />
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Supplier Security",
            "alternateName": ["Supply Chain Risk Monitoring", "Third-Party Risk Monitoring", "Vendor Risk Monitoring"],
            "description": "Continuous credential and infrastructure exposure monitoring for an organization's suppliers and vendors, with a 0–100 supply-chain risk score and A–F grade per vendor refreshed over time. Built from three independent indices (Malware/Stealer, Combolist, Breach), recency-weighted, with a 24-month exposure timeline per supplier and severity-tiered email alerts on every new exposure including live session cookies and critical-application credentials.",
            "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
            "serviceType": "Cybersecurity Threat Intelligence",
            "url": "https://whiteintel.io/supplier-security",
            "audience": {
              "@type": "Audience",
              "audienceType": "Third-Party Risk Teams, Vendor Risk Management, Security Operations"
            }
          }`}</script>
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Supplier Security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Supplier Security is WhiteIntel's third-party risk monitoring module. It continuously watches your suppliers' and vendors' credential and infrastructure exposure across the cybercrime ecosystem (infostealer logs, combolists, breach databases, dark web channels) and assigns each supplier a 0–100 supply-chain risk score with an A–F grade, alerting you the moment a tracked supplier's exposure changes for the worse."
                }
              },
              {
                "@type": "Question",
                "name": "How is the supply-chain risk score calculated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The score is built from three independent indices: a Malware/Stealer Index (employees infected by infostealers, including live session cookies), a Combolist Index (corporate credentials circulating in combolists), and a Breach Index (exposure in third-party breach databases). Each supplier's score is recency-weighted (recent exposure matters more than old) and refreshed continuously, with a 24-month exposure timeline per supplier so trends are visible."
                }
              },
              {
                "@type": "Question",
                "name": "What does critical application exposure mean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Critical application exposure flags when a supplier's employees leak credentials for high-value pivot targets that attackers use to escalate a supply-chain attack: source control (GitHub, GitLab, Bitbucket), CI/CD and artifact registries (Jenkins, CircleCI, JFrog, npm, PyPI, Docker), identity and SSO providers (Okta, Auth0, OneLogin, Ping), secrets managers (Vault, 1Password), and VPN/remote access. These credentials are weighted heavily in the risk score because their compromise enables direct supply-chain pivoting."
                }
              },
              {
                "@type": "Question",
                "name": "How does WhiteIntel detect live session cookies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every infostealer log includes the victim's browser cookie store. WhiteIntel ingests millions of infostealer logs continuously and extracts active session cookies tied to corporate systems for the suppliers you track. Active session cookies bypass MFA on replay, so we surface the compromised machine, the application the cookie is valid for, and the status so your team can force session revocation before a buyer replays it."
                }
              },
              {
                "@type": "Question",
                "name": "What kinds of alerts will I receive?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email alerts fire only on genuinely new findings. The platform sends a critical alert for new critical-application exposures and new live session cookies, and a notable alert for a worsening grade or score since the last check. Alerts are de-duplicated and severity-tiered so the high-stakes events stay visible without inbox noise."
                }
              },
              {
                "@type": "Question",
                "name": "How many suppliers can I track?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tracked supplier count is plan-based. Enterprise plans include 64 suppliers, Threat Intelligence includes 128, and Extended Threat Intelligence includes 256."
                }
              },
              {
                "@type": "Question",
                "name": "What data sources feed Supplier Security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Infostealer logs (millions of infected-machine logs across active families like Lumma, StealC, Vidar, Redline, Raccoon), credential combolists, third-party breach databases, dark web and Telegram channel monitoring, and browser session/cookie data extracted directly from stealer logs."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Supplier Security for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Third-party and vendor risk teams, security teams running supply-chain risk management programs, and anyone who needs early warning before a supplier breach reaches them."
                }
              }
            ]
          }`}</script>
        </Helmet>

        <Navbar />
        <Hero />
        <ValueProps />
        <HowItWorks />
        <Capabilities />
        <RiskScore />
        <Alerting />
        <TrustedBySection />
        <FAQ />
        <ClosingCTA />
        <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}
