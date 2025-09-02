import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Brain, Zap } from "lucide-react";

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "HTML/CSS"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express", "Django"],
    "AI & Machine Learning": ["TensorFlow", "PyTorch", "OpenAI APIs", "Computer Vision"],
    "Design & UX": ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    "Tools & Technologies": [
      "Git",
      "Docker",
      "AWS",
      "MongoDB",
      "PostgreSQL",
      "Clerk",
      "NextAuth",
      "Prisma",
      "Firebase",
      "Supabase",
      "Vercel"
    ]
  };

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Designing and building scalable web applications using modern technologies and best practices."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Developing intelligent solutions by integrating cutting-edge AI tools and frameworks."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting intuitive, user-friendly, and visually engaging experiences."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhancing applications for speed, scalability, and seamless user interaction."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions where technology meets design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a hacker-minded developer driven by innovation, I’ve spent years mastering
                the craft of creating digital solutions that push boundaries. What started as
                curiosity about how technology works has evolved into expertise across multiple domains.
              </p>
              <p>
                I specialize in building AI-powered applications, designing elegant user interfaces,
                and developing robust backend systems. My philosophy combines technical excellence with
                creative problem-solving to deliver impactful results.
              </p>
              <p>
                Outside of coding, I enjoy diving into the latest AI research, contributing to open-source,
                and mentoring developers within the community.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-primary">What I Do</h3>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-display font-semibold text-center text-primary">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card
                key={index}
                className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-secondary"
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4 text-center">{category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
