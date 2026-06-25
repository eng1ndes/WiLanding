import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

import TourSectionAto from "../components/sections/tour/TourSectionAto";
import TrustedBySection from "../components/TrustedBySection";
import StorylaneDemo from "../components/StoryLaneEmbed";
import FooterSection from "../components/FooterSection";

export default function PlatformTour() {
  return (
    <>
    <div className="bg-black text-white">
      <Helmet>
        <title>Platform Tour — See Whiteintel's Dark Web Monitoring in Action</title>
        <meta name="description" content="Take an interactive tour of Whiteintel's threat intelligence platform. See how we detect credential leaks, monitor infostealer logs, and protect your organization in real time." />
        <meta name="keywords" content="Whiteintel platform tour, dark web monitoring demo, credential leak detection, infostealer monitoring, threat intelligence platform" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://whiteintel.io/platform-tour" />
        <meta property="og:title" content="Platform Tour — See Whiteintel in Action" />
        <meta property="og:description" content="Take an interactive tour of Whiteintel's threat intelligence platform. Detect credential leaks, monitor infostealer logs, and protect your organization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/platform-tour" />
        <meta property="og:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/8ac279cf-74e1-46ee-e012-fa3f7dbfa000/w=1200,q=85,format=auto" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="Platform Tour — See Whiteintel in Action" />
        <meta name="twitter:description" content="Interactive tour of Whiteintel's dark web monitoring and credential leak detection platform." />
        <meta name="twitter:image" content="https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/8ac279cf-74e1-46ee-e012-fa3f7dbfa000/w=1200,q=85,format=auto" />
      </Helmet>

      <Navbar  />
      <TourSectionAto />
      <StorylaneDemo />
            <TrustedBySection />
      <FooterSection />
      </div>
    </>
  );
}
