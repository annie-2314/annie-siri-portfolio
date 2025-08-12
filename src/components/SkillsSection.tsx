import { Code, Database, Brain, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 80 },
        { name: 'JavaScript/TypeScript', level: 75 }
      ]
    },
    {
      title: 'AI & NLP',
      icon: Brain,
      color: 'accent',
      skills: [
        { name: 'Natural Language Processing', level: 85 },
        { name: 'LangGraph', level: 80 },
        { name: 'Groq LLM', level: 85 },
        { name: 'Context Engineering', level: 90 }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'primary',
      skills: [
        { name: 'Data Visualization', level: 80 },
        { name: 'MATLAB', level: 75 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Data Processing', level: 85 }
      ]
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      color: 'accent',
      skills: [
        { name: 'Streamlit', level: 85 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'API Development', level: 75 }
      ]
    }
  ];

  const getIconColor = (color: string) => {
    return color === 'primary' ? 'text-primary' : 'text-accent';
  };

  const getBgColor = (color: string) => {
    return color === 'primary' ? 'bg-primary/10' : 'bg-accent/10';
  };

  const getProgressColor = (color: string) => {
    return color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-to-r from-accent to-accent/80';
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across AI, data science, and software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 ${getBgColor(category.color)} rounded-xl flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${getIconColor(category.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-slide-up"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`absolute left-0 top-0 h-full ${getProgressColor(category.color)} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3}s`
                          }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Summary */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {category.title === 'Programming & Development' && 
                      'Strong foundation in programming languages and development frameworks'
                    }
                    {category.title === 'AI & NLP' && 
                      'Advanced knowledge in AI technologies and natural language processing'
                    }
                    {category.title === 'Data & Analytics' && 
                      'Expertise in data analysis, visualization, and statistical modeling'
                    }
                    {category.title === 'Tools & Frameworks' && 
                      'Proficient with modern development tools and deployment platforms'
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications or Additional Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-strong max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              I'm passionate about staying at the forefront of AI and data science. 
              Currently exploring advanced topics in reinforcement learning, 
              multimodal AI systems, and ethical AI development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;