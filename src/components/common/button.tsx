import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GetStartedButton = () => {
  return (
    <Button
      size="sm"
      className="rounded-sm ml-auto text-end mt-4 w-1/2 bg-[#0000ff] hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold animate-fade-in group"
      style={{ animationDelay: "0.4s" }}
    >
      Get Started
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};

export default GetStartedButton;
