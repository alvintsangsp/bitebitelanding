import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 min-h-[44px]">
          {/* Logo - Left side */}
          <Link 
            to="/" 
            className="flex items-center gap-2 min-h-[44px] min-w-[44px]"
            aria-label="BiteBite Home"
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BiteBite
            </span>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground hidden sm:inline">
              Play for Good!
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link 
              to="/" 
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              About
            </Link>
            <Link 
              to="/apps" 
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Apps
            </Link>
            <a 
              href="#parent-hub" 
              className="text-base text-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Parent Hub
            </a>
            <Link to="/apps">
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90 min-h-[44px]"
              >
                Explore Apps
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Top right, hamburger icon */}
          <button
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full width dropdown */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 space-y-2 border-t border-border"
          >
            <Link
              to="/"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/apps"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Apps
            </Link>
            <a
              href="#parent-hub"
              className="block py-3 px-4 text-base text-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-lg min-h-[44px] flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Parent Hub
            </a>
            <div className="pt-2 px-4">
              <Link to="/apps" className="block">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 min-h-[44px] text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Explore Apps
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;