"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "vi" | "en";

interface TranslationDictionary {
  brand: string;
  navLinks: {
    manifesto: string;
    passes: string;
    training: string;
    join: string;
    cta: string;
  };
  hero: {
    tagline: string;
    sub: string;
    highlights: string[];
    liveFeed: string;
    location: string;
    slides: {
      strengthDebkTitle: string;
      strengthDeckDesc: string;
      sanctuaryTitle: string;
      sanctuaryDesc: string;
      cardioTitle: string;
      cardioDesc: string;
    };
    stats: {
      accessTitle: string;
      accessVal: string;
      coachingTitle: string;
      coachingVal: string;
      membersTitle: string;
      membersVal: string;
    };
  };
  manifesto: {
    kicker: string;
    title: string;
    body: string;
    pillars: Array<{ num: string; label: string; desc: string }>;
  };
  passes: {
    kicker: string;
    title: string;
    period: string;
    cta: string;
    prices: {
      essential: string;
      premium: string;
      elite: string;
    };
    plans: {
      essential: {
        f1: string;
        f2: string;
        f3: string;
      };
      premium: {
        f1: string;
        f2: string;
        f3: string;
      };
      elite: {
        f1: string;
        f2: string;
        f3: string;
      };
    };
  };
  ritual: {
    kicker: string;
    title: string;
    items: {
      strength: {
        title: string;
        desc: string;
      };
      cardio: {
        title: string;
        desc: string;
      };
      recovery: {
        title: string;
        desc: string;
      };
      private: {
        title: string;
        desc: string;
      };
    };
  };
  editorial: {
    kicker: string;
    title: string;
  };
  form: {
    kicker: string;
    title: string;
    header: string;
    sub: string;
    desc: string;
    quote: string;
    note: string;
    labelName: string;
    placeholderName: string;
    labelPhone: string;
    placeholderPhone: string;
    labelPackage: string;
    options: {
      essential: string;
      premium: string;
      elite: string;
    };
    labelGoals: string;
    placeholderGoals: string;
    btnSubmit: string;
    securityBadge: string;
    cardBadge: string;
    cardTitle: string;
    cardSuccessMsg: string;
    cardBtnReset: string;
    errorName: string;
    errorPhoneEmpty: string;
    errorPhoneInvalid: string;
    privileges: Array<{ num: string; title: string; desc: string }>;
    quickStats: {
      access: { label: string; desc: string };
      coach: { label: string; desc: string };
      intake: { label: string; desc: string };
    };
    formBadges: {
      security: string;
      consultation: string;
      commitment: string;
    };
  };
  footer: {
    locationTitle: string;
    address: string;
    contactTitle: string;
    hoursTitle: string;
    hoursBody: string;
    officeHours: string;
    navTitle: string;
    legalTitle: string;
    terms: string;
    privacy: string;
    cookie: string;
    newsletterTitle: string;
    newsletterSub: string;
    newsletterPlaceholder: string;
    newsletterBtn: string;
    flagship: string;
    exclusiveTitle: string;
    exclusiveF1: string;
    exclusiveF2: string;
    exclusiveF3: string;
  };
}

