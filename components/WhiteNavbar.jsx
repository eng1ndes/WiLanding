import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MENUS = {
  platform: {
    width: "w-[860px]",
    columns: [
      {
        heading: "Platform",
        items: [
          { label: "Platform Overview", desc: "Comprehensive dark web monitoring.", href: "/platform-overview"},
                    { label: "Platform Tour", desc: "See Whiteintel in Action.", href: "/platform-tour" },

        ],
      },
      {
        heading: "Use Cases",
        items: [
          { label: "ATO Prevention", desc: "Detect and respond to credential leaks in real-time.", href: "/ato-prevention" },
          { label: "Enterprise Protection", desc: "Monitor employee credential exposure.", href: "/enterprise-protection" },
          { label: "Active Directory Protection", desc: "Track compromised devices & accounts.", href: "/active-directory-protection" },
          { label: "Ransomware Prevention", desc: "Identify early-stage ransomware threats.", href: "/ransomware-prevention" },
          { label: "MSSP Service Enrichments", desc: "Deliver high-value threat intel to your MSSP stack.", href: "/mssp-enrichments" },
          { label: "Vulnerability Research", desc: "Support exploited-system discovery.", href: "/vulnerability-research" },
        ],
      },
    ],
    cta: {
      title: "Need more info?",
      body: "Let us help you understand our product better.",
      action: { label: "Contact Us", href: "/contact" },
    },
  },

  resources: {
    width: "w-[820px]",
    columns: [
      {
        heading: "Official Resources",
        items: [
          { label: "Knowledge Center", desc: "Learn how Whiteintel works, including features, coverage, and use cases.", href: "#" },
          { label: "API Documentation", desc: "Integration options, API endpoints, and developer usage guides.", href: "#" },
          { label: "Frequently Asked Questions", desc: "Answers about credentials, coverage, and licensing.", href: "#" },
          { label: "Blog", desc: "Insights, case studies, and threat research from the team.", href: "#" },
        ],
      },
    ],
    cta: {
      title: "Need more info?",
      body: "Let us help you understand our product better.",
      action: { label: "Contact Us", href: "/contact" },
    },
  },
};

export default function WhiteNavbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (!document.getElementById("nav-root")?.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <header
      id="nav-root"
      className={[
        "sticky top-0 z-50 font-sans",
        scrolled ? "border-b border-white/10 shadow-lg" : "border-b border-transparent",
        "bg-[#060d1f]/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
        {/* Mobile */}
        <div className="flex items-center justify-between py-4 md:hidden">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-tight">Whiteintel</span>
          </Link>
          <button onClick={() => setOpenMobile((v) => !v)} className="rounded p-2 hover:bg-white/10">
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              {openMobile ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center py-5">
          <div className="flex items-center gap-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 font-sans">
              <span className="text-3xl font-extrabold tracking-tight">Whiteintel</span>
            </Link>

            {/* Links */}
            <nav className="flex items-center gap-8 text-[15px] font-semibold tracking-tight text-gray-300">
              <MegaTrigger label="Platform" menuKey="platform" openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <MegaTrigger label="Resources" menuKey="resources" openMenu={openMenu} setOpenMenu={setOpenMenu} />

            {[
            { label: "Pricing", path: "/pricing" },
            { label: "Contact", path: "/contact" }
            ].map(({ label, path }) => (
            <Link
                key={label}
                to={path}
                className="relative hover:text-white transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
            >
                {label}
            </Link>
            ))}
                        </nav>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <button className="text-[15px] font-medium hover:underline">Log in</button>

              <button className="bg-blue-600 hover:bg-blue-700 text-[15px] font-medium px-4 py-1.5 rounded">
                Get a Free Account
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {openMobile && (
          <div className="md:hidden pb-6">
            <nav className="grid gap-3 text-sm text-gray-200">
              <details className="group">
                <summary className="cursor-pointer py-2 list-none flex items-center justify-between">
                  <span>Platform</span>
                  <Chevron />
                </summary>
                <MobileMega menu={MENUS.platform} />
              </details>
              <Link to="/pricing" className="py-2 hover:text-white">Pricing</Link>
              <Link to="/contact" className="py-2 hover:text-white">Contact</Link>
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <button className="text-sm underline underline-offset-4">Log in</button>

              <button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-1.5 rounded">
                Get Free Account
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function MegaTrigger({ label, menuKey, openMenu, setOpenMenu }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(menuKey)}
      onMouseLeave={() => setOpenMenu((v) => (v === menuKey ? null : v))}
    >
      <button
        className="inline-flex items-center gap-1 hover:text-white"
        onClick={() => setOpenMenu((v) => (v === menuKey ? null : menuKey))}
      >
        {label}
        <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth="2" strokeLinecap="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {openMenu === menuKey && <MegaMenu menu={MENUS[menuKey]} />}
    </div>
  );
}

function MegaMenu({ menu }) {
  const count = menu.columns.length;
  const width = menu.width || "w-[1080px]";
  const linkCols =
    count >= 3 ? "grid-cols-3 w-[820px]" :
    count === 2 ? "grid-cols-2 w-[720px]" :
    "grid-cols-1 w-[560px]";

  return (
    <div className={`absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4 ${width}`}>
      <div className="rounded-2xl border border-white/10 bg-[#0b1227] text-white shadow-2xl overflow-hidden">
        <div className="flex items-start gap-10 p-6 md:p-8">
          <div className={`grid gap-x-10 gap-y-4 ${linkCols}`}>
            {menu.columns.map((col) => (
              <div key={col.heading}>
                <p className="text-[13px] font-semibold uppercase tracking-widest text-indigo-300 mb-3 md:mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="group block rounded-md p-2 -mx-2 hover:bg-white/5"
                      >
                        <span className="font-semibold group-hover:text-white">
                          {item.label}
                        </span>
                        <p className="text-[13px] leading-snug text-gray-400 group-hover:text-gray-300">
                          {item.desc}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {menu.cta && (
            <div className="w-80 shrink-0 self-start">
              <div className="rounded-xl bg-white/5 p-6">
                <h4 className="text-lg font-semibold mb-2">{menu.cta.title}</h4>
                <p className="text-sm text-gray-300 leading-snug">{menu.cta.body}</p>
                <Link
                  to={menu.cta.action.href}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700"
                >
                  {menu.cta.action.label}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileMega({ menu }) {
  return (
    <div className="mt-2 space-y-4 rounded-lg border border-white/10 p-4 bg-[#0b1227]">
      {menu.columns.map((col) => (
        <div key={col.heading}>
          <p className="text-xs uppercase tracking-wider text-indigo-300 mb-2">{col.heading}</p>
          <ul className="space-y-2">
            {col.items.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="block">
                  <span className="font-medium">{item.label}</span>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {menu.cta && (
        <Link
          to={menu.cta.action.href}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700"
        >
          {menu.cta.action.label}
        </Link>
      )}
    </div>
  );
}

function Chevron() {
  return (
    <span className="transition group-open:rotate-180">
      <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" d="M6 9l6 6 6-6" />
      </svg>
    </span>
  );
}
