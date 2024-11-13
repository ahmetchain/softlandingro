import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import content from "../../content.json";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full py-3 sm:py-4 text-left text-[#1e3a8a] font-semibold focus:outline-none"
      >
        <FaChevronDown
          className={`mr-3 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <span className="text-lg sm:text-xl">{question}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="px-4 py-2 text-base sm:text-lg">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-8 sm:my-16 px-4">
      {content.knowledgeBaseAnswers.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default FAQSection;
