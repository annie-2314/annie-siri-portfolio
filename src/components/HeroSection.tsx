import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Annie Siri
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                AI & Data Science Enthusiast | Context Engineer
              </p>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                2nd-year M.Tech student passionate about artificial intelligence, 
                currently engineering AI contexts at Appex Neural to build smarter, 
                more adaptive systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300 text-base font-semibold px-8"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-base font-semibold px-8"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">AI Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">M.Tech</div>
                <div className="text-sm text-muted-foreground">AI & Data Science</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-full" />
                
                {/* Placeholder for professional photo */}
                <div className="w-full h-full bg-gradient-secondary flex items-center justify-center rounded-full border-4 border-primary/20">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Professional Photo
                      <br />
                      Will be uploaded
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shadow-soft animate-pulse">
                <span className="text-2xl">🤖</span>
              </div>
              
              <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shadow-soft animate-pulse" style={{ animationDelay: '1.5s' }}>
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-200 flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium">Scroll down</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;