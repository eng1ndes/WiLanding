import { useState } from "react";
import FeaturesSection from "../components/FeaturesSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TrustedBySection from "../components/TrustedBySection";
import HowItWorks from "../components/HowItWorks";
import SEO from "../components/SEO";
import SecurityInsightsModal from "../components/SecurityInsightsModal";
import { Users, Lock, AppWindowMac } from "lucide-react";


const HomePage = () => {
  const [open, setOpen] = useState(false);

  // 🔹 Mock API response
  const mockData = {
    domain: "cimri.com",
    consumer: {
      title: "Consumer Breaches",
      lastIncident: "9 Aug 2025",
      risk: "High",
      metrics: [
        { value: "1000+", label: "Affected Consumers", icon: <Users size={18} /> },
        { value: "1000+", label: "Stolen Passwords", icon: <Lock size={18} /> },
        { value: "10+", label: "Affected Apps", icon: <AppWindowMac size={18} /> },
      ],
    },
    corporate: {
      title: "Corporate Breaches",
      lastIncident: "17 Jul 2025",
      risk: "High",
      metrics: [
        { value: "36", label: "Affected Employees", icon: <Users size={18} /> },
        { value: "36", label: "Stolen Passwords", icon: <Lock size={18} /> },
        { value: "10+", label: "Affected Apps", icon: <AppWindowMac size={18} /> },
      ],
    },
  };

  return (
    <>
      <SEO
        title="Whiteintel – Dark Web Monitoring & Threat Intelligence"
        description="Detect and respond to credential leaks with real-time alerts, API integrations, and automated remediation."
        url="https://whiteintel.io"
      />
      <Navbar />
      <HeroSection />

      <TestimonialsSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />

      <TrustedBySection />
      <FooterSection />

      {/* Modal */}
      <SecurityInsightsModal
        open={open}
        onClose={() => setOpen(false)}
        domain={mockData.domain}
        consumer={mockData.consumer}
        corporate={mockData.corporate}
      />
    </>
  );
};

export default HomePage;
