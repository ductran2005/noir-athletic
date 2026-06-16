"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "#manifesto", label: t.navLinks.manifesto, id: "manifesto" },
    { href: "#passes", label: t.navLinks.passes, id: "passes" },
    { href: "#ritual", label: t.navLinks.training, id: "ritual" },
    { href: "#join", label: t.navLinks.join, id: "join" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed left-0 top-0 z-50 w-full px-3 pt-3 text-[#f4efe7] transition-all duration-500 sm:px-5 lg:grid lg:grid-cols-3 lg:items-center lg:px-11 ${
          isOpen
            ? "lg:bg-[#050505] lg:border-b lg:border-white/5 lg:py-8"
            : isScrolled
            ? "lg:bg-[#050505]/95 lg:backdrop-blur-md lg:border-b lg:border-white/10 lg:py-5"
            : "lg:mix-blend-difference lg:py-8"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        id="navbar"
      >
        <div
          className={`flex w-full items-center justify-between gap-3 rounded-full border px-3 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 lg:contents lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0 ${
            isOpen || isScrolled
              ? "border-[#f4efe7]/12 bg-[#050505]/92"
              : "border-[#f4efe7]/10 bg-[#050505]/54"
          }`}
        >
          <div className="brand min-w-0 lg:flex lg:items-center">
            <a
              href="#"
              id="nav-brand-link"
              onClick={() => setIsOpen(false)}
              className="group flex min-w-0 items-center gap-3"
            >
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f4efe7]/18 bg-[#f4efe7]/8 lg:hidden">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d44c40] shadow-[0_0_18px_rgba(212,76,64,0.75)]" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-[13px] font-black uppercase leading-none tracking-[2px] text-[#f4efe7] lg:text-[15px]">
                  {t.brand}
                </span>
                <span className="mt-1 hidden text-[8px] font-bold uppercase leading-none tracking-[2px] text-[#9e978f] sm:block lg:hidden">
                  Performance Club
                </span>
              </span>
            </a>
          </div>

          <div className="nav-center hidden items-center justify-center gap-[28px] text-[11px] uppercase tracking-[2px] text-[#f4efe7] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative py-2 transition-colors duration-300 hover:text-[#d44c40] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#d44c40] after:transition-transform after:duration-300 hover:after:scale-x-100"
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2 lg:gap-4" id="nav-cta-container">
            <button
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              className="group relative flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#f4efe7]/6 transition-all duration-300 hover:border-[#d44c40]/65 hover:bg-[#d44c40]/10 active:scale-95 lg:h-12 lg:w-12 lg:bg-[#050505]/40"
              id="lang-toggle-btn"
              title={language === "vi" ? "Switch to English" : "Switch to Vietnamese"}
            >
              <span className="pointer-events-none absolute inset-0 rounded-full border border-transparent transition-all duration-500 group-hover:scale-110 group-hover:border-[#d44c40]/40" />
              <span className="select-none font-mono text-[10px] font-extrabold tracking-widest text-[#f4efe7] transition-transform duration-300 group-hover:scale-105 lg:text-sm">
                {language === "vi" ? "VI" : "EN"}
              </span>
            </button>

            <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="nav-cta hidden h-9 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-4 text-[9px] font-bold uppercase leading-none tracking-[2px] text-[#f4efe7] transition-all duration-500 hover:border-[#f4efe7] hover:bg-[#f4efe7] hover:text-[#050505] sm:flex lg:h-12 lg:px-8 lg:text-[11px]"
              id="nav-cta-btn"
            >
              <span className="hidden lg:inline">{t.navLinks.cta}</span>
              <span className="inline lg:hidden">
                {language === "vi" ? "Tham gia" : "Apply"}
              </span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-[#f4efe7]/8 text-[#f4efe7] transition-all hover:border-[#d44c40]/55 hover:bg-[#d44c40]/12 active:scale-95 lg:hidden"
              id="mobile-menu-toggle"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex h-screen flex-col justify-between overflow-hidden bg-[#050505] p-5 pt-[96px] lg:hidden"
            id="mobile-menu-drawer"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(212,76,64,0.2),transparent_32%),linear-gradient(180deg,#050505_0%,#0b0908_55%,#050505_100%)]" />
            <div className="pointer-events-none absolute inset-x-5 top-[84px] h-px bg-gradient-to-r from-transparent via-[#f4efe7]/18 to-transparent" />

            <div className="z-10 flex flex-col gap-6" id="drawer-links-wrapper">
              <span className="border-b border-white/5 pb-3 font-display text-[9px] font-bold uppercase tracking-[3px] text-[#bcb5aa]/70">
                Club navigation // sections
              </span>
              <nav className="flex flex-col gap-1 text-[28px] font-black leading-none tracking-tight" id="mobile-nav-list-items">
                {navItems.map((item, idx) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between border-b border-white/7 py-5 text-[#f4efe7] transition-all hover:border-[#d44c40]/40 hover:text-[#d44c40]"
                  >
                    <span className="flex items-baseline gap-3 font-sans font-black">
                      <span className="font-mono text-[10px] font-bold text-[#d44c40]">0{idx + 1}</span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-[#d44c40] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="z-10 flex flex-col gap-3.5 border-t border-white/10 pt-6" id="drawer-footer">
              <div className="brand text-xs font-extrabold uppercase tracking-[2px] text-[#f4efe7]">
                {t.brand}
              </div>
              <p className="max-w-[280px] text-[11px] font-light leading-relaxed text-[#9e978f]">
                {t.hero.sub}
              </p>
              <div className="font-display text-[9px] font-bold uppercase tracking-[2px] text-[#bcb5aa]" id="drawer-flagship-indicator">
                DANANG FLAGSHIP / EST. 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
