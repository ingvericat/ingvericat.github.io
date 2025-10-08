import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute inset-0">
                {/* Cat ears */}
                <path d="M8 16 L14 2 L20 16 Z" fill="#ff6b35" />
                <path d="M20 16 L26 2 L32 16 Z" fill="#ff6b35" />
                {/* Cat head */}
                <circle cx="20" cy="22" r="14" fill="#ff6b35" />
                {/* Cat eyes */}
                <circle cx="16" cy="20" r="2.5" fill="white" />
                <circle cx="24" cy="20" r="2.5" fill="white" />
                <circle cx="16" cy="19.5" r="1.2" fill="#030213" />
                <circle cx="24" cy="19.5" r="1.2" fill="#030213" />
                {/* Eye highlights */}
                <circle cx="16.5" cy="19" r="0.5" fill="white" />
                <circle cx="24.5" cy="19" r="0.5" fill="white" />
              </svg>
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