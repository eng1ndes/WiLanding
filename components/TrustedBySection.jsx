import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import 'swiper/css';

const Logos = [
  '/assets/logos/logo1.png',
  '/assets/logos/logo2.png',
  '/assets/logos/logo7.png',
  '/assets/logos/logo4.png',
  '/assets/logos/logo5.png',
  '/assets/logos/logo6.png',
  '/assets/logos/logo3.png',
];

const TrustedBySection = () => {
  const { t, i18n } = useTranslation("home");
  return (
    <section className="relative bg-[#020617] py-24 md:py-32 px-6 overflow-x-hidden text-white font-sans">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-indigo-600/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span lang={i18n.resolvedLanguage} className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent text-base font-bold uppercase tracking-widest">
              {t("trustedByBadge")}
            </span>
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            {t("trustedBy")}{" "}
            <span className="text-slate-500 font-medium">{t("trustedByHighlight")}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            spaceBetween={60}
            loop={true}
            speed={3000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="w-full flex items-center"
          >
            {Logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="group cursor-pointer transition-all duration-500 opacity-30 hover:opacity-100 grayscale hover:grayscale-0">
                  <img
                    src={logo}
                    alt={`Partner Logo ${index}`}
                    className="h-8 md:h-10 w-auto object-contain brightness-0 invert transition-all duration-300 group-hover:scale-110 group-hover:brightness-100 group-hover:invert-0"
                    width={120}
                    height={40}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default TrustedBySection;
