import React from 'react';
import { useTranslation } from "react-i18next";

const PricingHeroSection = () => {
  const { t } = useTranslation("pricing");
  return (
    <section
      className="
        relative overflow-hidden bg-[#060d1f] text-white
        min-h-[65vh] sm:min-h-[60vh]
        flex items-center justify-center
        pb-20
      "
      style={{
        '--nav-h': '64px',
        paddingTop: 'calc(var(--nav-h) + env(safe-area-inset-top) + 2rem)',
      }}
    >
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Base Image (Your original image) */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/assets/features.png"
          alt=""
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          width={1920}
          height={1080}
        />
      </div>

      {/* 2. Top Spotlight / Glow Effect */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* 3. Subtle Grid Overlay (CSS Only - Tech feel) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
        }}
      />

      {/* 4. Bottom Fade Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060d1f] to-transparent z-[1] pointer-events-none" />


      {/* --- CONTENT --- */}
      <main className="relative z-10 max-w-4xl mx-auto w-full px-6 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.2)] mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {t("seo.badge", "Pricing")}
        </div>

        {/* Headline with Gradient Text */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-white drop-shadow-sm">
            {t("seo.heroTitle", "Transparent Pricing.")}
          </span>
          <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            {t("seo.heroHighlight", "No Hidden Fees.")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          {t("seo.heroDescription", "At Whiteintel, we believe in clarity. Our pricing is fair, consistent, and designed to scale with your security needs.")}
        </p>

      </main>

      {/* --- DECORATIVE WAVE --- */}
      <div className="pointer-events-none absolute -bottom-px left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block w-full h-[40px] sm:h-[60px] md:h-[100px]"
        >
          {/* Layered waves for depth */}
          <path 
            d="M0,40 C320,100 1120,100 1440,40 L1440,100 L0,100 Z" 
            className="fill-gray-50 opacity-30" 
          />
           <path 
            d="M0,60 C480,100 960,100 1440,60 L1440,120 L0,120 Z" 
            className="fill-gray-50" 
          />
        </svg>
      </div>
    </section>
  );
};

export default PricingHeroSection;