import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "HTML/CSS", "React", "Learning Java"] },
    { category: "Design", items: ["UI/UX Principles", "Figma", "Creative Problem Solving", "Visual Design"] },
    { category: "Soft Skills", items: ["Communication", "Teamwork", "Leadership", "Adaptability", "Critical Thinking"] },
    { category: "Interests", items: ["Web Development", "AI/ML", "Mobile Apps", "Open Source", "Tech Innovation"] }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate first-year student with an insatiable curiosity for technology and a drive to create meaningful impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="hero-card p-8">
              <CardContent className="space-y-6 p-0">
                <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As a first-year undergraduate, I'm at the exciting beginning of my tech journey. 
                    Every day brings new discoveries in programming, design, and the endless possibilities 
                    that technology offers to solve real-world problems.
                  </p>
                  
                  <p>
                    What drives me most is the intersection of creativity and logic—finding elegant 
                    solutions to complex challenges while creating experiences that truly matter to people. 
                    I believe that great technology should be both powerful and accessible.
                  </p>
                  
                  <p>
                    I'm particularly drawn to collaborative environments where I can learn from others 
                    while contributing my own unique perspective. Whether it's through coding, design, 
                    or simply engaging in meaningful conversations about innovation.
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-3">Current Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Web Development
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Problem Solving
                    </span>
                    <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                      Continuous Learning
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <Card 
                key={skillGroup.category}
                className="project-card p-6 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <CardContent className="p-0 space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    {skillGroup.category === "Programming" && "💻"}
                    {skillGroup.category === "Design" && "🎨"}
                    {skillGroup.category === "Soft Skills" && "🤝"}
                    {skillGroup.category === "Interests" && "🚀"}
                    {skillGroup.category}
                  </h4>
                  
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div 
                        key={skill}
                        className="text-sm text-muted-foreground bg-accent/50 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-primary">Quick Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hero-card p-6 rounded-2xl">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">Goal-Oriented</h4>
              <p className="text-sm text-muted-foreground">
                I set clear objectives and work systematically to achieve them
              </p>
            </div>
            
            <div className="hero-card p-6 rounded-2xl">
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold mb-2">Growth Mindset</h4>
              <p className="text-sm text-muted-foreground">
                Every challenge is an opportunity to learn and improve
              </p>
            </div>
            
            <div className="hero-card p-6 rounded-2xl">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold mb-2">Team Player</h4>
              <p className="text-sm text-muted-foreground">
                I thrive in collaborative environments and value diverse perspectives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;