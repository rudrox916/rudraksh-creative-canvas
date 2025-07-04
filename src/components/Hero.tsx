import { Button } from "@/components/ui/button";
import profileImage from "@/assets/rudraksh-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="hero-text">
                  Rudraksh Kankal
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                First-year undergraduate passionate about{' '}
                <span className="text-primary font-semibold">technology</span>,{' '}
                <span className="text-primary font-semibold">design</span>, and{' '}
                <span className="text-primary font-semibold">creativity</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              A curious learner exploring the exciting world of programming, design, and innovation. 
              Always eager to collaborate on meaningful projects and connect with fellow creators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="hero-card rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={profileImage}
                  alt="Rudraksh Kankal"
                  className="w-80 h-80 rounded-2xl object-cover"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-2xl">💻</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-xl">🎨</span>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl transform rotate-6 scale-105"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;