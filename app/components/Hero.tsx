import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-durai-light">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold text-durai-dark">
            duraiFish
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-durai-text">
            Fresh Catfish delivered to your doorstep Live, Smoked & Barbeque.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="/order"
              className="px-6 py-3 rounded-xl bg-durai-dark text-white font-semibold"
            >
              Order Now
            </a>
            <a
              href="#products"
              className="px-6 py-3 rounded-xl border border-durai-dark text-durai-dark font-semibold"
            >
              See Products
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <Image
            src="/kaido.jpg"
            alt="Fresh catfish"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
