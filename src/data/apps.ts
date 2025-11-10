import mathIcon from "@/assets/app-math.png";
import scienceIcon from "@/assets/app-science.png";
import readingIcon from "@/assets/app-reading.png";
import codingIcon from "@/assets/app-coding.png";
import geographyIcon from "@/assets/app-geography.png";
import artIcon from "@/assets/app-art.png";
import xiangqiIcon from "@/assets/app-xiangqi.png";
import chesskingIcon from "@/assets/app-chessking.png";
import pingyiIcon from "@/assets/app-pingyi.png";

export interface App {
  id: string;
  name: string;
  description: string;
  age: string;
  category: string;
  icon: string;
  color: string;
  fullDescription: string;
  features: string[];
  learningObjectives: string[];
  ageAppropriate: string;
  contentDescription: string;
  timeRecommendation: string;
}

export const apps: App[] = [
  {
    id: "math-master",
    name: "Math Master",
    description: "Learn addition, subtraction, and multiplication through fun interactive games and challenges",
    age: "Ages 6-10",
    category: "Math",
    icon: mathIcon,
    color: "hsl(211 100% 50%)",
    fullDescription: "Math Master makes arithmetic fun! Kids practice essential math skills through engaging games, colorful animations, and instant feedback. Progress through levels as they master each concept.",
    features: [
      "Interactive number games",
      "Step-by-step problem solving",
      "Progress tracking and rewards",
      "Adaptive difficulty levels"
    ],
    learningObjectives: [
      "Master basic arithmetic operations",
      "Develop number sense and mental math",
      "Build confidence in problem-solving",
      "Common Core Math aligned for grades 1-4"
    ],
    ageAppropriate: "Perfect for elementary school children ages 6-10",
    contentDescription: "Contains educational math content only. No ads, no in-app purchases.",
    timeRecommendation: "15-20 minutes per day for optimal learning"
  },
  {
    id: "space-explorer",
    name: "Space Explorer",
    description: "Discover the solar system, planets, and stars through interactive exploration",
    age: "Ages 9-14",
    category: "Science",
    icon: scienceIcon,
    color: "hsl(211 100% 50%)",
    fullDescription: "Journey through space and learn about our solar system! Interactive 3D models, fascinating facts, and engaging quizzes make astronomy exciting for young learners.",
    features: [
      "3D planet exploration",
      "Interactive solar system tour",
      "Space facts and quizzes",
      "Constellation finder"
    ],
    learningObjectives: [
      "Understand planetary characteristics",
      "Learn about space science concepts",
      "Develop curiosity about astronomy",
      "NGSS Science Standards aligned"
    ],
    ageAppropriate: "Best for middle school students ages 9-14",
    contentDescription: "Educational space content with scientifically accurate information. No ads or purchases.",
    timeRecommendation: "20-30 minutes per session"
  },
  {
    id: "story-time",
    name: "Story Time",
    description: "Improve reading skills with interactive stories, phonics, and vocabulary games",
    age: "Ages 6-10",
    category: "Reading",
    icon: readingIcon,
    color: "hsl(28 100% 50%)",
    fullDescription: "Build strong reading foundations through engaging stories and phonics activities. Each story includes comprehension questions and vocabulary practice.",
    features: [
      "Phonics-based learning",
      "Interactive story reading",
      "Vocabulary building games",
      "Reading comprehension quizzes"
    ],
    learningObjectives: [
      "Develop phonemic awareness",
      "Improve reading fluency",
      "Expand vocabulary",
      "Common Core ELA Standards aligned"
    ],
    ageAppropriate: "Designed for early readers ages 6-10",
    contentDescription: "Age-appropriate stories and reading exercises. No ads, fully supervised content.",
    timeRecommendation: "15-25 minutes daily reading practice"
  },
  {
    id: "code-quest",
    name: "Code Quest",
    description: "Learn programming basics through puzzle-solving and fun coding challenges",
    age: "Ages 10-16",
    category: "Coding",
    icon: codingIcon,
    color: "hsl(145 77% 49%)",
    fullDescription: "Introduce kids to programming concepts through visual coding blocks and progressive challenges. No prior experience needed!",
    features: [
      "Block-based coding interface",
      "Progressive difficulty levels",
      "Creative project building",
      "Logic and problem-solving focus"
    ],
    learningObjectives: [
      "Understand basic programming concepts",
      "Develop computational thinking",
      "Build problem-solving skills",
      "CSTA Computer Science Standards aligned"
    ],
    ageAppropriate: "Perfect for pre-teens and teens ages 10-16",
    contentDescription: "Educational coding content designed for beginners. No ads or data collection.",
    timeRecommendation: "20-40 minutes per coding session"
  },
  {
    id: "world-tour",
    name: "World Tour",
    description: "Explore countries, cultures, and geography through interactive maps and games",
    age: "Ages 8-14",
    category: "Geography",
    icon: geographyIcon,
    color: "hsl(28 100% 50%)",
    fullDescription: "Travel the world from home! Learn about different countries, cultures, landmarks, and geography through interactive maps and engaging activities.",
    features: [
      "Interactive world map",
      "Country facts and quizzes",
      "Cultural exploration activities",
      "Landmark discovery games"
    ],
    learningObjectives: [
      "Learn world geography",
      "Understand cultural diversity",
      "Develop global awareness",
      "Geography curriculum aligned"
    ],
    ageAppropriate: "Suitable for ages 8-14",
    contentDescription: "Educational geography and cultural content. Safe, ad-free exploration.",
    timeRecommendation: "15-30 minutes per exploration session"
  },
  {
    id: "art-studio",
    name: "Art Studio",
    description: "Express creativity through drawing, coloring, and digital art projects",
    age: "Ages 6-14",
    category: "Art",
    icon: artIcon,
    color: "hsl(330 80% 85%)",
    fullDescription: "Unleash creativity! Kids can draw, paint, and create digital art with various tools and templates designed to inspire imagination.",
    features: [
      "Drawing and painting tools",
      "Creative templates",
      "Color theory lessons",
      "Art project gallery"
    ],
    learningObjectives: [
      "Develop fine motor skills",
      "Learn basic art concepts",
      "Express creativity",
      "Build confidence in artistic expression"
    ],
    ageAppropriate: "Great for all creative kids ages 6-14",
    contentDescription: "Creative art activities. No ads, no sharing required.",
    timeRecommendation: "20-45 minutes for creative sessions"
  },
  {
    id: "xiangqi",
    name: "Xiangqi",
    description: "Master Chinese chess strategy and tactics in this engaging board game experience",
    age: "Ages 8-16",
    category: "Strategy",
    icon: xiangqiIcon,
    color: "hsl(0 84% 60%)",
    fullDescription: "Learn the ancient game of Chinese chess! Xiangqi teaches strategic thinking, pattern recognition, and tactical planning through interactive gameplay.",
    features: [
      "Interactive game board",
      "Tutorial for beginners",
      "Strategy hints and tips",
      "Multiple difficulty levels"
    ],
    learningObjectives: [
      "Develop strategic thinking skills",
      "Learn pattern recognition",
      "Improve concentration and focus",
      "Understand Chinese chess rules and tactics"
    ],
    ageAppropriate: "Perfect for kids and teens ages 8-16",
    contentDescription: "Educational strategy game with no ads or in-app purchases.",
    timeRecommendation: "15-30 minutes per game session"
  },
  {
    id: "chessking",
    name: "Chessking",
    description: "Learn chess fundamentals and become a skilled player through interactive lessons",
    age: "Ages 6-14",
    category: "Chess",
    icon: chesskingIcon,
    color: "hsl(195 100% 50%)",
    fullDescription: "Become a chess master! Chessking teaches chess basics, tactics, and strategies through fun, interactive lessons and practice games.",
    features: [
      "Step-by-step chess tutorials",
      "Interactive practice games",
      "Puzzle challenges",
      "Progress tracking"
    ],
    learningObjectives: [
      "Master chess rules and moves",
      "Develop critical thinking",
      "Improve problem-solving skills",
      "Learn strategic planning"
    ],
    ageAppropriate: "Great for young learners ages 6-14",
    contentDescription: "Educational chess training with child-safe environment.",
    timeRecommendation: "20-30 minutes per practice session"
  },
  {
    id: "pingyi",
    name: "PingYi",
    description: "Build vocabulary and language skills through fun word games and spelling challenges",
    age: "Ages 5-12",
    category: "Language",
    icon: pingyiIcon,
    color: "hsl(45 100% 51%)",
    fullDescription: "Make learning words fun! PingYi helps kids expand vocabulary, practice spelling, and develop language skills through colorful, engaging activities.",
    features: [
      "Interactive word games",
      "Spelling challenges",
      "Vocabulary building",
      "Pronunciation practice"
    ],
    learningObjectives: [
      "Expand vocabulary",
      "Improve spelling skills",
      "Develop language comprehension",
      "Build reading confidence"
    ],
    ageAppropriate: "Perfect for young learners ages 5-12",
    contentDescription: "Educational language learning content. Safe and ad-free.",
    timeRecommendation: "15-25 minutes daily practice"
  }
];