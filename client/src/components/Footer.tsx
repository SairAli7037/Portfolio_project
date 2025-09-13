import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/SairAli7037/'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sair-ali-9a7552243'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:sairali7037@gmail.com'
    }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground" data-testid="text-footer-brand">
              Sair Ali
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-description">
              Full Stack Developer passionate about creating impactful 
              web applications using Django, React, and modern technologies.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(social.url, '_blank')}
                  data-testid={`button-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" data-testid="text-footer-quick-links-title">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid={`button-footer-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground" data-testid="text-footer-contact-title">
              Let's Connect
            </h4>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-contact-desc">
              Open to new opportunities and interesting projects.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm"
              data-testid="button-footer-contact"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © {currentYear} Sair Ali. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}