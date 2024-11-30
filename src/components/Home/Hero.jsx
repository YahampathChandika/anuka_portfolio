import React from "react";
import heroImg from "../../assets/images/AN-2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center md:h-screen bg-cover bg-center bg-fixed md:-mt-32 pt-10 md:pt-0 px-6 md:px-20"
      style={{
        backgroundColor: "rgba(245, 252, 255, 100)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "70% 50%",
      }}
    >
      {/* Text Content */}
      <div className="relative text-center md:text-left w-full md:w-1/2 p-5 md:p-10 mx-auto z-10">
        <h1 className="text-deep-blue text-2xl md:text-5xl font-bold leading-tight mb-4">
          Hey!, I’m <span className="text-primary">Anuka</span>
        </h1>
        <p className="text-deep-blue text-sm md:text-xl mb-6">
          A Full-Stack Developer creating functional and aesthetic digital
          solutions.
        </p>
        <p className="text-deep-blue mb-6 text-xs md:text-lg italic">
          "Turning ideas into responsive, functional designs."
        </p>
        <button className="bg-primary text-white rounded-md px-4 py-2 text-sm md:text-base hover:bg-deep-blue transition">
          Get in touch
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center relative mx-auto z-10">
        <img src={heroImg} alt="Hero" className="w-4/5 md:w-5/6" />
      </div>
    </section>
  );
};

export default Hero;
