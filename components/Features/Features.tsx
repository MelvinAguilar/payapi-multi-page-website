import React from "react";
import Image from "next/image";
import FeatureList from "./FeatureList";
import { FadeIn } from "../FadeIn";

const Features = () => {
  return (
    <section className="container text-police-blue">
      <h2 className="sr-only">Features</h2>
      <FadeIn className="text-align my-12 flex flex-col items-center gap-8 lg:my-[9.375rem] lg:flex-row lg:gap-[7.8125rem]">
        <Image
          src="/home/desktop/illustration-easy-to-implement.svg"
          alt=""
          width={445}
          height={284}
          className="w-[21.875rem] shadow-image lg:w-[27.8125rem]"
        />
        <div className="w-full">
          <h3 className="subtitle mb-[1.5rem] font-serif">Easy to implement</h3>
          <p className="content | mx-auto max-w-[50ch] text-slate-gray lg:mx-0">
            {/* eslint-disable-next-line max-len */}
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </FadeIn>

      <FadeIn className="circle-third text-align relative flex flex-col items-center lg:flex-row-reverse ">
        <Image
          src="/home/desktop/illustration-simple-ui.svg"
          alt=""
          width={566}
          height={500}
          className="filter-drop w-[21.875rem] lg:w-[35.375rem]"
        />
        <div className="mt-8 w-full lg:mt-0">
          <h3 className="subtitle mb-[1.5rem] font-serif">Simple UI & UX</h3>
          <p className="content | mx-auto max-w-[50ch] text-slate-gray lg:mx-0">
            {/* eslint-disable-next-line max-len */}
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </FadeIn>

      <FeatureList />
    </section>
  );
};

export default Features;
