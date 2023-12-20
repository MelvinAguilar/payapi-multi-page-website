import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  innerRef: UseFormRegisterReturn;
  name: string;
  type?: string;
  inputType?: "input" | "textarea";
  placeholder: string;
  className?: string;
  ariaLabel?: string;
  errors: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  innerRef,
  name,
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

  return (
    <>
      <InputComponent
        {...innerRef}
        {...additionalProps}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-invalid={ariaInvalid}
        aria-describedby={`${name}-error`}
        className={`w-full border-b border-police-blue bg-transparent mt-4 py-3 px-5 ${className}`}
      />
      <div aria-live="polite" aria-atomic="true">
        {errors && errors.message && (
          <p
            id={`${name}-error`}
            role="alert"
            className="text-irresistible mx-5 mt-2 text-sm"
          >
            {errors.message || ""}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
