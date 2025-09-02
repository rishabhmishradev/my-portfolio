import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rishabh.mishra@email.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Terminal className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-mono font-semibold text-primary">rm.dev</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting innovative digital experiences with cutting-edge technology, 
              creative design, and AI-powered solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
                  onClick={() => window.open(link.href, '_blank')}
                >
                  <link.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Status */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">System Status</h3>
            <div className="bg-gradient-card rounded-lg p-4 border border-primary/20">
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Server: Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Portfolio: Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Projects: Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground">
            <div className="flex items-center gap-2 font-mono text-sm">
              <span>&copy; {currentYear} Rishabh Mishra.</span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;