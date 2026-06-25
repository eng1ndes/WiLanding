import { Link } from "react-router-dom";
import { trackFreeSignupClick } from "../utils/conversions";

const THEMES = {
  light: {
    // Section above footer
    sectionBg: "bg-gray-50",
    sectionText: "text-gray-900",

    // CTA card that overlaps footer
    ctaWrap: "border-black/5",
    ctaBg: "bg-white",
    ctaText: "text-gray-900",
    ctaSub: "text-gray-600",
    ctaBtn: "bg-blue-600 text-white hover:bg-blue-700",

    // Footer
    footerBg: "bg-gray-50",
    footerText: "text-gray-800",
    footerMuted: "text-gray-600",
    footerBorder: "border-gray-200",
    footerLink: "hover:text-gray-900",

    // Top curve fill
    curveFill: "fill-white",
  },
  dark: {
    sectionBg: "bg-gray-50",               // keep the featured block white in both themes
    sectionText: "text-gray-900",

    ctaWrap: "border-white/10",
    ctaBg: "bg-[#222c4a]",
    ctaText: "text-white",
    ctaSub: "text-white/80",
    ctaBtn: "bg-blue-600 text-white hover:bg-blue-700",

    footerBg: "bg-[#222c4a]",
    footerText: "text-white",
    footerMuted: "text-white/70",
    footerBorder: "border-white/10",
    footerLink: "hover:text-white",

    curveFill: "fill-gray-50",
  },
};

export default function ContactFooter({ variant = "dark" }) {
  const t = THEMES[variant] ?? THEMES.dark;

  return (
    <>
      {/* Featured Resources Section */}
      <section className={`relative ${t.sectionBg} ${t.sectionText}`}>
        {/* CTA that overlaps into the footer */}
            {variant !== "light" && (
            <div className="absolute left-1/2 bottom-0 z-30 w-full max-w-3xl -translate-x-1/2 translate-y-[30%] px-6">
                <div className={`rounded-2xl border ${t.ctaWrap} ${t.ctaBg} ${t.ctaText} shadow-2xl px-8 py-10 md:px-12 md:py-12`}>
                <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
                    Get Started for <span className="text-blue-500">Free</span>
                </h3>
                <p className={`text-center ${t.ctaSub} max-w-2xl mx-auto mb-6`}>
          Experience Whiteintel, trusted by enterprises, MSSPs, and top researchers for real-time exposure monitoring.
                </p>
                <div className="flex justify-center">
                    <a
                    href="https://platform.whiteintel.io/signup"
                    target="_blank"
                    onClick={trackFreeSignupClick}
                    className={`rounded-lg px-6 py-3 transition shadow-md ${t.ctaBtn}`}
                    >
                      Get a Free Account
                    </a>
                </div>
                </div>
            </div>
            )}
      </section>

      {/* Footer Section */}
      <footer className={`relative ${t.footerBg} ${t.footerText} pt-28 pb-12`}>
        {/* Curve */}
        <div className="pointer-events-none absolute -top-px left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block w-full h-[60px]">
            <path d="M0,120 C240,0 1200,0 1440,120 L1440,0 L0,0 Z" className={t.curveFill} />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h4 className="text-lg font-bold mb-4">Whiteintel</h4>
              <p className={`text-sm ${t.footerMuted} mb-4`}>
                Address: MUSTAFA KEMAL MAH. DUMLUPINAR BLV. NO: 266 A İÇ KAPI NO: 18 ÇANKAYA / ANKARA / Türkiye
              </p>
              <p className={`text-sm ${t.footerMuted} mb-4`}>Inquiries: info@whiteintel.io</p>
              <Link to="/contact" className={`text-blue-500 underline-offset-4 hover:underline text-sm`}>Contact Us</Link>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Platform</h5>
              <ul className={`space-y-2 text-sm ${t.footerMuted}`}>
                <li><Link to="/platform-overview" className={t.footerLink}>Platform Overview</Link></li>
                <li><Link to="/platform-tour" className={t.footerLink}>Platform Tour</Link></li>
                <li><Link to="/pricing" className={t.footerLink}>Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Use Cases</h5>
              <ul className={`space-y-2 text-sm ${t.footerMuted}`}>
                <li><Link to="/ato-prevention" className={t.footerLink}>ATO Prevention</Link></li>
                <li><Link to="/enterprise-protection" className={t.footerLink}>Enterprise Protection</Link></li>
                <li><Link to="/mssp-enrichments" className={t.footerLink}>MSSP Enrichments</Link></li>
                <li><Link to="/vulnerability-research" className={t.footerLink}>For Bug Hunterss</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <ul className={`space-y-2 text-sm ${t.footerMuted}`}>
                <li><a href="https://knowledge.whiteintel.io" target='_blank' className={t.footerLink}>Knowledge Center</a></li>
                <li><a href="https://docs.whiteintel.io" target='_blank' className={t.footerLink}>API Documentation</a></li>
                <li><a href="https://knowledge.whiteintel.io/frequently-asked-questions/faq" target='_blank' className={t.footerLink}>Frequently Asked Questions</a></li>
                <li><a href="https://blog.whiteintel.io" target='_blank' className={t.footerLink}>Blog</a></li>
              </ul>
            </div>
          </div>

          <div className={`mt-10 border-t ${t.footerBorder} pt-6 text-sm ${t.footerMuted} flex flex-col md:flex-row items-center justify-between gap-3`}>
            <span>© {new Date().getFullYear()} Whiteintel. All rights reserved.</span>
            <div className="space-x-4">
              <Link to="/privacy" className={t.footerLink}>Privacy</Link>
              <Link to="/terms" className={t.footerLink}>Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
