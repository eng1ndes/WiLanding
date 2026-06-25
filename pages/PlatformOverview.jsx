import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/platform/HeroSection";
import TrustedBySection from "../components/TrustedBySection";
import ValueCards from "../components/sections/platform/ValueCards";
import HowItWorks from "../components/sections/platform/HowItWorks";
import StorylaneDemo from "../components/StoryLaneEmbed";
import Coverage from "../components/sections/platform/Coverage";
import SEO from "../components/SEO";
import FAQSection from "../components/sections/platform/FAQ";
import FeaturedResourcesWithFooter from "../components/FooterSection";
import PlatformDifferentiators from "../components/sections/platform/PlatformDifferentiators";



export default function PlatformOverview() {
  return (
    <>
  <div className="bg-black text-white">
    <SEO
      title="Whiteintel Platform Overview – External Threat Surface & Dark Web Intelligence"
      description="Gain full visibility into your dark web exposure with Whiteintel’s platform. Monitor dark web leaks, breaches, and infostealer infections, and take decisive action before damage occurs."
      url="https://whiteintel.io/platform-overview"
    />


      <Navbar />
      <HeroSection />
      <ValueCards />
      <HowItWorks />
      
      <Coverage />
      <PlatformDifferentiators />
      <StorylaneDemo />
      <TrustedBySection />
      <FAQSection />
      <FeaturedResourcesWithFooter />
      </div>
    </>
  );
}
