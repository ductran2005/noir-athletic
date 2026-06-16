import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useTranslation();
  const words = ["NOIR", "ATHLETIC", "CLUB"];
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
      title: t.hero.slides.strengthDebkTitle,
      tagline: t.hero.slides.strengthDeckDesc,
    },
    {
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop",
      title: t.hero.slides.sanctuaryTitle,
      tagline: t.hero.slides.sanctuaryDesc,
    },
    {
      url: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1400&auto=format&fit=crop",
      title: t.hero.slides.cardioTitle,
      tagline: t.hero.slides.cardioDesc,
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
      className="min-h-screen relative pt-[78px] md:pt-[120px] pb-8 md:pb-10 px-4 md:px-8 lg:px-12 xl:px-16 bg-[#050505] flex items-start md:items-center overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 75% 20%, rgba(180,59,47,0.2) 0%, transparent 50%)",
      }}
      id="hero-section"
    >
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" id="hero-grid-lines">
        <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-[#f4efe7]/5" />
        <div className="absolute left-[58%] top-0 bottom-0 w-[1px] bg-[#f4efe7]/5 hidden lg:block" />
      </div>

      {/* Main Structural Asymmetric Grid */}
      <div
        className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center z-10"
        id="hero-columns-container"
      >
        {/* Left Column: Mighty Typography & Core Actions (Takes up 6 out of 12 columns for a wider left-right distribution) */}
        <div className="lg:col-span-6 flex flex-col gap-4 md:gap-8 justify-center pr-0 lg:pr-6" id="hero-left-column">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2"
          >
            <div className="tag text-[#b43b2f] uppercase tracking-[4px] text-xs font-bold font-display">
              {t.hero.tagline}
            </div>
          </motion.div>

          {/* Colossal Title Stacks */}
          <div className="pointer-events-none" id="hero-colossal-title">
            <h1 className="text-[clamp(44px,7.8vw,115px)] font-[950] tracking-[-2px] md:tracking-[-5px] uppercase text-[#f4efe7] leading-[0.82] text-left">
              {words.map((word, index) => (
                <span key={index} className="block overflow-hidden h-fit" id={`hero-word-${word.toLowerCase()}`}>
                  <motion.span
                    className="block"
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
          </div>

          {/* Description & Premium Action Buttons */}
          <motion.div
            className="flex flex-col gap-4 md:gap-8 max-w-xl"
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            id="hero-intro-actions"
          >
            <p className="text-[#bcb5aa] text-sm md:text-base leading-[1.7] font-light max-w-lg">
              {t.hero.sub}
            </p>

            {/* Interactive smooth anchor action buttons */}
            <div className="flex flex-row items-center gap-3 w-full md:w-auto animate-fade-in" id="hero-button-actions">
              <a
                href="#passes"
                className="flex-1 md:flex-initial px-4 md:px-8 py-3.5 md:py-4 bg-[#f4efe7] text-[#050505] rounded-full text-[11px] md:text-xs font-bold uppercase tracking-[1.5px] md:tracking-[2px] transition-all duration-300 hover:bg-[#b43b2f] hover:text-[#f4efe7] active:scale-95 leading-none shadow-lg text-center whitespace-nowrap"
              >
                {t.navLinks.passes}
              </a>
              <a
                href="#join"
                className="flex-1 md:flex-initial px-4 md:px-8 py-3.5 md:py-4 border border-[#f4efe7]/20 hover:border-[#f4efe7]/70 hover:bg-[#f4efe7]/5 text-[#f4efe7] rounded-full text-[11px] md:text-xs font-bold uppercase tracking-[1.5px] md:tracking-[2px] transition-all duration-300 active:scale-95 leading-none text-center whitespace-nowrap"
              >
                {t.navLinks.join}
              </a>
            </div>

            {/* Compact stats visible ONLY on mobile/tablet (below buttons, above cover image) */}
            <div className="block lg:hidden mt-4 pt-4 border-t border-[#f4efe7]/10" id="hero-metrics-mobile">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: t.hero.stats.accessTitle, value: t.hero.stats.accessVal },
                  { label: t.hero.stats.coachingTitle, value: t.hero.stats.coachingVal },
                  { label: t.hero.stats.membersTitle, value: t.hero.stats.membersVal },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`metric flex flex-col ${
                      index < 2 ? "border-r border-[#f4efe7]/10 pr-2" : ""
                    }`}
                    id={`hero-metric-mobile-${index}`}
                  >
                    <strong className="text-lg sm:text-2xl font-black tracking-[-0.5px] text-[#f4efe7] leading-none mb-1 font-sans">
                      {item.value}
                    </strong>
                    <span className="text-[#9e978f] text-[7px] sm:text-[9px] uppercase tracking-[0.5px] font-bold block font-display leading-[1.1]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Editorial Cover Frame & Stats (Takes up 6 out of 12 columns - Made wider and taller) */}
        <div className="lg:col-span-6 flex flex-col gap-8 md:gap-10" id="hero-right-column">
          {/* Cover Art Frame with Slide controls & elegant space info layout */}
          <div className="relative group/hero-frame w-full flex-shrink-0" id="hero-interactive-card">
            <motion.div
              className="hero-visual h-[38vh] lg:h-[58vh] xl:h-[62vh] rounded-[30px] overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.65)] border border-[#f4efe7]/10 w-full"
              initial={{
                clipPath: "inset(20% 20% 20% 20% round 30px)",
                scale: 0.92,
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0% round 30px)",
                scale: 1,
              }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              id="hero-visual-wrapper"
            >
              {/* Overlay Gradient with premium contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10 pointer-events-none" />

              {/* Glowing Pulse Top Bar */}
              <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b43b2f] animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b43b2f] absolute" />
                  <span className="text-[#f4efe7]/60 text-[9px] uppercase tracking-[3px] font-medium font-mono">
                    {t.hero.liveFeed}
                  </span>
                </div>
                <div className="text-[#f4efe7]/40 text-[9px] uppercase tracking-[2px] font-light font-mono">
                  {t.hero.location}
                </div>
              </div>

              {/* Cross-fade Animated Image using standard AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={slides[activeSlide].url}
                    alt={slides[activeSlide].title}
                    className="w-full h-full object-cover scale-100 transition-transform duration-[5s] ease-out group-hover/hero-frame:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Info Bar inside image */}
              <div className="absolute bottom-6 left-6 right-16 z-20 flex flex-col gap-1 pointer-events-none">
                <div className="overflow-hidden flex items-center">
                  <motion.div
                    key={activeSlide}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#f4efe7] text-base md:text-lg font-extrabold uppercase tracking-[1px] font-display"
                  >
                    {slides[activeSlide].title}
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    key={activeSlide}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 0.75 }}
                    transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#bcb5aa] text-[11px] md:text-xs font-light"
                  >
                    {slides[activeSlide].tagline}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Float control panel overlays in vertical layout on the right border */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 bg-[#050505]/95 border border-[#f4efe7]/10 p-2 rounded-full backdrop-blur-md shadow-2xl" id="slide-controls">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-mono tracking-tighter transition-all duration-300 ${
                    activeSlide === idx
                      ? "bg-[#b43b2f] text-[#f4efe7] font-bold scale-110 shadow-lg shadow-[#b43b2f]/30"
                      : "text-[#9e978f] hover:text-[#f4efe7] hover:bg-[#f4efe7]/5"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width premium stats visual panel (Spans all 12 columns for balanced design) */}
        <div className="hidden lg:block lg:col-span-12 mt-1 md:mt-4" id="hero-metrics-full-wrapper">
          <div className="grid grid-cols-3 gap-3 md:gap-8 pt-3 md:pt-5 border-t border-[#f4efe7]/15" id="hero-metrics-container">
            {[
              { label: t.hero.stats.accessTitle, value: t.hero.stats.accessVal },
              { label: t.hero.stats.coachingTitle, value: t.hero.stats.coachingVal },
              { label: t.hero.stats.membersTitle, value: t.hero.stats.membersVal },
            ].map((item, index) => (
              <div
                key={index}
                className={`metric flex flex-col ${
                  index < 2 ? "border-r border-[#f4efe7]/10 pr-3 md:pr-8" : ""
                }`}
                id={`hero-metric-${index}`}
              >
                <strong className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-[-1px] text-[#f4efe7] leading-none mb-1.5 md:mb-2 font-sans animate-fade-in">
                  {item.value}
                </strong>
                <span className="text-[#9e978f] text-[8px] sm:text-[10px] md:text-[11px] uppercase tracking-[1px] md:tracking-[2px] font-bold block font-display leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kinetic scroll line visual anchor */}
      <div className="absolute bottom-8 left-6 md:left-11 w-[150px] h-[1px] bg-[#f4efe7]/25 overflow-hidden hidden lg:block" id="scroll-line-container">
        <motion.div
          className="h-full w-full bg-[#f4efe7]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "linear",
          }}
          id="scroll-line-bar"
        />
      </div>
    </header>
  );
}
