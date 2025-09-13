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
  // TODO: Replace with real experience data
  const experiences: WorkExperience[] = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: 'Leading development of scalable web applications serving 100k+ users. Mentoring junior developers and architecting cloud-native solutions.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'TypeScript'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      location: 'Remote',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Docker'],
      achievements: [
        'Built e-commerce platform processing $2M+ annually',
        'Developed real-time chat application with 10k+ concurrent users',
        'Maintained 99.9% uptime across all client applications'
      ]
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      description: 'Focused on creating responsive web applications and improving user experience. Worked closely with UX designers to implement intuitive interfaces.',
      technologies: ['React', 'SASS', 'Redux', 'Jest'],
      achievements: [
        'Increased user engagement by 35% through UX improvements',
        'Implemented comprehensive testing suite with 90% coverage',
        'Optimized mobile performance improving load times by 50%'
      ]
    }
  ];

  const education: Education[] = [
    {
      type: 'education',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      duration: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
      achievements: [
        'Dean\'s List for 3 consecutive semesters',
        'Led university programming competition team',
        'Completed senior capstone project on machine learning'
      ]
    }
  ];

  const allExperiences: ExperienceItem[] = [...experiences, ...education];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-experience-title">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subtitle">
            My professional journey and educational background
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