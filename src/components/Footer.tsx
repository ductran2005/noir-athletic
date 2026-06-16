import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const { language, t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Social Links mapping
  const socialLinks = [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Youtube", href: "#", icon: Youtube },
  ];

  // Footer translations helper
  const footerT = {
    vi: {
      locationTitle: "Địa điểm CLB",
      address: "01 Đường 2 Tháng 9, Hải Châu, Đà Nẵng, Việt Nam",
      contactTitle: "Liên hệ tuyển sinh",
      hoursTitle: "Thời gian hoạt động",
      hoursBody: "Mở cửa 24/7 cho Hội viên chính thức",
      officeHours: "Văn phòng tuyển sinh: 08:00 - 22:00 hằng ngày",
      navTitle: "Khám phá",
      legalTitle: "Pháp lý & Bảo mật",
      terms: "Điều khoản",
      privacy: "Bảo mật",
      cookie: "Cookies",
      newsletterTitle: "Nhận thông tin tuyển sinh",
      newsletterSub: "Cập nhật các chương trình ưu đãi và sự kiện đặc quyền.",
      newsletterPlaceholder: "Địa chỉ email của bạn",
      newsletterBtn: "Đăng ký",
    },
    en: {
      locationTitle: "Club Location",
      address: "01 September 2 Rd, Hai Chau, Da Nang, Vietnam",
      contactTitle: "Contact Us",
      hoursTitle: "Operating Hours",
      hoursBody: "Open 24/7 for Registered Members",
      officeHours: "Admissions Office: 08:00 - 22:00 Daily",
      navTitle: "Navigation",
      legalTitle: "Legal & Privacy",
      terms: "Terms",
      privacy: "Privacy",
      cookie: "Cookies",
      newsletterTitle: "Admissions newsletter",
      newsletterSub: "Get updates on exclusive programs and privilege events.",
      newsletterPlaceholder: "Your email address",
      newsletterBtn: "Subscribe",
    },
  };

  const f = language === "vi" ? footerT.vi : footerT.en;

  return (
    <footer
      className="bg-[#050505] text-[#f4efe7] border-t border-[#f4efe7]/10 pt-10 md:pt-20 pb-6 md:pb-10 px-5 md:px-11 relative overflow-hidden"
      id="noir-footer"
    >
      {/* Background ambient red glow to match Noir Atmospheric feeling */}
      <div 
        className="absolute bottom-0 right-[15%] w-[250px] h-[250px] rounded-full bg-[#b43b2f]/5 blur-[100px] pointer-events-none"
        id="footer-glow"
      />

      <div className="max-w-[1440px] mx-auto" id="footer-container">
        {/* Main Grid: Adapts to clean stacked list on mobile, grid layout on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 pb-8 md:pb-12 border-b border-[#f4efe7]/10" id="footer-main-grid">
          
          {/* Column 1: Brand & Condensed Tagline */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6" id="footer-brand-section">
            <div className="brand-logo" id="footer-logo-wrapper">
              <span className="font-sans font-black tracking-[4px] text-2xl md:text-xl uppercase block text-[#f4efe7]">
                {t.brand}
              </span>
              <span className="text-[#b43b2f] text-[10px] md:text-xs uppercase tracking-[4px] font-bold mt-1 block font-display">
                {t.hero.tagline}
              </span>
            </div>

            <p className="text-[#9e978f] text-xs md:text-sm font-light leading-relaxed max-w-sm">
              {t.hero.sub}
            </p>

            {/* Est. 2026 flagship indicator matching requested reference layout */}
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[2.5px] text-[#bcb5aa] font-bold font-display" id="footer-flagship-indicator">
              <MapPin className="w-3.5 h-3.5 text-[#b43b2f]" />
              <span>ĐÀ NẴNG FLAGSHIP</span>
              <span className="text-[#9e978f]/40 select-none">•</span>
              <span>EST. 2026</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Compact category listings) */}
          <div className="lg:col-span-2 flex flex-col gap-3 md:gap-4" id="footer-navigation">
            <span className="text-[10px] md:text-xs uppercase tracking-[2px] text-[#bcb5aa]/70 font-bold font-display border-b border-[#f4efe7]/5 pb-1.5">
              {f.navTitle.toUpperCase()}
            </span>
            <ul className="flex flex-col gap-2 text-xs md:text-sm font-medium text-[#f4efe7]/90" id="footer-nav-list">
              <li>
                <a href="#manifesto" className="hover:text-[#b43b2f] transition-colors flex items-center gap-1 py-1.5 md:py-0">
                  {t.navLinks.manifesto}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b43b2f]" />
                </a>
              </li>
              <li>
                <a href="#passes" className="hover:text-[#b43b2f] transition-colors flex items-center gap-1 py-1.5 md:py-0">
                  {t.navLinks.passes}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b43b2f]" />
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-[#b43b2f] transition-colors flex items-center gap-1 py-1.5 md:py-0">
                  {t.navLinks.training}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b43b2f]" />
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-[#b43b2f] transition-colors flex items-center gap-1 py-1.5 md:py-0">
                  {t.navLinks.join}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b43b2f]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Exclusive Commitments ("CAM KẾT ĐỘC QUYỀN" in high-fidelity list structure) */}
          <div className="lg:col-span-3 flex flex-col gap-3 md:gap-4" id="footer-commitments">
            <span className="text-[10px] md:text-xs uppercase tracking-[2px] text-[#bcb5aa]/70 font-bold font-display border-b border-[#f4efe7]/5 pb-1.5">
              {language === "vi" ? "CAM KẾT ĐỘC QUYỀN" : "EXCLUSIVE PRESTIGE"}
            </span>
            <div className="flex flex-col gap-2.5 text-xs md:text-sm font-medium text-[#f4efe7]/95" id="footer-features-list">
              <div className="flex gap-2 items-center">
                <Clock className="w-3.5 h-3.5 text-[#b43b2f] shrink-0" />
                <span>{language === "vi" ? "Quyền truy cập không giới hạn 24/7" : "Unlimited 24/7 club access"}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[#b43b2f] text-[10px] border border-[#b43b2f]/40 rounded-full shrink-0">★</span>
                <span>{language === "vi" ? "Huấn luyện viên kèm cặp 1:1 chuyên biệt" : "Dedicated 1:1 elite coaching"}</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[#b43b2f] text-[9.5px] border border-[#b43b2f]/40 rounded-full shrink-0">✓</span>
                <span>{language === "vi" ? "Hội viên tinh tuyển giới hạn 150" : "Curated club cap of 150"}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Partners & Contact ("THÔNG TIN ĐỐI TÁC" styled clean structure) */}
          <div className="lg:col-span-2 flex flex-col gap-3 md:gap-4" id="footer-contact-column">
            <span className="text-[10px] md:text-xs uppercase tracking-[2px] text-[#bcb5aa]/70 font-bold font-display border-b border-[#f4efe7]/5 pb-1.5">
              {f.contactTitle.toUpperCase()}
            </span>
            <div className="flex flex-col gap-2 text-xs font-semibold text-[#f4efe7]" id="footer-contact-details">
              <a href="tel:+84912345678" className="hover:text-[#b43b2f] transition-colors flex gap-2 items-center py-1 md:py-0">
                <Phone className="w-3.5 h-3.5 text-[#b43b2f] shrink-0" />
                <span className="font-mono text-[11px] md:text-xs">+84 912 345 678</span>
              </a>
              <a href="mailto:membership@noirathletic.com" className="hover:text-[#b43b2f] transition-colors flex gap-2 items-center py-1 md:py-0">
                <Mail className="w-3.5 h-3.5 text-[#b43b2f] shrink-0" />
                <span className="truncate font-mono text-[11px] md:text-xs">membership@noirathletic.com</span>
              </a>
            </div>

            <div className="flex flex-row gap-3.5 pt-2" id="footer-social-icons">
              {socialLinks.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-[#f4efe7]/15 bg-white/[0.02] text-[#9e978f] hover:text-[#f4efe7] hover:border-[#b43b2f] hover:bg-[#b43b2f]/5 transition-all duration-300"
                    id={`footer-social-${social.name.toLowerCase()}`}
                    title={social.name}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom part of the Footer (Simplified single line or centered grid) */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4" id="footer-bottom-bar">
          <div className="text-[#9e978f]/70 text-[10px] font-light tracking-[0.5px] text-center md:text-left" id="footer-copyright">
            © {currentYear} <strong>{t.brand}</strong>. All rights reserved. Designed for elite athletic development.
          </div>

          {/* Clean minimal policy links matching the aesthetic of the reference screen */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[1.5px] font-bold text-[#9e978f]/60 font-display" id="footer-legal-links">
            <a href="#" className="hover:text-[#f4efe7] transition-colors py-0.5">
              {f.terms}
            </a>
            <span className="hidden sm:inline text-[#f4efe7]/10 select-none">|</span>
            <a href="#" className="hover:text-[#f4efe7] transition-colors py-0.5">
              {f.privacy}
            </a>
            <span className="hidden sm:inline text-[#f4efe7]/10 select-none">|</span>
            <a href="#" className="hover:text-[#f4efe7] transition-colors py-0.5">
              {f.cookie}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
