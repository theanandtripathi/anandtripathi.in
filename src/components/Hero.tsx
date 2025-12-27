import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Profile Photo */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Anand Tripathi" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-slide-up text-center lg:text-left max-w-xl">
            {/* Greeting */}
            <p className="text-muted-foreground text-lg mb-4">Hello, I'm</p>
            
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Anand Tripathi</span>
            </h1>
            
            {/* Role */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              Full Stack Developer | MERN Stack | Software Engineer
            </h2>
            
            {/* Tagline */}
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              "Building scalable, user-focused web applications with clean code and modern technologies."
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="rounded-full px-8"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                asChild
              >
                <a href="/resume/Anand_Tripathi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-8"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
