import type { Language } from "./languages";

type LocaleContent = {
  common: {
    brandTagline: string;
    learnMore: string;
    exploreApps: string;
    contactEmail: string;
    goToApp: string;
    comingSoon: string;
    close: string;
  };
  navigation: {
    ariaLabel: string;
    logoAria: string;
    home: string;
    about: string;
    apps: string;
    showcase: string;
    parentHub: string;
    exploreApps: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  languageSwitcher: {
    triggerLabel: string;
    english: string;
    traditionalChinese: string;
    simplifiedChinese: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    primaryAria: string;
    secondaryAria: string;
    imageAlt: string;
  };
  home: {
    latestTitle: string;
    latestSubtitle: string;
    viewAll: string;
    whyTitle: string;
    whySubtitle: string;
    parentTrustTitle: string;
    parentTrustBody: string;
    legal: {
      privacy: string;
      safety: string;
      faq: string;
    };
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  trustBadges: {
    badges: Array<{
      title: string;
      description: string;
    }>;
    caption: string;
  };
  footer: {
    brandDescription: string;
    quickLinksTitle: string;
    contactTitle: string;
    copyright: string;
    terms: string;
  };
  appsPage: {
    title: string;
    subtitle: string;
    filters: {
      searchPlaceholder: string;
      typeLabel: string;
      allTypes: string;
        noResults: string;
    };
  };
  showcasePage: {
    title: string;
    intro: string;
    galleryTitle: string;
    submissionTitle: string;
    filters: {
      searchPlaceholder: string;
      typeLabel: string;
      allTypes: string;
        noResults: string;
    };
    form: {
      gameName: string;
      description: string;
      gameType: string;
      gameTypePlaceholder: string;
      uploadLabel: string;
      displayName: string;
      remixLink: string;
      parentEmail: string;
      additionalContact: string;
      consentLabel: string;
      consentError: string;
      spamLabel: string;
      submit: string;
    };
    startLabel: string;
    disclaimer: string;
    guidelinesTitle: string;
    guidelines: string[];
    successMessage: string;
    errorMessage: string;
    spamError: string;
  };
  aboutPage: {
    heroTitle: string;
    heroTagline: string;
    heroSubtitle: string;
    storyHeading: string;
    sections: {
      problemTitle: string;
      problemBody: string;
      inspirationTitle: string;
      inspirationBody: string;
      solutionTitle: string;
      solutionBody: string;
      visionTitle: string;
      visionBody: string;
    };
    missionTitle: string;
    missionTagline: string;
    missionCards: Array<{
      title: string;
      description: string;
    }>;
    valuesTitle: string;
    valuesList: string[];
    promiseTitle: string;
    promiseList: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  appCard: {
    learnMore: string;
  };
  appDetailDrawer: {
    keyFeatures: string;
    learningObjectives: string;
    ageAppropriate: string;
    content: string;
    timeRecommendation: string;
  };
  appDetailPage: {
    notFoundTitle: string;
    backHome: string;
    backToApps: string;
    tabs: {
      about: string;
      features: string;
      parents: string;
    };
    aboutHeading: string;
    howItWorks: string;
    learningStandards: string;
    standardsDescription: string;
    ctaNote: string;
  };
  notFound: {
    oops: string;
    returnHome: string;
  };
};

type Translations = Record<Language, LocaleContent>;

export const translations: Translations = {
  en: {
    common: {
      brandTagline: "Play for Good!",
      learnMore: "Learn More",
      exploreApps: "Explore Our Apps",
      contactEmail: "cs@bitebite.app",
      goToApp: "Go to App",
      comingSoon: "Coming Soon",
      close: "Close",
    },
    navigation: {
      ariaLabel: "Main navigation",
      logoAria: "BiteBite Home",
      home: "Home",
      about: "About",
      apps: "Apps",
      showcase: "Showcase",
      parentHub: "Parent Hub",
      exploreApps: "Explore Apps",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    languageSwitcher: {
      triggerLabel: "Change language",
      english: "English",
      traditionalChinese: "Traditional Chinese",
      simplifiedChinese: "Simplified Chinese",
    },
    hero: {
      titleLine1: "Play for Good!",
      titleLine2: "Learn While Having Fun",
      subtitle: "Educational apps designed by educators, trusted by parents, loved by kids",
      primaryCta: "Explore Our Apps",
      secondaryCta: "Learn More",
      primaryAria: "Explore our educational apps",
      secondaryAria: "Learn more about BiteBite",
      imageAlt: "Children learning through educational apps",
    },
    home: {
      latestTitle: "Latest Fun Apps",
      latestSubtitle: "Check out our newest educational apps that make learning exciting",
      viewAll: "View All Apps",
      whyTitle: "Why Choose BiteBite?",
      whySubtitle: "Trusted by parents, loved by kids, designed for learning",
      parentTrustTitle: "Parents Trust BiteBite",
      parentTrustBody:
        "We're committed to your child's safety, privacy, and educational success. Every app is carefully designed with both learning outcomes and child protection in mind. We believe in complete transparency—you always know what your child is learning and how their data is protected.",
      legal: {
        privacy: "Privacy Policy",
        safety: "Safety & Compliance",
        faq: "Parent FAQ",
      },
      features: [
        {
          title: "Designed by Educators",
          description:
            "Every app is expertly crafted with curriculum-aligned content and vetted by professional educators to ensure quality learning outcomes.",
        },
        {
          title: "Safe for Kids",
          description:
            "100% COPPA compliant with strict privacy protections. No data collection without consent, no inappropriate content, always child-safe.",
        },
        {
          title: "Parent Transparency",
          description:
            "Know exactly what your child is learning with detailed progress reports, clear learning objectives, and full parental control options.",
        },
        {
          title: "Free & Fun",
          description:
            "Quality education should be accessible to everyone. Our apps are free to use because learning should never be limited by cost.",
        },
      ],
    },
    trustBadges: {
      badges: [
        {
          title: "COPPA Compliant",
          description: "Certified child safety",
        },
        {
          title: "Parent Approved",
          description: "Trusted by families",
        },
        {
          title: "Privacy Protected",
          description: "Your data is safe",
        },
        {
          title: "Safe Learning",
          description: "Age-appropriate content",
        },
      ],
      caption: "Making learning safe, fun, and accessible for every child",
    },
    footer: {
      brandDescription:
        "Making learning safe, fun, and accessible for every child through engaging educational apps.",
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact",
      terms: "Terms of Service",
      copyright: "© 2025 BiteBite. All rights reserved.",
    },
    appsPage: {
      title: "All Our Apps",
      subtitle: "Browse our complete collection of educational apps designed to make learning fun",
      filters: {
        searchPlaceholder: "Search apps by name or description",
        typeLabel: "Category",
        allTypes: "All categories",
        noResults: "No apps match your search yet. Try another keyword or category.",
      },
    },
    showcasePage: {
      title: "Kid Creator Showcase",
      intro:
        "Share your original game and inspire other kids! Submit your creation and see it showcased here (with parent or guardian approval).",
      galleryTitle: "Featured Creations",
      submissionTitle: "Submit Your Game",
      filters: {
        searchPlaceholder: "Search by name or description",
        typeLabel: "Type of game",
        allTypes: "All types",
        noResults: "No creations match your search yet. Try another keyword or type.",
      },
      form: {
        gameName: "Name of game",
        description: "Short description",
        gameType: "Type of game",
        gameTypePlaceholder: "Select a game type",
        uploadLabel: "Game picture or thumbnail",
        displayName: "Kid’s display name",
        remixLink: "Lovable remix link (optional)",
        parentEmail: "Parent/guardian contact email",
        additionalContact: "Additional contact (optional)",
        consentLabel:
          "I am the parent or legal guardian and consent to this submission and its review/potential publication on BiteBite.",
        consentError: "Parent or guardian consent is required.",
        spamLabel: "Spam check: what is {a} + {b}?",
        submit: "Send Submission",
      },
      disclaimer:
        "All submissions are reviewed by our team before publication. By submitting, you agree that the admin may edit or reject your game and contact you for verification. Contact information will not be published or shared.",
      guidelinesTitle: "Community Guidelines",
      guidelines: [
        "Be kind and encouraging—only share positive, kid-friendly creations.",
        "Share games that you designed yourself or remixed with permission.",
        "Never include personal information (addresses, full names, photos of faces).",
        "Keep it safe: no violence, bullying, scary content, or links to unsafe sites.",
        "Ask a parent or guardian before you submit and follow their guidance.",
      ],
      successMessage: "Thanks! We sent your submission to our team for review.",
      errorMessage: "Something went wrong while preparing the submission. Please try again.",
      spamError: "Please solve the spam check correctly before submitting.",
      startLabel: "Start",
    },
    aboutPage: {
      heroTitle: "About BiteBite",
      heroTagline: "Play for Good!",
      heroSubtitle: "Our story and mission to make learning joyful for every child",
      storyHeading: "Why I Created BiteBite",
      sections: {
        problemTitle: "The Problem",
        problemBody:
          "I noticed that many kids struggle to stay engaged with learning, and parents often feel overwhelmed choosing apps they can trust. Traditional educational methods can feel boring, and app stores are cluttered with low-quality content that prioritizes engagement over education. Parents deserve better, and children deserve learning experiences that inspire rather than distract.",
        inspirationTitle: "The Inspiration",
        inspirationBody:
          "As an educator and developer, I believed there had to be a better way. I wanted to create apps that feel like play but deliver real learning—apps that parents can trust completely. I've seen firsthand how children light up when they're genuinely engaged, and I wanted to bottle that magic into every app we create.",
        solutionTitle: "The Solution",
        solutionBody:
          "I started designing carefully crafted educational apps that combine engaging gameplay with rigorous learning outcomes. Every app is built with transparency—parents know exactly what their kids are learning, and there are no hidden agendas or data harvesting. Each app goes through extensive testing with real children and educators to ensure it's both effective and enjoyable.",
        visionTitle: "The Vision",
        visionBody:
          "My vision is to build a trusted hub where parents confidently send their kids to learn through play. A place where every app sparks curiosity, builds confidence, and makes learning joyful. I want BiteBite to be the gold standard for educational apps—where quality, safety, and fun come together seamlessly.",
      },
      missionTitle: "Our Mission",
      missionTagline: "Play for Good!",
      missionCards: [
        {
          title: "Educational Excellence",
          description:
            "Curriculum-aligned, expert-vetted apps that deliver real learning outcomes and measurable progress.",
        },
        {
          title: "Safety & Trust",
          description:
            "100% COPPA compliant, transparent about data, and always putting child safety first.",
        },
        {
          title: "Accessibility",
          description:
            "Free or low-cost learning for every child, regardless of background or circumstance.",
        },
      ],
      valuesTitle: "Our Core Values",
      valuesList: [
        "Learning is a Journey, Not a Destination",
        "Kids Learn Best When They're Having Fun",
        "Parents Deserve Complete Transparency",
        "Education Should Be Accessible to Everyone",
        "Technology Should Enhance, Not Replace, Real Learning",
      ],
      promiseTitle: "The BiteBite Promise",
      promiseList: [
        "Every app is designed and tested with real kids and educators",
        "Your child's privacy is sacred—we never sell data or track for profit",
        "All apps are COPPA compliant and safe for children",
        "We're constantly learning and improving based on user feedback",
      ],
      ctaTitle: "Ready to Explore?",
      ctaSubtitle: "Join thousands of families discovering the joy of learning through play",
      ctaPrimary: "Explore Our Apps",
      ctaSecondary: "Contact Us",
    },
    appCard: {
      learnMore: "Learn More",
    },
    appDetailDrawer: {
      keyFeatures: "Key Features",
      learningObjectives: "Learning Objectives",
      ageAppropriate: "Age Appropriate",
      content: "Content",
      timeRecommendation: "Recommended Time",
    },
    appDetailPage: {
      notFoundTitle: "App Not Found",
      backHome: "Back to Home",
      backToApps: "Back to All Apps",
      tabs: {
        about: "About This App",
        features: "Features",
        parents: "For Parents",
      },
      aboutHeading: "What will kids learn?",
      howItWorks: "How does it work?",
      learningStandards: "Learning Standards",
      standardsDescription: "Aligned with national curriculum standards for optimal learning outcomes.",
      ctaNote: "Opens in a new window - Safe and secure",
    },
    notFound: {
      oops: "Oops! Page not found",
      returnHome: "Return to Home",
    },
  },
  "zh-Hant": {
    common: {
      brandTagline: "玩得好，學得好！",
      learnMore: "了解更多",
      exploreApps: "探索我們的學習應用",
      contactEmail: "cs@bitebite.app",
      goToApp: "前往應用程式",
      comingSoon: "即將推出",
      close: "關閉",
    },
    navigation: {
      ariaLabel: "主導覽",
      logoAria: "返回 BiteBite 首頁",
      home: "首頁",
      about: "關於我們",
      apps: "應用程式",
      showcase: "創作展示",
      parentHub: "家長專區",
      exploreApps: "探索應用",
      openMenu: "開啟選單",
      closeMenu: "關閉選單",
      language: "語言",
    },
    languageSwitcher: {
      triggerLabel: "切換語言",
      english: "English",
      traditionalChinese: "繁體中文",
      simplifiedChinese: "简体中文",
    },
    hero: {
      titleLine1: "玩得好，學得好！",
      titleLine2: "在遊戲中持續成長",
      subtitle: "由教育者設計、家長信任、孩子喜愛的學習應用程式",
      primaryCta: "探索我們的學習應用",
      secondaryCta: "了解更多",
      primaryAria: "探索我們的教育應用程式",
      secondaryAria: "進一步認識 BiteBite",
      imageAlt: "孩子們透過教育應用程式快樂學習",
    },
    home: {
      latestTitle: "最新好玩應用",
      latestSubtitle: "看看我們最新推出的教育應用，讓學習更有趣",
      viewAll: "查看所有應用",
      whyTitle: "為什麼選擇 BiteBite？",
      whySubtitle: "家長信賴、孩子喜愛、專為學習設計",
      parentTrustTitle: "家長信任 BiteBite",
      parentTrustBody:
        "我們致力於守護孩子的安全、隱私與學習成效。每款應用都同時注重學習成果與兒童保護。 我們堅持完全透明——您永遠都能清楚了解孩子在學什麼，以及資料如何受到保護。",
      legal: {
        privacy: "隱私權政策",
        safety: "安全與合規",
        faq: "家長常見問題",
      },
      features: [
        {
          title: "由教育專家設計",
          description:
            "每款應用都符合課程標準，並由專業教育者嚴格把關，確保真正的學習成效。",
        },
        {
          title: "守護孩子安全",
          description:
            "100% 符合 COPPA 兒童隱私法規，嚴格保護個資。沒有未經同意的資料蒐集，也沒有不當內容。",
        },
        {
          title: "家長完全掌握",
          description:
            "透過詳盡的學習報告、清楚的學習目標與完整的家長控制選項，讓您一目了然。",
        },
        {
          title: "免費又好玩",
          description:
            "優質的教育資源應該人人可及。我們的應用免費使用，因為學習不應被成本限制。",
        },
      ],
    },
    trustBadges: {
      badges: [
        {
          title: "符合 COPPA",
          description: "兒童安全認證",
        },
        {
          title: "家長好評",
          description: "家庭一致信賴",
        },
        {
          title: "隱私守護",
          description: "您的資料很安全",
        },
        {
          title: "安心學習",
          description: "內容適齡無負擔",
        },
      ],
      caption: "讓每位孩子都能安全、快樂、無負擔地學習",
    },
    footer: {
      brandDescription: "以寓教於樂的應用程式，為每位孩子打造安全、有趣、可負擔的學習體驗。",
      quickLinksTitle: "快速連結",
      contactTitle: "聯絡我們",
      terms: "服務條款",
      copyright: "© 2025 BiteBite. 版權所有。",
    },
    appsPage: {
      title: "全部應用程式",
      subtitle: "瀏覽我們的教育應用程式，讓學習變得充滿樂趣",
      filters: {
        searchPlaceholder: "搜尋應用名稱或介紹",
        typeLabel: "應用類別",
        allTypes: "所有類別",
        noResults: "暫時找不到符合的應用，試試其他關鍵字或類別。",
      },
    },
    showcasePage: {
      title: "小小創作者展示牆",
      intro: "分享你原創的遊戲點子，為其他孩子帶來靈感！在家長或監護人同意下提交作品，就有機會在這裡曝光。",
      galleryTitle: "精選作品",
      submissionTitle: "提交你的遊戲",
      filters: {
        searchPlaceholder: "搜尋作品名稱或介紹",
        typeLabel: "遊戲類型",
        allTypes: "所有類型",
        noResults: "目前沒有符合的作品，試試其他關鍵字或類型。",
      },
      form: {
        gameName: "遊戲名稱",
        description: "簡短介紹",
        gameType: "遊戲種類",
        gameTypePlaceholder: "選擇遊戲類型",
        uploadLabel: "遊戲圖片或縮圖",
        displayName: "孩子公開顯示的名稱",
        remixLink: "Lovable Remix 連結（選填）",
        parentEmail: "家長／監護人聯絡 email",
        additionalContact: "其他聯絡方式（選填）",
        consentLabel: "本人為家長或法定監護人，並同意本次投稿接受審核及在 BiteBite 上刊登。",
        consentError: "請先勾選家長或監護人的同意。",
        spamLabel: "反垃圾驗證：{a} + {b} 等於多少？",
        submit: "送出投稿",
      },
      disclaimer:
        "所有投稿都會先由團隊審查。送出代表您同意管理員可調整或婉拒作品，並可能與您聯繫確認。聯絡資訊僅供審核使用，不會公開或分享。",
      guidelinesTitle: "社群守則",
      guidelines: [
        "保持友善，分享正向、適合兒童的內容。",
        "請只分享自己創作或已獲授權改編的遊戲。",
        "切勿透露個人資訊（地址、全名、清晰人像等）。",
        "避免暴力、霸凌、驚悚與不安全的連結。",
        "投稿前請先徵得家長或監護人同意，並遵循他們的指示。",
      ],
      successMessage: "謝謝投稿！我們已將資訊寄給團隊審查。",
      errorMessage: "寄送投稿時發生問題，請再試一次。",
      spamError: "請先完成反垃圾驗證。",
      startLabel: "開始遊玩",
    },
    aboutPage: {
      heroTitle: "關於 BiteBite",
      heroTagline: "玩得好，學得好！",
      heroSubtitle: "我們的故事與使命：讓每個孩子都愛上學習",
      storyHeading: "我為何創立 BiteBite",
      sections: {
        problemTitle: "我們看見的問題",
        problemBody:
          "我發現許多孩子難以保持學習動力，家長也常為挑選可信任的應用程式而感到困擾。傳統的教學方式容易乏味，應用商店裡則充斥著只重視黏著度、忽略教育品質的內容。家長值得更好的選擇，孩子也值得被真正啟發的學習體驗。",
        inspirationTitle: "創立的契機",
        inspirationBody:
          "身為教育工作者與開發者，我相信一定有更好的方式。我希望打造既像遊戲又能帶來真正學習成效的應用，讓家長可以完全放心。我親眼看見孩子在真正投入時閃耀的眼神，也希望把那份魔力注入每一款作品。",
        solutionTitle: "我們的做法",
        solutionBody:
          "我開始設計兼具趣味與學習成果的教育應用。每款產品都秉持透明原則——家長能清楚知道孩子在學什麼，沒有暗藏的商業目的或資料蒐集。我們與真實的孩子與教育者反覆測試，只為確保應用既有效又好玩。",
        visionTitle: "我們的願景",
        visionBody:
          "我希望打造一個值得信賴的學習基地，讓家長放心、孩子開心地透過遊戲學習。讓每個應用都能激發好奇心、建立自信、讓學習充滿樂趣。我的目標是讓 BiteBite 成為教育應用的標竿——在品質、安全與趣味之間達到完美平衡。",
      },
      missionTitle: "我們的使命",
      missionTagline: "玩得好，學得好！",
      missionCards: [
        {
          title: "教育卓越",
          description: "課程對齊、專家審核，帶來真正且可衡量的學習成果。",
        },
        {
          title: "安全與信任",
          description: "100% 遵循 COPPA 規範，資訊透明，孩子安全永遠優先。",
        },
        {
          title: "普及與共融",
          description: "不論背景，每個孩子都能以免費或低成本享受優質學習資源。",
        },
      ],
      valuesTitle: "我們的核心價值",
      valuesList: [
        "學習是一段旅程，而非終點",
        "孩子在快樂中學得最好",
        "家長有權掌握完整資訊",
        "教育資源應該全民共享",
        "科技應該強化，而非取代真實學習",
      ],
      promiseTitle: "BiteBite 的承諾",
      promiseList: [
        "每款應用都與真實孩子與教育者共同設計與測試",
        "孩子的隱私值得守護——我們從不販售資料，也不為營利追蹤",
        "所有應用皆符合兒童網路安全法規，使用安心無虞",
        "我們持續傾聽回饋，讓產品不斷進化",
      ],
      ctaTitle: "準備好一起探索了嗎？",
      ctaSubtitle: "與成千上萬的家庭一起，享受透過遊戲學習的喜悅",
      ctaPrimary: "探索我們的學習應用",
      ctaSecondary: "聯絡我們",
    },
    appCard: {
      learnMore: "了解更多",
    },
    appDetailDrawer: {
      keyFeatures: "主要特色",
      learningObjectives: "學習目標",
      ageAppropriate: "適合年齡",
      content: "內容",
      timeRecommendation: "建議使用時間",
    },
    appDetailPage: {
      notFoundTitle: "找不到此應用",
      backHome: "返回首頁",
      backToApps: "返回全部應用",
      tabs: {
        about: "應用概覽",
        features: "特色亮點",
        parents: "給家長的資訊",
      },
      aboutHeading: "孩子能學到什麼？",
      howItWorks: "運作方式",
      learningStandards: "學習標準",
      standardsDescription: "與國際課程標準接軌，確保最佳學習成果。",
      ctaNote: "將在新視窗開啟—安全無憂",
    },
    notFound: {
      oops: "糟糕！找不到這個頁面",
      returnHome: "返回首頁",
    },
  },
  "zh-Hans": {
    common: {
      brandTagline: "玩得好，学得好！",
      learnMore: "了解更多",
      exploreApps: "探索我们的学习应用",
      contactEmail: "cs@bitebite.app",
      goToApp: "前往应用",
      comingSoon: "即将推出",
      close: "关闭",
    },
    navigation: {
      ariaLabel: "主导航",
      logoAria: "返回 BiteBite 首页",
      home: "首页",
      about: "关于我们",
      apps: "应用程序",
      showcase: "创作展示",
      parentHub: "家长专区",
      exploreApps: "探索应用",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      language: "语言",
    },
    languageSwitcher: {
      triggerLabel: "切换语言",
      english: "English",
      traditionalChinese: "繁體中文",
      simplifiedChinese: "简体中文",
    },
    hero: {
      titleLine1: "玩得好，学得好！",
      titleLine2: "把学习变成快乐体验",
      subtitle: "由教育者设计、家长信赖、孩子喜爱的学习应用程序",
      primaryCta: "探索我们的学习应用",
      secondaryCta: "了解更多",
      primaryAria: "探索我们的教育应用程序",
      secondaryAria: "进一步了解 BiteBite",
      imageAlt: "孩子们通过教育应用快乐学习",
    },
    home: {
      latestTitle: "最新有趣应用",
      latestSubtitle: "看看我们最新推出的教育应用，让学习更有趣",
      viewAll: "查看所有应用",
      whyTitle: "为什么选择 BiteBite？",
      whySubtitle: "家长信赖、孩子喜爱、专为学习设计",
      parentTrustTitle: "家长信任 BiteBite",
      parentTrustBody:
        "我们致力于守护孩子的安全、隐私与学习成果。每款应用都兼顾学习成效与儿童保护。 我们坚持完全透明——您随时都能清楚了解孩子在学什么，以及数据如何被妥善保护。",
      legal: {
        privacy: "隐私权政策",
        safety: "安全与合规",
        faq: "家长常见问题",
      },
      features: [
        {
          title: "教育专家打造",
          description:
            "每款应用都符合课程标准，并由专业教育者严谨把关，确保真正的学习效果。",
        },
        {
          title: "守护孩子安全",
          description:
            "100% 遵循 COPPA 儿童隐私法规，严密保护个人资料。没有未获同意的数据收集，也没有不当内容。",
        },
        {
          title: "家长完全掌握",
          description:
            "透过详细的学习报告、明确的学习目标与完整的家长控制选项，让您一目了然。",
        },
        {
          title: "免费又好玩",
          description:
            "优质教育资源应该人人可及。我们的应用免费使用，因为学习不该被成本限制。",
        },
      ],
    },
    trustBadges: {
      badges: [
        {
          title: "符合 COPPA",
          description: "儿童安全认证",
        },
        {
          title: "家长好评",
          description: "家庭一致信赖",
        },
        {
          title: "隐私守护",
          description: "您的资料很安全",
        },
        {
          title: "安心学习",
          description: "内容适龄无负担",
        },
      ],
      caption: "让每位孩子都能安全、快乐、无负担地学习",
    },
    footer: {
      brandDescription: "以寓教于乐的应用程序，为每位孩子打造安全、有趣、可负担的学习体验。",
      quickLinksTitle: "快速连结",
      contactTitle: "联络我们",
      terms: "服务条款",
      copyright: "© 2025 BiteBite. 版权所有。",
    },
    appsPage: {
      title: "全部应用程序",
      subtitle: "浏览我们的教育应用程序，让学习变得更有趣",
      filters: {
        searchPlaceholder: "搜索应用名称或介绍",
        typeLabel: "应用类别",
        allTypes: "所有类别",
        noResults: "暂时没有符合的应用，试试其他关键字或类别。",
      },
    },
    showcasePage: {
      title: "小小创作者展示墙",
      intro: "分享你的原创游戏灵感，启发更多小伙伴！在家长或监护人同意下提交作品，就有机会展示在这里。",
      galleryTitle: "精选作品",
      submissionTitle: "提交你的游戏",
      filters: {
        searchPlaceholder: "搜索作品名称或介绍",
        typeLabel: "游戏类型",
        allTypes: "所有类型",
        noResults: "暂时没有符合的作品，试试其他关键字或类型。",
      },
      form: {
        gameName: "游戏名称",
        description: "简短介绍",
        gameType: "游戏类型",
        gameTypePlaceholder: "选择游戏类型",
        uploadLabel: "游戏图片或缩图",
        displayName: "孩子公开显示的名称",
        remixLink: "Lovable Remix 链接（选填）",
        parentEmail: "家长／监护人联系邮箱",
        additionalContact: "其他联系方式（选填）",
        consentLabel: "本人为家长或法定监护人，并同意本次投稿接受审核及在 BiteBite 上发布。",
        consentError: "请先勾选家长或监护人同意。",
        spamLabel: "防垃圾验证：{a} + {b} 等于多少？",
        submit: "发送投稿",
      },
      disclaimer:
        "所有投稿都会先由团队审核。提交代表您同意管理员可以编辑或拒绝作品，并可能联系您做进一步确认。联络资讯仅供审核使用，不会公开或分享。",
      guidelinesTitle: "社群守则",
      guidelines: [
        "保持友善，只分享积极、适合儿童的内容。",
        "请只分享自己创作或已获授权改编的游戏。",
        "不要透露个人信息（地址、全名、清晰人像等）。",
        "避免暴力、霸凌、恐怖或不安全的网站链接。",
        "投稿前请先征得家长或监护人同意，并遵循他们的指示。",
      ],
      successMessage: "感谢投稿！我们已将资料寄给团队审核。",
      errorMessage: "送出投稿时发生问题，请再试一次。",
      spamError: "请正确完成防垃圾验证。",
      startLabel: "开始游玩",
    },
    aboutPage: {
      heroTitle: "关于 BiteBite",
      heroTagline: "玩得好，学得好！",
      heroSubtitle: "我们的故事与使命：让每个孩子都爱上学习",
      storyHeading: "我为何创立 BiteBite",
      sections: {
        problemTitle: "我们看见的问题",
        problemBody:
          "我发现许多孩子很难保持学习动力，家长也常为挑选可信赖的应用程序而烦恼。传统教学方式容易乏味，应用商店里则充斥着只重黏着度、不重学习品质的内容。家长值得更好的选择，孩子也值得真正能激发兴趣的学习体验。",
        inspirationTitle: "创立的契机",
        inspirationBody:
          "身为教育工作者与开发者，我相信一定有更好的方式。我想打造既像游戏又能带来真实学习成果的应用，让家长能够放心。我亲眼看见孩子在真正投入时闪亮的眼神，也希望把那份魔力注入每一个作品。",
        solutionTitle: "我们的做法",
        solutionBody:
          "我开始设计兼具趣味与学习成效的教育应用。每款产品都秉持透明原则——家长能清楚知道孩子在学什么，没有隐藏的商业目的或资料蒐集。我们与真实的孩子与教育者多次测试，只为确保应用既有效又好玩。",
        visionTitle: "我们的愿景",
        visionBody:
          "我希望打造一个值得信赖的学习基地，让家长放心、孩子开心地透过游戏学习。让每个应用都能激发好奇心、建立自信、让学习充满乐趣。我的目标是让 BiteBite 成为教育应用的标杆——在品质、安全与趣味之间取得完美平衡。",
      },
      missionTitle: "我们的使命",
      missionTagline: "玩得好，学得好！",
      missionCards: [
        {
          title: "教育卓越",
          description: "课程对齐、专家审核，带来真实且可衡量的学习成果。",
        },
        {
          title: "安全与信任",
          description: "100% 遵循 COPPA 规范，资讯透明，始终把孩子安全放在第一位。",
        },
        {
          title: "普及与共融",
          description: "不论背景，每个孩子都能以免费或低成本享受优质学习资源。",
        },
      ],
      valuesTitle: "我们的核心价值",
      valuesList: [
        "学习是一段旅程，而不是终点",
        "孩子在快乐中学得最好",
        "家长应该掌握完整资讯",
        "教育资源应该人人共享",
        "科技应该强化，而不是取代真实学习",
      ],
      promiseTitle: "BiteBite 的承诺",
      promiseList: [
        "每款应用都与真实孩子与教育者共同设计与测试",
        "孩子的隐私值得守护——我们从不贩售资料，也不为营利追踪",
        "所有应用皆符合儿童网络安全法规，使用安心无虞",
        "我们持续聆听回馈，让产品不断进化",
      ],
      ctaTitle: "准备好一起探索了吗？",
      ctaSubtitle: "与成千上万的家庭一起，享受透过游戏学习的快乐",
      ctaPrimary: "探索我们的学习应用",
      ctaSecondary: "联络我们",
    },
    appCard: {
      learnMore: "了解更多",
    },
    appDetailDrawer: {
      keyFeatures: "主要特色",
      learningObjectives: "学习目标",
      ageAppropriate: "适合年龄",
      content: "内容",
      timeRecommendation: "建议使用时间",
    },
    appDetailPage: {
      notFoundTitle: "找不到此应用",
      backHome: "返回首页",
      backToApps: "返回全部应用",
      tabs: {
        about: "应用概览",
        features: "特色亮点",
        parents: "给家长的资讯",
      },
      aboutHeading: "孩子能学到什么？",
      howItWorks: "运作方式",
      learningStandards: "学习标准",
      standardsDescription: "与国际课程标准接轨，确保最佳学习成果。",
      ctaNote: "将在新视窗开启——安全无忧",
    },
    notFound: {
      oops: "糟糕！找不到这个页面",
      returnHome: "返回首页",
    },
  },
};

