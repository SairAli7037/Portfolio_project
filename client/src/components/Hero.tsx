import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin, Mail, Code, Github } from 'lucide-react';
import profilePhoto from '@assets/photo1_1757797521515.png';

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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Profile Photo */}
        <div className="relative inline-block">
          <div className="w-48 h-48 rounded-full mx-auto border-4 border-border overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
            <img 
              src={profilePhoto}
              alt="Sair Ali - Full Stack Developer"
              className="w-full h-full object-cover object-top"
              data-testid="img-profile-photo"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Hi, I'm{' '}
            <span className="text-primary" data-testid="text-hero-name">
              SAIR ALI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-hero-tagline">
            Full Stack Developer crafting beautiful digital experiences with modern technologies
          </p>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto" data-testid="text-hero-description">
            I specialize in Django, React, and modern technologies. Currently enhancing my problem-solving skills through DSA and core CS fundamentals, with a passion for crafting impactful digital solutions.
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
        <div className="flex justify-center gap-6 pt-4">
          <Button 
            variant="outline" 
            size="lg"
            className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
            onClick={() => window.open('https://github.com/SairAli7037', '_blank')}
            data-testid="link-github"
          >
            <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            <span className="hidden sm:inline">GitHub</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/sair-ali-9a7552243', '_blank')}
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:text-blue-500" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-orange-500/50 transition-all duration-300"
            onClick={() => window.open('https://leetcode.com/u/Sair123/', '_blank')}
            data-testid="link-leetcode"
          >
            <Code className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:text-orange-500" />
            <span className="hidden sm:inline">LeetCode</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-green-500/50 transition-all duration-300"
            onClick={() => window.open('mailto:sairali7037@gmail.com')}
            data-testid="link-email"
          >
            <Mail className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:text-green-500" />
            <span className="hidden sm:inline">Email</span>
          </Button>
        </div>
      </div>
    </section>
  );
}