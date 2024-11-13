import React from "react";

const TitleSection = ({ title }) => {
  return (
    <div className="h-[160px] w-full flex items-center justify-center border-y-2 border-gray-200">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-[#1e293b]">
        {title}
      </h2>
    </div>
  );
};

export default TitleSection;
