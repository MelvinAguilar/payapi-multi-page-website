import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./Form/ContactForm";

const Hero = () => {
  return (
    <div className="circle | container grid pb-[4.7231rem] pt-[2.125rem] text-police-blue lg:grid-cols-[1.45fr_1fr]">
      <div className="flex justify-center lg:order-1">
        <Image
          src="/home/desktop/illustration-phone-mockup.svg"
          alt=""
          width={263}
          height={500}
          className="w-[8rem] md:w-[16.4375rem]"
        />
      </div>
      <div className="text-align mt-6 flex flex-col items-center justify-center lg:mt-0 lg:items-start">
        <h1 className="title mb-[2.9375rem] max-w-[15ch] font-serif tracking-title">
          Start building with our APIs for absolutely free.
        </h1>
        <ContactForm />

        <p className="ml-[1.6875rem] mt-4 text-[0.9375rem] leading-normal text-slate-gray">
          Have any questions?{" "}
          <Link href="/contact" className="font-bold">
            Contact Us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
