"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();
  const words = ["NO", "LIMITS"];
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      url: "/hero/Screenshot 2026-06-16 184930.png",
      title: t.hero.slides.cardioTitle,
      tagline: t.hero.slides.cardioDesc,
    },
    {
      url: "/hero/Screenshot 2026-06-16 184939.png",
      title: t.hero.slides.strengthDebkTitle,
      tagline: t.hero.slides.strengthDeckDesc,
    },
    {
      url: "/hero/Screenshot 2026-06-16 184918.png",
      title: t.hero.slides.sanctuaryTitle,
      tagline: t.hero.slides.sanctuaryDesc,
    },
  ];



  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <header
      className="min-h-screen relative pt-[92px] md:pt-[112px] pb-7 md:pb-10 px-5 md:px-8 lg:px-12 xl:px-16 bg-[#050505] flex overflow-hidden"
      id="hero-section"
    >
      {/* Cinematic full-bleed background slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" id="hero-bg-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
          >
            <img
              src={slides[activeSlide].url}
              alt={slides[activeSlide].title}
              className="w-full h-full object-cover object-[58%_center]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/35 z-10" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.84)_24%,rgba(0,0,0,0.52)_50%,rgba(0,0,0,0.18)_76%,rgba(0,0,0,0.5)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_74%_18%,rgba(190,34,28,0.26)_0%,rgba(190,34,28,0.08)_26%,transparent_54%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black via-black/55 to-transparent" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-25" id="hero-track-lines">
        <div className="absolute left-[7%] top-0 bottom-0 w-px bg-[#f4efe7]/10" />
        <div className="absolute left-[46%] top-0 bottom-0 w-px bg-[#f4efe7]/5 hidden lg:block" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-[#f4efe7]/5 hidden xl:block" />
      </div>

      <div
        className="relative z-10 w-full max-w-[1760px] mx-auto flex flex-col justify-between"
        id="hero-content-container"
      >
        <div className="max-w-[680px] pt-8 md:pt-10 lg:pt-14" id="hero-left-column">
          <motion.div
            className="flex flex-col gap-5 md:gap-7"
            initial={{ y: 34, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tag text-[#e04438] uppercase tracking-[4px] text-[10px] md:text-xs font-extrabold font-display">
              Private Training Club
            </div>

            <h1 className="pointer-events-none text-[clamp(58px,11.5vw,158px)] font-[950] uppercase text-[#f4efe7] leading-[0.84] text-left drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="block overflow-hidden h-fit"
                  id={`hero-word-${word.toLowerCase()}`}
                >
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.15,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 * index,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <p className="text-[#f4efe7] text-base md:text-xl leading-[1.55] font-extrabold uppercase max-w-[420px] drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]">
              {t.hero.sub}
            </p>

            <ul className="flex flex-col gap-2.5 pt-1" id="hero-highlights">
              {t.hero.highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[#c9c1b7] text-xs md:text-sm font-medium"
                >
                  <span className="w-1 h-1 rounded-full bg-[#e04438] shrink-0 shadow-[0_0_12px_rgba(224,68,56,0.85)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-row items-center gap-3 w-full sm:w-auto pt-2" id="hero-button-actions">
              <a
                href="#passes"
                className="flex-1 sm:flex-initial px-5 md:px-8 py-3.5 md:py-4 bg-[#b43b2f] text-[#f4efe7] rounded-[3px] text-[10px] md:text-xs font-extrabold uppercase tracking-[1.5px] transition-all duration-300 hover:bg-[#e04438] active:scale-95 leading-none shadow-[0_0_26px_rgba(180,59,47,0.34)] text-center whitespace-nowrap"
              >
                {t.navLinks.passes}
              </a>
              <a
                href="#join"
                className="flex-1 sm:flex-initial px-5 md:px-8 py-3.5 md:py-4 border border-[#f4efe7]/20 bg-black/20 hover:border-[#f4efe7]/60 hover:bg-[#f4efe7]/10 text-[#f4efe7] rounded-[3px] text-[10px] md:text-xs font-extrabold uppercase tracking-[1.5px] transition-all duration-300 active:scale-95 leading-none text-center whitespace-nowrap backdrop-blur-sm"
              >
                {t.navLinks.join}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-3 pt-14" id="hero-bottom-row">
          <div className="flex items-center gap-3" id="slide-controls">
            {slides.map((slide, idx) => (
              <button
                key={slide.url}
                onClick={() => setActiveSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx
                    ? "w-10 bg-[#e04438] shadow-[0_0_16px_rgba(224,68,56,0.72)]"
                    : "w-2.5 bg-[#f4efe7]/35 hover:bg-[#f4efe7]/70"
                }`}
                aria-label={`Go to ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
