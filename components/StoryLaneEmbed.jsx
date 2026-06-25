import { useEffect } from "react";

export default function StorylaneDemo() {
  useEffect(() => {
    // Load Storylane script once
    if (!document.querySelector('script[src="https://js.storylane.io/js/v2/storylane.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.storylane.io/js/v2/storylane.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      aria-label="Whiteintel Platform Tour"
      className="relative flex justify-center items-center py-12 md:py-24 px-4 sm:px-6 bg-[#020617]"
    >
      {/* Background Ambience (Theater Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />

      <div
        className="sl-embed relative z-10 w-full"
        style={{
          maxWidth: "1400px",             // WIDER than before (was 1100px), feels more "Full Screen"
          aspectRatio: "16 / 9",          // Maintain cinematic ratio
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* The Frame Wrapper for nice borders */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b1229]">
            
            {/* Loading Placeholder / Skeleton (Optional visual polish) */}
            <div className="absolute inset-0 bg-slate-900 animate-pulse -z-10" />

            <iframe
            loading="lazy"
            className="sl-demo"
            src="https://app.storylane.io/demo/yzypktmddjch?embed=inline"
            name="sl-embed"
            allow="fullscreen"
            allowFullScreen
            style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "12px", // Matches container
                background: "transparent",
            }}
            />
        </div>
      </div>
    </section>
  );
}