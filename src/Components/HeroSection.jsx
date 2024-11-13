import React from "react";
import content from "../../content.json";

const HeroSection = () => {
  return (
    <div className="w-full bg-white mt-[70px]">
      <div className="flex flex-col items-center mx-auto md:flex-row max-w-[1320px] md:h-[400px] p-4">
        <div className="text-center md:text-left md:w-[800px]">
          <h1 className="text-2xl sm:text-3xl md:text-[43px] font-bold text-[#02094d] leading-loose">
            {content.tagline}
          </h1>
          <h1 className="text-2xl  lg:mt-2 sm:text-3xl md:text-[43px] font-bold text-[#02094d] leading-loose">
            {content.tagline2}
          </h1>
          <h1 className="text-2xl  lg:mt-2 sm:text-3xl md:text-[43px] font-bold text-[#02094d] leading-loose">
            {content.tagline3}
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600">
            {content.introText}
          </p>
        </div>

        <div className="hidden md:flex justify-center md:ml-20 mt-8 md:mt-0">
          <div className="relative w-[180px] h-[180px] lg:w-[350px] lg:h-[350px]">
            <lottie-player
              src="https://lottie.host/bbb0d610-bb62-476d-857f-51f1185330aa/QMx6o9OZrK.json"
              background="transparent"
              speed="0.4"
              loop
              autoplay
              style={{ position: "absolute", width: "100%", height: "100%" }}
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
