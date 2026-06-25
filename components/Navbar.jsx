import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { trackFreeSignupClick, trackDemoBookedClick } from "../utils/conversions";
import { useTranslation } from "react-i18next";
import whitelogo from "../assets/whiteintel-white-logo-new.png";
import blacklogo from "../assets/whiteintel-black-logo-new.png";
import {
  PiUserCircleThin,
  PiCaretDownBold,
  PiXBold,
  PiListBold
} from "react-icons/pi";
import {
  LayoutDashboard,
  PlayCircle,
  ShieldAlert,
  Building2,
  Network,
  Lock,
  Briefcase,
  Bug,
  BookOpen,
  Code2,
  Globe,
  Scissors,
  HelpCircle,
  User,
  Eye,
  Newspaper,
  ArrowRight,
  Boxes,
  CreditCard,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";


// --- CONFIGURATION ---

function useMenus() {
  const { t } = useTranslation("common");
  return {
    // PLATFORM — the product + resources, one flat list (no column headings).
    platform: {
      width: "w-[860px]",
      gridCols: "grid-cols-3",
      columns: [
        {
          heading: "",
          colSpan: "col-span-2",
          items: [
            { icon: LayoutDashboard, label: t("megamenu.platformOverview"), desc: t("megamenu.platformOverviewDesc"), href: "/platform-overview" },
            { icon: PlayCircle, label: t("megamenu.platformTour"), desc: t("megamenu.platformTourDesc"), href: "/platform-tour" },
            { icon: BookOpen, label: t("megamenu.knowledgeCenter"), desc: t("megamenu.knowledgeCenterDesc"), href: "https://knowledge.whiteintel.io" },
            { icon: Code2, label: t("megamenu.apiDocs"), desc: t("megamenu.apiDocsDesc"), href: "https://docs.whiteintel.io" },
            { icon: Newspaper, label: t("megamenu.blog"), desc: t("megamenu.blogDesc"), href: "https://whiteintel.io/blog" },
            { icon: BookOpen, label: t("megamenu.glossary"), desc: t("megamenu.glossaryDesc"), href: "/glossary" },
            { icon: HelpCircle, label: t("megamenu.faq"), desc: t("megamenu.faqDesc"), href: "https://knowledge.whiteintel.io/frequently-asked-questions/faq" },
          ],
        },
      ],
      cta: {
        eyebrow: "Get started",
        title: "Start monitoring in minutes",
        body: "Create a free account and see your exposure. No credit card required.",
        primary: { label: "Start for free", href: "https://platform.whiteintel.io/signup" },
        secondary: { label: "Book a demo", href: "https://calendly.com/whiteintel-sales" },
      },
    },
    // USE CASES — everything you do with WhiteIntel, one flat list (no headings).
    useCases: {
      width: "w-[1120px]",
      gridCols: "grid-cols-4",
      columns: [
        {
          heading: "",
          colSpan: "col-span-3",
          items: [
            { icon: User, label: t("megamenu.consumerProtection"), desc: t("megamenu.consumerProtectionDesc"), href: "/consumer-protection" },
            { icon: Building2, label: t("megamenu.enterpriseProtection"), desc: t("megamenu.enterpriseProtectionDesc"), href: "/enterprise-protection" },
            { icon: Eye, label: t("megamenu.darkwebMentionMonitoring"), desc: t("megamenu.darkwebMentionMonitoringDesc"), href: "/darkweb-mention-monitoring" },
            { icon: Boxes, label: "Supplier Security", desc: "Vendor exposure from leaks and stealer logs.", href: "/supplier-security" },
            { icon: CreditCard, label: "Payment Fraud Intelligence", desc: "Detect stolen cards and BINs exposed on the dark web.", href: "/payment-fraud-intelligence" },
            { icon: Globe, label: t("megamenu.lookalikeMonitoring"), desc: t("megamenu.lookalikeMonitoringDesc"), href: "/look-alike-domain-monitoring" },
            { icon: Scissors, label: t("megamenu.managedTakedown"), desc: t("megamenu.managedTakedownDesc"), href: "/managed-takedown-services" },
            { icon: ShieldAlert, label: t("megamenu.atoPrevention"), desc: t("megamenu.atoPreventionDesc"), href: "/ato-prevention" },
            { icon: Briefcase, label: t("megamenu.msspEnrichments"), desc: t("megamenu.msspEnrichmentsDesc"), href: "/mssp-enrichments" },
            { icon: Lock, label: t("megamenu.ransomwarePrevention"), desc: t("megamenu.ransomwarePreventionDesc"), href: "/ransomware-prevention" },
            { icon: Network, label: t("megamenu.adProtection"), desc: t("megamenu.adProtectionDesc"), href: "/active-directory-protection" },
            { icon: Bug, label: t("megamenu.vulnResearch"), desc: t("megamenu.vulnResearchDesc"), href: "/vulnerability-research" },
          ],
        },
      ],
      cta: {
        eyebrow: "Get started",
        title: "See what's exposed",
        body: "Run your first search free. No credit card required.",
        primary: { label: "Start for free", href: "https://platform.whiteintel.io/signup" },
        secondary: { label: "Book a demo", href: "https://calendly.com/whiteintel-sales" },
      },
    },
  };
}

const THEMES = {
  light: {
    navBg: "bg-white/90 backdrop-blur-xl border-gray-200 shadow-sm",
    textMain: "text-slate-900",
    textMuted: "text-slate-600",
    textHover: "hover:text-blue-600",
    mobileToggle: "text-slate-900 hover:bg-slate-100",
    panelBg: "bg-white/95 backdrop-blur-xl border-gray-200 shadow-2xl",
    itemHover: "hover:bg-slate-50",
    headingText: "text-blue-600",
    ctaBg: "bg-gray-50 border-gray-100",
    mobileBg: "bg-white",
    mobileTextMain: "text-slate-900",
    mobileTextSub: "text-slate-500",
    mobileBorder: "border-gray-200",
    mobileIcon: "text-slate-400",
    loginBtn: "text-slate-600 hover:text-blue-600 hover:bg-slate-100",
    ctaPrimary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20",
    ctaSecondary: "bg-[#ff5120] text-white hover:bg-[#e2471d] shadow-md shadow-orange-500/20",
  },
  dark: {
    navBg: "bg-gradient-to-r from-[#020617] via-[#0b1228] to-[#020617] backdrop-blur-xl border-white/5 shadow-lg",
    textMain: "text-white",
    textMuted: "text-slate-300",
    textHover: "hover:text-white",
    mobileToggle: "text-white hover:bg-white/10",
    panelBg: "bg-[#020617]/95 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/80", 
    itemHover: "hover:bg-white/5",
    headingText: "text-blue-400",
    ctaBg: "bg-[#0b1229] border-white/5",
    mobileBg: "bg-[#020617]",
    mobileTextMain: "text-white",
    mobileTextSub: "text-slate-400",
    mobileBorder: "border-white/10",
    mobileIcon: "text-slate-400",
    loginBtn: "text-slate-300 hover:text-white hover:bg-white/10",
    ctaPrimary: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]",
    ctaSecondary: "px-5 py-2.5 rounded-full text-sm font-bold transition-all bg-gradient-to-r from-[#ff5120] to-[#d9380b] hover:from-[#ff6b42] hover:to-[#e63b0a] text-white shadow-[0_0_20px_-5px_rgba(255,81,32,0.5)]",
  },
};

