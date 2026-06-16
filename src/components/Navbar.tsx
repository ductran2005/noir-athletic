import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-11 py-4 md:py-8 flex md:grid md:grid-cols-3 justify-between items-center transition-all duration-300 ${
          isOpen ? "bg-[#050505] border-b border-white/5" : "mix-blend-difference text-[#f4efe7]"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        id="navbar"
      >
        <div className="brand font-extrabold tracking-[2px] text-[13px] md:text-[15px] whitespace-nowrap text-[#f4efe7]">
          <a href="#" id="nav-brand-link" onClick={() => setIsOpen(false)}>
            {t.brand}
          </a>
        </div>

        <div className="nav-center hidden md:flex items-center justify-center gap-[28px] text-[11px] uppercase tracking-[2px] text-[#f4efe7]">
          <a
            href="#manifesto"
            className="hover:opacity-75 transition-opacity"
            id="nav-link-manifesto"
          >
            {t.navLinks.manifesto}
          </a>
          <a
            href="#passes"
            className="hover:opacity-75 transition-opacity"
            id="nav-link-passes"
          >
            {t.navLinks.passes}
          </a>
          <a
            href="#ritual"
            className="hover:opacity-75 transition-opacity"
            id="nav-link-ritual"
          >
            {t.navLinks.training}
          </a>
          <a
            href="#join"
            className="hover:opacity-75 transition-opacity"
            id="nav-link-join"
          >
            {t.navLinks.join}
          </a>
        </div>

        <div className="flex justify-end items-center gap-2 md:gap-4" id="nav-cta-container">
          {/* Luxury language switcher - single large circular toggle button */}
          <button
            onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            className="relative group w-9 h-9 md:w-12 md:h-12 rounded-full border border-white/20 hover:border-[#b43b2f] bg-[#050505]/40 hover:bg-[#b43b2f]/10 cursor-pointer flex items-center justify-center transition-all duration-300 transform-gpu active:scale-95 shrink-0"
            id="lang-toggle-btn"
            title={language === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
          >
            {/* Animated glow overlay */}
            <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#b43b2f]/40 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
            
            <span className="font-mono text-[10px] md:text-sm tracking-widest font-extrabold text-[#f4efe7] select-none transition-transform duration-300 group-hover:scale-105">
              {language === "vi" ? "VI" : "EN"}
            </span>
          </button>

          <a
            href="#join"
            onClick={() => setIsOpen(false)}
            className="nav-cta border border-white/40 hover:border-[#f4efe7] hover:bg-[#f4efe7] hover:text-[#050505] h-9 md:h-12 px-3 md:px-8 rounded-full text-[9px] md:text-[11px] uppercase tracking-[2px] transition-all duration-500 font-medium flex items-center justify-center whitespace-nowrap leading-none shrink-0 text-[#f4efe7]"
            id="nav-cta-btn"
          >
            <span className="hidden md:inline">{t.navLinks.cta}</span>
            <span className="inline md:hidden">
              {language === "vi" ? "Tham gia" : "Apply"}
            </span>
          </a>

          {/* Premium Hamburger List Toggle Menu Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/25 bg-[#050505]/60 hover:bg-white/10 active:scale-95 transition-all text-[#f4efe7]"
            id="mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Drawer Overlay with custom matching premium details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen bg-[#050505] z-40 flex flex-col justify-between p-6 pt-[96px]"
            id="mobile-menu-drawer"
          >
            {/* Ambient Deep Atmospheric Red Glow background element */}
            <div 
              className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[240px] h-[240px] rounded-full bg-[#b43b2f]/8 blur-[90px] pointer-events-none"
              id="drawer-ambient-glow"
            />

            {/* List Menu Section */}
            <div className="flex flex-col gap-6 z-10" id="drawer-links-wrapper">
              <span className="text-[9px] uppercase tracking-[3px] text-[#bcb5aa]/60 font-bold font-display border-b border-white/5 pb-2">
                NHÀ THẮM VÀ ĐĂNG KÝ // SECTIONS
              </span>
              <nav className="flex flex-col gap-4 text-xl font-black tracking-tight" id="mobile-nav-list-items">
                <a
                  href="#manifesto"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#b43b2f] transition-all flex items-center justify-between group border-b border-white/5 pb-2.5 text-[#f4efe7]"
                >
                  <span className="font-sans font-black">{t.navLinks.manifesto}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#b43b2f]" />
                </a>
                <a
                  href="#passes"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#b43b2f] transition-all flex items-center justify-between group border-b border-white/5 pb-2.5 text-[#f4efe7]"
                >
                  <span className="font-sans font-black">{t.navLinks.passes}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#b43b2f]" />
                </a>
                <a
                  href="#ritual"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#b43b2f] transition-all flex items-center justify-between group border-b border-white/5 pb-2.5 text-[#f4efe7]"
                >
                  <span className="font-sans font-black">{t.navLinks.training}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#b43b2f]" />
                </a>
                <a
                  href="#join"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#b43b2f] transition-all flex items-center justify-between group border-b border-white/5 pb-2.5 text-[#f4efe7]"
                >
                  <span className="font-sans font-black">{t.navLinks.join}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#b43b2f]" />
                </a>
              </nav>
            </div>

            {/* Premium details block at the bottom matching reference design */}
            <div className="z-10 flex flex-col gap-3.5 border-t border-white/10 pt-6" id="drawer-footer">
              <div className="brand font-extrabold tracking-[2px] text-xs uppercase text-[#f4efe7]">
                {t.brand}
              </div>
              <p className="text-[#9e978f] text-[11px] leading-relaxed max-w-[280px] font-light">
                {t.hero.sub}
              </p>
              <div className="text-[9px] uppercase tracking-[2px] text-[#bcb5aa] font-bold font-display" id="drawer-flagship-indicator">
                DANANG FLAGSHIP • EST. 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
