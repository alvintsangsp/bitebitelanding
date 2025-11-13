import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/i18n/TranslationProvider";
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, type Language } from "@/i18n/languages";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, dictionary } = useTranslation();

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      role="navigation"
      aria-label={t("navigation.ariaLabel")}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 min-h-[44px]">
          {/* Logo - Left side */}
          <Link
            to="/"
            className="flex items-center gap-2 min-h-[44px] min-w-[44px]"
            aria-label={t("navigation.logoAria")}
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BiteBite
            </span>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground hidden sm:inline">
              {dictionary.common.brandTagline}
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              {t("navigation.home")}
            </Link>
            <Link
              to="/about"
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              {t("navigation.about")}
            </Link>
            <Link
              to="/apps"
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              {t("navigation.apps")}
            </Link>
            <Link
              to="/showcase"
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              {t("navigation.showcase")}
            </Link>
            <a
              href="#parent-hub"
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              {t("navigation.parentHub")}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="min-h-[44px] px-4 text-base flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 text-amber-900 hover:bg-amber-100/80 focus-visible:ring-amber-200"
                  aria-label={t("languageSwitcher.triggerLabel")}
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span>{LANGUAGE_LABELS[language]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onSelect={() => handleLanguageChange(lang)}
                    className="flex items-center gap-2"
                  >
                    <span>{LANGUAGE_LABELS[lang]}</span>
                    {language === lang && <span className="ml-auto text-xs text-primary">✓</span>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/apps">
              <Button size="sm" className="bg-primary hover:bg-primary/90 min-h-[44px]">
                {t("navigation.exploreApps")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Top right, hamburger icon */}
          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t("navigation.closeMenu") : t("navigation.openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full width dropdown */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 space-y-2 border-t border-border">
            <Link
              to="/"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {t("navigation.home")}
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {t("navigation.about")}
            </Link>
            <Link
              to="/apps"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {t("navigation.apps")}
            </Link>
            <Link
              to="/showcase"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {t("navigation.showcase")}
            </Link>
            <a
              href="#parent-hub"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {t("navigation.parentHub")}
            </a>
            <div className="px-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                {t("navigation.language")}
              </p>
              <div className="flex flex-wrap gap-2">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <Button
                    key={lang}
                    size="sm"
                    className={cn(
                      "flex-1 min-h-[44px] flex items-center justify-center gap-2 border border-amber-200",
                      language === lang
                        ? "bg-amber-100 text-amber-900 hover:bg-amber-100/80"
                        : "bg-transparent text-foreground hover:bg-amber-50"
                    )}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    <Globe className="w-4 h-4" aria-hidden="true" />
                    <span>{LANGUAGE_LABELS[lang]}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="pt-2 px-4">
              <Link to="/apps" className="block">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 min-h-[44px] text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navigation.exploreApps")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
