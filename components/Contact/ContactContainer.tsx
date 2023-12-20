"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { contactSchema } from "@/validations/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Form/Input";
import Brands from "../Brands/Brands";

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
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="subtitle mx-auto my-12 max-w-[25ch] text-center font-serif lg:mx-0 lg:text-start">
        Submit a help request and we’ll get in touch shortly.
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            innerRef={register("name")}
            name="name"
            ariaLabel="Name"
            placeholder="Name"
            errors={errors.name}
          />
          <Input
            innerRef={register("email")}
            name="email"
            type="email"
            ariaLabel="Email"
            placeholder="Email Address"
            errors={errors.email}
          />
          <Input
            innerRef={register("company")}
            name="company"
            ariaLabel="Company"
            placeholder="Company Name"
            errors={errors.company}
          />
          <Input
            innerRef={register("title")}
            name="title"
            ariaLabel="Title"
            placeholder="Title"
            errors={errors.title}
          />
          <Input
            innerRef={register("message")}
            name="message"
            ariaLabel="Message"
            inputType="textarea"
            placeholder="Message"
            errors={errors.message}
          />

          <div className="relative mx-5 my-8 flex items-center gap-4">
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
          </div>

          <button
            type="submit"
            className="p-btn-aux controller controller-dark block"
          >
            Submit
          </button>
        </form>
        <div className="pb-16 text-center lg:pb-0 lg:pt-[10.9375rem] lg:text-start">
          <p className="subtitle-auz mx-auto mb-6 max-w-[45ch] font-serif lg:mx-0">
            Join the thousands of innovators that are already building with us
          </p>
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
