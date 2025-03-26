
import { useState, useEffect } from 'react';
import CategoryCard from '../ui/CategoryCard';

// Sample data
const categories = [
  {
    id: 1,
    title: 'Sound Systems',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800',
    description: 'High-quality speakers, mixers, and amplifiers for crystal clear sound.',
    items: 24
  },
  {
    id: 2,
    title: 'Stage Lighting',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800',
    description: 'Professional lighting solutions to create the perfect atmosphere.',
    items: 32
  },
  {
    id: 3,
    title: 'DJ Equipment',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800',
    description: 'Everything a DJ needs from controllers to headphones.',
    items: 18
  },
  {
    id: 4,
    title: 'Stage Effects',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800',
    description: 'Fog machines, lasers, and special effects for dramatic impact.',
    items: 15
  }
];

const EquipmentCategories = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('equipment-categories');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="equipment" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          id="equipment-categories"
          className={`max-w-3xl mx-auto text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/5 rounded-full mb-6">
            Equipment Categories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Premium Equipment <br /> for Every Occasion
          </h2>
          <p className="text-muted-foreground">
            Browse our extensive collection of high-quality audio and lighting equipment,
            carefully curated to meet the needs of any event.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
            >
              <CategoryCard
                title={category.title}
                image={category.image}
                description={category.description}
                items={category.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentCategories;
