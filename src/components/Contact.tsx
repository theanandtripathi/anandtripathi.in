import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    e.currentTarget.submit(); // allow Netlify to handle submission
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/theanandtripathi",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/theanandtripathi1",
      color: "hover:text-primary",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:tripathianand.dev@gmail.com",
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">

      {/* 🔥 Netlify hidden form (VERY IMPORTANT) */}
      <form name="contact" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id="anonymous"
                    checked={isAnonymous}
                    onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                  />
                  <label
                    htmlFor="anonymous"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Send anonymously
                  </label>
                </div>

                {!isAnonymous && (
                  <>
                    <Input name="name" placeholder="Your Name" />
                    <Input name="email" type="email" placeholder="Your Email" />
                  </>
                )}

                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  required
                  rows={5}
                  className="resize-none"
                />

                <Button type="submit" className="w-full rounded-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            <div className="bg-card border border-border/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8">
                You can also find me on these platforms. Let's connect and build something amazing together!
              </p>

              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

