import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import whitelogo from "../assets/whiteintel-white-logo-new.png";
import { trackFreeSignupClick } from "../utils/conversions";

export default function FeaturedResourcesWithFooter() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-col bg-[#020617] overflow-x-hidden"> {/* Added overflow-x-hidden to container */}
      
      {/* 1. CTA SECTION */}
      <section className="pt-10 pb-32 px-6 md:px-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Card Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0b1121] text-white">
            
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-50"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-8">
              <div className="text-center md:text-left max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  {t("footer.ctaTitle")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t("footer.ctaTitleHighlight")}</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {t("footer.ctaDescription")}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <a
                    href="https://platform.whiteintel.io/signup"
                    target="_blank"
                    rel="noreferrer"
                    onClick={trackFreeSignupClick}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 border border-white/10"
                 >
                    {t("footer.ctaButton")}
                    <ArrowRight className="w-4 h-4" />
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN FOOTER */}
      <footer className="relative bg-[#020617] text-slate-400 -mt-32 pt-48 pb-12 px-6 md:px-10 overflow-hidden z-0">
      
        {/* --- FOOTER DIVIDER / HORIZON BEAM --- */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-20"></div>
        
        {/* FIX 1: Responsive Widths for Beams */}
        {/* Changed w-[600px] -> w-[300px] md:w-[600px] */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[120px] bg-indigo-600/10 blur-[60px] rounded-full pointer-events-none z-10"></div>
        
        {/* Changed w-[300px] -> w-[200px] md:w-[300px] */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[200px] md:w-[300px] h-[60px] bg-blue-500/10 blur-[40px] rounded-full pointer-events-none z-10"></div>
        {/* ------------------------------------- */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            
            {/* Column 1: Logo & Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={whitelogo} alt="Whiteintel Logo" className="h-8 w-auto" width={120} height={32} />
                <h4 className="text-lg font-bold text-white">Whiteintel</h4>
              </div>
              
              <p className="text-medium text-slate-500 mb-4 leading-relaxed uppercase tracking-wide font-medium">
                MUSTAFA KEMAL MAH. DUMLUPINAR BLV. NO: 266 A İÇ KAPI NO: 18 ÇANKAYA / ANKARA / Türkiye
              </p>
              <p className="text-lg text-slate-500 mb-4">{t("footer.inquiries")} info@whiteintel.io</p>
              <Link to="/contact" className="text-blue-500 underline-offset-4 hover:underline text-lg">{t("footer.contactUs")}</Link>
            </div>

            {/* Column 2: Platform */}
            <div>
              <h5 className="font-semibold text-xl text-white mb-3">{t("footer.platformHeading")}</h5>
              <ul className="space-y-2 text-lg text-slate-500">
                <li><Link to="/platform-overview" className="hover:text-blue-400 transition-colors">{t("footer.platformOverview")}</Link></li>
                <li><Link to="/platform-tour" className="hover:text-blue-400 transition-colors">{t("footer.platformTour")}</Link></li>
                <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">{t("footer.pricing")}</Link></li>
              </ul>
            </div>

            {/* Column 3: Use Cases */}
            <div>
              <h5 className="font-semibold text-white mb-3 text-xl">{t("footer.useCasesHeading")}</h5>
              <ul className="space-y-2 text-lg text-slate-500">
                <li><Link to="/ato-prevention" className="hover:text-blue-400 transition-colors">{t("footer.atoPrevention")}</Link></li>
                <li><Link to="/enterprise-protection" className="hover:text-blue-400 transition-colors">{t("footer.enterpriseProtection")}</Link></li>
                <li><Link to="/consumer-protection" className="hover:text-blue-400 transition-colors">{t("footer.consumerProtection")}</Link></li>
                <li><Link to="/darkweb-mention-monitoring" className="hover:text-blue-400 transition-colors">{t("footer.darkwebMentionMonitoring")}</Link></li>
                <li><Link to="/ransomware-prevention" className="hover:text-blue-400 transition-colors">{t("footer.ransomwarePrevention")}</Link></li>
                <li><Link to="/active-directory-protection" className="hover:text-blue-400 transition-colors">{t("footer.adProtection")}</Link></li>
                <li><Link to="/mssp-enrichments" className="hover:text-blue-400 transition-colors">{t("footer.msspEnrichments")}</Link></li>
                <li><Link to="/vulnerability-research" className="hover:text-blue-400 transition-colors">{t("footer.bugHunters")}</Link></li>
                <li><Link to="/look-alike-domain-monitoring" className="hover:text-blue-400 transition-colors">{t("footer.lookalikeMonitoring")}</Link></li>
                <li><Link to="/managed-takedown-services" className="hover:text-blue-400 transition-colors">{t("footer.managedTakedown")}</Link></li>
                <li><Link to="/payment-fraud-intelligence" className="hover:text-blue-400 transition-colors">{t("footer.paymentFraud")}</Link></li>
                <li><Link to="/supplier-security" className="hover:text-blue-400 transition-colors">{t("footer.supplierSecurity")}</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div>
              <h5 className="font-semibold text-white mb-3 text-xl">{t("footer.resourcesHeading")}</h5>
              <ul className="space-y-2 text-lg text-slate-500">
                <li><a href="https://knowledge.whiteintel.io" target='_blank' rel="noreferrer" className="hover:text-blue-400 transition-colors">{t("footer.knowledgeCenter")}</a></li>
                <li><a href="https://docs.whiteintel.io" target='_blank' rel="noreferrer" className="hover:text-blue-400 transition-colors">{t("footer.apiDocs")}</a></li>
                <li><a href="https://knowledge.whiteintel.io/frequently-asked-questions/faq" target='_blank' rel="noreferrer" className="hover:text-blue-400 transition-colors">{t("footer.faq")}</a></li>
                <li><a href="https://whiteintel.io/blog" target='_blank' rel="noreferrer" className="hover:text-blue-400 transition-colors">{t("footer.blog")}</a></li>
                <li><Link to="/glossary" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-400 transition-colors">{t("footer.glossary")}</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/5 pt-6 text-lg text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
            <span>{t("footer.copyright", { year: currentYear })}</span>
            <div className="space-x-4">
              <Link to="/privacy" className="hover:text-white transition-colors">{t("footer.privacyPolicy")}</Link>
              <Link to="/terms" className="hover:text-white transition-colors">{t("footer.termsOfService")}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}