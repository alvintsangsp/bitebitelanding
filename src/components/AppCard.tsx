import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AppCardProps {
  id: string;
  name: string;
  description: string;
  age: string;
  category: string;
  icon: string;
  color: string;
  onLearnMore: () => void;
}

const AppCard = ({ name, description, age, category, icon, color, onLearnMore }: AppCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] border border-border"
    >
      <div 
        className="absolute top-0 left-0 right-0 h-24 opacity-10"
        style={{ background: color }}
      />
      
      <div className="relative p-4 sm:p-6 space-y-4">
        <div className="flex justify-center">
          <img 
            src={icon} 
            alt={`${name} app`}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-center leading-tight">{name}</h3>
          <p className="text-base sm:text-sm text-muted-foreground text-center min-h-[3rem]">
            {description}
          </p>
        </div>

        <div className="flex gap-2 justify-center flex-wrap">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-sm">
            {age}
          </Badge>
          <Badge variant="outline" className="text-sm">{category}</Badge>
        </div>

        <Button 
          onClick={onLearnMore}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AppCard;