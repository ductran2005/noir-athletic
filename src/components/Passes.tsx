"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { ClubPass } from "../types";
import { useTranslation } from "../context/LanguageContext";

interface PassesProps {
  onSelectPass: (passTitle: string) => void;
}

export default function Passes({ onSelectPass }: PassesProps) {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const passesData: (ClubPass & { image: string })[] = [
    {
      id: "essential",
      number: "PASS 01",
      title: "Essential",
      image: "/hero/no-limits-exterior.png",
      features: [t.passes.plans.essential.f1, t.passes.plans.essential.f2, t.passes.plans.essential.f3],
      price: "1.490.000đ",
      period: t.passes.period,
    },
    {
      id: "premium",
      number: "PASS 02",
      title: "Premium",
      image: "/hero/no-limits-gym-floor.png",
      features: [t.passes.plans.premium.f1, t.passes.plans.premium.f2, t.passes.plans.premium.f3],
      price: "2.990.000đ",
      period: t.passes.period,
    },
    {
      id: "elite-pt",
      number: "PASS 03",
      title: "Elite PT",
      image: "/hero/no-limits-reception.png",
      features: [t.passes.plans.elite.f1, t.passes.plans.elite.f2, t.passes.plans.elite.f3],
      price: "5.990.000đ",
      period: t.passes.period,
    },
  ];

  const handleJoinClick = (passTitle: string) => {
    onSelectPass(passTitle);
    const element = document.getElementById("join");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPass = (index: number) => {
    setActiveDotIndex(index);
  };

  return (
    <section id="passes" className="bg-[#050505] px-6 md:px-11 py-20 md:py-28 overflow-hidden text-[#f4efe7] scroll-mt-20 lg:scroll-mt-28">
      <motion.div
        className="text-[#b43b2f] uppercase tracking-[4px] text-xs font-bold mb-5 font-display"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="passes-kicker"
      >
        {t.passes.kicker}
      </motion.div>

      <motion.h2
        className="text-[clamp(32px,5.5vw,72px)] leading-[1.2] md:leading-[1.1] tracking-normal md:tracking-[-0.01em] uppercase font-extrabold max-w-4xl font-display mb-12 md:mb-16"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.1 }}
        id="passes-title"
      >
        {t.passes.title}
      </motion.h2>

      {/* Grid wrapper for list cards */}
      <div 
        ref={containerRef}
        className="relative h-[480px] md:h-auto w-full flex flex-col md:gap-8 mt-8 md:mt-16" 
        id="passes-grid-wrapper"
      >
        {passesData.map((pass, index) => {
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
              key={pass.id}
              className={`group rounded-[30px] border border-[#f4efe7]/20 p-8 md:p-[34px] transition-colors duration-500 overflow-hidden ${
                isMobile 
                  ? "absolute top-0 left-0 w-full h-[440px] bg-[#0c0c0c] shadow-[0_20px_45px_rgba(0,0,0,0.5)] border-[#f4efe7]/15 touch-pan-y select-none" 
                  : "relative w-full bg-gradient-to-r from-white/[0.04] to-transparent hover:border-[#b43b2f]/40 focus-within:border-[#b43b2f]/40 md:snap-align-none"
              }`}
              style={isMobile ? { transformOrigin: "top center" } : undefined}
              initial={isMobile ? { y: 60, opacity: 0, scale: 0.9 } : { x: -100, opacity: 0, rotate: -1.5 }}
              whileInView={isMobile ? undefined : { x: 0, y: 0, opacity: 1, rotate: 0 }}
              animate={isMobile ? mobileAnimate : undefined}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 26,
              }}
              drag={isMobile && isTopCard ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.65}
              onDragEnd={(event, info) => {
                if (info.offset.x < -60) {
                  setActiveDotIndex((prev) => (prev + 1) % passesData.length);
                } else if (info.offset.x > 60) {
                  setActiveDotIndex((prev) => (prev - 1 + passesData.length) % passesData.length);
                }
              }}
              whileDrag={{ scale: 1.02, rotate: 1.5 }}
              id={`club-pass-card-${pass.id}`}
            >
              <div className="hidden md:block absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-700">
                <img
                  src={pass.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover opacity-70 brightness-125 contrast-110 scale-105 group-hover:scale-100 group-focus-within:scale-100 transition-transform duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/45 to-[#050505]/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/10 via-transparent to-[#050505]/30" />
              </div>

              {/* Visual separator rule line designed for wide screens */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-[26%] w-[1px] border-l border-dashed border-[#f4efe7]/15" />

              {/* Content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr_0.8fr_auto] gap-6 lg:gap-8 items-center relative z-10">
                {/* Pass label & name */}
                <div className="flex flex-col gap-2" id={`pass-id-label-${pass.id}`}>
                  <span className="text-[#b43b2f] text-sm tracking-[3px] font-bold font-display uppercase">
                    {pass.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight uppercase text-[#f4efe7]">
                    {pass.title}
                  </h3>
                </div>

                {/* Bullet Features list */}
                <div id={`pass-features-list-${pass.id}`}>
                  <ul className="flex flex-col gap-3 text-[#bcb5aa] text-sm md:text-base font-light">
                    {pass.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-[#b43b2f]/10 flex items-center justify-center text-[#b43b2f]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing breakdown */}
                <div className="flex flex-col" id={`pass-pricing-${pass.id}`}>
                  <div className="text-3xl md:text-[38px] font-black tracking-tight text-[#f4efe7]">
                    {pass.price}
                  </div>
                  <small className="text-[#9e978f] text-xs uppercase tracking-[2px] mt-1 font-display">
                    {pass.period}
                  </small>
                </div>

                {/* Circular Action Button */}
                <div className="flex lg:justify-end mt-4 lg:mt-0" id={`pass-action-${pass.id}`}>
                  <button
                    onClick={() => handleJoinClick(pass.title)}
                    className="w-24 h-24 md:w-[110px] md:h-[110px] rounded-full border border-[#f4efe7]/35 flex items-center justify-center text-center text-[11px] uppercase tracking-[2px] font-semibold text-[#f4efe7] cursor-pointer group-hover:bg-[#f4efe7] group-hover:text-[#050505] group-hover:border-[#f4efe7] group-hover:rotate-[-12deg] transition-all duration-500 transform-gpu"
                    id={`pass-join-btn-${pass.id}`}
                  >
                    {t.passes.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile-only premium capsule navigation pagination dots */}
      <div className="flex md:hidden justify-center items-center gap-2.5 mt-6" id="passes-dots-wrapper">
        {passesData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPass(index)}
            className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
              activeDotIndex === index ? "bg-[#b43b2f] w-7" : "bg-[#f4efe7]/20 hover:bg-[#f4efe7]/40 w-2"
            }`}
            aria-label={`Go to pass slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
