import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import content from "../../content.json";
const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-10 px-6">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Sosyal Medya */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-4">
          <span className="text-lg font-semibold">
            {content.contactSection.followUs}
          </span>
          <div className="flex space-x-5">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FaTwitter className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="flex flex-col md:w-1/3 space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="w-6 h-6" />
            <span className="text-lg">
              {content.contactSection.headOffice.email}
            </span>
          </div>
          <div className="text-lg">
            <span className="font-semibold">Head Office</span>
            <p>{content.contactSection.headOffice.address}</p>
          </div>
        </div>
      </div>

      {/* Alt Metin */}
      <div className="text-center text-base text-gray-400 mt-10">
        <p>{content.contactSection.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
