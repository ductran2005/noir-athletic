import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function Manifesto() {
  const { t } = useTranslation();

  return (
    <section
      id="manifesto"
      className="min-h-fit md:min-h-screen bg-[#f4efe7] text-[#050505] px-4 md:px-11 py-12 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-hidden"
    >
      {/* Manifesto Left Side - Manifesto Text */}
      <div id="manifesto-content-left" className="flex flex-col justify-center">
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
          className="text-2xl sm:text-3xl md:text-[clamp(28px,4vw,56px)] leading-[1.25] md:leading-[1.3] tracking-normal md:tracking-[-0.01em] font-extrabold text-[#050505] font-display"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          id="manifesto-title"
        >
          {t.manifesto.title}
        </motion.h2>

        <motion.p
          className="text-[#443f38] text-sm sm:text-base md:text-[18px] leading-[1.6] md:leading-[1.7] max-w-[560px] mt-4 md:mt-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          id="manifesto-paragraph-text"
        >
          {t.manifesto.body}
        </motion.p>
      </div>

      {/* Manifesto Right Side - Image and Paragraph Description */}
      <div id="manifesto-content-right" className="flex flex-col">
        {/* Expanding Image Frame with Framer Motion */}
        <motion.div
          className="h-[240px] sm:h-[320px] md:h-[520px] rounded-2xl md:rounded-[28px] overflow-hidden"
          initial={{
            clipPath: "inset(10% 5% 10% 5% round 16px)",
            opacity: 0.8,
            scale: 0.98,
          }}
          whileInView={{
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          id="manifesto-img-wrapper"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
            alt="Elite Athletic Training Manifesto"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            referrerPolicy="no-referrer"
            id="manifesto-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
