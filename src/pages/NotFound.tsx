import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="glass-card p-8 animate-fade-in">
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
          <h1 className="text-2xl font-bold mb-4 text-foreground">Oops! Page not found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="shadow-neon hover:scale-105 transition-smooth"
              asChild
            >
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </a>
            </Button>
            <Button 
              variant="outline"
              className="glass-card hover:scale-105 transition-smooth"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
