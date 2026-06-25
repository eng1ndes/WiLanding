import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/payment-fraud/Hero";
import ValueProps from "../components/sections/payment-fraud/ValueProps";
import HowItWorks from "../components/sections/payment-fraud/HowItWorks";
import Capabilities from "../components/sections/payment-fraud/Capabilities";
import DataCoverage from "../components/sections/payment-fraud/DataCoverage";
import UseCases from "../components/sections/payment-fraud/UseCases";
import ClosingCTA from "../components/sections/payment-fraud/ClosingCTA";
import FAQ from "../components/sections/payment-fraud/FAQ";
import TrustedBySection from "../components/TrustedBySection";
import FeaturedResourcesWithFooter from "../components/FooterSection";

export default function PaymentFraudIntelligence() {
  return (
    <>
      <div className="bg-black text-white">
        <Helmet>
          <title>Stolen Card &amp; BIN Monitoring | Payment Fraud Intelligence – Whiteintel</title>
          <meta
            name="description"
            content="WhiteIntel Payment Fraud Intelligence indexes compromised cards from carding shops, infostealer logs, and dark web channels. Validate any card against the exposed-card index in real time, watchlist up to 256 BINs for new exposure, and get rich issuer attribution (bank, country, network, type, tier, expiry) plus validity computed at query time. Built for acquirers, issuers, PSPs, and fraud teams that need stolen-card and BIN monitoring inside their existing authorization stack."
          />
          <meta
            name="keywords"
            content="stolen card monitoring, bin monitoring, compromised card detection, payment fraud intelligence, carding shop monitoring, dark web card monitoring, bin watchlist, card validity check, fraud prevention api, exposed card index, issuer chargeback prevention, card data enrichment"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Whiteintel" />
          <meta
            property="og:title"
            content="Stolen Card &amp; BIN Monitoring | Payment Fraud Intelligence – Whiteintel"
          />
          <meta
            property="og:description"
            content="Validate cards against the WhiteIntel exposed-card index in real time. Watchlist your BINs for new compromised cards. Block fraud before the authorization response."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://whiteintel.io/payment-fraud-intelligence" />
          <meta property="og:site_name" content="Whiteintel" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@whiteintel_io" />
          <meta
            name="twitter:title"
            content="Stolen Card &amp; BIN Monitoring | Payment Fraud Intelligence – Whiteintel"
          />
          <meta
            name="twitter:description"
            content="Real-time compromised-card validation and BIN-level monitoring for fraud teams."
          />
          <link rel="canonical" href="https://whiteintel.io/payment-fraud-intelligence" />
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Payment Fraud Intelligence",
            "alternateName": ["Stolen Card Monitoring", "BIN Monitoring", "Compromised Card Intelligence"],
            "description": "Real-time compromised-card validation and BIN-level monitoring. Validates any card against an indexed exposed-card corpus aggregated from carding shops, infostealer logs, and dark web channels. Returns BIN-6, BIN-8, last-4, issuer bank, issuer country, card network, card type, card tier, expiry, and a validity status computed at query time. Supports a 256-BIN watchlist with severity-tiered email alerts on new compromised cards. Available via UI and API.",
            "provider": { "@type": "Organization", "name": "Whiteintel", "url": "https://whiteintel.io" },
            "serviceType": "Payment Fraud Intelligence",
            "url": "https://whiteintel.io/payment-fraud-intelligence",
            "audience": {
              "@type": "Audience",
              "audienceType": "Fraud Operations, Acquirers, Card Issuers, Payment Service Providers"
            }
          }`}</script>
          <script type="application/ld+json">{`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Payment Fraud Intelligence?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Payment Fraud Intelligence is WhiteIntel's compromised-card monitoring module. It indexes stolen cards surfacing across carding shops, underground markets, infostealer logs, and dark web channels, enriches every match with BIN-level data (issuer, country, network, type, tier, expiry), computes validity at query time, and lets fraud teams validate cards in real time or watchlist their own BINs for new exposure."
                }
              },
              {
                "@type": "Question",
                "name": "What data is returned per card?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every match returns BIN-6, BIN-8, last-4, issuer bank, issuer country, card network (Visa, MasterCard, Amex, Discover, JCB, UnionPay), card type (credit, debit, prepaid, charge), card tier (consumer, business, premium, corporate, platinum, gold), expiry date when present in the source, a validity status computed at query time, and source attribution with first-seen and last-seen timestamps."
                }
              },
              {
                "@type": "Question",
                "name": "How is card validity determined?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Validity is computed every time you query the index, not stored as a stale snapshot. The signal weights how recently the card surfaced, whether it has been re-listed, the card's stated expiry date relative to today, and any issuer reissue signals we can see."
                }
              },
              {
                "@type": "Question",
                "name": "What is a BIN watchlist?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A BIN watchlist is a list of BIN-6 or BIN-8 prefixes (up to 256 per account) representing the cards you issue, accept, or sponsor. Once a BIN is on the watchlist, any new compromised card detected with that prefix triggers an email alert."
                }
              },
              {
                "@type": "Question",
                "name": "Where does the compromised-card data come from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The index aggregates cards from carding shops on the dark web, underground marketplaces, infostealer logs (millions of infected-machine logs across active families like Lumma, StealC, Vidar, Redline, Raccoon), dark web and Telegram channel monitoring, and direct seller feeds."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Payment Fraud Intelligence for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Acquirers, merchants, and PSPs running pre-transaction validation. Card issuers and banks monitoring their own BIN ranges for chargeback prevention. Fraud-operations teams that need a real-time exposed-card signal next to their existing scoring stack."
                }
              },
              {
                "@type": "Question",
                "name": "How does pricing work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Payment Fraud Intelligence is available as an add-on at $17,500 USD per year (annual only) for Enterprise and Threat Intelligence plans, with 15,000 UI searches per month, 100 API calls per day, and a 256-BIN watchlist. On Extended Threat Intelligence the capability is bundled with 500 UI searches per day and 1000 API calls per day."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this at authorization time without latency penalties?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The /cards/check endpoint is designed for sub-second response so it sits comfortably inside an authorization pipeline. The standard pattern is to call it as a parallel signal alongside your existing fraud-score model, then combine the WhiteIntel compromised flag with your model's score in your decision logic."
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
        <DataCoverage />
        <UseCases />
        <TrustedBySection />
        <FAQ />
        <ClosingCTA />
        <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}
