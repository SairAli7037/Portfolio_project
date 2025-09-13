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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main About Content */}
          <Card className="p-8 h-fit">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-intro">
                  Hello! I'm a Full-Stack Developer passionate about building impactful web applications. 
                  I began my journey with HTML websites and has evolved into crafting complex, scalable 
                  applications using modern frameworks like React, Django. I Love the entire process of 
                  bringing ideas to life through code.
                </p>
                
                <p className="text-foreground leading-relaxed" data-testid="text-about-journey">
                  Currently, I'm strengthening my foundation in Data Structures, Algorithms, and core 
                  Computer Science subjects to grow as a well-rounded Software Engineer. I enjoy solving 
                  problems, learning new technologies, and turning ideas into working products.
                </p>
                
                <p className="text-foreground leading-relaxed" data-testid="text-about-focus">
                  When I'm not coding, I like exploring emerging tech trends and continuously improving 
                  my skills to stay future-ready.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground font-medium mb-3">Currently focused on:</p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start" data-testid="text-focus-1">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Building responsive, accessible web applications</span>
                  </li>
                  <li className="flex items-start" data-testid="text-focus-2">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Strengthening problem-solving through DSA</span>
                  </li>
                  <li className="flex items-start" data-testid="text-focus-3">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Improving performance, usability, and scalability in my projects</span>
                  </li>
                  <li className="flex items-start" data-testid="text-focus-4">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>Expanding my knowledge of core software engineering concepts</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

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