import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-gunmetal py-[1.9375rem]">
      <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-[4rem]">
        <Image
          src="/shared/desktop/logo.svg"
          alt="PayApi"
          width={135}
          height={38}
          className="filter-white"
        />
        <nav aria-label="Footer" className="w-full">
          <ul className="flex flex-col items-center gap-6 text-[0.9375rem] font-bold text-ghost-white md:flex-row md:gap-[2.5rem]">
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
          </ul>
        </nav>

        <nav aria-label="Social media">
          <ul className="flex items-center gap-[1.5188rem]">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/shared/desktop/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="max-w-fit"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/shared/desktop/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="max-w-fit"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/shared/desktop/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="max-w-fit"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
