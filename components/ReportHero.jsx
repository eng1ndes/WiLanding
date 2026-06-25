const ReportHeroSection = () => {
  return (
    <section
      className="
        relative overflow-hidden bg-[#060d1f] text-white
        min-h-[60vh] sm:min-h-[55vh]
        flex items-start md:items-center
        /* push below fixed header on mobile */
        md:pt-0 pb-8
      "
      style={{ ['--nav-h']: '64px', paddingTop: 'calc(var(--nav-h) + env(safe-area-inset-top))' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/features.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
          width={1920}
          height={1080}
        />
      </div>

      {/* Soft top fade for readability under translucent nav (mobile only) */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#060d1f] to-transparent z-[5] pointer-events-none md:hidden" />

      {/* Content */}
      <main className="relative z-10 max-w-5xl mx-auto w-full px-6 md:px-10">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
          2025 INFORMATION STEALER LANDSCAPE REPORT
        </h1>

        <p className="text-base sm:text-lg text-gray-300/90 max-w-3xl">
        </p>
      </main>

      {/* Decorative wave */}
      <div className="pointer-events-none absolute -bottom-px left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[30px] sm:h-[60px] md:h-[80px]">
          <path d="M0,0 C240,120 1200,120 1440,0 L1440,120 L0,120 Z" className="fill-gray-50" />
        </svg>
      </div>
    </section>
  );
};

export default ReportHeroSection;
