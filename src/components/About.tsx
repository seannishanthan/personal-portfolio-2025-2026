import { Code, Database, Wrench, GraduationCap, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'C++', 'C', 'Java', 'HTML', 'CSS', 'JavaScript', 'MATLAB', 'Verilog', 'Assembly (RISC-V)'],
      color: 'text-neon-blue',
      glowClass: 'hover:shadow-neon'
    },
    {
      title: 'Libraries/Frameworks',
      icon: Database,
      skills: ['PyTorch', 'Scikit-learn', 'Matplotlib', 'NumPy', 'Pandas', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'Mongoose'],
      color: 'text-neon-green',
      glowClass: 'hover:shadow-green'
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub Actions', 'VS Code', 'Linux', 'MongoDB Atlas', 'Quartus Prime', 'ModelSim', 'LTSpice'],
      color: 'text-primary',
      glowClass: 'hover:shadow-neon'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cyber-dark to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Info */}
          <div className="space-y-6">
            <Card className="glass-card hover:scale-105 transition-smooth">
            <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <GraduationCap className="w-6 h-6" />
                    Education
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">2023 - 2028</span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  University of Toronto
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Bachelor of Applied Science in Computer Engineering
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Minor in Artificial Intelligence
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-secondary">
                  <Heart className="w-6 h-6" />
                  Interests & Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                My current technical interests lie in machine learning and full-stack development. When I have a bit of extra time, I enjoy building projects and learning new frameworks to explore these fields. 
                Outside of tech, I'm a big soccer fan and an FC Barcelona supporter (If you're a recruiter and you're a Real Madrid fan, ignore the last sentence). If I'm not grinding on work you'll likely find me lifting at the gym.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`glass-card ${category.glowClass} transition-smooth animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className={`flex items-center gap-3 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline"
                        className="glass-card hover:scale-105 transition-smooth text-sm px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;