// --- MAIN COMPONENT ---

export default function Navbar({ variant = "dark", solidBg = false }) {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeVariant, setActiveVariant] = useState(variant);

  const { t: tr } = useTranslation("common");
  const MENUS = useMenus();
  const t = THEMES[activeVariant] ?? THEMES.dark;
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    const close = (e) => {
      if (!document.getElementById("nav-root")?.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setOpenMobile(false);
  }, [location.pathname]);

  // Body scroll lock with cleanup: without the cleanup function, navigating
  // away while the menu is open leaves body overflow stuck on "hidden".
  useEffect(() => {
    if (!openMobile) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  return (
    <>
      <header
        id="nav-root"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          (scrolled || solidBg) ? t.navBg : "bg-transparent border-transparent"
        }`}
      >
        {/* Indigo light-beam underline (dark theme), same accent as the section
            dividers — gives the bar some life instead of a flat edge. */}
        {(scrolled || solidBg) && activeVariant !== "light" && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            
            {/* 1. LOGO */}
            <Link to="/" className="flex items-center gap-2 shrink-0 z-50 relative">
              <img
                src={activeVariant === "light" ? blacklogo : whitelogo}
                alt="Whiteintel"
                className="h-9 w-auto lg:h-10"
                width={160}
                height={40}
              />
              <span className={`text-xl lg:text-2xl font-extrabold tracking-tight ${t.textMain}`}>
                Whiteintel
              </span>
            </Link>

            {/* 2. DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1 h-full">
              <MegaTrigger label={tr("nav.platform")} menuKey="platform" openMenu={openMenu} setOpenMenu={setOpenMenu} t={t} MENUS={MENUS} />
              <MegaTrigger label={tr("nav.useCases")} menuKey="useCases" openMenu={openMenu} setOpenMenu={setOpenMenu} t={t} MENUS={MENUS} />
              <NavLink label={tr("nav.demoCenter")} href="/demo-center" t={t} />
              <NavLink label={tr("nav.pricing")} href="/pricing" t={t} />
              <NavLink label={tr("nav.contact")} href="/contact" t={t} />
            </nav>

            {/* 3. RIGHT ACTIONS */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher variant={activeVariant} />
              <button
                onClick={() => window.open("https://platform.whiteintel.io/", "_blank")}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-md font-semibold transition-colors ${t.loginBtn}`}
              >
                <PiUserCircleThin className="w-5 h-5" />
                {tr("nav.login")}
              </button>
            <button
              onClick={() => {
                trackFreeSignupClick();
                window.open("https://platform.whiteintel.io/signup", "_blank");
              }}
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 border border-white/10"
            >
              {tr("nav.getStarted")}
            </button>
<button
  onClick={() => {
    trackDemoBookedClick();
    window.open("https://calendly.com/whiteintel-sales", "_blank");
  }}
  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${t.ctaSecondary}`}
>
  {tr("nav.scheduleCall")}
</button>
            </div>

            {/* 4. MOBILE TOGGLE */}
            <button
              onClick={() => setOpenMobile(!openMobile)}
              aria-label={openMobile ? "Close menu" : "Open menu"}
              aria-expanded={openMobile}
              className={`lg:hidden p-2 rounded-lg z-[60] relative transition-colors ${t.mobileToggle}`}
            >
              {openMobile ? <PiXBold className="w-6 h-6" /> : <PiListBold className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY — portaled to <body> so no page wrapper (transform,
          overflow, stacking context) can bury it or break its fixed positioning.
          Always dark glass regardless of navbar variant. */}
      {createPortal(
        <div
          className={`fixed inset-0 z-[80] lg:hidden ${openMobile ? "" : "pointer-events-none"}`}
          aria-hidden={!openMobile}
        >
          <div
            className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out ${
              openMobile ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              background: "linear-gradient(180deg, rgba(15,23,42,0.97) 0%, rgba(8,13,28,0.99) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Panel header: logo + close, self-contained so closing never
                depends on the page header underneath */}
            <div
              className="flex items-center justify-between h-[72px] px-6"
              style={{ borderBottom: "1px solid rgba(99,102,241,0.12)" }}
            >
              <Link to="/" onClick={() => setOpenMobile(false)} className="flex items-center gap-2">
                <img src={whitelogo} alt="Whiteintel" className="h-8 w-auto" width={160} height={40} />
                <span className="text-lg font-extrabold tracking-tight text-white">Whiteintel</span>
              </Link>
              <button
                onClick={() => setOpenMobile(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <PiXBold className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6 pt-6 pb-24">
              <MobileMenuSection title={tr("nav.platform")} menu={MENUS.platform} setOpenMobile={setOpenMobile} />
              <div style={{ borderTop: "1px solid rgba(99,102,241,0.12)" }} />
              <MobileMenuSection title={tr("nav.useCases")} menu={MENUS.useCases} setOpenMobile={setOpenMobile} />
              <div style={{ borderTop: "1px solid rgba(99,102,241,0.12)" }} />

              <div className="flex flex-col gap-4 text-[17px] font-semibold text-white">
                <Link to="/demo-center" onClick={() => setOpenMobile(false)}>{tr("nav.demoCenter")}</Link>
                <Link to="/pricing" onClick={() => setOpenMobile(false)}>{tr("nav.pricing")}</Link>
                <Link to="/contact" onClick={() => setOpenMobile(false)}>{tr("nav.contact")}</Link>
              </div>

              <div className="mt-2">
                <LanguageSwitcher variant="dark" />
              </div>

              <div className="mt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    trackFreeSignupClick();
                    window.open("https://platform.whiteintel.io/signup", "_blank");
                  }}
                  className="w-full py-3 rounded-xl text-sm font-bold transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-900/40"
                >
                  {tr("nav.getFreeAccount")}
                </button>
                <button
                  onClick={() => {
                    trackDemoBookedClick();
                    window.open("https://calendly.com/whiteintel-sales", "_blank");
                  }}
                  className="w-full py-3 rounded-xl text-sm font-bold transition-all bg-gradient-to-r from-[#ff5120] to-[#d9380b] hover:from-[#ff6b42] hover:to-[#e63b0a] text-white shadow-[0_0_20px_-5px_rgba(255,81,32,0.5)]"
                >
                  {tr("nav.scheduleCall")}
                </button>
                <button
                  onClick={() => window.open("https://platform.whiteintel.io/", "_blank")}
                  className="w-full py-3 rounded-xl border border-white/15 text-slate-200 font-semibold text-center hover:bg-white/5 transition-colors"
                >
                  {tr("nav.logIn")}
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

// --- SUB COMPONENTS ---

function NavLink({ label, href, t }) {
  return (
    <Link to={href} className={`px-4 py-2 text-[15px] font-medium transition-colors ${t.textMuted} ${t.textHover}`}>
      {label}
    </Link>
  );
}

function MegaTrigger({ label, menuKey, openMenu, setOpenMenu, t, MENUS }) {
  const isOpen = openMenu === menuKey;

  return (
    <div className="flex items-center h-full" onMouseEnter={() => setOpenMenu(menuKey)} onMouseLeave={() => setOpenMenu(null)}>
      <button
        className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors outline-none ${
          isOpen ? t.textMain : t.textMuted
        } ${t.textHover}`}
        onClick={() => setOpenMenu(isOpen ? null : menuKey)}
      >
        {label}
        <PiCaretDownBold className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
        }`}
      >
        <div className={`rounded-2xl border p-6 lg:p-8 overflow-hidden ${t.panelBg} ${MENUS[menuKey].width}`}>
          {/* Single panel title (the menu name) instead of per-column headings. */}
          <div className="mb-5 pb-4 border-b border-white/5">
            <span className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              {label}
            </span>
          </div>
          <div className={`grid gap-8 ${MENUS[menuKey].gridCols}`}>
            {MENUS[menuKey].columns.map((col, idx) => (
              <div key={idx} className={col.colSpan}>
                {col.heading && (
                  <h4 className={`bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-small font-bold uppercase tracking-widest mb-4 ${t.headingText}`}>
                    {col.heading}
                  </h4>
                )}
                <div className={
                  // col-span-3 fills column-by-column (grid-rows-4 + grid-flow-col)
                  // so each group of 4 reads down a column. Assumes 12 items.
                  col.colSpan === "col-span-3" ? "grid grid-cols-3 grid-rows-4 grid-flow-col gap-x-8 gap-y-2"
                  : col.colSpan === "col-span-2" ? "grid grid-cols-2 gap-x-8 gap-y-3"
                  : "space-y-3"
                }>
                  {col.items.map((item) => {
                    const isExternal = item.href.startsWith("http");
                    const Tag = isExternal ? "a" : Link;
                    const linkProps = isExternal
                      ? { href: item.href }
                      : { to: item.href };
                    return (
                      <Tag
                        key={item.label}
                        {...linkProps}
                        className={`group flex items-start gap-3 p-2 -mx-2 rounded-lg transition-colors ${t.itemHover}`}
                      >
                        <div className={`mt-0.5 shrink-0 ${t.textMuted} group-hover:text-blue-500 transition-colors`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className={`text-sm font-semibold ${t.textMain} group-hover:text-blue-500 transition-colors`}>
                            {item.label}
                          </div>
                          <div className={`text-[13px] leading-snug mt-0.5 ${t.textMuted}`}>
                            {item.desc}
                          </div>
                        </div>
                      </Tag>
                    );
                  })}
                </div>
              </div>
            ))}

            {MENUS[menuKey].cta && (
              <div className="col-span-1 flex">
                <div className="relative flex-1 flex flex-col justify-center overflow-hidden rounded-xl p-6 border border-indigo-500/25 bg-gradient-to-br from-indigo-900/40 to-[#0b1229]">
                  <div className="absolute -top-10 -right-10 w-36 h-36 bg-indigo-500/25 blur-[55px] rounded-full pointer-events-none" />
                  <div className="relative">
                    <div className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {MENUS[menuKey].cta.eyebrow}
                    </div>
                    <h4 className="text-white font-bold text-[15px] leading-snug mb-1.5">
                      {MENUS[menuKey].cta.title}
                    </h4>
                    <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
                      {MENUS[menuKey].cta.body}
                    </p>
                    <a
                      href={MENUS[menuKey].cta.primary.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-bold text-white no-underline bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-900/40 transition-all"
                    >
                      {MENUS[menuKey].cta.primary.label}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    {MENUS[menuKey].cta.secondary && (
                      <a
                        href={MENUS[menuKey].cta.secondary.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2.5 block text-center text-[13px] font-semibold text-slate-400 hover:text-white transition-colors no-underline"
                      >
                        {MENUS[menuKey].cta.secondary.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenuSection({ title, menu, setOpenMobile }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="flex items-center justify-between w-full text-[17px] font-semibold text-white"
      >
        {title}
        <PiCaretDownBold
          className={`w-4 h-4 text-slate-400 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="flex flex-col gap-6 pl-1 pt-4 animate-in slide-in-from-top-2 duration-200">
          {menu.columns.map((col, i) => (
            <div key={i}>
              {col.heading && (
                <h5 className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-[11px] font-bold uppercase tracking-widest mb-2">
                  {col.heading}
                </h5>
              )}
              <div className="flex flex-col">
                {col.items.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  const Tag = isExternal ? "a" : Link;
                  const linkProps = isExternal
                    ? { href: item.href }
                    : { to: item.href, onClick: () => setOpenMobile(false) };
                  return (
                    <Tag
                      key={item.label}
                      {...linkProps}
                      className="flex items-center gap-3 py-2.5 -mx-2 px-2 rounded-lg active:bg-white/5 transition-colors"
                    >
                      <item.icon className="w-5 h-5 shrink-0 text-slate-500" />
                      <span className="text-[15px] font-medium text-slate-200">{item.label}</span>
                    </Tag>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}