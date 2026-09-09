import { Building, GraduationCap, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Systems Software Engineering Intern',
      company: 'Tenstorrent',
      period: 'May 2026 - Present',
      type: 'Internship',
      icon: Building,
      description: 'Developing ASIC debug infrastructure and board bring-up framework to enable post-silicon bring-up.',
      skills: ['Python', 'C', 'C++', 'I2C', 'SPI', 'Agent Skills'],
      color: 'text-neon-blue',
      glowClass: 'hover:shadow-neon'
    },
    {
      title: 'Machine Learning Research Intern',
      company: 'Acceleration Consortium (AC) & Frank Gu Lab',
      period: 'May 2025 - August 2025',
      type: 'Internship',
      icon: Building,
      description: 'ML research in a self-driving lab, improving agrochemical gelation prediction through unsupervised learning, Bayesian optimization, VAEs, and FAISS-driven candidate generation.',
      skills: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'FAISS', 'Streamlit'],
      color: 'text-neon-blue',
      glowClass: 'hover:shadow-neon'
    },
    {
      title: 'Applications Engineering Intern',
      company: 'Qoherent',
      period: 'May 2024 - August 2024',
      type: 'Internship',
      icon: Building,
      description: 'Software development for a startup, contributing to an open-source framework for intelligent radio systems, by implementing signal augmentation and dataset utilities to support radio inference model development.',
      skills: ['Python', 'PyTorch', 'Tkinter', 'NumPy', 'PyTest', 'h5py'],
      color: 'text-neon-green',
      glowClass: 'hover:shadow-green'
    },
    {
      title: 'Firmware Team Member',
      company: 'University of Toronto Formula Racing Team',
      period: 'September 2023 - April 2024',
      type: 'Design Team',
      icon: Users,
      description: 'Firmware development for a Formula SAE race car, including C/C++ functions for temperature sensor libraries, writing documentation, and team collaboration.',
      skills: ['C', 'C++', 'Git'],
      color: 'text-primary',
      glowClass: 'hover:shadow-neon'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-cyber-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional and extracurricular progress.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.company}-${exp.period}`}
              className={`glass-card ${exp.glowClass} transition-smooth animate-fade-in hover:scale-[1.02]`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg glass-card ${exp.color}`}>
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl">
                        {exp.title}
                      </CardTitle>
                      <p className={`text-lg font-semibold ${exp.color}`}>
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="outline" className="glass-card w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="glass-card hover:scale-105 transition-smooth text-sm px-3 py-1 bg-blue-green-fusion/20 text-blue-green-fusion border-blue-green-fusion/30"
                          style={{ '--blue-green-fusion': '187 77% 56%' } as React.CSSProperties}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;