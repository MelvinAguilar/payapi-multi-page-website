"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { contactSchema } from "@/validations/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Form/Input";
import Brands from "../Brands/Brands";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { toast } from "sonner";

type FormValues = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
  announcements: boolean;
};

const ContactContainer = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    toast.success("Message sent successfully");
    reset();
  };

  return (
    <div className="container pb-12">
      <FadeIn
        as="h1"
        className="subtitle mx-auto my-12 max-w-[25ch] text-center font-serif lg:mx-0 lg:text-start"
        withoutViewport
      >
        Submit a help request and we’ll get in touch shortly.
      </FadeIn>

      <FadeInStagger
        className="grid gap-6 lg:grid-cols-2"
        faster
        withoutViewport
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            innerRef={register("name")}
            ariaLabel="Name"
            placeholder="Name"
            errors={errors.name}
          />
          <Input
            innerRef={register("email")}
            type="email"
            ariaLabel="Email"
            placeholder="Email Address"
            errors={errors.email}
          />
          <Input
            innerRef={register("company")}
            ariaLabel="Company"
            placeholder="Company Name"
            errors={errors.company}
          />
          <Input
            innerRef={register("title")}
            ariaLabel="Title"
            placeholder="Title"
            errors={errors.title}
          />
          <Input
            innerRef={register("message")}
            ariaLabel="Message"
            inputType="textarea"
            placeholder="Message"
            errors={errors.message}
          />

          <FadeIn className="relative mx-5 my-8 flex items-center gap-4">
            <input
              type="checkbox"
              id="announcements"
              {...register("announcements")}
            />
            <label
              htmlFor="announcements"
              className="max-w-[48ch] cursor-pointer"
            >
              Stay up-to-date with company announcements and updates to our API
            </label>
          </FadeIn>

          <FadeIn
            as="button"
            type="submit"
            className="p-btn-aux controller controller-dark block"
            withoutViewport
          >
            Submit
          </FadeIn>
        </form>
        <div className="pb-16 text-center lg:pb-0 lg:pt-[10.9375rem] lg:text-start">
          <FadeIn
            as="p"
            className="subtitle-auz mx-auto mb-6 max-w-[45ch] font-serif lg:mx-0"
            withoutViewport
          >
            Join the thousands of innovators that are already building with us
          </FadeIn>
          <Brands />
        </div>
      </FadeInStagger>
    </div>
  );
};

export default ContactContainer;
