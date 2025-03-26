import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-echo-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <img 
                src="/lovable-uploads/41ef94e7-9277-4221-831f-6c434d02c5ea.png" 
                alt="Echo Nordic Hub Logo" 
                className="h-12 mr-4"
              />
              <span className="font-display text-2xl font-semibold tracking-tight">
                Echo<span className="text-echo-accent">Nordic Hub</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/80 max-w-md">
              Innovative technology solutions with a Nordic touch. 
              Connecting businesses through cutting-edge equipment and services.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Equipment</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">Sound Systems</FooterLink>
              <FooterLink href="#">Lighting</FooterLink>
              <FooterLink href="#">DJ Equipment</FooterLink>
              <FooterLink href="#">Stage Effects</FooterLink>
              <FooterLink href="#">Microphones</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Services</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} LuminousRentals. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a 
    href={href} 
    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
    {...props}
  >
    {children}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
