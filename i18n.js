import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Only English is bundled (always needed as fallback)
import commonEN from "./locales/en/common.json";
import homeEN from "./locales/en/home.json";
import pricingEN from "./locales/en/pricing.json";
import contactEN from "./locales/en/contact.json";
import featuresEN from "./locales/en/features.json";
import tourEN from "./locales/en/tour.json";
import reportsEN from "./locales/en/reports.json";

const NAMESPACES = ["common", "home", "pricing", "contact", "features", "tour", "reports"];

// Languages that have translation files
const SUPPORTED_LANGS = ["en", "fr", "ja", "zh"];

// Lazy-load non-English languages on demand
async function loadLanguage(lang) {
  if (lang === "en" || i18n.hasResourceBundle(lang, "common")) return;
  if (!SUPPORTED_LANGS.includes(lang)) return; // skip unsupported languages
  try {
    const modules = await Promise.all(
      NAMESPACES.map((ns) => import(`./locales/${lang}/${ns}.json`))
    );
    NAMESPACES.forEach((ns, idx) => {
      i18n.addResourceBundle(lang, ns, modules[idx].default, true, true);
    });
  } catch (e) {
    // If loading fails, silently fall back to English
    console.warn(`Failed to load language "${lang}", falling back to English`);
  }
}

const initPromise = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: commonEN, home: homeEN, pricing: pricingEN, contact: contactEN, features: featuresEN, tour: tourEN, reports: reportsEN },
    },
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["navigator"],
      caches: [],
    },
  })
  .then(() => {
    // Load detected language before app renders
    const detected = i18n.language?.split("-")[0];
    if (detected && detected !== "en") {
      return loadLanguage(detected);
    }
  });

// Load language bundles when user switches
i18n.on("languageChanged", (lng) => {
  const lang = lng.split("-")[0];
  loadLanguage(lang);
});

// Preload remaining languages in the background after page is idle
if (typeof window !== "undefined") {
  const preloadAll = () => {
    ["ja", "zh", "fr"].forEach((lang) => loadLanguage(lang));
  };
  if ("requestIdleCallback" in window) {
    requestIdleCallback(preloadAll);
  } else {
    setTimeout(preloadAll, 3000);
  }
}

export { initPromise };
export default i18n;
