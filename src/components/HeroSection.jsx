import heroImage from "../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-rose-100 to-white">
      <div className="pointer-events-none absolute inset-0 bg-[url(/images/rose-bg.png)] bg-[length:320px_320px] bg-repeat opacity-20" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 text-center sm:gap-10 sm:px-6 sm:py-16 lg:flex-row lg:items-end lg:text-left">
        <div className="flex-1 animate-fade-up">
          <p className="font-script text-2xl text-rose-500 sm:text-3xl md:text-4xl">For My Love</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-rose-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Happy Rose Day <span className="text-rose-500">{"\u2764"}</span>
          </h1>
          <p className="mt-4 text-base text-rose-700 sm:text-lg md:text-xl">
            Even miles apart, my love for you blooms every day.
          </p>
          <p className="mt-6 text-sm text-rose-600 sm:text-base">
            This little page is a reminder that every sunrise brings me closer to you, and every night ends with your
            name on my lips.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-rose-600 sm:text-sm lg:justify-start">
            <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-soft sm:px-4 sm:py-2">
              Distance apart, hearts together
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-soft sm:px-4 sm:py-2">
              Always and forever
            </span>
          </div>
        </div>
        <div className="relative flex-1 animate-fade-up">
          <div className="relative mx-auto w-full max-w-sm aspect-[3/4] overflow-hidden rounded-[2rem] shadow-soft sm:max-w-md sm:aspect-[4/5] sm:rounded-[2.5rem]">
            <img src={heroImage} alt="Romantic roses" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 via-transparent to-white/30" />
          </div>
          <img
            src="/images/heart.svg"
            alt=""
            className="pointer-events-none absolute -right-3 -top-4 h-16 w-16 opacity-30 sm:-right-4 sm:-top-6 sm:h-20 sm:w-20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
