export const SUPPORTED_LANGUAGES = ["en", "zh-Hant", "zh-Hans"] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: "English",
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
};

