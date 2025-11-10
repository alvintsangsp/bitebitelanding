import { useState } from "react";
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

const Home = () => {
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLearnMore = (app: App) => {
    setSelectedApp(app);
    setDrawerOpen(true);
  };

  // Featured apps: Xiangqi, Chessking, PingYi
  const featuredAppIds = ["xiangqi", "chessking", "pingyi"];
  const featuredApps = apps.filter(app => featuredAppIds.includes(app.id));

  const features = [
    {
      icon: GraduationCap,
      title: "Designed by Educators",
      description: "Every app is expertly crafted with curriculum-aligned content and vetted by professional educators to ensure quality learning outcomes."
    },
    {
      icon: Shield,
      title: "Safe for Kids",
      description: "100% COPPA compliant with strict privacy protections. No data collection without consent, no inappropriate content, always child-safe."
    },
    {
      icon: Users,
      title: "Parent Transparency",
      description: "Know exactly what your child is learning with detailed progress reports, clear learning objectives, and full parental control options."
    },
    {
      icon: Gift,
      title: "Free & Fun",
      description: "Quality education should be accessible to everyone. Our apps are free to use because learning should never be limited by cost."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Trust Badges Section */}
        <TrustBadges />

        {/* Explore Our Apps Section - Mobile-first, stacked vertically */}
        <section id="explore-apps" className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Explore Our Apps
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Discover engaging, curriculum-aligned apps that make learning fun
              </p>
            </div>

            {/* App Cards - Stacked vertically on mobile, full width with 16px padding */}
            <div className="flex flex-col gap-6 md:gap-8">
              {featuredApps.map((app) => (
                <AppCard 
                  key={app.id} 
                  {...app} 
                  onLearnMore={() => handleLearnMore(app)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why BiteBite Section */}
        <section className="py-12 md:py-20 bg-muted/30 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose BiteBite?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Trusted by parents, loved by kids, designed for learning
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Parent Confidence Section */}
        <section id="parent-hub" className="py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Parents Trust BiteBite
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
                We're committed to your child's safety, privacy, and educational success. 
                Every app is carefully designed with both learning outcomes and child protection 
                in mind. We believe in complete transparency—you always know what your child is 
                learning and how their data is protected.
              </p>
            </div>
          </div>
        </section>
        
        {/* Legal Links Section */}
        <section className="py-8 md:py-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/privacy" 
                className="text-base text-primary hover:text-primary/80 font-semibold underline min-h-[44px] flex items-center"
              >
                Privacy Policy
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="/safety" 
                className="text-base text-primary hover:text-primary/80 font-semibold underline min-h-[44px] flex items-center"
              >
                Safety & Compliance
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="/faq" 
                className="text-base text-primary hover:text-primary/80 font-semibold underline min-h-[44px] flex items-center"
              >
                Parent FAQ
              </a>
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

export default Home;