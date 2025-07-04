import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive, modern portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and mobile-first design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "In Progress",
      type: "Web Development",
      highlights: ["Responsive Design", "Modern UI/UX", "Performance Optimized"]
    },
    {
      title: "Student Resource Hub",
      description: "Planning a web application to help students organize study materials, track assignments, and collaborate on projects. Focus on clean UX and accessibility.",
      technologies: ["React", "Node.js", "Database Design", "UI/UX"],
      status: "Planning",
      type: "Web Application",
      highlights: ["User-Centered Design", "Accessibility Focus", "Collaborative Features"]
    },
    {
      title: "Code Learning Journey",
      description: "Documenting my programming journey through small projects, coding challenges, and learning experiences. Each project builds upon previous knowledge.",
      technologies: ["Python", "JavaScript", "Git", "Problem Solving"],
      status: "Ongoing",
      type: "Learning Project",
      highlights: ["Continuous Learning", "Best Practices", "Version Control"]
    },
    {
      title: "Future Innovation Project",
      description: "Exploring emerging technologies and brainstorming innovative solutions to everyday problems. Open to collaboration with fellow students and mentors.",
      technologies: ["Research", "Innovation", "Collaboration", "Design Thinking"],
      status: "Conceptual",
      type: "Innovation",
      highlights: ["Creative Problem Solving", "Research Skills", "Future-Focused"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-primary text-primary-foreground";
      case "Planning": return "bg-secondary text-secondary-foreground";
      case "Ongoing": return "bg-accent text-accent-foreground";
      case "Conceptual": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is a step forward in my learning journey. Here's what I'm working on and planning for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card h-full"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                
                <div className="text-sm text-primary font-medium">
                  {project.type}
                </div>
                
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="skill-tag px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Key Highlights</h4>
                  <div className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                  {project.status === "In Progress" && (
                    <Button size="sm" className="flex-1">
                      View Progress
                    </Button>
                  )}
                  {project.status === "Planning" && (
                    <Button size="sm" className="flex-1" variant="secondary">
                      Discuss Ideas
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="hero-card p-8 max-w-2xl mx-auto">
            <CardContent className="space-y-6 p-0">
              <div className="text-4xl">🚀</div>
              <h3 className="text-2xl font-bold">Let's Build Something Together</h3>
              <p className="text-muted-foreground">
                I'm always excited to collaborate on new projects and learn from experienced developers. 
                Whether you have an idea to explore or just want to connect, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start a Conversation
                </Button>
                <Button variant="outline" size="lg">
                  View My Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;