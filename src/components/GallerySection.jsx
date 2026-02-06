import herOne from "../assets/images/her-1.jpg";
import herTwo from "../assets/images/her-2.jpg";
import herThree from "../assets/images/her-3.jpg";
import herFour from "../assets/images/her-4.jpg";
import herFive from "../assets/images/her-5.jpg";

const GallerySection = () => {
  const images = [
    { src: herOne, alt: "Her smile", title: "Her Smile" },
    { src: herTwo, alt: "Her laughter", title: "Her Laughter" },
    { src: herThree, alt: "Her gentle glance", title: "Her Glance" },
    { src: herFour, alt: "Her warm presence", title: "Her Presence" },
    { src: herFive, alt: "Her soft charm", title: "Her Charm" }
  ];

  const videos = [
    { src: "/videos/love-1.mp4", title: "Morning hello" },
    { src: "/videos/love-2.mp4", title: "Late night laugh" },
    { src: "/videos/love-3.mp4", title: "A sweet message" },
    { src: "/videos/love-4.mp4", title: "Our tiny rituals" },
    { src: "/videos/love-5.mp4", title: "A day together" },
    { src: "/videos/love-6.mp4", title: "Missing you" },
    { src: "/videos/love-7.mp4", title: "Always us" }
  ];

  return (
    <section className="bg-white/80 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center animate-fade-up sm:px-6">
        <p className="font-script text-2xl text-rose-500 sm:text-3xl md:text-4xl">Moments I Hold Close</p>
        <h2 className="mt-2 text-2xl font-semibold text-rose-900 sm:text-3xl md:text-4xl">Our Little Gallery</h2>
        <p className="mt-4 text-sm text-rose-600 sm:text-base md:text-lg">
          Every photo is a promise that we will make more memories together.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {images.map((image) => (
            <div
              key={image.alt}
              className="group relative overflow-hidden rounded-2xl bg-rose-50 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_40px_-28px_rgba(190,18,60,0.55)] sm:rounded-3xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-48 md:h-52"
              />
              <div className="absolute bottom-3 left-3 rounded-2xl bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md sm:px-4 sm:py-2 sm:text-sm">
                {image.title}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-left">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-rose-500 sm:text-3xl">Video Letters</p>
              <h3 className="mt-1 text-xl font-semibold text-rose-900 sm:text-2xl">Little Clips of Us</h3>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-rose-400">Swipe to explore</span>
          </div>

          <div className="mt-6 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing">
            {videos.map((video) => (
              <div
                key={video.title}
                className="group min-w-[220px] snap-start overflow-hidden rounded-2xl bg-rose-50 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_30px_-22px_rgba(190,18,60,0.55)] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px]"
              >
                <div className="aspect-[9/16] w-full overflow-hidden">
                  <video
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    src={video.src}
                    controls
                    preload="metadata"
                  />
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-rose-700">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
