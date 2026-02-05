import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bgImg from "/public/fourth.jpg";
import ParallaxImage from "./stepsImages/parallaxImage";
import GetStartedButton from "./common/button";

const CTASection = () => {
  console.log("updated");
  return (
    <section className="py-6 relative">
      <div className="container mx-auto px-6">
        <div className=" rounded-2xl p-8 md:p-12  relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-primary/10 rounded-full blur-[100px]" /> */}
            <ParallaxImage mode="background" src={bgImg} speed={0.25} />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-5 items-center
h-[240px] md:h-[200px]  text-center"
            style={{
              animationDelay: "0.3s",
              backgroundImage: `url(${bgImg})`,
            }}
          >
            <div className="md:col-span-3  flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                Join us on a journey to excellence
              </h2>
            </div>
            <div className="md:col-span-2 flex items-start pr-[100px]">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
