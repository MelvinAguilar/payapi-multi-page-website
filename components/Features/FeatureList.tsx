import React from "react";
import Image from "next/image";

const FeatureList = () => {
  const features = [
    {
      src: "/home/desktop/icon-personal-finances.svg",
      title: "Personal Finances",
      content:
        "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
    },
    {
      src: "/home/desktop/icon-banking-and-coverage.svg",
      title: "Banking & Coverage",
      content:
        "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
    },
    {
      src: "/home/desktop/icon-consumer-payments.svg",
      title: "Consumer Payments",
      content:
        "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    },
  ];

  return (
    <ul className="mb-[6rem] mt-[8.8481rem] flex flex-wrap justify-center gap-[1.875rem]">
      {features.map((feature, index) => (
        <li
          key={feature.title}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Image
            src={feature.src}
            alt={feature.title}
            width={106}
            height={106}
            className={index === 0 ? "ml-[-0.75rem]" : ""}
          />
          <h3 className="feat-title mt-4">{feature.title}</h3>
          <p className="feat-content max-w-[21.875rem] text-slate-gray">
            {feature.content}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
