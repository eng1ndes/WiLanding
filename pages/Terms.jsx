// src/pages/TermsPage.jsx
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import FeaturedResourcesWithFooter from "../components/FooterSection";

export default function TermsPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Helmet>
        <title>Terms of Service | Whiteintel</title>
        <meta name="description" content="Read Whiteintel's terms of service. Understand the conditions governing use of our dark web monitoring and threat intelligence platform." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms of Service | Whiteintel" />
        <meta property="og:url" content="https://whiteintel.io/terms" />
        <meta property="og:site_name" content="Whiteintel" />
        <link rel="canonical" href="https://whiteintel.io/terms" />
      </Helmet>
      <Navbar variant="light" solidBg />
      <main className="relative isolate mt-20">
        {/* dotted background (same as ContactPage & PrivacyPage) */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:18px_18px] opacity-50" />

        <section className="mx-auto max-w-4xl px-6 py-12 lg:py-20">
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-2xl ring-1 ring-gray-200">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-10">Effective Date: July 2025</p>

            <div className="space-y-10 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Whiteintel.io ("Service"), you agree to these Terms of Service
                  ("Terms"). If you do not agree, you must not use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Use of Service</h2>
                <p>
                  You agree to use the Service in compliance with all applicable laws. You may not resell,
                  redistribute, or embed the Service&apos;s data unless expressly permitted under your license.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
                <p>
                  Some functionalities require a user account. You are responsible for maintaining
                  confidentiality of your credentials and for all account activity.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Fees and Payment</h2>
                <p>
                  Paid plans (Researcher, Enterprise, Threat Intelligence) are billed as specified in your plan.
                  Fees are non-refundable, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Prohibited Uses</h2>
                <p className="mb-2">
                  You agree not to use the Service for any unlawful or unauthorized purpose. Specifically,
                  you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use Whiteintel to target, harass, or harm individuals or organizations.</li>
                  <li>Attempt to reverse-engineer, scrape, or exploit the platform or its underlying systems.</li>
                  <li>Resell, redistribute, or embed Whiteintel data outside the scope of your license agreement.</li>
                  <li>
                    Use the data for real-world attacks, credential stuffing, or unauthorized system access.
                  </li>
                  <li>Upload or transmit malicious code or content intended to interfere with functionality.</li>
                  <li>Impersonate any person or misrepresent your affiliation with any party.</li>
                  <li>Use Whiteintel in any way that violates applicable laws, regulations, or rights.</li>
                </ul>
                <p className="mt-3">
                  Violations of these restrictions may result in suspension or termination of your access, and
                  may be reported to the appropriate authorities.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
                <p>
                  All content and IP rights related to the Service remain with Whiteintel or its licensors.
                  Trademarks, logos, and copyrighted content may not be used without prior consent.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
                <p>
                  We may suspend or terminate your access for breach or inactivity. You may cancel your
                  subscription at any time, but fees remain non-refundable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Disclaimers & Limitation of Liability</h2>
                <p>
                  The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties. Whiteintel is not
                  liable for damages beyond the amount you’ve paid in the prior 12 months, except in cases
                  of gross negligence or willful misconduct.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the jurisdiction where we operate. Any disputes
                  will be resolved in the courts of that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
                <p>
                  We may update these Terms at any time. Continued use after changes signifies acceptance.
                  We’ll notify you of material updates via email or in-app notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
                <p>
                  If you have any questions, email us at{" "}
                  <a href="mailto:info@whiteintel.io" className="text-blue-600 hover:underline">
                    info@whiteintel.io
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <FeaturedResourcesWithFooter variant="light" />
    </div>
  );
}
