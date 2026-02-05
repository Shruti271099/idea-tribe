import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", hasDropdown: false },
  { label: "About", hasDropdown: true },
  { label: "Event", hasDropdown: false },
  { label: "Free Learnings", hasDropdown: true },
  { label: "Certifications", hasDropdown: true },
  { label: "Courses", hasDropdown: true },
  { label: "Store", hasDropdown: true },
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
              <img src="/public/Group.svg" />
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
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className=" flex items-center gap-1 hover:text-foreground transition-colors text-sm font-medium"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
