import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AppCardProps {
  id: string;
  name: string;
  description: string;
  age: string;
  category: string;
  icon: string;
  screenshot?: string;
  color: string;
  onLearnMore: () => void;
}

const AppCard = ({ name, description, age, category, icon, screenshot, color, onLearnMore }: AppCardProps) => {
  // State to handle image load errors
  const [imageError, setImageError] = useState(false);
  
  // Use screenshot if available and no error, otherwise fall back to icon
  const imageSrc = (screenshot && !imageError) ? screenshot : icon;
  const isScreenshot = !!screenshot && !imageError;

  // Handle image load error - fall back to icon
  const handleImageError = () => {
    if (screenshot && !imageError) {
      setImageError(true);
    }
  };

  return (
    <article 
      className="w-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 active:scale-[0.98]"
      role="article"
      aria-label={`${name} app card`}
    >
      {/* Screenshot/Image - Full width on mobile */}
      <div className="relative w-full aspect-video bg-muted/30 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={isScreenshot ? `${name} app screenshot` : `${name} app icon`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={handleImageError}
        />
        {/* Subtle color overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ background: color }}
          aria-hidden="true"
        />
      </div>
      
      {/* Content - Full width with 16px padding on mobile */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold leading-tight">{name}</h3>

        {/* Badges - Age and Category */}
        <div className="flex gap-2 flex-wrap">
          <Badge 
            variant="secondary" 
            className="bg-primary/10 text-primary hover:bg-primary/20 text-sm min-h-[28px] px-3"
          >
            {age}
          </Badge>
          <Badge 
            variant="outline" 
            className="text-sm min-h-[28px] px-3"
          >
            {category}
          </Badge>
        </div>

        {/* Description - 1-2 lines */}
        <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Learn More Button - Full width, rounded, minimum 44px height */}
        <Button 
          onClick={onLearnMore}
          className="w-full min-h-[44px] bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold rounded-full transition-all"
          aria-label={`Learn more about ${name}`}
        >
          Learn More
        </Button>
      </div>
    </article>
  );
};

export default AppCard;