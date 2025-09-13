import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  // TODO: Replace with real project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and responsive design.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Chakra UI'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Chart.js', 'OpenWeather API'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media management with data visualization, engagement tracking, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Python', 'FastAPI', 'Redis', 'D3.js'],
      githubUrl: 'https://github.com/yourusername/social-analytics',
      liveUrl: 'https://social-analytics-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com',
      featured: false
    },
    {
      id: 6,
      title: 'API Management Tool',
      description: 'Developer tool for API testing, documentation, and monitoring with team collaboration features and automated testing.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
      githubUrl: 'https://github.com/yourusername/api-management',
      liveUrl: 'https://api-tool-demo.com',
      featured: false
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