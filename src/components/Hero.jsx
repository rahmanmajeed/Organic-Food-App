import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="w-full">
        <img
          src="./hero-banner.png"
          alt="hero"
          className="w-full min-h-[300px] object-cover md:min-h-[400px] lg:min-h-[500px]"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-10 max-w-2xl">
        <h1 className="text-3xl text-[#1F1F1F] md:text-4xl font-bold">
          Support Your Local Artisans
        </h1>
        <p className="text-lg mt-2 text-[#1F1F1F]">
          Discover brands and their stories
        </p>
        <button className="mt-4 px-6 py-3 bg-[#FF8126] text-white font-medium rounded-md transition">
          Browse brands
        </button>
      </div>
    </section>
  );
};

export default Hero;
