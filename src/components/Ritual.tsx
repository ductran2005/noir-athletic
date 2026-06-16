import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrainingRitual } from "../types";
import { useTranslation } from "../context/LanguageContext";

export default function Ritual() {
  const { t } = useTranslation();

  const rituals: TrainingRitual[] = [
    {
      id: "strength-lab",
      number: "01",
      title: t.ritual.items.strength.title,
      description: t.ritual.items.strength.desc,
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1300&q=80",
    },
    {
      id: "cardio-tunnel",
      number: "02",
      title: t.ritual.items.cardio.title,
      description: t.ritual.items.cardio.desc,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1300&q=80",
    },
    {
      id: "recovery-room",
      number: "03",
      title: t.ritual.items.recovery.title,
      description: t.ritual.items.recovery.desc,
      image: "https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=1300&q=80",
    },
    {
      id: "private-pt-suite",
      number: "04",
      title: t.ritual.items.private.title,
      description: t.ritual.items.private.desc,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1300&q=80",
    },
  ];

  const [activeRitualId, setActiveRitualId] = useState<string>(rituals[0].id);
  const activeRitual = rituals.find((r) => r.id === activeRitualId) || rituals[0];

  return (
    <section id="ritual" className="bg-[#111111] px-4 md:px-11 py-12 md:py-28 overflow-hidden text-[#f4efe7]">
      <motion.div
        className="text-[#b43b2f] uppercase tracking-[4px] text-[10px] md:text-xs font-bold mb-3 md:mb-5 font-display"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        id="ritual-kicker"
      >
        {t.ritual.kicker}
      </motion.div>

      <motion.h2
        className="text-3xl md:text-[clamp(32px,5.5vw,72px)] leading-[1.2] md:leading-[1.1] tracking-normal md:tracking-[-0.01em] uppercase font-extrabold max-w-4xl font-display mb-8 md:mb-16"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.1 }}
        id="ritual-title"
      >
        {t.ritual.title}
      </motion.h2>

      {/* Interactive Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-11 items-stretch mt-8 md:mt-16" id="ritual-interactive-grid">
        {/* Left Side: Buttons Menu list */}
        <div className="flex flex-col gap-3 md:gap-4 justify-center" id="ritual-buttons-menu">
          {rituals.map((ritual) => {
            const isActive = activeRitualId === ritual.id;
            return (
              <button
                key={ritual.id}
                onMouseEnter={() => setActiveRitualId(ritual.id)}
                onClick={() => setActiveRitualId(ritual.id)}
                className={`text-left p-5 md:p-8 rounded-2xl md:rounded-[26px] border transition-all duration-300 flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center cursor-pointer select-none relative overflow-hidden group ${
                  isActive
                     ? "bg-[#b43b2f] border-[#b43b2f] text-[#050505]"
                    : "bg-[#080808] border-[#f4efe7]/10 hover:border-[#b43b2f]/30 hover:bg-[#0c0c0c]"
                }`}
                id={`ritual-menu-btn-${ritual.id}`}
              >
                {/* Number tag */}
                <span
                  className={`text-[10px] md:text-xs tracking-[3px] font-bold font-display uppercase shrink-0 ${
                    isActive ? "text-[#f4efe7]" : "text-[#8d867c]"
                  }`}
                >
                  {ritual.number}
                </span>

                {/* Title & dynamic description container */}
                <div className="flex flex-col flex-grow w-full">
                  <h3 className="text-xl md:text-[32px] font-extrabold tracking-tight uppercase leading-none">
                    {ritual.title}
                  </h3>
                  
                  {/* Expandable description block */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden w-full"
                      >
                        <p className="text-sm leading-[1.6] mr-2 font-normal text-inherit opacity-90 max-w-xl">
                          {ritual.description}
                        </p>

                        {/* Mobile active image container */}
                        <div className="block md:hidden mt-4 h-[200px] rounded-xl overflow-hidden relative w-full border border-black/10">
                          <img
                            src={ritual.image}
                            alt={ritual.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Image display block with luxury slanted shape - Desktop Only */}
        <div className="hidden md:block relative min-h-[500px] rounded-[34px] overflow-hidden" id="ritual-display-wrapper">
          <div
            className="w-full h-full overflow-hidden block relative transition-transform duration-700"
            style={{
              clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
            }}
            id="ritual-slanted-clip"
          >
            {/* Visual ambient shade layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

            <AnimatePresence mode="wait">
              <motion.img
                key={activeRitual.id}
                src={activeRitual.image}
                alt={`NOIR Athletic Space - ${activeRitual.title}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                referrerPolicy="no-referrer"
                id={`ritual-active-image-${activeRitual.id}`}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
