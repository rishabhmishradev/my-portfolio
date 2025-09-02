import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal Window Effect */}
        <div className="mb-8 bg-gradient-card rounded-lg border border-primary/20 p-6 shadow-card backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-sm text-muted-foreground">~/portfolio</span>
          </div>
          
          <div className="font-mono text-left space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-terminal-green">$</span>
              <span className="text-foreground">whoami</span>
            </div>
            <div className="text-primary pl-4">rishabh_mishra</div>
            
            <div className="flex items-center gap-2 mt-4">
              <span className="text-terminal-green">$</span>
              <span className="text-foreground">cat skills.txt</span>
            </div>
            <div className="text-muted-foreground pl-4">
              Full-Stack Developer| UI/UX Designer
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse">
          Rishabh Mishra
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
          <span className="text-primary">&lt;</span>
          Full-Stack Developer | UI/UX Designer
          <span className="text-primary">/&gt;</span>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
         Crafting modern web applications with React, Next.js, and Python. Exploring AI technologies to create smarter and more efficient solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 font-semibold px-8"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
  {/* GitHub */}
  <a
    href="https://github.com/rishabhmishradev"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
    >
      <Github className="w-6 h-6" />
    </Button>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/rishabh-mishra-6b8061331"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="hover:text-primary hover:shadow-glow-secondary transition-all duration-300"
    >
      <Linkedin className="w-6 h-6" />
    </Button>
  </a>

  {/* Email */}
  <a
    href="mailto:rishabhkumarrmishra@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="ghost"
      size="icon"
      className="hover:text-primary hover:shadow-glow-primary transition-all duration-300"
    >
      <Mail className="w-6 h-6" />
    </Button>
  </a>
</div>


        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Hero;