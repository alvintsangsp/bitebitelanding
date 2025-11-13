import type { Language } from "@/i18n/languages";

import artIcon from "@/assets/app-art.png";
import codingIcon from "@/assets/app-coding.png";
import mathIcon from "@/assets/app-math.png";

export type ShowcaseEntry = {
  id: string;
  gameName: string;
  displayName: string;
  gameType: string;
  description: string;
  image: string;
  altText: Record<Language, string>;
  remixUrl?: string;
  createdAt: string;
  approved: boolean;
};

export const showcaseEntries: ShowcaseEntry[] = [
  {
    id: "rainbow-puzzle",
    gameName: "Rainbow Puzzle Builder",
    displayName: "Maya, 9",
    gameType: "Puzzle",
    description: "Arrange sparkling tiles to reveal hidden animals and unlock new levels.",
    image: artIcon,
    altText: {
      en: "Colorful puzzle tiles showing a rainbow animal pattern",
      "zh-Hant": "繽紛拼圖方塊拼出彩虹動物圖案",
      "zh-Hans": "缤纷拼图方块拼出彩虹动物图案",
    },
    remixUrl: "https://lovable.dev/rainbow-puzzle",
    createdAt: "2025-01-10",
    approved: true,
  },
  {
    id: "space-rescue",
    gameName: "Planet Rescue Squad",
    displayName: "Leo, 11",
    gameType: "Adventure",
    description: "Guide brave astronauts to save planets from space junk and restore habitats.",
    image: codingIcon,
    altText: {
      en: "Cartoon astronauts cleaning space junk around planets",
      "zh-Hant": "卡通太空人清理行星周圍的太空垃圾",
      "zh-Hans": "卡通太空人清理行星周围的太空垃圾",
    },
    remixUrl: "https://lovable.dev/planet-rescue",
    createdAt: "2025-02-05",
    approved: true,
  },
  {
    id: "bite-snake",
    gameName: "Bite Snake",
    displayName: "Jayden Tsang",
    gameType: "Adventure",
    description: "Glide through glowing blocks, eat energy orbs, and keep the friendly snake growing!",
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect width='200' height='200' fill='%230d3b27'/><circle cx='120' cy='150' r='30' fill='%2305f13a' stroke='%2325d83a' stroke-width='4'/><rect x='110' y='140' width='60' height='40' fill='%2305f13a' stroke='%2304c330' stroke-width='4'/><circle cx='100' cy='100' r='18' fill='%23d9453f'/><circle cx='100' cy='42' r='22' fill='%23f1b41a' stroke='%23e4880e' stroke-width='6'/><circle cx='100' cy='42' r='8' fill='%230d3b27'/></svg>",
    altText: {
      en: "Retro snake game with a glowing apple and bright green tiles",
      "zh-Hant": "復古風的貪食蛇遊戲，畫面有發光蘋果與亮綠方塊",
      "zh-Hans": "复古风的贪吃蛇游戏，画面有发光苹果与亮绿色方块",
    },
    remixUrl: "https://snake.bitebite.app",
    createdAt: "2025-03-12",
    approved: true,
  },
  {
    id: "math-maze",
    gameName: "Mystery Math Maze",
    displayName: "Jia, 8",
    gameType: "Strategy",
    description: "Solve number riddles to choose the right door and find the hidden treasure.",
    image: mathIcon,
    altText: {
      en: "Maze with numbers glowing on ancient stone doors",
      "zh-Hant": "古老石門上發光數字的迷宮",
      "zh-Hans": "古老石门上发光数字的迷宫",
    },
    createdAt: "2024-12-15",
    approved: true,
  },
];

export const getApprovedShowcaseEntries = () =>
  showcaseEntries.filter((entry) => entry.approved);

