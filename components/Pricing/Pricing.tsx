import React from "react";
import { FadeIn, FadeInStagger } from "../FadeIn";

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
      <FadeIn
        as="h2"
        className="subtitle-aux my-4 font-serif text-irresistible"
        withoutViewport
      >
        {props.title}
      </FadeIn>
      <FadeIn as="p" className="content" withoutViewport>
        {props.description}
      </FadeIn>
      <FadeIn as="p" className="subtitle my-6 font-serif" withoutViewport>
        ${props.price.toFixed(2)}
      </FadeIn>

      <hr className="h-0.5 bg-slate-gray" />
      <FadeInStagger
        as="ul"
        className="mx-auto flex w-fit flex-col gap-3 py-8 md:w-full lg:px-4"
        faster
        withoutViewport
      >
        {props.features?.map((feature) => (
          <FadeIn
            as="li"
            key={feature.title}
            className={`plan-feature ${
              feature.enabled ? "feature-true" : "opacity-50"
            }`}
            withoutViewport
          >
            {feature.title}
          </FadeIn>
        ))}
      </FadeInStagger>
      <hr className="h-0.5 bg-slate-gray" />

      <FadeIn
        as="button"
        className="p-btn controller controller-dark mb-20 mt-8"
        withoutViewport
      >
        Request Access
      </FadeIn>
    </section>
  );
};

export default Pricing;
