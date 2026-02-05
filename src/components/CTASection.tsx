import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-secondary via-card to-secondary rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
              Join us on a journey to excellence
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold whitespace-nowrap group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
