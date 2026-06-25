import { Shield, Users, Target, Bug, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const teamIcons = [
  <Shield className="w-5 h-5" />,
  <Users className="w-5 h-5" />,
  <Target className="w-5 h-5" />,
  <Bug className="w-5 h-5" />,
];

const TeamsSection = () => {
  const { t } = useTranslation("home");
  const teams = teamIcons.map((icon, idx) => ({
    icon,
    title: t(`teams.items.${idx}.title`),
    description: t(`teams.items.${idx}.description`),
  }));
  return (
    <section className="relative bg-[#020617] pt-32 pb-32 px-6 md:px-10 text-white overflow-hidden border-t border-white/5">
      
      {/* 1. CONTINUOUS GRID PATTERN */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)] pointer-events-none"></div>

      {/* 2. Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-lg font-bold uppercase tracking-widest">
    {t("teams.badge")}
  </span>            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {t("teams.title")} <br />
              <span className="text-slate-500">{t("teams.titleHighlight")}</span>
            </h3>
            <p className="text-slate-300 text-xl leading-relaxed">
              {t("teams.description")}
            </p>
          </div>
          
<div className="hidden md:block">
  <Link 
    to="/platform-overview"
    // CHANGED: hover:border-blue... -> hover:border-indigo... & hover:text-indigo...
    className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white rounded-full text-sm font-semibold transition-all text-slate-300 no-underline hover:bg-white/10 hover:border-indigo-500/50 hover:text-indigo-300"
  >
    {t("teams.platformOverview")}
    {/* CHANGED: Added text-slate-500 and group-hover:text-pink-400 */}
    <ChevronRight size={16} className="text-slate-500 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all" />
  </Link>
</div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl transition-all duration-300 hover:bg-slate-800/60 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Subtle hover glow inside the card */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Icon Container:
                   - Default: text-slate-400 (Grey)
                   - Hover: group-hover:text-blue-400 (Blue)
                */}
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-slate-400 mb-5 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                  {item.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-medium text-slate-300 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;