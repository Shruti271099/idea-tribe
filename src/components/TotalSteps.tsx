import bgImg from "/public/image-a-million-possibillities.jpg";

const TotalSteps = () => {
  return (
    <div
      className="flex items-center justify-center h-[240px] md:h-[200px]
                 bg-cover bg-center animate-grow"
      style={{
        animationDelay: "0.3s",
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <p className="text-2xl md:text-[42px] text-white font-semibold text-center">
        Three steps. A million possibilities.
      </p>
    </div>
  );
};

export default TotalSteps;
