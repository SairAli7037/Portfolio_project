import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
     {
      title: 'Programming Languages & Fundamentals',
      skills: [
        { name: 'C', level: 'Intermediate' },
        { name: 'C++', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'Data Structures & Algorithms', level: 'Intermediate'},
        { name: 'OOP', level: 'Intermediate'}
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Advanced' },
        { name: 'React.js', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
        { name: 'UI/UX Design Principles', level: 'Beginner' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Django', level: 'Advanced' },
        { name: 'REST APIs', level: 'Advanced' },
        { name: 'API Integration', level: 'Intermediate' },
        { name: 'PostgreSQL', level:'Advanced'},
        { name: 'SQLite', level: 'Advanced'}

      ]
    },
    {
      title: 'Tools,DevOps & Cloud',
      skills: [
        { name: 'Git', level: 'Expert' },
        { name: 'Vercel', level: 'Expert'},
        { name: 'Render', level: 'Expert'},
        { name: 'CI/CD', level: 'Advanced'},
        { name: 'GitHub', level: 'Advanced'}
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