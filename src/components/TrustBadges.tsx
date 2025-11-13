import { Shield, CheckCircle2, Lock, Heart } from "lucide-react";
import { useTranslation } from "@/i18n/TranslationProvider";

const badgeIcons = [Shield, CheckCircle2, Lock, Heart];

const TrustBadges = () => {
  const { t } = useTranslation();
  const badges = t<Array<{ title: string; description: string }>>("trustBadges.badges");

  return (
    <section className="py-8 md:py-12 bg-muted/30 px-4" aria-label="Trust badges">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const Icon = badgeIcons[index] ?? Shield;
            return (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center space-y-2 p-4"
              >
                <div
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
        <p className="text-center text-muted-foreground mt-6 md:mt-8 text-base">
          {t("trustBadges.caption")}
        </p>
      </div>
    </section>
  );
};

export default TrustBadges;
