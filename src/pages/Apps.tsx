import { useState } from "react";
import Navigation from "@/components/Navigation";
import AppCard from "@/components/AppCard";
import AppDetailDrawer from "@/components/AppDetailDrawer";
import Footer from "@/components/Footer";
import { apps } from "@/data/apps";
import type { App } from "@/data/apps";

const Apps = () => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
                All Our Apps
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Browse our complete collection of educational apps designed to make learning fun
              </p>
            </div>

            {/* App Cards Grid - Full width on mobile, stacked vertically */}
            <div className="flex flex-col gap-6 md:gap-8">
              {apps.map((app) => (
                <AppCard 
                  key={app.id} 
                  {...app} 
                  onLearnMore={() => handleLearnMore(app)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AppDetailDrawer 
        app={selectedApp}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </div>
  );
};

export default Apps;
