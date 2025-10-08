import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">IC</span>
            </div>
            <span className="font-bold text-xl">Ingveri Cat</span>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}