import React from "react";
import Pricing from "./Pricing";

const PricingContainer = () => {
  const pricingPlans = [
    {
      title: "Free Plan",
      description:
        "Build and test using our core set of products with up to 100 API requests",
      price: 0,
      features: [
        {
          title: "Transactions",
          enabled: true,
        },
        {
          title: "Auth",
          enabled: true,
        },
        {
          title: "Identity",
          enabled: true,
        },
        {
          title: "Investments",
          enabled: false,
        },
        {
          title: "Assets",
          enabled: false,
        },
        {
          title: "Liabilities",
          enabled: false,
        },
        {
          title: "Income",
          enabled: false,
        },
      ],
    },
    {
      title: "Basic Plan",
      description:
        "Launch your project with unlimited requests and no contractual minimums",
      price: 249,
      features: [
        {
          title: "Transactions",
          enabled: true,
        },
        {
          title: "Auth",
          enabled: true,
        },
        {
          title: "Identity",
          enabled: true,
        },
        {
          title: "Investments",
          enabled: true,
        },
        {
          title: "Assets",
          enabled: true,
        },
        {
          title: "Liabilities",
          enabled: false,
        },
        {
          title: "Income",
          enabled: false,
        },
      ],
    },
    {
      title: "Premium Plan",
      description:
        "Get tailored solutions, volume pricing, and dedicated support for your team",
      price: 499,
      features: [
        {
          title: "Transactions",
          enabled: true,
        },
        {
          title: "Auth",
          enabled: true,
        },
        {
          title: "Identity",
          enabled: true,
        },
        {
          title: "Investments",
          enabled: true,
        },
        {
          title: "Assets",
          enabled: true,
        },
        {
          title: "Liabilities",
          enabled: true,
        },
        {
          title: "Income",
          enabled: true,
        },
      ],
    },
  ];

  return (
    <div className="container text-police-blue text-center md:text-left">
      <h1 className="text-center lg:text-start subtitle font-serif my-12">Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Pricing
            key={plan.title}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingContainer;
