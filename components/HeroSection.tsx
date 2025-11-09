export const HeroSection = () => {
  return (
    <section className="w-full h-64 md:h-96 bg-[#444546] dark:bg-[#1A1A1A] overflow-hidden">
      <div className="w-full h-full">
        <svg
          className="w-full h-full animate-[slow-pan_12s_linear_infinite_alternate]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect fill="#444546" className="dark:fill-[#1A1A1A]" height="100%" width="100%" />
          <circle
            cx="200"
            cy="200"
            fill="#447ea2"
            fillOpacity="0.6"
            r="150"
          />
          <circle
            cx="600"
            cy="200"
            fill="#79cad3"
            fillOpacity="0.5"
            r="200"
          />
          <rect
            fill="#447ea2"
            fillOpacity="0.4"
            height="200"
            transform="rotate(45 400 200)"
            width="100"
            x="350"
            y="100"
          />
        </svg>
      </div>
    </section>
  );
};
