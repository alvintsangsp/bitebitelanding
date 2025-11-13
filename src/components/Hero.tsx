import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-learning.jpg";
import { useTranslation } from "@/i18n/TranslationProvider";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-8 pb-12 px-4">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(28 100% 50%))",
          opacity: 0.1,
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Mobile-first: Stack vertically, center-aligned */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          {/* Headline - Stacked vertically on mobile */}
          <div className="space-y-4 w-full max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("hero.titleLine1")}
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t("hero.titleLine2")}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTA Buttons - Stacked vertically on mobile, full width */}
          <div className="flex flex-col w-full max-w-md gap-4 px-4 md:flex-row md:justify-center md:max-w-2xl">
            <Link to="/apps" className="w-full">
              <Button
                size="lg"
                className="w-full min-h-[44px] bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-8 py-6 rounded-full transition-all"
                aria-label={t("hero.primaryAria")}
              >
                {t("hero.primaryCta")}
              </Button>
            </Link>
            <Link to="/about" className="w-full">
              <Button
                size="lg"
                variant="outline"
                className="w-full min-h-[44px] border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-8 py-6 rounded-full transition-all"
                aria-label={t("hero.secondaryAria")}
              >
                {t("hero.secondaryCta")}
              </Button>
            </Link>
          </div>

          {/* Hero Image - Hidden on very small screens, shown on larger mobile */}
          <div className="relative w-full max-w-lg mt-4 hidden sm:block">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt={t("hero.imageAlt")}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;