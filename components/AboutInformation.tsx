import React from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";

const AboutInformation = () => {
  return (
    <>
      <section className="!container-small my-12 max-w-[35rem] text-center md:max-w-[47.5rem] md:text-start">
        <FadeIn
          as="h1"
          className="subtitle mx-auto max-w-[23ch] text-center font-serif lg:mx-0 lg:text-start"
          withoutViewport
        >
          We empower innovators by delivering access to the financial system
        </FadeIn>

        <ul className="flex flex-col gap-12 py-12">
          <FadeIn
            as="li"
            className="grid gap-8 md:grid-cols-[0.3fr,1fr]"
            withoutViewport
          >
            <h2 className="subtitle-aux font-serif">Our Vision</h2>
            <p className="content">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </FadeIn>

          <FadeIn
            as="li"
            className="grid  gap-8 md:grid-cols-[0.3fr,1fr]"
            withoutViewport
          >
            <h2 className="subtitle-aux font-serif">Our Business</h2>
            <p className="content">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </FadeIn>
        </ul>
      </section>

      <picture>
        <source
          srcSet="/about/tablet/image-team-members.jpg"
          media="(min-width: 48rem)"
        />
        <source
          srcSet="/about/desktop/image-team-members.jpg"
          media="(min-width: 64rem)"
        />
        <img
          src="/about/mobile/image-team-members.jpg"
          alt="team members working together on a project"
          className="max-h-[43.75rem] w-full object-cover"
        />
      </picture>

      <section className="!container-small my-6 max-w-[35rem] text-center md:max-w-[47.5rem] md:text-start">
        <h2 className="sr-only">Team Members</h2>

        <FadeInStagger
          as="dl"
          className="grid gap-8 py-12 md:grid-cols-3"
          faster
          withoutViewport
        >
          <div>
            <FadeIn as="dl" withoutViewport>
              Team Members
            </FadeIn>
            <FadeIn
              as="dd"
              className="subtitle font-serif text-irresistible"
              withoutViewport
            >
              <span aria-hidden="true">300+</span>
              <span className="sr-only">More than 300</span>
            </FadeIn>
          </div>
          <div>
            <FadeIn as="dl" withoutViewport>
              Offices in the US
            </FadeIn>
            <FadeIn
              as="dd"
              className="subtitle font-serif text-irresistible"
              withoutViewport
            >
              3
            </FadeIn>
          </div>
          <div>
            <FadeIn as="dl" withoutViewport>
              Transactions analyzed
            </FadeIn>
            <FadeIn
              as="dd"
              className="subtitle font-serif text-irresistible"
              withoutViewport
            >
              <span aria-hidden="true">10M+</span>
              <span className="sr-only">More than 10 million</span>
            </FadeIn>
          </div>
        </FadeInStagger>
      </section>

      <section className="!container-small my-6 max-w-[35rem] text-center md:max-w-[47.5rem] md:text-start">
        <ul className="flex flex-col gap-12 pb-12">
          <FadeIn
            as="li"
            className="grid gap-8 md:grid-cols-[0.3fr,1fr]"
            withoutViewport
          >
            <h2 className="subtitle-aux font-serif">The Culture</h2>
            <p className="content">
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </FadeIn>
          <FadeIn
            as="li"
            className="grid gap-8 md:grid-cols-[0.3fr,1fr]"
            withoutViewport
          >
            <h2 className="subtitle-aux font-serif">The People</h2>
            <p className="content">
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </FadeIn>
        </ul>
      </section>
    </>
  );
};

export default AboutInformation;
