
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Premium quality equipment from top brands",
    "Expert technical support and setup assistance",
    "Flexible rental periods from hourly to monthly",
    "24/7 emergency support during your event",
    "Free delivery and pickup for local events",
    "Regular maintenance and testing of all equipment"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div 
            id="about-section"
            className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="aspect-[4/3] w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-6 backdrop-blur">
              <div className="grid grid-cols-3 gap-4">
                <Stat value="10+" label="Years Experience" />
                <Stat value="500+" label="Successful Events" />
                <Stat value="98%" label="Client Satisfaction" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-x-8'
          }`}>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/5 rounded-full mb-6">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Elevating Events With Premium Equipment
            </h2>
            <p className="text-muted-foreground mb-8">
              LuminousRentals has been providing high-quality audio and lighting equipment for events 
              of all sizes for over a decade. Our mission is to make professional-grade equipment 
              accessible to everyone, from small gatherings to large-scale productions.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="rounded-full px-8" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="font-display font-bold text-2xl">{value}</div>
    <div className="text-xs text-muted-foreground mt-1">{label}</div>
  </div>
);

export default About;
