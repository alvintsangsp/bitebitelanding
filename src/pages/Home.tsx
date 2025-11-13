import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import AppCard from "@/components/AppCard";
import AppDetailDrawer from "@/components/AppDetailDrawer";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { GraduationCap, Shield, Users, Gift } from "lucide-react";
import { apps } from "@/data/apps";
import type { App } from "@/data/apps";
import { useTranslation } from "@/i18n/TranslationProvider";

const Home = () => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useTranslation();

  const handleLearnMore = (app: App) => {
    setSelectedApp(app);
    setDrawerOpen(true);
  };

  const latestApps = apps.slice(-3).reverse();

  const featureIcons = [GraduationCap, Shield, Users, Gift];
  const featureContent = t<Array<{ title: string; description: string }>>("home.features");
  const features = featureContent.map((feature, index) => ({
    icon: featureIcons[index] ?? GraduationCap,
    ...feature,
  }));

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Trust Badges Section */}
        <TrustBadges />

        {/* Latest Fun Apps Section - Mobile-first, stacked vertically */}
        <section id="explore-apps" className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t("home.latestTitle")}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                {t("home.latestSubtitle")}
              </p>
            </div>

            {/* App Cards - Stacked vertically on mobile, full width with 16px padding */}
            <div className="flex flex-col gap-6 md:gap-8">
              {latestApps.map((app) => (
                <AppCard key={app.id} app={app} onLearnMore={() => handleLearnMore(app)} />
              ))}
            </div>

            {/* View All Apps Button */}
            <div className="text-center mt-8 md:mt-12">
              <Link
                to="/apps"
                className="inline-flex items-center justify-center w-full max-w-md min-h-[44px] bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base md:text-lg font-semibold px-8 py-6 rounded-full transition-all"
                aria-label={t("home.viewAll")}
              >
                {t("home.viewAll")}
              </Link>
            </div>
          </div>
        </section>

        {/* Why BiteBite Section */}
        <section className="py-12 md:py-20 bg-muted/30 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t("home.whyTitle")}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                {t("home.whySubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature) => (
                <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Parent Confidence Section */}
        <section id="parent-hub" className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {t("home.parentTrustTitle")}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
                {t("home.parentTrustBody")}
              </p>
            </div>
          </div>
        </section>

        {/* Legal Links Section */}
        <section className="py-8 md:py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/privacy"
                className="text-base text-primary hover:text-primary/80 font-semibold underline min-h-[44px] flex items-center"
              >
                {t("home.legal.privacy")}
              </Link>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <Link
                to="/safety"
                className="text-base text-primary hover:text-primary/80 font-semibold underline min-h-[44px] flex items-center"
              >
                {t("home.legal.safety")}
              </Link>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <Link
                to="/faq"
                className="text-base text-primary hover:text-primary/80 font-semibold underline min-h-[44px] flex items-center"
              >
                {t("home.legal.faq")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AppDetailDrawer app={selectedApp} open={drawerOpen} onOpenChange={setDrawerOpen} />
    </div>
  );
};

export default Home;
