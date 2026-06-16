import { motion } from "motion/react";

export default function Marquee() {
  const marqueeText = "STRENGTH · DISCIPLINE · POWER · CONTROL · ";
  // Repeat enough times to fill up any ultra-wide screen and allow smooth wrap
  const repeatedText = Array(12).fill(marqueeText).join("");

  return (
    <div
      className="py-6 md:py-[28px] overflow-hidden bg-[#b43b2f] text-[#050505] white-space-nowrap font-[950] text-[clamp(28px,6vw,84px)] tracking-[-2px] md:tracking-[-4px] uppercase select-none cursor-default flex items-center"
      id="marquee-container"
    >
      <motion.div
        className="inline-block whitespace-nowrap leading-none pr-4"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80,
        }}
        id="marquee-scroll-track"
      >
        <span>{repeatedText}</span>
        {/* Double for seamless looping */}
        <span>{repeatedText}</span>
      </motion.div>
    </div>
  );
}
