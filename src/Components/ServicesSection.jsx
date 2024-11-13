import { FaFileAlt, FaWrench, FaCheckCircle, FaCogs } from "react-icons/fa";
import content from "../../content.json";
const ServicesSection = () => {
  const icons = [
    <FaFileAlt className="w-12 h-12 text-white" />,
    <FaWrench className="w-12 h-12 text-white" />,
    <FaCheckCircle className="w-12 h-12 text-white" />,
    <FaCogs className="w-12 h-12 text-white" />,
  ];
  return (
    <div className="max-w-[1320px] mx-auto my-16 px-4 relative">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sol Bilgi Kartı */}
        <div className="bg-white border p-6 md:p-8 rounded-3xl shadow-lg md:w-[540px] md:h-[370px] md:relative md:left-20 md:top-24 z-10">
          <ul className="text-gray-700 space-y-4">
            {content.serviceStages.map((stage, index) => (
              <li key={index} className="flex items-start text-lg sm:text-xl">
                <span className="mr-2 text-xl sm:text-2xl">•</span>
                <p>
                  <strong>{stage.stage}:</strong> {stage.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Sağ Bilgi Kartları */}
        <div className="bg-[#1e3a8a] text-white p-6 md:p-8 rounded-3xl w-full md:w-[800px] space-y-8 md:pl-20">
          <p className="text-lg sm:text-xl mb-6 md:mb-8">
            {content.servicesDescription}
          </p>
          {content.servicesStagesRight.map((stage, index) => (
            <div key={index} className="flex items-start gap-4">
              {icons[index]}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {stage.stage}
                </h3>
                <p className="mt-1 sm:mt-2 text-lg sm:text-xl">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
