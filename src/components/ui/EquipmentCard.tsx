
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface EquipmentCardProps {
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

const EquipmentCard = ({ name, image, price, category, description }: EquipmentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group rounded-2xl overflow-hidden bg-white border border-border/40 hover:border-border/80 transition-all duration-300 hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">{category}</span>
          </div>
          <div className="font-medium text-lg">${price}/day</div>
        </div>
        
        <h3 className="font-display text-xl font-medium mt-2 mb-3">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        
        <div className="pt-3 border-t border-border/30">
          <Button 
            variant="outline" 
            className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-colors"
          >
            Add to Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
