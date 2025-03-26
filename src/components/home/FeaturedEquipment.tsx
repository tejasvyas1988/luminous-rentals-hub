
import { useState, useEffect } from 'react';
import EquipmentCard from '../ui/EquipmentCard';
import { Button } from '@/components/ui/button';

// Sample data
const featuredEquipment = [
  {
    id: 1,
    name: 'JBL Professional Speaker',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800',
    price: 120,
    category: 'Sound',
    description: 'Professional-grade speaker system with crystal clear audio and powerful bass performance.'
  },
  {
    id: 2,
    name: 'RGB Stage Lights',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800',
    price: 85,
    category: 'Lighting',
    description: 'Programmable RGB stage lights with various effects for dynamic event lighting.'
  },
  {
    id: 3,
    name: 'Pioneer DJ Controller',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800',
    price: 150,
    category: 'DJ Equipment',
    description: 'Professional DJ controller with intuitive interface and premium sound quality.'
  },
  {
    id: 4,
    name: 'Wireless Microphone Set',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800',
    price: 65,
    category: 'Audio',
    description: 'High-fidelity wireless microphone set with extended range and battery life.'
  }
];

const FeaturedEquipment = () => {
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

    const element = document.getElementById('featured-equipment');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          id="featured-equipment"
          className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="max-w-2xl mb-8 md:mb-0">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/5 rounded-full mb-6">
              Featured Equipment
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our Most Popular <br /> Rental Items
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Discover our most in-demand equipment, trusted by industry professionals 
              and event organizers for delivering exceptional experiences.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8">
            View All Equipment
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredEquipment.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}
            >
              <EquipmentCard
                name={item.name}
                image={item.image}
                price={item.price}
                category={item.category}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEquipment;
