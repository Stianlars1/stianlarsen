import "./radialBlurEffect.css";

export const RadialBlurEffect = () => {
  return (
    <div className="radial-Blur-Effect absolute top-0 min-w-full min-h-full z-[-100]">
      <div
        className="absolute w-full h-full rounded-full blur-[100px] z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle,   blue -20%, transparent 60%)",
        }}
      />
    </div>
  );
};
