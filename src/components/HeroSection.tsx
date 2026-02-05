import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.svg";
import GetStartedButton from "@/components/common/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border mb-8 animate-fade-in">
            <span className="text-xs font-medium text-muted-foreground">
              Part of the GCA Initiative to drive change
            </span>
          </div>

          {/* Main Heading */}
          <div className="flex gap-20 ">
            <div className="text-end flex flex-col  justify-center align-bottom py-20  ">
              <h1
                className="  text-5xl md:text-7xl font-extrabold text-foreground mb-4 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Be <span>Skilltastic!</span>
              </h1>
              <p className="text-sm">
                BUILD, VALIDATE & STRENGTHEN YOUR CYBER SKILLS.
              </p>{" "}
              <p className="text-sm">
                Open doors to resilient careers and future-ready opportunities.
              </p>
              <GetStartedButton />
            </div>
            {/* Hero Illustration */}
            <div className="relative w-full max-w-md my-8 ">
              <img
                src={heroIllustration}
                alt="Diverse team working on cybersecurity"
                className="w-full h-auto rounded-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 left-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" />
              <div
                className="absolute -bottom-2 right-1/3 w-2 h-2 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-foreground font-semibold mb-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Three steps. A million possibilities.
          </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
