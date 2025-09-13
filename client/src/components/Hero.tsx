import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@assets/generated_images/Professional_developer_headshot_portrait_5ecf1a0a.png';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="relative inline-block">
          <img
            src={heroImage}
            alt="Your Name - Professional Portrait"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-border"
            data-testid="img-hero-profile"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Hi, I'm{' '}
            <span className="text-primary" data-testid="text-hero-name">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-tagline">
            Full Stack Developer crafting beautiful digital experiences with modern technologies
          </p>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto" data-testid="text-hero-description">
            I specialize in React, Node.js, and cloud technologies. 
            Passionate about building scalable applications that make a difference.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="px-8"
            data-testid="button-view-work"
          >
            View My Work
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={scrollToContact}
            size="lg"
            className="px-8"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 pt-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => window.open('https://github.com', '_blank')}
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => window.open('https://linkedin.com', '_blank')}
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => window.open('mailto:your.email@example.com')}
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}