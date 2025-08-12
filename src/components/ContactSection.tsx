import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };
  const socialLinks = [{
    name: 'GitHub',
    icon: Github,
    href: '#',
    color: 'hover:text-primary'
  }, {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#',
    color: 'hover:text-primary'
  }, {
    name: 'Email',
    icon: Mail,
    href: 'mailto:annie.siri@example.com',
    color: 'hover:text-accent'
  }];
  return <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-500">
            Let's <span className="bg-gradient-primary bg-clip-text text-slate-500">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss AI projects, collaboration opportunities, or just chat about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-2xl p-8 shadow-strong border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="w-full" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="w-full" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange} className="w-full" placeholder="What's this about?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} className="w-full min-h-[120px]" placeholder="Tell me about your project, collaboration idea, or just say hello!" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300">
                  {isSubmitting ? <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending...
                    </> : <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:annie.siri@example.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      annie.siri@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Available for remote work</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect with me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map(social => {
                const IconComponent = social.icon;
                return <a key={social.name} href={social.href} className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-medium`} aria-label={social.name}>
                      <IconComponent className="w-5 h-5" />
                    </a>;
              })}
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Follow my journey in AI and data science, or connect for professional opportunities.
              </p>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong">
              <h3 className="text-xl font-bold text-primary-foreground mb-4">
                Download my resume
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Get a detailed overview of my experience, skills, and projects.
              </p>
              <Button variant="secondary" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;