const viTranslations: TranslationDictionary = {
  brand: "NO LIMITS",
  navLinks: {
    manifesto: "Tuyên ngôn",
    passes: "Thẻ Hội Viên",
    training: "Khu Tập Luyện",
    join: "Đăng ký",
    cta: "Trải Nghiệm Ngay",
  },
  hero: {
    tagline: "NO LIMITS",
    sub: "Nghi thức rèn luyện cao cấp dành cho người kỷ luật.",
    highlights: [
      "Thiết bị Eleiko & Hammer Strength",
      "Phục hồi cold plunge & xông hơi",
      "Giới hạn 150 hội viên tinh tuyển",
    ],
    liveFeed: "Bản Tin Trực Tiếp // Khám Phá CLB",
    location: "Đà Nẵng, VN",
    slides: {
      strengthDebkTitle: "STRENGTH DECK",
      strengthDeckDesc: "Khu vực tạ tự do & máy tập tối tân nhất",
      sanctuaryTitle: "SANCTUARY ZONE",
      sanctuaryDesc: "Liệu pháp xông lạnh & thải độc cao cấp",
      cardioTitle: "NO LIMITS FLAGSHIP",
      cardioDesc: "Mặt tiền biểu tượng của câu lạc bộ No Limits",
    },
    stats: {
      accessTitle: "Quyền truy cập",
      accessVal: "24/7",
      coachingTitle: "Huấn luyện chuyên sâu",
      coachingVal: "1:1",
      membersTitle: "Giới hạn hội viên",
      membersVal: "150",
    },
  },
  manifesto: {
    kicker: "Tuyên ngôn",
    title: "Không chỉ là phòng tập. Đây là phong cách sống.",
    body: "No Limits kết hợp tập luyện cao cấp, phục hồi thể chất và đặc quyền riêng tư cho doanh nhân & người sáng tạo.",
    pillars: [
      {
        num: "01",
        label: "HIỆU SUẤT CAO",
        desc: "Ứng dụng khoa học thể thao hiện đại, tối ưu từng nhịp thở và buổi tập."
      },
      {
        num: "02",
        label: "KỶ LUẬT THÉP",
        desc: "Không gian thúc đẩy sự tập trung tuyệt đối, loại bỏ mọi tác nhân gây xao nhãng."
      },
      {
        num: "03",
        label: "SỰ BIỆT LẬP",
        desc: "Giới hạn 150 hội viên nhằm đảm bảo tính riêng tư và dịch vụ chuẩn mực nhất."
      }
    ]
  },
  passes: {
    kicker: "Thẻ Hội Viên",
    title: "Chọn cấp độ sống của bạn.",
    period: "/ tháng",
    cta: "Đăng ký",
    prices: {
      essential: "1.490.000đ",
      premium: "2.990.000đ",
      elite: "5.990.000đ",
    },
    plans: {
      essential: {
        f1: "Truy cập khu tập chính",
        f2: "Lịch tập cá nhân hóa",
        f3: "Body check cơ bản",
      },
      premium: {
        f1: "Huấn luyện nhóm nhỏ",
        f2: "Body scan mỗi tháng",
        f3: "Recovery zone miễn phí",
      },
      elite: {
        f1: "Huấn luyện cá nhân 1:1",
        f2: "Dinh dưỡng riêng",
        f3: "Theo dõi tiến độ hằng tuần",
      },
    },
  },
  ritual: {
    kicker: "Khu Vực Tập Luyện",
    title: "Khu tập nâng cấp cơ thể của bạn.",
    items: {
      strength: {
        title: "Strength Lab",
        desc: "Tạ tự do Eleiko & Hammer Strength với sàn cao su giảm chấn chuyên dụng.",
      },
      cardio: {
        title: "Cardio Tunnel",
        desc: "Đường chạy dốc cao áp suất thấp cải thiện nhanh chỉ số VO2 Max.",
      },
      recovery: {
        title: "Recovery Room",
        desc: "Hồ sục đá lạnh sâu và phòng xông hơi giúp hồi phục cơ khớp thần tốc.",
      },
      private: {
        title: "Private PT Suite",
        desc: "Khu vực tập luyện khép kín, tiện nghi đạt mức tối đa cùng huấn luyện viên.",
      },
    },
  },
  editorial: {
    kicker: "Thay đổi Thể chất",
    title: "Thay đổi thể chất dứt khoát.",
  },
  form: {
    kicker: "Đăng Ký Thành Viên",
    title: "Gia Nhập CLB",
    header: "Đăng ký trải nghiệm",
    sub: "Nhận lịch tư vấn miễn phí cùng coach trong hôm nay.",
    desc: "Trải nghiệm không gian tập luyện đẳng cấp, huấn luyện cá nhân hóa và hệ sinh thái phục hồi chuẩn private club.",
    quote: "Không chỉ là nơi tập luyện, đây là nơi bạn trở thành phiên bản tốt nhất của chính mình.",
    note: "Số lượng suất trải nghiệm có hạn mỗi ngày!",
    labelName: "Họ và tên",
    placeholderName: "Nguyễn Văn A",
    labelPhone: "Số điện thoại",
    placeholderPhone: "091 234 5678",
    labelPackage: "Gói bạn quan tâm",
    options: {
      essential: "Essential Club Pass (1.490.000đ)",
      premium: "Premium Club Pass (2.990.000đ)",
      elite: "Elite PT Custom Pass (5.990.000đ)",
    },
    labelGoals: "Mục tiêu tập luyện",
    placeholderGoals: "Giảm cân, tăng cơ, cải thiện dáng...",
    btnSubmit: "Gửi Đăng Ký",
    securityBadge: "KHÔNG GIAN RIÊNG TƯ · HỘI VIÊN CHỌN LỌC",
    cardBadge: "Hội viên đặc quyền",
    cardTitle: "Membership Invitation",
    cardSuccessMsg: "Chúng tôi sẽ gọi lại trong 15 phút",
    cardBtnReset: "Nhập lại thông tin",
    errorName: "Vui lòng nhập họ và tên",
    errorPhoneEmpty: "Vui lòng nhập số điện thoại",
    errorPhoneInvalid: "Số điện thoại không hợp lệ (9..13 ký số)",
    privileges: [
      {
        num: "01",
        title: "KHOÁ SINH TRẮC HỌC 24/7",
        desc: "Đặc quyền ra vào không giới hạn bằng nhận diện thông minh bất kể ngày đêm."
      },
      {
        num: "02",
        title: "PHỤC HỒI CHUYÊN SÂU",
        desc: "Sử dụng miễn phí khu sục đá lạnh sâu & phòng xông hơi hồng ngoại riêng tư."
      },
      {
        num: "03",
        title: "THIẾT BỊ ĐẠT CHUẨN OLYMPIC",
        desc: "Trải nghiệm dòng tạ Eleiko & máy tập cơ học tối tân Hammer Strength."
      },
      {
        num: "04",
        title: "ĐÀO TẠO & DINH DƯỠNG 1:1",
        desc: "Thiết kế giáo án tập luyện và chế độ ăn uống chuyên biệt cùng Huấn luyện viên."
      }
    ],
    quickStats: {
      access: { label: "Smart access", desc: "Ra vào không giới hạn" },
      coach: { label: "Personal coach", desc: "Huấn luyện cá nhân" },
      intake: { label: "Quick intake", desc: "Tư vấn nhanh chóng" },
    },
    formBadges: {
      security: "Bảo mật thông tin",
      consultation: "Tư vấn miễn phí",
      commitment: "Không cam kết ràng buộc",
    },
  },
  footer: {
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
    flagship: "ĐÀ NẴNG FLAGSHIP",
    exclusiveTitle: "CAM KẾT ĐỘC QUYỀN",
    exclusiveF1: "Quyền truy cập không giới hạn 24/7",
    exclusiveF2: "Huấn luyện viên kèm cặp 1:1 chuyên biệt",
    exclusiveF3: "Hội viên tinh tuyển giới hạn 150",
  },
};

