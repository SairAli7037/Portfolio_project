import { Card, CardContent } from '@/components/ui/card';
import { Code, Coffee, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales'
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively in agile environments'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always learning and adopting new technologies'
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-intro">
                Hello! I'm a Full Stack Developer with over 5 years of experience building 
                web applications. I discovered my passion for programming during college 
                and have been hooked ever since.
              </p>
              
              <p className="text-foreground leading-relaxed" data-testid="text-about-journey">
                My journey started with simple HTML websites and has evolved into crafting 
                complex, scalable applications using modern frameworks like React, Next.js, 
                and Node.js. I love the entire process of bringing ideas to life through code.
              </p>
              
              <p className="text-foreground leading-relaxed" data-testid="text-about-focus">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or hiking in the mountains. I believe in continuous 
                learning and staying up-to-date with industry trends.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground font-medium mb-2">Currently focused on:</p>
              <ul className="space-y-1 text-foreground">
                <li data-testid="text-focus-1">• Building responsive, accessible web applications</li>
                <li data-testid="text-focus-2">• Cloud architecture and deployment strategies</li>
                <li data-testid="text-focus-3">• Performance optimization and user experience</li>
                <li data-testid="text-focus-4">• Mentoring junior developers</li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-highlight-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2" data-testid={`text-highlight-title-${index}`}>
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-highlight-desc-${index}`}>
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}