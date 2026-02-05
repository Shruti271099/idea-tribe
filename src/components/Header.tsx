import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "/public/icons/Group.svg";

const navItems = [
  { label: "Home", hasDropdown: false },
  {
    label: "About",
    hasDropdown: true,
    submenu: [
      "Who We Are",
      "Mission & Vision",
      "Leadership",
      "Partners",
      "Careers",
    ],
  },
  { label: "Event", hasDropdown: false },
  {
    label: "Free Learnings",
    hasDropdown: true,
    submenu: [
      "Beginner Cybersecurity",
      "Workshops & Webinars",
      "Recorded Sessions",
      "Learning Paths",
      "Community Resources",
    ],
  },
  {
    label: "Certifications",
    hasDropdown: true,
    submenu: [
      "Foundational Certifications",
      "Professional Certifications",
      "Advanced & Expert",
      "Exam Preparation",
      "Certification Roadmap",
    ],
  },
  {
    label: "Courses",
    hasDropdown: true,
    submenu: [
      "Ethical Hacking",
      "SOC Analyst",
      "Cloud Security",
      "Penetration Testing",
      "Threat Intelligence",
      "Incident Response",
    ],
  },
  {
    label: "Store",
    hasDropdown: true,
    submenu: [
      "Books & Guides",
      "Practice Labs",
      "Exam Vouchers",
      "Merchandise",
    ],
  },
];

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-1 py-4">
          <div className=" flex flex-col-3 items-center justify-between">
            {/* Logo */}
            <div></div>
            <div className="flex items-center gap-2 ml-10">
              <img src={logo} />
            </div>

            {/* Navigation */}

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                Login
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start Free
              </Button>
            </div>
          </div>
        </div>
      </header>
      <header className="fixed top-14 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border border-y-[#323539]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            {/* Navigation */}
            <nav className=" md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group">
                    {/* Nav Button */}
                    <button
                      className="flex items-center gap-1 text-sm font-medium
                    hover:text-foreground
                   transition-colors"
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      )}
                    </button>

                    {/* Dropdown */}
                    {item.submenu && (
                      <div
                        className="absolute left-0 top-full mt-3 w-52
                     opacity-0 invisible scale-95
                     group-hover:opacity-100 group-hover:visible group-hover:scale-100
                     transition-all duration-200 ease-out
                     bg-background/90 backdrop-blur-md
                     border border-border rounded-xl shadow-lg"
                      >
                        <ul className="py-2">
                          {item.submenu.map((sub) => (
                            <li key={sub}>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm
                             text-muted-foreground hover:text-foreground
                             hover:bg-muted/50 transition-colors"
                              >
                                {sub}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
