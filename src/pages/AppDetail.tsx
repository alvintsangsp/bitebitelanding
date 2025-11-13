import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apps, getAppCopy, resolveAppUrl } from "@/data/apps";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

const AppDetail = () => {
  const { id } = useParams();
  const { t, language, dictionary } = useTranslation();
  const app = apps.find((a) => a.id === id);

  if (!app) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("appDetailPage.notFoundTitle")}</h1>
          <Link to="/">
            <Button>{t("appDetailPage.backHome")}</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const content = getAppCopy(app, language);
  const appUrl = resolveAppUrl(app);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <Link to="/apps">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("appDetailPage.backToApps")}
            </Button>
          </Link>

          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <img src={app.icon} alt={`${content.name} icon`} className="w-32 h-32 rounded-3xl shadow-lg" />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{content.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{content.fullDescription}</p>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-primary/10 text-primary text-base px-4 py-1">{content.age}</Badge>
                <Badge variant="outline" className="text-base px-4 py-1">
                  {content.category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="about" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="about">{t("appDetailPage.tabs.about")}</TabsTrigger>
              <TabsTrigger value="features">{t("appDetailPage.tabs.features")}</TabsTrigger>
              <TabsTrigger value="parents">{t("appDetailPage.tabs.parents")}</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-4">{t("appDetailPage.aboutHeading")}</h2>
                <ul className="space-y-3">
                  {content.learningObjectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-4">{t("appDetailPage.howItWorks")}</h2>
                <p className="text-muted-foreground leading-relaxed">{content.fullDescription}</p>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">{t("appDetailDrawer.keyFeatures")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="parents" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">{t("appDetailDrawer.ageAppropriate")}</h3>
                  <p className="text-muted-foreground">{content.ageAppropriate}</p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">{t("appDetailDrawer.content")}</h3>
                  <p className="text-muted-foreground">{content.contentDescription}</p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">{t("appDetailDrawer.timeRecommendation")}</h3>
                  <p className="text-muted-foreground">{content.timeRecommendation}</p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">{t("appDetailPage.learningStandards")}</h3>
                  <p className="text-muted-foreground">{t("appDetailPage.standardsDescription")}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="mt-12 text-center space-y-4">
            {appUrl ? (
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                onClick={() => window.open(appUrl, "_blank", "noopener,noreferrer")}
                aria-label={`${dictionary.common.goToApp} - ${content.name}`}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {dictionary.common.goToApp}
              </Button>
            ) : (
              <Button size="lg" className="bg-primary/70 text-lg px-8 py-6" disabled>
                {dictionary.common.comingSoon}
              </Button>
            )}
            <p className="text-sm text-muted-foreground">{t("appDetailPage.ctaNote")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppDetail;
