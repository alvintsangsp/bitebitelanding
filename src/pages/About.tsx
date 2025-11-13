import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Shield, Users } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

const About = () => {
  const { t } = useTranslation();

  const storySections = t<{
    problemTitle: string;
    problemBody: string;
    inspirationTitle: string;
    inspirationBody: string;
    solutionTitle: string;
    solutionBody: string;
    visionTitle: string;
    visionBody: string;
  }>("aboutPage.sections");

  const missionCards = t<Array<{ title: string; description: string }>>("aboutPage.missionCards");
  const missionIcons = [Target, Shield, Users];

  const values = t<string[]>("aboutPage.valuesList");
  const promises = t<string[]>("aboutPage.promiseList");

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t("aboutPage.heroTitle")}
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t("aboutPage.heroTagline")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("aboutPage.heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              {t("aboutPage.storyHeading")}
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{storySections.problemTitle}</h3>
                <p>{storySections.problemBody}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{storySections.inspirationTitle}</h3>
                <p>{storySections.inspirationBody}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{storySections.solutionTitle}</h3>
                <p>{storySections.solutionBody}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{storySections.visionTitle}</h3>
                <p>{storySections.visionBody}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("aboutPage.missionTitle")}</h2>
              <p className="text-2xl font-bold text-primary">{t("aboutPage.missionTagline")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionCards.map((card, index) => {
                const Icon = missionIcons[index] ?? Target;
                return (
                  <div key={card.title} className="bg-card p-6 rounded-2xl border border-border">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">{t("aboutPage.valuesTitle")}</h2>

            <div className="space-y-6">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{t("aboutPage.promiseTitle")}</h2>

            <div className="space-y-4 text-lg">
              {promises.map((promise) => (
                <div key={promise} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p>{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("aboutPage.ctaTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t("aboutPage.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apps">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {t("aboutPage.ctaPrimary")}
                </Button>
              </Link>
              <a href="mailto:hello@bitebite.app">
                <Button size="lg" variant="outline">
                  {t("aboutPage.ctaSecondary")}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
