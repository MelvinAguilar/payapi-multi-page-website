"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@/validations/EmailSchema";

type FormValue = {
  email: string;
};

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[27.8125rem]"
    >
      <div className="relative w-full">
        <input
          type="text"
          aria-label="Email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={`email-error`}
          {...register("email")}
          placeholder="Enter email address"
          className="p-input form-input | w-full rounded-full bg-white  shadow-button"
        />
        <button
          type="submit"
          className="p-btn controller controller-purple right-0 top-0 mt-4 w-full md:absolute md:mt-0"
        >
          {" "}
          Schedule a Demo{" "}
        </button>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {errors && errors.email && (
          <p
            id={`email-error`}
            role="alert"
            className="mx-5 mt-2 text-sm text-irresistible"
          >
            {errors.email.message || ""}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
