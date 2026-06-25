import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Loader2 } from "lucide-react";

const LANGUAGES = [
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export default function LanguageSwitcher({ variant = "dark" }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const isEnglish = !LANGUAGES.some((l) => i18n.language?.startsWith(l.code));
  const current = LANGUAGES.find((l) => i18n.language?.startsWith(l.code));

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const switchLanguage = useCallback(async (code) => {
    setOpen(false);
    if (i18n.language?.startsWith(code)) return;
    setLoading(true);
    await i18n.changeLanguage(code);
    // Small delay to let React re-render with new translations
    requestAnimationFrame(() => setLoading(false));
  }, [i18n]);

  const isDark = variant === "dark";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        disabled={loading}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
          isDark
            ? "text-slate-300 hover:text-white hover:bg-white/10"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        }`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : isEnglish ? (
          <Globe className="w-4 h-4" />
        ) : (
          <>
            <span className="text-base leading-none">{current.flag}</span>
            <span className="text-xs">{current.label}</span>
          </>
        )}
      </button>

      {open && (
        <div
          className={`absolute top-full right-0 mt-2 rounded-lg border shadow-xl overflow-hidden z-50 min-w-[140px] ${
            isDark
              ? "bg-slate-900 border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-colors ${
                i18n.language?.startsWith(lang.code)
                  ? isDark
                    ? "bg-blue-600/20 text-blue-400"
                    : "bg-blue-50 text-blue-600"
                  : isDark
                  ? "text-slate-300 hover:bg-white/5"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}

          {!isEnglish && (
            <button
              onClick={() => switchLanguage("en")}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm font-medium border-t ${
                isDark
                  ? "text-slate-400 hover:bg-white/5 border-white/5"
                  : "text-slate-500 hover:bg-slate-50 border-gray-100"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>English</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
