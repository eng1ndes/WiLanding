import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react"; // Assuming you use lucide-react or similar

function HeroSectionAto() {
  const { t } = useTranslation("features");
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
      className="relative w-full bg-[#020617] text-white overflow-hidden"
      style={{
        paddingTop: `calc(${navHeight}px + 4rem)`, 
        paddingBottom: "6rem",
      }}
    >
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />

      {/* 2. Enterprise Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* 3. Bottom Fade (Seamless transition to next section) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-[1]" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <div className="flex flex-col items-start max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t("ato.badge")}
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400">
            {t("ato.hero.title")}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
            {t("ato.hero.description")}
          </p>

          
        </div>

        {/* Right Column: Abstract Visualization (CSS Only) */}
        <div className="relative hidden lg:block h-full min-h-[500px] w-full perspective-[2000px]">
           {/* Floating Card Concept */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] aspect-[4/3] bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl p-6 flex flex-col gap-4 transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-[-5deg] hover:rotate-x-[0deg] transition-transform duration-700 ease-out group">
              
              {/* Header of Card */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                       <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="text-sm font-semibold text-white">{t("ato.hero.cardHeader")}</div>
                       <div className="text-xs text-slate-400">{t("ato.hero.cardSubtext")}</div>
                    </div>
                 </div>
                 <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                 </div>
              </div>

              {/* Mock Data Lines */}
              <div className="space-y-3 pt-2">
                 {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                       <div className="flex items-center gap-3">
                          <Activity className="w-4 h-4 text-blue-400" />
                          <div className="h-2 w-24 bg-slate-600/50 rounded"></div>
                       </div>
                       <div className="h-2 w-12 bg-slate-600/50 rounded"></div>
                    </div>
                 ))}
              </div>

              {/* Action Area */}
              <div className="mt-auto pt-4 flex gap-3">
                 <div className="h-8 w-full bg-blue-600/20 border border-blue-500/30 rounded flex items-center justify-center text-xs text-blue-400 font-medium">
                    {t("ato.hero.autoRemediate")}
                 </div>
                 <div className="h-8 w-full bg-white/5 border border-white/10 rounded flex items-center justify-center text-xs text-slate-400">
                    {t("ato.hero.investigate")}
                 </div>
              </div>

              {/* Decorative Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-2xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity"></div>
           </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSectionAto;