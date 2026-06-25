// src/pages/PrivacyPage.jsx
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import FeaturedResourcesWithFooter from "../components/FooterSection";

export default function PrivacyPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Helmet>
        <title>Privacy Policy | Whiteintel</title>
        <meta name="description" content="Read Whiteintel's privacy policy. Learn how we collect, use, and protect your data on our dark web monitoring and threat intelligence platform." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | Whiteintel" />
        <meta property="og:url" content="https://whiteintel.io/privacy" />
        <meta property="og:site_name" content="Whiteintel" />
        <link rel="canonical" href="https://whiteintel.io/privacy" />
      </Helmet>
      <Navbar variant="light" solidBg />
      <main className="relative isolate mt-20">
        {/* dotted background (same as ContactPage) */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:18px_18px] opacity-50" />

        <section className="mx-auto max-w-4xl px-6 py-12 lg:py-20">
          <div className="rounded-2xl bg-white p-8 md:p-10 shadow-2xl ring-1 ring-gray-200">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-10">Last Updated: July 2025</p>

            <div className="space-y-10 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Data:</strong> Name, email, company, billing information.</li>
                  <li><strong>Usage Data:</strong> How you interact with the platform (e.g., searches, exports).</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device details, and access logs.</li>
                  <li><strong>Support Data:</strong> Messages or attachments you send when requesting support.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. How We Use Your Data</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve Whiteintel services.</li>
                  <li>To process billing, subscriptions, and prevent fraud.</li>
                  <li>To send transactional communications (e.g., account updates, legal notices).</li>
                  <li>To offer product-related support and respond to inquiries.</li>
                  <li>To perform security monitoring and prevent misuse.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Cookie & Tracking Technologies</h2>
                <p>We do not collect, store or utilize any cookie information.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Sharing</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service providers:</strong> Payment, hosting, analytics, and support integrations.</li>
                  <li><strong>Legal & safety:</strong> When required by law or to protect rights.</li>
                  <li><strong>Business transfers:</strong> In case of acquisition or merger (with notice).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
                <p>
                  We implement industry-standard security measures — encryption at rest and in transit,
                  access controls, regular audits, and secure coding practices. However, no system is
                  bulletproof and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Retention Policy</h2>
                <p>
                  We retain personal data for as long as your account is active or needed for the purposes
                  described in this policy. We may also retain minimal anonymized data for internal analytics
                  after account deletion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Third-Party Analytics & Links</h2>
                <p>
                  We use Google Analytics and other services (e.g., Sentry, Segment) — view their respective
                  privacy terms. Our platform may link to external sites; we are not responsible for
                  third-party practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Children’s Privacy</h2>
                <p>
                  Whiteintel is not directed at children under 16. We do not knowingly collect data from minors.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. You'll be notified via email or platform banner.
                  Continued use implies acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
                <p>
                  For questions about this Privacy Policy, email us at{" "}
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
