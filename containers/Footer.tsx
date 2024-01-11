import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

const Footer = () => {
  return (
    <FadeInStagger
      as="footer"
      className="bg-dark-gunmetal py-[1.9375rem]"
      faster
      withoutViewport
    >
      <div className="container flex flex-col items-center gap-8 md:flex-row md:gap-[4rem]">
        <FadeIn withoutViewport multipage>
          <Image
            src="/shared/desktop/logo.svg"
            alt="PayApi"
            width={135}
            height={38}
            className="filter-white"
          />
        </FadeIn>
        <nav aria-label="Footer" className="w-full">
          <ul
            role="list"
            className="flex flex-col items-center gap-6 text-[0.9375rem] font-bold text-ghost-white md:flex-row md:gap-[2.5rem]"
          >
            <FadeIn as="li" role="listitem" withoutViewport multipage>
              <Link
                href="/pricing"
                className="opacity-70 transition-all hover:opacity-100"
              >
                Pricing
              </Link>
            </FadeIn>
            <FadeIn as="li" role="listitem" withoutViewport multipage>
              <Link
                href="/about"
                className="opacity-70 transition-all hover:opacity-100"
              >
                About
              </Link>
            </FadeIn>
            <FadeIn as="li" role="listitem" withoutViewport multipage>
              <Link
                href="/contact"
                className="opacity-70 transition-all hover:opacity-100"
              >
                Contact
              </Link>
            </FadeIn>
          </ul>
        </nav>

        <nav aria-label="Social media">
          <ul role="list" className="flex items-center gap-[1.5188rem]">
            <FadeIn as="li" role="listitem" withoutViewport multipage>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="block"
              >
                <Image
                  src="/shared/desktop/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:filter-pink max-w-fit transition-all"
                />
              </a>
            </FadeIn>
            <FadeIn as="li" role="listitem" withoutViewport multipage>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="block"
              >
                <Image
                  src="/shared/desktop/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="hover:filter-pink max-w-fit transition-all"
                />
              </a>
            </FadeIn>
            <FadeIn as="li" role="listitem" withoutViewport multipage>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                className="block"
              >
                <Image
                  src="/shared/desktop/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="hover:filter-pink max-w-fit transition-all"
                />
              </a>
            </FadeIn>
          </ul>
        </nav>
      </div>
    </FadeInStagger>
  );
};

export default Footer;
