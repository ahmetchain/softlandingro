import { AiOutlineLineChart } from "react-icons/ai";
import { FaDollarSign, FaShieldAlt,FaBriefcase, FaNetworkWired, FaBolt } from "react-icons/fa";
import content from "../../content.json";
const FeatureCards = () => {
  const icons = [
    <AiOutlineLineChart className="w-10 h-10 text-[#1e293b] mb-3" />,
    <FaDollarSign className="w-10 h-10 text-[#1e293b] mb-3" />,
    <FaShieldAlt className="w-10 h-10 text-[#1e293b] mb-3" />,
    <FaBriefcase className="w-10 h-10 text-[#1e293b] mb-3" />,
    <FaNetworkWired className="w-10 h-10 text-[#1e293b] mb-3" />,
    <FaBolt className="w-10 h-10 text-[#1e293b] mb-3" />,
  ];
  return (
    <div className="text-center max-w-[1320px] mx-auto my-16 px-4">
      <p className="mb-10 md:mb-16 text-left text-lg md:text-xl">
        {content.softLandingDescription}
      </p>

      {/* Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-12 md:gap-y-20">
        {content.benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.1)] p-6 sm:p-8"
          >
            <div className="flex flex-col items-center mb-4">
              {icons[index]}
              <h3 className="text-[#1e293b] text-2xl sm:text-3xl font-bold">
                {benefit.title}
              </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
