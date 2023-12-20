import React, { useState, useEffect } from "react";

const useResponsiveMenuState = (): [boolean, Function] => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(min-width: 48rem)");
      const changeState = () => {
        if (mediaQuery.matches) {
          setIsMenuOpen(false);
        }
      };
      mediaQuery.addEventListener("change", changeState);
      return () => mediaQuery.removeEventListener("change", changeState);
    }
  }, []);

  return [isMenuOpen, setIsMenuOpen];
};

export default useResponsiveMenuState;
