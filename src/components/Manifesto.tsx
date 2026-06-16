import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

const manifestoGallery = [
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=85",
    alt: "Elite athletic training with battle ropes",
    label: "Flagship Floor",
  },
  {
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
    alt: "Athlete preparing with battle ropes",
    label: "Strength Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85",
    alt: "Focused athlete lifting in a private training space",
    label: "Private Coaching",
  },
  {
    src: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1400&q=85",
    alt: "Premium training area with strength equipment",
    label: "Recovery Suite",
  },
];

export default function Manifesto() {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(manifestoGallery[0]);

  return (
    <section
      id="manifesto"
      className="min-h-fit md:min-h-screen bg-[#f4efe7] text-[#050505] px-4 md:px-11 py-16 md:py-28 overflow-hidden scroll-mt-20 lg:scroll-mt-28 flex items-center justify-center"
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center" id="manifesto-grid-wrapper">
        
        {/* Manifesto Left Side - Manifesto Text & Philosophy Pillars */}
        <div id="manifesto-content-left" className="lg:col-span-5 flex flex-col justify-center select-none">
          <motion.div
            className="text-[#b43b2f] uppercase tracking-[4px] text-[10px] md:text-xs font-bold mb-2 md:mb-5 font-display"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            id="manifesto-kicker"
          >
            {t.manifesto.kicker}
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-[clamp(28px,3.8vw,52px)] leading-[1.15] tracking-tight font-extrabold text-[#050505] font-display"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            id="manifesto-title"
          >
            {t.manifesto.title}
          </motion.h2>

          <motion.p
            className="text-[#443f38]/90 text-sm sm:text-base md:text-[17px] leading-[1.6] max-w-[560px] mt-4 md:mt-6 font-light"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            id="manifesto-paragraph-text"
          >
            {t.manifesto.body}
          </motion.p>

          {/* Pillars List */}
          <div className="mt-8 md:mt-10 space-y-5 max-w-[560px]" id="manifesto-pillars">
            {t.manifesto.pillars?.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="group flex gap-4 pb-4 border-b border-[#050505]/10 last:border-b-0"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                <div className="text-xs font-black text-[#b43b2f] tracking-wider font-display pt-0.5">
                  {pillar.num}
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#050505] group-hover:text-[#b43b2f] transition-colors duration-300">
                    {pillar.label}
                  </h4>
                  <p className="text-xs md:text-[13px] text-[#443f38]/80 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Manifesto Right Side - Image with Coordinates Badge */}
        <div id="manifesto-content-right" className="lg:col-span-7 relative flex flex-col w-full h-full gap-4 md:gap-5">
          {/* Expanding Image Frame with Framer Motion */}
          <motion.div
            className="h-[340px] sm:h-[460px] md:h-[560px] lg:h-[590px] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#050505]/5"
            initial={{
              clipPath: "inset(10% 5% 10% 5% round 24px)",
              opacity: 0.8,
              scale: 0.98,
            }}
            whileInView={{
              clipPath: "inset(0% 0% 0% 0% round 32px)",
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            id="manifesto-img-wrapper"
          >
            {/* Coordinates Badge Overlay */}
            <div 
              className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-[#050505]/80 backdrop-blur-md border border-[#f4efe7]/15 p-4 rounded-2xl text-left text-[#f4efe7] select-none pointer-events-none z-10 shadow-2xl max-w-[220px]"
              id="manifesto-coordinates-badge"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b43b2f] animate-pulse" />
                <span className="text-[9px] uppercase tracking-[2.5px] font-black text-[#b43b2f] font-display">STATUS // VERIFIED</span>
              </div>
              <div className="text-[10px] tracking-[1.5px] font-mono opacity-90 leading-tight uppercase font-semibold">
                NO LIMITS HQ // DNG.VN
              </div>
              <div className="text-[9px] tracking-[1px] font-mono opacity-60 mt-1">
                16.0583° N, 108.2772° E
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                referrerPolicy="no-referrer"
                id="manifesto-img"
              />
            </AnimatePresence>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4" id="manifesto-image-gallery">
            {manifestoGallery.map((image, idx) => (
              <motion.button
                key={image.label}
                type="button"
                onClick={() => setActiveImage(image)}
                aria-label={`Show ${image.label} image`}
                aria-pressed={activeImage.src === image.src}
                className={`group relative h-[120px] sm:h-[140px] md:h-[165px] overflow-hidden rounded-2xl border bg-[#050505] text-left shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition duration-300 ${
                  activeImage.src === image.src
                    ? "border-[#b43b2f] ring-2 ring-[#b43b2f]/30"
                    : "border-[#050505]/10 hover:border-[#b43b2f]/70"
                }`}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.18 + idx * 0.1,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505]/80 to-transparent px-3 pb-3 pt-8 text-[8px] font-black uppercase tracking-[1.8px] text-[#f4efe7] md:text-[9px]">
                  {image.label}
                </figcaption>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
