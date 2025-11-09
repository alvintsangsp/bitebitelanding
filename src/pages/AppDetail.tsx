import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apps } from "@/data/apps";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

const AppDetail = () => {
  const { id } = useParams();
  const app = apps.find(a => a.id === id);

  if (!app) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">App Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Apps
            </Button>
          </Link>

          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <img 
              src={app.icon} 
              alt={`${app.name} icon`}
              className="w-32 h-32 rounded-3xl shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{app.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{app.fullDescription}</p>
              <div className="flex gap-2 flex-wrap">
                <Badge className="bg-primary/10 text-primary text-base px-4 py-1">
                  {app.age}
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-1">
                  {app.category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="about" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="about">About This App</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="parents">For Parents</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-4">What will kids learn?</h2>
                <ul className="space-y-3">
                  {app.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-4">How does it work?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {app.fullDescription}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {app.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/30"
                    >
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
                  <h3 className="text-xl font-bold mb-3">Age Appropriateness</h3>
                  <p className="text-muted-foreground">{app.ageAppropriate}</p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">Content Description</h3>
                  <p className="text-muted-foreground">{app.contentDescription}</p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">Time Recommendation</h3>
                  <p className="text-muted-foreground">{app.timeRecommendation}</p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">Learning Standards</h3>
                  <p className="text-muted-foreground">
                    Aligned with national curriculum standards for optimal learning outcomes.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="mt-12 text-center space-y-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Go to App
            </Button>
            <p className="text-sm text-muted-foreground">
              Opens in a new window - Safe and secure
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppDetail;