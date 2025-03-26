
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  // For parallax effect
  const [offset, setOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        setOffset(scrollPosition * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const equipmentSection = document.getElementById('equipment');
    if (equipmentSection) {
      equipmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488751045188-3c07cfbdcedf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset}px)`,
          filter: "brightness(0.7)",
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-echo-primary/80 to-echo-primary/60 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-echo-accent/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in animate-delay-100">
            Premium Technology Equipment Rentals
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in animate-delay-200">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-echo-accent to-white/90">
              Nordic Tech Experience
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-300">
            Cutting-edge equipment solutions for businesses and events, 
            designed with Nordic innovation and precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in animate-delay-400">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base bg-echo-accent hover:bg-echo-accent/90"
            >
              Browse Equipment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 py-6 text-base bg-transparent border-echo-accent/60 text-white hover:bg-echo-accent/20"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-echo-accent/30 backdrop-blur-sm hover:bg-echo-accent/40 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

