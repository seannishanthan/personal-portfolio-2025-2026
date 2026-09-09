import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Computer Engineering Student',
    'Tech Innovator',
    'Problem Solver',
    'Software Engineer',
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentText];
    
    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentText((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText]);

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/seannishanthan', 
      label: 'GitHub',
      className: 'hover:shadow-neon'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/sean-nishanthan', 
      label: 'LinkedIn',
      className: 'hover:shadow-=neon'
    },
    { 
      icon: Mail, 
      href: 'mailto:seannishanthan@gmail.com', 
      label: 'Email',
      className: 'hover:shadow-neon'
    },
  ];

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-cyber-dark/80"></div>
      

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Sean Nishanthan</span>
          </h1>
          
          {/* Typewriter subheading */}
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="text-muted-foreground">I am a </span>
            <span className="text-primary ml-2 font-mono">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Computer Engineering student at the University of Toronto passionate about creating 
            innovative tech-based solutions.
          </p>

          {/* Social buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                className={`glass-card hover:scale-105 transition-bounce ${link.className} h-16 w-16`}
                asChild
              >
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon size={32} />
                </a>
              </Button>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-smooth"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;