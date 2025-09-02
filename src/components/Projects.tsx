import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "A smart coding companion that delivers real-time suggestions, detects bugs, and optimizes code using advanced AI algorithms.",
      tech: ["Python", "OpenAI API", "React", "TypeScript", "Flask"],
      status: "Featured",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "A powerful monitoring platform for real-time threat detection, automated vulnerability scanning, and incident response.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Python"],
      status: "Live",
      gradient: "from-secondary to-accent"
    },
    {
      title: "Neural Network Visualizer",
      description: "An interactive tool to visualize deep learning models with live training progress and architecture exploration.",
      tech: ["TensorFlow.js", "React", "D3.js", "Python", "FastAPI"],
      status: "Beta",
      gradient: "from-accent to-primary"
    },
    {
      title: "Smart Task Automation",
      description: "An AI-driven task manager that learns user behavior to intelligently prioritize, schedule, and automate workflows.",
      tech: ["Next.js", "PostgreSQL", "OpenAI", "TypeScript", "Prisma"],
      status: "Coming Soon",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, cybersecurity, and modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary hover:-translate-y-2"
            >
              <CardHeader className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full opacity-10 transform translate-x-8 -translate-y-8`} />
                
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <Badge 
                      variant="secondary" 
                      className={`
                        ${project.status === 'Featured' ? 'bg-primary/20 text-primary border-primary/30' : ''}
                        ${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                        ${project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                        ${project.status === 'Coming Soon' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : ''}
                      `}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="ghost" className="w-8 h-8 hover:text-primary">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8 hover:text-primary">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardTitle className="text-xl font-display text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                    disabled={project.status === 'Coming Soon'}
                  >
                    {project.status === 'Coming Soon' ? 'Coming Soon' : 'View Project'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/rishabhmishradev" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
            >
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
