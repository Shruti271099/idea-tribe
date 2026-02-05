import { useEffect, useRef } from "react";

const ParallaxImage = ({ imagePlaceholder, title }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();
      const speed = 0.2;
      const offset = rect.top * speed;

      imgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden bg-secondary/50 rounded-xl aspect-video border border-border">
      {imagePlaceholder && (
        <img
          ref={imgRef}
          src={imagePlaceholder}
          alt={title}
          className="w-full h-[110%] object-cover transition-transform duration-75 ease-out"
        />
      )}
    </div>
  );
};

export default ParallaxImage;
