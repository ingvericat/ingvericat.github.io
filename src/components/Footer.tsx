import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IC</span>
              </div>
              <span className="font-bold text-xl">Ingveri Cat</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Crafting extraordinary gaming experiences across all platforms with passion and innovation.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="p-2">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@ingvericat.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Ingveri Cat. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}