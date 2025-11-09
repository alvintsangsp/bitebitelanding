import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About BiteBite
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Play for Good!
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our story and mission to make learning joyful for every child
            </p>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              Why I Created BiteBite
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">The Problem</h3>
                <p>
                  I noticed that many kids struggle to stay engaged with learning, and parents often 
                  feel overwhelmed choosing apps they can trust. Traditional educational methods can 
                  feel boring, and app stores are cluttered with low-quality content that prioritizes 
                  engagement over education. Parents deserve better, and children deserve learning 
                  experiences that inspire rather than distract.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">The Inspiration</h3>
                <p>
                  As an educator and developer, I believed there had to be a better way. I wanted to 
                  create apps that feel like play but deliver real learning—apps that parents can 
                  trust completely. I've seen firsthand how children light up when they're genuinely 
                  engaged, and I wanted to bottle that magic into every app we create.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">The Solution</h3>
                <p>
                  I started designing carefully crafted educational apps that combine engaging gameplay 
                  with rigorous learning outcomes. Every app is built with transparency—parents know 
                  exactly what their kids are learning, and there are no hidden agendas or data 
                  harvesting. Each app goes through extensive testing with real children and educators 
                  to ensure it's both effective and enjoyable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">The Vision</h3>
                <p>
                  My vision is to build a trusted hub where parents confidently send their kids to 
                  learn through play. A place where every app sparks curiosity, builds confidence, and 
                  makes learning joyful. I want BiteBite to be the gold standard for educational 
                  apps—where quality, safety, and fun come together seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-2xl font-bold text-primary">Play for Good!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
                <p className="text-muted-foreground">
                  Curriculum-aligned, expert-vetted apps that deliver real learning outcomes and 
                  measurable progress.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Safety & Trust</h3>
                <p className="text-muted-foreground">
                  100% COPPA compliant, transparent about data, and always putting child safety first.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Free or low-cost learning for every child, regardless of background or circumstance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            
            <div className="space-y-6">
              {[
                "Learning is a Journey, Not a Destination",
                "Kids Learn Best When They're Having Fun",
                "Parents Deserve Complete Transparency",
                "Education Should Be Accessible to Everyone",
                "Technology Should Enhance, Not Replace, Real Learning"
              ].map((value, index) => (
                <div 
                  key={index}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">The BiteBite Promise</h2>
            
            <div className="space-y-4 text-lg">
              {[
                "Every app is designed and tested with real kids and educators",
                "Your child's privacy is sacred—we never sell data or track for profit",
                "All apps are COPPA compliant and safe for children",
                "We're constantly learning and improving based on user feedback"
              ].map((promise, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border"
                >
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Explore?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of families discovering the joy of learning through play
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Our Apps
                </Button>
              </Link>
              <a href="mailto:hello@bitebite.app">
                <Button size="lg" variant="outline">
                  Contact Us
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