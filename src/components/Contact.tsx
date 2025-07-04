import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      action: "rudraksh.kankal@email.com",
      href: "mailto:rudraksh.kankal@email.com",
      color: "text-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect with me",
      href: "https://linkedin.com/in/rudraksh-kankal",
      color: "text-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      action: "Follow my projects",
      href: "https://github.com/rudraksh-kankal",
      color: "text-gray-700"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to connect with fellow students, mentors, and anyone passionate about technology and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hero-card p-8">
              <CardContent className="space-y-6 p-0">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Let's Start a Conversation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're a fellow student looking to collaborate, a mentor willing to share insights, 
                    or someone with an exciting project idea, I'd love to hear from you. I believe the best 
                    opportunities come from meaningful connections.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">I'm particularly interested in:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Collaborative projects
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Learning opportunities
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Mentorship connections
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Tech discussions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ways to Connect</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={method.title}
                    className="project-card p-6 hover:scale-105 cursor-pointer transition-all duration-300"
                    onClick={() => window.open(method.href, '_blank')}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fade-in-up 0.6s ease-out forwards'
                    }}
                  >
                    <CardContent className="flex items-center gap-4 p-0">
                      <div className={`p-3 rounded-xl bg-accent ${method.color}`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Send className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div>
            <Card className="hero-card p-8">
              <CardContent className="space-y-6 p-0">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-primary mb-2">Send a Quick Message</h3>
                  <p className="text-muted-foreground">
                    Have something specific in mind? Drop me a message and I'll get back to you soon!
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="Let's collaborate on a project" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Message
                    </label>
                    <Textarea 
                      placeholder="Hi Rudraksh! I came across your portfolio and would love to..."
                      rows={5}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Or reach out directly via any of the methods above. I typically respond within 24 hours!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Built with ❤️ by Rudraksh Kankal • Always open to new opportunities and connections
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;