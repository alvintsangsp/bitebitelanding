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

  const appUrls: Record<string, string> = {
    "xiangqi": "https://xianqi.bitebite.app",
    "chessking": "https://chessking.bitebite.app",
    "pingyi": "https://pingyiaf.bitebite.app"
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="text-left">
          <DrawerClose className="absolute right-4 top-4">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DrawerClose>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <img 
              src={app.icon} 
              alt={`${app.name} app`}
              className="w-32 h-32 rounded-2xl object-cover"
            />
            <DrawerTitle className="text-2xl text-center">{app.name}</DrawerTitle>
          </div>
          
          <div className="flex gap-2 justify-center flex-wrap pt-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {app.age}
            </Badge>
            <Badge variant="outline">{app.category}</Badge>
          </div>
        </DrawerHeader>

        <div className="px-6 pb-6 overflow-y-auto">
          <DrawerDescription className="text-base text-foreground mb-4">
            {app.fullDescription}
          </DrawerDescription>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">Key Features</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {app.features.map((feature, index) => (
                  <li key={index} className="text-base">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">Learning Objectives</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {app.learningObjectives.map((objective, index) => (
                  <li key={index} className="text-base">{objective}</li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg space-y-2">
              <p className="text-sm"><strong>Age Appropriate:</strong> {app.ageAppropriate}</p>
              <p className="text-sm"><strong>Content:</strong> {app.contentDescription}</p>
              <p className="text-sm"><strong>Recommended Time:</strong> {app.timeRecommendation}</p>
            </div>
          </div>
        </div>

        <DrawerFooter>
          {appUrls[app.id] ? (
            <Button 
              size="lg" 
              className="w-full h-12 text-base"
              onClick={() => window.open(appUrls[app.id], '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Go to App
            </Button>
          ) : (
            <Button 
              size="lg" 
              className="w-full h-12 text-base"
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
