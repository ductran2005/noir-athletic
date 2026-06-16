"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Check,
  Crown,
  Dumbbell,
  Fingerprint,
  Headphones,
  LockKeyhole,
  PhoneCall,
  ShieldCheck,
  Star,
  Tag,
  Target,
  User,
  Waves,
} from "lucide-react";
import { RegistrationForm } from "../types";
import { useTranslation } from "../context/LanguageContext";

const getPrivilegeIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <Fingerprint className="h-5 w-5" />;
    case 1:
      return <Waves className="h-5 w-5" />;
    case 2:
      return <Dumbbell className="h-5 w-5" />;
    case 3:
      return <Target className="h-5 w-5" />;
    default:
      return <Check className="h-5 w-5" />;
  }
};

interface ApplicationProps {
  selectedPass: string;
}

export default function ApplicationForm({ selectedPass }: ApplicationProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<RegistrationForm>({
    name: "",
    phone: "",
    passType: "Essential",
    goals: "",
  });
  const [errors, setErrors] = useState<Partial<RegistrationForm>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [memberCode, setMemberCode] = useState("");

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
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const categoryCode = formData.passType.replace(" ", "").toUpperCase().substring(0, 5);
      setMemberCode(`LIMITS-${categoryCode}-${randomId}`);
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

  const fieldBase =
    "w-full rounded-xl border border-[#f4efe7]/24 bg-[#0b0a09]/76 px-14 py-4 text-base text-[#f4efe7] outline-none transition-all duration-300 placeholder:text-[#bcb5aa]/58 focus:border-[#ff2f1f]/80 focus:bg-[#120f0d]/88 focus:shadow-[0_0_0_4px_rgba(255,47,31,0.14)]";
  const packageLabel = formData.passType === "Elite PT" ? "ELITE" : formData.passType.toUpperCase();
  const heroWords = t.form.title.split(" ");
  const primaryHeroWord = heroWords.slice(0, 2).join(" ") || t.form.title;
  const secondaryHeroWord = heroWords.slice(2).join(" ") || "Elite Training Club";
  const quickStats = [
    { icon: <Activity className="h-7 w-7" />, value: "24/7", label: t.form.quickStats.access.label, desc: t.form.quickStats.access.desc },
    { icon: <Dumbbell className="h-7 w-7" />, value: "1:1", label: t.form.quickStats.coach.label, desc: t.form.quickStats.coach.desc },
    { icon: <Star className="h-7 w-7" />, value: "15 min", label: t.form.quickStats.intake.label, desc: t.form.quickStats.intake.desc },
  ];
  const formBadges = [
    { icon: <LockKeyhole className="h-5 w-5" />, label: t.form.formBadges.security },
    { icon: <Headphones className="h-5 w-5" />, label: t.form.formBadges.consultation },
    { icon: <ShieldCheck className="h-5 w-5" />, label: t.form.formBadges.commitment },
  ];

  return (
    <section
      id="join"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-16 text-[#f4efe7] scroll-mt-20 sm:px-6 md:px-11 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/hero/no-limits-gym-floor.png')] bg-cover bg-center opacity-48" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_36%,rgba(255,47,31,0.22),transparent_32%),linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.72)_46%,rgba(5,5,5,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.62)_0%,rgba(5,5,5,0.18)_48%,rgba(5,5,5,0.92)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_72%_50%,rgba(255,47,31,0.18),transparent_38%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14" id="join-columns-container">
        <div id="join-headline-wrapper" className="select-none lg:col-span-7">
          <motion.div
            className="mb-7 flex flex-wrap items-center gap-4 text-[11px] font-black uppercase tracking-[5px] text-[#ff2f1f] md:text-sm"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            id="join-kicker"
          >
            <span className="h-px w-12 bg-[#ff2f1f]" />
            <span>{t.form.kicker}</span>
          </motion.div>

          <motion.h2
            className="max-w-[820px] text-left font-sans text-[clamp(54px,8.4vw,118px)] font-[950] uppercase leading-[0.86] text-[#f4efe7]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            id="join-title"
          >
            <span className="block drop-shadow-[0_7px_22px_rgba(0,0,0,0.8)]">{primaryHeroWord}</span>
            <span className="mt-2 block bg-gradient-to-b from-[#ff3b28] via-[#ef2b1c] to-[#a91008] bg-clip-text text-[0.78em] text-transparent drop-shadow-[0_10px_30px_rgba(255,47,31,0.34)]">
              {secondaryHeroWord}
            </span>
          </motion.h2>

          <motion.p
            className="mt-7 max-w-[580px] text-base font-light leading-relaxed text-[#f4efe7]/88 md:text-[21px]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            {t.form.desc}
          </motion.p>

          <motion.div
            className="mt-9 grid max-w-[620px] grid-cols-3 gap-0 md:mt-11"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            {quickStats.map((item, idx) => (
              <div key={item.label} className={`flex flex-col items-center gap-2 px-3 text-center ${idx > 0 ? "border-l border-[#f4efe7]/20" : ""}`}>
                <div className="relative flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#f4efe7]/58 text-[#f4efe7] shadow-[0_0_24px_rgba(255,47,31,0.12)]">
                  <span className="absolute inset-[-2px] rounded-full border-t-2 border-r-2 border-[#ff2f1f]" />
                  {item.icon}
                </div>
                <strong className="text-sm font-black uppercase text-[#f4efe7]">{item.value}</strong>
                <span className="text-xs font-black uppercase text-[#f4efe7] md:text-sm">{item.label}</span>
                <span className="text-xs font-light text-[#bcb5aa]">{item.desc}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-8 grid max-w-[675px] grid-cols-1 overflow-hidden rounded-lg border border-[#f4efe7]/10 bg-[#050505]/62 backdrop-blur-sm sm:grid-cols-3" id="join-privileges">
            {t.form.privileges?.slice(0, 3).map((priv, idx) => (
              <motion.div
                key={idx}
                className={`group relative flex flex-col gap-4 p-7 transition-colors duration-300 hover:bg-[#f4efe7]/5 ${idx > 0 ? "border-t border-[#f4efe7]/10 sm:border-l sm:border-t-0" : ""}`}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg font-black text-[#ff2f1f]">{priv.num}</span>
                  <span className="text-[#f4efe7] transition-colors duration-300 group-hover:text-[#ff2f1f]">{idx === 0 ? <Crown className="h-8 w-8" /> : getPrivilegeIcon(idx)}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-black uppercase leading-snug text-[#f4efe7] transition-colors duration-300 group-hover:text-[#ff2f1f]">
                    {priv.title}
                  </h4>
                  <p className="mt-3 text-sm font-light leading-[1.65] text-[#d5cec4] transition-colors duration-300 group-hover:text-[#f4efe7]">
                    {priv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-8 hidden max-w-[690px] items-center gap-4 text-sm italic leading-relaxed text-[#c9c0b4] sm:flex md:text-base"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            <span className="font-display text-4xl font-black not-italic leading-none text-[#ff2f1f]">“</span>
            <span>{t.form.quote}</span>
            <span className="font-display text-4xl font-black not-italic leading-none text-[#ff2f1f]">”</span>
          </motion.p>
        </div>

        <div className="flex w-full justify-center lg:col-span-5 lg:justify-end" id="join-form-wrapper">
          <div className="perspective-1000 relative h-[820px] w-full max-w-[545px] md:h-[800px]" id="join-card-container">
            <div className={`relative h-full w-full transform-style-3d transition-transform duration-1000 ${isSubmitted ? "rotate-y-180" : ""}`}>
              <div className={`absolute inset-0 z-10 h-full w-full backface-hidden ${isSubmitted ? "pointer-events-none" : ""}`}>
                <form
                  onSubmit={handleSubmit}
                  className="relative flex h-full w-full flex-col overflow-hidden rounded-[26px] border border-[#f4efe7]/28 bg-[#090807]/82 p-6 shadow-[0_34px_120px_rgba(0,0,0,0.72),0_0_58px_rgba(255,47,31,0.1)] backdrop-blur-2xl md:p-9"
                  id="registration-form"
                >
                  <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-[#ff2f1f]/18 blur-2xl" />

                  <div id="form-header" className="relative z-10">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-7 inline-flex rounded-full border border-[#ff2f1f] px-4 py-2 text-[11px] font-black uppercase tracking-[4px] text-[#ff2f1f]">Private intake</p>
                        <h3 className="text-3xl font-black uppercase leading-[1.04] text-[#f4efe7] md:text-[34px]">
                          {t.form.header}
                        </h3>
                      </div>
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#ff2f1f]/42 bg-[#ff2f1f]/12 text-[#ff2f1f] shadow-[0_0_30px_rgba(255,47,31,0.3)]">
                        <ShieldCheck className="h-8 w-8" />
                      </div>
                    </div>
                    <p className="max-w-sm text-base font-light leading-relaxed text-[#f4efe7]/82">{t.form.sub}</p>
                  </div>

                  <div className="relative z-10 mt-6 flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-2" id="input-group-name">
                      <div className="relative flex items-center">
                        <User className="absolute left-5 h-5 w-5 text-[#f4efe7]/70" />
                        <input
                          type="text"
                          placeholder={t.form.placeholderName}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={fieldBase}
                          id="form-input-name"
                        />
                      </div>
                      {errors.name && <span className="text-xs font-medium text-[#d44c40]">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-2" id="input-group-phone">
                      <div className="relative flex items-center">
                        <PhoneCall className="absolute left-5 h-5 w-5 text-[#f4efe7]/70" />
                        <input
                          type="text"
                          placeholder={t.form.placeholderPhone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={fieldBase}
                          id="form-input-phone"
                        />
                      </div>
                      {errors.phone && <span className="text-xs font-medium text-[#d44c40]">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-2" id="input-group-package">
                      <div className="relative flex items-center">
                        <Tag className="absolute left-5 h-5 w-5 text-[#f4efe7]/70" />
                        <select
                          value={formData.passType}
                          onChange={(e) => setFormData({ ...formData, passType: e.target.value })}
                          className="w-full cursor-pointer appearance-none rounded-xl border border-[#f4efe7]/24 bg-[#0b0a09]/76 px-14 py-4 text-base font-semibold text-[#f4efe7] outline-none transition-all duration-300 focus:border-[#ff2f1f]/80 focus:bg-[#120f0d]/88 focus:shadow-[0_0_0_4px_rgba(255,47,31,0.14)]"
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
                        <ArrowRight className="pointer-events-none absolute right-5 h-5 w-5 rotate-90 text-[#f4efe7]" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2" id="input-group-goals">
                      <div className="relative flex">
                        <Target className="absolute left-5 top-5 h-5 w-5 text-[#f4efe7]/70" />
                        <textarea
                          rows={3}
                          placeholder={t.form.placeholderGoals}
                          value={formData.goals}
                          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                          className="w-full resize-none rounded-xl border border-[#f4efe7]/24 bg-[#0b0a09]/76 px-14 py-4 text-base font-light text-[#f4efe7] outline-none transition-all duration-300 placeholder:text-[#bcb5aa]/58 focus:border-[#ff2f1f]/80 focus:bg-[#120f0d]/88 focus:shadow-[0_0_0_4px_rgba(255,47,31,0.14)]"
                          id="form-textarea-goals"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-5 flex flex-col gap-5" id="form-submit-block">
                    <div className="grid grid-cols-3 gap-2">
                      {formBadges.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2 border-r border-[#f4efe7]/12 pr-2 last:border-r-0 last:pr-0">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f4efe7]/22 text-[#f4efe7]">
                            {badge.icon}
                          </span>
                          <span className="text-[11px] font-light leading-snug text-[#f4efe7]/82">{badge.label}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl bg-[#ff2f1f] px-6 py-5 text-center text-base font-black uppercase leading-none text-[#f4efe7] shadow-[0_20px_58px_rgba(255,47,31,0.28)] transition-all duration-300 hover:bg-[#f4efe7] hover:text-[#050505] active:scale-[0.98] md:text-lg"
                      id="form-submit-btn"
                    >
                      <span>{t.form.btnSubmit}</span>
                      <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <p className="flex items-center justify-center gap-1 text-center text-sm font-light text-[#c9c0b4]">
                      {t.form.note}
                    </p>
                  </div>
                </form>
              </div>

              <div className={`absolute inset-0 z-0 h-full w-full rotate-y-180 backface-hidden ${!isSubmitted ? "pointer-events-none" : ""}`}>
                <div
                  className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#f4efe7]/25 bg-gradient-to-br from-[#211916] via-[#0d0c0b] to-[#050505] p-7 text-center shadow-[0_40px_120px_rgba(0,0,0,0.72)] md:p-10"
                  id="success-membership-pass"
                >
                  <div className="absolute inset-0 opacity-25 [background:repeating-linear-gradient(90deg,transparent_0px,transparent_10px,rgba(244,239,231,0.08)_11px)]" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d44c40] to-transparent" />

                  <div className="relative z-10 flex flex-col gap-3" id="card-pass-header">
                    <div className="flex items-center justify-center gap-2" id="card-logo-container">
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#d44c40]" />
                      <span className="font-display text-[11px] font-bold uppercase tracking-[3px] text-[#d44c40]">{t.brand}</span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-[#f4efe7] md:text-4xl">{t.form.cardTitle}</h3>
                    <div className="mx-auto mt-1 h-px w-16 bg-[#d44c40]" />
                  </div>

                  <div className="relative z-10 my-2 flex flex-col items-center justify-center gap-7" id="card-pass-body">
                    <div id="card-member-name">
                      <span className="block text-[11px] font-light uppercase tracking-[2px] text-[#8d867c]">{t.form.cardBadge}</span>
                      <div className="mt-2 text-3xl font-black uppercase tracking-tight text-[#f4efe7] md:text-4xl">{formData.name}</div>
                    </div>

                    <div className="border border-[#d44c40] bg-[#d44c40] px-8 py-3 font-display text-xs font-black uppercase tracking-[3px] text-[#f4efe7] md:text-sm" id="card-member-level">
                      {formData.passType} Pass
                    </div>

                    <div className="mt-2 flex w-full max-w-[300px] flex-col items-center gap-2 opacity-90" id="card-pass-barcode-block">
                      <div className="flex h-14 w-full justify-center gap-[3px]" id="barcode-bars">
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
                      <div className="mt-1 font-mono text-[11px] font-semibold tracking-[1.5px] text-[#9e978f]">{memberCode}</div>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col gap-4" id="card-pass-footer">
                    <div className="flex items-center justify-center gap-2 text-xs text-[#bcb5aa] md:text-sm" id="card-status-ok">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950 text-[10px] font-bold text-emerald-400">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                      <span>{t.form.cardSuccessMsg}</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full cursor-pointer rounded-2xl border border-[#f4efe7]/20 px-6 py-4 text-[11px] font-bold uppercase tracking-[2px] text-[#f4efe7] transition-all duration-300 hover:border-[#d44c40]/50 hover:bg-[#d44c40]/10 md:text-xs"
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
