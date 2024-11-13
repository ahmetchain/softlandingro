import { FaPaperPlane, FaBuilding, FaGlobe, FaComments } from "react-icons/fa";
import content from "../../content.json";
const StepsSection = () => {
  const icons = [
    <FaPaperPlane className="text-[#1e3a8a] w-12 h-12 mb-4" />,
    <FaBuilding className="text-[#1e3a8a] w-12 h-12 mb-4" />,
    <FaGlobe className="text-[#1e3a8a] w-12 h-12 mb-4" />,
    <FaComments className="text-[#1e3a8a] w-12 h-12 mb-4" />,
  ];
  return (
    <div className="max-w-[1320px] mx-auto my-16 px-4 text-left text-lg sm:text-xl">
      {/* Üst Metin */}
      <p className="mb-4">{content.howToStartDescription}</p>
      <p className="font-semibold mb-8 sm:mb-12">
        Soft Landing Romania operates through four straightforward steps:
      </p>

      {/* Adımlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {content.steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl text-[#1e3a8a] mb-3">
              {icons[index]}
            </div>
            <h3 className="text-2xl sm:text-3xl text-[#1e3a8a]">{step.step}</h3>
            <p className="text-base sm:text-lg mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
