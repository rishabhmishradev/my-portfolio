import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MessageSquare, Send, Instagram, Twitter, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "rishabhkumarrmishra@email.com",
    action: "mailto:rishabh.mishra@email.com",
    color: "text-primary"
  },
  {
    icon: Github,
    title: "GitHub",
    description: "github.com/rishabhm",
    action: "https://github.com/rishabhmishradev",
    color: "text-secondary"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "linkedin.com/in/rishabhm",
    action: "https://linkedin.com/in/rishabhm",
    color: "text-accent"
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "@code.withrishabh",
    action: "https://www.instagram.com/code.withrishabh?igsh=bHhvcHA4YzJ1ODNw",
    color: "text-pink-500"
  },
  {
    icon: Twitter,
    title: "Twitter / X",
    description: "@rrishabhmishra",
    action: "https://x.com/rrishabhmishra?t=Ua8tzfl1v0fKTequu6agJg&s=09",
    color: "text-sky-500"
  }
];
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageSquare className="w-5 h-5" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-primary/20 focus:border-primary transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-primary/20 focus:border-primary transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
                
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-primary/20 focus:border-primary transition-colors duration-200 min-h-32"
                  required
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              {/* EXTRA SECTION BELOW FORM */}
              <div className="mt-10 space-y-6">
                {/* FAQ */}
                <Card className="bg-background/40 border-primary/10">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary">💡 Frequently Asked</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li><span className="font-medium text-foreground">Q:</span> How soon can you start?<br/><span className="text-sm">👉 Usually within a week.</span></li>
                      <li><span className="font-medium text-foreground">Q:</span> Do you work with startups?<br/><span className="text-sm">👉 Yes, I love collaborating!</span></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="rounded-full" onClick={() => window.open("https://wa.me/91876543210", "_blank")}>
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="rounded-full" onClick={() => window.open("/resume.pdf", "_blank")}>
                    Resume
                  </Button>
                  <Button variant="outline" className="rounded-full" onClick={() => window.open("https://calendly.com/rishabh/meeting", "_blank")}>
                    Book a Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with passionate people. 
                Whether you need a full-stack developer, AI consultant, or UX designer, I'm here to help 
                bring your vision to reality.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-secondary cursor-pointer group"
                  onClick={() => window.open(method.action, '_blank')}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-primary/20 group-hover:shadow-glow-primary transition-all duration-300`}>
                        <method.icon className={`w-6 h-6 ${method.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Terminal-style Status */}
            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="p-6">
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2 text-terminal-green">
                    <span>●</span>
                    <span>Status: Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <span>●</span>
                    <span>Response time: Usually within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <span>●</span>
                    <span>Timezone: UTC+5:30 (IST)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
