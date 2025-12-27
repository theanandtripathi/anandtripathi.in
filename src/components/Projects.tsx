import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "MediConnect",
      description:
        "A web-based doctor appointment booking system with real-time availability, secure payments, and admin control.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT", "bcrypt"],
      liveLink: "https://prescripto-i2ro.vercel.app/",
      githubLink: "https://github.com/theanandtripathi/MediConnect",
    },
    {
      title: "InterviewPrep AI",
      description:
        "An AI-powered interview preparation platform that generates customized interview questions based on job roles.",
      techStack: ["React.js", "Tailwind", "Node.js", "Express.js", "MongoDB", "Gemini API"],
      liveLink: "https://interview-prep-ai-livid.vercel.app/",
      githubLink: "https://github.com/theanandtripathi/interview-prep-ai",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real-world applications I've built using modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-border/50 bg-card overflow-hidden">
              {/* Project Header with gradient */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <Button size="sm" className="rounded-full" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
