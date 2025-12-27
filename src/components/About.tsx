import { Code, Target, MessageCircle, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "DSA & Problem Solving",
      description: "Active on LeetCode with strong algorithmic thinking",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "MERN Stack specialist building scalable applications",
    },
    {
      icon: Target,
      title: "Clean Code Advocate",
      description: "Writing maintainable, efficient, and readable code",
    },
    {
      icon: MessageCircle,
      title: "Strong Communicator",
      description: "Effective collaboration and clear technical discussions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
            I'm a passionate Full-Stack Developer with a strong foundation in the MERN stack. 
            I love building scalable web applications using modern technologies like React, Node.js, 
            MongoDB, and AI-powered tools that solve real-world problems.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            I have worked on real-world projects such as <strong className="text-foreground">MediConnect</strong>, 
            a healthcare appointment platform, and <strong className="text-foreground">InterviewPrep AI</strong>, 
            an AI-based interview preparation tool. I'm passionate about problem-solving, clean UI design, 
            and building products that create real value.
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="https://leetcode.com/u/theanandtripathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-10 h-10 bg-[#FFA116] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LC</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">LeetCode Profile</p>
                <p className="text-sm text-muted-foreground">Check out my problem-solving journey</p>
              </div>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
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
