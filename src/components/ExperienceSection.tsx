import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const achievements = [
    'Developed and optimized AI context management systems for improved model performance',
    'Implemented automated workflow pipelines reducing processing time by 40%',
    'Collaborated on multi-agent AI systems with advanced planning and feedback mechanisms',
    'Created intelligent error recovery systems for robust data processing workflows',
    'Contributed to research on adaptive learning algorithms and personalization techniques'
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future of AI through hands-on development and innovation
            </p>
          </div>

          {/* Experience Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-strong border border-border animate-slide-up">
            {/* Company Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Appex Neural</h3>
                  <p className="text-lg font-semibold text-primary">AI Context Engineer Intern</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">2024 - Present</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Remote</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                As an AI Context Engineer Intern at Appex Neural, I focus on developing sophisticated 
                context management systems that enhance AI model understanding and response quality. 
                My work involves creating adaptive algorithms, implementing automation workflows, 
                and contributing to cutting-edge AI research projects.
              </p>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">Key Contributions</h4>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Gained */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">Technologies & Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python', 'Machine Learning', 'LangGraph', 'Groq LLM', 
                  'Context Management', 'Workflow Automation', 'AI Agents', 
                  'Error Recovery Systems', 'Data Processing'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;