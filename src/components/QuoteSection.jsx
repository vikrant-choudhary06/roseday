const QuoteSection = () => {
  return (
    <section className="bg-gradient-to-r from-rose-100 via-rose-50 to-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center animate-fade-up sm:px-6">
        <p className="font-script text-2xl text-rose-500 sm:text-3xl md:text-4xl">Rose Day Quote</p>
        <blockquote className="mt-6 text-xl font-medium italic text-rose-800 sm:text-2xl md:text-3xl">
          "A rose for every smile you give me, even from miles away."
        </blockquote>
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-rose-400 sm:text-sm sm:tracking-[0.3em]">
          Always yours
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
