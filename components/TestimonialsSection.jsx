import { Star, Quote, BadgeCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

const G2_PROFILE_URL = "https://www.g2.com/products/whiteintel-dark-web-intelligence/reviews";

// Real G2 reviews. `title`, `companySize`, and `date` are optional — when
// missing, the card falls back gracefully (see Reviewer block rendering).
const TESTIMONIALS = [
  {
    rating: 5,
    headline: "Best-in-Class Leak and Dark Web Monitoring results",
    body:
      "The web interface is really nice, with great dashboards that are easy to navigate. The most important part, the leak results, are almost better than those from any other tools, which puts WhiteIntel in a really strong position. On top of that, the team behind it is always willing to help and is genuinely friendly.",
    name: "Jesús R.",
    title: "Cyberintelligence Analyst",
    companySize: "Mid-Market (51-1000 emp.)",
    date: "",
  },
  {
    rating: 5,
    headline: "All in one place, easy to use, accurate data",
    body:
      "The UI is clean, and the navigation is easy to follow. So far, every search I've done has been efficient, with consistently quick responses. The API offers quick responses with well-formatted data, making queries simple.",
    name: "Craig S.",
    title: "Senior Security Engineer",
    companySize: "Mid-Market (51-1000 emp.)",
    date: "",
  },
  {
    rating: 5,
    headline: "Cutting-Edge Leak Detection, Seamless Automation",
    body:
      "I use WhiteIntel Dark Web Intelligence for monitoring company-related credential leaks from sources like Telegram and dark web forums. I love its cutting-edge leak detection and acquisition — it helps us detect valid credential leaks quickly, supporting our fraud team to take prompt action. The automation and alerting capabilities are fantastic, cutting our reaction times to nearly an instant response. Setup was straightforward and out of the box.",
    name: "Guillermo Tomás Z.",
    title: "Penetration Tester",
    companySize: "Enterprise (> 1000 emp.)",
    date: "",
  },
  {
    rating: 5,
    headline: "Real-Time Alerts Boost Cybersecurity",
    body:
      "I like WhiteIntel Dark Web Intelligence for its fast, robust real-time alerting and API capabilities that extend detection. It allows us to receive actionable threat intelligence and safeguard our cybersecurity posture. The initial setup was very easy, and the team was helpful during onboarding.",
    name: "Hasan D.",
    title: "",
    companySize: "Enterprise (> 1000 emp.)",
    date: "",
  },
];

function Stars({ rating, size = 16 }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <div className="relative inline-block leading-none">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} width={size} height={size} className="fill-white/15 text-white/15" strokeWidth={0} />
        ))}
      </div>
      <div
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${pct}%` }}
      >
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              width={size}
              height={size}
              className="fill-[#FF492C] text-[#FF492C] shrink-0"
              strokeWidth={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Initial({ name }) {
  const initial = (name || "?").trim().charAt(0).toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0">
      {initial}
    </div>
  );
}

const TestimonialsSection = () => {
  const { t } = useTranslation("home");
  return (
    <section className="relative bg-[#020617] pt-24 pb-24 overflow-hidden">

      {/* Section divider beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent z-20"></div>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-indigo-600/10 blur-[60px] rounded-full pointer-events-none z-10"></div>

      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[400px] h-[300px] bg-[#FF492C] opacity-[0.06] blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonial slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={32}
          breakpoints={{ 768: { slidesPerView: 2, slidesPerGroup: 2 } }}
          autoplay={{ delay: 7000, disableOnInteraction: true }}
          pagination={{ clickable: true, el: ".testimonials-pagination" }}
          rewind
          className="!pb-2 [&_.swiper-wrapper]:!items-stretch"
        >
          {TESTIMONIALS.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <article
                className="relative flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all"
              >
                {/* Quote mark accent */}
                <Quote
                  className="absolute top-5 right-5 text-white/[0.04]"
                  size={56}
                  strokeWidth={1.5}
                />

                {/* Header: stars + verified */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <Stars rating={item.rating} size={14} />
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                    <BadgeCheck size={11} />
                    {t("testimonials.verified")}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-white font-bold text-base leading-snug mb-3 relative z-10">
                  "{item.headline}"
                </h3>

                {/* Body */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                  {item.body}
                </p>

                {/* Reviewer block */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/5 relative z-10">
                  <Initial name={item.name} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-white text-sm font-semibold truncate">{item.name}</span>
                    </div>
                    {item.title && (
                      <div className="text-slate-500 text-xs truncate">{item.title}</div>
                    )}
                    {(item.companySize || item.date) ? (
                      <div className="text-slate-600 text-[11px] mt-0.5">
                        {[item.companySize, item.date].filter(Boolean).join(" · ")}
                      </div>
                    ) : !item.title ? (
                      <div className="text-slate-500 text-xs">{t("testimonials.verifiedReviewer")}</div>
                    ) : null}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots */}
        <div className="testimonials-pagination flex justify-center gap-2 mt-8 [&>.swiper-pagination-bullet]:w-2 [&>.swiper-pagination-bullet]:h-2 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:bg-white/15 [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet]:cursor-pointer [&>.swiper-pagination-bullet-active]:!bg-[#FF492C] [&>.swiper-pagination-bullet-active]:!w-6"></div>

        {/* Footer link */}
        <div className="text-center mt-10">
          <a
            href={G2_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            {t("testimonials.readMore")}
            <span className="text-[#FF492C]">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
