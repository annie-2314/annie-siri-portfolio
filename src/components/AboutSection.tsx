import { GraduationCap, Target, Heart } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-slate-950">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating intelligent systems that can understand, learn, and adapt
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg leading-relaxed text-foreground">
                I'm currently pursuing my M.Tech in Artificial Intelligence & Data Science, 
                where I dive deep into the fascinating world of machine learning, natural 
                language processing, and intelligent automation.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                As an AI Context Engineer Intern at Appex Neural, I work on developing 
                sophisticated context management systems that help AI models better 
                understand and respond to complex queries. My focus is on creating 
                adaptive learning systems that can evolve and improve over time.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                I believe in the power of AI to solve real-world problems and am 
                particularly excited about applications in personalized learning, 
                intelligent automation, and human-computer interaction.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6 stagger-children">
              {/* Education */}
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      M.Tech in Artificial Intelligence & Data Science
                      <br />
                      <span className="text-sm">2nd Year Student</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Role */}
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Current Role</h3>
                    <p className="text-muted-foreground">
                      AI Context Engineer Intern at Appex Neural
                      <br />
                      <span className="text-sm">Context Management & AI Development</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Passion */}
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Passion</h3>
                    <p className="text-muted-foreground">
                      Creating intelligent, adaptive systems
                      <br />
                      <span className="text-sm">AI, ML, NLP & Human-Computer Interaction</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;