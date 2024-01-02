import React from "react";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../FadeIn";

type BrandsProps = {
  imageColor?: string;
};

const Brands = ({ imageColor = "" }: BrandsProps) => {
  const brands = [
    {
      src: "/shared/desktop/tesla.svg",
      alt: "Tesla",
      width: 129,
      height: 17,
      styles: "md:justify-self-start",
    },
    {
      src: "/shared/desktop/microsoft.svg",
      alt: "Microsoft",
      width: 145,
      height: 31,
      styles: "md:justify-self-center md:mr-[0.5625rem]",
    },
    {
      src: "/shared/desktop/hewlett-packard.svg",
      alt: "Hewlett Packard",
      width: 140,
      height: 27,
      styles: "md:justify-self-end",
    },
    {
      src: "/shared/desktop/oracle.svg",
      alt: "Oracle",
      width: 131,
      height: 17,
      styles: "md:justify-self-start",
    },
    {
      src: "/shared/desktop/google.svg",
      alt: "Google",
      width: 96,
      height: 33,
      styles: "md:justify-self-center md:mr-[0.5625rem]",
    },
    {
      src: "/shared/desktop/nvidia.svg",
      alt: "Nvidia",
      width: 137,
      height: 26,
      styles: "md:justify-self-end",
    },
  ];

  return (
    <FadeInStagger
      as="ul"
      faster
      className="grid grid-cols-2 content-center items-center justify-center gap-x-[1.875rem] gap-y-[2.4375rem] md:grid-cols-3"
    >
      {brands.map((brand) => (
        <FadeIn
          as="li"
          key={brand.alt}
          className={`mx-auto w-fit md:mx-0 ${brand.styles}`}
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={brand.height}
            className={imageColor}
          />
        </FadeIn>
      ))}
    </FadeInStagger>
  );
};

export default Brands;
