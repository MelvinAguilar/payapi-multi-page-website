import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FadeIn, PresenceAnimation } from "../FadeIn";
import { AnimatePresence } from "framer-motion";

interface InputProps {
  innerRef: UseFormRegisterReturn;
  type?: string;
  inputType?: "input" | "textarea";
  placeholder: string;
  className?: string;
  ariaLabel?: string;
  errors: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  innerRef,
  type = "text",
  inputType = "input",
  placeholder,
  className = "",
  ariaLabel = undefined,
  errors,
}) => {
  const ariaInvalid = errors ? "true" : "false";
  const additionalProps = ariaLabel ? { "aria-label": ariaLabel } : {};

  const InputComponent = inputType === "textarea" ? "textarea" : "input";
  const name = innerRef.name;

  return (
    <FadeIn>
      <InputComponent
        {...innerRef}
        {...additionalProps} // @ts-ignore
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-invalid={ariaInvalid}
        aria-describedby={`${name}-error`}
        className={`mt-4 w-full border-b border-police-blue bg-transparent px-5 py-3 ${className}`}
      />
      <div aria-live="polite" aria-atomic="true">
        <AnimatePresence>
          {errors && errors.message && (
            <PresenceAnimation
              as="p"
              id={`${name}-error`}
              role="alert"
              className="mx-5 mt-2 text-sm text-irresistible"
            >
              {errors.message || ""}
            </PresenceAnimation>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
};

export default Input;
