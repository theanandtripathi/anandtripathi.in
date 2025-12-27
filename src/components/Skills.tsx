import { Code, Server, Wrench, Brain, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "C", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "Tailwind CSS", "Vite"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Netlify", "Vercel"],
    },
    {
      title: "AI / APIs",
      icon: Brain,
      skills: ["OpenAI API", "Gemini API"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 min-w-[180px]">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:ml-auto">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