const enTranslations: TranslationDictionary = {
  brand: "NO LIMITS",
  navLinks: {
    manifesto: "Manifesto",
    passes: "Club Pass",
    training: "Training Rituals",
    join: "Join Us",
    cta: "Apply Now",
  },
  hero: {
    tagline: "NO LIMITS",
    sub: "High-performance training ritual engineered for the disciplined.",
    highlights: [
      "Eleiko & Hammer Strength equipment",
      "Cold plunge & sauna recovery",
      "Curated cap of 150 members",
    ],
    liveFeed: "Live Feed // Club Tour",
    location: "Da Nang, VN",
    slides: {
      strengthDebkTitle: "STRENGTH DECK",
      strengthDeckDesc: "Elite free-weights & state-of-the-art plate loaded biomechanics",
      sanctuaryTitle: "SANCTUARY ZONE",
      sanctuaryDesc: "Premium cold plunge & hyper-recovery therapy",
      cardioTitle: "NO LIMITS FLAGSHIP",
      cardioDesc: "The landmark exterior of the No Limits club",
    },
    stats: {
      accessTitle: "Club Access",
      accessVal: "24/7",
      coachingTitle: "Personal Coaching",
      coachingVal: "1:1",
      membersTitle: "Exclusive Member Cap",
      membersVal: "150",
    },
  },
  manifesto: {
    kicker: "Manifesto",
    title: "Not just a gym. This is a lifestyle ritual.",
    body: "No Limits combines premium training, physical recovery, and private privileges for creators and leaders.",
    pillars: [
      {
        num: "01",
        label: "HIGH PERFORMANCE",
        desc: "Applying modern sports science to optimize every breath and conditioning session."
      },
      {
        num: "02",
        label: "DISCIPLINE",
        desc: "An environment engineered for absolute focus, eliminating all mental noise."
      },
      {
        num: "03",
        label: "EXCLUSIVITY",
        desc: "Strictly capped at 150 members to guarantee maximum privacy and elite service."
      }
    ]
  },
  passes: {
    kicker: "Club Pass",
    title: "Select your level of life.",
    period: "/ month",
    cta: "Join",
    prices: {
      essential: "1,490,000 VND",
      premium: "2,990,000 VND",
      elite: "5,990,000 VND",
    },
    plans: {
      essential: {
        f1: "Main floor private access",
        f2: "Personalized routing program",
        f3: "Biometric body assessment",
      },
      premium: {
        f1: "Small-group high-tier coaching",
        f2: "Monthly full 3D body scans",
        f3: "Complimentary recovery room",
      },
      elite: {
        f1: "1:1 Elite Personal Training",
        f2: "Custom micro-nutrition plan",
        f3: "Weekly biochemical tracking",
      },
    },
  },
  ritual: {
    kicker: "Training Spaces",
    title: "Spaces designed to evolve your physical capacity.",
    items: {
      strength: {
        title: "Strength Lab",
        desc: "Premium free loads from Eleiko & Hammer Strength with sound dampening floors.",
      },
      cardio: {
        title: "Cardio Tunnel",
        desc: "Low-pressure inclined running slopes to build extreme cardiovascular power.",
      },
      recovery: {
        title: "Recovery Room",
        desc: "Deep cold plunge and custom infrared saunas designed to speed orthopedic recovery.",
      },
      private: {
        title: "Private PT Suite",
        desc: "Entirely private space built for elite 1:1 physical training.",
      },
    },
  },
  editorial: {
    kicker: "Body Shift",
    title: "Command your physical presence.",
  },
  form: {
    kicker: "Application",
    title: "Enter The Club",
    header: "Apply for Invitation",
    sub: "We will schedule a direct interview shortly.",
    desc: "Experience elite-tier conditioning space, custom personal coaching, and private athletic recovery rituals.",
    quote: "Not just a training space, this is where you evolve into your ultimate physical form.",
    note: "Exclusive experience slots are strictly limited each day!",
    labelName: "Full Name",
    placeholderName: "Alex Johnson",
    labelPhone: "Phone Number",
    placeholderPhone: "+84 912 345 678",
    labelPackage: "Tier of Interest",
    options: {
      essential: "Essential Club Pass (1,490,000 VND)",
      premium: "Premium Club Pass (2,990,000 VND)",
      elite: "Elite PT Custom Pass (5,990,000 VND)",
    },
    labelGoals: "Conditioning goals",
    placeholderGoals: "Weight, raw power, performance preparation...",
    btnSubmit: "Submit Application",
    securityBadge: "PRIVATE SANCTUARY · CURATED MEMBERSHIP",
    cardBadge: "Privileged Invitee",
    cardTitle: "Membership Invitation",
    cardSuccessMsg: "We will call you back in 15 minutes",
    cardBtnReset: "Re-enter Information",
    errorName: "Kindly submit your full name",
    errorPhoneEmpty: "Kindly submit your contact phone",
    errorPhoneInvalid: "Please provide a valid phone number (9-13 digits)",
    privileges: [
      {
        num: "01",
        title: "24/7 BIOMETRIC PASS",
        desc: "Unlimited club access via seamless facial recognition, day or night."
      },
      {
        num: "02",
        title: "HYPER RECOVERY SUITE",
        desc: "Complimentary access to private cold plunge baths & infrared saunas."
      },
      {
        num: "03",
        title: "OLYMPIC-TIER EQUIPMENT",
        desc: "Train on standard Eleiko free weights and Hammer Strength biomechanics."
      },
      {
        num: "04",
        title: "1:1 ELITE COACHING",
        desc: "Tailored physical conditioning & micro-nutrition plans with certified coaches."
      }
    ],
    quickStats: {
      access: { label: "Smart access", desc: "Unlimited 24/7 access" },
      coach: { label: "Personal coach", desc: "1:1 coaching" },
      intake: { label: "Quick intake", desc: "Fast intake review" },
    },
    formBadges: {
      security: "Encrypted data security",
      consultation: "Free priority intake",
      commitment: "Zero lock-in terms",
    },
  },
  footer: {
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
    flagship: "DA NANG FLAGSHIP",
    exclusiveTitle: "EXCLUSIVE PRESTIGE",
    exclusiveF1: "Unlimited 24/7 club access",
    exclusiveF2: "Dedicated 1:1 elite coaching",
    exclusiveF3: "Curated club cap of 150",
  },
};

const translations: Record<Language, TranslationDictionary> = {
  vi: viTranslations,
  en: enTranslations,
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("noir_lang");
      if (saved === "vi" || saved === "en") {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("noir_lang", lang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be wrapped inside a LanguageProvider");
  }
  return context;
}
