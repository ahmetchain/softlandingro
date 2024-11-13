import React from "react";
import { FaGlobe, FaRocket } from "react-icons/fa";
import content from "../../content.json";

const HeroSection = () => {
  return (
    <div className="w-full bg-white mt-[70px]">
      <div className="flex flex-col items-center mx-auto md:flex-row max-w-[1320px] md:h-[400px] p-4">
        {/* Başlık ve Giriş Metni */}
        <div className="text-center md:text-left md:w-[800px]">
          <h1 className="text-2xl sm:text-3xl md:text-[43px] font-bold text-[#02094d] leading-tight">
            {content.tagline}
          </h1>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600">
            {content.introText}
          </p>
        </div>

        {/* Yalnızca Dünya Simgesi (Mobilde Gizli) */}
        <div className="hidden md:flex justify-center md:ml-20 mt-8 md:mt-0">
          <div className="relative w-[180px] h-[180px] lg:w-[250px] lg:h-[250px]">
            <div className="rounded-full w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-[#02094d] shadow-lg">
              <FaGlobe className="text-white text-[60px] lg:text-[80px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
