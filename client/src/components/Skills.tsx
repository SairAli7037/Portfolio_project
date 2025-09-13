import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  // TODO: Replace with real skills data
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Next.js', level: 'Advanced' },
        { name: 'Vue.js', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'SASS/SCSS', level: 'Advanced' },
        { name: 'Framer Motion', level: 'Intermediate' },
        { name: 'Responsive Design', level: 'Expert' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'NestJS', level: 'Intermediate' },
        { name: 'Python', level: 'Advanced' },
        { name: 'FastAPI', level: 'Intermediate' },
        { name: 'GraphQL', level: 'Advanced' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'Microservices', level: 'Intermediate' }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Redis', level: 'Intermediate' },
        { name: 'Prisma', level: 'Advanced' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'Git', level: 'Expert' },
        { name: 'Jest', level: 'Advanced' },
        { name: 'Cypress', level: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Vercel', level: 'Expert' },
        { name: 'Netlify', level: 'Advanced' },
        { name: 'CI/CD', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Advanced' },
        { name: 'Terraform', level: 'Beginner' },
        { name: 'Kubernetes', level: 'Beginner' },
        { name: 'Monitoring', level: 'Intermediate' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Beginner':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${categoryIndex}`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6" data-testid={`text-category-title-${categoryIndex}`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover-elevate"
                      data-testid={`item-skill-${categoryIndex}-${skillIndex}`}
                    >
                      <span className="font-medium text-foreground" data-testid={`text-skill-name-${categoryIndex}-${skillIndex}`}>
                        {skill.name}
                      </span>
                      <Badge 
                        className={`${getLevelColor(skill.level)} border-0 text-xs font-medium`}
                        data-testid={`badge-skill-level-${categoryIndex}-${skillIndex}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-additional-skills-title">
            Additional Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Machine Learning', 'Mobile Development', 'Web3', 'UI/UX Design', 'Technical Writing', 'Open Source'].map((interest, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm"
                data-testid={`badge-interest-${index}`}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}