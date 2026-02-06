const RosePetals = () => {
  const petals = [
    { left: "4%", size: "w-3 h-4", delay: "0s", duration: "7s", opacity: 0.55 },
    { left: "12%", size: "w-4 h-5", delay: "1.5s", duration: "8s", opacity: 0.6 },
    { left: "20%", size: "w-3 h-4", delay: "3s", duration: "6.5s", opacity: 0.5 },
    { left: "28%", size: "w-4 h-5", delay: "0.8s", duration: "7.5s", opacity: 0.58 },
    { left: "36%", size: "w-3 h-4", delay: "2.2s", duration: "8.5s", opacity: 0.5 },
    { left: "44%", size: "w-4 h-5", delay: "4s", duration: "7s", opacity: 0.62 },
    { left: "52%", size: "w-3 h-4", delay: "0.4s", duration: "6.8s", opacity: 0.52 },
    { left: "60%", size: "w-4 h-5", delay: "1.8s", duration: "7.8s", opacity: 0.55 },
    { left: "68%", size: "w-3 h-4", delay: "3.5s", duration: "7s", opacity: 0.56 },
    { left: "76%", size: "w-4 h-5", delay: "5s", duration: "8s", opacity: 0.62 },
    { left: "84%", size: "w-3 h-4", delay: "1.2s", duration: "6s", opacity: 0.5 },
    { left: "92%", size: "w-4 h-5", delay: "3.8s", duration: "7.2s", opacity: 0.58 }
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {petals.map((petal, index) => (
        <span
          key={`petal-${index}`}
          className={`absolute -top-12 ${petal.size} animate-petal-fall rounded-[60%_60%_40%_40%] bg-rose-400/80 shadow-[0_8px_20px_rgba(244,63,94,0.35)]`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            opacity: petal.opacity
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default RosePetals;
