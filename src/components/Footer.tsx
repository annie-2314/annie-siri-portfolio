import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>

          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Annie Siri
            </h3>
            <p className="text-muted-foreground mt-2">
              AI & Data Science Enthusiast | Context Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-primary opacity-30" />

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Annie Siri. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>and lots of coffee</span>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-muted-foreground max-w-md">
            This portfolio showcases my journey in artificial intelligence and data science. 
            All projects and experiences are real and reflect my passion for creating intelligent systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;