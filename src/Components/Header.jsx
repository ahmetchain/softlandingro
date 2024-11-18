import React, { useEffect, useState } from "react";
import Flag from "../assets/roman.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50 || window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(true);
      } else {
        // Scrolling up
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
  className={`fixed border-b-[2px] py-5 top-0 left-0 w-full z-30 flex justify-between items-center lg:px-32 md:px-16 px-4 transition-all duration-300 ${
    scrolled ? "bg-white shadow-md" : ""
  } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
>
  <div className="flex relative items-center lg:mx-auto lg:w-[1320px]">
    <h1 className="text-[13px] relative sm:text-sm md:text-base lg:text-xl font-semibold text-[#02094d] flex items-center">
      Soft Landing RO -
      <span className="ml-2">
        <img src={Flag} alt="Romania Flag" className="w-4 md:w-5" />
      </span>
    </h1>
  </div>
</div>
  );
}
