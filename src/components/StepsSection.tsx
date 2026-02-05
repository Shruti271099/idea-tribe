interface StepCardProps {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  imagePlaceholder?: string;
  reverse?: boolean;
  subtitle2: string;
}

const StepCard = ({
  stepNumber,
  title,
  subtitle,
  subtitle2,
  description,
  imagePlaceholder,
  reverse,
}: StepCardProps) => {
  return (
    <div
      className={`step-card flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 items-center`}
    >
      {/* Content Side */}
      <div className="px-14 space-y-4 h-full">
        <div className="flex flex-col items-center justify-between gap-14">
          <span className="text-2xl md:text-[156px]  text-foreground">
            {stepNumber}
          </span>

          <h3 className="text-8xl md:[84px] font-extrabold text-foreground">
            {title}
          </h3>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full">
        <div className="bg-secondary/50 rounded-xl aspect-video flex items-center justify-center border border-border">
          {imagePlaceholder ? (
            <img
              src={imagePlaceholder}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary to-background rounded-xl" />
          )}
        </div>
        <div className="space-y-2">
          <div>
            {" "}
            <h4 className="text-2xl">{subtitle}</h4>
            <h4 className="text-2xl font-bold">{subtitle2}</h4>
          </div>

          <p className=" text-md leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const StepsSection = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Build",
      subtitle: "Identify Your ",
      subtitle2: "Cybersecurity Skills",
      imagePlaceholder: "/src/assets/step1.png",
      description:
        "Build a personalized, role-ready Skill Map in just 15 minutes. Designed for fresh graduates and experienced professionals alike. Start now.",
    },
    {
      stepNumber: "02",
      title: "Validate",
      subtitle: "Validate to",
      subtitle2: "Conquer",
      imagePlaceholder: "/src/assets/step2.png",
      description:
        "Strengthen your skills and confidence with our curated modules. Watch work videos and take sample quizzes to prepare for the challenges to come. Practice everything we offer, tailored to your needs.",
    },
    {
      stepNumber: "03",
      title: "Grow",
      subtitle: "Unleash",
      subtitle2: "Your Potential",
      imagePlaceholder: "/src/assets/step3.png",
      description:
        "Get personalized recommendations to help you go beyond and start to accelerate. Digital credentials can help you boost your cybersecurity career prospects.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <StepCard key={step.stepNumber} {...step} reverse={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
