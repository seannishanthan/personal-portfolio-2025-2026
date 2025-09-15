import { useState } from 'react';
import { ExternalLink, Github, Code, Globe, Brain, ShoppingCart, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      title: 'Pushup Tracker',
      description: 'Full-stack MERN application that tracks pushups in real-time via MediaPipe and provides personalized performance insights.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Express', 'MongoDB', 'Node.js','MediaPipe', 'Tailwind CSS', 'Firebase Authentication'],
      categories: ['Web Development', 'Computer Vision'],
      github: 'https://github.com/seannishanthan/pushup-tracker',
      demo: 'https://youtu.be/h7zB7I_5Dz4',
      icon: ShoppingCart,
      color: 'text-neon-blue'
    },
    {
      title: 'Turf War',
      description: '6-player stategy game + custom game engine built on a bare metal Nios-V processor, interfacing with memory-mapped I/O.',
      image: '/api/placeholder/400/300',
      tags: ['C', 'Nios-V Processor', 'DE1-SOC FPGA Board', 'VGA', 'PS/2 Keyboard', 'FIFO Audio'],
      categories: ['Hardware', 'Game Development'],
      github: 'https://github.com/deyrudra/RISC-V-Territory-War',
      demo: 'https://youtu.be/Vb0Z8u77Ua8?si=TMeMfEaC8ZbXs2N8',
      icon: Brain,
      color: 'text-neon-green'
    },
    {
      title: 'MetroFlow GIS',
      description: 'Commuter-focused GIS application built using C++ enabling users to plan trips through a responsive GUI. Implemented A*, heuristic optimizations, and multithreading for efficient pathfinding.',
      image: '/api/placeholder/400/300',
      tags: ['C++', 'Git', 'Linux', 'OpenStreetMap API', 'GTK'],
      categories: ['Software'],
      github: null,
      demo: 'https://youtu.be/fVB4hQmtSdk?si=vKkDu-_ndvBRlkW9',
      icon: Globe,
      color: 'text-primary'
    },
    {
      title: 'Flappy Bird',
      description: 'FPGA Flappy Bird game built using Verilog, implementing FSM-driven game logic, VGA output, collision detection, with on-chip memory for sprites. Verified in ModelSim and synthesized with Quartus Prime.',
      image: '/api/placeholder/400/300',
      tags: ['Verilog', 'ModelSim', 'Quartus Prime', 'DE1-SOC FPGA Board', 'VGA', 'PS/2 Keyboard', 'FIFO Audio'],
      categories: ['Hardware', 'Game Development'],
      github: null,
      demo: 'https://youtu.be/LLpEbj40tXY',
      icon: Code,
      color: 'text-secondary'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.flatMap(p => p.categories)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-cyber-dark to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, AI/ML, 
            hardware simulation, and game development.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`glass-card hover:scale-105 transition-smooth ${
                filter === category ? 'shadow-neon' : ''
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card hover:scale-105 transition-smooth animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <project.icon className={`w-16 h-16 ${project.color} group-hover:scale-110 transition-smooth`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.github && (
                      <Button size="sm" variant="secondary" className="glass-card" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" variant="default" className="shadow-neon" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1">
                    {project.categories.map((cat) => (
                      <Badge key={cat} variant="outline" className="glass-card text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="secondary"
                      className="text-sm px-3 py-1 glass-card hover:scale-105 transition-smooth bg-blue-green-fusion/20 text-blue-green-fusion border-blue-green-fusion/30"
                      style={{'--blue-green-fusion': '187 77% 56%'} as React.CSSProperties}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;