import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, type Language } from "./languages";
import { translations } from "./translations";

interface TranslationContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T = string>(path: string, fallback?: T) => T;
  labels: Record<Language, string>;
  dictionary: (typeof translations)[Language];
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

const STORAGE_KEY = "bitebite.language";

const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && SUPPORTED_LANGUAGES.includes(value as Language);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(stored)) {
    return stored;
  }

  const browserLang = window.navigator.language.toLowerCase();
  if (browserLang.includes("zh") && browserLang.includes("hant")) {
    return "zh-Hant";
  }
  if (browserLang.includes("zh")) {
    return "zh-Hans";
  }

  return "en";
};

const getValueAtPath = (path: string, language: Language) => {
  const segments = path.split(".").filter(Boolean);
  return segments.reduce<unknown>((acc, segment) => {
    if (acc === undefined || acc === null || typeof acc !== "object") {
      return undefined;
    }
    return (acc as Record<string, unknown>)[segment];
  }, translations[language]);
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useCallback(
    <T,>(path: string, fallback?: T) => {
      const value = getValueAtPath(path, language);
      if (value === undefined) {
        if (import.meta.env.DEV) {
          console.warn(`Missing translation for "${path}" in language "${language}".`);
        }
        return (fallback ?? (path as unknown as T)) as T;
      }

      return value as T;
    },
    [language],
  );

  const value = useMemo<TranslationContextValue>(
    () => ({
      language,
      setLanguage,
      t,
      labels: LANGUAGE_LABELS,
      dictionary: translations[language],
    }),
    [language, t],
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

