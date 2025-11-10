import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X } from "lucide-react";
import type { App } from "@/data/apps";

interface AppDetailDrawerProps {
  app: App | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppDetailDrawer = ({ app, open, onOpenChange }: AppDetailDrawerProps) => {
  if (!app) return null;

  // Use appUrl from app data if available, otherwise fall back to hardcoded URLs
  const appUrl = app.appUrl || (app.id === "xiangqi" ? "https://xianqi.bitebite.app" :
                                app.id === "chessking" ? "https://chessking.bitebite.app" :
                                app.id === "pingyi" ? "https://pingyiaf.bitebite.app" : null);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] rounded-t-3xl">
        <DrawerHeader className="text-left pb-4">
          <DrawerClose className="absolute right-4 top-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-muted transition-colors">
            <X className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Close</span>
          </DrawerClose>
          
          {/* App Screenshot/Icon */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <img 
              src={app.screenshot || app.icon} 
              alt={app.screenshot ? `${app.name} app screenshot` : `${app.name} app icon`}
              className={app.screenshot ? "w-full max-w-md h-auto rounded-2xl object-cover" : "w-32 h-32 rounded-2xl object-cover"}
              onError={(e) => {
                // Fallback to icon if screenshot fails to load
                const target = e.target as HTMLImageElement;
                if (target.src !== app.icon) {
                  target.src = app.icon;
                  target.className = "w-32 h-32 rounded-2xl object-cover";
                }
              }}
            />
            <DrawerTitle className="text-2xl md:text-3xl text-center font-bold">{app.name}</DrawerTitle>
          </div>
          
          {/* Badges */}
          <div className="flex gap-2 justify-center flex-wrap pt-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary text-sm min-h-[28px] px-3">
              {app.age}
            </Badge>
            <Badge variant="outline" className="text-sm min-h-[28px] px-3">{app.category}</Badge>
          </div>
        </DrawerHeader>

        {/* Scrollable Content */}
        <div className="px-4 md:px-6 pb-4 overflow-y-auto flex-1">
          <DrawerDescription className="text-base text-foreground mb-6">
            {app.fullDescription}
          </DrawerDescription>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">Key Features</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
                {app.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Learning Objectives</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
                {app.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg space-y-3">
              <p className="text-base"><strong>Age Appropriate:</strong> {app.ageAppropriate}</p>
              <p className="text-base"><strong>Content:</strong> {app.contentDescription}</p>
              <p className="text-base"><strong>Recommended Time:</strong> {app.timeRecommendation}</p>
            </div>
          </div>
        </div>

        {/* Footer with CTA Button */}
        <DrawerFooter className="px-4 md:px-6 pb-6 pt-4 border-t border-border">
          {appUrl ? (
            <Button 
              size="lg" 
              className="w-full min-h-[44px] text-base font-semibold rounded-full"
              onClick={() => window.open(appUrl, '_blank', 'noopener,noreferrer')}
              aria-label={`Go to ${app.name} app`}
            >
              <ExternalLink className="mr-2 h-5 w-5" aria-hidden="true" />
              Go to App
            </Button>
          ) : (
            <Button 
              size="lg" 
              className="w-full min-h-[44px] text-base font-semibold rounded-full"
              disabled
            >
              Coming Soon
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDetailDrawer;
