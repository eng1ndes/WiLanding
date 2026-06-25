const featuresBg = "/assets/features-bg.png";

export default function Cta() {
  return (
    <section className="relative bg-[#060d1f] text-white px-6 md:px-10 py-16 md:py-20">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img src={featuresBg} alt="" className="w-full h-full object-cover opacity-[0.12]" width={1920} height={1080} />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold">See Whiteintel in Action</h3>
        <p className="text-gray-300 mt-3">
          Schedule a 30-minute demo to map your domains & identities and preview real exposures.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold">Request a Demo</a>
          <a href="#" className="rounded-lg border border-white/20 hover:bg-white hover:text-black px-6 py-3 font-semibold">Start Free Trial</a>
        </div>
      </div>
    </section>
  );
}
