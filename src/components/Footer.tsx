import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  about: {
    title: "Quick Navigation",
    links: [
      "Home",
      "About",
      "Membership",
      "Contact",
      "Terms and Conditions",
      "Privacy Policy",
      "Cancellation and Refund",
      "Shipping and Exchange ",
    ],
  },
  socialMedia: {
    title: "Stay Connected",
    items: [
      {
        label: "YouTube",
        href: "https://youtube.com",
        icon: "/public/assets/youtube-logo.svg",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: "/public/assets/linkedin-logo.svg",
      },
    ],
  },
  getInTouch: {
    title: "Get In Touch",
    links: ["team@gcaforum.com", `Phone No. +91 8910392803`],
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
    <footer className="p-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Powered by */}
        <div className="text-center mb-20 from-neutral-100">
          <p className="text-4xl">
            Powered by{" "}
            <span className="text-foreground font-semibold">IdeaTribe</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/public/Group.svg" />
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
              {footerLinks.socialMedia.title}
            </h4>
            <ul className="space-y-2">
              {footerLinks.socialMedia.items.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <img src={icon} className="w-4 h-4 " />
                    {label}
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
            © {new Date().getFullYear()} Global Cybersecurity Association. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
