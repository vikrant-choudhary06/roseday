import herOne from "../assets/images/her-1.jpg";
import herTwo from "../assets/images/her-2.jpg";
import herThree from "../assets/images/her-3.jpg";

const MessageSection = () => {
  return (
    <section className="mt-8 py-12 sm:mt-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="animate-fade-up rounded-[1.75rem] bg-white/75 p-6 shadow-soft backdrop-blur-md sm:rounded-[2rem] sm:p-8 md:p-12">
          <p className="font-script text-2xl text-rose-500 sm:text-3xl md:text-4xl">My Love</p>
          <h2 className="mt-2 text-2xl font-semibold text-rose-900 sm:text-3xl md:text-4xl">A Note From My Heart</h2>
          <div className="mt-5 space-y-5 text-sm leading-relaxed text-rose-700 sm:mt-6 sm:text-base md:text-lg">
            <p>
              <span className="block">अपनी सांसों में महकता पाया है तुझे,</span>
              <span className="block">हर खवाब मे बुलाया है तुझे,</span>
              <span className="block">क्यू न करे याद तुझ को,</span>
              <span className="block">जब खुदा ने हमारे लिए बनाया है तुझे........!!!</span>
            </p>

            <p className="whitespace-pre-line">
              {`Neeti,
yeh rose sirf ek din ke liye nahi hai.
Jaise tum meri zindagi mein ho—
simple, khoobsurat, aur bahut khaas.

Main shayad zyada bolta nahi hoon,
par jo bhi ho,
tum mere liye hamesha special ho.
Aaj bhi… aur hamesha bhi.

🌹❤️`}
            </p>

            <p className="rounded-2xl bg-rose-100/80 px-4 py-3 text-center text-base font-semibold text-rose-700 sm:text-lg md:text-xl">
              JELDI SE MILNA HEI MUJHE
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <img
                src={herOne}
                alt="Sweet memory one"
                className="h-24 w-full rounded-2xl object-cover shadow-soft sm:h-28"
              />
              <img
                src={herTwo}
                alt="Sweet memory two"
                className="h-24 w-full rounded-2xl object-cover shadow-soft sm:h-28"
              />
              <img
                src={herThree}
                alt="Sweet memory three"
                className="h-24 w-full rounded-2xl object-cover shadow-soft sm:h-28"
              />
            </div>

            <p className="pt-2 text-center text-2xl font-semibold text-rose-800 sm:text-3xl md:text-4xl">
              {"\u2764"} I LOVE YOU MY MOTO NEETI {"\u2764"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
