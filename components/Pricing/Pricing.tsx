import React from "react";

type Props = {
  title: string;
  description: string;
  price: number;
  features:
    | {
        title: string;
        enabled: boolean;
      }[]
    | undefined;
};

const Pricing = (props: Props) => {
  return (
    <section>
      <h2 className="subtitle-aux my-4 font-serif text-irresistible">
        {props.title}
      </h2>
      <p className="content">{props.description}</p>
      <p className="subtitle my-6 font-serif">${props.price.toFixed(2)}</p>

      <hr className="bg-slate-gray h-0.5" />
      <ul className="w-fit md:w-full lg:px-4 mx-auto py-8 flex flex-col gap-3">
        {props.features?.map((feature) => (
          <li
            key={feature.title}
            className={`plan-feature ${
              feature.enabled ? "feature-true" : "opacity-50"
            }`}
          >
            {feature.title}
          </li>
        ))}
      </ul>
      <hr className="bg-slate-gray h-0.5"/>

      <button className="p-btn controller controller-dark mt-8 mb-20">
        Request Access
      </button>
    </section>
  );
};

export default Pricing;
