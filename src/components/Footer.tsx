import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	const socialLinks = [
		{ icon: Github, href: "https://github.com/theanandtripathi" },
		{ icon: Linkedin, href: "https://linkedin.com/in/theanandtripathi1" },
		{ icon: Mail, href: "mailto:tripathianand.dev@gmail.com" },
	];

	return (
		<footer className="py-12 border-t border-border">
			<div className="section-container">
				<div className="grid md:grid-cols-3 gap-8 mb-8">
					{/* Logo & Description */}
					<div>
						<a
							href="https://anandtripathi.in"
							className="text-2xl font-bold gradient-text"
							aria-label="Anand Tripathi — homepage"
							target="_blank"
							rel="noopener noreferrer"
						>
							Anand Tripathi
						</a>
						<p className="text-muted-foreground mt-3 text-sm">
							Full Stack Developer building modern web applications with clean code
							and great user experience.
						</p>
					</div>

					{/* Quick Links */}
					<div className="md:text-center">
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<div className="flex flex-wrap gap-4 md:justify-center">
							{quickLinks.map((link, index) => (
								<a
									key={index}
									href={link.href}
									className="text-muted-foreground hover:text-foreground transition-colors text-sm"
								>
									{link.name}
								</a>
							))}
						</div>
					</div>

					{/* Social Links */}
					<div className="md:text-right">
						<h4 className="font-semibold mb-4">Follow Me</h4>
						<div className="flex gap-3 md:justify-end">
							{socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
								>
									<link.icon className="h-4 w-4" />
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-muted-foreground text-sm">
						© {currentYear}{" "}
						<a
							href="https://anandtripathi.in"
							className="underline hover:text-foreground"
							target="_blank"
							rel="noopener noreferrer"
						>
							anandtripathi.in
						</a>
						. All rights reserved.
					</p>
					<p className="text-muted-foreground text-sm flex items-center gap-1">
						Made with{" "}
						<Heart className="h-4 w-4 text-destructive fill-destructive" /> by Anand
						Tripathi
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
