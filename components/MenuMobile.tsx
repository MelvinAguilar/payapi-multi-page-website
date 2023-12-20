import React from "react";

interface MenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="absolute right-8 top-8 z-50 flex h-[1.15rem] w-7 flex-col justify-between md:hidden"
      aria-label="Navigation menu"
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
    >
      <span
        className="bar1 | z-10 h-0.5 w-7 transform bg-dark-gunmetal transition-all"
        aria-hidden="true"
      ></span>
      <span
        className="bar2 | z-10 h-0.5 w-7 bg-dark-gunmetal transition-all"
        aria-hidden="true"
      ></span>
      <span
        className="bar3 | z-10 h-0.5 w-7 transform bg-dark-gunmetal transition-all"
        aria-hidden="true"
      ></span>
    </button>
  );
};

export default Menu;
