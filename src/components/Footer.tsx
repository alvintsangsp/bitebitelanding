import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

const Footer = () => {
  const { t, dictionary } = useTranslation();

  return (
    <footer className="bg-muted/30 border-t border-border py-8 md:py-12 px-4" role="contentinfo">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile-first: Stack vertically, easy to tap */}
        <div className="flex flex-col space-y-8 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
          {/* Left Column - Brand */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BiteBite
            </h3>
            <p className="text-base text-muted-foreground font-medium">{dictionary.common.brandTagline}</p>
            <p className="text-base text-muted-foreground">{t("footer.brandDescription")}</p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t("footer.quickLinksTitle")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {t("navigation.about")}
                </Link>
              </li>
              <li>
                <a
                  href="#explore-apps"
                  className="text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {t("navigation.apps")}
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {t("home.legal.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t("footer.contactTitle")}</h4>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <a
                href={`mailto:${dictionary.common.contactEmail}`}
                className="text-base text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                {dictionary.common.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="border-t border-border mt-8 pt-6 md:pt-8 text-center">
          <p className="text-base text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
