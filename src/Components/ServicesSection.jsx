import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import content from "../../content.json";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1100px] mx-auto my-16 px-4">
      {content.serviceStages.map((stage, index) => (
        <div
          key={index}
          className="bg-white border p-6 md:p-8 rounded-3xl shadow-lg my-6 transition-all duration-500 ease-in-out"
        >
          {/* Başlık ve Açıklama */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleDetails(index)}
          >
            <h2 className="text-[#1e3a8a] text-2xl font-bold">{stage.stage}</h2>
            <span>
              {activeIndex === index ? (
                <FaChevronUp className="text-[#1e3a8a] w-6 h-6 transition-transform duration-300" />
              ) : (
                <FaChevronDown className="text-[#1e3a8a] w-6 h-6 transition-transform duration-300" />
              )}
            </span>
          </div>
          <p
            onClick={() => toggleDetails(index)}
            className="text-gray-700 text-lg mt-2 cursor-pointer"
          >
            {stage.description}
          </p>

          {/* Details Açılır Kısmı */}
          <div
            className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="mt-4 space-y-4 border-t pt-4">
              {stage.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="pl-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {detail.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
