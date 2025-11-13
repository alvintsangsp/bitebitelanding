import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "@/i18n/TranslationProvider";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">{t("notFound.oops")}</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
        >
          {t("notFound.returnHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
