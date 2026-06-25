import { ArrowRight } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="relative bg-[#020617] text-white px-6 md:px-10 py-24 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400">
          Catch a compromised vendor before it becomes your breach
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
          Add your supplier portfolio. We start scoring exposure within minutes and alert you the moment something new appears. No sales call required.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://platform.whiteintel.io/signup"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
          >
            Start free scan
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 hover:bg-white/5 hover:border-white/30 text-white font-semibold text-sm transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
