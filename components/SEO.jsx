// components/SEO.js
import { Helmet } from "react-helmet-async";

const DEFAULT_IMAGE = "https://imagedelivery.net/d5bS5FFwbZOwgmouc9uS9g/8ac279cf-74e1-46ee-e012-fa3f7dbfa000/w=1200,q=85,format=auto";

export default function SEO({
  title = "Whiteintel – Dark Web Monitoring & Threat Intelligence",
  description = "Whiteintel provides advanced dark web monitoring, credential leak detection, and automated remediation for enterprises, MSSPs, and individuals.",
  keywords = "dark web monitoring, threat intelligence, credential leaks, MSSP, Whiteintel",
  url = "https://whiteintel.io",
  image = DEFAULT_IMAGE,
}) {
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Whiteintel" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Whiteintel" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@whiteintel_io" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
