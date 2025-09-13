import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Learning Management System (LMS)',
      description: 'A full-featured LMS built with Django and React, allowing instructors to create courses, add lessons, assign quizzes, and track student progress. Students can enroll, learn sequentially, take quizzes, and monitor their progress in an intuitive dashboard.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center',
      technologies: ['Python', 'React', 'Django', 'PostgreSQL'],
      githubUrl: 'https://github.com/SairAli7037/Smart-LMS',
      liveUrl: 'https://smart-lms-nine.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Website',
      description: 'An E-Commerce platform with user authentication, product listings, cart management, secure checkout, and order tracking. Designed with scalability and user experience in mind, offering a smooth shopping experience for customers.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      technologies: ['Python', 'Django', 'SQLite', 'Bootstrap'],
      githubUrl: 'https://github.com/SairAli7037/Ecommerce-Project',
      liveUrl: 'https://ecommerce-shopcart.onrender.com/',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleLiveClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover-elevate transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              data-testid={`card-featured-project-${project.id}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <CardHeader className="pb-3">
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-project-desc-${project.id}`}>
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleGithubClick(project.githubUrl)}
                    data-testid={`button-github-${project.id}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleLiveClick(project.liveUrl)}
                    data-testid={`button-live-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover-elevate transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              data-testid={`card-other-project-${project.id}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-other-project-${project.id}`}
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-foreground" data-testid={`text-other-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-other-project-desc-${project.id}`}>
                  {project.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-other-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleGithubClick(project.githubUrl)}
                    data-testid={`button-other-github-${project.id}`}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLiveClick(project.liveUrl)}
                    data-testid={`button-other-live-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}