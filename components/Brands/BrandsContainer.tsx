import React from "react";
import Brands from "./Brands";
import Link from "next/link";

const BrandsContainer = () => {
  return (
    <div className="circle-second relative z-10 overflow-hidden bg-dark-gunmetal py-[6.25rem] text-police-blue ">
      <div className="container grid max-w-[37.5rem] gap-[2.5625rem] pl-[1.125rem] text-white lg:grid-cols-2">
        <div className="text-align order-1 flex flex-col items-center lg:order-none lg:items-start">
          <h2 className="subtitle font-serif">Who we work with</h2>
          <p className="content | mb-[2rem] mt-[1.5rem] max-w-[27.8125rem] text-ghost-white opacity-70">
            {/* eslint-disable-next-line max-len */}
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            href="/about"
            className="p-btn-aux controller controller-white block"
          >
            About Us
          </Link>
        </div>
        <Brands imageColor="filter-white" />
      </div>
    </div>
  );
};

export default BrandsContainer;
