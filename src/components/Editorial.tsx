"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function Editorial() {
  const { t, language } = useTranslation();
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
      kicker: language === "vi" ? "Sức mạnh // Strength" : "Strength Deck // Power",
      title: language === "vi" ? "KỶ LUẬT VẬT LÝ" : "PHYSICAL DISCIPLINE",
      description: language === "vi" ? "Hệ thống thiết bị tạ tự do chuẩn Olympic giúp tối ưu hóa mật độ cơ bắp." : "Olympic-standard free weights engineered to maximize biomechanical muscle density.",
      initial: isMobile ? { y: 40, opacity: 0, scale: 0.92 } : { y: 60, rotateY: 20, opacity: 0 },
      whileInView: isMobile ? undefined : { y: 0, rotateY: 20, opacity: 1 },
      whileHover: isMobile ? undefined : { scale: 1.05, rotateY: 0, zIndex: 20 },
    },
    {
      id: "editorial-poster-2",
      imgId: "editorial-img-2",
      src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1100&q=80",
      alt: "Hard athletic iron lifting technique",
      kicker: language === "vi" ? "Kích hoạt // Cardio" : "Conditioning // Cardio",
      title: language === "vi" ? "ĐƯỜNG CHẠY ÁP SUẤT" : "PRESSURE TUNNEL",
      description: language === "vi" ? "Đường chạy độ dốc cao áp suất thấp giúp cải thiện nhanh hệ thống hô hấp." : "High-incline, low-pressure treadmills designed to rapidly improve respiratory system capacity.",
      initial: isMobile ? { y: 40, opacity: 0, scale: 0.92 } : { y: 40, rotateY: 0, opacity: 0 },
      whileInView: isMobile ? undefined : { y: 0, rotateY: 0, opacity: 1 },
      whileHover: isMobile ? undefined : { scale: 1.06, rotateY: 0, zIndex: 20 },
    },
    {
      id: "editorial-poster-3",
      imgId: "editorial-img-3",
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      alt: "Luxury premium fitness gear detail",
      kicker: language === "vi" ? "Hồi phục // Recovery" : "Sanctuary // Recovery",
      title: language === "vi" ? "XÔNG LẠNH SÂU" : "CRYOTHERAPY SUITE",
      description: language === "vi" ? "Liệu pháp ngâm đá lạnh sâu giúp giảm viêm khớp và phục hồi cơ thần tốc." : "Sub-zero cold plunge therapy to reduce inflammation and accelerate neuromuscular recovery.",
      initial: isMobile ? { y: 40, opacity: 0, scale: 0.92 } : { y: 80, rotateY: -20, opacity: 0 },
      whileInView: isMobile ? undefined : { y: 0, rotateY: -20, opacity: 1 },
      whileHover: isMobile ? undefined : { scale: 1.05, rotateY: 0, zIndex: 20 },
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
        className={`editorial-stage mt-8 md:mt-12 w-full [perspective:2500px] ${
          isMobile 
            ? "h-[410px] relative" 
            : "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full relative z-10"
        }`}
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
              className={`poster group ${
                isMobile 
                  ? "absolute top-0 left-0 w-full h-[370px] bg-white border border-[#050505]/5 touch-pan-y select-none rounded-2xl md:rounded-[28px] overflow-hidden perspective-1000" 
                  : "relative w-full h-[460px] md:h-[540px] lg:h-[680px] cursor-pointer"
              }`}
              style={isMobile ? { transformOrigin: "top center" } : { transformStyle: "preserve-3d" }}
              initial={poster.initial}
              whileInView={isMobile ? undefined : poster.whileInView}
              animate={isMobile ? mobileAnimate : undefined}
              whileHover={isMobile ? undefined : poster.whileHover}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: isMobile ? "spring" : "tween",
                stiffness: isMobile ? 280 : undefined,
                damping: isMobile ? 26 : undefined,
                duration: isMobile ? undefined : 0.8,
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
              {/* 3D Card Inner Wrapper (only flips on desktop hover) */}
              <div className={`w-full h-full relative transition-transform duration-700 transform-style-3d rounded-2xl md:rounded-[28px] ${isMobile ? "" : "group-hover:rotate-y-180"}`}>
                
                {/* Front Side: Image */}
                <div className="absolute inset-0 w-full h-full backface-hidden z-10 rounded-2xl md:rounded-[28px] overflow-hidden shadow-2xl">
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                    referrerPolicy="no-referrer"
                    id={poster.imgId}
                  />
                </div>

                {/* Back Side: Premium Details */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 z-0 bg-[#0c0c0c] border border-[#f4efe7]/15 p-6 md:p-8 flex flex-col justify-between text-[#f4efe7] rounded-2xl md:rounded-[28px] shadow-2xl">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#b43b2f] text-[10px] tracking-[3px] font-bold font-display uppercase text-left">
                      {poster.kicker}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase text-left leading-tight">
                      {poster.title}
                    </h3>
                    <p className="text-[#bcb5aa] text-xs md:text-sm font-light leading-relaxed mt-2 text-left">
                      {poster.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-left justify-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b43b2f] animate-pulse" />
                    <span className="text-[9px] uppercase tracking-[2px] text-[#bcb5aa]/60 font-medium">
                      Noir Athletic Club
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
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
