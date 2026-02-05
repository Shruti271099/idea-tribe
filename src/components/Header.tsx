import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Pathway", hasDropdown: true },
  { label: "Cyberlab", hasDropdown: true },
  { label: "Community", hasDropdown: true },
  { label: "More", hasDropdown: true },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </nav>

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
  );
};

export default Header;
