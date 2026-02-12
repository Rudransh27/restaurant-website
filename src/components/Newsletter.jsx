const Newsletter = () => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div
        className="relative overflow-hidden bg-[#7E3D5D] rounded-3xl shadow-xl px-6 py-10 md:px-14 md:py-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Stay in the loop with all things American cuisine!
          </h2>
          <p className="mb-8 text-purple-100 opacity-90 max-w-2xl mx-auto">
            Sign up for our newsletter to receive mouth-watering recipes, exclusive offers, and insider news. Don't miss out on the deliciousness!
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4 sm:flex-row justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Your email" 
            className="grow px-6 py-3 text-gray-800 transition-all bg-white border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300" />
            <button type="button" 
            className="px-8 py-3 font-bold text-[#7E3D5D] transition-transform bg-white rounded-full hover:scale-105 hover:bg-gray-100 cursor-pointer" >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-xs text-purple-200 opacity-60">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;