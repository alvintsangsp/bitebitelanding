import { Link } from "react-router-dom";
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
}

const AppCard = ({ id, name, description, age, category, icon, color }: AppCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-border"
      style={{
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div 
        className="absolute top-0 left-0 right-0 h-32 opacity-10"
        style={{ background: color }}
      />
      
      <div className="relative p-6 space-y-4">
        <div className="flex justify-center">
          <img 
            src={icon} 
            alt={`${name} app icon`}
            className="w-24 h-24 rounded-2xl shadow-lg"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-center">{name}</h3>
          <p className="text-sm text-muted-foreground text-center min-h-[3rem]">
            {description}
          </p>
        </div>

        <div className="flex gap-2 justify-center flex-wrap">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {age}
          </Badge>
          <Badge variant="outline">{category}</Badge>
        </div>

        <Link to={`/app/${id}`}>
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppCard;