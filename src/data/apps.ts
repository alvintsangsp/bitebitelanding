import mathIcon from "@/assets/app-math.png";
import scienceIcon from "@/assets/app-science.png";
import readingIcon from "@/assets/app-reading.png";
import codingIcon from "@/assets/app-coding.png";
import geographyIcon from "@/assets/app-geography.png";
import artIcon from "@/assets/app-art.png";
import xiangqiIcon from "@/assets/app-xiangqi.png";
import chesskingIcon from "@/assets/app-chessking.png";
import pingyiIcon from "@/assets/app-pingyi.png";
import type { Language } from "@/i18n/languages";

export type AppCopy = {
  name: string;
  description: string;
  age: string;
  category: string;
  fullDescription: string;
  features: string[];
  learningObjectives: string[];
  ageAppropriate: string;
  contentDescription: string;
  timeRecommendation: string;
};

export interface App {
  id: string;
  icon: string;
  color: string;
  screenshot?: string;
  appUrl?: string;
  copy: Record<Language, AppCopy>;
}

export const getAppCopy = (app: App, language: Language): AppCopy =>
  app.copy[language] ?? app.copy.en;

const FALLBACK_URLS: Record<string, string> = {
  xiangqi: "https://xianqi.bitebite.app",
  chessking: "https://chessking.bitebite.app",
  pingyi: "https://pingyiaf.bitebite.app",
};

export const resolveAppUrl = (app: App): string | null => {
  if (app.appUrl) {
    return app.appUrl;
  }

  return FALLBACK_URLS[app.id] ?? null;
};

export const isAppAvailable = (app: App): boolean => Boolean(resolveAppUrl(app));

