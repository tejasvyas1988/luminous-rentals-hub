
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Content */}
          <div 
            id="contact-section"
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-8'
            }`}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/5 rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to Make Your <br /> Event Shine?
            </h2>
            <p className="text-muted-foreground max-w-xl mb-10">
              Contact us today to discuss your event needs and get a personalized 
              quote for your audio and lighting equipment rental.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                details="+1 (555) 123-4567"
              />
              <ContactItem 
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                details="info@luminousrentals.com"
              />
              <ContactItem 
                icon={<MapPin className="h-5 w-5" />}
                title="Address"
                details="123 Event Street, Suite 100, San Francisco, CA 94103"
              />
              <ContactItem 
                icon={<Calendar className="h-5 w-5" />}
                title="Business Hours"
                details="Monday-Friday: 9am-6pm, Saturday: 10am-4pm"
              />
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
              <h3 className="font-display text-xl font-medium mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField 
                    id="name"
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                  />
                  <FormField 
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <FormField 
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your event and equipment needs..."
                    className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                  />
                </div>
                <Button className="w-full rounded-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  details 
}: { 
  icon: React.ReactNode; 
  title: string; 
  details: string 
}) => (
  <div className="flex items-start gap-4">
    <div className="rounded-full bg-primary/5 p-3">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">{details}</p>
    </div>
  </div>
);

const FormField = ({
  id,
  label,
  type,
  placeholder
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
    />
  </div>
);

export default Contact;
