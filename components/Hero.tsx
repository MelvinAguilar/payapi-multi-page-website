import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./Form/ContactForm";
import { FadeIn } from "./FadeIn";

const Hero = () => {
  return (
    <div className="circle | container grid pb-[4.7231rem] pt-[2.125rem] text-police-blue lg:grid-cols-[1.45fr_1fr]">
      <FadeIn className="flex justify-center lg:order-1">
        <Image
          src="/home/desktop/illustration-phone-mockup.svg"
          alt=""
          width={263}
          height={500}
          className="w-[8rem] md:w-[16.4375rem]"
        />
      </FadeIn>
      <div className="text-align mt-6 flex flex-col items-center justify-center lg:mt-0 lg:items-start">
        <FadeIn
          as="h1"
          className="title mb-[2.9375rem] max-w-[15ch] font-serif tracking-title"
        >
          Start building with our APIs for absolutely free.
        </FadeIn>
        <ContactForm />

        <FadeIn
          as="p"
          className="ml-[1.6875rem] mt-4 text-[0.9375rem] leading-normal text-slate-gray"
        >
          Have any questions?{" "}
          <Link href="/contact" className="font-bold">
            Contact Us
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
