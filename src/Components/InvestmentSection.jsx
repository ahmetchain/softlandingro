import content from "../../content.json";
import bg from "../assets/1.jpeg";
const InvestmentSection = () => {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bg})`, // Arka plan resmini burada ayarlıyoruz
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#02094d] opacity-90"></div>

      {/* Content */}
      <div className="relative w-full max-w-[1320px] mx-auto py-10 px-4 sm:px-6 lg:py-20">
        <div className="text-white">
          {/* Header Section */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {content.whyInvestHeading}
          </h1>

          {/* Main Description */}
          <p className="text-lg sm:text-xl leading-relaxed mb-10 sm:mb-16 max-w-3xl">
            {content.whyInvestDescription}
          </p>

          {/* Advantages Section */}
          <div className="mb-6 mt-10 sm:mt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-8 sm:mb-12">
              {content.advantagesHeading}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 sm:gap-y-16 lg:gap-y-20">
            {content.advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-gray-900 text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;
