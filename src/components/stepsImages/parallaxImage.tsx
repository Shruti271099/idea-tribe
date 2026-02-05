import { useEffect, useRef } from "react";

const ParallaxImage = ({
  src,
  alt = "",
  mode = "image",
  speed = 0.25,
  children,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const offset = rect.top * speed;

      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  // For background style usage
  if (mode === "background") {
    return (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={ref}
          style={{ backgroundImage: `url(${src})` }}
          className="w-full h-[120%] bg-cover bg-center will-change-transform"
        />
        {children}
      </div>
    );
  }

  // For normal <img> usage
  return (
    <div className="overflow-hidden">
      <img
        ref={ref}
        src={src}
        alt={alt}
        className="w-full h-[110%] object-cover will-change-transform"
      />
    </div>
  );
};

export default ParallaxImage;
