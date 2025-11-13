import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { App } from "@/data/apps";
import { getAppCopy } from "@/data/apps";
import { useTranslation } from "@/i18n/TranslationProvider";

interface AppCardProps {
  app: App;
  onLearnMore: () => void;
}

const AppCard = ({ app, onLearnMore }: AppCardProps) => {
  const [imageError, setImageError] = useState(false);
  const { t, language } = useTranslation();

  const content = getAppCopy(app, language);

  const imageSrc = app.screenshot && !imageError ? app.screenshot : app.icon;
  const isScreenshot = Boolean(app.screenshot && !imageError);

  const handleImageError = () => {
    if (app.screenshot && !imageError) {
      setImageError(true);
    }
  };

  return (
    <article
      className="w-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 active:scale-[0.98]"
      role="article"
      aria-label={`${content.name} ${t("appCard.learnMore")}`}
    >
      {/* Screenshot/Image - Full width on mobile */}
      <div className="relative w-[85%] aspect-video bg-muted/30 overflow-hidden mx-auto md:w-[85%]">
        <img
          src={imageSrc}
          alt={
            isScreenshot
              ? `${content.name} screenshot`
              : `${content.name} icon`
          }
          className="w-full h-full object-cover"
          loading="lazy"
          onError={handleImageError}
        />
        {/* Subtle color overlay */}
        <div className="absolute inset-0 opacity-5" style={{ background: app.color }} aria-hidden="true" />
      </div>

      {/* Content - Full width with 16px padding on mobile */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold leading-tight">{content.name}</h3>

        {/* Badges - Age and Category */}
        <div className="flex gap-2 flex-wrap">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary hover:bg-primary/20 text-sm min-h-[28px] px-3"
          >
            {content.age}
          </Badge>
          <Badge variant="outline" className="text-sm min-h-[28px] px-3">
            {content.category}
          </Badge>
        </div>

        {/* Description - 1-2 lines */}
        <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">{content.description}</p>

        {/* Learn More Button - Full width, rounded, minimum 44px height */}
        <Button
          onClick={onLearnMore}
          className="w-full min-h-[44px] bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold rounded-full transition-all"
          aria-label={`${t("appCard.learnMore")} - ${content.name}`}
        >
          {t("appCard.learnMore")}
        </Button>
      </div>
    </article>
  );
};

export default AppCard;
