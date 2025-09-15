import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cyber-dark border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Scroll to top button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="glass-card hover:shadow-neon transition-smooth animate-float"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            <p>© 2025 Sean Nishanthan | All Rights Reserved</p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;