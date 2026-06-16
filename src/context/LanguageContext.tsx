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
    privileges: Array<{ num: string; title: string; desc: string }>;
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
    ]
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
    ]
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
