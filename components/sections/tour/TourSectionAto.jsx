import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function TourSectionAto() {
  const { t } = useTranslation("tour");
  const [navHeight, setNavHeight] = useState(64);

  useEffect(() => {
    const nav = document.getElementById("nav-root");
    const measure = () => {
      if (nav) setNavHeight(nav.offsetHeight || 64);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#020617] text-white flex flex-col items-center justify-center"
      style={{
        minHeight: "50vh", // Slightly shorter to pull the embed up
        paddingTop: `calc(${navHeight}px + 3rem)`,
        paddingBottom: "4rem",
      }}
    >
      {/* Enterprise Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Bottom Gradient Fade (transition to the embed) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-[1]" />

      {/* --- CONTENT --- */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
           </span>
           {t("badge")}
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
          {t("title")} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
             {t("titleHighlight")}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
           {t("description")}
        </p>

      </main>
    </section>
  );
}

export default TourSectionAto;