import { useState } from "react";
import { CrossIcon, Logo, MenuIcon } from "./NavIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 w-full opacity-70 bg-black px-4 py-1">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex md:flex-row md:items-center md:gap-20">
          <span className="cursor-pointer font-poppins text-lg text-white">
            Home
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            हमारे बारे में
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            कार्यक्रमों
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            Get Involved
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            कहानियों
          </span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <CrossIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-2 gap-2">
          <span className="cursor-pointer font-poppins text-lg text-white">
            Home
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            हमारे बारे में
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            कार्यक्रमों
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            Get Involved
          </span>
          <span className="cursor-pointer font-poppins text-lg text-white">
            कहानियों
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
