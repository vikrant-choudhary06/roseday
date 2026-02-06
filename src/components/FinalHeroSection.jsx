import finalHero from "../assets/images/hero-2.jpg";

const FinalHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50 to-rose-100 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative mx-auto w-full max-w-lg aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-soft">
          <img
            src={finalHero}
            alt="A final rose memory"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-white/20" />
          <div className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-rose-600 shadow-soft sm:text-sm">
            One last rose, always yours
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalHeroSection;