export const apps: App[] = [
  {
    id: "math-master",
    icon: mathIcon,
    color: "hsl(211 100% 50%)",
    copy: {
      en: {
        name: "Math Master",
        description:
          "Learn addition, subtraction, and multiplication through fun interactive games and challenges",
        age: "Ages 6-10",
        category: "Math",
        fullDescription:
          "Math Master makes arithmetic fun! Kids practice essential math skills through engaging games, colorful animations, and instant feedback. Progress through levels as they master each concept.",
        features: [
          "Interactive number games",
          "Step-by-step problem solving",
          "Progress tracking and rewards",
          "Adaptive difficulty levels",
        ],
        learningObjectives: [
          "Master basic arithmetic operations",
          "Develop number sense and mental math",
          "Build confidence in problem-solving",
          "Common Core Math aligned for grades 1-4",
        ],
        ageAppropriate: "Perfect for elementary school children ages 6-10",
        contentDescription: "Contains educational math content only. No ads, no in-app purchases.",
        timeRecommendation: "15-20 minutes per day for optimal learning",
      },
      "zh-Hant": {
        name: "數學小高手",
        description: "透過有趣的互動遊戲與挑戰，練習加法、減法與乘法",
        age: "6-10 歲",
        category: "數學",
        fullDescription:
          "「數學小高手」讓計算變得好好玩！孩子透過生動的遊戲、繽紛動畫與即時回饋，扎實練習必備的數學技巧。每掌握一個概念就能解鎖新關卡，循序漸進建立自信。",
        features: [
          "互動式數字遊戲",
          "逐步解題教學",
          "學習進度與獎勵系統",
          "自動調整的難度等級",
        ],
        learningObjectives: [
          "熟練基礎四則運算",
          "培養數感與心算能力",
          "建立解題信心與應對策略",
          "對應 1-4 年級常見核心數學能力",
        ],
        ageAppropriate: "最適合 6-10 歲國小階段的孩子",
        contentDescription: "僅包含教育性數學內容，沒有廣告與內購。",
        timeRecommendation: "每天 15-20 分鐘即可維持最佳學習效果",
      },
      "zh-Hans": {
        name: "数学小高手",
        description: "通过有趣的互动游戏与挑战，练习加法、减法与乘法",
        age: "6-10 岁",
        category: "数学",
        fullDescription:
          "「数学小高手」让算术变得更有趣！孩子透过生动的游戏、缤纷动画与即时反馈，扎实练习必备的数学技能。每掌握一个概念就能解锁新关卡，循序渐进建立自信。",
        features: [
          "互动式数字游戏",
          "逐步讲解的解题流程",
          "学习进度与奖励系统",
          "自动调整的难度等级",
        ],
        learningObjectives: [
          "熟练基础四则运算",
          "培养数感与心算能力",
          "建立解题信心与策略",
          "对应 1-4 年级常见核心数学能力",
        ],
        ageAppropriate: "最适合 6-10 岁小学阶段的孩子",
        contentDescription: "仅包含教育性数学内容，没有广告与内购。",
        timeRecommendation: "每天 15-20 分钟即可维持最佳学习效果",
      },
    },
  },
  {
    id: "space-explorer",
    icon: scienceIcon,
    color: "hsl(211 100% 50%)",
    copy: {
      en: {
        name: "Space Explorer",
        description: "Discover the solar system, planets, and stars through interactive exploration",
        age: "Ages 9-14",
        category: "Science",
        fullDescription:
          "Journey through space and learn about our solar system! Interactive 3D models, fascinating facts, and engaging quizzes make astronomy exciting for young learners.",
        features: [
          "3D planet exploration",
          "Interactive solar system tour",
          "Space facts and quizzes",
          "Constellation finder",
        ],
        learningObjectives: [
          "Understand planetary characteristics",
          "Learn about space science concepts",
          "Develop curiosity about astronomy",
          "NGSS Science Standards aligned",
        ],
        ageAppropriate: "Best for middle school students ages 9-14",
        contentDescription:
          "Educational space content with scientifically accurate information. No ads or purchases.",
        timeRecommendation: "20-30 minutes per session",
      },
      "zh-Hant": {
        name: "太空小探險",
        description: "透過互動探索，認識太陽系、行星與閃耀星座",
        age: "9-14 歲",
        category: "自然科學",
        fullDescription:
          "一起踏上宇宙旅程，認識我們的太陽系！互動 3D 模型、豐富的太空知識與趣味小測驗，讓天文學習變得既刺激又生動。",
        features: [
          "3D 行星互動探索",
          "沉浸式太陽系導覽",
          "精彩的太空知識與小測驗",
          "星座尋找與介紹",
        ],
        learningObjectives: [
          "了解各行星的特色與運行",
          "認識太空與天文科學基本概念",
          "培養對宇宙探索的好奇心",
          "對應 NGSS 科學標準內容",
        ],
        ageAppropriate: "最適合 9-14 歲的國中小學生",
        contentDescription: "提供精準的太空教育內容，無廣告、無付費機制。",
        timeRecommendation: "每次體驗約 20-30 分鐘最適合",
      },
      "zh-Hans": {
        name: "太空小探险",
        description: "透过互动探索，认识太阳系、行星与闪耀星座",
        age: "9-14 岁",
        category: "科学",
        fullDescription:
          "一起踏上宇宙旅程，认识我们的太阳系！互动 3D 模型、丰富的太空知识与趣味测验，让天文学习既刺激又生动。",
        features: [
          "3D 行星互动探索",
          "沉浸式太阳系导览",
          "精彩的太空知识与测验",
          "星座查找与介绍",
        ],
        learningObjectives: [
          "了解各行星的特征与运行",
          "认识太空与天文科学基本概念",
          "培养对宇宙探索的好奇心",
          "对应 NGSS 科学标准内容",
        ],
        ageAppropriate: "最适合 9-14 岁的中小学生",
        contentDescription: "提供精准的太空教育内容，无广告、无付费机制。",
        timeRecommendation: "每次体验约 20-30 分钟最合适",
      },
    },
  },
  {
    id: "story-time",
    icon: readingIcon,
    color: "hsl(28 100% 50%)",
    copy: {
      en: {
        name: "Story Time",
        description: "Improve reading skills with interactive stories, phonics, and vocabulary games",
        age: "Ages 6-10",
        category: "Reading",
        fullDescription:
          "Build strong reading foundations through engaging stories and phonics activities. Each story includes comprehension questions and vocabulary practice.",
        features: [
          "Phonics-based learning",
          "Interactive story reading",
          "Vocabulary building games",
          "Reading comprehension quizzes",
        ],
        learningObjectives: [
          "Develop phonemic awareness",
          "Improve reading fluency",
          "Expand vocabulary",
          "Common Core ELA Standards aligned",
        ],
        ageAppropriate: "Designed for early readers ages 6-10",
        contentDescription:
          "Age-appropriate stories and reading exercises. No ads, fully supervised content.",
        timeRecommendation: "15-25 minutes daily reading practice",
      },
      "zh-Hant": {
        name: "故事時間",
        description: "透過互動故事、自然發音與字彙遊戲提升閱讀能力",
        age: "6-10 歲",
        category: "閱讀",
        fullDescription:
          "以充滿吸引力的故事與發音活動，建立扎實的閱讀基礎。每個故事都搭配理解題與字彙練習，讓孩子邊玩邊提升語文能力。",
        features: [
          "自然發音導向的學習內容",
          "互動式故事朗讀與理解",
          "字彙延伸遊戲與活動",
          "閱讀理解小測驗",
        ],
        learningObjectives: [
          "培養語音辨識與拼讀能力",
          "提升朗讀流暢度",
          "擴充常用字彙",
          "對應英語語文課綱能力指標",
        ],
        ageAppropriate: "專為 6-10 歲初階讀者設計",
        contentDescription: "提供適齡故事與閱讀練習，完全無廣告、內容全程監控。",
        timeRecommendation: "每天 15-25 分鐘的閱讀時間最適宜",
      },
      "zh-Hans": {
        name: "故事时间",
        description: "透过互动故事、自然发音与词汇游戏提升阅读能力",
        age: "6-10 岁",
        category: "阅读",
        fullDescription:
          "以吸引人的故事与发音活动，建立扎实的阅读基础。每个故事搭配理解题与词汇练习，让孩子在游戏中提升语言能力。",
        features: [
          "自然发音导向的学习内容",
          "互动式故事朗读与理解",
          "词汇延伸游戏与活动",
          "阅读理解小测验",
        ],
        learningObjectives: [
          "培养语音辨识与拼读能力",
          "提升朗读流畅度",
          "扩充常用词汇",
          "对应英语语文课程标准",
        ],
        ageAppropriate: "专为 6-10 岁初级读者设计",
        contentDescription: "提供适龄故事与阅读练习，完全无广告，内容全程把关。",
        timeRecommendation: "每天 15-25 分钟阅读时间最合适",
      },
    },
  },
  {
    id: "code-quest",
    icon: codingIcon,
    color: "hsl(145 77% 49%)",
    copy: {
      en: {
        name: "Code Quest",
        description: "Learn programming basics through puzzle-solving and fun coding challenges",
        age: "Ages 10-16",
        category: "Coding",
        fullDescription:
          "Introduce kids to programming concepts through visual coding blocks and progressive challenges. No prior experience needed!",
        features: [
          "Block-based coding interface",
          "Progressive difficulty levels",
          "Creative project building",
          "Logic and problem-solving focus",
        ],
        learningObjectives: [
          "Understand basic programming concepts",
          "Develop computational thinking",
          "Build problem-solving skills",
          "CSTA Computer Science Standards aligned",
        ],
        ageAppropriate: "Perfect for pre-teens and teens ages 10-16",
        contentDescription:
          "Educational coding content designed for beginners. No ads or data collection.",
        timeRecommendation: "20-40 minutes per coding session",
      },
      "zh-Hant": {
        name: "程式探險",
        description: "透過解謎與趣味挑戰，學習程式設計基礎概念",
        age: "10-16 歲",
        category: "程式設計",
        fullDescription:
          "以視覺化積木語法帶孩子認識程式思維，並透過逐步進階的任務挑戰掌握核心概念。完全不需要先備知識，人人都能上手！",
        features: [
          "積木式程式編寫介面",
          "循序漸進的關卡難度",
          "創意專案與作品分享",
          "訓練邏輯與解題能力",
        ],
        learningObjectives: [
          "理解基礎程式設計概念",
          "培養計算思維與邏輯",
          "建立面對問題的拆解能力",
          "對應 CSTA 計算機科學標準",
        ],
        ageAppropriate: "10-16 歲的青少年與學齡前期最適合",
        contentDescription: "專為初學者設計的程式教學內容，沒有廣告與資料蒐集。",
        timeRecommendation: "每次程式練習約 20-40 分鐘效果最佳",
      },
      "zh-Hans": {
        name: "程式探险",
        description: "透过解谜与趣味挑战，学习程式设计基础概念",
        age: "10-16 岁",
        category: "程式设计",
        fullDescription:
          "使用可视化积木语法带孩子认识程式思维，并透过循序渐进的任务挑战掌握核心概念。完全不需要先备知识，人人都能上手！",
        features: [
          "积木式程式编写介面",
          "循序渐进的关卡难度",
          "创意专案与作品分享",
          "训练逻辑与解题能力",
        ],
        learningObjectives: [
          "理解基础程式设计概念",
          "培养计算思维与逻辑",
          "建立拆解问题的能力",
          "对应 CSTA 计算机科学标准",
        ],
        ageAppropriate: "10-16 岁的青少年与学龄前期最适合",
        contentDescription: "专为初学者设计的程式教学内容，没有广告与资料收集。",
        timeRecommendation: "每次练习约 20-40 分钟效果最佳",
      },
    },
  },
  {
    id: "world-tour",
    icon: geographyIcon,
    color: "hsl(28 100% 50%)",
    copy: {
      en: {
        name: "World Tour",
        description: "Explore countries, cultures, and geography through interactive maps and games",
        age: "Ages 8-14",
        category: "Geography",
        fullDescription:
          "Travel the world from home! Learn about different countries, cultures, landmarks, and geography through interactive maps and engaging activities.",
        features: [
          "Interactive world map",
          "Country facts and quizzes",
          "Cultural exploration activities",
          "Landmark discovery games",
        ],
        learningObjectives: [
          "Learn world geography",
          "Understand cultural diversity",
          "Develop global awareness",
          "Geography curriculum aligned",
        ],
        ageAppropriate: "Suitable for ages 8-14",
        contentDescription: "Educational geography and cultural content. Safe, ad-free exploration.",
        timeRecommendation: "15-30 minutes per exploration session",
      },
      "zh-Hant": {
        name: "世界小旅行",
        description: "透過互動地圖與遊戲探索各國文化與地理",
        age: "8-14 歲",
        category: "地理",
        fullDescription:
          "在家就能環遊世界！透過互動地圖與豐富活動，認識各國文化、地標與地理特色，開拓孩子的全球視野。",
        features: [
          "互動式世界地圖",
          "各國知識與小測驗",
          "文化探索活動",
          "知名地標尋寶遊戲",
        ],
        learningObjectives: [
          "學習世界地理與國家特色",
          "理解文化多樣性",
          "培養全球公民素養",
          "對應地理課綱重點",
        ],
        ageAppropriate: "適合 8-14 歲的孩子探索",
        contentDescription: "提供安全、無廣告的地理與文化學習內容。",
        timeRecommendation: "每次探索約 15-30 分鐘最合適",
      },
      "zh-Hans": {
        name: "世界小旅行",
        description: "透过互动地图与游戏探索各国文化与地理",
        age: "8-14 岁",
        category: "地理",
        fullDescription:
          "在家就能环游世界！透过互动地图与丰富活动，认识各国文化、地标与地理特色，拓展孩子的全球视野。",
        features: [
          "互动式世界地图",
          "各国知识与小测验",
          "文化探索活动",
          "知名地标寻宝游戏",
        ],
        learningObjectives: [
          "学习世界地理与国家特色",
          "理解文化多样性",
          "培养全球公民素养",
          "对应地理课程重点",
        ],
        ageAppropriate: "适合 8-14 岁的孩子探索",
        contentDescription: "提供安全、无广告的地理与文化学习内容。",
        timeRecommendation: "每次探索约 15-30 分钟最合适",
      },
    },
  },
  {
    id: "art-studio",
    icon: artIcon,
    color: "hsl(330 80% 85%)",
    copy: {
      en: {
        name: "Art Studio",
        description: "Express creativity through drawing, coloring, and digital art projects",
        age: "Ages 6-14",
        category: "Art",
        fullDescription:
          "Unleash creativity! Kids can draw, paint, and create digital art with various tools and templates designed to inspire imagination.",
        features: [
          "Drawing and painting tools",
          "Creative templates",
          "Color theory lessons",
          "Art project gallery",
        ],
        learningObjectives: [
          "Develop fine motor skills",
          "Learn basic art concepts",
          "Express creativity",
          "Build confidence in artistic expression",
        ],
        ageAppropriate: "Great for all creative kids ages 6-14",
        contentDescription: "Creative art activities. No ads, no sharing required.",
        timeRecommendation: "20-45 minutes for creative sessions",
      },
      "zh-Hant": {
        name: "藝術創作室",
        description: "透過繪畫、填色與數位創作，盡情發揮創意",
        age: "6-14 歲",
        category: "藝術",
        fullDescription:
          "釋放無限創造力！孩子可以使用多種工具進行繪畫、塗鴉與數位創作，靈感模板讓想像力持續延伸。",
        features: [
          "多元繪畫與上色工具",
          "創意主題模板",
          "色彩理論小課程",
          "作品展示與收藏區",
        ],
        learningObjectives: [
          "培養精細動作與筆觸控制",
          "認識基礎藝術概念",
          "自信展現創意與想法",
          "在創作中建立表達能力",
        ],
        ageAppropriate: "最適合 6-14 歲的創意小藝術家",
        contentDescription: "純粹的創作活動，沒有廣告、不需分享個資。",
        timeRecommendation: "每次創作 20-45 分鐘最能激發靈感",
      },
      "zh-Hans": {
        name: "艺术创作室",
        description: "透过绘画、填色与数位创作，尽情发挥创意",
        age: "6-14 岁",
        category: "艺术",
        fullDescription:
          "释放无限创造力！孩子可以使用多样工具进行绘画、涂鸦与数位创作，灵感模板让想像力持续延伸。",
        features: [
          "多元绘画与上色工具",
          "创意主题模板",
          "色彩理论小课程",
          "作品展示与收藏区",
        ],
        learningObjectives: [
          "培养精细动作与笔触控制",
          "认识基础艺术概念",
          "自信展现创意与想法",
          "在创作中建立表达能力",
        ],
        ageAppropriate: "最适合 6-14 岁的创意小艺术家",
        contentDescription: "纯粹的创作活动，没有广告、不需分享资料。",
        timeRecommendation: "每次创作 20-45 分钟最能激发灵感",
      },
    },
  },
  {
    id: "xiangqi",
    icon: xiangqiIcon,
    screenshot: "https://xianqi.bitebite.app/screenshot.png",
    appUrl: "https://xianqi.bitebite.app",
    color: "hsl(0 84% 60%)",
    copy: {
      en: {
        name: "Xiangqi",
        description: "Master Chinese chess strategy and tactics in this engaging board game experience",
        age: "Ages 8-16",
        category: "Board Game",
        fullDescription:
          "Learn the ancient game of Chinese chess! Xiangqi teaches strategic thinking, pattern recognition, and tactical planning through interactive gameplay.",
        features: [
          "Interactive game board",
          "Tutorial for beginners",
          "Strategy hints and tips",
          "Multiple difficulty levels",
        ],
        learningObjectives: [
          "Develop strategic thinking skills",
          "Learn pattern recognition",
          "Improve concentration and focus",
          "Understand Chinese chess rules and tactics",
        ],
        ageAppropriate: "Perfect for kids and teens ages 8-16",
        contentDescription: "Educational strategy game with no ads or in-app purchases.",
        timeRecommendation: "15-30 minutes per game session",
      },
      "zh-Hant": {
        name: "象棋高手",
        description: "在趣味棋局中掌握象棋策略與精妙布局",
        age: "8-16 歲",
        category: "棋類遊戲",
        fullDescription:
          "學習歷史悠久的中國象棋！透過互動對局，訓練策略思維、型勢判斷與棋步規劃，讓孩子愛上動腦的樂趣。",
        features: [
          "互動式棋盤對局",
          "新手教學與引導",
          "策略提示與實戰技巧",
          "多種難度等級任意挑戰",
        ],
        learningObjectives: [
          "建立策略思考與布局能力",
          "培養型勢辨識與邏輯推理",
          "提升專注力與耐心",
          "熟悉中國象棋規則與戰術",
        ],
        ageAppropriate: "最適合 8-16 歲的孩子與青少年",
        contentDescription: "純策略學習遊戲，無廣告、無內購，安心體驗。",
        timeRecommendation: "每局建議 15-30 分鐘，隨時開始一場精彩對弈",
      },
      "zh-Hans": {
        name: "象棋高手",
        description: "在趣味棋局中掌握象棋策略与精妙布局",
        age: "8-16 岁",
        category: "棋类游戏",
        fullDescription:
          "学习历史悠久的中国象棋！透过互动对局，训练策略思维、棋形判断与棋步规划，让孩子爱上动脑的乐趣。",
        features: [
          "互动式棋盘对弈",
          "新手教学与引导",
          "策略提示与实战技巧",
          "多种难度等级任你挑战",
        ],
        learningObjectives: [
          "建立策略思考与布局能力",
          "培养棋形辨识与逻辑推理",
          "提升专注力与耐心",
          "熟悉中国象棋规则与战术",
        ],
        ageAppropriate: "最适合 8-16 岁的孩子与青少年",
        contentDescription: "纯策略学习游戏，无广告、无内购，安心体验。",
        timeRecommendation: "每局建议 15-30 分钟，随时展开精彩对弈",
      },
    },
  },
  {
    id: "chessking",
    icon: chesskingIcon,
    screenshot: "https://chessking.bitebite.app/screenshot.png",
    appUrl: "https://chessking.bitebite.app",
    color: "hsl(195 100% 50%)",
    copy: {
      en: {
        name: "Chessking",
        description: "Learn chess fundamentals and become a skilled player through interactive lessons",
        age: "Ages 6-14",
        category: "Board Game",
        fullDescription:
          "Become a chess master! Chessking teaches chess basics, tactics, and strategies through fun, interactive lessons and practice games.",
        features: [
          "Step-by-step chess tutorials",
          "Interactive practice games",
          "Puzzle challenges",
          "Progress tracking",
        ],
        learningObjectives: [
          "Master chess rules and moves",
          "Develop critical thinking",
          "Improve problem-solving skills",
          "Learn strategic planning",
        ],
        ageAppropriate: "Great for young learners ages 6-14",
        contentDescription: "Educational chess training with child-safe environment.",
        timeRecommendation: "20-30 minutes per practice session",
      },
      "zh-Hant": {
        name: "西洋棋王",
        description: "透過互動課程學習西洋棋基本功與進階技巧",
        age: "6-14 歲",
        category: "棋類遊戲",
        fullDescription:
          "邁向棋王之路！「西洋棋王」以生動課程講解棋規、戰術與策略，搭配實戰練習與謎題挑戰，循序養成高手必備能力。",
        features: [
          "步驟式西洋棋教學",
          "互動練習對局",
          "策略與謎題挑戰",
          "學習進度追蹤",
        ],
        learningObjectives: [
          "熟悉棋子走法與基本棋規",
          "建立批判思考與推演能力",
          "提升問題解決技巧",
          "學習制定長短期策略",
        ],
        ageAppropriate: "適合 6-14 歲的西洋棋初學者與進階者",
        contentDescription: "安全的棋術學習環境，無廣告、無額外付費。",
        timeRecommendation: "每次練習 20-30 分鐘，循序累積戰力",
      },
      "zh-Hans": {
        name: "西洋棋王",
        description: "透过互动课程学习西洋棋基本功与进阶技巧",
        age: "6-14 岁",
        category: "棋类游戏",
        fullDescription:
          "迈向棋王之路！「西洋棋王」以生动课程讲解棋规、战术与策略，搭配实战练习与谜题挑战，循序养成高手必备能力。",
        features: [
          "步骤式西洋棋教学",
          "互动练习对局",
          "策略与谜题挑战",
          "学习进度追踪",
        ],
        learningObjectives: [
          "熟悉棋子走法与基本棋规",
          "建立批判思考与推演能力",
          "提升问题解决技巧",
          "学习制定长短期策略",
        ],
        ageAppropriate: "适合 6-14 岁的西洋棋初学者与进阶者",
        contentDescription: "安全的棋术学习环境，无广告、无额外付费。",
        timeRecommendation: "每次练习 20-30 分钟，循序累积战力",
      },
    },
  },
  {
    id: "pingyi",
    icon: pingyiIcon,
    screenshot: "https://pingyiaf.bitebite.app/screenshot.png",
    appUrl: "https://pingyiaf.bitebite.app",
    color: "hsl(45 100% 51%)",
    copy: {
      en: {
        name: "PingYi",
        description:
          "Build vocabulary and language skills through fun word games and spelling challenges",
        age: "Ages 5-12",
        category: "Language",
        fullDescription:
          "Make learning words fun! PingYi helps kids expand vocabulary, practice spelling, and develop language skills through colorful, engaging activities.",
        features: [
          "Interactive word games",
          "Spelling challenges",
          "Vocabulary building",
          "Pronunciation practice",
        ],
        learningObjectives: [
          "Expand vocabulary",
          "Improve spelling skills",
          "Develop language comprehension",
          "Build reading confidence",
        ],
        ageAppropriate: "Perfect for young learners ages 5-12",
        contentDescription: "Educational language learning content. Safe and ad-free.",
        timeRecommendation: "15-25 minutes daily practice",
      },
      "zh-Hant": {
        name: "拼義小學堂",
        description: "透過趣味字詞遊戲與拼字挑戰，培養語文能力",
        age: "5-12 歲",
        category: "語文",
        fullDescription:
          "讓學字變好玩！「拼義小學堂」以繽紛互動活動，帶孩子擴充字彙、練習拼字，並加強語文理解力。",
        features: [
          "互動式字詞遊戲",
          "多元拼字挑戰",
          "字彙拓展練習",
          "發音與朗讀練習",
        ],
        learningObjectives: [
          "擴大常用與延伸字彙量",
          "提升拼字與字形辨識能力",
          "培養語文理解與表達",
          "建立閱讀自信與興趣",
        ],
        ageAppropriate: "最適合 5-12 歲語文啟蒙階段的孩子",
        contentDescription: "純教育語文內容，安全無廣告。",
        timeRecommendation: "每天 15-25 分鐘練習最有效率",
      },
      "zh-Hans": {
        name: "拼义小课堂",
        description: "透过趣味字词游戏与拼字挑战，培养语言能力",
        age: "5-12 岁",
        category: "语言",
        fullDescription:
          "让学字变好玩！「拼义小课堂」以缤纷互动活动，带孩子扩充词汇、练习拼字，并加强语言理解力。",
        features: [
          "互动式字词游戏",
          "多元拼字挑战",
          "词汇拓展练习",
          "发音与朗读练习",
        ],
        learningObjectives: [
          "扩大常用与延伸词汇量",
          "提升拼字与字形辨识能力",
          "培养语言理解与表达",
          "建立阅读自信与兴趣",
        ],
        ageAppropriate: "最适合 5-12 岁语言启蒙阶段的孩子",
        contentDescription: "纯教育语言内容，安全无广告。",
        timeRecommendation: "每天 15-25 分钟练习最有效率",
      },
    },
  },
];