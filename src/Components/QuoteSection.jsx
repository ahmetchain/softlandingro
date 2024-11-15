import content from "../../content.json";
import bg from "../assets/4.png";
const QuoteSection = () => {
  return (
    <div className="w-full h-auto mt-10 lg:mt-0 mb-10 px-4">
      <div className="relative flex flex-col items-center md:flex-row md:justify-center gap-8 md:h-[520px]">
        {/* Görüntü Kartı */}
        <div className="z-10 rounded-[24px] overflow-hidden shadow-lg w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-[250px] sm:h-[300px] md:h-[350px]">
          <img
            src={bg}
            alt="Sunset over water with birds"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Alıntı Metni */}
        <div className="max-w-full md:max-w-[500px] text-center md:text-left p-4 md:p-0">
          <div className="rounded-lg shadow-sm">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              {content.quote.text}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
              {content.quote.author}
            </p>
          </div>
        </div>

        <div
          className="hidden md:block absolute bottom-0 left-10 lg:left-56"
          style={{
            backgroundImage:
              "url('https://www.softlandingtr.com/wp-content/uploads/2024/06/11526-2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "250px",
            height: "250px",
            opacity: "0.7",
            filter: "hue-rotate(90deg) saturate(200%)", // Renk tonunu değiştirmek için
          }}
        />
      </div>
    </div>
  );
};

export default QuoteSection;
