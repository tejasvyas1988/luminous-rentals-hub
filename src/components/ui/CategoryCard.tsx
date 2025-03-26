
import { useState } from 'react';

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
  items: number;
}

const CategoryCard = ({ title, image, description, items }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-2xl group hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="aspect-[5/6] w-full h-full relative">
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image})`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="transform transition-transform duration-500 ease-out" style={{
          transform: isHovered ? 'translateY(-1rem)' : 'translateY(0)'
        }}>
          <h3 className="font-display text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-white/70 mb-4 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/60">{items} items</span>
            <button className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Browse →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
