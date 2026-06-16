"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ShieldCheck, PhoneCall, User, Fingerprint, Waves, Dumbbell, Target } from "lucide-react";
import { RegistrationForm } from "../types";
import { useTranslation } from "../context/LanguageContext";

const getPrivilegeIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <Fingerprint className="w-5 h-5 text-[#b43b2f]" />;
    case 1:
      return <Waves className="w-5 h-5 text-[#b43b2f]" />;
    case 2:
      return <Dumbbell className="w-5 h-5 text-[#b43b2f]" />;
    case 3:
      return <Target className="w-5 h-5 text-[#b43b2f]" />;
    default:
      return <Check className="w-5 h-5 text-[#b43b2f]" />;
  }
};

interface ApplicationProps {
  selectedPass: string;
}

export default function ApplicationForm({ selectedPass }: ApplicationProps) {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [formData, setFormData] = useState<RegistrationForm>({
    name: "",
    phone: "",
    passType: "Essential",
    goals: "",
  });

  const [errors, setErrors] = useState<Partial<RegistrationForm>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [memberCode, setMemberCode] = useState("");

  // Sync selected pass from pricing cards click
  useEffect(() => {
    if (selectedPass) {
      setFormData((prev) => ({ ...prev, passType: selectedPass }));
    }
  }, [selectedPass]);

  const validate = (): boolean => {
    const tempErrors: Partial<RegistrationForm> = {};
    if (!formData.name.trim()) {
      tempErrors.name = t.form.errorName;
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = t.form.errorPhoneEmpty;
    } else if (!/^[0-9+ ]{9,13}$/.test(formData.phone.trim())) {
      tempErrors.phone = t.form.errorPhoneInvalid;
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Create a random membership code
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const categoryCode = formData.passType.replace(" ", "").toUpperCase().substring(0, 5);
      setMemberCode(`NOIR-${categoryCode}-${randomId}`);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      passType: "Essential",
      goals: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="join"
      className="min-h-0 lg:min-h-screen bg-[#050505] text-[#f4efe7] px-4 sm:px-6 md:px-11 py-14 sm:py-16 md:py-32 flex items-start lg:items-center relative overflow-hidden scroll-mt-20 lg:scroll-mt-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 75% 20%, rgba(180,59,47,0.22) 0%, transparent 40%)",
      }}
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center z-10" id="join-columns-container">
        {/* Title block on Left (Takes up 6 out of 12 columns) - Make it significantly larger ("context to hơn") */}
        <div id="join-headline-wrapper" className="lg:col-span-6 flex flex-col justify-center select-none">
          <motion.div
            className="text-[#b43b2f] uppercase tracking-[3px] md:tracking-[4px] text-[10px] md:text-sm font-bold mb-2.5 md:mb-6 font-display"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            id="join-kicker"
          >
            {t.form.kicker}
          </motion.div>

          <motion.h2
            className="text-[clamp(44px,13vw,64px)] md:text-[clamp(48px,6vw,96px)] leading-[0.92] md:leading-[1.0] tracking-normal md:tracking-[-3px] uppercase font-[950] font-sans text-left text-[#f4efe7]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            id="join-title"
          >
            {t.form.title.split(" ").map((word, idx) => (
              <span key={idx} className="inline-block mr-[0.25em] last:mr-0">
                {word}
              </span>
            ))}
          </motion.h2>

          {/* Elegant divider line */}
          <motion.div 
            className="h-[1px] w-24 bg-gradient-to-r from-[#b43b2f] to-transparent mt-6 mb-8 hidden lg:block"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Privileges list below the title */}
          <div className="mt-7 md:mt-8 lg:mt-0 space-y-2.5 md:space-y-3.5 max-w-xl" id="join-privileges">
            {t.form.privileges?.map((priv, idx) => (
              <motion.div
                key={idx}
                className="group flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl border border-[#f4efe7]/8 md:border-[#f4efe7]/0 bg-white/[0.02] md:bg-white/0 hover:border-[#f4efe7]/10 hover:bg-white/[0.03] md:hover:bg-white/[0.02] transition-all duration-500 cursor-pointer relative overflow-hidden"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* A subtle glowing circle inside the hovered card */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#b43b2f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl pointer-events-none" />
                
                <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#b43b2f]/7 border border-[#b43b2f]/15 group-hover:bg-[#b43b2f]/15 group-hover:border-[#b43b2f]/30 transition-all duration-500 relative z-10 shrink-0">
                  {getPrivilegeIcon(idx)}
                </div>
                
                <div className="flex-1 min-w-0 space-y-1 relative z-10">
                  <div className="flex items-start gap-2">
                    <span className="text-[9px] md:text-[10px] leading-[1.25] pt-0.5 font-black text-[#b43b2f] tracking-widest font-display shrink-0">
                      {priv.num}
                    </span>
                    <h4 className="text-[13px] md:text-base leading-snug font-extrabold uppercase tracking-normal md:tracking-wider text-[#f4efe7] group-hover:text-[#b43b2f] transition-colors duration-300">
                      {priv.title}
                    </h4>
                  </div>
                  <p className="text-[11px] md:text-sm text-[#9e978f] font-light leading-[1.55] md:leading-relaxed group-hover:text-[#bcb5aa] transition-colors duration-300">
                    {priv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form or Ticket display block on Right (Takes up 6 out of 12 columns) - Taller and broader padding & font sizes */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full z-10" id="join-form-wrapper">
          <div className="perspective-1000 w-full max-w-lg h-[560px] sm:h-[590px] md:h-[620px] relative" id="join-card-container">
            <div className={`w-full h-full transition-transform duration-1000 transform-style-3d relative ${isSubmitted ? "rotate-y-180" : ""}`}>
              
              {/* Front Side: Form */}
              <div className={`absolute inset-0 w-full h-full backface-hidden z-10 ${isSubmitted ? "pointer-events-none" : ""}`}>
                <form
                  onSubmit={handleSubmit}
                  className="w-full h-full p-5 md:p-10 pb-8 rounded-[24px] md:rounded-[32px] border border-[#f4efe7]/15 bg-white/[0.04] backdrop-blur-[24px] flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                  id="registration-form"
                >
                  <div id="form-header" className="text-center md:text-left">
                    {/* Make header and subtitle larger and cleaner */}
                    <h3 className="text-lg md:text-2xl font-black tracking-tight uppercase mb-1.5 md:mb-2 text-[#f4efe7]">
                      {t.form.header}
                    </h3>
                    <p className="text-[#9e978f] text-xs md:text-sm font-light leading-relaxed">
                      {t.form.sub}
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col gap-1 md:gap-2" id="input-group-name">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] md:tracking-[2px] text-[#bcb5aa] font-bold">
                      {t.form.labelName}
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-0 text-[#b43b2f] w-4 h-4 opacity-90" />
                      <input
                        type="text"
                        placeholder={t.form.placeholderName}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-[#f4efe7]/25 focus:border-[#b43b2f] text-[#f4efe7] pl-6 py-2 md:py-3 transition-colors duration-300 outline-none text-sm md:text-base placeholder-[#9e978f]/50 font-medium"
                        id="form-input-name"
                      />
                    </div>
                    {errors.name && (
                      <span className="text-[#b43b2f] text-[11px] font-medium mt-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1 md:gap-2" id="input-group-phone">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] md:tracking-[2px] text-[#bcb5aa] font-bold">
                      {t.form.labelPhone}
                    </label>
                    <div className="relative flex items-center">
                      <PhoneCall className="absolute left-0 text-[#b43b2f] w-4 h-4 opacity-90" />
                      <input
                        type="text"
                        placeholder={t.form.placeholderPhone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-[#f4efe7]/25 focus:border-[#b43b2f] text-[#f4efe7] pl-6 py-2 md:py-3 transition-colors duration-300 outline-none text-sm md:text-base placeholder-[#9e978f]/50 font-medium"
                        id="form-input-phone"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[#b43b2f] text-[11px] font-medium mt-1">{errors.phone}</span>
                    )}
                  </div>

                  {/* Select Package dropdown */}
                  <div className="flex flex-col gap-1 md:gap-2" id="input-group-package">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] md:tracking-[2px] text-[#bcb5aa] font-bold">
                      {t.form.labelPackage}
                    </label>
                    <select
                      value={formData.passType}
                      onChange={(e) => setFormData({ ...formData, passType: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#f4efe7]/25 focus:border-[#b43b2f] text-[#f4efe7] py-2 md:py-3 transition-colors duration-300 outline-none text-sm md:text-base cursor-pointer font-medium"
                      id="form-select-pack"
                    >
                      <option value="Essential" className="bg-[#111111] text-[#f4efe7]">
                        {t.form.options.essential}
                      </option>
                      <option value="Premium" className="bg-[#111111] text-[#f4efe7]">
                        {t.form.options.premium}
                      </option>
                      <option value="Elite PT" className="bg-[#111111] text-[#f4efe7]">
                        {t.form.options.elite}
                      </option>
                    </select>
                  </div>

                  {/* Training goals text */}
                  <div className="flex flex-col gap-1 md:gap-2" id="input-group-goals">
                    <label className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] md:tracking-[2px] text-[#bcb5aa] font-bold">
                      {t.form.labelGoals}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={t.form.placeholderGoals}
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-[#f4efe7]/25 focus:border-[#b43b2f] text-[#f4efe7] py-2 md:py-3 transition-colors duration-300 outline-none text-sm md:text-base resize-none placeholder-[#9e978f]/40 font-light"
                      id="form-textarea-goals"
                    />
                  </div>

                  {/* Action and security footer */}
                  <div className="mt-1 flex flex-col gap-3 md:gap-4" id="form-submit-block">
                    <button
                      type="submit"
                      className="w-full py-3 md:py-4 px-6 rounded-full bg-[#f4efe7] text-[#050505] text-[11px] md:text-xs uppercase tracking-[1.5px] md:tracking-[2px] font-black cursor-pointer hover:bg-[#b43b2f] hover:text-[#f4efe7] active:scale-[0.98] transition-all duration-300 leading-none shadow-lg text-center"
                      id="form-submit-btn"
                    >
                      {t.form.btnSubmit}
                    </button>

                    <p className="flex items-center justify-center gap-1.5 text-[9px] md:text-[10px] text-[#9e978f]/90 font-light tracking-[0.5px]">
                      <ShieldCheck className="w-4 h-4 text-[#b43b2f]" /> {t.form.securityBadge}
                    </p>
                  </div>
                </form>
              </div>

              {/* Back Side: Digital Membership Pass Card */}
              <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 z-0 ${!isSubmitted ? "pointer-events-none" : ""}`}>
                <div
                  className="w-full h-full rounded-[24px] md:rounded-[32px] border border-[#f4efe7]/25 bg-gradient-to-br from-[#1c1a16] to-[#0a0a0a] shadow-2xl overflow-hidden relative p-8 md:p-11 text-center flex flex-col justify-between"
                  id="success-membership-pass"
                >
                  {/* Card visual elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#b43b2f]/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-44 h-44 bg-[#b43b2f]/8 rounded-full blur-3xl pointer-events-none" />

                  {/* Header section */}
                  <div className="flex flex-col gap-3 relative z-10" id="card-pass-header">
                    <div className="flex items-center justify-center gap-1.5" id="card-logo-container">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#b43b2f] animate-pulse" />
                      <span className="text-[11px] uppercase font-bold tracking-[3px] text-[#b43b2f] font-display">
                        Noir Athletic Club
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide text-[#f4efe7]">
                      {t.form.cardTitle}
                    </h3>
                    <div className="h-[1px] w-14 bg-[#b43b2f] mx-auto mt-1" />
                  </div>

                  {/* Card barcode and ID body */}
                  <div className="flex flex-col gap-6 relative z-10 items-center justify-center my-2" id="card-pass-body">
                    {/* Member name stamp */}
                    <div id="card-member-name">
                      <span className="text-[11px] text-[#8d867c] uppercase tracking-[2px] block font-light">
                        {t.form.cardBadge}
                      </span>
                      <div className="text-2xl md:text-3xl font-extrabold text-[#f4efe7] uppercase tracking-wide mt-1">
                        {formData.name}
                      </div>
                    </div>

                    {/* Membership level badge */}
                    <div className="py-2.5 px-8 rounded-full bg-[#b43b2f] border border-[#b43b2f] text-[#f4efe7] font-black text-xs md:text-sm uppercase tracking-[3px] font-display" id="card-member-level">
                      {formData.passType} Pass
                    </div>

                    {/* Unique Serial Barcode design */}
                    <div className="flex flex-col items-center gap-1 mt-2 w-full max-w-[260px] opacity-90" id="card-pass-barcode-block">
                      <div className="flex gap-[2px] h-11 w-full justify-center" id="barcode-bars">
                        {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8].map((w, i) => (
                          <span
                            key={i}
                            className="bg-[#f4efe7]"
                            style={{
                              width: `${w * 0.45 + 0.85}px`,
                              opacity: i % 3 === 0 ? 0.3 : 0.85,
                            }}
                          />
                        ))}
                      </div>
                      <div className="text-[11px] text-[#9e978f] tracking-[1.5px] font-mono mt-1 font-semibold">
                        {memberCode}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer actions */}
                  <div className="flex flex-col gap-4 relative z-10" id="card-pass-footer">
                    <div className="flex items-center gap-2 justify-center text-xs md:text-sm text-[#bcb5aa]" id="card-status-ok">
                      <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>{t.form.cardSuccessMsg}</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full py-3.5 px-6 rounded-full border border-[#f4efe7]/20 hover:border-[#b43b2f]/40 hover:bg-[#b43b2f]/10 text-[#f4efe7] text-[11px] md:text-xs uppercase tracking-[2px] font-bold cursor-pointer transition-all duration-300"
                      id="card-reset-btn"
                    >
                      {t.form.cardBtnReset}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
