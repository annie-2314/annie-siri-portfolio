import { ExternalLink, Github, Zap, Brain, Film, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const ProjectsSection = () => {
  const projects = [{
    id: 1,
    title: 'Personalized Learning Agent',
    description: 'An adaptive learning assistant that uses Groq LLM to provide personalized educational content. Features intelligent content recommendation, progress tracking, and interactive learning modules.',
    icon: Brain,
    color: 'primary',
    technologies: ['Python', 'Groq LLM', 'Streamlit', 'Machine Learning', 'NLP'],
    github: '#',
    demo: '#',
    featured: true
  }, {
    id: 2,
    title: 'AI Movie Assistant & Game Hub',
    description: 'Comprehensive entertainment platform featuring AI-powered movie recommendations, interactive trivia games, and voice interaction capabilities for an immersive user experience.',
    icon: Film,
    color: 'accent',
    technologies: ['Python', 'AI/ML', 'Voice Recognition', 'React', 'API Integration'],
    github: '#',
    demo: '#',
    featured: true
  }, {
    id: 3,
    title: 'LangGraph Agentic Workflow',
    description: 'Sophisticated task automation pipeline with intelligent planning, feedback loops, and Groq LLM integration. Designed for complex multi-step process automation.',
    icon: GitBranch,
    color: 'primary',
    technologies: ['LangGraph', 'Groq LLM', 'Python', 'Workflow Automation', 'AI Agents'],
    github: '#',
    demo: '#',
    featured: false
  }, {
    id: 4,
    title: 'Self-Healing DAG',
    description: 'Intelligent Directed Acyclic Graph system with automatic error recovery, dynamic execution optimization, and self-monitoring capabilities for robust data processing.',
    icon: Zap,
    color: 'accent',
    technologies: ['Python', 'Graph Theory', 'Error Recovery', 'Monitoring', 'Automation'],
    github: '#',
    demo: '#',
    featured: false
  }];
  const getIconColor = (color: string) => {
    return color === 'primary' ? 'text-primary' : 'text-accent';
  };
  const getBgColor = (color: string) => {
    return color === 'primary' ? 'bg-primary/10' : 'bg-accent/10';
  };
  return <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-slate-900">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, data science, and practical applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
          const IconComponent = project.icon;
          return <div key={project.id} className={`group relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-slide-up ${project.featured ? 'md:col-span-1' : ''}`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Featured Badge */}
                {project.featured && <div className="absolute -top-3 -right-3 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-medium">
                    Featured
                  </div>}

                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 ${getBgColor(project.color)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${getIconColor(project.color)}`} />
                  </div>
                  
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/10 hover:text-primary transition-colors duration-200">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 mt-6 pt-6 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-accent hover:text-accent-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
              </div>;
        })}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12 animate-fade-in" style={{
        animationDelay: '0.5s'
      }}>
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;