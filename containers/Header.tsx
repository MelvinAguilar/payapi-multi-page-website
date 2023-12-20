"use client";
import Image from "next/image";
import Link from "next/link";
import MenuMobile from "@/components/MenuMobile";
import useResponsiveMenuState from "@/hooks/useResponsiveMenuState";
import React, { useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useResponsiveMenuState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("blocked");
    } else {
      document.body.classList.remove("blocked");
    }
  }, [isMenuOpen]);

  return (
    <header className="container flex items-center gap-[4rem] py-[2.5rem] ">
      <Link href="/">
        <Image
          src="/shared/desktop/logo.svg"
          alt="PayApi"
          width={135}
          height={38}
          className="max-w-[8.4375rem]"
        />
      </Link>
      <MenuMobile toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <nav aria-label="Main" onClick={toggleMenu}>
        <ul
          id="navbar-menu"
          className="menu-options z-20 flex gap-[2.5rem] text-[0.9375rem] font-bold"
          onClick={handleMenuClick}
        >
          <li>
            <Link href="/pricing" className="opacity-70 hover:opacity-100">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="opacity-70 hover:opacity-100">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="opacity-70 hover:opacity-100">
              Contact
            </Link>
          </li>
          <li className="md:ml-auto">
            <Link
              href="/contact"
              className="p-btn controller controller-purple | block shadow-button "
            >
              Schedule a Demo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
