import { Mail, Github, Linkedin, Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sean.nishanthan@example.com',
      href: 'mailto:sean.nishanthan@example.com',
      color: 'text-primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@sean-nishanthan',
      href: 'https://github.com/seannishanthan',
      color: 'text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      value: 'Sean Nishanthan',
      href: 'https://linkedin.com/in/sean-nishanthan',
      color: 'text-primary'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: '@sean-nishanthan',
      href: 'https://youtube.com/@seann7521',
      color: 'text-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-cyber-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to have a chat, feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="glass-card hover:scale-105 transition-smooth animate-fade-in aspect-square cursor-pointer group"
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className={`p-4 rounded-lg glass-card ${link.color} mb-3 group-hover:scale-110 transition-smooth`}>
                      <link.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{link.label}</h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;