import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building2, GraduationCap } from 'lucide-react';

interface WorkExperience {
  type: 'work';
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Education {
  type: 'education';
  degree: string;
  school: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
}

type ExperienceItem = WorkExperience | Education;

export default function Experience() {
  const education: Education[] = [
    {
      type: 'education',
      degree: 'Bachelor of Technology in Electronics Engineering',
      school: 'ZAKIR HUSAIN COLLEGE OF ENGINEERING AND TECHNOLOGY, AMU',
      location: 'ALIGARH, UTTAR PRADESH',
      duration: '2026',
      description: 'Focused on electronics, embedded systems, and core engineering subjects, while also developing a strong interest in software development, algorithms, and web technologies.',
      achievements: [
        'Strong foundation in electronics and embedded systems',
        'Developed passion for software development and web technologies',
        'Currently building expertise in algorithms and data structures'
      ]
    }
  ];

  const allExperiences: ExperienceItem[] = [...education];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-experience-title">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subtitle">
            My educational background and academic journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {allExperiences.map((item, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    {item.type === 'work' ? (
                      <Building2 className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <Card 
                  className="flex-1 hover-elevate transition-all duration-300"
                  data-testid={`card-experience-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground" data-testid={`text-experience-title-${index}`}>
                          {item.type === 'work' ? item.title : item.degree}
                        </h3>
                        <p className="text-lg text-primary font-medium" data-testid={`text-experience-company-${index}`}>
                          {item.type === 'work' ? item.company : item.school}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-muted-foreground text-sm mb-1">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          <span data-testid={`text-experience-duration-${index}`}>{item.duration}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span data-testid={`text-experience-location-${index}`}>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed mb-4" data-testid={`text-experience-desc-${index}`}>
                      {item.description}
                    </p>

                    {item.type === 'work' && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech: string, techIndex: number) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs"
                            data-testid={`badge-experience-tech-${index}-${techIndex}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex} 
                            className="text-muted-foreground text-sm flex items-start"
                            data-testid={`text-experience-achievement-${index}-${achievementIndex}`}
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}