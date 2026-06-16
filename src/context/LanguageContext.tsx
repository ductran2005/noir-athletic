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
  };
  passes: {
    kicker: string;
    title: string;
    period: string;
    cta: string;
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
  };
}

const viTranslations: TranslationDictionary = {
  brand: "NOIR ATHLETIC",
  navLinks: {
    manifesto: "Tuyên ngôn",
    passes: "Thẻ Hội Viên",
    training: "Khu Tập Luyện",
    join: "Đăng ký",
    cta: "Trải Nghiệm Ngay",
  },
  hero: {
    tagline: "NOIR ATHLETIC CLUB",
    sub: "Nghi thức rèn luyện cao cấp dành cho người kỷ luật.",
    liveFeed: "Bản Tin Trực Tiếp // Khám Phá CLB",
    location: "Đà Nẵng, VN",
    slides: {
      strengthDebkTitle: "STRENGTH DECK",
      strengthDeckDesc: "Khu vực tạ tự do & máy tập tối tân nhất",
      sanctuaryTitle: "SANCTUARY ZONE",
      sanctuaryDesc: "Liệu pháp xông lạnh & thải độc cao cấp",
      cardioTitle: "CARDIO SUITE",
      cardioDesc: "Không gian sức bền tối ưu hóa hiệu suất",
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
    body: "NOIR Athletic Club kết hợp tập luyện cao cấp, phục hồi thể chất và đặc quyền riêng tư cho doanh nhân & người sáng tạo.",
  },
  passes: {
    kicker: "Thẻ Hội Viên",
    title: "Chọn cấp độ sống của bạn.",
    period: "/ tháng",
    cta: "Đăng ký",
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
    sub: "Hãy điền thông tin để chúng tôi chuẩn bị đặc quyền cho bạn.",
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
  },
};

const enTranslations: TranslationDictionary = {
  brand: "NOIR ATHLETIC",
  navLinks: {
    manifesto: "Manifesto",
    passes: "Club Pass",
    training: "Training Rituals",
    join: "Join Us",
    cta: "Apply Now",
  },
  hero: {
    tagline: "NOIR ATHLETIC CLUB",
    sub: "High-performance training ritual engineered for the disciplined.",
    liveFeed: "Live Feed // Club Tour",
    location: "Da Nang, VN",
    slides: {
      strengthDebkTitle: "STRENGTH DECK",
      strengthDeckDesc: "Elite free-weights & state-of-the-art plate loaded biomechanics",
      sanctuaryTitle: "SANCTUARY ZONE",
      sanctuaryDesc: "Premium cold plunge & hyper-recovery therapy",
      cardioTitle: "CARDIO SUITE",
      cardioDesc: "High-efficiency cardiovascular conditioning suite",
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
    body: "NOIR Athletic Club combines premium training, physical recovery, and private privileges for creators and leaders.",
  },
  passes: {
    kicker: "Club Pass",
    title: "Select your level of life.",
    period: "/ month",
    cta: "Join",
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
    sub: "Submit your details. We will schedule a direct interview shortly.",
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
  const [language, setLanguageState] = useState<Language>(() => {
    // Attempt local storage sync
    const saved = localStorage.getItem("noir_lang");
    if (saved === "vi" || saved === "en") return saved;
    return "vi"; // Vietnamese default
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("noir_lang", lang);
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
