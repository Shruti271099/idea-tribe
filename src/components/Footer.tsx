import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  about: {
    title: "About Skilltastic",
    links: ["About Us", "Terms of Use", "Privacy Policy", "Cookie Policy"],
  },
  learn: {
    title: "Learn and Develop",
    links: ["Pathways", "Cyberlab", "Mentorship"],
  },
  getInTouch: {
    title: "Get In Touch",
    links: ["Contact Us", "Press Queries"],
  },
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Powered by */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <span className="text-foreground font-semibold">IdeaTribe</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  GCA
                </span>
              </div>
              <span className="font-bold text-lg text-foreground">
                GCATs<span className="text-primary">kills</span>
              </span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {footerLinks.about.title}
            </h4>
            <ul className="space-y-2">
              {footerLinks.about.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {footerLinks.learn.title}
            </h4>
            <ul className="space-y-2">
              {footerLinks.learn.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {footerLinks.getInTouch.title}
            </h4>
            <ul className="space-y-2">
              {footerLinks.getInTouch.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GCATskills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
