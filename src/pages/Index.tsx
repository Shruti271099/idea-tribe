import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TotalSteps from "@/components/TotalSteps";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TotalSteps />
        <StepsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
