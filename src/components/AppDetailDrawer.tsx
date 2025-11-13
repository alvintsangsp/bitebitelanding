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
import { getAppCopy, resolveAppUrl } from "@/data/apps";
import { useTranslation } from "@/i18n/TranslationProvider";

interface AppDetailDrawerProps {
  app: App | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppDetailDrawer = ({ app, open, onOpenChange }: AppDetailDrawerProps) => {
  const { t, language, dictionary } = useTranslation();

  if (!app) return null;

  const content = getAppCopy(app, language);
  const appUrl = resolveAppUrl(app);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] rounded-t-3xl">
        <DrawerHeader className="text-left pb-4">
          <DrawerClose className="absolute right-4 top-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-muted transition-colors">
            <X className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">{dictionary.common.close ?? "Close"}</span>
          </DrawerClose>

          {/* App Screenshot/Icon */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <img
              src={app.screenshot || app.icon}
              alt={
                app.screenshot ? `${content.name} screenshot` : `${content.name} icon`
              }
              className={
                app.screenshot
                  ? "w-full max-w-md h-auto rounded-2xl object-cover"
                  : "w-32 h-32 rounded-2xl object-cover"
              }
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== app.icon) {
                  target.src = app.icon;
                  target.className = "w-32 h-32 rounded-2xl object-cover";
                }
              }}
            />
            <DrawerTitle className="text-2xl md:text-3xl text-center font-bold">{content.name}</DrawerTitle>
          </div>

          {/* Badges */}
          <div className="flex gap-2 justify-center flex-wrap pt-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary text-sm min-h-[28px] px-3">
              {content.age}
            </Badge>
            <Badge variant="outline" className="text-sm min-h-[28px] px-3">
              {content.category}
            </Badge>
          </div>
        </DrawerHeader>

        {/* Scrollable Content */}
        <div className="px-4 md:px-6 pb-4 overflow-y-auto flex-1">
          <DrawerDescription className="text-base text-foreground mb-6">{content.fullDescription}</DrawerDescription>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">{t("appDetailDrawer.keyFeatures")}</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
                {content.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">{t("appDetailDrawer.learningObjectives")}</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground">
                {content.learningObjectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg space-y-3">
              <p className="text-base">
                <strong>{t("appDetailDrawer.ageAppropriate")}:</strong> {content.ageAppropriate}
              </p>
              <p className="text-base">
                <strong>{t("appDetailDrawer.content")}:</strong> {content.contentDescription}
              </p>
              <p className="text-base">
                <strong>{t("appDetailDrawer.timeRecommendation")}:</strong> {content.timeRecommendation}
              </p>
            </div>
          </div>
        </div>

        {/* Footer with CTA Button */}
        <DrawerFooter className="px-4 md:px-6 pb-6 pt-4 border-t border-border">
          {appUrl ? (
            <Button
              size="lg"
              className="w-full min-h-[44px] text-base font-semibold rounded-full"
              onClick={() => window.open(appUrl, "_blank", "noopener,noreferrer")}
              aria-label={`${dictionary.common.goToApp} - ${content.name}`}
            >
              <ExternalLink className="mr-2 h-5 w-5" aria-hidden="true" />
              {dictionary.common.goToApp}
            </Button>
          ) : (
            <Button size="lg" className="w-full min-h-[44px] text-base font-semibold rounded-full" disabled>
              {dictionary.common.comingSoon}
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDetailDrawer;
