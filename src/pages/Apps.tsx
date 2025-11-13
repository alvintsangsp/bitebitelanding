import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import AppCard from "@/components/AppCard";
import AppDetailDrawer from "@/components/AppDetailDrawer";
import Footer from "@/components/Footer";
import { apps, getAppCopy, isAppAvailable } from "@/data/apps";
import type { App } from "@/data/apps";
import { useTranslation } from "@/i18n/TranslationProvider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Apps = () => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const { t, language } = useTranslation();

  const localizedApps = useMemo(
    () =>
      apps.map((app) => ({
        app,
        copy: getAppCopy(app, language),
      })),
    [language],
  );

  const sortedApps = useMemo(
    () =>
      [...localizedApps].sort(
        (a, b) => Number(isAppAvailable(b.app)) - Number(isAppAvailable(a.app)),
      ),
    [localizedApps],
  );

  const categories = useMemo(() => {
    const set = new Set<string>();
    localizedApps.forEach(({ copy }) => set.add(copy.category));
    return ["ALL", ...Array.from(set)];
  }, [localizedApps]);

  const filteredApps = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return sortedApps.filter(({ copy }) => {
      const matchesCategory = categoryFilter === "ALL" || copy.category === categoryFilter;
      const matchesSearch =
        term.length === 0 ||
        [copy.name, copy.description, copy.fullDescription].some((field) =>
          field.toLowerCase().includes(term),
        );

      return matchesCategory && matchesSearch;
    });
  }, [sortedApps, searchTerm, categoryFilter]);

  const handleLearnMore = (app: App) => {
    setSelectedApp(app);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Apps Collection Header */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t("appsPage.title")}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                {t("appsPage.subtitle")}
              </p>
            </div>

            {/* App Cards Grid - Full width on mobile, stacked vertically */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <Input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={t("appsPage.filters.searchPlaceholder")}
                className="h-12"
              />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder={t("appsPage.filters.typeLabel")} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "ALL" ? t("appsPage.filters.allTypes") : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              {filteredApps.map(({ app }) => (
                <AppCard key={app.id} app={app} onLearnMore={() => handleLearnMore(app)} />
              ))}
              {filteredApps.length === 0 && (
                <div className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                  {t("appsPage.filters.noResults")}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AppDetailDrawer app={selectedApp} open={drawerOpen} onOpenChange={setDrawerOpen} />
    </div>
  );
};

export default Apps;
