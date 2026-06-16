import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function Editorial() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const postersData = [
    {
      id: "editorial-poster-1",
      imgId: "editorial-img-1",
      src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=80",
      alt: "Physical transformation aesthetic athlete",
      className: "lg:w-[37%] h-[380px] sm:h-[280px] md:h-[360px] lg:h-[620px] lg:left-[3%] lg:top-[40px]",
      initial: { y: 60, rotate: -6, opacity: 0 },
      whileInView: { y: 0, rotate: -5, opacity: 1 },
      whileHover: { scale: 1.03, rotate: -2, zIndex: 10 },
      style: { originX: 0.5, originY: 0.5 }
    },
    {
      id: "editorial-poster-2",
      imgId: "editorial-img-2",
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1100&q=80",
      alt: "Hard athletic iron lifting technique",
      className: "lg:w-[42%] h-[380px] sm:h-[300px] md:h-[400px] lg:h-[700px] lg:left-[30%] lg:top-0 z-1",
      initial: { y: 40, scale: 0.95, opacity: 0 },
      whileInView: { y: 0, scale: 1, opacity: 1 },
      whileHover: { scale: 1.04, zIndex: 10 },
      style: undefined
    },
    {
      id: "editorial-poster-3",
      imgId: "editorial-img-3",
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      alt: "Luxury premium fitness gear detail",
      className: "lg:w-[30%] h-[380px] sm:h-[255px] md:h-[320px] lg:h-[500px] lg:right-[2%] lg:top-[160px]",
      initial: { y: 80, rotate: 6, opacity: 0 },
      whileInView: { y: 0, rotate: 6, opacity: 1 },
      whileHover: { scale: 1.03, rotate: 2, zIndex: 10 },
      style: { originX: 0.5, originY: 0.5 }
    }
  ];

  return (
    <section className="min-h-fit lg:min-h-[110vh] bg-[#f4efe7] text-[#050505] px-4 md:px-11 py-12 md:py-28 overflow-hidden relative">
      <motion.div
        className="text-[#b43b2f] uppercase tracking-[4px] text-[10px] md:text-xs font-bold mb-3 md:mb-5 font-display"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        id="editorial-kicker"
      >
        {t.editorial.kicker}
      </motion.div>

      <motion.h2
        className="text-3xl md:text-[clamp(32px,5.5vw,72px)] leading-[1.2] md:leading-[1.1] tracking-normal md:tracking-[-0.01em] uppercase font-extrabold max-w-4xl font-display mb-8 md:mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, delay: 0.1 }}
        id="editorial-title"
      >
        {t.editorial.title}
      </motion.h2>

      {/* Editorial Stage Box */}
      <div 
        className={`editorial-stage mt-8 md:mt-16 relative ${isMobile ? "h-[410px] w-full" : "h-auto lg:h-[760px] grid grid-cols-1 sm:grid-cols-3 lg:block gap-4 md:gap-6"}`}
        id="editorial-poster-stage"
      >
        {postersData.map((poster, index) => {
          const diff = isMobile ? index - activeDotIndex : 0;
          const isTopCard = diff === 0;

          const mobileAnimate = {
            scale: diff === 0 ? 1 : diff > 0 ? 1 - diff * 0.045 : 0.95,
            y: diff > 0 ? diff * 16 : 0,
            x: diff < 0 ? "-125%" : 0,
            opacity: diff === 0 ? 1 : diff > 0 ? (diff >= 3 ? 0 : 0.7 - diff * 0.25) : 0,
            zIndex: diff === 0 ? 15 : diff > 0 ? 10 - diff : 12,
          };

          return (
            <motion.div
              key={poster.id}
              className={`poster rounded-2xl md:rounded-[28px] overflow-hidden shadow-xl ${
                isMobile 
                  ? "absolute top-0 left-0 w-full h-[370px] bg-white border border-[#050505]/5 touch-pan-y select-none" 
                  : `shrink-0 sm:w-auto lg:absolute ${poster.className}`
              }`}
              style={isMobile ? { transformOrigin: "top center" } : poster.style}
              initial={isMobile ? { y: 40, opacity: 0, scale: 0.92 } : poster.initial}
              whileInView={isMobile ? undefined : poster.whileInView}
              animate={isMobile ? mobileAnimate : undefined}
              whileHover={isMobile ? undefined : poster.whileHover}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: isMobile ? "spring" : "tween",
                stiffness: isMobile ? 280 : undefined,
                damping: isMobile ? 26 : undefined,
                duration: isMobile ? undefined : 1.2,
                ease: isMobile ? undefined : [0.16, 1, 0.3, 1],
              }}
              drag={isMobile && isTopCard ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.65}
              onDragEnd={(event, info) => {
                if (info.offset.x < -60) {
                  setActiveDotIndex((prev) => (prev + 1) % postersData.length);
                } else if (info.offset.x > 60) {
                  setActiveDotIndex((prev) => (prev - 1 + postersData.length) % postersData.length);
                }
              }}
              whileDrag={{ scale: 1.02, rotate: 1 }}
              id={poster.id}
            >
              <img
                src={poster.src}
                alt={poster.alt}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
                referrerPolicy="no-referrer"
                id={poster.imgId}
              />
            </motion.div>
          );
        })}

        {/* Cinematic blend text overlay "Build Different" */}
        <div
          className="hidden sm:block lg:absolute left-0 right-0 bottom-[10px] lg:bottom-[30px] z-20 text-[clamp(42px,10vw,140px)] lg:text-[clamp(58px,12vw,190px)] leading-[0.75] tracking-[-4px] lg:tracking-[-9px] uppercase font-[950] text-center mix-blend-normal lg:mix-blend-difference mt-6 sm:mt-0 lg:mt-0 text-[#050505] lg:text-white pointer-events-none select-none font-sans"
          id="editorial-text-banner"
        >
          Build<br />Different
        </div>
      </div>

      {/* Mobile-only premium capsule navigation pagination dots */}
      {isMobile && (
        <div className="flex justify-center items-center gap-2.5 mt-6" id="editorial-dots-wrapper">
          {postersData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDotIndex(index)}
              className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                activeDotIndex === index ? "bg-[#b43b2f] w-7" : "bg-[#050505]/15 hover:bg-[#050505]/30 w-2"
              }`}
              aria-label={`Go to poster slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
